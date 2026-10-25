"""Import the reviewed standalone TeX manuscript into native PreTeXt chapters.

Run explicitly when transferring a new TeX revision. Ordinary site rebuilds do
not overwrite the PreTeXt source, which can subsequently grow through reading.
"""
from pathlib import Path
import argparse
from collections import Counter
from copy import deepcopy
import hashlib
import json
import re
import sys
import unicodedata

ROOT = Path(__file__).resolve().parents[1]
from runtime import configure
configure()
from lxml import etree

XML_ID = '{http://www.w3.org/XML/1998/namespace}id'
XI = 'http://www.w3.org/2001/XInclude'
SOURCE = None
DEST = ROOT / 'source/notes/fujita'
ENV_NAMES = {'theorem', 'proposition', 'lemma', 'corollary', 'definition', 'remark'}
ALIASES = {'sec:final-lift': 'sec:generation-criterion'}
RANGES = {'sec:min-exponential': ('sec:min-exponential', 'fujita-attainment'),
          'sec:centers': ('fujita-restrictions', 'sec:centers')}
LABELS = {}
DISPLAY_SOURCE = []
INLINE_SOURCE = []
CITATIONS = []
UNKNOWN = []


def ident(label):
    return re.sub(r'[^A-Za-z0-9_.-]', '-', ALIASES.get(label, label))


def node(tag, content=None, label=None, **attributes):
    element = etree.Element(tag, **attributes)
    if label:
        element.set(XML_ID, ident(label))
        LABELS[label] = ident(label)
    if content is not None:
        element.text = content
    return element


def append_text(parent, text):
    if not text:
        return
    if len(parent):
        parent[-1].tail = (parent[-1].tail or '') + text
    else:
        parent.text = (parent.text or '') + text


def group(s, start, opening='{', closing='}'):
    while start < len(s) and s[start].isspace():
        start += 1
    if start >= len(s) or s[start] != opening:
        raise ValueError(f'Expected {opening!r}: {s[start:start+120]!r}')
    depth, position = 1, start + 1
    while position < len(s):
        if s[position] == '\\':
            position += 2
            continue
        if s[position] == opening:
            depth += 1
        elif s[position] == closing:
            depth -= 1
            if depth == 0:
                return s[start + 1:position], position + 1
        position += 1
    raise ValueError('Unclosed group: ' + s[start:start + 120])


def take_environment(s, position):
    match = re.match(r'\\begin\{([^}]+)\}', s[position:])
    if not match:
        raise ValueError('Expected environment')
    name = match.group(1)
    body_start = position + match.end()
    option = None
    if body_start < len(s) and s[body_start] == '[':
        option, body_start = group(s, body_start, '[', ']')
    pattern = re.compile(r'\\(begin|end)\{' + re.escape(name) + r'\}')
    depth = 1
    for end in pattern.finditer(s, body_start):
        depth += 1 if end.group(1) == 'begin' else -1
        if depth == 0:
            return name, option, s[body_start:end.start()], end.end()
    raise ValueError('Unclosed environment ' + name)


def extract_labels(s):
    labels = re.findall(r'\\label\{([^}]+)\}', s)
    return re.sub(r'\\label\{[^}]+\}', '', s), labels


def labels_on(element, labels):
    if labels:
        primary = ALIASES.get(labels[0], labels[0])
        element.set(XML_ID, ident(primary))
        for label in labels:
            LABELS[label] = ident(primary)


def reference(label, style='global'):
    if label in RANGES:
        first, last = RANGES[label]
        return node('xref', first=ident(first), last=ident(last), text='type-global')
    return node('xref', ref=ident(label), text=style)


