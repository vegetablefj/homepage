"""Build one native PreTeXt site with shared navigation and centered text."""
from pathlib import Path
from copy import deepcopy
import hashlib
import json
import re
import stat
import shutil
import subprocess
import sys
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

def note_targets():
    project = etree.parse(str(ROOT / "project.ptx"))
    settings_path = ROOT / "publication/note-settings.json"
    settings = json.loads(settings_path.read_text(encoding="utf-8")) if settings_path.exists() else {}
    defaults = settings.get("defaults", {})
    notes = []
    for target in project.xpath('//target[starts-with(@name, "note-")]'):
        source = etree.parse(str(ROOT / "source" / target.get("source")))
        source.xinclude()
        document = source.find("book") if source.find("book") is not None else source.find("article")
        document_id = document.get("{http://www.w3.org/XML/1998/namespace}id")
        directory = OUT / target.get("output-dir")
        publication = etree.parse(str(ROOT / "publication" / target.get("publication")))
        search = publication.find("html/search")
        crossrefs = publication.find("html/cross-references")
        knowl = publication.find("html/knowl")
        footnotes = settings.get("notes", {}).get(target.get("name"), {}).get("footnotes", defaults.get("footnotes", "margin"))
        if footnotes not in ("margin", "inline"):
            raise ValueError("Footnotes must be 'margin' or 'inline' for " + target.get("name"))
        features = {"search": search is not None and search.get("variant") not in (None, "none"),
                    "previews": crossrefs is not None and crossrefs.get("knowled") != "never",
                    "folded_proofs": knowl is not None and knowl.get("proof") == "yes"}
        notes.append({"target": target.get("name"), "directory": directory,
                      "entry": directory / (document_id + ".html"), "id": document_id,
                      "macros": source_macros(source), "features": features, "footnotes": footnotes})
    return notes

def finish_pages(directory, is_note=False, macros=None, footnotes="margin"):
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
        if is_note:
            # The title opens this note's entry; the byline links Home and Notes.
            for byline in document.xpath('//*[@id="ptx-masthead"]//p[contains(concat(" ", normalize-space(@class), " "), " byline ")]'):
                if not "".join(byline.itertext()).strip():
                    continue
                author_link = etree.Element("a", href=shared + "home.html")
                author_link.text = byline.text
                byline.text = None
                for child in list(byline):
                    byline.remove(child)
                    author_link.append(child)
                byline.append(author_link)
                author_link.tail = "'s "
                etree.SubElement(byline, "a", href=shared + "notes.html").text = "Notes"
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
    broken, controls = [], []
    for path in pages:
        document = html.document_fromstring(path.read_bytes())
        note = next((note for note in notes if path.parent == note["directory"]), None)
        enhanced = note is not None and any(note["features"].values())
        for node in document.xpath('//*[@href or @src]'):
            value = node.get("href") or node.get("src")
            url = urlsplit(value)
            if url.scheme or url.netloc:
                continue
            target = path.parent / unquote(url.path) if url.path else path
            if not target.exists():
                broken.append({"page": path.relative_to(OUT).as_posix(), "target": value})
            elif url.fragment and target.suffix == ".html":
                target_doc = html.document_fromstring(target.read_bytes())
                if not target_doc.xpath('//*[@id=$ref]', ref=unquote(url.fragment)):
                    broken.append({"page": path.relative_to(OUT).as_posix(), "target": value})
        for node in document.xpath('//*[@data-knowl]'):
            value = node.get("data-knowl")
            if value and not urlsplit(value).scheme and not (path.parent / urlsplit(value).path).exists():
                broken.append({"page": path.relative_to(OUT).as_posix(), "knowl": value})
        if document.xpath('//select | //iframe') or (not enhanced and document.xpath('//input | //details | //*[@data-knowl]')):
            controls.append(path.relative_to(OUT).as_posix())
    navigation = {}
    for path in pages:
        document = html.document_fromstring(path.read_bytes())
        body = document.find("body")
        kind = body.get("data-page-format") if body is not None else None
        if kind:
            count = len(document.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " treebuttons ")]'))
            navigation[path.relative_to(OUT).as_posix()] = {"format": kind, "reading_navigation": count > 0}
            if kind == "site" and count:
                raise RuntimeError("Reading navigation left on ordinary page: " + path.name)
    home = html.document_fromstring((OUT / "home.html").read_bytes())
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


def publish_to_root():
    """Synchronize generated files, preserving user files and repository data."""
    manifest_path = ROOT / ".site-files.json"
    previous = set(json.loads(manifest_path.read_text(encoding="utf-8"))) if manifest_path.exists() else set()
    generated = {path.relative_to(OUT).as_posix() for path in OUT.rglob("*") if path.is_file()}
    publishing = check_generated_ignore_rules(generated)
    report_path = REPORTS / "build-check.json"
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
            shutil.copy2(source, target)
    for relative in sorted(previous - generated):
        target = destination(relative)
        if Path(relative).parts[0] == 'pdfs':
            continue
        if target.is_file():
            target.chmod(target.stat().st_mode | stat.S_IWRITE)
            target.unlink()
    manifest_path.write_text(json.dumps(sorted(generated), indent=2) + "\n", encoding="utf-8")
    print("Updated the repository-root website. Existing attachments and domain settings were preserved.")


def main():
    notes = note_targets()
    if OUT.resolve() != (ROOT / ".build/site").resolve() or not OUT.resolve().is_relative_to(ROOT.resolve()):
        raise RuntimeError("Unexpected build output directory")
    if OUT.exists():
        remove_generated_tree(OUT)
    OUT.mkdir(parents=True)
    for target in ["web"] + [note["target"] for note in notes]:
        subprocess.run([sys.executable, "-X", "utf8", str(ROOT / "tools/pretext_cli.py"), "build", target, "--no-generate"], cwd=ROOT, check=True)
    finish_pages(OUT)
    for note in notes:
        finish_pages(note["directory"], is_note=True, macros=note["macros"], footnotes=note["footnotes"])
    write_note_redirects(notes)
    verify(notes)
    publish_to_root()
    scratch = ROOT / '.build/tmp'
    if scratch.exists():
        for directory in scratch.iterdir():
            if directory.is_dir() and directory.name.startswith(('ptx-', 'ptxcli_')):
                remove_generated_tree(directory)
    native_logs = ROOT / 'logs'
    if native_logs.exists():
        stored_logs = ROOT / '.build/logs'
        stored_logs.mkdir(parents=True, exist_ok=True)
        for logfile in native_logs.glob('*.log'):
            if logfile.is_file() and logfile.resolve().is_relative_to(native_logs.resolve()):
                shutil.move(str(logfile), str(stored_logs / logfile.name))
        if not any(native_logs.iterdir()):
            native_logs.rmdir()

if __name__ == "__main__":
    main()
