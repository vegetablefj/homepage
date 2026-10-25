"""Check the local preview transport without rebuilding or changing a note."""

from contextlib import contextmanager
import json
from pathlib import Path
import tempfile
import threading
import unittest
from urllib.error import HTTPError
from urllib.request import Request, urlopen

from preview_server import INJECTION, PreviewServer, ROOT, atomic_json


@contextmanager
def running_preview():
    scratch = ROOT / ".build/tmp"
    scratch.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="editor-preview-test-", dir=scratch) as temporary:
        root = Path(temporary).resolve()
        if not root.is_relative_to(scratch.resolve()):
            raise RuntimeError("Preview tests must remain inside project scratch.")
        with PreviewServer(root=root, port=0) as server:
            thread = threading.Thread(target=server.serve_forever, daemon=True)
            thread.start()
            try:
                yield root, f"http://127.0.0.1:{server.server_port}"
            finally:
                server.shutdown()
                thread.join(timeout=3)


class PreviewTransportTests(unittest.TestCase):
    def test_html_refresh_script_is_response_only(self):
        with running_preview() as (root, base):
            original = b"<!doctype html><html><body><p>A note.</p></body></html>"
            page = root / "note.html"
            page.write_bytes(original)
            with urlopen(base + "/note.html") as response:
                rendered = response.read()
                self.assertIn(INJECTION, rendered)
                self.assertEqual(int(response.headers["Content-Length"]), len(rendered))
                self.assertEqual(response.headers["Cache-Control"], "no-store")
            self.assertEqual(page.read_bytes(), original)
            with urlopen(Request(base + "/note.html", method="HEAD")) as response:
                self.assertEqual(response.read(), b"")
                self.assertEqual(int(response.headers["Content-Length"]), len(rendered))

    def test_non_html_bytes_are_preserved(self):
        with running_preview() as (root, base):
            content = b"%PDF-1.7\x00\xff\nA retained attachment."
            (root / "original.pdf").write_bytes(content)
            with urlopen(base + "/original.pdf") as response:
                self.assertEqual(response.read(), content)

    def test_knowl_fragments_do_not_receive_refresh_script(self):
        with running_preview() as (root, base):
            fragment = b'<article class="theorem-like"><p>A referenced proposition.</p></article>'
            (root / "knowl.html").write_bytes(fragment)
            with urlopen(base + "/knowl.html") as response:
                self.assertEqual(response.read(), fragment)

    def test_status_only_exposes_successful_build_fields(self):
        with running_preview() as (root, base):
            report = root / ".build/reports/editor-preview.json"
            atomic_json(report, {"revision": "first", "target": "note-test",
                                 "url": "/notes/test/chapter.html", "note_prefix": "/notes/test/",
                                 "built_at": "2026-10-21", "source": "private local source path"})
            with urlopen(base + "/__preview/status?client=control&path=/notes/test/chapter.html") as response:
                status = json.load(response)
            self.assertEqual(status["revision"], "first")
            self.assertNotIn("source", status)
            with urlopen(base + "/__preview/info") as response:
                info = json.load(response)
            self.assertEqual(info["root"], str(root))
            self.assertIn("/notes/test/chapter.html", info["clients"])
            with urlopen(Request(base + "/__preview/disconnect?client=control", method="POST")) as response:
                self.assertEqual(response.status, 204)
            with urlopen(base + "/__preview/info") as response:
                self.assertEqual(json.load(response)["clients"], [])
            report.write_text("unfinished JSON", encoding="utf-8")
            with urlopen(base + "/__preview/status") as response:
                self.assertEqual(json.load(response), {})

    def test_unknown_preview_endpoint_is_not_a_file(self):
        with running_preview() as (_, base):
            with self.assertRaises(HTTPError) as caught:
                urlopen(base + "/__preview/unknown")
            self.assertEqual(caught.exception.code, 404)


if __name__ == "__main__":
    unittest.main()
