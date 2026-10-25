"""Build one native PreTeXt site with shared navigation and centered text."""
from pathlib import Path
from copy import deepcopy
from datetime import date
from datetime import datetime, timezone
import argparse
import hashlib
import json
import re
import stat
import shutil
import subprocess
import sys
import time
import uuid
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent
from tools.runtime import configure
configure()
from lxml import etree, html

OUT = ROOT / ".build/site"
REPORTS = ROOT / ".build/reports"
COPYRIGHT = "© 2026 Jie Fu. All rights reserved."


def remove_generated_tree(path):
    target = Path(path).resolve()
    if target == (ROOT / '.build').resolve() or not target.is_relative_to((ROOT / '.build').resolve()):
        raise RuntimeError('Refusing to remove a directory outside the build area')
    def make_writable_and_retry(function, name, error):
        failed = Path(name).resolve()
        if not failed.is_relative_to(target):
            raise RuntimeError('Unexpected cleanup path')
        failed.chmod(failed.stat().st_mode | stat.S_IWRITE)
        function(name)
    shutil.rmtree(target, onerror=make_writable_and_retry)

def source_macros(source):
    """Translate the note's simple TeX declarations into MathJax macro options."""
    text = "".join(source.xpath('/pretext/docinfo/macros/text()'))
    macros = {}
    def group(position):
        while position < len(text) and text[position].isspace():
            position += 1
        if position >= len(text) or text[position] != "{":
            return None, position
        start, depth = position + 1, 1
        position += 1
        while position < len(text):
            if text[position] == "\\":
                position += 2
                continue
            if text[position] == "{":
                depth += 1
            elif text[position] == "}":
                depth -= 1
                if depth == 0:
                    return text[start:position], position + 1
            position += 1
        return None, position
    for match in re.finditer(r'\\(newcommand|renewcommand|DeclareMathOperator)(\*)?\s*', text):
        position = match.end()
        if position < len(text) and text[position] == "{":
            name, position = group(position)
        else:
            name_match = re.match(r'\\[A-Za-z]+', text[position:])
            if not name_match:
                continue
            name = name_match.group()
            position += len(name)
        if not name or not re.fullmatch(r'\\[A-Za-z]+', name):
            continue
        arguments = 0
        while position < len(text) and text[position].isspace():
            position += 1
        arg_match = re.match(r'\[(\d+)\]', text[position:])
        if arg_match:
            arguments = int(arg_match.group(1))
            position += len(arg_match.group())
        value, position = group(position)
        if value is None:
            continue
        if match.group(1) == "DeclareMathOperator":
            value = r"\operatorname" + ("*" if match.group(2) else "") + "{" + value + "}"
        macros[name[1:]] = [value, arguments] if arguments else value
    return macros

def footnotes_as_margins(document):
    """Keep native source footnotes, showing their HTML content in the margin."""
    last_at_anchor = {}
    for footnote in document.xpath('//*[@id="ptx-content"]//details[contains(concat(" ", normalize-space(@class), " "), " ptx-footnote ")]'):
        contents = footnote.xpath('./div[contains(concat(" ", normalize-space(@class), " "), " ptx-footnote__contents ")]')
        anchors = footnote.xpath('ancestor::*[contains(concat(" ", normalize-space(@class), " "), " para ")][1]')
        if not contents or not anchors:
            continue
        anchor = anchors[0]
        original_id = footnote.get("id")
        if not original_id:
            continue
        if not anchor.get("id"):
            anchor.set("id", original_id + "-anchor")
        margin_id = "margin-" + original_id
        label = "".join(footnote.xpath('./summary//sup/text()')).strip()
        note = etree.Element("aside", id=margin_id, attrib={
            "class": "aside aside-like",
            "data-margin-anchor": anchor.get("id"),
            "data-margin-label": label,
            "data-margin-inline": "true",
        })
        etree.SubElement(note, "h4", attrib={"class": "heading"})
        paragraph = etree.SubElement(note, "div", attrib={"class": "para"})
        paragraph.text = contents[0].text
        for child in list(contents[0]):
            paragraph.append(child)
        marker = etree.Element("a", id=original_id, href="#" + margin_id, attrib={
            "class": "margin-note-marker", "aria-label": "Margin note " + label,
        })
        marker.text = label
        marker.tail = footnote.tail
        footnote.getparent().replace(footnote, marker)
        insertion = last_at_anchor.get(anchor.get("id"), anchor)
        insertion.addnext(note)
        last_at_anchor[anchor.get("id")] = note


