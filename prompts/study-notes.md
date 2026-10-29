# Writing and expanding mathematical study notes

[Guide index](README.md)

These are the author's requirements for drafting, rewriting, and expanding study notes. Use the [style reference](style-reference.md) for language and notation, [Paper writing and revision](paper-revision.md) for a wording-only edit, and the repository's [notes guide](https://github.com/vegetablefj/homepage/blob/main/docs/note-authoring.md) for PreTeXt implementation.

## Establish the task

Infer the topic, sources, reader, scope, permitted changes, and deliverable from the request and conversation. Ask only about missing information that materially affects the result; continue independent work.

For an existing note, read its `brief.md` for note-specific decisions and follow the current request. Keep the brief concise: record the intended reader, scope, organizing references, consequential conventions, and unresolved questions when these have been established. Link to the preface, bibliography, or a topic plan rather than duplicating them. Use the [brief template](https://github.com/vegetablefj/homepage/blob/main/docs/note-brief-template.md) when needed. General writing standards stay in this guide; website settings and publication visibility belong in the technical configuration.

Prioritize mathematical correctness, faithful scope and attribution, clear exposition, then brevity. Apply these requirements with judgment. Mathematical checks belong in the working process; include their explanations in the note when they help the reader understand the mathematics. Avoid turning every check into a warning, comparison, or statement about what the note does not do.

## Reshape the whole before polishing sentences

For new or substantially rewritten notes, use **Preface → main body → Appendix → References**, with appendices included when useful.

- **Preface:** introduce the mathematics, scope, organizing ideas, and reading route. Adapt the [Preface template](#preface-template).
- **Main body:** develop the objects, constructions, results, examples, and proofs in a coherent mathematical order.
- **Appendix:** give substantial technical complements, comparisons, or alternative proofs that would interrupt the main route. Keep essential definitions and hypotheses available in the body and link to the supplement where needed.
- **References:** provide a consistent bibliography for the sources actually used.

Organize chapters and sections around mathematical topics or arguments. Keep closely related constructions, formulas, proofs, and examples together. Choose separate or combined statements according to their mathematical roles and clarity. Routine consequences and short calculations can remain in the surrounding prose. Preserve detail and useful reference anchors when reorganizing; decide divisions by the mathematics rather than quotas for words, headings, or formal blocks.

When examples share a method, explain it once and compare the changing data and conclusions, using a table if helpful. Distinguish constructions for general members from extensions to an entire family. State substantial conclusions where readers can find and cite them.

Further results belong primarily in the corresponding chapters. Further questions may be gathered at the end, in a discussion, section, or chapter according to the note's nature. Use "Further problems" as the default chapter title; individual items may be labelled "Question". Include relevant known cases and sources, refer back to earlier results, and distinguish attributed conjectures from questions proposed in the notes. Select material for its mathematical relevance and verify current status before calling a problem open.

For website notes:

- List each appendix, References, and any Index alongside the chapters, without a separate Back Matter heading or landing page. Keep the native backmatter container in PreTeXt source.
- Normally use one complete chapter per page, with sections and subsections as anchored headings. Use deeper pagination only when those units contain substantial material and the split improves reading. Contents depth, pagination, and numbering are separate choices; verify the actual output rather than copying a numerical setting.
- Default to two-component, chapter-based numbering for statements and numbered equations, such as Proposition 3.7 and (3.4). Equations have their own sequence. Long notes may use section-based numbering when it helps navigation. Keep the chosen scheme consistent and preserve reference IDs and counter-sharing conventions.
- An index is optional. Use it for useful lookup terms and notation, not to add explanations or definitions of assumed background. Write entries in lower case except for proper names, acronyms, and mathematical notation.

Authorized rewriting allows reordering, changing confusing notation, splitting or combining results, and adding explanations or proofs. Preserve the requested content and attribution. For a full-content rewrite, check that definitions, results, substantive arguments, examples, and qualifications survive; a source-to-destination map can help with a large reorganization. A citation supplements rather than replaces arguments that the task requires retaining.

## Either invoke a supporting theory precisely or develop it fully

Treat the intended reader's background as known. Use standard notions from external theories directly, retaining the conventions needed for the application; a brief margin reminder may help. Define the note's own objects and constructions with the data that identify them.

For supporting material requiring further treatment, choose a coherent approach:

- **Use a black box:** state the exact result and hypotheses, give a precise source, and check that it applies. Explain its use when the connection needs clarification.
- **Develop the required part:** supply the definitions, constructions, results, and connections needed to reach a stated goal from the declared prerequisites. Give representative arguments in detail; complex technical proofs may be outlined or cited accurately.

Complete the chosen mathematical scope. Avoid fragments of a supporting theory followed by reliance on undeclared machinery. A substantial detour can have its own chapter, appendix, or separate note. Short intuition and examples may explain an external result without serving as its proof. Once the role of the input is clear, no repeated disclaimer about the omitted theory is needed.

## Define objects and use stable language

Seek useful generality within the note's scope. Give a clear main formulation and valuable variants or common cases; justify broader claims rather than importing them through a change of wording. Generality should improve the treatment of the chosen questions.

### Defining data and quantifiers

When a definition concerning \(A\) uses \(B\), distinguish:

- An existence property: \(P(A)\iff\exists B\,R(A,B)\).
- Specified structure: the object is \((A,B)\), satisfying \(R(A,B)\).
- A parameter fixed by the context.
- An auxiliary choice, witness, or representative.

Check quantifiers, ranges, and existence, including the difference between "some" and "every". Separate existence, uniqueness, and a canonical choice. Justify independence of auxiliary choices when claimed; otherwise keep the dependence visible. Morphisms and equivalences must respect the specified structure.

Apply these checks to authoritative sources too, taking global conventions into account. Express the adopted definition naturally and correctly. Keep significant comparisons when they affect meaning or use, perhaps as a remark; do not repeatedly explain distinctions already encoded in the definition. Investigate material ambiguities before choosing an interpretation.

### Conventions, notation, and prose

State relevant conventions about the base, finiteness, variance, normalization, and size. Define symbols near their use and keep them stable within their scope. Compare meanings before unifying terminology across sources; preserve genuinely different notions and explain consequential differences. Compatible conventions across related notes help, without requiring universal notation.

Link to the actual result or construction used. Add assumptions or notation translations when the application requires them, rather than restating them at every reference. Check affected statements and links after changing notation.

Use familiar mathematical notation throughout the note, including explanatory passages. Give objects, maps, hypotheses, relations, and calculations directly in symbols where that is clearer. Display substantial formulas and connected derivations. Let prose explain reasons, choices, and mathematical connections, instead of replacing the mathematics with long descriptions or translating every formula back into words. Break overloaded passages at meaningful mathematical steps and keep formulas part of grammatical, punctuated sentences.

Write plainly, with accurate established terminology and explicit mathematical subjects. Avoid empty emphasis, invented terminology, unnecessary qualifiers, and repetitive summaries. Follow the detailed [style reference](style-reference.md), applying word preferences in context. Keep titles short and consistent; omit an initial "The" when the shorter heading is natural, while preserving necessary articles and meaning.

## Make proofs informative and checkable

Match each chapter's depth to its learning goal and prerequisites. Decide which methods the reader should learn here, which external results are assumed, and which intermediate deductions connect them. A literature overview and a detailed proof account require different treatments. Develop representative constructions and core methods; routine implications can be brief, and complex technical proofs may be summarized or precisely cited.

Identify a proof outline as such and supply its main steps and sources for omitted details. Check the deductions connecting its inputs. Attribute only what the cited result supplies and justify further inferences. Broader hypotheses, stronger conclusions, and new assertions require their own arguments.

For long arguments, organize intermediate claims around the goal. Construct important maps with their sources and targets, justify changes of base or replacements, and establish the relevant well-definedness, choice independence, and compatibility. Keep existence, characterization, and verification distinct. Use formulas, calculations, diagrams, or short intermediate results when they make a compressed step easier to follow.

Preserve useful mathematical guidance from textbooks: why a construction is chosen, where assumptions matter, how results connect, and how abstract statements lead to concrete calculations. Select examples, counterexamples, or alternative proofs for what they explain. Expand identifiable missing steps or applications according to the reader's needs, rather than matching a textbook's length or reproducing all its background theory.

## Compare and integrate sources

Actively integrate multiple reliable sources according to their strengths: textbooks, monographs, author notes, original papers, and maintained references. Choose an organizing reference when helpful, and seek complementary formulations, proofs, examples, and viewpoints. Compare terminology, conventions, hypotheses, and conclusions before combining treatments. Organize the note around the mathematics, not successive summaries of papers.

Read the relevant passages, including global conventions, and check versions and corrections. Authority and agreement do not replace evidence. Examine key statements and arguments for hidden assumptions, gaps, or counterexamples even when sources agree. Distinguish convention differences, compressed arguments, typographical errors, established defects, and unresolved concerns. Before alleging an error, locate the precise claim and check the proof and errata. Correct verified defects transparently and trace their consequences; keep uncertain criticism narrowly qualified.

Use working comparisons or source maps when the material warrants them, without imposing a fixed record for every topic. Bring differences into the note when they affect understanding or application. Once the scope is covered and consequential differences are resolved or identified, continue writing rather than accumulating sources indefinitely.

Integrate important viewpoints, motivations, and proof strategies in fresh language with accurate attribution. Cite them where used, as well as theorems. Distinguish original contributions, later developments, and the note's interpretation. Verify locators and bibliographical details; never invent them. Use linked alphabetic author-year citations such as AB26, preserving valid keys and distinguishing versions where relevant.

Check current literature before declaring a problem open or attributing novelty. For exceptionally recent results or work with substantial AI involvement whose correctness remains insufficiently examined, a brief attribution such as "The authors claim that ..." is appropriate. Keep dependent conclusions conditional and revisit the wording as the status becomes clearer. A concise qualification usually suffices.

## Add explanations at their point of need

Give substantial mathematical explanations and distinctions a suitable form. A **remark** can carry an important viewpoint, equivalent formulation, relation to the literature, boundary, or counterexample worth retaining or referring to. Use remarks selectively and support their claims by reasoning or sources. Keep indispensable steps in the main argument; use ordinary paragraphs for local transitions.

Use footnotes and margin notes actively for short calculations, proof details, notation translations, intuition, examples, and source comments. Anchor them to the relevant passage; formulas and references are welcome. Keep essential hypotheses and the main logical route in the body. Longer supplements belong in a coherent remark, subsection, or appendix.

When discussion reveals a misunderstanding, check it against definitions and sources, then integrate a reusable explanation where it is needed. A formula, worked example, or brief remark may be more effective than another paragraph of commentary. Avoid repeating the same qualification in several places or adding explanations solely to satisfy a checklist.

## Review the actual result

Reread the revised chapters as connected mathematics. Check scope and coverage, core arguments, source integration, notation, language, and references; follow changes to affected passages. Distinguish developed proofs, legitimate external inputs, and missing deductions. Read folded proofs and arguments outside formal proof environments before judging depth. Page length, statement counts, and comparison with textbook size do not determine completeness.

Inspect the built contents and representative pages for the agreed hierarchy, pagination, numbering, links, and readability. Successful builds and model agreement do not certify mathematics or good exposition. Base findings on specific passages, report the scope of any sampling, and identify substantive unresolved issues and their effects. Keep routine working records and checklists out of the reading text.

## Preface template

Use this as an adaptable outline, not a form that every note must fill. Begin with concrete objects, formulas, and questions that establish the note's purpose. Place useful history and literature around that mathematics. The preface may contain theorem statements when they clarify the aim or principal results.

Explain the scope and level of detail, organizing ideas, and chapter route. Add relevant adjacent topics and reading recommendations when useful and available. End with a short statement about continuing revisions and factual AI assistance. Keep attribution accurate and concise. Omit inapplicable material and avoid generic descriptions that say little about the actual mathematics.

### Preface

Let [objects with the necessary hypotheses]. [Concrete properties or constructions, using familiar notation and formulas.] These lead to [question or comparison]. These notes study [mathematical goal].

[Brief history and relevant results, with sources and concise attribution.]

These notes cover [scope] and assume [prerequisites]. [Main theorem or principal conclusions, with essential hypotheses and references where useful.] We develop [central constructions and arguments]; [technical results whose proofs are outlined or cited].

The organizing idea is [the mathematical connection that guides the treatment]. The chapters follow [route, links, and useful dependencies]. The appendices contain [substantial complements, if any].

For [adjacent topic], see [related note or source and its connection]. [Brief description of relevant topics outside this note when useful.]

For further reading, [main references and the subjects or viewpoints for which each is useful].

I plan to keep updating these notes to correct errors, improve explanations, and add useful material. Corrections, questions, and suggestions are welcome.

AI tools assisted with [tasks actually performed] in preparing these notes.

### Optional dependency diagram

Add a compact chapter map after the chapter route when it helps show the main branches and broad dependencies. A linear route usually needs only prose. Use chapter numbers and short titles, and select the connections that clarify the organization. This is an overview, without a formal audit or classification of every arrow.

Use the common style in the [notes guide](https://github.com/vegetablefj/homepage/blob/main/docs/note-authoring.md#chapter-and-proof-diagrams): pale blue-gray rounded rectangles, dark text, and simple arrows. Keep labels and spacing readable and consistent, and let the layout follow the material. A single arrow style is usually enough. Additional legends or explanatory paragraphs are normally unnecessary.

For website chapter maps, use clickable inline SVG by default. Check centering, readability, links, and accessibility at desktop and narrow widths. Proof diagrams near an argument may use more precise notation or TikZ.
