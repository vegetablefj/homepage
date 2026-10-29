"""Render the published writing guides from their editable Markdown sources."""
from pathlib import Path
import re
from urllib.parse import urlsplit, urlunsplit

from lxml import etree, html
import markdown


GUIDES = ('paper-revision', 'study-notes', 'style-reference')
INLINE_MATH = re.compile(r'(?<!\\)\$(?!\$)([^\n$]+?)(?<!\\)\$(?!\$)')


def _link_target(target):
    """Keep source links useful in the HTML reading pages."""
    parts = urlsplit(target)
    if parts.scheme or parts.netloc:
        return target
    if parts.path == 'README.md':
        return 'other-resources.html#writing-guides'
    if parts.path in {name + '.md' for name in GUIDES}:
        return urlunsplit(('', '', parts.path[:-3] + '.html', parts.query, parts.fragment))
    return target


def _prose_math(container):
    """Use the site's MathJax delimiters while keeping source examples literal."""
    def convert(text):
        return INLINE_MATH.sub(lambda match: r'\(' + match.group(1) + r'\)', text)

    def walk(node):
        if node.tag in ('code', 'pre'):
            return
        if node.text:
            node.text = convert(node.text)
        for child in node:
            walk(child)
            if child.tail:
                child.tail = convert(child.tail)
    walk(container)


def _contents(tokens):
    navigation = etree.Element('nav', attrib={
        'class': 'writing-guide-toc', 'aria-label': 'On this page'})
    etree.SubElement(navigation, 'p', attrib={'class': 'guide-contents-title'}).text = 'On this page'

    def add_list(parent, entries):
        items = etree.SubElement(parent, 'ul')
        for entry in entries:
            item = etree.SubElement(items, 'li')
            link = etree.SubElement(item, 'a', href='#' + entry['id'])
            link.text = html.fromstring('<span>' + entry['name'] + '</span>').text_content()
            if entry['children']:
                add_list(item, entry['children'])
    add_list(navigation, tokens)
    return navigation


def enhance_writing_guide(document, root):
    """Insert Markdown content into a matching native PreTeXt page.

    The native wrapper supplies the title, site navigation, and download link.
    Every reading page and downloadable file therefore uses the same authored
    file in ``prompts/``; no second prose copy needs editing.
    """
    content = document.get_element_by_id('ptx-content', None)
    if content is None:
        return False
    # Resource links stay in the same tab, like native site navigation.
    for link in content.xpath('.//a[@href]'):
        if urlsplit(link.get('href')).path in {name + '.html' for name in GUIDES}:
            link.attrib.pop('target', None)
    chapter = None
    slug = None
    for name in GUIDES:
        matches = content.xpath('.//*[@id=$name]', name=name)
        if matches:
            chapter, slug = matches[0], name
            break
    if chapter is None:
        return False

    source = Path(root) / 'prompts' / (slug + '.md')
    parser = markdown.Markdown(extensions=['tables', 'toc', 'sane_lists', 'fenced_code'])
    rendered = html.fragment_fromstring(parser.convert(source.read_text(encoding='utf-8')),
                                       create_parent='div')
    if not len(rendered) or rendered[0].tag != 'h1':
        raise ValueError('A writing guide must start with its page title: ' + str(source))
    rendered.remove(rendered[0])
    rendered.set('class', 'writing-guide')

    for link in rendered.xpath('.//a[@href]'):
        link.set('href', _link_target(link.get('href')))
    _prose_math(rendered)
    for table in rendered.xpath('.//table'):
        parent = table.getparent()
        wrapper = etree.Element('div', attrib={'class': 'guide-table-scroll'})
        table.addprevious(wrapper)
        parent.remove(table)
        wrapper.append(table)

    download_path = 'downloads/prompts/' + slug + '.md'
    downloads = chapter.xpath('.//a[@href=$path]', path=download_path)
    if not downloads:
        raise ValueError('The native writing-guide wrapper needs its Markdown download link: ' + slug)
    for link in downloads:
        classes = set(link.get('class', '').split()) | {'guide-download'}
        link.set('class', ' '.join(sorted(classes)))
        link.set('download', slug + '.md')
        link.attrib.pop('target', None)

    for old in chapter.xpath('./*[contains(concat(" ",normalize-space(@class)," ")," writing-guide ") or contains(concat(" ",normalize-space(@class)," ")," writing-guide-toc ")]'):
        chapter.remove(old)
    tokens = parser.toc_tokens
    if tokens and tokens[0]['level'] == 1:
        tokens = tokens[0]['children'] + tokens[1:]
    if tokens:
        chapter.append(_contents(tokens))
    chapter.append(rendered)
    return True