def margin_notes(document):
    notes = document.xpath('//aside[starts-with(@id, "margin-")]')
    if not notes:
        return
    page = document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " ptx-page ")]')[0]
    rail = etree.Element("div", attrib={"class": "margin-notes", "role": "complementary", "aria-label": "Margin notes"})
    for number, note in enumerate(notes, 1):
        anchor = document.get_element_by_id(note.get("data-margin-anchor"), None) if note.get("data-margin-anchor") else note.getprevious()
        while anchor is not None and not anchor.get("id"):
            anchor = anchor.getprevious()
        if anchor is None:
            continue
        anchor_id = anchor.get("id")
        label = note.get("data-margin-label") or str(number)
        if not note.get("data-margin-inline"):
            marker = etree.SubElement(anchor, "a", href="#" + note.get("id"), attrib={"class": "margin-note-marker", "aria-label": "Margin note " + label})
            marker.text = label
        note.set("class", note.get("class", "") + " margin-note")
        note.set("data-margin-anchor", anchor_id)
        headings = note.xpath('./h2 | ./h3 | ./h4 | ./h5 | ./h6')
        if headings:
            heading = headings[0]
            titles = heading.xpath('.//span[contains(concat(" ", normalize-space(@class), " "), " title ")]')
            title = "".join(titles[0].itertext()).strip() if titles else ""
            heading.clear()
            heading.set("class", "heading")
            etree.SubElement(heading, "a", href="#" + anchor_id, attrib={"class": "margin-note-label"}).text = label + (". " + title if title else "")
        note.getparent().remove(note)
        rail.append(note)
    page.append(rail)

def update_banner(document):
    content = document.get_element_by_id("ptx-content")
    page_heading = content.xpath('.//*[self::h1 or self::h2][contains(concat(" ", normalize-space(@class), " "), " heading ")]')[0]
    title_spans = page_heading.xpath('./span[contains(concat(" ", normalize-space(@class), " "), " title ")]')
    current_title = deepcopy(title_spans[0]) if title_spans else etree.Element("span")
    if not title_spans:
        current_title.text = "".join(page_heading.itertext()).strip()
    current_title.set("class", "subtitle")
    current_title.tail = None
    for node in current_title.iter():
        node.attrib.pop("id", None)
    banner = document.xpath('//*[@id="ptx-masthead"]//*[contains(concat(" ", normalize-space(@class), " "), " ptx-banner-heading ")]')[0]
    name = deepcopy(banner.xpath('.//span[@class="title"]')[0])
    name.tail = None
    for node in list(banner):
        banner.remove(node)
    banner.text = None
    home_link = etree.SubElement(banner, "a", href="home.html")
    home_link.append(name)
    if content.xpath('./section[@id="home"]'):
        return
    home_link.tail = ": "
    banner.append(current_title)

def note_targets(selected=None):
    project = etree.parse(str(ROOT / "project.ptx"))
    settings_path = ROOT / "publication/note-settings.json"
    settings = json.loads(settings_path.read_text(encoding="utf-8")) if settings_path.exists() else {}
    defaults = settings.get("defaults", {})
    notes = []
    for target in project.xpath('//target[starts-with(@name, "note-")]'):
        if selected is not None and target.get("name") not in selected:
            continue
        source = etree.parse(str(ROOT / "source" / target.get("source")))
        source.xinclude()
        document = source.find("book") if source.find("book") is not None else source.find("article")
        document_id = document.get("{http://www.w3.org/XML/1998/namespace}id")
        directory = OUT / target.get("output-dir")
        publication = etree.parse(str(ROOT / "publication" / target.get("publication")))
        search = publication.find("html/search")
        crossrefs = publication.find("html/cross-references")
        knowl = publication.find("html/knowl")
        note_settings = settings.get("notes", {}).get(target.get("name"), {})
        footnotes = note_settings.get("footnotes", defaults.get("footnotes", "margin"))
        if footnotes not in ("margin", "inline"):
            raise ValueError("Footnotes must be 'margin' or 'inline' for " + target.get("name"))
        metadata = {key: note_settings.get(key, defaults.get(key)) for key in ("status", "last_updated")}
        if metadata["last_updated"]:
            date.fromisoformat(metadata["last_updated"])
        features = {"search": search is not None and search.get("variant") not in (None, "none"),
                    "previews": crossrefs is not None and crossrefs.get("knowled") != "never",
                    "folded_proofs": knowl is not None and knowl.get("proof") == "yes"}
        notes.append({"target": target.get("name"), "directory": directory,
                      "entry": directory / (document_id + ".html"), "id": document_id,
                      "source": ROOT / "source" / target.get("source"),
                      "macros": source_macros(source), "features": features, "footnotes": footnotes,
                      "latex_images": bool(source.xpath('//latex-image')), "metadata": metadata})
    return notes

