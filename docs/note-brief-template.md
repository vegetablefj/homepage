# Note brief template

[Notes guide](note-authoring.md) · [Writing guide](../prompts/study-notes.md)

Keep a `brief.md` beside a note's root PTX when recording decisions for future revisions. Use the parts below that have been established by the author or the existing text. Leave undecided choices explicit. Link to the preface, bibliography, and topic plan rather than copying long passages.

Publication visibility, date, review label, and template overrides belong in `config/notes.json`. The title is maintained in the root PTX and read by the catalog. This brief records mathematical and editorial decisions.

```markdown
# Editing brief

## Source and scope

- Root source: [my-note.ptx](my-note.ptx).
- Scope and reading route: [preface.ptx](preface.ptx).
- Bibliography: [references.ptx](references.ptx).
- Topic plan, if applicable: [plan](../../../planning/my-topic/README.md).

Record the intended reader and mathematical goal when established.
State material boundaries that affect the treatment.

## Sources and conventions

Record principal references, useful complementary sources, and consequential
choices of terminology, notation, hypotheses, or versions. Link to the
relevant passages where possible.

## Revision focus

Record the current requested changes, unresolved questions, and parts that
need further verification. Remove completed task instructions or retain
their conclusions where they remain useful.
```

The current user request controls the task. A brief guides that note's revisions; it does not impose topic choices on other notes or authorize publication. Consult the common mathematical and language guides for shared standards.
