# Language and notation reference

[Guide index](README.md) · [Paper writing and revision](paper-revision.md)

This reference consolidates the author's paper-writing guide and word preferences. Consult the relevant sections during a language review. Apply the preferences to the author's prose while preserving quotations, titles, proper names, and established technical terminology.

## Apply the preferences to actual sentences

Mathematical correctness, the author's intended claim, clarity, and concision take precedence in that order. For local revision, retain an accurate, grammatically acceptable sentence even if another sentence would sound more idiomatic. For an authorized rewrite, improve the organization and explanations within the agreed mathematical scope.

Inspect the changed text for concrete defects: a property assigned to the wrong object; a qualifier that strengthens the result; an unclear antecedent; a stock phrase replacing a reason; a renamed object; or an unverified attribution. Correct each defect in context. Never apply the word lists as blind replacements.

Prefer existing nouns, verbs, and modifiers for the same concept. Before introducing an expression, check the manuscript or a supplied reference for an accurate established formulation. A new substantive word must have a reason, even if used once. Do not propagate an incidental new word across the manuscript. Preserve the mathematical scope of borrowed terminology without copying distinctive sentences or importing extra hypotheses.

## Objects, notation, and logical relations

- In one context, use one symbol for an object and do not assign it to a different object. Retain useful local notation with a clear scope. Review temporary research notation at the final stage, including letter reuse, case, typeface, indices, and subscripts; do not replace clear established notation solely because it is simple.
- Define variables before use, with their domains and dependencies. Check implicit conditions for division, convergence, integrability, invertibility, regularity, and limiting or degenerate cases. A statement should be self-contained under explicit global conventions without repeating all of them.
- Quantifiers must constrain the intended objects. `Choose $j\ne1$` concerns indices; `Choose $j$ such that $\lambda_j\ne\lambda_1$` concerns values. Use `respectively` only for a genuine ordered correspondence.
- Check the bearer of every predicate. A classification of stable objects is not a stable classification. Properties of members do not automatically pass to their collection, parameter space, image, quotient, or invariant. Distinguish representatives from equivalence classes, action maps from image groups, and lattices from their real or complex spans. For kernels, intersections, or fixed lattices, identify the actual representatives or maps used. Preserve unambiguous accepted shorthand; do not remove necessary hypotheses to avoid repetition.
- When a definition or property involving an object A uses another object B, establish whether B is existentially quantified, fixed by the context, or part of the specified structure. Check dependence on choices and which data morphisms preserve. Express the adopted definition directly, with its data and quantifiers clear.
- State equality, isomorphism, conjugacy, inclusion, or strict inclusion accurately. Inclusion up to conjugacy requires its own expression. Do not use `<` for strict inclusion without an existing explicit convention. `identify`, `corresponding`, `associated`, and `combine` remain appropriate when they describe the actual relation.
- Check `natural`, `canonical`, `standard`, `generic`, `maximal`, `complete`, `unique`, and similar words against their definitions or established meanings. Completeness, saturation, uniqueness, and maximality require an argument; completed computation or agreement among examples does not establish them.
- Keep coordinates, matrices, and bases unless a verified equivalence and a clear benefit justify a change. A source giving an isomorphism class need not give the same equation, coordinates, or action. Write `a basis` unless its order matters. After changing notation, inspect all affected uses rather than replacing tokens without review.
- Use `In particular` for a special case or direct consequence, `Moreover` for an additional assertion, and `Conversely` for an actual converse. Retain a connective when it expresses a real logical relation; delete empty transitions without deleting the relation itself.

## Sentences and vocabulary

Write restrained mathematical prose. State the object, conditions, conclusion, and reason directly. Each paragraph should develop one mathematical point. Avoid literary or promotional language and engineering metaphors used in place of mathematical relations. Technical uses of `module`, `scheme`, `input`, or a similar word remain valid in their fields.