def note_metadata_paragraph(metadata):
    """Render the same explicit review status and update date in both contexts."""
    metadata = metadata or {}
    status, updated = metadata.get("status"), metadata.get("last_updated")
    if not status and not updated:
        return None
    paragraph = etree.Element("p", attrib={"class": "note-metadata"})
    if status:
        label = etree.SubElement(paragraph, "span", attrib={"class": "note-review-status"})
        label.text = status
        if updated:
            label.tail = " · "
    if updated:
        label = etree.SubElement(paragraph, "span", attrib={"class": "note-last-updated"})
        label.text = "Last updated: "
        etree.SubElement(label, "time", datetime=updated).text = updated
    return paragraph

def finish_pages(directory, is_note=False, macros=None, footnotes="margin", metadata=None, listed_notes=None):
    shared = "../" * len(directory.relative_to(OUT).parts)
    layout_version = hashlib.sha256((ROOT / "source/layout.css").read_bytes()).hexdigest()[:10]
    script_version = hashlib.sha256((ROOT / "source/layout.js").read_bytes()).hexdigest()[:10]
    config = {
        "tex": {"inlineMath": [[r"\(", r"\)"]], "displayMath": [[r"\[", r"\]"]],
                "macros": {"C": r"\mathbb{C}", "Pone": r"\mathbb{P}^1_{\mathbb{C}}", "cO": r"\mathcal{O}", "ord": r"\operatorname{ord}", "lt": "<", "gt": ">", "amp": "&"}},
        "options": {"ignoreHtmlClass": "ignore-math", "processHtmlClass": "process-math", "enableMenu": False},
    }
    config["tex"]["macros"].update(macros or {})
    for core_js in directory.glob('_static/pretext/js/dist/pretext-core.js'):
        javascript = core_js.read_text(encoding="utf-8")
        javascript = javascript.replace('Prism.highlightAllUnder(this.outputElement);', 'if (window.Prism) Prism.highlightAllUnder(this.outputElement);')
        javascript = javascript.replace('process_workspace();\n            }\n          case 27:', 'process_workspace();\n            }\n            break;\n          case 27:')
        javascript = javascript.replace('else if (knowl_focus_stack.length > 0)', 'else if (typeof knowl_focus_stack !== "undefined" && typeof knowl_focus_stack_uid !== "undefined" && Array.isArray(knowl_focus_stack) && Array.isArray(knowl_focus_stack_uid) && knowl_focus_stack.length > 0)')
        core_js.write_text(javascript, encoding="utf-8")
    for path in directory.glob("*.html"):
        document = html.document_fromstring(path.read_bytes())
        head = document.find("head")
        body = document.find("body")
        if document.get_element_by_id("ptx-content", None) is None:
            continue
        # Native index navigation includes letters with no corresponding group.
        # Keep those letters as plain text rather than broken fragment links.
        index_groups = set(document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " indexletter ")]/@id'))
        for jump in document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " indexjump ")]/a[starts-with(@href, "#indexletter-")]'):
            if jump.get("href")[1:] not in index_groups:
                jump.tag = "span"
                jump.attrib.clear()
                jump.set("class", "index-letter-empty")
        if is_note:
            # The title opens this note's entry; the byline links Home and Notes.
            title_containers = document.xpath('//*[@id="ptx-masthead"]//*[contains(concat(" ", normalize-space(@class), " "), " title-container ")]')
            for title_container in title_containers:
                bylines = title_container.xpath('./p[contains(concat(" ", normalize-space(@class), " "), " byline ")]')
                byline = bylines[0] if bylines else etree.SubElement(title_container, "p", attrib={"class": "byline"})
                byline.clear()
                byline.set("class", "byline")
                author_link = etree.Element("a", href=shared + "home.html")
                author_link.text = "Jie Fu"
                byline.append(author_link)
                author_link.tail = "'s "
                etree.SubElement(byline, "a", href=shared + "notes.html").text = "Notes"
                for previous in title_container.xpath('./p[@class="note-metadata"]'):
                    title_container.remove(previous)
                note_metadata = note_metadata_paragraph(metadata)
                if note_metadata is not None:
                    byline.addnext(note_metadata)
        else:
            update_banner(document)
            menu_toggle = document.get_element_by_id("ptx-toc-toggle", None)
            if menu_toggle is not None:
                menu_toggle.set("title", "Menu")
                for label in menu_toggle.xpath('./span[@class="name"]'):
                    label.text = "Menu"
            site_menu = document.get_element_by_id("ptx-toc", None)
            if site_menu is not None:
                site_menu.set("aria-label", "Menu")
            for link in document.xpath('//*[@id="ptx-content"]//a[@href]'):
                note_metadata = (listed_notes or {}).get(link.get("href"))
                items = link.xpath('ancestor::li[1]')
                if note_metadata and items and not items[0].xpath('./p[@class="note-metadata"]'):
                    paragraph = note_metadata_paragraph(note_metadata)
                    if paragraph is not None:
                        items[0].append(paragraph)
        body.set("data-page-format", "note" if is_note else "site")
        body.set("class", body.get("class", "") + (" note-page" if is_note else " site-page"))
        if is_note:
            if footnotes == "margin":
                footnotes_as_margins(document)
            margin_notes(document)
        for paragraph_id, list_id in (("preprints-entries", "preprints-list"), ("home-preprints-entries", "home-preprints-list")):
            parent = document.get_element_by_id(paragraph_id, None)
            lists = parent.xpath('.//ol') if parent is not None else []
            preprints = lists[0] if lists else document.get_element_by_id(list_id, None)
            if preprints is not None:
                preprints.set("id", list_id)
                preprints.set("reversed", "reversed")
                preprints.set("start", str(len(preprints.findall("li"))))
        profile = document.get_element_by_id("home-profile", None)
        if profile is not None:
            introduction = profile.getparent()
            introduction.remove(profile)
            profile.set("class", profile.get("class", "") + " profile-sidebar")
            profile.set("role", "complementary")
            profile.set("aria-label", "About Jie Fu and contact information")
            page = document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " ptx-page ")]')[0]
            page.append(profile)
            if not len(introduction) and not (introduction.text or "").strip():
                introduction.getparent().remove(introduction)
        if not is_note:
            for node in document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " treebuttons ") or contains(concat(" ", normalize-space(@class), " "), " ptx-content-footer ")]'):
                node.getparent().remove(node)
        for node in head.xpath('./script'):
            if "lunr.min.js" in (node.get("src") or ""):
                node.set("src", shared + "vendor/lunr/lunr.min.js")
                for attribute in ("integrity", "crossorigin", "referrerpolicy"):
                    node.attrib.pop(attribute, None)
            if "MathJax" in (node.text or "") or "startMathJax" in (node.text or "") or "mathjax" in (node.get("src") or "").lower():
                head.remove(node)
        for node in document.xpath('//*[@id="latex-macros" or @id="ptx-page-footer"] | //*[contains(concat(" ", normalize-space(@class), " "), " autopermalink ")]'):
            node.getparent().remove(node)
        for node in document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " para ")]'):
            if " ".join("".join(node.itertext()).split()) == COPYRIGHT:
                node.getparent().remove(node)
        footer = etree.SubElement(body, "footer", id="site-copyright", attrib={"class": "site-copyright"})
        etree.SubElement(footer, "p").text = COPYRIGHT
        etree.SubElement(head, "link", rel="stylesheet", href=shared + "layout.css?v=" + layout_version)
        etree.SubElement(head, "script", src=shared + "layout.js?v=" + script_version, defer="defer")
        etree.SubElement(head, "link", rel="icon", href=shared + "favicon.ico", type="image/x-icon")
        etree.SubElement(head, "script").text = "window.MathJax = " + json.dumps(config) + ";"
        etree.SubElement(head, "script", src=shared + "vendor/mathjax/tex-chtml.js", defer="defer")
        path.write_bytes(etree.tostring(document, method="html", encoding="utf-8", doctype="<!DOCTYPE html>", pretty_print=True))
    if not is_note:
        shutil.copy2(ROOT / "source/layout.css", OUT / "layout.css")
        shutil.copy2(ROOT / "source/layout.js", OUT / "layout.js")
        shutil.copy2(ROOT / "source/assets/favicon.ico", OUT / "favicon.ico")
        (OUT / "pdfs").mkdir(exist_ok=True)
        for attachment in (ROOT / "source/assets").glob("*.pdf"):
            shutil.copy2(attachment, OUT / "pdfs" / attachment.name)
        shutil.copytree(ROOT / "vendor", OUT / "vendor", dirs_exist_ok=True)

