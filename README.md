# Jie Fu’s homepage

[中文说明](README_cn.md) · [Notes guide](NOTES.md)

This repository contains the PreTeXt sources and the generated static website. The working repository is `D:\homepage`, which is also the GitHub Pages publishing root. Published page content and navigation are in English.

Website construction was assisted by a large language model.

## Note visibility

The Notes page retains four existing entries. Five additional notes are built and uploaded but temporarily unlisted. The Home selection remains empty. Unlisted files are public and can be reached by direct links; omission from a list is not access control.

## Edit the homepage

Edit the sources, then rebuild. The HTML, styles, and reading pages in the publishing root are generated outputs.

| Location | Purpose |
| --- | --- |
| `source/main.ptx` | Main site structure and page includes |
| `source/sections/` | Home, research, publications, and resource pages |
| `source/preprints-list.ptx` | Shared preprints list on Home and Preprints |
| `source/notes-list.ptx` | Visible entries on the Notes page; new notes can remain unlisted |
| `source/selected-notes-list.ptx` | Separate Home selection, currently empty |
| `source/profile.ptx` | Home portrait, visit information, and contact details |
| `source/layout.css` | Shared site layout |
| `publication/` | Site and note publication settings |
| `xsl/` | Project extensions to the PreTeXt presentation |
| `project.ptx`, `build.py`, `tools/` | Build targets, validation, and synchronization |

For mathematical note sources, references, and reading features, use [NOTES.md](NOTES.md). The nine active notes cover Fujita freeness, Nagata and Seshadri constants, cubic fourfold rationality, 1-category theory, toric geometry, hyperkähler geometry, cubic fourfolds and K3 structures, homological algebra, and hyperkähler SYZ. They use the current shared note template and navigation. Adding a build target does not require adding a visible Notes entry. Example note sources remain available for reference; they are excluded from production builds and site listings.

## Edit notes in VS Code

Open the **folder** `D:\homepage` in VS Code, then edit the chapter PTX files under `source/notes/`. The workspace recommends PreTeXt-tools (`oscarlevin.pretext-tools`), uses the project's Python environment, and enables word wrapping and two-space indentation. Automatic whole-file formatting and automatic paste conversion are off. If this checkout moves, update `pretext-tools.pythonPath` in `.vscode/settings.json`.

| Shortcut | Action |
| --- | --- |
| `Ctrl+Alt+L` | Open the extension's live preview of the active source file; it updates on save |
| `Ctrl+Shift+B` | Save open files, validate and rebuild only the active note, then refresh its local website preview |

Keep a chapter, note root, or note-specific publication PTX file active when using the build shortcut. The first successful build opens its corresponding chapter in the browser; subsequent builds refresh a connected preview of the same note and retain the reading position. The preview server starts automatically on `http://localhost:8765/`. A failed validation or build leaves the previous website and preview unchanged. These tasks do not commit, push, or deploy.

The shortcut rebuilds the entire selected note so its numbering, search index, and reference previews stay consistent. Other notes and the homepage remain untouched. For homepage content, shared styles/scripts, note-list metadata, or shared configuration changes, run **Terminal → Run Task → PreTeXt: Rebuild entire website (local)** or use `Rebuild.ps1`.

The extension's live preview is useful for editing text and formulas. Check the project's final navigation, margins, and layout in the localhost preview, which uses the same postprocessing as the full build. The refresh script is added by the loopback server to page responses only; it is never written into publishable HTML.

The same current-note workflow can be run without VS Code:

```powershell
.\.venv\Scripts\python.exe tools/editor_preview.py --source source/notes/hyperkahler/chapter-02-twistor.ptx
```

## Rebuild and preview

From PowerShell in the repository, set up a local Python environment:

```powershell
Set-Location D:\homepage
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe tools/setup_validation.py
```

If Python is installed through the Windows launcher, use `py` instead of `python` in the environment-creation command. The requirements pin PreTeXt to `2.53.0`.

After source changes:

```powershell
.\Rebuild.ps1
.\Start-preview.ps1
```

Open [http://localhost:8765/](http://localhost:8765/). The preview serves the repository root; keep its terminal open and press Ctrl+C to stop it.

`Rebuild.ps1` selects the repository’s `.venv` Python first, then `python` or `py`. To select another interpreter explicitly:

```powershell
.\Rebuild.ps1 -PythonPath 'C:\path\to\python.exe'
```

An existing dependency runtime can be supplied through the `PRETEXT_PYTHONPATH` environment variable, pointing to its package directory.

The one-time `setup_validation.py` command downloads pinned, SHA-256-checked Jing. On Windows x64 without Java, it also extracts a portable Temurin JRE into `.build/cache/validation`, without changing the system installation or PATH. Other platforms require Java 8 or later. Routine rebuilds do not download dependencies.

Without a selection, `Rebuild.ps1` first uses Jing to validate the XInclude-expanded content of every active target against the unchanged pinned RNG. With `-SourcePath path\to\chapter.ptx` or `-Target note-hyperkahler`, it validates and rebuilds only that note. Only assembly-generated `xml:base` attributes are omitted. A missing validator or invalid source stops the build before existing output is replaced. Results for the latest validation are saved in `.build/reports/source-validation.json`. Run `.\.venv\Scripts\python.exe tools/validate_sources.py` separately to check content, optionally followed by target names.

The build stages output in `.build/site` and validates it before synchronizing generated files to the repository root. `.site-files.json` records the generated files and limits stale-file deletion to that managed set. Local cache, temporary files, and reports live under ignored `.build/cache`, `.build/tmp`, and `.build/reports`. PreTeXt’s core is automatically extracted from the pinned package into the cache.

Local MathJax and Lunr assets and their licenses are tracked. Existing PDFs and the CV source are retained.

## Publish with GitHub Pages

Preserve the note visibility choices recorded above when rebuilding or publishing.

Use the existing GitHub Pages deployment branch and its `/ (root)` publishing folder.

1. Rebuild and review the local preview.
2. Review the changed sources, generated files, and `.site-files.json`.
3. Commit and push those changes to the deployment branch.

Keep the repository’s `.git` directory, custom-domain file `CNAME`, and `.nojekyll` file in place. The latter permits the generated PreTeXt assets to be served without Jekyll processing.

Backups are stored outside the repository and are managed separately by the owner. They are not part of the build or publishing inputs.
