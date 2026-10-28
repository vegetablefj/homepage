# Writing and maintaining notes

For mathematical exposition and language, use the [writing prompts](prompts/README.md), especially [Study notes](prompts/study-notes.md) and [Language and word preferences](prompts/style-reference.md). This file documents the site's PreTeXt implementation.

These instructions apply to the production project at `D:\homepage`. Paths below are relative to that directory. The website interface and the mathematical examples are in English.

## Editable sources

| File | Purpose |
| --- | --- |
| `source/notes/fujita/fujita.ptx`, `source/notes/nagata/nagata.ptx`, `source/notes/cubic-fourfolds/cubic-fourfolds.ptx` | The three notes' book roots, macros, and includes |
| `source/notes/category-theory/category-theory.ptx`, `chapter-*.ptx`, and `references.ptx` | The 1-category theory note, its chapter sources, and bibliography |
| `source/notes/toric-geometry/toric-geometry.ptx`, `chapter-*.ptx`, and `references.ptx` | The toric geometry note, overall contents, English chapters, and bibliography |
| `source/notes/hyperkahler/hyperkahler.ptx` and its includes | The hyperkähler geometry note |
| `source/notes/cubic-k3/cubic-k3.ptx`, `source/notes/homological-algebra/homological-algebra.ptx`, `source/notes/hyperkahler-syz/hyperkahler-syz.ptx` and their includes | Cubic fourfolds and K3 structures, homological algebra, and hyperkähler SYZ |
| `source/notes/fujita/chapter-01.ptx` through `chapter-09.ptx` | The Fujita note's nine chapters |
| `source/notes/fujita/references.ptx` | The Fujita note's bibliography |
| `publication/fujita.ptx`, `publication/nagata.ptx`, `publication/cubic-fourfolds.ptx` | Search, contents, numbering, proofs, and reference previews for each note |
| `publication/category-theory.ptx` | Category theory settings, including chapter numbering beginning at zero |
| `publication/toric-geometry.ptx` | Toric geometry settings, including chapter numbering beginning at zero |
| `publication/hyperkahler.ptx` | Hyperkähler geometry publication settings |
| `publication/note-settings.json` | Footnote presentation, review status, and update dates by target |
| `source/layout.css` and `source/layout.js` | Shared layout and responsive margin notes |
| `project.ptx` | Active build targets |
| `source/notes-list.ptx` | Visible entries on the Notes page |
| `source/selected-notes-list.ptx` | Separate Home selection, currently empty |

The active targets are `web` for the homepage, and independent `note-*` targets listed in `project.ptx`. Only category theory, cubic fourfold rationality, Nagata, and Fujita currently have entries on the Notes page. Toric geometry, hyperkähler geometry, cubic fourfolds and K3 structures, homological algebra, and hyperkähler SYZ are built and uploaded but temporarily unlisted. Home's Selected Notes selection remains empty. Each note uses the shared `note-html.xsl`, layout, header, and navigation. Edit the sources, then run `.\Rebuild.ps1`. Generated HTML and shared static assets are written at the project root. The ignored `.build/cache`, `.build/tmp`, and `.build/reports` directories hold runtime files and reports. See [README.md](README.md) for setup and the current visibility choices.

The four examples `source/notes/affine-basics.ptx`, `divisors-p1.ptx`, `finite-maps.ptx`, and `projective-line.ptx` remain available to copy. They are absent from the production targets and public listings. The three older PDF notes remain in `pdfs/`, without listing entries.

## Add an independent note

After content edits, `Rebuild.ps1` first runs `tools/validate_sources.py` with local Jing on every active content target. See [README.md](README.md) for one-time validator setup, pinned versions, and download checksums. Invalid content or an unavailable engine stops the build; neither is treated as success or a skipped check. `tools/test_validation.py` provides real positive and negative regression controls.

Observe the native container rules: put ordinary lists inside paragraphs, such as `<p><ol>…</ol></p>`; use `<description><p>…</p></description>` for image descriptions; and place a multiline equation's cross-reference ID on its corresponding `<mrow>`, rather than the enclosing `<md>`. Book frontmatter requires `<bibinfo>`, which may be empty as `<bibinfo/>`. Container repairs that preserve prose and mathematics must also pass formal validation before rebuilding.

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

4. Add an entry to `source/notes-list.ptx` for the full Notes page. Home's Selected Notes is maintained separately in `source/selected-notes-list.ptx`, which is currently empty. Add an entry there only when it is deliberately selected for Home:

