"""Build the active note and refresh or open its loopback preview."""

import argparse
import json
import os
from pathlib import Path
import socket
import subprocess
import sys
import time
from urllib.error import URLError
from urllib.parse import quote
from urllib.request import urlopen
import webbrowser

from preview_server import PROTOCOL, ROOT


def server_info(port):
    try:
        with urlopen(f"http://127.0.0.1:{port}/__preview/info", timeout=1) as response:
            info = json.load(response)
        if (info.get("protocol") == PROTOCOL
                and Path(info.get("root", "")).resolve() == ROOT):
            return info
    except (OSError, URLError, ValueError, AttributeError):
        pass
    return None


def ensure_server(port):
    info = server_info(port)
    if info:
        return info
    try:
        connection = socket.create_connection(("127.0.0.1", port), timeout=1)
    except OSError:
        connection = None
    if connection:
        connection.close()
        raise RuntimeError(
            f"Port {port} is in use by a different server. Stop that server or "
            "choose --port; no existing process has been stopped.")
    reports = ROOT / ".build/reports"
    reports.mkdir(parents=True, exist_ok=True)
    options = {"cwd": ROOT, "stdin": subprocess.DEVNULL}
    if os.name == "nt":
        options["creationflags"] = subprocess.CREATE_NO_WINDOW | subprocess.CREATE_NEW_PROCESS_GROUP
    else:
        options["start_new_session"] = True
    with (reports / "editor-preview-server.log").open("ab") as log:
        server = subprocess.Popen(
            [sys.executable, "-X", "utf8", str(ROOT / "tools/preview_server.py"),
             "--port", str(port), "--root", str(ROOT)],
            stdout=log, stderr=subprocess.STDOUT, **options)
    for _ in range(40):
        info = server_info(port)
        if info:
            return info
        if server.poll() is not None:
            break
        time.sleep(0.1)
    raise RuntimeError("Preview server did not start; see .build/reports/editor-preview-server.log.")


def load_success_report():
    report = json.loads((ROOT / ".build/reports/editor-preview.json").read_text(encoding="utf-8"))
    url = report.get("url", "")
    prefix = report.get("note_prefix", "")
    if (not report.get("revision") or not url.startswith("/") or url.startswith("//")
            or not prefix.startswith("/") or not prefix.endswith("/")
            or not url.startswith(prefix)):
        raise RuntimeError("The successful build did not provide a valid local preview URL.")
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", required=True, type=Path)
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--no-open", action="store_true", help="Build and notify without opening a browser.")
    args = parser.parse_args()
    source = args.source.resolve(strict=True)
    if not source.is_relative_to(ROOT) or source.suffix.lower() != ".ptx":
        parser.error("Open a PTX source file from this project before running the build task.")
    if not 1 <= args.port <= 65535:
        parser.error("--port must be between 1 and 65535.")
    ensure_server(args.port)
    print(f"Building the note containing {source.relative_to(ROOT)} ...", flush=True)
    subprocess.run([sys.executable, "-X", "utf8", str(ROOT / "build.py"),
                    "--source", str(source)], cwd=ROOT, check=True)
    report = load_success_report()
    url = f"http://localhost:{args.port}{quote(report['url'], safe='/#%?=&')}"
    info = server_info(args.port) or {}
    connected = any(path.startswith(report["note_prefix"]) for path in info.get("clients", []))
    if connected:
        print(f"Preview refreshed: {url}")
    elif not args.no_open:
        webbrowser.open(url, new=0, autoraise=True)
        print(f"Preview opened: {url}")
    else:
        print(f"Preview ready: {url}")


if __name__ == "__main__":
    try:
        main()
    except (OSError, RuntimeError, ValueError, subprocess.CalledProcessError) as error:
        print(str(error), file=sys.stderr)
        sys.exit(1)