Keep established names in abstracts, conclusions, and later restatements. If the object is $G$, use $G$ or `the group $G$`; do not invent `the action group` because the paragraph discusses its action. Say `$G$ acts on $X$`. Likewise, if $W$ is already specified, `a basis of $W$` usually suffices; do not repeatedly add `invariant` or italicize ordinary technical properties.

Keep modifiers next to the objects they qualify. Split an overloaded sentence into its assumptions, choice, and conclusion when needed. Do not chain several choices and conclusions through comma insertions, but retain grammatical commas. Prefer periods and simple commas to long semicolon chains. Do not mechanically break a direct inference into several sentences or repeat the same subject unnecessarily.

Check whether `it`, `this`, `the map`, `the space`, or `the resulting object` has a unique antecedent in the nearby text. If two candidates remain, use the established symbol or name; if the intended object is unknown, report the ambiguity. Prefer established symbols to repeated verbal descriptions, and avoid inventing new names merely to vary references.

Prefer `classification of finite groups` to a newly coined `finite-group classification`. Use prepositions or a full sentence when they clarify the scope of modifiers. Preserve established expressions such as `group action`, accurate existing compounds, and grammatically necessary hyphens. Do not mechanically replace every noun modifier or compound.

Describe what has been proved or computed and its exact scope. A sentence about what has not been obtained is useful only when a specific stronger misunderstanding is likely and positive scope alone does not resolve it. Keep actual proof gaps explicit. Do not fill paragraphs with unsolicited limitations, rhetorical questions, generic summaries, or evaluation of the work.

## Mathematical typography and source formatting

- Use mathematical notation for objects, maps, hypotheses, relations, and calculations, including within explanatory paragraphs. Let prose explain choices, reasons, and connections. Display long expressions, connected derivations, and important equalities; preserve meaningful numbered displays. Keep ordinary vocabulary outside mathematics, and do not move a long formula inline merely to reduce the number of displays.
- Treat formulas as parts of complete sentences, with grammar and punctuation. Explain non-obvious steps in a calculation, and avoid packing unrelated formulas side by side with `\qquad`. A modest increase in inline line height is acceptable when it improves readability.
- Make brackets express the correct scope, including following exponents. Use ordinary brackets for short expressions and `\left` / `\right` only when height requires them, checking matching pairs. Ordered pairs, coordinates, bilinear pairings, and rank-one lattices may require different delimiters.
- Use a slash or `\frac` for a simple inline fraction as clarity permits. Normally use `\frac` in displays; do not shrink it with `\tfrac` without a reason. Use `\dfrac` only when it helps recognition. Judge each formula rather than imposing one size everywhere.
- Preserve macros, labels, citation keys, numbering, and environment types during local editing. Write paths with `\path{...}` rather than `\texttt{...}`, and state the archive root when needed.
- Keep LaTeX source in natural paragraphs. Do not put each sentence or phrase on a separate line, add empty lines inside a paragraph, or use `\\` or `\newline` for visual prose breaks. Displays, lists, and theorem environments retain their own structure. Do not split or merge arguments merely for visual uniformity.
- Keep section-title capitalization consistent and titles short and accurate. A notation section may use `We denote ...` and need not be forced onto the first page. Define local notation near its first use; do not front-load symbols that readers will need much later.
- For chapter and section headings that name topics, prefer concise noun phrases without an initial `The` when the shorter title reads naturally: `Geometry and cohomology of a cubic fourfold`, `Image of the period map`. Judge each heading in context. An article can help identify a particular construction or theorem, and conventional titles such as `The Torelli theorem` remain acceptable. Preserve necessary internal articles, singular or plural meaning, and mathematical scope. Apply normal grammar to headings written as sentences. Review nearby headings for consistency rather than deleting articles mechanically.

## Statements and exposition

State the objects, main result, and precise range early. Distinguish a full space from a component, a numerical lattice from a quotient at a fixed polarization, and a general assertion from one with extra assumptions. The abstract and introduction must not broaden the theorem. Separate established results, conditional claims, constructions, examples, and conjectures.

