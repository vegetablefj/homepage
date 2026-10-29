# Work in this repository

The current user request controls scope and publication authorization. Preserve other ongoing edits, mathematical content, stable IDs, existing URLs, and note visibility choices.

For mathematical writing, use [Study notes](prompts/study-notes.md) or [Paper writing and revision](prompts/paper-revision.md). For substantial English drafting or a language pass, consult the relevant parts of [Language and notation](prompts/style-reference.md). Apply the guides to actual passages and preserve established mathematical meaning; do not apply word lists as blind replacements.

For an existing note, read its `brief.md` and relevant topic plan when they help with the task. Briefs and plans record local decisions, not rules for every note. Keep common writing standards in `prompts/`; keep unresolved questions and decisions specific to one note in its brief.

Use [Website maintenance](docs/site-maintenance.md) for setup, assets, builds, preview, and deployment, and [Notes implementation](docs/note-authoring.md) for PreTeXt. Edit authored sources, `config/notes.json`, and the shared publication template. Regenerate native project files, publication copies, and listing includes with `python tools/note_catalog.py`; do not edit generated copies or `.build/site/`.

Build and preview locally unless publication is authorized. Local preview serves `.build/site/`, not the source checkout. Unlisted notes remain public when published. Keep unpublished manuscripts and private backups outside the public repository; hiding a listing does not make source files private.

The build copies `prompts/*.md` to the website’s `downloads/prompts/`. Edit the source guides. Finish the requested text and appropriate build/link checks, review mathematical scope, sources, notation, and language, and report substantive unresolved issues honestly.