def inline(parent, s):
    """Parse text, formulae, references and native footnotes without HTML."""
    s = re.sub(r'\s+', ' ', s).strip()
    s = s.replace('the preceding two subsections', 'the preceding two sections')
    i = 0
    while i < len(s):
        if s[i] == '$':
            end = i + 1
            while end < len(s):
                if s[end] == '$' and s[end - 1] != '\\':
                    break
                end += 1
            if end >= len(s):
                raise ValueError('Unclosed inline math: ' + s[i:])
            formula = s[i + 1:end]
            parent.append(node('m', formula))
            INLINE_SOURCE.append(formula)
            i = end + 1
            continue
        if s[i] == '{':
            value, i = group(s, i)
            inline(parent, value)
            continue
        if s[i] != '\\':
            end = i + 1
            while end < len(s) and s[end] not in '$\\{':
                end += 1
            append_text(parent, s[i:end].replace('~', '\u00a0').replace('---', '—').replace('--', '–'))
            i = end
            continue
        match = re.match(r'\\([A-Za-z]+|.)', s[i:])
        command = match.group(1)
        i += match.end()
        if command in {'ref', 'eqref', 'autoref', 'pageref'}:
            label, i = group(s, i)
            # Native structural references supply Chapter/Section correctly
            # after the original TeX sections have been reorganized.
            previous = parent[-1].tail if len(parent) else parent.text
            if label.startswith('sec:'):
                previous = re.sub(r'(Sections?|Chapters?)\s*[\u00a0 ]*$', '', previous or '')
                if len(parent):
                    parent[-1].tail = previous
                else:
                    parent.text = previous
                parent.append(reference(label, 'type-global'))
            else:
                parent.append(reference(label))
            continue
        if command in {'cite', 'citep', 'citet'}:
            option = None
            while i < len(s) and s[i].isspace():
                i += 1
            if i < len(s) and s[i] == '[':
                option, i = group(s, i, '[', ']')
            keys, i = group(s, i)
            for number, key in enumerate(keys.split(',')):
                key = key.strip()
                if number:
                    append_text(parent, ', ')
                attributes = {'ref': 'bib-' + ident(key)}
                if option:
                    attributes['detail'] = plain(option)
                parent.append(node('xref', **attributes))
                CITATIONS.append(key)
            continue
        if command in {'footnote', 'emph', 'textit', 'textbf', 'texttt', 'textnormal', 'natexlab'}:
            value, i = group(s, i)
            tag = {'footnote': 'fn', 'emph': 'em', 'textit': 'em', 'textbf': 'alert', 'texttt': 'c'}.get(command)
            if tag:
                child = node(tag)
                inline(child, value)
                parent.append(child)
            else:
                inline(parent, value)
            continue
        if command in {'href', 'url', 'doi'}:
            address, i = group(s, i)
            if command == 'href':
                label, i = group(s, i)
            elif command == 'doi':
                label, address = 'doi:' + address, 'https://doi.org/' + address
            else:
                label = address
            link = node('url', href=address)
            if command == 'href':
                inline(link, label)
            else:
                link.text = label
            parent.append(link)
            continue
        if command in {"'", '`', '"', '^', '~', '=', '.', 'c', 'u', 'H', 'v'}:
            while i < len(s) and s[i].isspace():
                i += 1
            if i < len(s) and s[i] == '{':
                character, i = group(s, i)
            else:
                character, i = s[i:i + 1], i + 1
            accent = {"'": '\u0301', '`': '\u0300', '"': '\u0308', '^': '\u0302', '~': '\u0303',
                      '=': '\u0304', '.': '\u0307', 'c': '\u0327', 'u': '\u0306', 'H': '\u030b', 'v': '\u030c'}[command]
            append_text(parent, unicodedata.normalize('NFC', character + accent))
            continue
        if command in {'l', 'L', 'ae', 'AE', 'oe', 'OE', 'ss', 'S', '&', '%', '_', '#', '{', '}'}:
            append_text(parent, {'l':'ł','L':'Ł','ae':'æ','AE':'Æ','oe':'œ','OE':'Œ','ss':'ß','S':'§'}.get(command, command))
            continue
        if command == 'penalty':
            numeric = re.match(r'\s*-?\d+', s[i:])
            i += numeric.end() if numeric else 0
            continue
        if command in {'newblock', 'small', 'centering', 'raggedright', ',', ';', '!', ' '}:
            append_text(parent, ' ' if command in {'newblock', ' '} else '')
            continue
        UNKNOWN.append((command, s[max(0, i - 40):i + 90]))
        raise ValueError('Unsupported text command ' + command + ': ' + s[max(0, i-60):i+90])


