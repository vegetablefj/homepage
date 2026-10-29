# Website maintenance

[Project entry](../README.md) · [PreTeXt notes guide](note-authoring.md) · [Writing guides](../prompts/README.md)

This document describes the source checkout at `D:\homepage`. Commands and code paths below are relative to that directory unless stated otherwise. Website construction was assisted by a large language model. Published content and navigation are in English.

## Source and output

The checkout contains authored content, templates, configuration, and tools. Builds first use ignored `.build/staging/`; after verification, the finished website is synchronized to ignored `.build/site/`. Local preview serves `.build/site/`. Generated HTML is not copied back into the source root. Public paths such as `preprints.html`, `ai4math.html`, and `notes/fujita/fujita-notes.html` stay unchanged.

| Location | Purpose |
| --- | --- |
| `source/main.ptx`, `source/sections/` | Main site structure and ordinary pages |
| `source/preprints-list.ptx`, `source/profile.ptx` | Shared preprints list, portrait, visit information, and contact details |
| `source/notes/<slug>/` | One note's root PTX, chapters, bibliography, images, and editing brief |
| `source/layout.css`, `source/layout.js` | Shared layout and reading behavior |
| `source/assets/` | Native PreTeXt external assets and current PDF sources |
| `source/static/` | Retained static files copied to their existing public paths |
| `config/notes.json` | Note catalog: source, publication overrides, metadata, and listing choices |
| `publication/note-template.ptx`, `publication/publication.ptx` | Shared note template and main-site settings |
| `xsl/` | Local extensions to PreTeXt rendering |
| `docs/`, `prompts/`, `planning/` | Technical documents, mathematical writing guides, and topic plans |
| `build.py`, `tools/` | Configuration generation, validation, builds, checks, and preview |
| `examples/` | Retained example sources and publication settings |
| `vendor/`, `cv/` | Third-party assets with licenses and original CV materials |
| `.build/cache/`, `.build/tmp/`, `.build/reports/` | Reproducible runtime files, temporary files, and build reports |

The root `project.ptx` is a generated native bootstrap kept in Git so PreTeXt tools can discover the project immediately after checkout. `publication/generated/`, `publication/generated/note-settings.json`, and `source/generated/` are generated and ignored by Git. A build regenerates all of these files from the catalog and shared template. Keep detailed operational instructions here and PreTeXt implementation in the [notes guide](note-authoring.md).

## Note catalog and visibility

Edit `config/notes.json`, then build. To synchronize native configuration without rebuilding HTML:

```powershell
.\.venv\Scripts\python.exe tools/note_catalog.py
```

Use `--check` to detect stale generated configuration without writing it. Titles and entry filenames are derived from PTX, preserving document IDs and URLs. Register each note once; do not separately edit generated targets or listing includes.

The catalog retains four Notes entries and an empty Home selection. `visibility: "public"` publishes and lists a note; `visibility: "unlisted"` publishes it without a Notes entry. `selected: true` separately selects a published note for Home; keep it false unless the owner selects that note.

Both public and unlisted sources are public when committed to a public repository; both sets of generated pages are public when deployed. A review label such as “Local draft” describes editorial status and does not control access. Unpublished manuscripts and private backups belong outside the public repository. Excluding a build cannot make tracked source files private.

Keep review status and explicit update dates under `metadata`. Rebuilding does not advance dates. Keep the declared reader, scope, source choices, and unresolved mathematical questions in the note's `brief.md`; link to its preface and bibliography when useful. See the [brief template](note-brief-template.md).

## Set up the tools

```powershell
Set-Location D:\homepage
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe tools/setup_validation.py
```

Use `py` instead of `python` for environment creation if Python is installed through the Windows launcher. Requirements pin PreTeXt to `2.53.0`. `PRETEXT_PYTHONPATH` can point to an existing dependency runtime's package directory.

Validation setup downloads pinned, SHA-256-checked Jing. On Windows x64 without Java, it extracts a portable Temurin JRE into `.build/cache/validation` without changing the system installation or PATH. Other platforms require Java 8 or later. Routine rebuilds do not download these dependencies.

A fresh full build also generates TikZ diagrams. Install a TeX distribution such as TeX Live or MiKTeX with XeLaTeX, TikZ, and the packages used in the notes' `latex-image-preamble`; make `xelatex` available on PATH. These tools are separate from the Python requirements. SVG conversion uses PreTeXt's Python dependencies. The [Pages workflow](../.github/workflows/pages.yml) records the Ubuntu packages used for the cloud build, including TeX, Java, Ghostscript, and Poppler. Cached diagrams can hide a missing TeX installation, so use a full build when checking a new environment.

## Build and preview

```powershell
.\Rebuild.ps1
.\Start-preview.ps1
```

