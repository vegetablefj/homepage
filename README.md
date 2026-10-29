# Jie Fu’s homepage

PreTeXt sources for [fujiemath.com](https://fujiemath.com). The working checkout is `D:\homepage`. Website construction was assisted by a large language model. Published page content and navigation are in English.

- [Website maintenance](docs/site-maintenance.md): setup, builds, preview, assets, and publication.
- [Writing and maintaining notes](docs/note-authoring.md): PreTeXt structures and reading features.
- [Mathematical writing guides](prompts/README.md): exposition, language, and notation.
- [Note brief template](docs/note-brief-template.md): decisions specific to one note.
- [Topic plans](planning/README.md): preserved writing plans and reference maps.

## Daily work

Edit the sources under `source/`, then build and preview:

```powershell
.\Rebuild.ps1
.\Start-preview.ps1
```

Open [http://localhost:8765/](http://localhost:8765/). Preview serves `.build/site/`. Generated pages stay there and are not copied into the source root. These commands do not commit, push, or deploy.

Each note has its own directory under `source/notes/`. Register its build settings, review metadata, and listing choices once in [config/notes.json](config/notes.json). The build generates native PreTeXt configuration from the catalog and shared template. Edit those sources rather than generated copies.

| Directory | What to edit |
| --- | --- |
| `source/` | Site pages, note chapters, images, PDFs, and shared layout |
| `config/`, `publication/`, `xsl/` | Note catalog, shared templates, and rendering extensions |
| `docs/`, `prompts/`, `planning/` | Maintenance instructions, writing guides, and topic plans |
| `tools/`, `examples/` | Build and preview tools, checks, and reusable examples |
| `.build/site/` | Generated website for preview and publication; do not edit |

The Notes page retains four selected entries; Home’s Selected Notes remains empty. An unlisted note is still public when published. Keep unpublished manuscripts and private backups outside the public repository.

Publication uses the manual [GitHub Pages workflow](.github/workflows/pages.yml). Pushing source changes does not deploy them. Run the workflow on `main` with `deploy` enabled to publish the verified website artifact; leave it disabled for a build check. See [Website maintenance](docs/site-maintenance.md#publication) for the procedure.
