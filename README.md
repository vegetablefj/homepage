# Jie Fu’s homepage

[中文说明](README_cn.md) · [Notes guide](NOTES.md)

This repository contains the PreTeXt sources and the generated static website. The working repository is `D:\homepage`, which is also the GitHub Pages publishing root. Published page content and navigation are in English.

Website construction was assisted by a large language model.

## Edit the homepage

Edit the sources, then rebuild. The HTML, styles, and reading pages in the publishing root are generated outputs.

| Location | Purpose |
| --- | --- |
| `source/main.ptx` | Main site structure and page includes |
| `source/sections/` | Home, research, publications, and resource pages |
| `source/preprints-list.ptx` | Shared preprints list on Home and Preprints |
| `source/notes-list.ptx` | Shared Notes and selected-notes list |
| `source/profile.ptx` | Home portrait, visit information, and contact details |
| `source/layout.css` | Shared site layout |
| `publication/` | Site and note publication settings |
| `xsl/` | Project extensions to the PreTeXt presentation |
| `project.ptx`, `build.py`, `tools/` | Build targets, validation, and synchronization |

For mathematical note sources, references, and reading features, use [NOTES.md](NOTES.md). Example note sources remain available for reference; they are excluded from production builds and site listings.

## Rebuild and preview

From PowerShell in the repository, set up a local Python environment:

```powershell
Set-Location D:\homepage
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
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

The build stages output in `.build/site` and validates it before synchronizing generated files to the repository root. `.site-files.json` records the generated files and limits stale-file deletion to that managed set. Local cache, temporary files, and reports live under ignored `.build/cache`, `.build/tmp`, and `.build/reports`. PreTeXt’s core is automatically extracted from the pinned package into the cache.

Local MathJax and Lunr assets and their licenses are tracked. Existing PDFs and the CV source are retained.

## Publish with GitHub Pages

Use the existing GitHub Pages deployment branch and its `/ (root)` publishing folder.

1. Rebuild and review the local preview.
2. Review the changed sources, generated files, and `.site-files.json`.
3. Commit and push those changes to the deployment branch.

Keep the repository’s `.git` directory, custom-domain file `CNAME`, and `.nojekyll` file in place. The latter permits the generated PreTeXt assets to be served without Jekyll processing.

Backups are stored outside the repository and are managed separately by the owner. They are not part of the build or publishing inputs.
