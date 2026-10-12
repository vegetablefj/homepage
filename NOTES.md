# Writing and maintaining notes

These instructions apply to the production project at `D:\homepage`. Paths below are relative to that directory. The website interface and the mathematical examples are in English; [NOTES_cn.md](NOTES_cn.md) explains the same procedure in Chinese.

## Editable sources

| File | Purpose |
| --- | --- |
| `source/notes/fujita/fujita.ptx` | The current note's book, macros, and includes |
| `source/notes/fujita/chapter-01.ptx` through `chapter-09.ptx` | Its nine chapters |
| `source/notes/fujita/references.ptx` | Its bibliography |
| `publication/fujita.ptx` | Search, contents, numbering, proofs, and reference previews |
| `publication/note-settings.json` | Footnote presentation by target |
| `source/layout.css` and `source/layout.js` | Shared layout and responsive margin notes |
| `project.ptx` | Active build targets |
| `source/notes-list.ptx` | Shared Notes and Home listing links |

The production targets are `web` for the homepage and `note-fujita` for the current note. Edit the sources, then run `.\Rebuild.ps1`. Published HTML and shared static assets are generated at the project root. The ignored `.build/cache`, `.build/tmp`, and `.build/reports` directories hold runtime files and reports. See [README.md](README.md) for setup and publishing.

The four examples `source/notes/affine-basics.ptx`, `divisors-p1.ptx`, `finite-maps.ptx`, and `projective-line.ptx` remain available to copy. They are absent from the production targets and public listings. The three older PDF notes remain in `pdfs/`, without listing entries.

## Add an independent note

1. Copy an example source, or create `source/notes/my-note/` for a longer note. Copy `publication/demo-affine.ptx`, `demo-divisors.ptx`, or `demo-finite.ptx` to `publication/my-note.ptx`. These publication templates provide search, reference previews, and initially folded proofs.
2. Update the title, book ID, macros, and any author metadata or source acknowledgement. In the copied publication, set `<index-page ref="my-note"/>` to the book's actual ID.
3. Add this target inside `<targets>` in `project.ptx`:

~~~xml
<target name="note-my-note" format="html"
        source="notes/my-note/my-note.ptx"
        publication="my-note.ptx"
        output-dir="notes/my-note" xsl="note-html.xsl"/>
~~~

The source, publication, and stylesheet paths are relative to the corresponding directories declared in `project.ptx`. The target name begins with `note-` so that the build applies the note layout.

4. Add an entry to `source/notes-list.ptx`, which is currently shared by Notes and Home's selected notes. For a different selection on Home, replace its include in `source/sections/home.ptx` with a separate list:

~~~xml
<li>
  <p><url href="notes/my-note/my-note.html">My Note</url></p>
</li>
~~~

The entry filename follows the book's `xml:id`. For example, the existing Fujita entry is `notes/fujita/fujita-notes.html`. A target alone does not add a public listing entry.

For a long note, use one file per chapter:

~~~xml
<pretext xmlns:xi="http://www.w3.org/2001/XInclude" xml:lang="en-US">
  <docinfo>
    <directories external="../../assets"/>
  </docinfo>
  <book xml:id="my-note">
    <title>My Note</title>
    <xi:include href="chapter-01.ptx"/>
    <xi:include href="chapter-02.ptx"/>
    <backmatter>
      <xi:include href="references.ptx"/>
    </backmatter>
  </book>
</pretext>
~~~

Create the included files before building. A chapter file has a `chapter` root:

~~~xml
<chapter xml:id="my-note-basic-results">
  <title>Basic results</title>
  <p>All rings are commutative with identity.</p>
</chapter>
~~~

Add `section`, `subsection`, and `subsubsection` as needed. IDs must be unique across all included files of a note. Keep them stable when changing titles or moving content: references and saved links use the IDs.

## Statements, proofs, and mathematics

Use native elements rather than HTML imitation blocks. A theorem contains a `statement` and, when proved here, a `proof`:

~~~xml
<theorem xml:id="thm-unit-localization">
  <statement>
    <p>Let <m>A</m> be a commutative ring with identity, and let
      <m>f\in A</m> be a unit. The map <m>A\to A_f</m>
      is an isomorphism.</p>
  </statement>
  <proof>
    <p>The universal property gives a map <m>A_f\to A</m>,
      since <m>f</m> is a unit in <m>A</m>.
      The composition on <m>A</m> is the identity. The composition on
      <m>A_f</m> fixes the images of <m>A</m> and <m>f^{-1}</m>,
      which generate <m>A_f</m>. Thus the maps are inverse.</p>
  </proof>
</theorem>
<p>Apply <xref ref="thm-unit-localization" text="type-global"/>.</p>
~~~

The publication's `<knowl proof="yes"/>` makes the proof initially folded. Retain the semantic `proof` container. Use `proposition`, `lemma`, or `corollary` when that role fits the result; do not invent parenthetical theorem names. Let `xref` supply numbering. With `knowled="maximum"`, supported references provide native previews.

Use `m` for inline mathematics. Put displayed `md` mathematics inside the paragraph to which it belongs:

~~~xml
<p>For <m>a\in A</m> and <m>r\geq0</m>, the inverse is given by
  <md xml:id="eq-unit-inverse" number="yes">a/f^r\longmapsto af^{-r}.</md>
  This formula uses the inverse of <m>f</m> in <m>A</m>.</p>
<p>See <xref ref="eq-unit-inverse" text="global"/>.</p>
~~~