The introduction should explain the concrete addition to prior work and the main mathematical dependencies. It should not become a step-by-step proof. In the body, give definitions and arguments where needed and show where an important hypothesis is used. A familiar correct example may precede an abstract definition if it explains the definition; an example is not required for every definition and cannot replace the definition or proof.

Select environments by mathematical role and retrieval needs, not by proof length or desired emphasis. A theorem normally states a principal or substantial structural result; a proposition is an independent useful assertion; a lemma supports an argument, even if technically central; a corollary follows with a brief deduction whose source is stated. An immediate consequence never used later may remain in prose. Preserve existing environments during local revision.

Use a remark selectively for a substantive mathematical explanation, distinction, equivalent formulation, boundary, counterexample, or relation to the literature. Remarks can carry important viewpoints and observations worth retaining or referring to; support their claims by reasoning or sources. Use ordinary prose for local transitions and footnotes or margin notes for brief reminders. A new nontrivial assertion indispensable to the proof normally belongs in a lemma or proposition with a proof. Retain useful existing remarks; do not silently add, remove, or relabel them in a language pass.

Do not invent theorem nicknames or names for one-use arguments. `Theorem 2.1 (Main theorem)` and `Lemma 3.2 (Key estimate)` are not default styles. A recognized name or explicit attribution, such as `Theorem 2.1 (Jordan curve theorem)` or `Theorem 2.2 (Smith [12, Theorem 3.1])`, is appropriate. In a result distinguishing objects, state the objects and the separating conditions or invariant values instead of forcing the reader to reconstruct `the former case`.

Avoid redundant headings, summary sentences after every step, and routine transitions between adjacent propositions. Where a transition helps, explain the mathematical dependency. Give theoretical justification before a table or computation; describe an ordering by rank, order, dimension, or inclusion rather than by a computational metaphor.

## References, computations, and manuscript boundaries

Place a precise citation where it supports the claim. Verify the authors, source version, theorem or definition number, assumptions, and conclusion. Use a primary source for an original result or historical attribution; use `see also` for additional sources. Distinguish an original proof, an erratum, and another proof. Do not add unverified DOI, arXiv, MR, or database fields. Recheck statement numbering when changing versions.

When the author lists of several works are identical, they may share one `\cite`; otherwise cite them separately and indicate the respective claims supported. Do not expand background unnecessarily to enforce this preference. Use explicit references instead of `his proposition`. A number alone normally suffices in place of `item (n)` or `equation (n)` when its type is clear.

Say only what computational files actually verify or retain. Existence or equivalence checks do not imply saved witnesses, conjugating matrices, or a complete classification. Distinguish a compact submission-specific ancillary selection from a complete versioned archive. For example, if true: `A compact selection of the computational files is included as ancillary material. The complete versioned record is archived in [archive citation]. Paths below are relative to the root of that archive.` Use stable paths and cite the actual archive.

When a previous source has a problem, identify the particular claim needed here and its effect. A short footnote or a dedicated discussion may suffice. Do not turn the introduction into a list of corrections or infer that other results are wrong.

Add or update manuscript dates, versions, MSC codes, keywords, running titles, author details, affiliations, acknowledgements, funding, AI disclosure, TODOs, revision notes, and status labels only when requested or required to maintain existing material within the task. Source or software versions may be needed for an accurate citation or reproducibility when verified. Return the requested manuscript text without conversational prefaces or unsolicited suggestions; explain substantial mathematical changes or unresolved issues separately when needed.

## Sentence-level examples

These are conditional examples, not replacement commands. Letters and bracketed text are placeholders; preserve the actual claim.

