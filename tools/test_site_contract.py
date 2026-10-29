"""Regression checks for preservation failures during site-directory migrations."""

import json
from pathlib import Path
import shutil
import tempfile
import unittest

from check_site_contract import check_site


PAGE = '''<!DOCTYPE html><html><head><!-- generated yesterday --></head><body>
<div id="ptx-content"><p id="claim">Let <span>\\(X\\)</span> be smooth.</p></div>
<aside class="margin-note" id="margin-claim">A local explanation.</aside>
<p class="note-metadata">Under review</p>
<aside id="home-profile">Contact information.</aside>
</body></html>'''


class SiteContractTests(unittest.TestCase):
    def setUp(self):
        scratch = Path(__file__).resolve().parent.parent / '.build/tmp'
        scratch.mkdir(parents=True, exist_ok=True)
        self.directory = tempfile.TemporaryDirectory(prefix='site-contract-', dir=scratch)
        self.root = Path(self.directory.name)
        self.old = self.root / 'before'
        self.site = self.root / 'after'
        self.old.mkdir()
        (self.old / 'page.html').write_text(PAGE, encoding='utf-8')
        (self.old / 'paper.pdf').write_bytes(b'attachment')
        for required in ('index.html', 'CNAME', '.nojekyll'):
            (self.old / required).write_text('')
        (self.old / '.site-files.json').write_text(json.dumps(['page.html', 'paper.pdf']))
        shutil.copytree(self.old, self.site)

    def tearDown(self):
        self.directory.cleanup()

    def test_timestamp_and_whitespace_do_not_change_reading_contract(self):
        (self.site / 'page.html').write_text(PAGE.replace('yesterday', 'today').replace('Let ', 'Let   '))
        self.assertTrue(check_site(self.site, self.old)['passed'])

    def test_missing_attachment_is_a_url_regression(self):
        (self.site / 'paper.pdf').unlink()
        self.assertEqual(check_site(self.site, self.old)['missing_paths'], ['paper.pdf'])

    def test_missing_anchor_and_changed_math_are_detected(self):
        (self.site / 'page.html').write_text(PAGE.replace('id="claim"', 'id="changed"').replace('\\(X\\)', '\\(Y\\)'))
        report = check_site(self.site, self.old)
        self.assertEqual(report['missing_anchors'], [{'path': 'page.html', 'anchors': ['claim']}])
        self.assertEqual(report['changed_reading_text'], ['page.html'])

    def test_margin_profile_and_metadata_are_checked(self):
        changed = PAGE.replace('local explanation', 'different explanation').replace('Under review', 'Complete').replace('Contact information', 'Contact')
        (self.site / 'page.html').write_text(changed)
        report = check_site(self.site, self.old)
        for key in ('changed_margin_text', 'changed_note_metadata', 'changed_home_profile'):
            self.assertEqual(report[key], ['page.html'])

    def test_sources_and_private_folders_are_not_site_output(self):
        (self.site / 'source').mkdir()
        (self.site / '.private').mkdir()
        report = check_site(self.site)
        self.assertFalse(report['passed'])
        self.assertEqual(report['prohibited_output_paths'], ['.private', 'source'])


if __name__ == '__main__':
    unittest.main()