def plain(s):
    container = node('span')
    inline(container, s)
    return ''.join(container.itertext()).strip()


def display(formula, labels=(), numbered=False, align=False):
    original = formula
    formula, internal_labels = extract_labels(formula)
    labels = list(labels) + internal_labels
    DISPLAY_SOURCE.append(original)
    if align:
        formula = '\\begin{aligned}' + re.sub(r'\\notag\b', '', formula) + '\\end{aligned}'
    element = node('md', formula.strip(), number='yes' if numbered else 'no')
    labels_on(element, labels)
    return element


def table(s, labels):
    match = re.search(r'\\begin\{tabular\}', s)
    if not match:
        raise ValueError('Expected tabular')
    _, _, tabular_body, _ = take_environment(s, match.start())
    _, content_start = group(tabular_body, 0)
    tabular_body = tabular_body[content_start:]
    tabular_body = re.sub(r'\\(?:toprule|midrule|bottomrule)\b', '', tabular_body)
    caption_match = re.search(r'\\caption\s*', s)
    caption_text, _ = group(s, caption_match.end()) if caption_match else ('', 0)
    result = node('table')
    labels_on(result, labels)
    caption = node('title')
    inline(caption, caption_text)
    result.append(caption)
    grid = etree.SubElement(result, 'tabular', halign='left', valign='top')
    rows = re.split(r'\\\\(?:\[[^]]*\])?', tabular_body)
    for row_text in rows:
        row_text = row_text.strip()
        if not row_text:
            continue
        row = etree.SubElement(grid, 'row')
        for cell_text in re.split(r'(?<!\\)&', row_text):
            cell = etree.SubElement(row, 'cell')
            inline(cell, cell_text.strip())
    return result


def blocks(s):
    """Read paragraphs and supported environments, preserving every formula."""
    result, paragraph, buffer = [], None, []
    def flush(end_paragraph=False):
        nonlocal paragraph, buffer
        text = ''.join(buffer).strip()
        buffer = []
        if text:
            if paragraph is None:
                paragraph = node('p')
                result.append(paragraph)
            if paragraph.text or len(paragraph):
                append_text(paragraph, ' ')
            inline(paragraph, text)
        if end_paragraph:
            paragraph = None
    i = 0
    while i < len(s):
        if s.startswith('\\[', i):
            end = s.index('\\]', i + 2)
            flush()
            if paragraph is None:
                paragraph = node('p')
                result.append(paragraph)
            paragraph.append(display(s[i + 2:end]))
            i = end + 2
            continue
        if s.startswith('\\begin{', i):
            name, option, body, end = take_environment(s, i)
            if name in {'equation', 'equation*', 'align', 'align*'}:
                flush()
                if paragraph is None:
                    paragraph = node('p')
                    result.append(paragraph)
                paragraph.append(display(body, numbered=not name.endswith('*'), align=name.startswith('align')))
            elif name in ENV_NAMES:
                flush(True)
                body, labels = extract_labels_at_start(body)
                element = node(name)
                labels_on(element, labels)
                if option:
                    title = node('title')
                    inline(title, option)
                    element.append(title)
                statement = node('statement') if name in {'theorem','lemma','proposition','corollary'} else element
                statement.extend(blocks(body))
                if statement is not element:
                    element.append(statement)
                result.append(element)
            elif name == 'proof':
                flush(True)
                element = node('proof')
                body, labels = extract_labels_at_start(body)
                labels_on(element, labels)
                if option:
                    ref = re.search(r'\\ref\{([^}]+)\}', option)
                    if ref:
                        element.set('ref', ident(ref.group(1)))
                    else:
                        title = node('title')
                        inline(title, option)
                        element.append(title)
                element.extend(blocks(body))
                if not option and result and result[-1].tag in {'theorem','lemma','proposition','corollary'}:
                    result[-1].append(element)
                else:
                    result.append(element)
            elif name == 'enumerate':
                flush()
                if paragraph is None:
                    paragraph = node('p')
                    result.append(paragraph)
                listing = etree.SubElement(paragraph, 'ol')
                for item in re.split(r'\\item\b', body)[1:]:
                    child = etree.SubElement(listing, 'li')
                    child.extend(blocks(item))
                paragraph = None
            elif name in {'figure', 'table'}:
                flush(True)
                _, labels = extract_labels(body)
                result.append(table(body, labels))
            elif name == 'samepage':
                flush(True)
                result.extend(blocks(body))
            else:
                raise ValueError('Unsupported block environment ' + name)
            i = end
            continue
        if s.startswith('\\footnote', i):
            # A footnote may itself contain blank lines. Keep its group whole.
            _, end = group(s, i + len('\\footnote'))
            buffer.append(s[i:end])
            i = end
            continue
        if s.startswith('\\label{', i):
            label, i = group(s, i + len('\\label'))
            flush()
            if paragraph is None:
                paragraph = node('p')
                result.append(paragraph)
            labels_on(paragraph, [label])
            continue
        blank = re.match(r'\n[ \t]*\n', s[i:])
        if blank:
            flush(True)
            i += blank.end()
            continue
        buffer.append(s[i])
        i += 1
    flush(True)
    return result


