"""Check that reading pages preserve their sources and usable navigation."""
from pathlib import Path
import re
import tempfile
import unittest

from lxml import html
import markdown

from writing_guides import GUIDES, enhance_writing_guide


ROOT = Path(__file__).resolve().parents[1]


def wrapper(slug):
    return html.document_fromstring(
        '<html><body><main id="ptx-content"><section id="' + slug + '">'
        '<h1>Native page title</h1><p><a class="external" target="_blank" href="downloads/prompts/'
        + slug + '.md">Download Markdown</a></p></section></main></body></html>')


def canonical_text(node):
    # Reading mathematics changes delimiters, not the mathematical text.
    text = node.text_content().replace(r'\(', '$').replace(r'\)', '$')
    return ' '.join(text.split())


class WritingGuidePages(unittest.TestCase):
    def test_all_current_guides_keep_their_visible_content_and_structure(self):
        for slug in GUIDES:
            with self.subTest(guide=slug):
                source = (ROOT / 'prompts' / (slug + '.md')).read_text(encoding='utf-8')
                expected = html.fragment_fromstring(markdown.markdown(source,
                    extensions=['tables', 'toc', 'sane_lists', 'fenced_code']), create_parent='div')
                expected.remove(expected[0])
                page = wrapper(slug)
                self.assertTrue(enhance_writing_guide(page, ROOT))
                content = page.xpath('//*[@class="writing-guide"]')[0]
                self.assertEqual(canonical_text(content), canonical_text(expected))
                self.assertEqual(len(content.xpath('.//h2')), len(re.findall(r'^## ', source, re.M)))
                self.assertEqual(len(content.xpath('.//h3')), len(re.findall(r'^### ', source, re.M)))
                self.assertEqual(content.xpath('.//code/text()'), expected.xpath('.//code/text()'))
                self.assertEqual(len(content.xpath('.//table')), len(expected.xpath('.//table')))
                self.assertTrue(all(table.getparent().get('class') == 'guide-table-scroll'
                                    for table in content.xpath('.//table')))
                download = page.xpath('//a[@download]')[0]
                self.assertEqual(download.get('download'), slug + '.md')
                self.assertEqual(download.get('href'), 'downloads/prompts/' + slug + '.md')
                self.assertIsNone(download.get('target'))

    def test_current_guide_links_and_contents_resolve_to_published_pages(self):
        pages = {}
        for slug in GUIDES:
            page = wrapper(slug)
            enhance_writing_guide(page, ROOT)
            pages[slug + '.html'] = page
        for filename, page in pages.items():
            for href in page.xpath('//*[@class="writing-guide"]//a/@href | //*[@class="writing-guide-toc"]//a/@href'):
                if href.startswith(('https://', 'http://')) or href == 'other-resources.html#writing-guides':
                    continue
                path, _, fragment = href.partition('#')
                target = pages[path or filename]
                if fragment:
                    self.assertTrue(target.xpath('//*[@id=$fragment]', fragment=fragment), href)
                self.assertFalse(path.endswith('.md'), href)

    def test_math_examples_and_table_code_remain_literal(self):
        scratch = ROOT / '.build/tmp'
        scratch.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(prefix='writing-guide-', dir=scratch) as directory:
            root = Path(directory)
            (root / 'prompts').mkdir()
            (root / 'prompts/style-reference.md').write_text(
                '# Test guide\n\nUse $G$ and $H$ in prose, but keep `$G$ and \\alpha` as source.\n\n'
                '## Examples\n\n| Source | Meaning |\n| --- | --- |\n| `a < b` | $a$ is smaller. |\n\n'
                '```tex\n$G$ and \\beta\n```\n', encoding='utf-8')
            page = wrapper('style-reference')
            enhance_writing_guide(page, root)
            content = page.xpath('//*[@class="writing-guide"]')[0]
            self.assertIn(r'Use \(G\) and \(H\)', content.text_content())
            self.assertEqual(content.xpath('.//code/text()'), ['$G$ and \\alpha', 'a < b', '$G$ and \\beta\n'])
            self.assertIn(r'\(a\) is smaller.', content.text_content())

    def test_unrelated_site_page_is_unchanged(self):
        page = wrapper('other-resources')
        before = html.tostring(page)
        self.assertFalse(enhance_writing_guide(page, ROOT))
        self.assertEqual(html.tostring(page), before)


if __name__ == '__main__':
    unittest.main()