| Problematic use | Preferred formulation when justified |
| --- | --- |
| `The key ingredient is to leverage Proposition A.` | `We use Proposition A.` or `By Proposition A, [conclusion].` |
| `This rules out every possible enlargement of $G$.` | `No group $H$ with $G\subsetneq H$ satisfies these conditions.` |
| `We use the following pipeline to process the objects.` | `For each object, we first check condition A and then condition B.` |
| `After pruning, the remaining candidates are merged into the final list.` | `We exclude the objects that fail condition A. The remaining objects form the following list.` |
| `We order the cases lexicographically by $r$ and $s$.` | `We consider the cases in decreasing order of $r$ and, for fixed $r$, in decreasing order of $s$.` Only use this if it is the actual order. |
| `It is clear from the equality $A=B$ that [claim].` | `Since $A=B$, [claim].` Supply the missing inference if equality alone does not justify it. |
| `Put $W=\cdots$. The equality above shows that [claim].` | `Let $W=\cdots$. Then [claim].` Retain or cite the particular equality when needed. |
| `An ordered invariant basis is given by [vectors].` | `A basis of $W$ is given by [vectors].` Delete the modifiers only if their content is already fixed or not asserted. |
| `The relevant inclusion is checked by the computational pipeline.` | `The inclusion is verified in \path{path/to/file}.` Name the inclusion if it is ambiguous and claim verification only if performed. |
| `It is worth noting that [object] is rigid.` | Remove the empty preface. Keep `rigid` with its defined meaning; use `[object] is uniquely determined` only if uniqueness is the actual established claim. Rigidity, uniqueness, and zero-dimensionality are not interchangeable. |
| `The object is given in [source].` | If that is all the source provides: `An object with an isomorphic action is given in [source].` If it only proves an abstract property, state that property. |
| `We now turn to the task of proving [claim].` | `We prove [claim].` |
| `This provides a robust and complete framework for [topic].` | State the particular theorem, classification, or criterion obtained. Retain completeness only if established. |
| `Combining A and B, we obtain [claim].` | `By A and B, [claim].` Keep `combining` when an actual combination of constructions or objects is involved. |
| `A natural, explicit, or distinguished basis of $W$ is given by [vectors].` | Preserve `A basis of $W$ is given by [vectors]` when those added properties are not established and needed. |

## Choosing a more precise expression

Mathematical meaning and established terminology govern each choice.

| Expression to examine | Preferred choice or decision |
| --- | --- |
| `put` | Normally `let` when introducing notation. |
| `unchanged` | `does not change` or `is not changed`, with the operation specified; `fixed` only in its intended mathematical sense. |
| `ingredient` | `result`, `fact`, `lemma`, or `We use ...`. |
| `nevertheless` | A simple `but` or `however`, if a contrast is needed. |
| `relevant`, `valid candidate` | Name the object or the precise conditions it satisfies. |
| `rigid` | Preserve its defined technical meaning; do not substitute uniqueness or zero-dimensionality. |
| `enlargement`, `rule out` | State the larger group, proper overgroup, inclusion, or precise exclusion. |
| `prune`, `pruning`, process-only `merge` | State which conditions exclude cases and how the resulting sets are related. |
| Metaphorical `pipeline`, `workflow`, `architecture`, `module`, `engine`, `toolkit` | Name the argument, calculation, organization, section, program, files, or results actually meant. Preserve technical `module`. |
| `leverage`, `utilize` | `use` or `apply`. |
| Vague `robust`, `scalable`, `seamless` | Give the exact range of applicability or verification result. |
| `full automorphism group`, `stabilizer` | Do not add `full` without a distinction; keep `stabilizer` when it is the defined stabilizer, not as a synonym for a previously named group. |
| `lexicographic` | State the ordering by mathematical quantities when that is clearer. |
| `clearly`, `obviously`, `easily`, `readily` | A short reason or exact reference when there is a step to justify. |
| `key`, `crucial`, `important`, `interesting` | Usually omit; retain only a useful distinction in role. |
| `in order to` | `to`. |
| `ordered basis` | `basis` unless order has a role. |
| `the equality above` | Name or cite the equality if needed, or state the implication directly. |
| `item (n)`, `equation (n)` | The number alone if its kind is clear. |
| `gives rise to`, `serves to` | An accurate verb such as `defines`, `implies`, `computes`, `records`, or `describes`; retain an established accurate expression. |