The empty Home selection is an empty `<p>` with an XML comment, included directly by the Home section. To add selections, place a `<ul>` containing the selected `<li>` entries inside that paragraph; do not insert a bare `<li>` into `<p>`.

~~~xml
<li>
  <p><url href="notes/my-note/my-note.html">My Note</url></p>
</li>
~~~

The entry filename follows the book's `xml:id`. For example, the existing Fujita entry is `notes/fujita/fujita-notes.html`. A target alone does not add a listing entry, and adding a note to the Notes list does not select it for Home. Preserve the owner's visibility choices recorded in [README.md](README.md).

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

### Preface, appendices, and references

When creating or substantially revising a note, use the order **Preface → main body → Appendix → References**. The [study-note guide](prompts/study-notes.md) specifies the author's requirements for these parts and for treating supporting theories either as precise black boxes or through a complete development of the required material.

Use native `frontmatter` and `preface` elements for the preface. Add the include below to an existing `frontmatter`, preserving its `bibinfo` (including author metadata) and `titlepage`. If none exists, create one before the chapter includes; do not create a second `frontmatter`. This is an insertion fragment, not a complete note:

~~~xml
<frontmatter>
  <xi:include href="preface.ptx"/>
</frontmatter>
~~~

The included `preface.ptx` has a `preface` root, a `title`, and actual content blocks such as `p`. Adapt the [Preface template](prompts/study-notes.md#preface-template): start with the mathematical objects, properties, and questions, using notation and useful theorem statements. Then explain the background and literature, scope and level of detail, organizing ideas, chapter route, related reading, plans for updates, and AI assistance. Use the parts that fit the note and its sources. A [structure map](#chapter-and-proof-diagrams) can follow the chapter route, before related reading; a linear route usually needs only prose. Write the actual preface before including the file in a public note.

The pinned PreTeXt schema accepts `paragraphs` in a preface, but not a native `theorem` element there. For an unnumbered theorem statement in the preface, use a titled `paragraphs` block:

~~~xml
<paragraphs xml:id="my-note-preface-theorem">
  <title>Theorem</title>
  <p>[Precise statement, with hypotheses and attribution.]</p>
</paragraphs>
~~~

Use native `m` and displayed mathematics in the statement. Link to the source or to a numbered theorem in the body, keeping repeated statements consistent. Use the body's native theorem ID for references to that numbered result.

Place any native `appendix` elements after the main chapters, inside `backmatter`, followed by native `references`. These may also be separate included files:

~~~xml
<backmatter>
  <xi:include href="appendix-a.ptx"/>
  <xi:include href="references.ptx"/>
</backmatter>
~~~

Include files containing the corresponding content and merge them into the existing `backmatter`. Retain the `xi` namespace declaration on the book's `pretext` root. Apply these conventions to each note's existing structure.

In the displayed contents and navigation, list each appendix, References, and any Index directly alongside the chapters, without a separate **Back Matter** heading or landing page. Keep the native `backmatter` container in the source. The shared stylesheet already flattens bibliography-only back matter. Apply the same display treatment to other notes as they are revised, checking chapter links, search results, and previous/next navigation. An optional index may follow the references.

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

### Commutative diagrams

The category theory draft uses native `latex-image` elements with `tikz-cd`; see `source/notes/category-theory/diagram-naturality.ptx` and `diagram-transformation.ptx`. The book's `docinfo/latex-image-preamble` loads `tikz-cd`. Use `\amp` as the cell separator in XML. `.\Rebuild.ps1` detects these images and generates changed assets before building their note. This step needs a working TeX installation with `tikz-cd`; the generated SVGs preserve curved arrows and double arrows. Keep captions and alternative text in the source.

### Chapter and proof diagrams

Follow the [study-note guide](prompts/study-notes.md#optional-dependency-diagram) for the map's content, arrows, and relation to the chapter route. A linear route usually needs only prose. Branches may meet again, so use a tree only when the dependencies form a tree. The examples below cover rendering and links.

PreTeXt supports both [Mermaid and TikZ images](https://pretextbook.org/doc/guide/html/topic-images.html). Mermaid is convenient for text labels and automatic layout. Use TikZ when the diagram contains formulas or needs precise positioning. Both have been tested with this project's pinned PreTeXt version.

**Mermaid.** In a `preface`, insert a native `image` after the chapter route and before related reading. The current schema permits `image` directly in a preface, but not `figure`. In a chapter or section, a numbered figure can wrap the image, with `caption` before `image`.

~~~xml
<image xml:id="note-route" width="90%">
  <description><p>Definitions lead to two constructions, both used
    in the main theorem.</p></description>
  <mermaid label="note-route-mermaid"><![CDATA[
flowchart TD
    A["Definitions"] --> B["Construction A"]
    A --> C["Construction B"]
    B --> D["Main theorem"]
    C --> D
]]></mermaid>
</image>
~~~

Give the image a unique `xml:id` and the Mermaid source a unique `label`. `CDATA` keeps the diagram syntax separate from XML escaping. Keep labels short, provide a description, and check the diagram at a narrow page width. Use native `xref` elements in the surrounding prose to link to chapters or results; Mermaid text does not resolve PreTeXt references. Mermaid's own `click` links work in the current HTML output, but use literal URLs that must be maintained separately.

Keep the default Mermaid theme unless another value is accepted by the pinned publisher options, and check the build log for fallback messages. HTML currently loads Mermaid from a CDN. Static Mermaid assets for PDF output require Mermaid CLI (`mmdc`) and a separate generation step; the site's rebuild command currently generates only `latex-image` assets automatically.

**TikZ.** Add these lines to the existing `docinfo/latex-image-preamble`:

~~~latex
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
~~~

Use the same `image` structure, with a `latex-image` in place of `mermaid`:

~~~xml
<latex-image><![CDATA[
\begin{tikzpicture}[
  every node/.style={draw, align=center, inner sep=5pt},
  every path/.style={draw, -{Latex[length=2mm]}}
]
\node (a) at (0,0) {Definitions};
\node (b) at (-2,-1.2) {Construction A};
\node (c) at (2,-1.2) {Construction B};
\node (d) at (0,-2.4) {Main theorem};
\path (a) edge (b) (a) edge (c) (b) edge (d) (c) edge (d);
\end{tikzpicture}
]]></latex-image>
~~~

Rebuild the note to generate SVG images with the installed TeX tools. TikZ labels can use LaTeX mathematics. For PDF output, PreTeXt includes the TikZ code in the generated LaTeX document. The SVG conversion does not preserve clickable links within the image, so keep chapter and theorem links in the surrounding prose.


### Linked maps with fixed positions

Use an inline SVG when a chapter map needs both exact alignment and direct node links. Keep a native `image` in the PreTeXt source, and give only that image a local rendering override. The cubic-fourfold [map source](source/notes/cubic-k3/images/ck3-structure-map.svg) and its template in [note-html.xsl](xsl/note-html.xsl) provide a complete example.

Place the SVG beside the note's source, for example `source/notes/my-note/images/note-route.svg`, and reference it relative to the note's root source file:

~~~xml
<image xml:id="note-route" source="images/note-route.svg" width="100%">
  <description><p>The main constructions and their dependencies.</p></description>
</image>
~~~

The SVG contains its coordinates, edges, and ordinary hyperlinks. Use a `viewBox`, responsive dimensions, a title and description, and accessible names on links. Use `role="group"` rather than `role="img"` so that the links remain available to assistive technology. For example:

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 180"
     role="group" aria-labelledby="note-map-title"
     aria-describedby="note-map-description" style="display:block;width:100%;height:auto">
  <title id="note-map-title">Chapter dependencies</title>
  <desc id="note-map-description">Geometry is the starting chapter.</desc>
  <style>
    .chapter-node rect { fill:#ececff;stroke:#9370db; }
    .chapter-node text { font:17px Arial,sans-serif;text-anchor:middle; }
    .chapter-node:hover rect,.chapter-node:focus rect { stroke:#195684;stroke-width:2; }
  </style>
  <a class="chapter-node" href="my-note-geometry.html"
     aria-label="Chapter 1: Geometry">
    <rect x="17" y="10" width="146" height="48"/>
    <text x="90" y="40">1 Geometry</text>
  </a>
</svg>
~~~

Give marker and accessibility IDs a prefix unique to the note. Add the remaining nodes and arrow paths in the same SVG. For a graph with a main linear branch, a common x-coordinate can make that branch easier to follow. Side exits and separate channels for incoming arrows can reduce crossings. Choose positions for the actual graph, keeping joins and arrowheads clear. Use the arrow conventions in the [study-note guide](prompts/study-notes.md#optional-dependency-diagram).

The current HTML renderer normally puts an external SVG in an `img`, which does not preserve links inside the SVG. Inline its XML using a narrowly scoped template in the local stylesheet:

~~~xml
<xsl:template match="image[@xml:id='note-route'][@source]" mode="image-inclusion">
  <div id="note-route" style="width:100%;max-width:420px;margin:0 auto;">
    <xsl:copy-of select="document(concat($external-directory-source, @source), $original)/*[local-name()='svg']"/>
  </div>
</xsl:template>
~~~

When the external-directory setting is empty, this resolves `@source` relative to the original book source. With `<directories external="assets"/>`, place the file at `assets/images/note-route.svg` relative to the root source, while keeping `source="images/note-route.svg"`. The finished page contains the SVG itself, so its link URLs are relative to the generated HTML page, not to the SVG source file. Keep links within the note and use the actual generated chapter filenames.

The width cap centers the map in the text column while `width:100%` lets it shrink on a narrow screen. Choose the cap for the diagram and check text readability at both widths. Keep the inline SVG outside image-expansion handlers so that clicking a node follows its link immediately. Verify every node link, keyboard focus, centering, crossings and joins, and the absence of page overflow in the built page. Validate with the pinned main PreTeXt schema; do not switch schemas or modify the core to enable this map.

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

### Use margin notes actively in exposition

Use margin notes actively, keeping essential assumptions and proof steps in the body. The shared [study-note guide](prompts/study-notes.md) gives the editorial rules; the examples above show their PreTeXt implementation.

## Concept index

An index is optional. Use one when the note's length, range of topics, or alternative terminology makes it useful for lookup. A focused note may need only the contents, cross-references, and search. Retain useful existing entries and check their destinations after revisions. Index entries locate explanations; they do not require adding definitions of assumed background.

When including an index, use native `idx` entries and an `index-list`. For a grouped definition or theorem, put its index entries after the title, before the statement. The index preview then contains the entire entry, including every part:

```xml
<definition xml:id="my-note-definition">
  <title>Related concepts</title>
  <idx>First concept</idx><idx>Second concept</idx>
  <statement>...</statement>
</definition>
```

An index entry inside the first list item can instead preview only that item. Put an index entry beside the actual definition when it occurs in a separate paragraph, and give that paragraph a stable `xml:id`. Check that aliases indexed at a definition are explained inside the same container. See the category theory note for examples.

For the index page, add an `index` division to native `backmatter`, with its title and an empty `index-list` child. Show it directly in the contents alongside the other divisions. The build preserves the native index and converts alphabet jumps without a corresponding letter group into plain text. Rebuild, then check both the destination and the expandable preview of representative entries.

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

Keep bibliography sources inside native `backmatter` and show **References** directly in the contents and navigation. Follow the [display rules above](#preface-appendices-and-references) when the note also contains appendices or an index.

Check the source's version, hypotheses, and exact theorem or definition used. A bibliographical link or a successful build does not verify the mathematical claim. Use “see also” for supplementary sources.

## Important ideas from the source literature

The shared [study-note guide](prompts/study-notes.md) explains how to select and attribute motivations, proof strategies, examples, and other viewpoints from sources. Use native linked references here; retain the source distinction and precise scope in the text.

## Shared note header

Use sentence case for note titles, retaining the capitalization of proper names and mathematical abbreviations. Keep the title in the book root and its Home/Notes listing identical.

Review status and update dates are maintained in `publication/note-settings.json`. The default `status` is `Under review and improvement`; each note's target entry supplies an explicit `last_updated` date in `YYYY-MM-DD` format. The build displays the same values in the Home/Notes listings and below the note's byline. Update the date when the note or its publication metadata changes; rebuilding alone never advances it. The date is an update record, not a statement that mathematical review is complete.

Every independent note must display its title at the top, followed by the black text **Jie Fu's Notes**. The title links to that note's entry page; **Jie Fu** links to the site's Home page, and **Notes** links to the Notes listing. This header appears on all pages of the note, including its entry, chapters, and references, on both desktop and narrow screens.

The `finish_pages` function in `build.py` applies this convention automatically to targets whose names begin with `note-`. Rebuild after adding a note; do not edit generated HTML. This navigation text does not identify the authors of a source article. Keep source-author metadata and acknowledgements separate and accurate.

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

The homological algebra note uses `source/notes/homological-algebra/`, `publication/homological-algebra.ptx`, and the target `note-homological-algebra`. Its chapter structure and bibliography are maintained in that source directory.