def extract_labels_at_start(s):
    labels = []
    while True:
        match = re.match(r'\s*\\label\{([^}]+)\}', s)
        if not match:
            return s, labels
        labels.append(match.group(1))
        s = s[match.end():]


def split_divisions(s):
    """Headings cannot occur inside the manuscript's proof/footnote groups."""
    matches = list(re.finditer(r'\\(section|subsection)\s*\{', s))
    divisions = []
    for index, match in enumerate(matches):
        title, end = group(s, match.end() - 1)
        stop = matches[index + 1].start() if index + 1 < len(matches) else len(s)
        body, labels = extract_labels_at_start(s[end:stop])
        divisions.append({'level': match.group(1), 'title': title, 'body': body, 'labels': labels})
    return divisions


def section(division, title=None, label=None):
    element = node('section', label=label)
    if division['labels']:
        labels_on(element, division['labels'])
    child = node('title')
    inline(child, title or division['title'])
    element.append(child)
    short_titles = {
        'Notation and the argument': 'Notation and argument',
        'Monomial orders and discrepancy': 'Monomial orders',
        'Log canonical thresholds in families': 'Thresholds in families',
        'The local generation criterion': 'Generation criterion',
        'Order and discrepancy bounds': 'Uniform bounds',
        'Closed loci on the flag variety': 'Closed flag loci',
        'Attainment on a fixed resolution': 'Attainment',
        'Comparison along a subvariety': 'Specialization',
        'Restriction spaces with uniform estimates': 'Restriction estimates',
        'Coordinates and the tangential variation': 'Tangential variation',
        'Growth of tangential slices': 'Tangential slices',
        'The choice of degree and the limiting contradiction': 'Degrees and limits',
        'Rational supporting data': 'Rational supporting data',
        'Equality in the discrepancy bound': 'The equality divisor',
        'Application of the local criterion': 'Final application',
        'All higher adjoint powers': 'Higher adjoint powers',
    }
    displayed_title = title or division['title']
    if displayed_title in short_titles:
        element.append(node('shorttitle', short_titles[displayed_title]))
    element.extend(blocks(division['body']))
    return element


def chapter(title, shorttitle, label, division=None, children=()):
    element = node('chapter', label=label)
    element.append(node('title', title))
    element.append(node('shorttitle', shorttitle))
    if division:
        labels_on(element, division['labels'])
        contents = blocks(division['body'])
        if children:
            if contents:
                intro = etree.SubElement(element, 'introduction')
                intro.extend(contents)
        else:
            element.extend(contents)
    element.extend(children)
    return element


def normalized_math(s):
    s = re.sub(r'\\label\{[^}]+\}', '', s)
    s = re.sub(r'\\notag\b', '', s)
    return re.sub(r'\s+', '', s)