## Full preference list: how to use the groups

The following classifications express the author's word preferences. Apply each to its actual use in the sentence.

- `Avoid`: avoid vague, inflated, or metaphorical use; a precise technical use may be valid.
- `Limit`: use when it contributes information or marks a genuine logical relation.
- `Context`: often a necessary mathematical term, quantifier, or connective; check its meaning before changing it.

When an accurate `Context` expression fits the established prose, prefer it over an equally accurate `Limit` alternative. This does not require replacing an existing accurate `Limit` expression. Preserve quotations, titles, names, hypotheses, quantifiers, citation scope, and precise terminology. Do not try to eliminate every listed occurrence.

If `a calculation` or `a comparison` is vague, name what is calculated or which relation is established. Keep precise uses and technical compatibility terms such as `equivariant`. Use `identify` when an identification is the conclusion, and a more specific relation when equality, isomorphism, conjugacy, or distinction is what is proved. Avoid `unchanged` in the author's prose; `fixed` is not an automatic synonym for `does not change`.

## Avoid

- `unchanged`
- `ingredient`
- `prune`
- `pruning`
- `pipeline`
- `workflow`
- `engine`
- `leverage`
- `seamless`
- `It is worth noting that`
- `It should be emphasized that`
- `It is important to observe that`
- `We are now ready to`
- `With this in hand`
- `The main takeaway is`
- `This completes the picture`
- `Needless to say`
- `In a nutshell`
- `self-evident`
- `it is not hard to see that`
- `up to obvious changes`
- `beautiful`
- `basically`
- `aforementioned`
- `recipe`
- `gadget`
- `deploy`
- `showcase`
- `pave the way for`
- `shed light on`
- `unlock`
- `harness`
- `innovative`
- `groundbreaking`
- `unprecedented`
- `state-of-the-art`
- `definitive`
- `for the first time`
- `a complete picture`
- `delve into`
- `explore the landscape`
- `navigate`
- `journey`
- `tapestry`
- `cornerstone`
- `milestone`
- `open the door to`
- `a rich interplay`
- `a wealth of`
- `a plethora of`
- `a myriad of`
- `overarching theme`
- `picture`
- `narrative`
- `story`
- `building block`
- `backbone`
- `compelling`
- `powerfully`
- `fortunately`
- `it is the case that`
- `due to the fact that`
- `in view of the fact that`
- `for the reason that`
- `as a matter of fact`
- `it should be pointed out that`
- `it is worth mentioning that`
- `it should be clear that`
- `there is no doubt that`
- `it is our goal to`
- `paradigm shift`
- `lens`
- `lens through which`
- `dialogue`
- `synergy`
- `seamless integration`
- `ecosystem`
- `blueprint`
- `tease apart`
- `weave together`
- `thread through`
- `fuel`
- `catalyze`
- `game-changing`
- `transformative`
- `the following section studies`
- `the next section studies`
- `his proposition`

## Limit