def write_note_redirects(notes):
    for note in notes:
        destination = note["entry"].relative_to(OUT).as_posix()
        redirect = html.fromstring('<html lang="en-US"><head><meta charset="utf-8"><title>Note</title></head><body></body></html>')
        etree.SubElement(redirect.find("head"), "meta", attrib={"http-equiv": "refresh", "content": "0;url=" + destination})
        etree.SubElement(redirect.find("body"), "a", href=destination).text = "Open note"
        (OUT / (note["id"] + ".html")).write_bytes(etree.tostring(redirect, method="html", encoding="utf-8", doctype="<!DOCTYPE html>"))

def verify(notes):
    pages = list(OUT.glob("*.html"))
    for note in notes:
        pages.extend(note["directory"].glob("*.html"))
    broken, controls, documents, identifiers = [], [], {}, {}
    site_root = OUT.resolve()

    def parsed(path):
        path = path.resolve()
        if path not in documents:
            documents[path] = html.document_fromstring(path.read_bytes())
        return documents[path]

    def has_fragment(path, fragment):
        path = path.resolve()
        if path not in identifiers:
            identifiers[path] = set(parsed(path).xpath('//*[@id]/@id'))
        return unquote(fragment) in identifiers[path]

    for path in pages:
        document = parsed(path)
        note = next((note for note in notes if path.parent == note["directory"]), None)
        enhanced = note is not None and any(note["features"].values())
        for node in document.xpath('//*[@href or @src or @data-knowl]'):
            for attribute in ("href", "src", "data-knowl"):
                value = node.get(attribute)
                if not value:
                    continue
                url = urlsplit(value)
                if url.scheme or url.netloc:
                    continue
                local_path = unquote(url.path)
                if local_path.startswith('/'):
                    target = (site_root / local_path.lstrip('/')).resolve()
                else:
                    target = (path.parent / local_path).resolve() if local_path else path.resolve()
                if (not target.is_relative_to(site_root) or not target.is_file()
                        or (url.fragment and target.suffix == ".html" and not has_fragment(target, url.fragment))):
                    key = "knowl" if attribute == "data-knowl" else "target"
                    broken.append({"page": path.relative_to(OUT).as_posix(), key: value})
        if document.xpath('//select | //iframe') or (not enhanced and document.xpath('//input | //details | //*[@data-knowl]')):
            controls.append(path.relative_to(OUT).as_posix())
    navigation = {}
    for path in pages:
        document = parsed(path)
        body = document.find("body")
        kind = body.get("data-page-format") if body is not None else None
        if kind:
            count = len(document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " treebuttons ")]'))
            navigation[path.relative_to(OUT).as_posix()] = {"format": kind, "reading_navigation": count > 0}
            if kind == "site" and count:
                raise RuntimeError("Reading navigation left on ordinary page: " + path.name)
    home = parsed(OUT / "home.html")
    home_sections = [node.get("id") for node in home.xpath('//*[@id="home"]/section[@class="section"]')]
    expected_sections = ["home-research-interests", "home-publications", "home-preprints", "home-selected-notes"]
    if home_sections != expected_sections or len(home.xpath('//*[@id="home-profile"]')) != 1:
        raise RuntimeError("Home sections or profile missing from the single Home page")
    report = {"theme": "default-modern", "native_navigation": True, "centered_body": True, "text_width_target_px": 760, "home_sections": home_sections, "home_profile": True, "independent_notes": [{"entry": note["entry"].relative_to(OUT).as_posix(), "features": note["features"], "footnotes": note["footnotes"]} for note in notes], "page_formats": navigation, "broken_links": broken, "unexpected_optional_controls": controls}
    REPORTS.mkdir(parents=True, exist_ok=True)
    (REPORTS / "build-check.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    if broken or controls:
        raise RuntimeError(json.dumps(report, indent=2))
    print("Built the homepage and independent PreTeXt notes. All local links resolve.")

def check_generated_ignore_rules(generated):
    """Check publishable paths without requiring them to be staged or tracked."""
    if not (ROOT / ".git").exists() or shutil.which("git") is None:
        return {"git_ignore_check": "skipped", "ignored_generated_files": []}
    try:
        result = subprocess.run(
            ["git", "check-ignore", "--no-index", "-z", "--stdin"],
            input="\0".join(sorted(generated)) + "\0", cwd=ROOT,
            capture_output=True, text=True, encoding="utf-8",
        )
    except FileNotFoundError:
        return {"git_ignore_check": "skipped", "ignored_generated_files": []}
    if result.returncode not in (0, 1):
        raise RuntimeError("Could not check generated files against Git ignore rules: " + result.stderr.strip())
    ignored = sorted(path for path in result.stdout.split("\0") if path)
    return {"git_ignore_check": "failed" if ignored else "passed", "ignored_generated_files": ignored}


def publish_to_root(scopes=None, report_name="build-check.json"):
    """Synchronize generated files, preserving user files and repository data."""
    manifest_path = ROOT / ".site-files.json"
    previous = set(json.loads(manifest_path.read_text(encoding="utf-8"))) if manifest_path.exists() else set()
    def in_scope(relative):
        return scopes is None or any(relative == scope or relative.startswith(scope + "/") for scope in scopes)

    generated = {path.relative_to(OUT).as_posix() for path in OUT.rglob("*") if path.is_file() and in_scope(path.relative_to(OUT).as_posix())}
    publishing = check_generated_ignore_rules(generated)
    report_path = REPORTS / report_name
    report = json.loads(report_path.read_text(encoding="utf-8")) if report_path.exists() else {}
    report["publishing"] = publishing
    REPORTS.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    if publishing["ignored_generated_files"]:
        raise RuntimeError(
            "Generated website files are excluded by Git ignore rules. Update .gitignore before publishing:\n"
            + "\n".join(publishing["ignored_generated_files"])
        )
    protected = {".git", ".venv", ".build", "source", "publication", "xsl", "tools", "cv", "images"}
    protected_files = {"CNAME", ".nojekyll", ".gitignore", ".site-files.json", "README.md", "README_cn.md", "NOTES.md", "NOTES_cn.md", "project.ptx", "build.py", "requirements.txt", "Rebuild.ps1", "Start-preview.ps1"}

    def destination(relative):
        target = (ROOT / relative).resolve()
        if not target.is_relative_to(ROOT.resolve()) or target == ROOT.resolve() or target.relative_to(ROOT.resolve()).parts[0] in protected or target.relative_to(ROOT.resolve()).as_posix() in protected_files:
            raise RuntimeError("Unsafe generated-file destination: " + relative)
        return target

    for relative in sorted(generated):
        target = destination(relative)
        target.parent.mkdir(parents=True, exist_ok=True)
        source = OUT / relative
        if not target.is_file() or source.read_bytes() != target.read_bytes():
            if target.is_file():
                target.chmod(target.stat().st_mode | stat.S_IWRITE)
            for attempt in range(4):
                try:
                    shutil.copy2(source, target)
                    break
                except OSError as error:
                    if getattr(error, 'winerror', None) != 1224 or attempt == 3:
                        error.add_note(f'Updating generated file: {relative}')
                        raise
                    # Windows may briefly retain a mapped view of a web asset.
                    time.sleep(0.5 * (attempt + 1))
    for relative in sorted(relative for relative in previous - generated if in_scope(relative)):
        target = destination(relative)
        if Path(relative).parts[0] == 'pdfs':
            continue
        if target.is_file():
            target.chmod(target.stat().st_mode | stat.S_IWRITE)
            target.unlink()
    retained = {relative for relative in previous if not in_scope(relative)}
    manifest_path.write_text(json.dumps(sorted(retained | generated), indent=2) + "\n", encoding="utf-8")
    if scopes is None:
        print("Updated the repository-root website. Existing attachments and domain settings were preserved.")
    else:
        print("Updated only the selected note and its redirect in the local website.")


def included_sources(source, seen=None):
    """Find local XInclude dependencies without expanding or validating them."""
    seen = set() if seen is None else seen
    source = Path(source).resolve()
    if source in seen:
        return seen
    seen.add(source)
    try:
        document = etree.parse(str(source), etree.XMLParser(no_network=True))
    except (etree.XMLSyntaxError, OSError):
        # An invalid current chapter must still be mapped to its note so that
        # the real validator reports its error before output is replaced.
        return seen
    for include in document.xpath('//xi:include', namespaces={'xi': 'http://www.w3.org/2001/XInclude'}):
        href = urlsplit(include.get('href', ''))
        if href.scheme or href.netloc or not href.path:
            continue
        included = (source.parent / unquote(href.path)).resolve()
        if include.get('parse') == 'text':
            seen.add(included)
        else:
            included_sources(included, seen)
    return seen


def select_note(source_path=None, target_name=None):
    project = etree.parse(str(ROOT / 'project.ptx'))
    targets = project.xpath('//target[starts-with(@name, "note-")]')
    by_name = {target.get('name'): target for target in targets}
    if target_name is not None and target_name not in by_name:
        raise ValueError('Choose a note target from: ' + ', '.join(by_name))
    source = Path(source_path).expanduser().resolve() if source_path is not None else None
    if source is not None:
        if not source.is_file() or source.suffix.lower() != '.ptx' or not source.is_relative_to(ROOT.resolve()):
            raise ValueError('Open an existing PTX chapter inside this project before rebuilding the current note.')
        candidates = []
        for target in targets:
            entry = (ROOT / 'source' / target.get('source')).resolve()
            publication = (ROOT / 'publication' / target.get('publication')).resolve()
            if source == publication or source in included_sources(entry):
                candidates.append(target.get('name'))
            elif source.is_relative_to(entry.parent):
                try:
                    etree.parse(str(entry), etree.XMLParser(no_network=True))
                except etree.XMLSyntaxError:
                    # An unreadable root cannot reveal its dependencies. Map
                    # its folder only so strict validation reports the broken
                    # root; a valid root never treats an orphan draft as input.
                    candidates.append(target.get('name'))
        if target_name is not None:
            if target_name not in candidates:
                raise ValueError('The selected file does not belong to ' + target_name)
        elif len(candidates) == 1:
            target_name = candidates[0]
        elif len(candidates) > 1:
            raise ValueError('This source is shared by several notes. Choose --target explicitly or run the full rebuild.')
        else:
            raise ValueError('This file is not part of an independent note. Use the full-site rebuild for homepage or shared-template changes.')
    return target_name, source


def verify_note(note):
    """Check the new note against its stage and the existing local website."""
    directory = note['directory'].resolve()
    pages = list(directory.glob('*.html')) + [OUT / (note['id'] + '.html')]
    broken, controls, documents = [], [], {}

    def parsed(path):
        path = path.resolve()
        if path not in documents:
            documents[path] = html.document_fromstring(path.read_bytes())
        return documents[path]

    def is_local_note_redirect(document, page):
        if document.get_element_by_id('ptx-content', None) is not None:
            return False
        redirects = document.xpath('//meta[translate(@http-equiv, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz")="refresh"]/@content')
        if len(redirects) != 1:
            return False
        match = re.fullmatch(r'\s*\d+(?:\.\d+)?\s*;\s*url\s*=\s*(.*?)\s*', redirects[0], re.IGNORECASE)
        if match is None:
            return False
        url = urlsplit(match.group(1).strip('\'"'))
        if url.scheme or url.netloc or not url.path:
            return False
        target = (page.parent / unquote(url.path)).resolve()
        if not target.is_relative_to(directory) or not target.is_file():
            return False
        destination = parsed(target)
        body = destination.find('body')
        return (body is not None and body.get('data-page-format') == 'note'
                and (not url.fragment or bool(destination.xpath('//*[@id=$ref]', ref=unquote(url.fragment)))))

    for page in pages:
        document = parsed(page)
        for node in document.xpath('//*[@href or @src or @data-knowl]'):
            for attribute in ('href', 'src', 'data-knowl'):
                value = node.get(attribute)
                if not value:
                    continue
                url = urlsplit(value)
                if url.scheme or url.netloc:
                    continue
                if url.path.startswith('/'):
                    target = (OUT / unquote(url.path).lstrip('/')).resolve()
                else:
                    target = (page.parent / unquote(url.path)).resolve() if url.path else page.resolve()
                if not target.is_relative_to(OUT.resolve()):
                    broken.append({'page': page.relative_to(OUT).as_posix(), 'target': value})
                    continue
                # References into other notes or shared resources must be
                # checked against the files that are actually being served.
                if not target.is_relative_to(directory) and target != page.resolve():
                    target = ROOT / target.relative_to(OUT.resolve())
                if not target.is_file():
                    broken.append({'page': page.relative_to(OUT).as_posix(), 'target': value})
                elif url.fragment and target.suffix == '.html' and not parsed(target).xpath('//*[@id=$ref]', ref=unquote(url.fragment)):
                    broken.append({'page': page.relative_to(OUT).as_posix(), 'target': value})
        if document.xpath('//select | //iframe'):
            controls.append(page.relative_to(OUT).as_posix())
        if page.parent == directory and not is_local_note_redirect(document, page):
            body = document.find('body')
            if body is None or body.get('data-page-format') != 'note':
                raise RuntimeError('Note postprocessing did not finish: ' + page.name)
    report = {'target': note['target'], 'entry': note['entry'].relative_to(OUT).as_posix(),
              'features': note['features'], 'footnotes': note['footnotes'],
              'pages_checked': len(pages), 'broken_links': broken, 'unexpected_optional_controls': controls}
    REPORTS.mkdir(parents=True, exist_ok=True)
    (REPORTS / 'note-build-check.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    if broken or controls:
        raise RuntimeError(json.dumps(report, indent=2))
    print('Selected note postprocessing and local links: passed.')


def editor_page_url(note, source):
    destination = note['entry']
    fragment = ''
    if source is not None:
        try:
            document = etree.parse(str(source), etree.XMLParser(no_network=True))
        except (etree.XMLSyntaxError, OSError):
            # The editor may have changed again while the completed build was
            # running. The successfully generated note still has a valid entry.
            return '/' + destination.relative_to(OUT).as_posix()
        identifiers = document.xpath('/*/@xml:id | /*/book/@xml:id | /*/article/@xml:id',
                                     namespaces={'xml': 'http://www.w3.org/XML/1998/namespace'})
        if identifiers:
            identifier = identifiers[0]
            for page in note['directory'].glob('*.html'):
                rendered = html.document_fromstring(page.read_bytes())
                anchors = rendered.xpath('//*[@id=$ref]', ref=identifier)
                if anchors:
                    destination = page
                    if not rendered.xpath('//*[@id="ptx-content"]/*[@id=$ref]', ref=identifier):
                        fragment = '#' + identifier
                    break
    return '/' + destination.relative_to(OUT).as_posix() + fragment


def write_editor_preview(note, source):
    prefix = '/' + note['directory'].relative_to(OUT).as_posix() + '/'
    report = {'revision': uuid.uuid4().hex, 'target': note['target'],
              'url': editor_page_url(note, source), 'note_prefix': prefix,
              'source': str(source or note['source']),
              'built_at': datetime.now(timezone.utc).isoformat()}
    path = REPORTS / 'editor-preview.json'
    pending = path.with_suffix('.json.tmp')
    pending.write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    pending.replace(path)
    print('Local preview ready: ' + report['url'])


def build_note(target, source=None):
    # Validate only the selected assembled note, retaining the exact same
    # pinned schema and fail-closed behavior used by the full-site build.
    subprocess.run([sys.executable, '-X', 'utf8', str(ROOT / 'tools/validate_sources.py'), target], cwd=ROOT, check=True)
    note = note_targets({target})[0]
    directory = note['directory'].resolve()
    notes_area = (OUT / 'notes').resolve()
    if not directory.is_relative_to(notes_area) or directory == notes_area:
        raise RuntimeError('Unexpected note build directory')
    if not (ROOT / 'home.html').is_file() or not (ROOT / 'layout.js').is_file():
        raise RuntimeError('Build the full website once before using the current-note shortcut.')
    if directory.exists():
        remove_generated_tree(directory)
    OUT.mkdir(parents=True, exist_ok=True)
    if note['latex_images']:
        subprocess.run([sys.executable, '-X', 'utf8', str(ROOT / 'tools/pretext_cli.py'), 'generate', 'latex-image', '-t', target, '--only-changed'], cwd=ROOT, check=True)
    subprocess.run([sys.executable, '-X', 'utf8', str(ROOT / 'tools/pretext_cli.py'), 'build', target, '--no-generate'], cwd=ROOT, check=True)
    finish_pages(note['directory'], is_note=True, macros=note['macros'], footnotes=note['footnotes'], metadata=note['metadata'])
    write_note_redirects([note])
    verify_note(note)
    scopes = [note['directory'].relative_to(OUT).as_posix(), note['id'] + '.html']
    publish_to_root(scopes=scopes, report_name='note-build-check.json')
    write_editor_preview(note, source)


def build_all():
    notes = note_targets()
    # A failed or unavailable schema validator must stop before replacing output.
    subprocess.run([sys.executable, '-X', 'utf8', str(ROOT / 'tools/validate_sources.py')],
                   cwd=ROOT, check=True)
    if OUT.resolve() != (ROOT / ".build/site").resolve() or not OUT.resolve().is_relative_to(ROOT.resolve()):
        raise RuntimeError("Unexpected build output directory")
    if OUT.exists():
        remove_generated_tree(OUT)
    OUT.mkdir(parents=True)
    for target in ["web"] + [note["target"] for note in notes]:
        if any(note["target"] == target and note["latex_images"] for note in notes):
            subprocess.run([sys.executable, "-X", "utf8", str(ROOT / "tools/pretext_cli.py"), "generate", "latex-image", "-t", target, "--only-changed"], cwd=ROOT, check=True)
        subprocess.run([sys.executable, "-X", "utf8", str(ROOT / "tools/pretext_cli.py"), "build", target, "--no-generate"], cwd=ROOT, check=True)
    listed_notes = {note["entry"].relative_to(OUT).as_posix(): note["metadata"] for note in notes}
    finish_pages(OUT, listed_notes=listed_notes)
    for note in notes:
        finish_pages(note["directory"], is_note=True, macros=note["macros"], footnotes=note["footnotes"], metadata=note["metadata"])
    write_note_redirects(notes)
    verify(notes)
    publish_to_root()


def tidy_build_files():
    scratch = ROOT / '.build/tmp'
    if scratch.exists():
        for directory in scratch.iterdir():
            if directory.is_dir() and directory.name.startswith(('ptx-', 'ptxcli_')):
                try:
                    remove_generated_tree(directory)
                except PermissionError as error:
                    if getattr(error, 'winerror', None) not in (32, 33):
                        raise
                    print(f'Retained temporary build directory while a file is in use: {directory.name}')
    native_logs = ROOT / 'logs'
    if native_logs.exists():
        stored_logs = ROOT / '.build/logs'
        stored_logs.mkdir(parents=True, exist_ok=True)
        for logfile in native_logs.glob('*.log'):
            if logfile.is_file() and logfile.resolve().is_relative_to(native_logs.resolve()):
                shutil.move(str(logfile), str(stored_logs / logfile.name))
        if not any(native_logs.iterdir()):
            native_logs.rmdir()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', help='PTX file currently being edited; rebuild only its independent note')
    parser.add_argument('--target', help='Rebuild only one note target from project.ptx')
    arguments = parser.parse_args()
    if arguments.source is not None or arguments.target is not None:
        try:
            target, source = select_note(arguments.source, arguments.target)
        except ValueError as error:
            parser.error(str(error))
        build_note(target, source)
    else:
        build_all()
    tidy_build_files()

if __name__ == "__main__":
    main()