Open [http://localhost:8765/](http://localhost:8765/). The server serves `.build/site/`; keep its terminal open and press Ctrl+C to stop it. `Start-preview.ps1 -Port 8766` selects another local port. Build once before starting a fresh preview.

`Rebuild.ps1` selects the checkout's `.venv` Python first, then `python` or `py`. Use `-PythonPath 'C:\path\to\python.exe'` to select another interpreter. Without a selection, it regenerates configuration, validates every active source, builds all targets, and checks the finished website. Use `-SourcePath source\notes\my-note\chapter-01.ptx` or `-Target note-my-note` for one note. The selected build keeps other notes and ordinary pages unchanged. Shared layout, catalog/listing, or main-site changes require a complete build.

Validation uses Jing and the unchanged pinned PreTeXt content RNG on XInclude-expanded content. Only assembly-generated `xml:base` attributes are omitted. A missing validator or invalid content stops the build. Run `.\.venv\Scripts\python.exe tools/validate_sources.py` separately to check content; append target names to limit the check. Reports are saved under `.build/reports/`. Build and link checks do not certify mathematical correctness; follow the writing guides for that review.

## Edit in VS Code

Open the folder `D:\homepage`, then edit PTX files under `source/notes/`. The workspace recommends PreTeXt-tools, uses the local Python environment, and enables word wrapping and two-space indentation. Whole-file formatting and automatic paste conversion are off. If the checkout moves, update `pretext-tools.pythonPath` in `.vscode/settings.json`.

| Shortcut | Action |
| --- | --- |
| `Ctrl+Alt+L` | Open the extension's live preview of the active source; it updates on save |
| `Ctrl+Shift+B` | Save open files, rebuild the active note, then refresh or open its website preview |

The build shortcut accepts a chapter, note root, or generated note publication file. It rebuilds the complete selected note so numbering, search, and reference previews stay consistent. The first successful build opens the corresponding chapter; later builds refresh connected previews of that note and retain the reading position. The loopback server injects the refresh script into responses; it is never part of deployable HTML.

```powershell
.\.venv\Scripts\python.exe tools/editor_preview.py --source source/notes/hyperkahler/chapter-02-twistor.ptx
```

Use the extension preview while editing prose and formulas. Use localhost to check final navigation, margins, folded proofs, search, and layout. The visual editor may disable editing for unsupported PreTeXt constructs; the PTX source remains authoritative. Native PreTeXt commands require generated configuration, so run the catalog command once after checkout before using those commands directly.

## Assets and existing URLs

Retain authored images, original PDFs, CV files, and third-party assets with their licenses. The build copies static inputs into their existing public paths, including `pdfs/`, `external/`, `images/`, and `vendor/`. Original PDFs and images moved from the old publishing root are kept in `source/static/`; native PreTeXt inputs remain in `source/assets/`.

Edit writing guides in `prompts/`. The build renders the three guides as native site pages (`paper-revision.html`, `study-notes.html`, and `style-reference.html`) and copies the original files to `downloads/prompts/`. Other Resources links to the reading pages, each with a Markdown download button. The small wrappers in `source/resources/` supply native titles and navigation; `tools/writing_guides.py` renders the Markdown body, headings, tables, and links. Keep the Markdown files as the sole content source. Do not edit generated copies. The [online guide index](https://fujiemath.com/downloads/prompts/README.md) keeps its existing URL. The technical notes guide is also copied to the previous public `NOTES.md` path for compatibility.

## Publication

Every push to `main` runs [the GitHub Pages workflow](../.github/workflows/pages.yml), which builds and checks the sources before publishing the verified `.build/site/` artifact. If a build or check fails, the current live site stays in place. The repository contains sources; generated HTML is ignored. Local build and preview commands do not commit, push, or deploy.

1. Build locally and review the pages, links, and intended source changes. Keep private manuscripts and backups outside the repository.
2. Commit and push the reviewed sources to `main` when ready to publish. This automatically starts the cloud build, checks, and deployment.
3. Check **Build and publish website** in GitHub Actions, then inspect the public website. The workflow uploads only the built website; it never deploys the whole checkout.

For a manual build, open **Build and publish website**, choose **Run workflow**, and select a branch. Leave `deploy` disabled to check the cloud build without publishing, or enable it on `main` to rebuild and publish that revision. Pushes to other branches do not trigger this workflow.

The repository's **Settings → Pages → Source** must be **GitHub Actions**. When setting up another repository, configure that before deploying; the source checkout cannot be published directly from its root. Deployment is restricted to `main`. The manual `deploy` input defaults to false; it does not disable automatic publication for pushes to `main`.

Keep `CNAME`, favicon, redirects, and `.nojekyll` behavior in the build/deployment inputs. GitHub's [custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) describes artifact-based Pages publishing. Local preview must serve the built website rather than the complete checkout.

For output-boundary checks, run `.\.venv\Scripts\python.exe tools/check_site_contract.py --site-only`. During a migration, supply `--baseline-root 'D:\path\to\the\former-publishing-root'` to compare its recorded public paths, HTML anchors, reading text, note metadata, margin notes, and Home profile with the rebuilt site. The report identifies concrete changes for review; it does not compare mathematical correctness.