- `put`
- `nevertheless`
- `relevant`
- `enlargement`
- `rule out`
- `toolkit`
- `utilize`
- `clearly`
- `obviously`
- `easily`
- `readily`
- `key`
- `crucial`
- `important`
- `interesting`
- `in order to`
- `valid candidate`
- `the equality above`
- `gives rise to`
- `serves to`
- `We now turn to`
- `We proceed to`
- `At this point`
- `Putting everything together`
- `Combining the above`
- `The key idea is that`
- `The rest of this section is devoted to`
- `For the sake of completeness`
- `For clarity`
- `For convenience`
- `It is instructive to`
- `As is well known`
- `In summary`
- `Overall`
- `We stress that`
- `Here we show that`
- `trivially`
- `plainly`
- `manifestly`
- `it is immediate that`
- `it follows at once that`
- `a routine computation shows`
- `a straightforward computation shows`
- `a direct calculation shows`
- `one readily checks that`
- `by standard arguments`
- `by a similar argument`
- `the remaining cases are analogous`
- `details are left to the reader`
- `the claim is clear`
- `the proof is complete`
- `very`
- `highly`
- `quite`
- `rather`
- `particularly`
- `especially`
- `remarkable`
- `striking`
- `elegant`
- `powerful`
- `sophisticated`
- `rich`
- `subtle`
- `appropriate`
- `suitable`
- `somewhat`
- `moreover`
- `furthermore`
- `additionally`
- `besides`
- `however`
- `nonetheless`
- `therefore`
- `thus`
- `hence`
- `consequently`
- `accordingly`
- `specifically`
- `notably`
- `indeed`
- `in fact`
- `on the other hand`
- `by contrast`
- `meanwhile`
- `subsequently`
- `finally`
- `first` (as a routine transition)
- `second`
- `next`
- `then`
- `at the same time`
- `in this sense`
- `as such`
- `in this regard`
- `in this context`
- `as a result`
- `in addition`
- `in other words`
- `namely`
- `the above`
- `the following`
- `relevant result`
- `various`
- `several`
- `many`
- `a number of`
- `as before`
- `as above`
- `in question`
- `framework`
- `machinery`
- `setup`
- `strategy`
- `trick`
- `tool`
- `technique`
- `mechanism`
- `insight`
- `process`
- `execute`
- `facilitate`
- `enable`
- `streamline`
- `bottleneck`
- `handle`
- `address`
- `capture`
- `reflect`
- `highlight`
- `underpin`
- `novel`
- `unifying`
- `fills a gap`
- `unravel`
- `illuminate`
- `reveal`
- `bridge`
- `lay the groundwork for`
- `at the heart of`
- `the interplay between`
- `a host of`
- `also`
- `because of`
- `due to`
- `owing to`
- `even though`
- `as well as`
- `along with`
- `together with`
- `in light of`
- `in view of`
- `with respect to`
- `regarding`
- `concerning`
- `in terms of`
- `at the level of`
- `from the viewpoint of`
- `within the context of`
- `in the setting of`
- `in the case of`
- `under these circumstances`
- `in this way`
- `by doing so`
- `by the same token`
- `in turn`
- `similarly`
- `likewise`
- `on the whole`
- `in essence`
- `more precisely`
- `to be precise`
- `to this end`
- `for this purpose`
- `generally speaking`
- `methodology`
- `proof strategy`
- `proof method`
- `core argument`
- `key step`
- `central observation`
- `guiding principle`
- `general framework`
- `systematic treatment`
- `unified approach`
- `investigation`
- `study`
- `treatment`
- `discussion`
- `consideration`
- `description`
- `feature`
- `aspect`
- `perspective`
- `viewpoint`
- `roadmap`
- `challenge`
- `issue`
- `noteworthy`
- `notable`
- `valuable`
- `promising`
- `fruitful`
- `versatile`
- `delicate`
- `intricate`
- `insightful`
- `strikingly`
- `elegantly`
- `carefully`
- `thoroughly`
- `systematically`
- `comprehensively`
- `effectively`
- `meaningfully`
- `broadly`
- `extremely`
- `remarkably`
- `surprisingly`
- `unfortunately`
- `apparently`
- `evidently`
- `investigate`
- `examine`
- `deal with`
- `exploit`
- `make use of`
- `make possible`
- `make explicit`
- `bring together`
- `point to`
- `demonstrate`
- `the fact that`
- `with the aim of`
- `with the purpose of`
- `in an attempt to`
- `in the process of`
- `in connection with`
- `in relation to`
- `in regard to`
- `in the framework of`
- `in the context of`
- `from the perspective of`
- `it is useful to note that`
- `one can see that`
- `we can see that`
- `it can be seen that`
- `one may observe that`
- `we note that`
- `it is evident that`
- `it is easy to verify that`
- `as mentioned earlier`
- `as noted above`
- `as discussed below`
- `as we shall see`
- `for the reader's convenience`
- `for the purposes of this paper`
- `the aim of this paper is to`
- `in the present paper`
- `in this work`
- `in this study`
- `we leave it to the reader`
- `paradigm`
- `landscape`
- `frontier`
- `avenue`
- `pathway`
- `trajectory`
- `map out`
- `unpack`
- `distill`
- `tie together`
- `tackle`
- `drive`
- `far-reaching`
- `wide-ranging`
- `far from trivial`
- `highly nontrivial`
- `item (n)`
- `equation (n)`
- `the result above`
- `the argument below`
- `route`
- `handles`

