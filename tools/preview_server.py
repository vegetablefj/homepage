"""Serve the local website with refresh support that never enters site output."""

import argparse
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from io import BytesIO
import json
import os
from pathlib import Path
import re
import threading
import time
from urllib.parse import parse_qs, urlsplit


ROOT = Path(__file__).resolve().parent.parent
PROTOCOL = "pretext-local-preview-v1"
CLIENT_TTL = 90
CLIENT_SCRIPT = r"""(() => {
  const reloadClientKey = "pretext-local-preview-reloading-client";
  let client;
  try {
    client = sessionStorage.getItem(reloadClientKey);
    sessionStorage.removeItem(reloadClientKey);
  } catch (_) {}
  client ||= window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
  const scrollKey = `pretext-local-preview-scroll:${location.pathname}`;
  let revision;
  let loading = false;
  let storedScroll;
  window.addEventListener("pagehide", event => {
    // Retain the same heartbeat through our own reload, but forget closed tabs.
    if (!event.persisted && !loading) {
      try {
        navigator.sendBeacon(`/__preview/disconnect?client=${encodeURIComponent(client)}`);
      } catch (_) {}
    }
  });
  try {
    storedScroll = JSON.parse(sessionStorage.getItem(scrollKey) || "null");
    sessionStorage.removeItem(scrollKey);
  } catch (_) {}
  if (storedScroll) {
    const restore = () => window.scrollTo(storedScroll.x, storedScroll.y);
    window.addEventListener("load", () => {
      restore();
      document.fonts?.ready.then(restore);
      window.MathJax?.startup?.promise?.then(restore);
    }, {once: true});
  }
  async function poll() {
    if (loading) return;
    try {
      const query = new URLSearchParams({client, path: location.pathname});
      const response = await fetch(`/__preview/status?${query}`, {cache: "no-store"});
      if (!response.ok) return;
      const status = await response.json();
      const next = status.revision || null;
      if (revision === undefined) {
        revision = next;
        return;
      }
      if (next && next !== revision && status.note_prefix &&
          location.pathname.startsWith(status.note_prefix)) {
        loading = true;
        try {
          sessionStorage.setItem(scrollKey, JSON.stringify({x: scrollX, y: scrollY}));
          sessionStorage.setItem(reloadClientKey, client);
        } catch (_) {}
        location.reload();
        return;
      }
      revision = next;
    } catch (_) {
      // A stopped preview server must not interrupt reading an open page.
    }
  }
  poll();
  window.setInterval(poll, 1000);
})();
"""
INJECTION = b'<script src="/__preview/client.js" data-pretext-local-preview defer></script>'


def atomic_json(path, contents):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + f".{os.getpid()}.tmp")
    temporary.write_text(json.dumps(contents, indent=2) + "\n", encoding="utf-8")
    os.replace(temporary, path)


class PreviewServer(ThreadingHTTPServer):
    daemon_threads = True

    def __init__(self, root=ROOT, port=8765):
        self.root = Path(root).resolve()
        self.clients = {}
        self.client_lock = threading.Lock()
        super().__init__(("127.0.0.1", port), partial(PreviewHandler, directory=str(self.root)))

    def information(self):
        return {"protocol": PROTOCOL, "root": str(self.root),
                "port": self.server_port, "pid": os.getpid()}

    def heartbeat(self, client, path):
        now = time.monotonic()
        with self.client_lock:
            self.clients = {key: value for key, value in self.clients.items()
                            if now - value["seen"] < CLIENT_TTL}
            if client and len(client) <= 128 and path.startswith("/") and len(path) < 4096:
                self.clients[client] = {"path": path, "seen": now}
            return sorted({value["path"] for value in self.clients.values()})

    def build_status(self):
        report = self.root / ".build/reports/editor-preview.json"
        try:
            result = json.loads(report.read_text(encoding="utf-8"))
            if not isinstance(result, dict):
                return {}
            prefix = result.get("note_prefix", "")
            if not prefix.startswith("/") or not prefix.endswith("/"):
                return {}
            # Only the successful build marker is served to the browser.
            return {key: result.get(key) for key in
                    ("revision", "target", "url", "note_prefix", "built_at")}
        except (OSError, ValueError, AttributeError):
            return {}

    def disconnect(self, client):
        with self.client_lock:
            self.clients.pop(client, None)


class PreviewHandler(SimpleHTTPRequestHandler):
    def _bytes(self, data, content_type):
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        return BytesIO(data)

    def _json(self, value):
        return self._bytes(json.dumps(value).encode("utf-8"), "application/json; charset=utf-8")

    def send_head(self):
        request = urlsplit(self.path)
        if request.path == "/__preview/info":
            info = self.server.information()
            info["clients"] = self.server.heartbeat("", "")
            return self._json(info)
        if request.path == "/__preview/status":
            query = parse_qs(request.query)
            self.server.heartbeat(query.get("client", [""])[0], query.get("path", [""])[0])
            return self._json(self.server.build_status())
        if request.path == "/__preview/client.js":
            return self._bytes(CLIENT_SCRIPT.encode("utf-8"), "text/javascript; charset=utf-8")
        if request.path.startswith("/__preview/"):
            self.send_error(HTTPStatus.NOT_FOUND)
            return None
        path = Path(self.translate_path(self.path))
        if path.is_dir():
            path = next((path / name for name in ("index.html", "index.htm")
                         if (path / name).is_file()), path)
        if path.is_file() and path.suffix.lower() in (".html", ".htm"):
            try:
                data = path.read_bytes()
            except OSError:
                self.send_error(HTTPStatus.NOT_FOUND)
                return None
            full_document = re.search(br"<!doctype\s+html\b|<html(?:\s|>)", data, re.IGNORECASE)
            if full_document and b"data-pretext-local-preview" not in data:
                body_end = data.lower().rfind(b"</body>")
                data = (data[:body_end] + INJECTION + b"\n" + data[body_end:]
                        if body_end >= 0 else data + INJECTION)
            return self._bytes(data, "text/html; charset=utf-8")
        return super().send_head()

    def do_POST(self):
        request = urlsplit(self.path)
        if request.path != "/__preview/disconnect":
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        query = parse_qs(request.query)
        self.server.disconnect(query.get("client", [""])[0])
        self.send_response(HTTPStatus.NO_CONTENT)
        self.send_header("Content-Length", "0")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()

    def log_message(self, format, *args):
        if not urlsplit(self.path).path.startswith("/__preview/"):
            super().log_message(format, *args)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--root", type=Path, default=ROOT)
    args = parser.parse_args()
    root = args.root.resolve(strict=True)
    with PreviewServer(root=root, port=args.port) as server:
        url = f"http://localhost:{server.server_port}/"
        atomic_json(root / ".build/reports/preview-server.json", {
            "ProcessId": os.getpid(), "Directory": str(root), "Url": url,
            "protocol": PROTOCOL,
        })
        print(f"Local preview: {url}\nPress Ctrl+C to stop.", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