def original_math(s):
    inline = re.findall(r'(?<!\\)\$((?:\\.|[^$])*)\$', s)
    displays = re.findall(r'(?<!\\)\\\[([\s\S]*?)(?<!\\)\\\]', s)
    displays += [m.group(2) for m in re.finditer(r'\\begin\{(equation\*?|align\*?)\}([\s\S]*?)\\end\{\1\}', s)]
    return Counter(map(normalized_math, inline)), Counter(map(normalized_math, displays))


def main():
    global SOURCE
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tex', type=Path, required=True, help='Reviewed standalone Fujita TeX manuscript')
    parser.add_argument('--compare', type=Path, help='Optional earlier manuscript for preservation checks')
    arguments = parser.parse_args()
    SOURCE = arguments.tex.expanduser().resolve()
    manuscript = SOURCE.read_text(encoding='utf-8-sig')
    body = manuscript.split('\\begin{document}', 1)[1].split('\\begin{thebibliography}', 1)[0]
    abstract_match = re.search(r'\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}', body)
    abstract = abstract_match.group(1)
    main_body = body[abstract_match.end():]
    divisions = split_divisions(main_body)
    groups = []
    for division in divisions:
        if division['level'] == 'section':
            groups.append([division, []])
        else:
            groups[-1][1].append(division)
    if len(groups) != 7:
        raise ValueError('Expected the seven reviewed TeX sections')
    introduction, criterion, preliminaries, ordinary, minimization, centers, isolation = groups

    title = "Notes on OpenAI's Proof of Fujita's Freeness Conjecture"
    introduction[0]['title'] = 'Fujita’s freeness conjecture'
    introduction[0]['body'] = abstract + '\n\n' + introduction[0]['body']
    chapters = [
        chapter('Fujita’s freeness conjecture', 'The conjecture', 'fujita-overview', introduction[0], [section(d) for d in introduction[1]]),
        chapter('Valuations, discrepancies, and thresholds', 'Valuations and thresholds', 'sec:preliminaries', preliminaries[0], [section(d) for d in preliminaries[1]]),
        chapter('A local criterion for adjoint generation', 'Local generation', 'sec:generation-criterion', criterion[0], [section(d) for d in criterion[1]]),
        chapter('Ordinary orders and the strict inequality', 'Ordinary orders', 'sec:min-ordinary', ordinary[0], [section(d) for d in ordinary[1]]),
        chapter('The exponential functional', 'Exponential functional', 'sec:min-exponential', minimization[0], [section(minimization[1][0])]),
        chapter('Flags, fixed bases, and attainment', 'Attainment', 'fujita-attainment', children=[section(d) for d in minimization[1][1:]]),
        chapter('Uniform estimates for restriction spaces', 'Uniform restrictions', 'fujita-restrictions', children=[section(centers[1][0])]),
        chapter('Excluding positive-dimensional centers', 'Point centers', 'sec:centers', centers[0], [section(d) for d in centers[1][1:]]),
        chapter('Boundary construction and adjoint generation', 'Boundary and generation', 'sec:isolation', isolation[0], [section(d) for d in isolation[1]]),
    ]
    # The ordinary-order chapter originally had no subsections. Separate its
    # existing arguments at theorem boundaries without changing their order.
    ordinary_chapter = chapters[3]
    ordinary_nodes = [e for e in ordinary_chapter if e.tag not in {'title', 'shorttitle'}]
    for e in ordinary_nodes:
        ordinary_chapter.remove(e)
    starts = {
        ident('lem:expanded-lattice-equality'): ('Lattice inequalities and leading forms', 'Lattice inequalities', 'fujita-lattice'),
        ident('lem:expanded-exceptional-threshold'): ('Thresholds on the exceptional divisor', 'Exceptional thresholds', 'fujita-exceptional-thresholds'),
        ident('lem:expanded-ordinary-lift'): ('Lifting in the equality case', 'Lifting from equality', 'fujita-ordinary-lifting'),
        ident('prop:ordinary-gap'): ('The strict inequality at a base point', 'The strict inequality', 'fujita-ordinary-gap'),
    }
    current = node('section', label='fujita-ordinary-initials')
    current.append(node('title', 'Ordinary initial exponents'))
    current.append(node('shorttitle', 'Initial exponents'))
    ordinary_chapter.append(current)
    for element in ordinary_nodes:
        if element.get(XML_ID) in starts:
            section_title, short_title, section_label = starts[element.get(XML_ID)]
            current = node('section', label=section_label)
            current.append(node('title', section_title))
            current.append(node('shorttitle', short_title))
            ordinary_chapter.append(current)
        current.append(element)
    # Keep the personal-study acknowledgment as a native, expandable footnote.
    thanks_match = re.search(r'\\thanks\s*\{', manuscript)
    thanks, _ = group(manuscript, thanks_match.end() - 1)
    acknowledgement = node('p', "These notes present OpenAI's argument.")
    fn = etree.SubElement(acknowledgement, 'fn')
    inline(fn, thanks)
    first_intro = chapters[0].find('introduction')
    first_intro.insert(0, acknowledgement)

    bibliography_source = manuscript.split('\\begin{thebibliography}', 1)[1].split('\\end{thebibliography}', 1)[0]
    starts = list(re.finditer(r'\\bibitem\[([^]]+)\]\{([^}]+)\}', bibliography_source))
    references = node('references', label='fujita-references')
    references.append(node('title', 'References'))
    for index, match in enumerate(starts):
        label, key = match.groups()
        end = starts[index + 1].start() if index + 1 < len(starts) else len(bibliography_source)
        citation_label = plain(label).replace('ł', 'l').replace('Ł', 'L')
        entry = etree.SubElement(references, 'biblio', type='raw', label=citation_label)
        entry.set(XML_ID, 'bib-' + ident(key))
        inline(entry, bibliography_source[match.end():end])

    macros = []
    for line in manuscript.split('\\begin{document}', 1)[0].splitlines():
        if re.match(r'\\(?:newcommand|DeclareMathOperator)\b', line) and 'DoNotLoadEpstopdf' not in line:
            macros.append(line)
    document = etree.Element('pretext', nsmap={'xi': XI})
    document.set('{http://www.w3.org/XML/1998/namespace}lang', 'en-US')
    docinfo = etree.SubElement(document, 'docinfo')
    etree.SubElement(docinfo, 'macros').text = '\n' + '\n'.join(macros) + '\n'
    book = etree.SubElement(document, 'book')
    book.set(XML_ID, 'fujita-notes')
    book.append(node('title', title))
    book.append(node('shorttitle', 'Fujita’s freeness conjecture'))
    frontmatter = etree.SubElement(book, 'frontmatter')
    bibinfo = etree.SubElement(frontmatter, 'bibinfo')
    author = etree.SubElement(bibinfo, 'author')
    etree.SubElement(author, 'personname').text = 'Jie Fu'
    titlepage = etree.SubElement(frontmatter, 'titlepage')
    etree.SubElement(titlepage, 'titlepage-items')
    DEST.mkdir(parents=True, exist_ok=True)
    chapter_files = []
    for number, element in enumerate(chapters, 1):
        filename = f'chapter-{number:02d}.ptx'
        chapter_files.append(filename)
        (DEST / filename).write_bytes(etree.tostring(element, encoding='utf-8', xml_declaration=True, pretty_print=True))
        etree.SubElement(book, '{' + XI + '}include', href=filename)
    backmatter = etree.SubElement(book, 'backmatter')
    (DEST / 'references.ptx').write_bytes(etree.tostring(references, encoding='utf-8', xml_declaration=True, pretty_print=True))
    etree.SubElement(backmatter, '{' + XI + '}include', href='references.ptx')
    output = DEST / 'fujita.ptx'
    output.write_bytes(etree.tostring(document, encoding='utf-8', xml_declaration=True, pretty_print=True))

    expanded = etree.parse(str(output))
    expanded.xinclude()
    ids = expanded.xpath('//@xml:id', namespaces={'xml': 'http://www.w3.org/XML/1998/namespace'})
    old_labels = set(re.findall(r'\\label\{([^}]+)\}', body))
    original_inline, original_display = original_math(body)
    actual_inline = Counter(map(normalized_math, INLINE_SOURCE))
    actual_display = Counter(map(normalized_math, DISPLAY_SOURCE))
    # The footnote from the title may contain inline math; compare the document
    # body, which is parsed once, with the transferred formula counters.
    lost_inline = original_inline - actual_inline
    lost_display = original_display - actual_display
    missing_labels = sorted(old_labels - LABELS.keys())
    broken_refs = sorted({value for element in expanded.xpath('//xref') for key, value in element.attrib.items() if key in {'ref','first','last'} and value not in ids})
    duplicate_ids = [key for key, count in Counter(ids).items() if count > 1]
    original_statements = Counter(re.findall(r'\\begin\{(theorem|lemma|proposition|corollary)\}', body))
    converted_statements = {tag: len(expanded.xpath('//' + tag)) for tag in original_statements}
    original_citations = Counter(key.strip() for value in re.findall(r'\\cite(?:[tp])?(?:\[[^]]*\])?\{([^}]+)\}', body) for key in value.split(','))
    # Jing handles external grammar scopes correctly; a missing validator fails
    # explicitly rather than leaving an unchecked source with a null result.
    from validate_sources import content_schema, validate_file
    schema_result = validate_file(output, content_schema(), ROOT / '.build/reports/fujita-validation.xml')
    valid = schema_result['valid']
    schema_errors = schema_result['messages'].splitlines()
    report = {
        'source': str(SOURCE), 'source_sha256': hashlib.sha256(SOURCE.read_bytes()).hexdigest(),
        'entry': 'notes/fujita/fujita-notes.html', 'chapters': chapter_files,
        'source_labels': len(old_labels), 'label_map': LABELS,
        'missing_labels': missing_labels, 'broken_references': broken_refs, 'duplicate_ids': duplicate_ids,
        'source_statements': dict(original_statements), 'converted_statements': converted_statements,
        'source_proofs': len(re.findall(r'\\begin\{proof\}', body)), 'converted_proofs': len(expanded.xpath('//proof')),
        'source_footnotes': len(re.findall(r'\\footnote\b', body)) + 1, 'converted_footnotes': len(expanded.xpath('//fn')),
        'bibliography_entries': len(starts), 'converted_bibliography_entries': len(expanded.xpath('//biblio')),
        'source_inline_formulas': sum(original_inline.values()), 'converted_inline_formulas': sum(actual_inline.values()),
        'source_display_formulas': sum(original_display.values()), 'converted_display_formulas': sum(actual_display.values()),
        'missing_inline_formulas': dict(lost_inline), 'missing_display_formulas': dict(lost_display),
        'missing_citations': dict(original_citations - Counter(CITATIONS)),
        'schema_valid': valid, 'schema_engine': 'Jing 20241231', 'schema_errors': schema_errors,
    }
    if arguments.compare:
        earlier = arguments.compare.read_text(encoding='utf-8-sig').split('\\begin{document}', 1)[1].split('\\begin{thebibliography}', 1)[0]
        earlier_inline, earlier_display = original_math(earlier)
        report['earlier_missing_inline_formulas'] = dict(earlier_inline - actual_inline)
        report['earlier_missing_display_formulas'] = dict(earlier_display - actual_display)
        report['earlier_missing_labels'] = sorted(set(re.findall(r'\\label\{([^}]+)\}', earlier)) - LABELS.keys())
    reports = ROOT / '.build/reports'
    reports.mkdir(parents=True, exist_ok=True)
    (reports / 'fujita-import-check.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    if missing_labels or broken_refs or duplicate_ids or lost_inline or lost_display or original_citations - Counter(CITATIONS) or valid is False or dict(original_statements) != converted_statements or report['source_proofs'] != report['converted_proofs'] or report['source_footnotes'] != report['converted_footnotes']:
        raise ValueError(json.dumps(report, ensure_ascii=False, indent=2))
    if any(report.get(key) for key in ('earlier_missing_inline_formulas', 'earlier_missing_display_formulas', 'earlier_missing_labels')):
        raise ValueError('Some content from the earlier manuscript was not retained; see the import report.')
    print(json.dumps({key: report[key] for key in ['entry','source_labels','source_statements','converted_proofs','converted_footnotes','bibliography_entries','source_display_formulas','schema_valid']}, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