Use `number="no"` for an unnumbered display. Define additional mathematical macros in `docinfo/macros`. XML characters must be escaped: use `&lt;`, `&gt;`, and `&amp;` where needed; `\lt`, `\gt`, and `\amp` are available in mathematics.

## Footnotes and margin notes

Write a footnote at its point of use:

~~~xml
<p>A unit has an inverse.<fn>No assumption that the ring is a domain
  is needed.</fn></p>
~~~

The default in `publication/note-settings.json` is `"footnotes": "margin"`. The build keeps the native `fn` source and presents its content in the margin. To keep native footnote markers and their in-text expandable content for one note, add an override keyed by the **target name**, not the book ID:

~~~json
{
  "defaults": { "footnotes": "margin" },
  "notes": {
    "note-my-note": { "footnotes": "inline" }
  }
}
~~~

Merge the override into the existing `notes` object. Rebuild after changing the setting.

For an explicit margin note, place a native `aside` immediately after an identified paragraph. The aside's ID must begin with `margin-`:

~~~xml
<p xml:id="anchor-unit-inverse">
  The inverse sends <m>a/f^r</m> to <m>af^{-r}</m>.
</p>
<aside xml:id="margin-unit-inverse">
  <p>No assumption that <m>A</m> is a domain is needed.</p>
</aside>
~~~

This paragraph and aside may also be inside a `proof`. The build anchors the aside to the preceding identified paragraph. The footnote setting affects `fn`, while explicit `margin-*` asides retain margin-note behavior.

At widths of at least 1280 px, notes occupy the right rail and align with their anchor paragraphs, with spacing to prevent overlap. Below 1280 px, they return directly below their anchors. Notes anchored inside a closed proof are hidden; on a narrow screen, they remain inside that proof when returned to the text.

Keep essential hypotheses, estimates, existence choices, and limiting arguments in the body. Use notes for supplementary interpretation, conventions, and source comments.

## Linked references with alphabetic labels

Use an actual bibliography ID in a citation:

~~~xml
<p>For the monomial criterion, see
  <xref ref="bib-howald2001" detail="Main Theorem"/>.</p>
~~~

Place the corresponding entry in the note's `references`:

~~~xml
<references xml:id="my-note-references">
  <title>References</title>
  <biblio xml:id="bib-howald2001" label="How01" type="raw">
    Jason A. Howald. <em>Multiplier ideals of monomial ideals</em>.
    Transactions of the American Mathematical Society,
    353 (7): 2665–2671, 2001.
    <url href="https://doi.org/10.1090/S0002-9947-01-02720-9">DOI</url>.
  </biblio>
</references>
~~~

The stylesheet displays the supplied `label`, such as `How01`, rather than a numerical bibliography label. Choose unambiguous author-year labels and order entries consistently. Cite with `xref` instead of typing a bracketed label: the reference then remains linked. Reuse an existing entry rather than duplicating its ID.

Check the source's version, hypotheses, and exact theorem or definition used. A bibliographical link or a successful build does not verify the mathematical claim. Use “see also” for supplementary sources.

## Search, contents, and presentation

Each note's publication file controls its own search and navigation. Its search covers that built note's pages. In a copied publication, retain:

~~~xml
<common>
  <chunking level="1"/>
  <tableofcontents level="4"/>
</common>
<numbering>
  <divisions level="4"/>
  <blocks level="1"/>
  <equations level="1"/>
</numbering>
~~~

Inside `html`, the main controls are:

~~~xml
<index-page ref="my-note"/>
<search variant="textbook"/>
<cross-references knowled="maximum"/>
<knowl theorem="no" proof="yes"/>
<navigation logic="linear" upbutton="yes"/>
<tableofcontents focused="yes" preexpanded-levels="1"/>
~~~

The contents can list chapters, sections, subsections, and subsubsections. `chunking level="1"` gives chapter pages. `preexpanded-levels` controls the initial tree expansion; `focused` follows the current location. Prev/Up/Next navigate within the note's book. Change search to `variant="none"` to disable it, or proof to `proof="no"` to show proofs initially.

The directory starts open at 1280 px and wider and starts closed below that width; the Contents button toggles it. In `source/layout.css`, margin defaults are:

| Variable | Default |
| --- | --- |
| `--margin-note-font-size` | `14px` |
| `--margin-note-line-height` | `1.5` |
| `--margin-note-gap` | `12px` |
| `--site-sidebar-width` | `210px` |

The width variable is shared by the left directory and the right margin rail. Change the font-size, line-height, and gap variables to adjust notes without changing the body text. Rebuild to copy the revised styles into the static output.

## Credit and editing after import

The Fujita note is a personal-study rewriting of OpenAI's article. Retain its linked acknowledgement in Chapter 1. Distinguish the writer of the note from the authors of the source argument, and attribute quoted or restated results where they are used.

The Notes page carries the statement that LLM-assisted notes may contain errors. Preserve that statement when editing the listing. Check mathematical reasoning and citations independently of layout and import checks.

The imported PTX is editable. Normal rebuilding does **not** synchronize it from TeX or overwrite it. To intentionally regenerate the Fujita sources, use the project's Python environment and an explicit input:

~~~powershell
.\.venv\Scripts\python.exe .\tools\import_fujita.py --tex "C:\Users\85806\Desktop\notes\fujita-rewritten\Fujita-rewritten.tex"
~~~

The optional `--compare PATH` requests a comparison report. The importer is specific to the current Fujita manuscript and supports its limited set of TeX constructs; it is not a general TeX converter. Reimporting regenerates the Fujita PTX files, so preserve or merge subsequent PTX edits before doing so. Review the report and rebuilt pages after an intentional import.