## Context

- `rigid`
- `merge`
- `architecture`
- `module`
- `robust`
- `scalable`
- `full automorphism group`
- `stabilizer`
- `lexicographic`
- `ordered basis`
- `without loss of generality`
- `by inspection`
- `significantly`
- `substantially`
- `deep`
- `natural`
- `canonical`
- `generic`
- `fixed`
- `standard`
- `typical`
- `essentially`
- `roughly`
- `in particular`
- `conversely`
- `this`
- `that`
- `these`
- `those`
- `corresponding`
- `associated`
- `certain`
- `some`
- `respectively`
- `scheme`
- `observation`
- `construction`
- `procedure`
- `implementation`
- `optimize`
- `input`
- `output`
- `encode`
- `new`
- `original`
- `comprehensive`
- `complete`
- `exhaustive`
- `optimal`
- `sharp`
- `universal`
- `general`
- `first` (for an actual order or priority claim)
- `to our knowledge`
- `all possible`
- `in complete generality`
- `solves the problem`
- `although`
- `whereas`
- `while`
- `since`
- `because`
- `given that`
- `provided that`
- `assuming that`
- `whenever`
- `otherwise`
- `unless`
- `even if`
- `in the presence of`
- `in the absence of`
- `rather than`
- `on the contrary`
- `in contrast to`
- `analogously`
- `in general`
- `approach`
- `fundamental principle`
- `analysis`
- `verification`
- `derivation`
- `classification`
- `characterization`
- `behavior`
- `phenomenon`
- `motivation`
- `intuition`
- `heuristic`
- `difficulty`
- `flexible`
- `efficiently`
- `largely`
- `virtually`
- `often`
- `usually`
- `generally`
- `frequently`
- `occasionally`
- `sometimes`
- `always`
- `never`
- `entirely`
- `fully`
- `intuitively`
- `heuristically`
- `seemingly`
- `provide`
- `yield`
- `lead to`
- `give`
- `establish`
- `obtain`
- `derive`
- `recover`
- `extract`
- `lift`
- `extend`
- `generalize`
- `strengthen`
- `refine`
- `improve`
- `sharpen`
- `characterize`
- `classify`
- `describe`
- `determine`
- `identify`
- `analyze`
- `treat`
- `connect`
- `relate`
- `suggest`
- `indicate`
- `exhibit`
- `illustrate`
- `in the language of`
- `note that`
- `observe that`
- `this paper is organized as follows`
- `under mild assumptions`
- `under natural assumptions`
- `under reasonable assumptions`
- `under suitable assumptions`
- `in a broad class`
- `in full generality`
- `in a wide range of cases`
- `in most cases`
- `in many cases`
- `in virtually all cases`
- `essentially unique`
- `unique up to`
- `up to constants`
- `up to isomorphism`
- `up to normalization`
- `almost all`
- `almost everywhere`
- `generically`
- `uniformly`
- `independently of`
- `regardless of`
- `for all sufficiently large`
- `for almost every`
- `without further assumptions`
- `synthesize`
- `attack`
- `nontrivial`
- `supplies`
- `translates to`
- `their theorem`
- `key estimate`
