var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sh-c00",
  "level": "1",
  "url": "sh-c00.html",
  "type": "Chapter",
  "number": "0",
  "title": "Conventions and the local-to-global problem",
  "body": " Conventions and the local-to-global problem   A sheaf records objects defined on open subsets together with their restrictions and a rule for identifying compatible local objects with a global one. Sections can be functions, solutions of equations, sections of a map, or elements of a module with a prescribed local meaning. Cohomology measures some of the obstructions that remain when a construction is locally possible but cannot be made globally compatible.  These notes develop sheaves on topological spaces from their definitions through their basic derived operations and cohomology. The constructions use arbitrary spaces whenever possible. Additional topological conditions enter in comparison theorems, the classification of local systems, and specific calculations. They are stated where they are used.    Spaces, coefficients, and size  A space means a topological space, and a map of spaces means a continuous map. A subset is given the subspace topology. A neighbourhood of a point need not be open, but the neighbourhoods indexing a stalk will always be open. Hausdorffness, local compactness, paracompactness, and local connectedness are separate hypotheses. None is included in the word space.  We fix a universe for sets, indexing families, and open covers. The underlying set of each space and its set of open subsets belong to that universe. Categories of sheaves are formed at the corresponding scale, passing to a larger universe for categories when necessary. Products indexed by all points of a fixed space are therefore set-indexed products. The category of open subsets of a fixed space is small at this scale. This is simpler than the size questions for a large geometric site; no such site is needed for the constructions in these notes.  We first distinguish set-valued sheaves from abelian sheaves. For linear operations, is a fixed commutative ring with identity, and modules are unital. The zero ring is allowed. The symbols , , and denote sets, abelian groups, and -modules. The notation means sheaves of -modules on ; means sheaves of sets. Taking recovers abelian sheaves.  The scalar ring is fixed while the space varies. A sheaf of -modules is equivalently a module over the constant ring sheaf . It is not being treated as a module over a sheaf of smooth or holomorphic functions. These are different linear structures, even when the underlying abelian sheaf is the same.  We use and for sections over an open subset . Restriction to an open subspace is denoted ; the germ of a section at is . The constant sheaf associated with a set, group, or module is . A constant presheaf will always be explicitly called a presheaf.    Inverse images and the two Hom constructions  For , the inverse image of a sheaf is written , and the direct image is . Their adjunction is In this fixed-coefficient setting, is exact. It includes the restriction of a sheaf to a subspace, not just to an open subset. The special case of open restriction can also be described directly on sections.  The symbol usually denotes inverse image with extension of scalars for a morphism of ringed spaces. Here , so that fixed-coefficient ringed inverse image agrees with . We retain the latter notation to make its exactness and its underlying topological meaning visible. Some topological references write throughout for this exact functor. This is a notation difference. For general structure sheaves, extension of scalars need not be exact, and the distinction has mathematical content.  For two sheaves of modules, is the -module of morphisms. The internal Hom is a sheaf on . Its sections on are morphisms between the restrictions to . The identity relates the two constructions. It does not identify their target categories.  The symbols and denote derived internal and global Hom. For sheaves placed in degree zero, global Ext is Sheaf Ext is the cohomology sheaf of derived internal Hom. A local-to-global spectral sequence compares these groups and sheaves in .    Complexes, degrees, and derived categories  Complexes have cohomological indices. A differential has the form . Translation is defined by , with differential . Thus for a complex of sheaves. A sheaf regarded as a complex is placed in degree zero unless another degree is stated.  We write . In , cohomology sheaves vanish in sufficiently negative degrees; in , they vanish in sufficiently positive degrees. The notation means bounded cohomology in both directions. Boundedness refers to cohomology; a chosen representative may have terms outside that range.  For a complex of sheaves , denotes its cohomology sheaf. Its hypercohomology is ; the on the right takes cohomology of a complex of modules. A sheaf in degree zero gives the usual . Some references use to emphasize a complex as coefficient. Cohomology of the raw complex of sections need not equal hypercohomology. A resolution or an acyclicity theorem is needed to make this computation.  Derived tensor products use the usual signs on cochain complexes and direct sums along diagonals. Hom complexes use products. The accompanying chapter on complexes fixes these signs, and its unbounded resolutions chapter explains the replacement conditions. We apply those results here after verifying the required properties of sheaf categories.  A quasi-isomorphism is a map of complexes inducing isomorphisms on all cohomology sheaves. On a topological space it can be tested at every stalk, because stalks are exact. An arbitrary complex of injective sheaves need not be a replacement suitable for all unbounded calculations; K-injectivity supplies the needed condition. The distinction is part of .    Dependencies and sources  through establish the sheaf-theoretic constructions. and apply homological algebra. compares Čech and derived cohomology. The last two chapters give low-degree interpretations, calculations, and comparison with singular cohomology. Ordinary category theory, modules, and the stated homological algebra results are prerequisites; Grothendieck topologies are not.  The principal topological references are , , and . Their global conventions differ. A theorem stated under local compactness or finite homological dimension in one source may have a proof that does not need those assumptions, but removing them requires a separate check.  For individual constructions and precise general hypotheses, we also use . General-site statements are used only after specializing them to the open subsets of a space. and provide comparisons with that broader language. A reference to a chapter identifies the source of an exposition; a technical existence or comparison theorem is cited more precisely where it is used.  Proofs are included when they explain a construction, its naturality, or the role of a hypothesis. General homological algebra has its own development. Here the statements used from it are recalled with their applicable assumptions and a reference. Footnotes clarify terminology, notation, and useful variants. They do not carry assumptions needed for the truth of a displayed result.  Support conditions, direct image with proper support, extraordinary inverse image, and Verdier duality form a further topological development. General sites and variable structure sheaves form another one. The present results provide their sheaf and cohomology prerequisites.   "
},
{
  "id": "sh-c01",
  "level": "1",
  "url": "sh-c01.html",
  "type": "Chapter",
  "number": "1",
  "title": "Presheaves, sheaves, and local data",
  "body": " Presheaves, sheaves, and local data   A function can be specified on an open cover if the local functions agree on overlaps. The same principle applies to many objects whose sections are not functions on the base. The definition of a sheaf records precisely this agreement and gluing. The open cover, its overlaps, and the restriction maps are all part of the data.  This chapter treats sets and modules in parallel. Set-valued sheaves give the general local construction; modules add algebra needed for cohomology. No separation or compactness assumption on the space is used.    Restrictions and morphisms   Presheaf Section Restriction map  Let be a space. Write for the category whose objects are open subsets and whose arrows are inclusions. A presheaf of sets is a functor . A presheaf of -modules has target . For , write for restriction and for . Functoriality means A morphism is a natural transformation. The corresponding presheaf categories are and .   A section is an element of . It is not assumed to be a function from . For example, sections may be equivalence classes of functions or sections of a map with nontrivial fibres. A morphism assigns maps compatible with restrictions. Compatibility on every inclusion is necessary even if the two presheaves have isomorphic values on every open set.   A presheaf morphism commutes with restriction for every inclusion .  A square with the section maps of u horizontally and the restriction maps from U to V vertically. The two composites agree.   Restriction maps need not be injective or surjective. Distinct functions on may agree on a smaller open set. A function on a smaller open set may have no extension to . These possibilities will remain present for sheaves.  The empty open subset is an object of . We impose no normalization on the value of a presheaf at the empty set. For a sheaf, this value is forced by the empty cover below. Some references require an abelian presheaf to vanish on the empty set. This changes the category of presheaves but not the usual category of sheaves. We allow unnormalized presheaves so that the constant functor has its literal categorical meaning.  Limits and colimits of presheaves are computed on each open subset, since these are functor categories. The same statement for sheaves is only partly true: limits remain sectionwise, whereas colimits generally require sheafification. The distinction is proved in .    Locality and gluing   Sheaf Separated presheaf Matching family Gluing  Let be a presheaf of sets or modules on , and let be an open cover. A family , with , is matching if for all . The presheaf is separated if a section on is determined by all its restrictions to any such cover. It is a sheaf if every matching family is the family of restrictions of a unique section on . Empty covers are included. Morphisms of sheaves are presheaf morphisms; and are the resulting full subcategories.    A presheaf of sets or modules is a sheaf if and only if, for every open cover of every , the diagram is an equalizer. The two parallel maps restrict from the -th and -th factors. In the module case the condition is equivalently exactness of where .  The equalizer is the set or module of matching families. The asserted isomorphism to it is precisely existence and uniqueness of gluing. For modules, an equalizer of two linear maps is the kernel of their difference.   For the empty cover of the empty set, the products are terminal objects. Thus a sheaf of sets has exactly one section on the empty set; an abelian or module sheaf has value zero there. A separated set-valued presheaf has at most one section on the empty set. The existence of this section is part of the sheaf condition.  If is a disjoint union of open subsets , matching imposes no condition beyond the unique restrictions to the empty set. Hence . An infinite disjoint union gives a product, not a direct sum. This difference already explains several failures of naive sheaf constructions.   Let be sheaves. A family of maps between their sections on open subsets, defined locally on an open cover of and compatible on overlaps and with restriction, glues uniquely to a sheaf morphism . If two sheaf morphisms agree on the members of an open cover, they agree globally.  For , apply the local maps to . Compatibility makes these images a matching family in , which has a unique gluing. The gluing respects restriction and the algebraic operations, because these identities can be tested on the cover. Uniqueness follows from separatedness of .   A property of sections is local if it can be checked after restriction to an open cover. This assertion includes both directions: a section with the property restricts to sections with the property, and compatible sections with the property glue to one having it. When only the first direction holds, the resulting subpresheaf need not be a sheaf.    Functions and sections of maps   For any space , the assignment of continuous maps to is a sheaf of sets. If is a topological abelian group or a topological -module with continuous operations, it is a sheaf with that algebraic structure.  Matching maps have a unique set-theoretic gluing. The gluing is continuous because continuity is local on an open cover of the domain. The operations are pointwise, and equality of the required identities is also local.   On a smooth manifold, smooth real-valued functions form a sheaf; on a complex manifold, holomorphic functions do so. These examples use the corresponding local regularity theorem, not a separation hypothesis on a general sheaf. Their underlying real or complex vector spaces can be studied here without developing their module theory over a variable function sheaf.   Let be continuous. The assignment is a sheaf of sets, called the sheaf of sections of .  Compatible local sections glue as continuous maps. Their composite with is the identity because that equality holds on the covering opens.   There is no local triviality assumption on . Its sheaf of sections nevertheless exists. Conversely, a later construction realizes every set-valued sheaf as the sheaf of sections of a particular local homeomorphism. This converse does require the topology on the total space to be chosen from germs, rather than from an arbitrary bundle model.   Let be a morphism of sheaves of modules. Then is a sheaf. More generally, for two set-valued morphisms , their sectionwise equalizer is a sheaf.  Glue a matching family in the equalizer as sections of . Its two images agree locally and therefore agree in . The glued section lies in the equalizer, with uniqueness inherited from .   This gives a general reason that solutions of a linear local equation form a sheaf when its operator is a morphism of sheaves. For instance, the derivative of a smooth function restricts compatibly to smaller opens, and its kernel consists of locally constant functions. A condition on the existence of a global primitive is a different matter: primitives on two open sets may differ by a nonzero constant on their overlap.   For an open subset , define to be a singleton if and empty otherwise. Then is a sheaf. It is represented by in the category of open subsets.  A section on each member of a cover exists exactly when every member is contained in , which is equivalent to their union being contained in . If it exists, it is unique.   Representable sheaves turn statements about maps into statements about sections: . A map takes the unique section of to a section of , and restrictions determine all its other components. The empty set satisfies , including when . The terminal sheaf is ; is the initial sheaf of sets. The initial presheaf instead takes the empty set on every open. Sheafification corrects its value on the empty open.    Conditions that do not glue   The bounded continuous real-valued functions on each open subset form a separated presheaf on , but not a sheaf.  Restrictions of bounded functions are bounded, and continuous functions agreeing on a cover are equal. On the cover , the functions are bounded on each member and agree on all overlaps. Their only possible gluing is the unbounded function .   The missing ingredient is a single global bound. A bound that may vary with the member of the cover is a local condition. The distinction is not repaired by checking only finite covers, since the sheaf condition is imposed on arbitrary covers.   On an infinite discrete space , the functions with finite image form a separated presheaf that is not a sheaf.  Every function on a singleton has finite image. A family assigning distinct integers to countably many different points is a matching family on the singleton cover, but its gluing has infinite image.   Likewise, on a countably infinite discrete space, finitely supported functions with values in a nonzero module do not form a sheaf. Their value on the whole space is a direct sum, whereas the singleton cover requires the product of the point values. The sheaf of all functions has that product.   The constant presheaf with value a set takes on every open subset and uses identity restriction maps. Its associated sheaf has a different description: it consists of locally constant -valued functions. If has at least two elements and is a union of two nonempty disjoint open subsets, the constant presheaf fails the gluing condition on that cover after normalization at the empty set.  For the normalized presheaf, choose different constant values on the two components. The restrictions agree on the empty intersection, but no single element of gives both values. The unnormalized constant functor already fails the required value on the empty set unless is a singleton. The locally constant functions do glue, because local constancy is local.   Both conventions yield the same associated constant sheaf. The universal property is established in , and local systems are studied in . For the literal constant functor, agreement on an empty overlap still means equality in . Two distinct constants are therefore not a matching family for that unnormalized functor. The empty-open convention must be translated before using this counterexample from a reference.  Sheafification repairs gluing, not global analytic bounds. For bounded continuous functions, every continuous function is locally bounded, so sheafification recovers all continuous functions. For finite-image functions, it recovers locally finite-image functions; on a discrete space these are all functions. These assertions follow from the local description of sheafification in .    Sheaves on a basis  A basis can reduce the number of opens needed to specify a sheaf. Its elements need not be closed under intersections. If belong to the basis, their intersection is covered by basis elements, and compatibility has to be checked on those elements. Open balls form a basis of Euclidean space. The intersection of two balls need not be a ball. Requiring a formula only on balls is useful, but agreement on their intersection must then be read as agreement on smaller balls contained in it.   Basis, sheaf on a  Let be a basis for . A presheaf on assigns sets or modules to basis opens, with restriction maps for inclusions between them. It is a sheaf on the basis if, for every cover by basis opens, a family glues uniquely whenever its restrictions agree on every basis open contained in . If the empty set belongs to the basis, the empty cover is included.    Restriction to induces an equivalence between sheaves on and sheaves on . For a sheaf on the basis, the extension to an open consists of the compatible families The same construction works for morphisms and for module-valued sheaves.  Restriction of a sheaf satisfies the basis condition: agreement on basis subopens of an intersection implies agreement on the whole intersection, by separatedness. A matching family on a basis cover therefore glues in the original sheaf.  Now start with a sheaf on the basis. A compatible family on restricts by forgetting components. If , its component at determines all the others, so extension followed by restriction recovers .  To check the sheaf condition for the extension, suppose compatible families are given on an arbitrary open cover , agreeing on overlaps. For each basis open , cover by basis opens contained in some . The given local components agree on basis refinements of intersections. The basis sheaf condition gives a unique . Its restrictions to smaller basis opens are the corresponding components, by uniqueness. Thus the form a compatible family on . The same argument gives uniqueness of its gluing.  Finally, a sheaf on is recovered from all its restrictions to basis opens: compatible sections on them glue on their union. These constructions commute with morphisms, so the two restriction and extension functors are quasi-inverse.   Basis neighbourhoods of a point are cofinal among all open neighbourhoods. Consequently they compute the same stalk. Using a basis is therefore compatible both with the gluing description above and with the germ description in the next chapter.  For a basis closed under finite intersections, compatibility takes the simpler form of equality on itself. The more general definition is useful for balls, local coordinate neighbourhoods, and other bases whose intersections need not have the chosen shape. Replacing the intersection by a basis refinement is part of the definition, not an extra geometric assumption.    Testing the sheaf condition   Let be a presheaf on and let be an open cover. Suppose every restricted presheaf is a sheaf. Then is a sheaf if, for each open , matching sections on the cover glue uniquely in .  Let a matching family be given on an arbitrary cover . Within each , glue its restrictions to , using the sheaf condition there. The resulting sections on agree on their intersections because they agree after further restriction to the cover by the . The assumed gluing condition for yields the required section on . Both applications include uniqueness.   The extra gluing condition in this statement is essential. A presheaf can have sheaf restrictions on all members of a cover and still impose an incorrect global condition on larger opens. For example, the normalized constant presheaf on a discrete two-point space has sheaf restrictions to each point but is not a sheaf on their union. Sheafhood is local for data that already satisfy descent across the chosen cover, not for arbitrary assignments of global sections.  For a separated presheaf with terminal value on the empty open, the sheaf condition on all finite covers is equivalent to gluing on every two-open cover. Induction proves the assertion, using the intersection of the last member with the union of its predecessors. Arbitrary covers require another condition: gluing over an increasing union of opens. This is why a verification on finite covers alone does not exclude the bounded-function example.  The definitions and basic examples can be compared with , , and Stacks, Sheaves . The basis construction is treated in Stacks, Bases and sheaves . Our proofs isolate the two uses of the sheaf axiom: uniqueness detects equality locally, and existence reconstructs sections from matching local data.   "
},
{
  "id": "sh-c01-defpresheaf",
  "level": "2",
  "url": "sh-c01.html#sh-c01-defpresheaf",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": " Presheaf Section Restriction map  Let be a space. Write for the category whose objects are open subsets and whose arrows are inclusions. A presheaf of sets is a functor . A presheaf of -modules has target . For , write for restriction and for . Functoriality means A morphism is a natural transformation. The corresponding presheaf categories are and .  "
},
{
  "id": "sh-c01-restrictionsquare",
  "level": "2",
  "url": "sh-c01.html#sh-c01-restrictionsquare",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": " A presheaf morphism commutes with restriction for every inclusion .  A square with the section maps of u horizontally and the restriction maps from U to V vertically. The two composites agree.  "
},
{
  "id": "sh-c01-defsheaf",
  "level": "2",
  "url": "sh-c01.html#sh-c01-defsheaf",
  "type": "Definition",
  "number": "1.3",
  "title": "",
  "body": " Sheaf Separated presheaf Matching family Gluing  Let be a presheaf of sets or modules on , and let be an open cover. A family , with , is matching if for all . The presheaf is separated if a section on is determined by all its restrictions to any such cover. It is a sheaf if every matching family is the family of restrictions of a unique section on . Empty covers are included. Morphisms of sheaves are presheaf morphisms; and are the resulting full subcategories.  "
},
{
  "id": "sh-c01-equalizer",
  "level": "2",
  "url": "sh-c01.html#sh-c01-equalizer",
  "type": "Proposition",
  "number": "1.4",
  "title": "",
  "body": " A presheaf of sets or modules is a sheaf if and only if, for every open cover of every , the diagram is an equalizer. The two parallel maps restrict from the -th and -th factors. In the module case the condition is equivalently exactness of where .  The equalizer is the set or module of matching families. The asserted isomorphism to it is precisely existence and uniqueness of gluing. For modules, an equalizer of two linear maps is the kernel of their difference.  "
},
{
  "id": "sh-c01-localmorphisms",
  "level": "2",
  "url": "sh-c01.html#sh-c01-localmorphisms",
  "type": "Proposition",
  "number": "1.5",
  "title": "",
  "body": " Let be sheaves. A family of maps between their sections on open subsets, defined locally on an open cover of and compatible on overlaps and with restriction, glues uniquely to a sheaf morphism . If two sheaf morphisms agree on the members of an open cover, they agree globally.  For , apply the local maps to . Compatibility makes these images a matching family in , which has a unique gluing. The gluing respects restriction and the algebraic operations, because these identities can be tested on the cover. Uniqueness follows from separatedness of .  "
},
{
  "id": "sh-c01-functions",
  "level": "2",
  "url": "sh-c01.html#sh-c01-functions",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": " For any space , the assignment of continuous maps to is a sheaf of sets. If is a topological abelian group or a topological -module with continuous operations, it is a sheaf with that algebraic structure.  Matching maps have a unique set-theoretic gluing. The gluing is continuous because continuity is local on an open cover of the domain. The operations are pointwise, and equality of the required identities is also local.  "
},
{
  "id": "sh-c01-sectionsofmap",
  "level": "2",
  "url": "sh-c01.html#sh-c01-sectionsofmap",
  "type": "Example",
  "number": "1.7",
  "title": "",
  "body": " Let be continuous. The assignment is a sheaf of sets, called the sheaf of sections of .  Compatible local sections glue as continuous maps. Their composite with is the identity because that equality holds on the covering opens.  "
},
{
  "id": "sh-c01-solutions",
  "level": "2",
  "url": "sh-c01.html#sh-c01-solutions",
  "type": "Example",
  "number": "1.8",
  "title": "",
  "body": " Let be a morphism of sheaves of modules. Then is a sheaf. More generally, for two set-valued morphisms , their sectionwise equalizer is a sheaf.  Glue a matching family in the equalizer as sections of . Its two images agree locally and therefore agree in . The glued section lies in the equalizer, with uniqueness inherited from .  "
},
{
  "id": "sh-c01-subterminal",
  "level": "2",
  "url": "sh-c01.html#sh-c01-subterminal",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": " For an open subset , define to be a singleton if and empty otherwise. Then is a sheaf. It is represented by in the category of open subsets.  A section on each member of a cover exists exactly when every member is contained in , which is equivalent to their union being contained in . If it exists, it is unique.  "
},
{
  "id": "sh-c01-bounded",
  "level": "2",
  "url": "sh-c01.html#sh-c01-bounded",
  "type": "Example",
  "number": "1.10",
  "title": "",
  "body": " The bounded continuous real-valued functions on each open subset form a separated presheaf on , but not a sheaf.  Restrictions of bounded functions are bounded, and continuous functions agreeing on a cover are equal. On the cover , the functions are bounded on each member and agree on all overlaps. Their only possible gluing is the unbounded function .  "
},
{
  "id": "sh-c01-finiteimage",
  "level": "2",
  "url": "sh-c01.html#sh-c01-finiteimage",
  "type": "Example",
  "number": "1.11",
  "title": "",
  "body": " On an infinite discrete space , the functions with finite image form a separated presheaf that is not a sheaf.  Every function on a singleton has finite image. A family assigning distinct integers to countably many different points is a matching family on the singleton cover, but its gluing has infinite image.  "
},
{
  "id": "sh-c01-constantpresheaf",
  "level": "2",
  "url": "sh-c01.html#sh-c01-constantpresheaf",
  "type": "Example",
  "number": "1.12",
  "title": "",
  "body": " The constant presheaf with value a set takes on every open subset and uses identity restriction maps. Its associated sheaf has a different description: it consists of locally constant -valued functions. If has at least two elements and is a union of two nonempty disjoint open subsets, the constant presheaf fails the gluing condition on that cover after normalization at the empty set.  For the normalized presheaf, choose different constant values on the two components. The restrictions agree on the empty intersection, but no single element of gives both values. The unnormalized constant functor already fails the required value on the empty set unless is a singleton. The locally constant functions do glue, because local constancy is local.  "
},
{
  "id": "sh-c01-basisdefinition",
  "level": "2",
  "url": "sh-c01.html#sh-c01-basisdefinition",
  "type": "Definition",
  "number": "1.13",
  "title": "",
  "body": " Basis, sheaf on a  Let be a basis for . A presheaf on assigns sets or modules to basis opens, with restriction maps for inclusions between them. It is a sheaf on the basis if, for every cover by basis opens, a family glues uniquely whenever its restrictions agree on every basis open contained in . If the empty set belongs to the basis, the empty cover is included.  "
},
{
  "id": "sh-c01-basisextension",
  "level": "2",
  "url": "sh-c01.html#sh-c01-basisextension",
  "type": "Proposition",
  "number": "1.14",
  "title": "",
  "body": " Restriction to induces an equivalence between sheaves on and sheaves on . For a sheaf on the basis, the extension to an open consists of the compatible families The same construction works for morphisms and for module-valued sheaves.  Restriction of a sheaf satisfies the basis condition: agreement on basis subopens of an intersection implies agreement on the whole intersection, by separatedness. A matching family on a basis cover therefore glues in the original sheaf.  Now start with a sheaf on the basis. A compatible family on restricts by forgetting components. If , its component at determines all the others, so extension followed by restriction recovers .  To check the sheaf condition for the extension, suppose compatible families are given on an arbitrary open cover , agreeing on overlaps. For each basis open , cover by basis opens contained in some . The given local components agree on basis refinements of intersections. The basis sheaf condition gives a unique . Its restrictions to smaller basis opens are the corresponding components, by uniqueness. Thus the form a compatible family on . The same argument gives uniqueness of its gluing.  Finally, a sheaf on is recovered from all its restrictions to basis opens: compatible sections on them glue on their union. These constructions commute with morphisms, so the two restriction and extension functors are quasi-inverse.  "
},
{
  "id": "sh-c01-localonsource",
  "level": "2",
  "url": "sh-c01.html#sh-c01-localonsource",
  "type": "Proposition",
  "number": "1.15",
  "title": "",
  "body": " Let be a presheaf on and let be an open cover. Suppose every restricted presheaf is a sheaf. Then is a sheaf if, for each open , matching sections on the cover glue uniquely in .  Let a matching family be given on an arbitrary cover . Within each , glue its restrictions to , using the sheaf condition there. The resulting sections on agree on their intersections because they agree after further restriction to the cover by the . The assumed gluing condition for yields the required section on . Both applications include uniqueness.  "
},
{
  "id": "sh-c02",
  "level": "1",
  "url": "sh-c02.html",
  "type": "Chapter",
  "number": "2",
  "title": "Stalks, étalé spaces, and sheafification",
  "body": " Stalks, étalé spaces, and sheafification   A germ remembers a section on an unspecified sufficiently small neighbourhood. Equality of germs therefore permits shrinking that neighbourhood. A stalk gathers all germs at one point; it does not impose compatibility between different points. The topology of the étalé space records precisely the compatibility needed to recover sections.  We construct sheafification from these local data. The construction applies to every presheaf on every space, and its universal property makes the result independent of the chosen description.    Germs and neighbourhood colimits   Stalk Germ  Let be a presheaf on and let . Its stalk at is where an arrow from to means and induces restriction. For a section , its image is its germ at . Explicitly, and determine the same germ if there is an open with and .   The neighbourhood category is filtered: two neighbourhoods admit their intersection as a common smaller neighbourhood. In particular, equality in the colimit has the explicit shrinking description just given. The colimit is taken in sets, abelian groups, or modules according to the presheaf. For the latter two targets, the set of germs carries the induced algebraic operations.   Let be a presheaf on .  Every germ has a representative on an open neighbourhood. Two local representatives give the same germ exactly when they agree after a common shrinking.  The set of points where two sections on the same open subset have equal germs is open.  If is separated, the map is injective for every open . Conversely, these injections imply separatedness.  A basis of open neighbourhoods of computes the same stalk.   The first assertion is the explicit description of a filtered colimit. If , choose a neighbourhood where the restrictions agree; every point in that neighbourhood also has equal germs. This proves the second assertion. For the third, equality of all germs gives an open cover on which the sections agree, so separatedness gives their equality. Conversely, equality after restriction to a cover gives equality of germs at every point. This includes the empty open, where the asserted injection gives at most one section. Cofinality of basis neighbourhoods proves the last assertion.   A germ of a function is more than its value. On , the functions and have the same value at zero but different germs there. A germ also contains less information than a section on a specified neighbourhood: changing that section outside a smaller neighbourhood does not change its germ. A smooth germ is also more than its Taylor series. The function for , extended by zero at zero, is smooth with every derivative zero there, but has a nonzero germ. Each derivative away from zero is the exponential times a polynomial in . The exponential decays faster than every power of , so each such derivative tends to zero. Thus matching all derivatives does not replace equality on a neighbourhood.  For an arbitrary family of sets , the assignment is a sheaf. Its stalk at need not be . Evaluation gives a map to , but a germ of an arbitrary assignment can remember how its other values behave arbitrarily near . On the convergent-sequence space , a germ of an arbitrary scalar-valued function at zero remembers its tail modulo eventual equality. Its value at zero alone does not determine this tail. A product indexed by points is therefore not automatically a sheaf with prescribed stalks.  A presheaf morphism induces by taking the germ of its image. Compatibility with restriction ensures that this is well-defined. The stalk functor preserves all colimits of presheaves and all finite limits. The colimit assertion interchanges two colimits; the finite-limit assertion uses the fact that filtered colimits of sets or modules commute with finite limits. An infinite family requires a common neighbourhood for all its entries, which a finite-limit argument cannot provide.  These constructions are compared with Stacks, Stalks . The common direction of the arrows is important: smaller neighbourhoods receive restriction maps and are later in the filtered system.    The space of germs   Étalé space Sheaf space Local homeomorphism  For a presheaf of sets , let and let send a germ to its base point. For , write for . Give the topology generated by the sets . This is the étalé space , or space of germs, of . A map is a local homeomorphism if every point of has an open neighbourhood on which is a homeomorphism onto an open subset of .    The sets form a basis for the stated topology. Each restriction is a homeomorphism. In particular, is a local homeomorphism, every fibre is discrete, and each is a continuous section.  Every germ is represented by some , so these sets cover . If , the two representatives agree on a smaller open neighbourhood of . Then lies in the intersection of their two basic sets. This proves the basis property.  The projection is bijective from to . It is continuous because inverse images of opens are unions of basic sets restricted to those opens. The inverse is continuous: the inverse image of is the open subset of on which the germs of and agree. Thus each such projection is a homeomorphism.   A continuous section of is locally a section obtained from a section of the original presheaf. To see this at , choose a basic neighbourhood of the value of the section at , and shrink the domain into its inverse image. Both local sections then land in the same chart of the local homeomorphism and have the same projection, so they coincide.  The adjective étalé in this topological construction refers to a local homeomorphism. It does not invoke the étale topology of a scheme. A local homeomorphism need not be a covering map: the latter requires a single base neighbourhood to trivialize the entire inverse image, while the former provides a neighbourhood separately for each point of the total space. This distinction matters for sheaves that are not locally constant. The projection from the disjoint union to , with each summand mapped by inclusion, is a surjective local homeomorphism. It has one point over zero and two over every positive number, so no neighbourhood of zero is evenly covered. Surjectivity does not repair the difference.   Even when is Hausdorff, an étalé space need not be Hausdorff. For the sheaf of continuous real-valued functions on , consider at zero the germs of and .  The germs are different because the functions disagree on every neighbourhood of zero. Any two basic neighbourhoods of these germs contain germs at negative points close enough to zero, where and agree. Thus the two germs have no disjoint neighbourhoods in the étalé space.   The construction therefore uses the ordinary category of topological spaces, allowing non-Hausdorff total spaces. Requiring every étalé space to be Hausdorff would exclude familiar sheaves of functions.    Associated sheaves   Sheafification Associated sheaf Locally representable germ family  For a presheaf , define to be the continuous sections of over . Equivalently, it is the set of families with such that, for every , there is an open neighbourhood and a section with for every . These are locally representable families of germs . The presheaf is called the associated sheaf . The natural map sends a section to its germs.    The construction above has the following properties.  is a sheaf, functorially in .  The maps are bijections, or isomorphisms for modules.  is an isomorphism if and only if is a sheaf.  For a sheaf , composition with induces a natural bijection The analogous assertion holds for modules.   Continuous sections of a continuous map form a sheaf by . A presheaf morphism induces a map of stalks and takes a locally represented family to the family represented by its images, so the construction is functorial.  Evaluation at gives a map . It is surjective because every germ has a local representative. If a section of evaluates to a given germ, choose its local representative near ; equality of the represented germs allows one further shrinking. This shows that evaluation and are inverse.  If is a sheaf, a locally represented family comes from local sections that agree wherever their germs agree. Separatedness turns equality of germs on an intersection into equality of the sections there. These sections therefore glue uniquely in . Conversely, if is an isomorphism, is isomorphic to a sheaf.  Finally, given , represent a section of locally by sections . On an overlap, equality of their germs implies local equality of the images , and separatedness of gives equality throughout the overlap. Glue these images in . This prescription is independent of the representatives and commutes with restriction. Any extension of must have these local values, so it is unique.   For module-valued presheaves, add and scale families of germs pointwise. These operations preserve local representability: two sections have simultaneous representatives after intersecting their neighbourhoods, and their sum represents the pointwise sum. Thus the associated sheaf is a module sheaf, and the universal property respects linear morphisms.  Sheafification is left adjoint to the full inclusion of sheaves into presheaves. Its universal property also proves uniqueness up to a unique isomorphism compatible with . A construction using covers, or the plus construction on a site, must therefore agree with this one whenever both apply. The space-of-germs construction is particularly concrete because points already detect the sheaves under consideration.   A morphism to a sheaf factors uniquely through the associated sheaf.  A triangle from the presheaf F to its associated sheaf aF and to a sheaf G. The map from aF to G is the unique factorization of u through eta.    Let . Their images in agree if and only if there is an open cover of on which their restrictions agree. Every section of is locally the image of a section of . In particular, is injective on each open subset exactly when is separated.  Equality in is equality of the germ at every point. At each point this is witnessed by a smaller neighbourhood, and these neighbourhoods form the required cover. The converse follows by taking germs. Local representability is the definition of . The last assertion is then the locality part of the sheaf axiom, including the empty cover.   The two assertions describe the two changes made by sheafification: local equality becomes equality, and locally compatible sections become sections. A separated presheaf undergoes only the second change. An arbitrary presheaf may undergo both.   For the constant presheaf with value , the associated sheaf is the sheaf of locally constant maps to the discrete set . Its étalé space is with the product topology.  Every stalk is . A germ family is locally represented by a constant section exactly when its associated map to is locally constant. The basic open sets of the étalé topology are . This gives the asserted product, including the empty-space and empty-set cases.   The same argument works for groups and modules. It shows why the adjective constant refers to a sheaf locally represented by a single fixed coefficient object, rather than to a sectionwise constant functor.  For a presheaf on a basis, the germ construction can be made using basis neighbourhoods and then locally representable germ families on all opens. When the basis presheaf is already a sheaf on the basis, this recovers the extension in .  The universal property and the equality criterion can be checked against Stacks, Sheafification and its abelian and module variants. These criteria will also explain why an image or a quotient of sheaves must sometimes be sheafified.    Detecting sheaf morphisms at stalks   Let be a morphism of sheaves of sets or modules on .  is injective on the sections of every open subset if and only if each is injective.  Each is surjective if and only if every local section of has preimages after passage to an open cover of its domain.  is an isomorphism if and only if every is an isomorphism.   If the section maps are injective, equality of two images in a stalk is witnessed by equality on a smaller open, where injectivity applies. Conversely, if two sections have the same image, stalkwise injectivity makes their germs equal at every point; separatedness makes the sections equal.  For surjectivity, lift the germ of a given section at , represent that lift near , and shrink until its image agrees with the original section. These local lifts form a cover. The converse follows by taking a local lift near the point of a representative of any germ.  If all stalk maps are bijective, choose these local lifts for a section of . Their images agree on overlaps, and the first part makes the lifts themselves agree. They glue uniquely in , proving that the section maps are bijective. Their inverses commute with restriction by uniqueness. The converse follows from functoriality of stalks.   Surjectivity in the second part is local. It does not assert surjectivity of for each . Isomorphisms do have such sectionwise inverses, because uniqueness permits the local lifts to glue. The difference between local existence and unique gluing is responsible for this asymmetry.  For a morphism of presheaves, a stalkwise isomorphism says that its sheafification is an isomorphism. It need not say that the original presheaves are isomorphic. The constant presheaf mapping to its associated sheaf is a basic example.   Sheafification preserves finite limits. Stalks of sheaves preserve finite limits, and a map between sheaves obtained from any such finite-limit comparison is an isomorphism as soon as it is an isomorphism at every stalk.  A sectionwise limit of sheaves is a sheaf: the universal property of a limit combines the unique local gluings in each component. For a finite diagram, take the canonical map from the sheafification of its presheaf limit to the limit of the sheafifications. At a stalk, this is the finite-limit comparison for a filtered colimit of sets or modules, and is an isomorphism. Apply . The assertion about stalks follows by the same argument before sheafification.   Preservation of all colimits follows instead from the adjunction for sheafification, with colimits in sheaves formed as in . Preservation of finite limits is additional structure, not a consequence of being a left adjoint. Here it follows from the finite-limit property of filtered neighbourhood colimits and the fact that stalks detect isomorphisms.    Sheaves and local homeomorphisms   The functor taking a local homeomorphism over to its sheaf of continuous sections is an equivalence from the category of local homeomorphisms over to . A quasi-inverse sends a sheaf to its étalé space.  For a sheaf , its section sheaf after the étalé construction is , already identified with . For a local homeomorphism , let be its sheaf of sections. A germ of a section at determines its value in . Conversely, a point of lies in a local homeomorphism chart; the inverse chart gives a germ of a section through it. Any two sections through this point agree near after shrinking into that same chart. Thus evaluation gives a bijection .  This bijection is a homeomorphism. A local section of a local homeomorphism has open image locally, and its image as a whole is a union of these local open images. Evaluation takes the basic open associated with a section to this image, homeomorphically over its domain. The correspondence is natural for maps over and for sheaf morphisms, proving the equivalence.   In the module case, the fibres of the étalé space carry module structures, with continuous addition on the fibre product and continuous scalar operations. Conversely, these operations give a sheaf of modules on sections. This describes how algebraic structure can be local without making the sheaf a locally trivial vector bundle.  The equivalence is useful for interpretation and for constructing local systems. It is not necessary to pass to a topological total space every time a sheaf is used; the presheaf description is usually more convenient for algebra and derived functors.    Compatibility between different points  Stalks detect a morphism when that morphism is already given. A family of stalks, with no compatibility data, does not determine a sheaf. Even a family of linear maps between stalks need not arise from a sheaf morphism.   Let with open subsets . Giving a sheaf of modules is equivalent to giving a module map . The stalks are and , and the map is restriction from to .  A sheaf must have value zero at the empty set. Every cover of contains , and every nonempty cover of contains that open, so there are no further gluing conditions. These two opens are the smallest neighbourhoods of their points, hence compute the stalks. Distinct choices of can give nonisomorphic sheaves even with the same stalk modules. For instance, for a nonzero field, the identity and the zero map from the field to itself are not isomorphic as arrows.   More generally, if , every open neighbourhood of contains . Taking the germ at of a representative at gives a canonical map . We call it a generization map. The condition is often expressed by saying that is a specialization of . The direction of the specialization order varies among references. Writing and displaying avoids that convention problem. On a Hausdorff space, distinct points have no such relation; compatibility is still carried by local sections and the étalé topology.  A finite topological space has a smallest neighbourhood at each point. A sheaf is determined by its values on these neighbourhoods and their restriction maps, subject to the corresponding functoriality. The example shows the simplest nontrivial case. More elaborate finite spaces can also have nonzero sheaf cohomology, as calculated in .   "
},
{
  "id": "sh-c02-stalk",
  "level": "2",
  "url": "sh-c02.html#sh-c02-stalk",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": " Stalk Germ  Let be a presheaf on and let . Its stalk at is where an arrow from to means and induces restriction. For a section , its image is its germ at . Explicitly, and determine the same germ if there is an open with and .  "
},
{
  "id": "sh-c02-germtests",
  "level": "2",
  "url": "sh-c02.html#sh-c02-germtests",
  "type": "Proposition",
  "number": "2.2",
  "title": "",
  "body": " Let be a presheaf on .  Every germ has a representative on an open neighbourhood. Two local representatives give the same germ exactly when they agree after a common shrinking.  The set of points where two sections on the same open subset have equal germs is open.  If is separated, the map is injective for every open . Conversely, these injections imply separatedness.  A basis of open neighbourhoods of computes the same stalk.   The first assertion is the explicit description of a filtered colimit. If , choose a neighbourhood where the restrictions agree; every point in that neighbourhood also has equal germs. This proves the second assertion. For the third, equality of all germs gives an open cover on which the sections agree, so separatedness gives their equality. Conversely, equality after restriction to a cover gives equality of germs at every point. This includes the empty open, where the asserted injection gives at most one section. Cofinality of basis neighbourhoods proves the last assertion.  "
},
{
  "id": "sh-c02-defetale",
  "level": "2",
  "url": "sh-c02.html#sh-c02-defetale",
  "type": "Definition",
  "number": "2.3",
  "title": "",
  "body": " Étalé space Sheaf space Local homeomorphism  For a presheaf of sets , let and let send a germ to its base point. For , write for . Give the topology generated by the sets . This is the étalé space , or space of germs, of . A map is a local homeomorphism if every point of has an open neighbourhood on which is a homeomorphism onto an open subset of .  "
},
{
  "id": "sh-c02-etalecharts",
  "level": "2",
  "url": "sh-c02.html#sh-c02-etalecharts",
  "type": "Proposition",
  "number": "2.4",
  "title": "",
  "body": " The sets form a basis for the stated topology. Each restriction is a homeomorphism. In particular, is a local homeomorphism, every fibre is discrete, and each is a continuous section.  Every germ is represented by some , so these sets cover . If , the two representatives agree on a smaller open neighbourhood of . Then lies in the intersection of their two basic sets. This proves the basis property.  The projection is bijective from to . It is continuous because inverse images of opens are unions of basic sets restricted to those opens. The inverse is continuous: the inverse image of is the open subset of on which the germs of and agree. Thus each such projection is a homeomorphism.  "
},
{
  "id": "sh-c02-nonhausdorff",
  "level": "2",
  "url": "sh-c02.html#sh-c02-nonhausdorff",
  "type": "Example",
  "number": "2.5",
  "title": "",
  "body": " Even when is Hausdorff, an étalé space need not be Hausdorff. For the sheaf of continuous real-valued functions on , consider at zero the germs of and .  The germs are different because the functions disagree on every neighbourhood of zero. Any two basic neighbourhoods of these germs contain germs at negative points close enough to zero, where and agree. Thus the two germs have no disjoint neighbourhoods in the étalé space.  "
},
{
  "id": "sh-c02-associated",
  "level": "2",
  "url": "sh-c02.html#sh-c02-associated",
  "type": "Definition",
  "number": "2.6",
  "title": "",
  "body": " Sheafification Associated sheaf Locally representable germ family  For a presheaf , define to be the continuous sections of over . Equivalently, it is the set of families with such that, for every , there is an open neighbourhood and a section with for every . These are locally representable families of germs . The presheaf is called the associated sheaf . The natural map sends a section to its germs.  "
},
{
  "id": "sh-c02-associatedproperties",
  "level": "2",
  "url": "sh-c02.html#sh-c02-associatedproperties",
  "type": "Proposition",
  "number": "2.7",
  "title": "",
  "body": " The construction above has the following properties.  is a sheaf, functorially in .  The maps are bijections, or isomorphisms for modules.  is an isomorphism if and only if is a sheaf.  For a sheaf , composition with induces a natural bijection The analogous assertion holds for modules.   Continuous sections of a continuous map form a sheaf by . A presheaf morphism induces a map of stalks and takes a locally represented family to the family represented by its images, so the construction is functorial.  Evaluation at gives a map . It is surjective because every germ has a local representative. If a section of evaluates to a given germ, choose its local representative near ; equality of the represented germs allows one further shrinking. This shows that evaluation and are inverse.  If is a sheaf, a locally represented family comes from local sections that agree wherever their germs agree. Separatedness turns equality of germs on an intersection into equality of the sections there. These sections therefore glue uniquely in . Conversely, if is an isomorphism, is isomorphic to a sheaf.  Finally, given , represent a section of locally by sections . On an overlap, equality of their germs implies local equality of the images , and separatedness of gives equality throughout the overlap. Glue these images in . This prescription is independent of the representatives and commutes with restriction. Any extension of must have these local values, so it is unique.  "
},
{
  "id": "sh-c02-sheafificationtriangle",
  "level": "2",
  "url": "sh-c02.html#sh-c02-sheafificationtriangle",
  "type": "Figure",
  "number": "2.8",
  "title": "",
  "body": " A morphism to a sheaf factors uniquely through the associated sheaf.  A triangle from the presheaf F to its associated sheaf aF and to a sheaf G. The map from aF to G is the unique factorization of u through eta.  "
},
{
  "id": "sh-c02-localequality",
  "level": "2",
  "url": "sh-c02.html#sh-c02-localequality",
  "type": "Proposition",
  "number": "2.9",
  "title": "",
  "body": " Let . Their images in agree if and only if there is an open cover of on which their restrictions agree. Every section of is locally the image of a section of . In particular, is injective on each open subset exactly when is separated.  Equality in is equality of the germ at every point. At each point this is witnessed by a smaller neighbourhood, and these neighbourhoods form the required cover. The converse follows by taking germs. Local representability is the definition of . The last assertion is then the locality part of the sheaf axiom, including the empty cover.  "
},
{
  "id": "sh-c02-constantassociated",
  "level": "2",
  "url": "sh-c02.html#sh-c02-constantassociated",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": " For the constant presheaf with value , the associated sheaf is the sheaf of locally constant maps to the discrete set . Its étalé space is with the product topology.  Every stalk is . A germ family is locally represented by a constant section exactly when its associated map to is locally constant. The basic open sets of the étalé topology are . This gives the asserted product, including the empty-space and empty-set cases.  "
},
{
  "id": "sh-c02-stalkiso",
  "level": "2",
  "url": "sh-c02.html#sh-c02-stalkiso",
  "type": "Proposition",
  "number": "2.11",
  "title": "",
  "body": " Let be a morphism of sheaves of sets or modules on .  is injective on the sections of every open subset if and only if each is injective.  Each is surjective if and only if every local section of has preimages after passage to an open cover of its domain.  is an isomorphism if and only if every is an isomorphism.   If the section maps are injective, equality of two images in a stalk is witnessed by equality on a smaller open, where injectivity applies. Conversely, if two sections have the same image, stalkwise injectivity makes their germs equal at every point; separatedness makes the sections equal.  For surjectivity, lift the germ of a given section at , represent that lift near , and shrink until its image agrees with the original section. These local lifts form a cover. The converse follows by taking a local lift near the point of a representative of any germ.  If all stalk maps are bijective, choose these local lifts for a section of . Their images agree on overlaps, and the first part makes the lifts themselves agree. They glue uniquely in , proving that the section maps are bijective. Their inverses commute with restriction by uniqueness. The converse follows from functoriality of stalks.  "
},
{
  "id": "sh-c02-finitelimits",
  "level": "2",
  "url": "sh-c02.html#sh-c02-finitelimits",
  "type": "Proposition",
  "number": "2.12",
  "title": "",
  "body": " Sheafification preserves finite limits. Stalks of sheaves preserve finite limits, and a map between sheaves obtained from any such finite-limit comparison is an isomorphism as soon as it is an isomorphism at every stalk.  A sectionwise limit of sheaves is a sheaf: the universal property of a limit combines the unique local gluings in each component. For a finite diagram, take the canonical map from the sheafification of its presheaf limit to the limit of the sheafifications. At a stalk, this is the finite-limit comparison for a filtered colimit of sets or modules, and is an isomorphism. Apply . The assertion about stalks follows by the same argument before sheafification.  "
},
{
  "id": "sh-c02-etaleequivalence",
  "level": "2",
  "url": "sh-c02.html#sh-c02-etaleequivalence",
  "type": "Theorem",
  "number": "2.13",
  "title": "",
  "body": " The functor taking a local homeomorphism over to its sheaf of continuous sections is an equivalence from the category of local homeomorphisms over to . A quasi-inverse sends a sheaf to its étalé space.  For a sheaf , its section sheaf after the étalé construction is , already identified with . For a local homeomorphism , let be its sheaf of sections. A germ of a section at determines its value in . Conversely, a point of lies in a local homeomorphism chart; the inverse chart gives a germ of a section through it. Any two sections through this point agree near after shrinking into that same chart. Thus evaluation gives a bijection .  This bijection is a homeomorphism. A local section of a local homeomorphism has open image locally, and its image as a whole is a union of these local open images. Evaluation takes the basic open associated with a section to this image, homeomorphically over its domain. The correspondence is natural for maps over and for sheaf morphisms, proving the equivalence.  "
},
{
  "id": "sh-c02-sierpinski",
  "level": "2",
  "url": "sh-c02.html#sh-c02-sierpinski",
  "type": "Example",
  "number": "2.14",
  "title": "",
  "body": " Let with open subsets . Giving a sheaf of modules is equivalent to giving a module map . The stalks are and , and the map is restriction from to .  A sheaf must have value zero at the empty set. Every cover of contains , and every nonempty cover of contains that open, so there are no further gluing conditions. These two opens are the smallest neighbourhoods of their points, hence compute the stalks. Distinct choices of can give nonisomorphic sheaves even with the same stalk modules. For instance, for a nonzero field, the identity and the zero map from the field to itself are not isomorphic as arrows.  "
},
{
  "id": "sh-c03",
  "level": "1",
  "url": "sh-c03.html",
  "type": "Chapter",
  "number": "3",
  "title": "Categories of sheaves and exactness",
  "body": " Categories of sheaves and exactness   The sheaf condition changes how algebraic constructions are computed. Kernels and limits are already sheaves when formed on sections. Images, quotients, and other colimits may have to acquire additional local sections. Stalks make the resulting constructions explicit, but they do not commute with arbitrary products.  We establish the abelian and Grothendieck properties required for homological algebra. The argument separates exactness in a sheaf category from exactness of a sequence of sections on a particular open subset.    Limits and colimits   Let be a small diagram of sheaves of sets or modules. Its limit and colimit exist. The limit is computed sectionwise, and the colimit is the associated sheaf of the sectionwise presheaf colimit:  For a point , stalks commute with these colimits and with finite limits. The natural maps are  the latter being an isomorphism when the indexing category is finite.  The sectionwise limit is a sheaf because a compatible local family can be glued in every component, and the unique gluings respect the diagram maps. This also verifies its universal property. The colimit formula follows from the adjunction between sheafification and inclusion: a morphism from that associated sheaf to a sheaf is exactly a compatible family of morphisms .  Sheafification preserves stalks, and a stalk is itself a colimit of sections. Interchanging two colimits proves the stalk-colimit formula. For a finite limit, filtered colimits over neighbourhoods commute with the finite limit in sets or modules. This proves the remaining comparison.   In particular, a product of sheaves is its sectionwise product. An equalizer is also computed sectionwise. For modules, finite products and coproducts coincide and need no sheafification. An infinite direct sum, however, is the sheafification of a sectionwise direct sum; it need not have the same sections as that presheaf.   Let be discrete and let . Consider the coproduct of countably many copies of . Its sections on include the function assigning to the point the -th standard basis vector in . This section is not in .  A sheaf on a discrete space has arbitrary independent sections at the individual points. Thus the section in question is obtained by gluing its values on singletons. A section in the raw direct sum of global section modules has nonzero entries in only finitely many summand indices, uniformly over . Our section has no such uniform finite set.   More generally, a section of a coproduct of module sheaves is locally a finite sum of sections of its summands. The finite set of summands may vary from neighbourhood to neighbourhood. Merely requiring finitely many nonzero components at each stalk is weaker than this neighbourhood condition.   Let and let . For each , let if , and let otherwise, with the evident restriction maps. Each is a sheaf and each stalk is zero. Nevertheless,  Each fixed point can be excluded from a neighbourhood of zero, giving its zero stalk there. The tails are a cofinal neighbourhood basis at zero. Sections of the product on are arbitrary sequences indexed by , and restriction forgets initial entries. The colimit identifies two sequences exactly when they agree eventually. Its kernel from the full product is the direct sum. The class of the sequence constantly equal to one is nonzero.   The canonical map from this product stalk to the product of the stalks is therefore not injective. The same example shows the neighbourhood issue for coproducts: the section with value one in every skyscraper component is pointwise finite at every point of , but near zero it involves infinitely many summands, so it is not a section of the coproduct.  The general formulas and useful variants for directed colimits appear in Stacks, Limits and colimits of sheaves . The formulas distinguish a colimit in sheaves from a colimit of section modules; the superscript on can be omitted once its category is clear.    Monomorphisms and local surjectivity   Subsheaf Locally surjective morphism Epimorphism of sheaves  A subsheaf  is a subpresheaf which is a sheaf. A morphism is locally surjective if, for every , there is an open cover and sections with . We use surjective morphism of sheaves in this local sense, and explicitly say sectionwise surjective when that stronger condition is intended.    For sheaves of sets, monomorphisms are precisely sectionwise injections, equivalently stalkwise injections. Epimorphisms are precisely locally surjective morphisms, equivalently stalkwise surjections. A morphism both monic and epic is an isomorphism.  The representable sheaf satisfies . A monomorphism therefore induces injections on sections; the converse follows by cancellation on each open. The stalkwise characterization was proved in .  A locally surjective morphism is epic: if two maps from its target agree after composition, they agree on the local lifts of every target section and hence agree locally on every target section. Separatedness then gives equality.  For the converse, fix and a set . The sheaf with value on opens containing and a singleton on other opens satisfies . Thus if is epic, precomposition with is injective for every . This says that is an epimorphism of sets, hence surjective. The local lifting criterion in applies. Finally, a stalkwise bijective morphism is an isomorphism by that same proposition.   The sheaf is the direct image from the one-point subspace; no condition that be closed is needed for this construction. Its stalk at a different point can be nontrivial in a non-Hausdorff space. Calling it a skyscraper does not license the additional assertion that its only nontrivial stalk is at . On a space, every other point has an open neighbourhood excluding , and the other stalks are terminal or zero. This is the usual picture of a skyscraper. The functorial definition works without the assumption.  A subsheaf is determined by local membership: a section of lies in if and only if its restrictions lie there on an open cover. For the reverse implication, glue the local sections in and use the inclusion into . A subpresheaf defined by a global bound, such as bounded functions, fails precisely this local membership condition.  We will use the module analogues after constructing kernels and cokernels. The stalkwise criterion is the same, but the abelian formulation also gives images and exact sequences.    Kernels, images, and quotients   The category is abelian. For , its kernel is the sectionwise kernel, and its cokernel is The image is the associated sheaf of the sectionwise image, viewed as the subsheaf of consisting of sections locally in the image. Stalks are exact and preserve these kernels, cokernels, and images.  Morphism sets are modules, composition is bilinear, and finite sums of sheaves are biproducts. The sectionwise kernel is a sheaf by , and has the kernel universal property. The cokernel formula has the required universal property by sheafification and the sectionwise cokernel property in presheaves.  Taking a stalk preserves a sectionwise kernel by the finite-limit property. For the displayed cokernel it first removes sheafification, then commutes the neighbourhood colimit with a cokernel. Thus it gives the ordinary module cokernel. The canonical map from coimage to image consequently becomes an isomorphism of modules at each stalk. By , it is an isomorphism of sheaves. An additive category with kernels, cokernels, and these coimage-image isomorphisms is abelian.  Exactness of stalks now follows from the kernel and cokernel formulas. For the image formula, its presheaf image has the module image at each stalk because filtered colimits of modules are exact. Its associated sheaf maps injectively to with those image stalks, and hence is the abelian image. The local representability criterion for sheafification gives the description by local membership.    For a sequence of module sheaves exactness at is equivalent to exactness of the sequence of stalk modules at every point. Equivalently, and every section of locally lifts through . In particular, module-sheaf monomorphisms are sectionwise and stalkwise injections, and epimorphisms are locally surjective and stalkwise surjective.  Exactness implies stalkwise exactness by the preceding theorem. Conversely, the quotient of by the sheaf image of has zero stalks, and hence is zero by . This proves exactness. The description of the image gives the local lifting form. The last assertions follow from the kernel and cokernel tests in an abelian category.   For every open , the functor is left exact. If a sequence is exact at , a section of killed by need only lift locally; local preimages may differ by kernel sections and fail to glue. Thus a short exact sequence of sheaves gives a left exact sequence of sections, with no unconditional final surjectivity.   Let be the circle. Let and be the sheaves of continuous functions from opens of to the indicated topological abelian groups. Reduction modulo integers gives a short exact sequence of abelian sheaves Its map on global sections is not surjective.  The kernel consists of continuous integer-valued functions, which are locally constant. Every continuous circle-valued function has real lifts near each point because is a local homeomorphism. This proves local surjectivity.  The identity of has no global continuous real lift. If were such a lift, the continuous function would be integer-valued on the connected space , and therefore constant. It follows that , contradicting periodicity in .   The presheaf cokernel of this morphism has a nonzero global value but zero stalks; its sheafification is zero. This supplies a concrete reason that sectionwise quotients cannot replace quotient sheaves. The obstruction to a global lift is later represented by a cohomology class.   The functor is exact. The inclusion in the other direction preserves kernels and all limits, but need not preserve cokernels or epimorphisms. A complex of sheaves is exact if and only if all its stalk complexes are exact.  A sectionwise exact sequence of presheaves remains exact on taking filtered neighbourhood colimits. Sheafification does not change those stalks, and applies. The inclusion preserves limits by ; the exponential sequence gives failure of preservation of epimorphisms. Exactness of complexes follows by applying the same stalk criterion at each degree.   For a complex , exactness of stalks also gives . The cohomology sheaf is the sheafification of the presheaf . Its sections need not be those presheaf values, even though their germs agree.    Generators and the Grothendieck property   Free sheaf on an open subset Generator, sheaf category  For an open subset , let be the sheafification of the free -module presheaf on . Explicitly, this presheaf takes on and zero on other opens, with the induced restrictions. We call the free sheaf associated with .    There is a natural isomorphism . The stalk of is on and zero outside . The set of objects generates . More explicitly, every sheaf is a quotient of a coproduct of these objects.  The adjunction for sheafification and the free-module version of Yoneda identify a map from to with the image of its distinguished generator on , namely an arbitrary section of . For a point of , neighbourhoods inside give the constant germ . For a point outside , no neighbourhood of the point is contained in , and all the relevant presheaf values are zero.  For each pair with , use its corresponding map , and take the coproduct of these maps. A germ of is represented by some such , and is the image of the generator germ in that summand. The resulting map is stalkwise surjective and therefore an epimorphism. Finally, the maps from all detect whether two sheaf morphisms differ, since the maps on sections detect a difference.   In , is identified with extension by zero of along the open inclusion. The present construction gives its universal property without needing that functor in advance. It does not make projective: that would require the section functor on to take every sheaf epimorphism to a surjection of modules.   For every space and commutative coefficient ring , the category is a Grothendieck abelian category. In particular, it has all small colimits, filtered colimits are exact, and it has a generator. It has enough injective objects.  Abelianity and colimits have already been proved. A filtered colimit of an exact diagram of module sheaves is exact at every stalk, because stalks commute with colimits and filtered colimits of modules are exact. Thus it is an exact sheaf sequence. The coproduct is a generator by .  The enough-injectives assertion is the general existence theorem for a Grothendieck abelian category, applied to these verified hypotheses. It is stated with its sources in the Grothendieck categories chapter of the homological algebra notes; see also the injective-existence results in . An explicit sheaf construction of an injective embedding is given in .   The generator is generally a large coproduct, not a finite-rank constant sheaf. Grothendieckness does not assert enough projectives, exactness of products, or exactness of global sections. These are independent properties. For instance, on the circle the object represents global sections and is not projective by .  Over a discrete space, every sheaf of modules is determined by its point values and arbitrary choices at distinct points are independent. There is an equivalence It follows directly by gluing over the singleton cover. In this special case, sections are products of stalk modules, and projective and injective constructions can be performed separately at every point. The general theory cannot assume that description because a general point has no singleton open neighbourhood.    Filtered colimits and section functors  Exact filtered colimits in the sheaf category do not imply that a section functor commutes with them. The first statement is detected locally at stalks; the second asks for a common diagram stage representing a section on an entire open subset.  A space is quasi-compact if every open cover has a finite subcover. An open subset is quasi-compact with respect to its subspace topology. Some references use compact for this property, while others include Hausdorffness in compactness. The word quasi-compact in the following statements carries no separation condition.   Let be discrete, let , and let with the standard inclusions. The map is not surjective.  The sheaf colimit has stalk at each point. Assigning its -th standard basis vector to the point gives a global section. It is not represented by one finite rank at all points. This is the filtered version of .    Let be a directed system of sheaves of sets or modules, and put . For an open , consider the comparison .  If is quasi-compact, is injective.  If all transition maps are monomorphisms, is injective for every , and is bijective when is quasi-compact.  If is quasi-compact and has a basis of quasi-compact opens stable under finite intersections, then is bijective without the monomorphism assumption.   Suppose two sections from a common stage have the same image in . Equality of their germs at each point is witnessed at some later stage on a neighbourhood of that point. If is quasi-compact, take finitely many such neighbourhoods and one stage dominating their stages. The sections agree there on a cover, hence agree as sections. This proves the first assertion.  If transition maps are monic, each map to the sheaf colimit is monic, as can be checked on stalks. This proves injectivity on every open. A section of has local representatives from diagram stages. For quasi-compact , choose finitely many and move them to one common stage. Since that stage maps monomorphically into , the representatives already agree on overlaps; glue them there. This proves the second assertion.  For the third, choose the finite local-representative cover from the stated basis and move to a common stage. On an overlap the two representative sections have the same image in . The overlap is quasi-compact, so the first assertion supplies a stage where they agree there. Finitely many overlaps require only one common later stage. Glue at that stage. Injectivity has already been proved.   The last proof separates two finite choices: a finite cover obtains representatives in one stage, and quasi-compact overlaps obtain agreement in one stage. Quasi-compactness of alone supplies only the first kind of choice. This is why an additional intersection hypothesis appears when transition maps are not injective.  These variants are consistent with . They will be used only with their stated hypotheses. In particular, the exactness of filtered colimits in needs none of these extra conditions on section functors.   "
},
{
  "id": "sh-c03-limitformulas",
  "level": "2",
  "url": "sh-c03.html#sh-c03-limitformulas",
  "type": "Proposition",
  "number": "3.1",
  "title": "",
  "body": " Let be a small diagram of sheaves of sets or modules. Its limit and colimit exist. The limit is computed sectionwise, and the colimit is the associated sheaf of the sectionwise presheaf colimit:  For a point , stalks commute with these colimits and with finite limits. The natural maps are  the latter being an isomorphism when the indexing category is finite.  The sectionwise limit is a sheaf because a compatible local family can be glued in every component, and the unique gluings respect the diagram maps. This also verifies its universal property. The colimit formula follows from the adjunction between sheafification and inclusion: a morphism from that associated sheaf to a sheaf is exactly a compatible family of morphisms .  Sheafification preserves stalks, and a stalk is itself a colimit of sections. Interchanging two colimits proves the stalk-colimit formula. For a finite limit, filtered colimits over neighbourhoods commute with the finite limit in sets or modules. This proves the remaining comparison.  "
},
{
  "id": "sh-c03-coproductsections",
  "level": "2",
  "url": "sh-c03.html#sh-c03-coproductsections",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": " Let be discrete and let . Consider the coproduct of countably many copies of . Its sections on include the function assigning to the point the -th standard basis vector in . This section is not in .  A sheaf on a discrete space has arbitrary independent sections at the individual points. Thus the section in question is obtained by gluing its values on singletons. A section in the raw direct sum of global section modules has nonzero entries in only finitely many summand indices, uniformly over . Our section has no such uniform finite set.  "
},
{
  "id": "sh-c03-productstalks",
  "level": "2",
  "url": "sh-c03.html#sh-c03-productstalks",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": " Let and let . For each , let if , and let otherwise, with the evident restriction maps. Each is a sheaf and each stalk is zero. Nevertheless,  Each fixed point can be excluded from a neighbourhood of zero, giving its zero stalk there. The tails are a cofinal neighbourhood basis at zero. Sections of the product on are arbitrary sequences indexed by , and restriction forgets initial entries. The colimit identifies two sequences exactly when they agree eventually. Its kernel from the full product is the direct sum. The class of the sequence constantly equal to one is nonzero.  "
},
{
  "id": "sh-c03-subsheaf",
  "level": "2",
  "url": "sh-c03.html#sh-c03-subsheaf",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": " Subsheaf Locally surjective morphism Epimorphism of sheaves  A subsheaf  is a subpresheaf which is a sheaf. A morphism is locally surjective if, for every , there is an open cover and sections with . We use surjective morphism of sheaves in this local sense, and explicitly say sectionwise surjective when that stronger condition is intended.  "
},
{
  "id": "sh-c03-setmonoepi",
  "level": "2",
  "url": "sh-c03.html#sh-c03-setmonoepi",
  "type": "Proposition",
  "number": "3.5",
  "title": "",
  "body": " For sheaves of sets, monomorphisms are precisely sectionwise injections, equivalently stalkwise injections. Epimorphisms are precisely locally surjective morphisms, equivalently stalkwise surjections. A morphism both monic and epic is an isomorphism.  The representable sheaf satisfies . A monomorphism therefore induces injections on sections; the converse follows by cancellation on each open. The stalkwise characterization was proved in .  A locally surjective morphism is epic: if two maps from its target agree after composition, they agree on the local lifts of every target section and hence agree locally on every target section. Separatedness then gives equality.  For the converse, fix and a set . The sheaf with value on opens containing and a singleton on other opens satisfies . Thus if is epic, precomposition with is injective for every . This says that is an epimorphism of sets, hence surjective. The local lifting criterion in applies. Finally, a stalkwise bijective morphism is an isomorphism by that same proposition.  "
},
{
  "id": "sh-c03-abelian",
  "level": "2",
  "url": "sh-c03.html#sh-c03-abelian",
  "type": "Theorem",
  "number": "3.6",
  "title": "",
  "body": " The category is abelian. For , its kernel is the sectionwise kernel, and its cokernel is The image is the associated sheaf of the sectionwise image, viewed as the subsheaf of consisting of sections locally in the image. Stalks are exact and preserve these kernels, cokernels, and images.  Morphism sets are modules, composition is bilinear, and finite sums of sheaves are biproducts. The sectionwise kernel is a sheaf by , and has the kernel universal property. The cokernel formula has the required universal property by sheafification and the sectionwise cokernel property in presheaves.  Taking a stalk preserves a sectionwise kernel by the finite-limit property. For the displayed cokernel it first removes sheafification, then commutes the neighbourhood colimit with a cokernel. Thus it gives the ordinary module cokernel. The canonical map from coimage to image consequently becomes an isomorphism of modules at each stalk. By , it is an isomorphism of sheaves. An additive category with kernels, cokernels, and these coimage-image isomorphisms is abelian.  Exactness of stalks now follows from the kernel and cokernel formulas. For the image formula, its presheaf image has the module image at each stalk because filtered colimits of modules are exact. Its associated sheaf maps injectively to with those image stalks, and hence is the abelian image. The local representability criterion for sheafification gives the description by local membership.  "
},
{
  "id": "sh-c03-stalkexact",
  "level": "2",
  "url": "sh-c03.html#sh-c03-stalkexact",
  "type": "Proposition",
  "number": "3.7",
  "title": "",
  "body": " For a sequence of module sheaves exactness at is equivalent to exactness of the sequence of stalk modules at every point. Equivalently, and every section of locally lifts through . In particular, module-sheaf monomorphisms are sectionwise and stalkwise injections, and epimorphisms are locally surjective and stalkwise surjective.  Exactness implies stalkwise exactness by the preceding theorem. Conversely, the quotient of by the sheaf image of has zero stalks, and hence is zero by . This proves exactness. The description of the image gives the local lifting form. The last assertions follow from the kernel and cokernel tests in an abelian category.  "
},
{
  "id": "sh-c03-exponential",
  "level": "2",
  "url": "sh-c03.html#sh-c03-exponential",
  "type": "Example",
  "number": "3.8",
  "title": "",
  "body": " Let be the circle. Let and be the sheaves of continuous functions from opens of to the indicated topological abelian groups. Reduction modulo integers gives a short exact sequence of abelian sheaves Its map on global sections is not surjective.  The kernel consists of continuous integer-valued functions, which are locally constant. Every continuous circle-valued function has real lifts near each point because is a local homeomorphism. This proves local surjectivity.  The identity of has no global continuous real lift. If were such a lift, the continuous function would be integer-valued on the connected space , and therefore constant. It follows that , contradicting periodicity in .  "
},
{
  "id": "sh-c03-exactsheafification",
  "level": "2",
  "url": "sh-c03.html#sh-c03-exactsheafification",
  "type": "Proposition",
  "number": "3.9",
  "title": "",
  "body": " The functor is exact. The inclusion in the other direction preserves kernels and all limits, but need not preserve cokernels or epimorphisms. A complex of sheaves is exact if and only if all its stalk complexes are exact.  A sectionwise exact sequence of presheaves remains exact on taking filtered neighbourhood colimits. Sheafification does not change those stalks, and applies. The inclusion preserves limits by ; the exponential sequence gives failure of preservation of epimorphisms. Exactness of complexes follows by applying the same stalk criterion at each degree.  "
},
{
  "id": "sh-c03-freeopen",
  "level": "2",
  "url": "sh-c03.html#sh-c03-freeopen",
  "type": "Definition",
  "number": "3.10",
  "title": "",
  "body": " Free sheaf on an open subset Generator, sheaf category  For an open subset , let be the sheafification of the free -module presheaf on . Explicitly, this presheaf takes on and zero on other opens, with the induced restrictions. We call the free sheaf associated with .  "
},
{
  "id": "sh-c03-generators",
  "level": "2",
  "url": "sh-c03.html#sh-c03-generators",
  "type": "Proposition",
  "number": "3.11",
  "title": "",
  "body": " There is a natural isomorphism . The stalk of is on and zero outside . The set of objects generates . More explicitly, every sheaf is a quotient of a coproduct of these objects.  The adjunction for sheafification and the free-module version of Yoneda identify a map from to with the image of its distinguished generator on , namely an arbitrary section of . For a point of , neighbourhoods inside give the constant germ . For a point outside , no neighbourhood of the point is contained in , and all the relevant presheaf values are zero.  For each pair with , use its corresponding map , and take the coproduct of these maps. A germ of is represented by some such , and is the image of the generator germ in that summand. The resulting map is stalkwise surjective and therefore an epimorphism. Finally, the maps from all detect whether two sheaf morphisms differ, since the maps on sections detect a difference.  "
},
{
  "id": "sh-c03-grothendiecktheorem",
  "level": "2",
  "url": "sh-c03.html#sh-c03-grothendiecktheorem",
  "type": "Theorem",
  "number": "3.12",
  "title": "",
  "body": " For every space and commutative coefficient ring , the category is a Grothendieck abelian category. In particular, it has all small colimits, filtered colimits are exact, and it has a generator. It has enough injective objects.  Abelianity and colimits have already been proved. A filtered colimit of an exact diagram of module sheaves is exact at every stalk, because stalks commute with colimits and filtered colimits of modules are exact. Thus it is an exact sheaf sequence. The coproduct is a generator by .  The enough-injectives assertion is the general existence theorem for a Grothendieck abelian category, applied to these verified hypotheses. It is stated with its sources in the Grothendieck categories chapter of the homological algebra notes; see also the injective-existence results in . An explicit sheaf construction of an injective embedding is given in .  "
},
{
  "id": "sh-c03-filteredcounterexample",
  "level": "2",
  "url": "sh-c03.html#sh-c03-filteredcounterexample",
  "type": "Example",
  "number": "3.13",
  "title": "",
  "body": " Let be discrete, let , and let with the standard inclusions. The map is not surjective.  The sheaf colimit has stalk at each point. Assigning its -th standard basis vector to the point gives a global section. It is not represented by one finite rank at all points. This is the filtered version of .  "
},
{
  "id": "sh-c03-qccolimits",
  "level": "2",
  "url": "sh-c03.html#sh-c03-qccolimits",
  "type": "Proposition",
  "number": "3.14",
  "title": "",
  "body": " Let be a directed system of sheaves of sets or modules, and put . For an open , consider the comparison .  If is quasi-compact, is injective.  If all transition maps are monomorphisms, is injective for every , and is bijective when is quasi-compact.  If is quasi-compact and has a basis of quasi-compact opens stable under finite intersections, then is bijective without the monomorphism assumption.   Suppose two sections from a common stage have the same image in . Equality of their germs at each point is witnessed at some later stage on a neighbourhood of that point. If is quasi-compact, take finitely many such neighbourhoods and one stage dominating their stages. The sections agree there on a cover, hence agree as sections. This proves the first assertion.  If transition maps are monic, each map to the sheaf colimit is monic, as can be checked on stalks. This proves injectivity on every open. A section of has local representatives from diagram stages. For quasi-compact , choose finitely many and move them to one common stage. Since that stage maps monomorphically into , the representatives already agree on overlaps; glue them there. This proves the second assertion.  For the third, choose the finite local-representative cover from the stated basis and move to a common stage. On an overlap the two representative sections have the same image in . The overlap is quasi-compact, so the first assertion supplies a stage where they agree there. Finitely many overlaps require only one common later stage. Glue at that stage. Injectivity has already been proved.  "
},
{
  "id": "sh-c04",
  "level": "1",
  "url": "sh-c04.html",
  "type": "Chapter",
  "number": "4",
  "title": "Inverse images, direct images, and gluing",
  "body": " Inverse images, direct images, and gluing   A continuous map relates two kinds of local data. A sheaf on its domain can be evaluated on inverse images of open sets. A sheaf on its codomain can be transported to the domain by taking germs near the images of points. These constructions give an adjunction, but they have different exactness properties. We construct both functors, retain the maps belonging to the adjunction, and then examine inclusions and open coverings.  Throughout this chapter, is continuous. Statements about sets apply to ; statements about exact sequences apply to , for a fixed commutative ring . The constructions for Abel groups are the case . No separation condition is imposed. The basic constructions can be compared with and Stacks, Section 6.21 .    Direct image and the inverse image presheaf   Direct image Direct image Pushforward  For a presheaf on , its direct image , or pushforward , is the presheaf with the restriction maps induced by those of . A morphism is sent to the corresponding maps on these sections. If is a sheaf, so is .   The last assertion follows because a covering of pulls back to a covering of , with intersections preserved. Thus no sheafification is needed for direct image. With these definitions, and as functors, not merely up to isomorphism.  The expression does not define inverse image: need not be open, and a sheaf is initially defined only on open sets. Taking all open neighbourhoods of supplies the missing local data.   Inverse image Inverse image Pullback of a sheaf  For a presheaf on , define The neighbourhoods are ordered by reverse inclusion. Restriction from to uses the inclusion of the corresponding indexing systems. For a sheaf , its inverse image is The symbol is used here only for this presheaf construction; is sheafification from .   Each indexing system is nonempty, since it contains , and filtered, since it contains the intersection of two neighbourhoods. If , it also contains . The value of the inverse image presheaf on the empty set is therefore the terminal set, or the zero module, when is a sheaf.  The presheaf need not already be a sheaf. For the map from a space to a point it is the constant presheaf on nonempty opens; a locally constant function with different values on two disjoint opens may not be represented by a single element. Sheafification permits such local representatives to be glued. Some sources write , , or a Kan extension symbol for the presheaf inverse image. The notation in this note always includes sheafification. A ringed inverse image additionally changes scalars; it is a different construction.    The adjunction and stalks   The constructions above give functors and a natural bijection The same assertion holds for sheaves of -modules, with linear morphisms.   A morphism gives, whenever , a composite These maps are compatible with shrinking and with restricting . They give a morphism of presheaves , which factors uniquely through .  Conversely, a morphism gives, for each open , the map The first arrow is defined because . The composites commute with restrictions. Starting from recovers ; starting from recovers its maps on the local representatives defining , and hence recovers . All maps used are linear in the module case.    The unit and counit are denoted The unit sends a section to its inverse image. The counit restricts a section over to a smaller open . These descriptions also show the triangle identities: applying either construction and then the other restricts each local representative to itself.   For every there is a canonical isomorphism For continuous maps , there is a canonical isomorphism . The isomorphisms for triple composites agree.   Sheafification preserves stalks. A representative for the left side is a section , together with a neighbourhood of satisfying . It determines the germ . Every neighbourhood of occurs, by taking . Equality of two germs on the right can be witnessed on an open neighbourhood of ; shrinking the two source neighbourhoods by witnesses equality on the left.  For composition, both displayed inverse image functors are left adjoint to . The unique isomorphism respecting these adjunctions gives the stated comparison. Its coherence follows from the same uniqueness, or from sending each germ successively to its germ at the image point.    By , a morphism can be checked after inverse image by the points. This is a statement about morphisms of sheaves, rather than a formula expressing every set of sections as an arbitrary product of stalks. Local compatibility of germs remains necessary.   On sheaves of modules, is exact and preserves all colimits and all finite limits. The functor preserves all limits and is left exact. If is surjective, reflects isomorphisms and exact sequences.  Exactness of inverse image follows by taking stalks and using . Preservation of colimits follows from its adjunction; preservation of finite limits also follows from the stalk calculation. A right adjoint preserves limits, which gives the assertions about . If is surjective, every stalk on is tested by at least one point of , proving the last assertion.   The assertion about finite limits applies to sheaves of sets as well. On sets it is preferable to state left exactness directly, since an exact sequence of modules is not available. Exactness of inverse image does not imply exactness of a ringed inverse image: extension of scalars is only right exact unless the relevant flatness condition holds. For fixed coefficients, the scalar ring map on each stalk is the identity.  There is also a geometric description using the étalé space of . Its topological fibre product with is a local homeomorphism The sheaf of its local sections is . A section near chooses a germ of near and transports its local representative to a neighbourhood of . The local charts of give the same charts on the fibre product as the germs in our construction. This gives an isomorphism of étalé spaces and hence of sheaves.  This description also applies to module sheaves: the module operations on fibres pull back along . The map goes in the direction of , although the functor on sheaf categories goes from to . The fibre at is the fibre over , which explains the stalk formula without treating arbitrary families of germs as sections.    Point maps and direct image germs   Skyscraper sheaf Skyscraper sheaf  Let be the inclusion of a point, and let be a -module. The skyscraper sheaf  has sections on opens containing and zero on opens not containing . Its restrictions are identities or zero maps as required.    There are natural identifications The functor is exact. For an arbitrary point ,  The first two assertions follow from the inverse image formula and the adjunction. Exactness can be checked on sections, since each section functor in this formula is either the identity on modules or the zero functor. If every neighbourhood of contains , the stalk system is constantly . Otherwise the opens missing are cofinal at and give zero.   Thus a skyscraper need not have a single nonzero stalk when points are not closed. This matters on spectral and finite topological spaces. On a space, including a Hausdorff space, and the familiar description is recovered. The specialization direction in the formula is , not . Compare Stacks, skyscraper sheaves and stalks .  For a general direct image, the correct stalk formula is There are maps from this module to for , but the source records sections near the entire inverse image of a neighbourhood of . It need not be a product of fibre stalks.   Let be the unique map. Then . If and , global sections are , whereas the product of all stalks is . For a discrete space, global sections are instead precisely the product of the stalks.   There are useful fibre formulas under additional hypotheses, including proper base change after derivation. Such formulas require a theorem; the definition of direct image alone gives the neighbourhood colimit above.   Inverse image need not preserve infinite products. Let and let . A section of is a family of locally constant scalar functions. Let its -th component be the characteristic function of . This singleton is open and closed in , so the function is locally constant. Each component has zero germ at , but the entire section has a nonzero germ there: every neighbourhood contains some , where one component is nonzero. Hence has a nonzero kernel. Since the stalk functor is inverse image by the point map, finite-limit preservation cannot be strengthened to arbitrary-limit preservation.     The base change comparison  Consider a commutative Cartesian square of spaces The two routes from sheaves on to sheaves on have a natural comparison. Its construction uses only the adjunction and does not by itself prove an isomorphism.   There is a natural morphism If is the inclusion of an open subset, this is an isomorphism. These comparisons agree under successive restriction to open subsets.  Using commutativity of the square and the inverse image composition isomorphisms, form Its adjoint is the required comparison. If is open, then . On each open , both sides have section module , and the comparison is the identity. The same description proves compatibility with successive restrictions.    Let and let . Their fibre product is empty. For , the comparison is The two summands are the values on the positive and negative parts of a punctured interval. It is not an isomorphism when , even though the square is Cartesian.   The example records sections on punctured neighbourhoods that disappear on the empty fibre. A Cartesian square specifies the comparison, not its invertibility. Properness, support conditions, or local hypotheses can supply base change theorems. These will be introduced with their geometric proofs and derived statements in the note on support and duality. Open restriction is the unconditional case needed repeatedly in this note.    Subspaces and open extension by zero  For an inclusion , write . If is open, this is ordinary restriction on opens: for . For a general subspace, sections are formed from local neighbourhoods in and sheafification; an open subset of is not necessarily an open subset of .   For every subspace inclusion , the counit is an isomorphism. Consequently is fully faithful. If is open, then  Neighbourhoods of a point in the subspace are precisely the sets with open in . The counit induces an isomorphism on each stalk of . Full faithfulness follows from the adjunction.    Extension by zero for an open inclusion Extension by zero Open inclusion  Let be open and . Define a presheaf on by Its sheafification is the extension by zero , denoted .   In the category of sets the corresponding construction uses the empty set, the initial object, in place of zero. It is usually called extension by the empty set. Forgetting the module structure after extending by zero does not give extension by the empty set: the zero module has one underlying element. The choice of initial object explains the notation in both settings. On module sheaves, extension by zero is exact. On set sheaves, extension by the empty set does not preserve the terminal sheaf when , and hence is not left exact in the usual finite-limit sense.   For an open inclusion there are adjunctions Both and are fully faithful. Extension by zero is exact, and Its essential image consists of the sheaves whose stalks vanish outside .  A map is determined by its maps on the opens contained in , and these are precisely a map . Sheafification proves the first adjunction. The stalk formula follows directly from . It implies exactness and . If outside , the adjunction map is a stalkwise isomorphism; this proves the essential-image assertion. Full faithfulness of was proved for subspaces above.   There is a natural injection restricting to the identity on . A section of its image over is a section with the following property: for each , there is an open neighbourhood of on which . The condition is local on , so these sections form a sheaf. Its stalks are those of , and the injection identifies the two descriptions.   Let and assume . On an interval crossing zero, has section module . The only section of on that interval is zero: a constant section on its positive part that vanishes near zero is zero. In particular,   For the construction, stalk descriptions, and coefficient distinction, see Stacks, Section 6.31 . The neighbourhood vanishing condition above is an elementary description for an open inclusion; general direct image with proper support has additional content.    Closed inclusions and an exact sequence   Let be closed. The functor is exact and fully faithful. Its stalks are Its essential image consists of the sheaves whose stalks vanish on .  At a point of , the subspace neighbourhoods give the first case. Outside , the neighbourhoods missing are cofinal and give zero. This proves exactness by stalks. If vanishes off , the unit is a stalkwise isomorphism. Full faithfulness follows from .   For set sheaves, the stalk outside is terminal rather than empty. Closed direct image and open extension by the initial object therefore have distinct underlying-set behaviour. The module category, in which zero is both initial and terminal, makes their stalk descriptions look more similar. See Stacks, Section 6.32 .   Let be closed, , and let be the inclusions. For every , the adjunction maps give a natural short exact sequence  At a point of , the nonzero part is . At a point of , it is again , now in the last two positions. Exactness follows from .   This sequence need not split. Restrictions to the open and closed pieces do not by themselves specify a sheaf. For example, on with , the constant sheaf and have isomorphic restrictions to both pieces. For the latter sheaf every germ at zero has a representative whose restriction to a sufficiently small punctured interval is zero. For the constant sheaf a nonzero germ has no such representative. Thus they are not isomorphic if .  The derived open–closed triangles and the second localization sequence involve the theory of supports. The exact sequence here is enough to distinguish the two elementary extensions and will be used when constructing resolutions.    Gluing sheaves and morphisms   Gluing datum on an open covering Gluing datum Cocycle for gluing sheaves  Let be an open covering. A gluing datum consists of sheaves on and isomorphisms satisfying and on every triple intersection. A morphism to a datum consists of maps satisfying on overlaps.    Restriction from sheaves on to gluing data on an open covering is an equivalence of categories. A sheaf realizing a given datum, together with the specified identifications on the covering, is unique up to a unique isomorphism respecting those identifications. This holds for sets, Abel groups, and -modules.   For the given datum define, for every open , Restrict tuples componentwise. A matching family of tuples on a covering of glues in every . The resulting components satisfy the overlap conditions because the conditions hold locally. Thus is a sheaf.  When , projection to is a bijection from to . Its inverse sends to the tuple with components . The cocycle condition gives precisely the required compatibility. These maps identify with .  A morphism of data acts on the tuples componentwise and hence gives a morphism of glued sheaves. Conversely, maps of sheaves on the covering that agree on overlaps glue uniquely: apply the sheaf axiom in the target to the images of each source section. This proves full faithfulness and the specified uniqueness. All operations are componentwise algebraic operations for groups or modules.    Our transition convention makes a section a tuple satisfying . The inverse convention is equally common. Reversing every transition map also reverses the written cocycle formula; mixing these two conventions produces an incorrect order of composition. Compare and Stacks, Section 6.33 .  Replacing the trivialization on by an automorphism changes the transitions to . The glued sheaf is isomorphic to the original sheaf, with local maps . This is the change-of-trivialization relation that appears when local systems are described by cocycles.  Restriction to an open covering detects isomorphisms and exactness. For example, an exact sequence on each gives an exact sequence after gluing, since each stalk belongs to some member of the covering. This is local verification, not a requirement to choose lifts of all global sections.  Without chosen local identifications, uniqueness is only uniqueness of the isomorphism class. A sheaf may have many automorphisms. The phrase “unique up to unique isomorphism” in the theorem includes the identifications with the prescribed datum; it does not remove these automorphisms from the category of sheaves.   "
},
{
  "id": "sh-c04-directimage",
  "level": "2",
  "url": "sh-c04.html#sh-c04-directimage",
  "type": "Definition",
  "number": "4.1",
  "title": "Direct image.",
  "body": " Direct image Direct image Pushforward  For a presheaf on , its direct image , or pushforward , is the presheaf with the restriction maps induced by those of . A morphism is sent to the corresponding maps on these sections. If is a sheaf, so is .  "
},
{
  "id": "sh-c04-inverseimage",
  "level": "2",
  "url": "sh-c04.html#sh-c04-inverseimage",
  "type": "Definition",
  "number": "4.2",
  "title": "Inverse image.",
  "body": " Inverse image Inverse image Pullback of a sheaf  For a presheaf on , define The neighbourhoods are ordered by reverse inclusion. Restriction from to uses the inclusion of the corresponding indexing systems. For a sheaf , its inverse image is The symbol is used here only for this presheaf construction; is sheafification from .  "
},
{
  "id": "sh-c04-adjunction",
  "level": "2",
  "url": "sh-c04.html#sh-c04-adjunction",
  "type": "Theorem",
  "number": "4.3",
  "title": "",
  "body": " The constructions above give functors and a natural bijection The same assertion holds for sheaves of -modules, with linear morphisms.   A morphism gives, whenever , a composite These maps are compatible with shrinking and with restricting . They give a morphism of presheaves , which factors uniquely through .  Conversely, a morphism gives, for each open , the map The first arrow is defined because . The composites commute with restrictions. Starting from recovers ; starting from recovers its maps on the local representatives defining , and hence recovers . All maps used are linear in the module case.   "
},
{
  "id": "sh-c04-inverse-stalk",
  "level": "2",
  "url": "sh-c04.html#sh-c04-inverse-stalk",
  "type": "Proposition",
  "number": "4.4",
  "title": "",
  "body": " For every there is a canonical isomorphism For continuous maps , there is a canonical isomorphism . The isomorphisms for triple composites agree.   Sheafification preserves stalks. A representative for the left side is a section , together with a neighbourhood of satisfying . It determines the germ . Every neighbourhood of occurs, by taking . Equality of two germs on the right can be witnessed on an open neighbourhood of ; shrinking the two source neighbourhoods by witnesses equality on the left.  For composition, both displayed inverse image functors are left adjoint to . The unique isomorphism respecting these adjunctions gives the stated comparison. Its coherence follows from the same uniqueness, or from sending each germ successively to its germ at the image point.   "
},
{
  "id": "sh-c04-exactness",
  "level": "2",
  "url": "sh-c04.html#sh-c04-exactness",
  "type": "Proposition",
  "number": "4.5",
  "title": "",
  "body": " On sheaves of modules, is exact and preserves all colimits and all finite limits. The functor preserves all limits and is left exact. If is surjective, reflects isomorphisms and exact sequences.  Exactness of inverse image follows by taking stalks and using . Preservation of colimits follows from its adjunction; preservation of finite limits also follows from the stalk calculation. A right adjoint preserves limits, which gives the assertions about . If is surjective, every stalk on is tested by at least one point of , proving the last assertion.  "
},
{
  "id": "sh-c04-skyscraper",
  "level": "2",
  "url": "sh-c04.html#sh-c04-skyscraper",
  "type": "Definition",
  "number": "4.6",
  "title": "Skyscraper sheaf.",
  "body": " Skyscraper sheaf Skyscraper sheaf  Let be the inclusion of a point, and let be a -module. The skyscraper sheaf  has sections on opens containing and zero on opens not containing . Its restrictions are identities or zero maps as required.  "
},
{
  "id": "sh-c04-point-adjunction",
  "level": "2",
  "url": "sh-c04.html#sh-c04-point-adjunction",
  "type": "Proposition",
  "number": "4.7",
  "title": "",
  "body": " There are natural identifications The functor is exact. For an arbitrary point ,  The first two assertions follow from the inverse image formula and the adjunction. Exactness can be checked on sections, since each section functor in this formula is either the identity on modules or the zero functor. If every neighbourhood of contains , the stalk system is constantly . Otherwise the opens missing are cofinal at and give zero.  "
},
{
  "id": "sh-c04-direct-point-example",
  "level": "2",
  "url": "sh-c04.html#sh-c04-direct-point-example",
  "type": "Example",
  "number": "4.8",
  "title": "",
  "body": " Let be the unique map. Then . If and , global sections are , whereas the product of all stalks is . For a discrete space, global sections are instead precisely the product of the stalks.  "
},
{
  "id": "sh-c04-product-stalk",
  "level": "2",
  "url": "sh-c04.html#sh-c04-product-stalk",
  "type": "Example",
  "number": "4.9",
  "title": "",
  "body": " Inverse image need not preserve infinite products. Let and let . A section of is a family of locally constant scalar functions. Let its -th component be the characteristic function of . This singleton is open and closed in , so the function is locally constant. Each component has zero germ at , but the entire section has a nonzero germ there: every neighbourhood contains some , where one component is nonzero. Hence has a nonzero kernel. Since the stalk functor is inverse image by the point map, finite-limit preservation cannot be strengthened to arbitrary-limit preservation.  "
},
{
  "id": "sh-c04-basechange-map",
  "level": "2",
  "url": "sh-c04.html#sh-c04-basechange-map",
  "type": "Proposition",
  "number": "4.10",
  "title": "",
  "body": " There is a natural morphism If is the inclusion of an open subset, this is an isomorphism. These comparisons agree under successive restriction to open subsets.  Using commutativity of the square and the inverse image composition isomorphisms, form Its adjoint is the required comparison. If is open, then . On each open , both sides have section module , and the comparison is the identity. The same description proves compatibility with successive restrictions.  "
},
{
  "id": "sh-c04-basechange-failure",
  "level": "2",
  "url": "sh-c04.html#sh-c04-basechange-failure",
  "type": "Example",
  "number": "4.11",
  "title": "",
  "body": " Let and let . Their fibre product is empty. For , the comparison is The two summands are the values on the positive and negative parts of a punctured interval. It is not an isomorphism when , even though the square is Cartesian.  "
},
{
  "id": "sh-c04-embedding",
  "level": "2",
  "url": "sh-c04.html#sh-c04-embedding",
  "type": "Proposition",
  "number": "4.12",
  "title": "",
  "body": " For every subspace inclusion , the counit is an isomorphism. Consequently is fully faithful. If is open, then  Neighbourhoods of a point in the subspace are precisely the sets with open in . The counit induces an isomorphism on each stalk of . Full faithfulness follows from the adjunction.  "
},
{
  "id": "sh-c04-openextension",
  "level": "2",
  "url": "sh-c04.html#sh-c04-openextension",
  "type": "Definition",
  "number": "4.13",
  "title": "Extension by zero for an open inclusion.",
  "body": " Extension by zero for an open inclusion Extension by zero Open inclusion  Let be open and . Define a presheaf on by Its sheafification is the extension by zero , denoted .  "
},
{
  "id": "sh-c04-open-adjunctions",
  "level": "2",
  "url": "sh-c04.html#sh-c04-open-adjunctions",
  "type": "Proposition",
  "number": "4.14",
  "title": "",
  "body": " For an open inclusion there are adjunctions Both and are fully faithful. Extension by zero is exact, and Its essential image consists of the sheaves whose stalks vanish outside .  A map is determined by its maps on the opens contained in , and these are precisely a map . Sheafification proves the first adjunction. The stalk formula follows directly from . It implies exactness and . If outside , the adjunction map is a stalkwise isomorphism; this proves the essential-image assertion. Full faithfulness of was proved for subspaces above.  "
},
{
  "id": "sh-c04-halfline",
  "level": "2",
  "url": "sh-c04.html#sh-c04-halfline",
  "type": "Example",
  "number": "4.15",
  "title": "",
  "body": " Let and assume . On an interval crossing zero, has section module . The only section of on that interval is zero: a constant section on its positive part that vanishes near zero is zero. In particular,  "
},
{
  "id": "sh-c04-closedimage",
  "level": "2",
  "url": "sh-c04.html#sh-c04-closedimage",
  "type": "Proposition",
  "number": "4.16",
  "title": "",
  "body": " Let be closed. The functor is exact and fully faithful. Its stalks are Its essential image consists of the sheaves whose stalks vanish on .  At a point of , the subspace neighbourhoods give the first case. Outside , the neighbourhoods missing are cofinal and give zero. This proves exactness by stalks. If vanishes off , the unit is a stalkwise isomorphism. Full faithfulness follows from .  "
},
{
  "id": "sh-c04-openclosed",
  "level": "2",
  "url": "sh-c04.html#sh-c04-openclosed",
  "type": "Proposition",
  "number": "4.17",
  "title": "",
  "body": " Let be closed, , and let be the inclusions. For every , the adjunction maps give a natural short exact sequence  At a point of , the nonzero part is . At a point of , it is again , now in the last two positions. Exactness follows from .  "
},
{
  "id": "sh-c04-gluingdatum",
  "level": "2",
  "url": "sh-c04.html#sh-c04-gluingdatum",
  "type": "Definition",
  "number": "4.18",
  "title": "Gluing datum on an open covering.",
  "body": " Gluing datum on an open covering Gluing datum Cocycle for gluing sheaves  Let be an open covering. A gluing datum consists of sheaves on and isomorphisms satisfying and on every triple intersection. A morphism to a datum consists of maps satisfying on overlaps.  "
},
{
  "id": "sh-c04-gluing",
  "level": "2",
  "url": "sh-c04.html#sh-c04-gluing",
  "type": "Theorem",
  "number": "4.19",
  "title": "",
  "body": " Restriction from sheaves on to gluing data on an open covering is an equivalence of categories. A sheaf realizing a given datum, together with the specified identifications on the covering, is unique up to a unique isomorphism respecting those identifications. This holds for sets, Abel groups, and -modules.   For the given datum define, for every open , Restrict tuples componentwise. A matching family of tuples on a covering of glues in every . The resulting components satisfy the overlap conditions because the conditions hold locally. Thus is a sheaf.  When , projection to is a bijection from to . Its inverse sends to the tuple with components . The cocycle condition gives precisely the required compatibility. These maps identify with .  A morphism of data acts on the tuples componentwise and hence gives a morphism of glued sheaves. Conversely, maps of sheaves on the covering that agree on overlaps glue uniquely: apply the sheaf axiom in the target to the images of each source section. This proves full faithfulness and the specified uniqueness. All operations are componentwise algebraic operations for groups or modules.   "
},
{
  "id": "sh-c05",
  "level": "1",
  "url": "sh-c05.html",
  "type": "Chapter",
  "number": "5",
  "title": "Constant sheaves and local systems",
  "body": " Constant sheaves and local systems   A constant sheaf has a single coefficient object, but its sections need only be locally constant. A locally constant sheaf can have a single coefficient object on each small open set and still have nontrivial transport around a loop. We distinguish these assertions before describing monodromy. The distinction between arbitrary modules and finite-dimensional vector spaces is also relevant: without local connectedness, infinitely many coefficients need not be controlled on one neighbourhood.  The definitions apply to arbitrary topological spaces. The classification by the fundamental groupoid will assume local path connectedness and semilocal simple connectedness. This chapter uses only the gluing and inverse image constructions of . Basic definitions and transition functions may be compared with ; that source uses the term local system over a field with an additional finite-rank condition.    Constant coefficients and locally constant functions   Constant sheaf Constant sheaf Constant presheaf Locally constant function  For a set , the constant sheaf  is the sheaf associated to the constant presheaf with value . Equivalently, where has the discrete topology. For a -module , the constant sheaf has this description with pointwise module operations. A sheaf is constant if it is isomorphic to or , as appropriate.   The function description follows from sheafification by germs: a germ of the constant presheaf at any point is an element of , and a section of the associated sheaf is locally represented by a single such element. It gives the correct value on the empty set: one empty function, even when . A constant presheaf with value also on the empty open set need not satisfy the empty-cover sheaf axiom; its sheafification still has this description. Normalizing its empty-open value before sheafification gives the same sheaf.   Let . Constant sheaves satisfy The functor is exact, preserves all colimits and finite limits, and has stalk at each point. For every continuous , there is a canonical isomorphism . If is nonempty and connected, is fully faithful.  The first assertion follows by applying the inverse image construction to a point. The adjunction and exactness follow from and . Compatibility with follows from . On a nonempty connected space, every locally constant function to a discrete set is constant. Hence , and the adjunction identifies morphisms between constant sheaves with module homomorphisms.   For a disconnected space, sections of a constant sheaf can have different values on different open-and-closed pieces. If connected components are open, then Without that condition, a function constant on each component need not be locally constant.   Let . Its connected components are individual points. A section of is a sequence of values such that for all sufficiently large . An arbitrary function on the components does not have this property. In particular, the constant sheaf is not the sheaf of all functions to .   The name “constant” specifies the isomorphism type of a sheaf. It does not specify a chosen trivialization. Once has been chosen, changing it acts by an automorphism of the constant sheaf; on a connected nonempty space these are precisely the automorphisms of .    Locally constant sheaves and transition maps   Locally constant sheaf and local system Locally constant sheaf Local system Finite-rank local system  A sheaf on is locally constant if every point has an open neighbourhood on which is constant. We use local system of -modules for any locally constant object of , and denote their category by . A finite-rank local system over a field  has local models with finite. Over a general ring, finite locally free means that the local models are with finite.   For a nonzero commutative ring, the integer in a free local model is determined by its stalk, as can be seen after passing to a residue field. It is locally constant on . On a disconnected space it may vary between components and need not have a global finite bound. The zero ring is allowed throughout the note, but rank is not an invariant of its zero module. Some authors reserve “local system” for finite-dimensional vector spaces, or for finite locally free modules, and use “locally constant sheaf” for the unrestricted version. We state these finiteness conditions explicitly. A flat vector bundle with its parallel transport can give a local system; its sheaf of all smooth or continuous sections is a different sheaf.  Choose trivializations . Their transition isomorphisms satisfy the cocycle condition of . Conversely, any such isomorphisms glue the constant sheaves into a local system by . The overlaps need not be connected.   Let be modules.  A morphism is the same as a family of linear maps such that, for every , the function is locally constant.  If is finitely generated, this family is locally constant as a function to the set with its discrete topology.  If is connected and nonempty, the family is constant, without a finite-generation hypothesis.   The constant-sheaf adjunction identifies a morphism with a map , which is precisely the first description. Conversely, evaluating these functions on any locally constant section of gives the required section of . For the second assertion choose finitely many generators of and intersect neighbourhoods on which their images have constant values. The map is determined by these images. For the third, each function is constant by connectedness, for every .   Thus transition maps between finite locally free local systems are locally constant matrices. For unrestricted modules, the correct general condition is constancy after evaluation on each element, not necessarily constancy of the whole homomorphism on a single neighbourhood. These coincide on locally connected spaces after passing to connected open neighbourhoods. This is one reason that the topology on an automorphism group requires care for infinite coefficient modules. A family can be continuous after evaluation on each element without being locally constant in the discrete topology on the entire automorphism group.   The following statements hold.  If is locally connected, kernels and cokernels of morphisms in , computed in , are locally constant. Thus is Abelian and its inclusion is exact.  On an arbitrary , the same conclusion for the kernel and cokernel of holds if has finitely generated local models.  For any , finite-rank local systems over a field are closed under kernels, cokernels, and extensions in the category of all module sheaves.    Trivialize source and target near a point. On a connected open neighbourhood, the morphism is induced by one module homomorphism, by . Its kernel and cokernel are the constant sheaves of the corresponding modules because the constant-sheaf functor is exact. A connected open basis gives the first assertion. Finitely generated source modules give a neighbourhood with the same property without assuming local connectedness, proving the second.  Over a field, kernels and cokernels of maps of finite-dimensional vector spaces are finite-dimensional. For an extension , choose local finite-dimensional trivializations of and . The finitely many basis sections of lift to after a common shrinking, since a sheaf epimorphism is locally surjective. These lifts split the sequence on that neighbourhood. Hence is locally a direct sum of the two constant sheaves.    Over a general ring, kernels of maps of finite free modules need not be finite free or even finitely generated. For example, the kernel of multiplication by on is a module with two elements and is not free over . Thus the field hypothesis in the finite-rank assertion has a role independent of the topology. The unrestricted locally constant kernel may still exist, as specified in the proposition. Local freeness and local constancy are separate conditions.   For infinite-dimensional local systems, the hypothesis on the space cannot be omitted from the first assertion. Take the convergent sequence of and let . Define maps Every has finite support, so eventually. These maps define a sheaf morphism . Its kernel has stalk zero at and a nonzero stalk at every . No neighbourhood of zero can trivialize that kernel, since a constant sheaf with a zero stalk has zero local model. Thus this kernel is not locally constant.   The example also shows why a fibrewise family of homomorphisms requires a local compatibility condition. Here the compatibility holds separately for each vector, but there is no single neighbourhood on which all the maps equal .    Covering spaces and transport   Covering space Covering space Evenly covered neighbourhood  A covering space over  is a continuous map such that every point has an open neighbourhood with an isomorphism over  for a discrete set . We allow ; thus a covering is not required to be surjective. Morphisms are continuous maps over .    The étalé-space equivalence of restricts to an equivalence between locally constant sheaves of sets and covering spaces over . Constant sheaves correspond to trivial coverings .  The étalé space of is , since its basic sections are locally constant functions to . Thus local trivializations of the sheaf give evenly covered neighbourhoods. Conversely, the sheaf of sections of a covering restricts on an evenly covered open to the sheaf of locally constant -valued functions.   A local homeomorphism is more general than a covering. For example, the inclusion of in is a local homeomorphism but is not a covering near zero. Its sheaf of local sections has an empty stalk at zero and nonempty stalks arbitrarily close to zero. For module local systems one uses locally trivial bundles of discrete modules, with linear local trivializations, rather than discarding the module structure of the fibres. Some definitions require a covering to be surjective. Allowing empty fibres includes the empty sheaf and gives the equivalence with all locally constant set sheaves without exceptions on components where the sheaf is empty.  Let be a path and a local system. A finite subdivision of the interval can be chosen so that each subpath lies in a trivializing open. Within a constant sheaf the fibre at one endpoint is identified with the fibre at the other by evaluation of constant sections. Composing these identifications gives Refining the subdivision does not change the map. On a subinterval lying in two trivializing opens, the transition isomorphism is constant along that subinterval, so changing the trivialization also gives the same map.   Transport is an isomorphism and satisfies Here means first traverse , then . Transport depends only on the homotopy class relative to endpoints. A morphism of local systems commutes with every transport map.  The first three assertions follow by reversing or adjoining subdivisions. For homotopy invariance, pull back trivializing opens to a homotopy square. By compactness, subdivide the square into rectangles whose images lie in trivializing opens. Transport around each rectangle is the identity. Cancelling the interior edges identifies transport along the two opposite boundary paths; the other boundary paths are constant when endpoints are fixed. Compatibility with a sheaf morphism follows on each subinterval from the description of maps between constant sheaves on a connected interval.   For set sheaves this is path lifting in the associated covering space; for module sheaves it also retains linearity. The covering-space lifting statements are proved in . No local condition on is needed to transport an already given local system. The extra conditions in the classification theorem concern constructing a local system from arbitrary transport data.    The monodromy classification   Fundamental groupoid and monodromy Fundamental groupoid Monodromy Semilocally simply connected space  The fundamental groupoid  has points as objects and endpoint-preserving homotopy classes of paths as morphisms. Composition follows the convention of . Transport defines a functor We call it the monodromy functor of . A space is semilocally simply connected if every point has an open neighbourhood whose loops based at that point become null-homotopic in .   Semilocal simple connectedness does not require the neighbourhood itself to be simply connected. Under local path connectedness, its neighbourhood can be chosen path connected, and all of its loops, with any chosen basepoint, become null-homotopic in by change of basepoint. “Locally simply connected” is a stronger neighbourhood condition. The weaker condition in our theorem is enough because monodromy only depends on the images of the loops in the ambient space.   If is locally path connected and semilocally simply connected, monodromy is an equivalence The analogous equivalence holds for locally constant sheaves of sets. If is also path connected and , evaluation at gives an equivalence with modules equipped with a left action of by linear automorphisms.   Let be a functor. Form the set over . Choose a path-connected open neighbourhood such that its loops become null-homotopic in , and choose . Transport along paths in gives bijections for every , independent of the chosen path: two paths differ by a loop that is trivial in . They define a bijection .  These bijections define compatible covering charts. On an overlap, choose a path-connected neighbourhood of a point contained in the overlap. Following paths in this smaller neighbourhood shows that the transition map between the two fixed modules is constant there. Hence the transition is continuous for discrete fibres. The resulting topology on makes it a covering, with locally constant linear transition maps. Its sheaf of sections is a local system with monodromy .  A natural transformation between two such functors gives fibre maps that commute with transport. In each path-connected trivializing neighbourhood, they are one fixed homomorphism, and hence define a map of local systems. Conversely, every sheaf morphism gives those fibre maps. These constructions are inverse, proving full faithfulness as well as essential surjectivity.  When is path connected, its fundamental groupoid is connected and its automorphism group at is . Restriction of functors to this one-object groupoid is an equivalence: paths from to the other points reconstruct all other fibres, and changing these paths gives a naturally isomorphic functor.    The topology in the proof explains both hypotheses. Local path connectedness gives neighbourhoods on which transport determines sections. Semilocal simple connectedness gives neighbourhoods on which every loop acts trivially, uniformly for the entire module. Without it, an arbitrary representation of the fundamental group need not have this local triviality property. A given local system still has monodromy, by . The classical covering classification under the stated hypotheses is also .  Our convention makes transport a covariant functor and a left action. Conventions that concatenate loops in the opposite written order can give a right action or insert inverses. This changes the displayed representation, not the local system, once the convention is translated consistently.   Under the hypotheses of , global sections are compatible families in the fibres: If is path connected and the local system corresponds to , then In this path-connected case, a local system is constant if and only if its monodromy action is trivial.  A section has fibre values compatible with transport. Conversely, such a family is constant in each path-connected trivializing open, and therefore defines a section. In the path-connected case, the value at determines the entire family and is allowed precisely when it is fixed by all loops. The final assertion follows from the classification and the trivial monodromy of .   A path-connected, locally path-connected, simply connected space satisfies the hypotheses of the theorem and has only constant local systems. Given a basepoint, transport gives independently of the path, so it explicitly trivializes . The equivalence with the category of modules is evaluation at that basepoint. An identification of its fibre with a previously specified module remains a choice.  For a space with several path components, local path connectedness makes those components open. Choosing a point in each gives an equivalence with the product of the representation categories of their fundamental groups. Coefficients and ranks may differ between components. The groupoid formulation records this without making those choices.  Basepoint choices are necessary for the representation description, not for the groupoid formulation. A path joining two basepoints conjugates the fundamental groups and transports the fibre; two choices can give conjugate identifications. No fibre is intrinsically preferred.    The circle, finite coverings, and pullback   A local system on is described by a module and an automorphism , the transport around a positively oriented generator. It can be constructed by gluing two constant sheaves on arcs; use the identity on one component of their intersection and an appropriate transition on the other. An equivalent discrete-module bundle is Its monodromy is , since and represent the same point in the fibre. Isomorphisms between and are the isomorphisms satisfying . Moreover,    Let and let , . The invariant line and its quotient give an exact sequence This sequence splits near every point, but it does not split as local systems. A splitting would lift the invariant generator of the quotient to a fixed vector , and is different. Exactness on stalks and even local splitting therefore do not imply a global splitting.   The same calculation explains why the global-section functor is not generally right exact. The quotient section has local lifts but no global lift in this sequence. For the map , direct image is precisely the global-section functor, so this also supplies an example of a nonexact direct image.  For a rank-one free module, an automorphism is multiplication by a unit . The global sections are . Over an integral domain they vanish for . Over , multiplication by is nontrivial but fixes , so nontrivial monodromy does not imply absence of nonzero sections over an arbitrary ring. This qualifies the domain hypothesis in .  The sheaf has stalk isomorphic to at every point, independently of . Isomorphic stalks alone therefore do not decide whether two local systems are isomorphic. Transport is the additional gluing information. Even local constancy does not follow from constant stalk dimensions: on , the sheaf from has one-dimensional stalks everywhere but is not locally constant near zero. Its sections near zero restrict to zero on a sufficiently small punctured interval. Higher cohomology of these circle systems is calculated in .   Let be a covering with finite fibres. Then is finite locally free. On a path-connected component where the fibre has points, its monodromy permutes the coordinates of according to the lifting of loops to the covering.  On an evenly covered open with sheets, direct image is the product of the constant sheaves on the sheets. Finite products of constant module sheaves are constant, by exact inverse image from a point. A path carries the sheet labels to their endpoint labels, so it permutes the corresponding coordinate vectors.   For the map , , with , a positive loop permutes the sheets cyclically. The invariant vectors are the vectors with all coordinates equal, so the global sections are . This agrees with taking global sections on the connected covering circle itself.  The finite-fibre assumption avoids an infinite product of constant sheaves on a space without local connectedness. Infinite products of locally constant scalar functions can require infinitely many different neighbourhoods. The product-stalk comparison in gives an explicit failure of the constant-sheaf functor to preserve an infinite product; a product cannot be replaced by a constant product module without additional hypotheses.   Inverse image under any continuous map sends local systems to local systems. It sends finite locally free systems to finite locally free systems, and its transport is obtained by composing paths with the map. Under the monodromy equivalences, is precomposition with . In particular, on spaces satisfying the classification hypotheses, a homotopy equivalence induces an equivalence of local-system categories.  Pulling back a constant trivialization on gives a constant trivialization on , by . The subdivisions used for transport give exactly transport along . A homotopy gives a natural isomorphism of the induced fundamental-groupoid functors, using its path at each point. A homotopy inverse therefore gives a quasi-inverse on local systems.   This final statement concerns local systems and their transport. Homotopy invariance of their derived global sections requires an additional cohomological comparison; it is treated in . An arbitrary sheaf may contain local data that is not invariant under homotopy of spaces.   "
},
{
  "id": "sh-c05-constant",
  "level": "2",
  "url": "sh-c05.html#sh-c05-constant",
  "type": "Definition",
  "number": "5.1",
  "title": "Constant sheaf.",
  "body": " Constant sheaf Constant sheaf Constant presheaf Locally constant function  For a set , the constant sheaf  is the sheaf associated to the constant presheaf with value . Equivalently, where has the discrete topology. For a -module , the constant sheaf has this description with pointwise module operations. A sheaf is constant if it is isomorphic to or , as appropriate.  "
},
{
  "id": "sh-c05-constant-properties",
  "level": "2",
  "url": "sh-c05.html#sh-c05-constant-properties",
  "type": "Proposition",
  "number": "5.2",
  "title": "",
  "body": " Let . Constant sheaves satisfy The functor is exact, preserves all colimits and finite limits, and has stalk at each point. For every continuous , there is a canonical isomorphism . If is nonempty and connected, is fully faithful.  The first assertion follows by applying the inverse image construction to a point. The adjunction and exactness follow from and . Compatibility with follows from . On a nonempty connected space, every locally constant function to a discrete set is constant. Hence , and the adjunction identifies morphisms between constant sheaves with module homomorphisms.  "
},
{
  "id": "sh-c05-convergent-sequence",
  "level": "2",
  "url": "sh-c05.html#sh-c05-convergent-sequence",
  "type": "Example",
  "number": "5.3",
  "title": "",
  "body": " Let . Its connected components are individual points. A section of is a sequence of values such that for all sufficiently large . An arbitrary function on the components does not have this property. In particular, the constant sheaf is not the sheaf of all functions to .  "
},
{
  "id": "sh-c05-localsystem",
  "level": "2",
  "url": "sh-c05.html#sh-c05-localsystem",
  "type": "Definition",
  "number": "5.4",
  "title": "Locally constant sheaf and local system.",
  "body": " Locally constant sheaf and local system Locally constant sheaf Local system Finite-rank local system  A sheaf on is locally constant if every point has an open neighbourhood on which is constant. We use local system of -modules for any locally constant object of , and denote their category by . A finite-rank local system over a field  has local models with finite. Over a general ring, finite locally free means that the local models are with finite.  "
},
{
  "id": "sh-c05-maps-constant",
  "level": "2",
  "url": "sh-c05.html#sh-c05-maps-constant",
  "type": "Proposition",
  "number": "5.5",
  "title": "",
  "body": " Let be modules.  A morphism is the same as a family of linear maps such that, for every , the function is locally constant.  If is finitely generated, this family is locally constant as a function to the set with its discrete topology.  If is connected and nonempty, the family is constant, without a finite-generation hypothesis.   The constant-sheaf adjunction identifies a morphism with a map , which is precisely the first description. Conversely, evaluating these functions on any locally constant section of gives the required section of . For the second assertion choose finitely many generators of and intersect neighbourhoods on which their images have constant values. The map is determined by these images. For the third, each function is constant by connectedness, for every .  "
},
{
  "id": "sh-c05-local-kernels",
  "level": "2",
  "url": "sh-c05.html#sh-c05-local-kernels",
  "type": "Proposition",
  "number": "5.6",
  "title": "",
  "body": " The following statements hold.  If is locally connected, kernels and cokernels of morphisms in , computed in , are locally constant. Thus is Abelian and its inclusion is exact.  On an arbitrary , the same conclusion for the kernel and cokernel of holds if has finitely generated local models.  For any , finite-rank local systems over a field are closed under kernels, cokernels, and extensions in the category of all module sheaves.    Trivialize source and target near a point. On a connected open neighbourhood, the morphism is induced by one module homomorphism, by . Its kernel and cokernel are the constant sheaves of the corresponding modules because the constant-sheaf functor is exact. A connected open basis gives the first assertion. Finitely generated source modules give a neighbourhood with the same property without assuming local connectedness, proving the second.  Over a field, kernels and cokernels of maps of finite-dimensional vector spaces are finite-dimensional. For an extension , choose local finite-dimensional trivializations of and . The finitely many basis sections of lift to after a common shrinking, since a sheaf epimorphism is locally surjective. These lifts split the sequence on that neighbourhood. Hence is locally a direct sum of the two constant sheaves.   "
},
{
  "id": "sh-c05-infinite-counterexample",
  "level": "2",
  "url": "sh-c05.html#sh-c05-infinite-counterexample",
  "type": "Example",
  "number": "5.7",
  "title": "",
  "body": " For infinite-dimensional local systems, the hypothesis on the space cannot be omitted from the first assertion. Take the convergent sequence of and let . Define maps Every has finite support, so eventually. These maps define a sheaf morphism . Its kernel has stalk zero at and a nonzero stalk at every . No neighbourhood of zero can trivialize that kernel, since a constant sheaf with a zero stalk has zero local model. Thus this kernel is not locally constant.  "
},
{
  "id": "sh-c05-covering",
  "level": "2",
  "url": "sh-c05.html#sh-c05-covering",
  "type": "Definition",
  "number": "5.8",
  "title": "Covering space.",
  "body": " Covering space Covering space Evenly covered neighbourhood  A covering space over  is a continuous map such that every point has an open neighbourhood with an isomorphism over  for a discrete set . We allow ; thus a covering is not required to be surjective. Morphisms are continuous maps over .  "
},
{
  "id": "sh-c05-cover-equivalence",
  "level": "2",
  "url": "sh-c05.html#sh-c05-cover-equivalence",
  "type": "Proposition",
  "number": "5.9",
  "title": "",
  "body": " The étalé-space equivalence of restricts to an equivalence between locally constant sheaves of sets and covering spaces over . Constant sheaves correspond to trivial coverings .  The étalé space of is , since its basic sections are locally constant functions to . Thus local trivializations of the sheaf give evenly covered neighbourhoods. Conversely, the sheaf of sections of a covering restricts on an evenly covered open to the sheaf of locally constant -valued functions.  "
},
{
  "id": "sh-c05-transport",
  "level": "2",
  "url": "sh-c05.html#sh-c05-transport",
  "type": "Proposition",
  "number": "5.10",
  "title": "",
  "body": " Transport is an isomorphism and satisfies Here means first traverse , then . Transport depends only on the homotopy class relative to endpoints. A morphism of local systems commutes with every transport map.  The first three assertions follow by reversing or adjoining subdivisions. For homotopy invariance, pull back trivializing opens to a homotopy square. By compactness, subdivide the square into rectangles whose images lie in trivializing opens. Transport around each rectangle is the identity. Cancelling the interior edges identifies transport along the two opposite boundary paths; the other boundary paths are constant when endpoints are fixed. Compatibility with a sheaf morphism follows on each subinterval from the description of maps between constant sheaves on a connected interval.  "
},
{
  "id": "sh-c05-fundamental-groupoid",
  "level": "2",
  "url": "sh-c05.html#sh-c05-fundamental-groupoid",
  "type": "Definition",
  "number": "5.11",
  "title": "Fundamental groupoid and monodromy.",
  "body": " Fundamental groupoid and monodromy Fundamental groupoid Monodromy Semilocally simply connected space  The fundamental groupoid  has points as objects and endpoint-preserving homotopy classes of paths as morphisms. Composition follows the convention of . Transport defines a functor We call it the monodromy functor of . A space is semilocally simply connected if every point has an open neighbourhood whose loops based at that point become null-homotopic in .  "
},
{
  "id": "sh-c05-monodromy",
  "level": "2",
  "url": "sh-c05.html#sh-c05-monodromy",
  "type": "Theorem",
  "number": "5.12",
  "title": "",
  "body": " If is locally path connected and semilocally simply connected, monodromy is an equivalence The analogous equivalence holds for locally constant sheaves of sets. If is also path connected and , evaluation at gives an equivalence with modules equipped with a left action of by linear automorphisms.   Let be a functor. Form the set over . Choose a path-connected open neighbourhood such that its loops become null-homotopic in , and choose . Transport along paths in gives bijections for every , independent of the chosen path: two paths differ by a loop that is trivial in . They define a bijection .  These bijections define compatible covering charts. On an overlap, choose a path-connected neighbourhood of a point contained in the overlap. Following paths in this smaller neighbourhood shows that the transition map between the two fixed modules is constant there. Hence the transition is continuous for discrete fibres. The resulting topology on makes it a covering, with locally constant linear transition maps. Its sheaf of sections is a local system with monodromy .  A natural transformation between two such functors gives fibre maps that commute with transport. In each path-connected trivializing neighbourhood, they are one fixed homomorphism, and hence define a map of local systems. Conversely, every sheaf morphism gives those fibre maps. These constructions are inverse, proving full faithfulness as well as essential surjectivity.  When is path connected, its fundamental groupoid is connected and its automorphism group at is . Restriction of functors to this one-object groupoid is an equivalence: paths from to the other points reconstruct all other fibres, and changing these paths gives a naturally isomorphic functor.   "
},
{
  "id": "sh-c05-monodromy-sections",
  "level": "2",
  "url": "sh-c05.html#sh-c05-monodromy-sections",
  "type": "Corollary",
  "number": "5.13",
  "title": "",
  "body": " Under the hypotheses of , global sections are compatible families in the fibres: If is path connected and the local system corresponds to , then In this path-connected case, a local system is constant if and only if its monodromy action is trivial.  A section has fibre values compatible with transport. Conversely, such a family is constant in each path-connected trivializing open, and therefore defines a section. In the path-connected case, the value at determines the entire family and is allowed precisely when it is fixed by all loops. The final assertion follows from the classification and the trivial monodromy of .  "
},
{
  "id": "sh-c05-circle",
  "level": "2",
  "url": "sh-c05.html#sh-c05-circle",
  "type": "Example",
  "number": "5.14",
  "title": "",
  "body": " A local system on is described by a module and an automorphism , the transport around a positively oriented generator. It can be constructed by gluing two constant sheaves on arcs; use the identity on one component of their intersection and an appropriate transition on the other. An equivalent discrete-module bundle is Its monodromy is , since and represent the same point in the fibre. Isomorphisms between and are the isomorphisms satisfying . Moreover,  "
},
{
  "id": "sh-c05-unipotent-extension",
  "level": "2",
  "url": "sh-c05.html#sh-c05-unipotent-extension",
  "type": "Example",
  "number": "5.15",
  "title": "",
  "body": " Let and let , . The invariant line and its quotient give an exact sequence This sequence splits near every point, but it does not split as local systems. A splitting would lift the invariant generator of the quotient to a fixed vector , and is different. Exactness on stalks and even local splitting therefore do not imply a global splitting.  "
},
{
  "id": "sh-c05-finite-cover",
  "level": "2",
  "url": "sh-c05.html#sh-c05-finite-cover",
  "type": "Proposition",
  "number": "5.16",
  "title": "",
  "body": " Let be a covering with finite fibres. Then is finite locally free. On a path-connected component where the fibre has points, its monodromy permutes the coordinates of according to the lifting of loops to the covering.  On an evenly covered open with sheets, direct image is the product of the constant sheaves on the sheets. Finite products of constant module sheaves are constant, by exact inverse image from a point. A path carries the sheet labels to their endpoint labels, so it permutes the corresponding coordinate vectors.  "
},
{
  "id": "sh-c05-pullback",
  "level": "2",
  "url": "sh-c05.html#sh-c05-pullback",
  "type": "Proposition",
  "number": "5.17",
  "title": "",
  "body": " Inverse image under any continuous map sends local systems to local systems. It sends finite locally free systems to finite locally free systems, and its transport is obtained by composing paths with the map. Under the monodromy equivalences, is precomposition with . In particular, on spaces satisfying the classification hypotheses, a homotopy equivalence induces an equivalence of local-system categories.  Pulling back a constant trivialization on gives a constant trivialization on , by . The subdivisions used for transport give exactly transport along . A homotopy gives a natural isomorphism of the induced fundamental-groupoid functors, using its path at each point. A homotopy inverse therefore gives a quasi-inverse on local systems.  "
},
{
  "id": "sh-c06",
  "level": "1",
  "url": "sh-c06.html",
  "type": "Chapter",
  "number": "6",
  "title": "Tensor products and internal Hom",
  "body": " Tensor products and internal Hom   For fixed coefficients, module sheaves have the same tensor and Hom adjunction as modules, but their sections do not obey the corresponding formulas on every open set. Tensor products require sheafification; internal Hom already forms a sheaf, but its stalk need not be the Hom of the stalks. Finite presentation explains one useful range in which that second comparison is valid.  We work in for an arbitrary topological space and a fixed commutative unital ring . The constructions are the fixed-coefficient cases of Stacks, tensor products and internal Hom . The more general theory of a varying structure sheaf has its own treatment in the note on sites and ringed structures.    The tensor product sheaf   Tensor product of module sheaves Tensor product of sheaves Bilinear morphism  For , their tensor product is the sheaf Restrictions on the displayed presheaf are the tensor products of restrictions. A bilinear morphism from to is a family of bilinear maps compatible with restriction.    There is a universal bilinear morphism . It gives a natural bijection between bilinear morphisms to and sheaf morphisms . At every point there is a canonical isomorphism Every local section of the tensor product can, after restricting to an open covering, be written as a finite sum of tensors of sections.  The universal property for modules gives a presheaf morphism from the tensor presheaf to , and sheafification gives the claimed correspondence. For the stalk formula, representatives for finitely many germs in and can be chosen on one common neighbourhood. A finite tensor relation between such germs can also be witnessed on one common neighbourhood. Thus the colimit of the section tensor products is the tensor product of the two stalk colimits. Sheafification preserves this colimit. The last assertion is the local representation property of sheafification, together with the definition of a module tensor product.   A sheaf of -modules is also a module over the constant ring sheaf . The tensor product defined above is canonically its tensor product over . In a ringed-space presentation one instead starts with . Both presheaf constructions have the same stalks and the same sheafification. Balancing by a locally constant scalar function is already imposed locally by balancing over . On a disconnected open, can be larger than . The equality of the resulting sheaves does not assert equality of the two tensor presheaves before sheafification.   Let consist of two isolated points and assume . With , the tensor presheaf over the fixed ring has The tensor product sheaf has section module . If are the characteristic functions of the two points, then is nonzero in the presheaf and restricts to zero on both singleton opens. It becomes zero after sheafification. This is a failure of the presheaf separation axiom, before any question of gluing new sections.    Let be distinct points of and let , . At each point at least one of is zero, so . Yet . Thus the natural map is . This failure occurs for flat sheaves and reflects the positions of their local data, rather than a torsion obstruction.   The symmetry and associativity maps are induced by the corresponding maps of module tensor products. Multiplication gives , as can be checked on stalks. These maps make a symmetric monoidal category. Their coherence follows by sheafifying the usual module identities; the formal terminology is developed in the chapter on closed monoidal structures .    Internal Hom and its adjunction   Internal Hom Internal Hom Sheaf Hom Evaluation morphism  For module sheaves , define Restriction is restriction of morphisms. This is a sheaf of modules, called the internal Hom or sheaf Hom . Evaluation of a morphism on a section gives   The sheaf axiom here is exactly gluing of morphisms in . Linearity is pointwise addition and multiplication of morphisms. No sheafification is needed. In particular, The left side takes sections of a sheaf on ; the right side is a single module. Their equality at does not identify either one with a pointwise family of arbitrary stalk maps.   For module sheaves , there are natural isomorphisms  Consequently tensor product preserves all colimits in either variable and is right exact. Internal Hom is left exact in the second variable and takes cokernel sequences in the first variable to kernel sequences.  A bilinear morphism sends to a morphism : on evaluate the bilinear map on . This gives a map . Evaluation reverses this construction. The tensor universal property gives the first isomorphism. Applying the same correspondence on every open subset gives the second.  Preservation of colimits follows because tensor is a left adjoint. Left exactness of can be checked on each open by the left exactness of the ordinary Hom functor. Similarly a map from a cokernel to is exactly a map from its presenting object that annihilates the given morphism; this proves the assertion about the first variable.   Internal Hom commutes with restriction to opens. For example, It does not in general commute with restriction to an arbitrary subspace in this way. Restriction to an open retains the same local category of sheaves near each of its points. Restriction to a point retains only one stalk, and can lose the common neighbourhood on which a morphism must be defined. That distinction will be expressed by a comparison map below.    Stalks and finite presentation  Every germ of a local morphism has a map on stalks, giving The source remembers a single neighbourhood on which the entire morphism exists. Specifying a stalk homomorphism need not give that neighbourhood, and specifying its values on infinitely many generators can require infinitely many incompatible shrinkings.   Local finite generation and presentation Locally finitely generated sheaf Locally finitely presented sheaf  A module sheaf is locally finitely generated , or of finite type , if every point has an open neighbourhood with an epimorphism for a finite . It is locally finitely presented if it has, near every point, a presentation with finite. These are local properties of sheaves, not a claim that preserves filtered colimits.   Finite generation of every stalk is weaker than local finite generation of the sheaf. For example, let and assume . Every stalk of is zero or cyclic. A section on an interval crossing zero must vanish on the positive part near zero. Finitely many such sections vanish on a common positive subinterval and cannot generate the sheaf there. Hence the sheaf is not locally finitely generated at zero. Local finite generation requires one neighbourhood and finitely many sections that generate at every point of that neighbourhood. Stalkwise choices alone need not extend with this uniformity.   If is locally finitely generated, the comparison is injective. If is locally finitely presented, it is an isomorphism. In the fixed-coefficient setting, local finite presentation is equivalent to having local models with a finitely presented -module.  For injectivity, represent a germ by whose stalk map at is zero. Choose finitely many generating sections of near . Their images vanish after a common shrinking, so the whole map vanishes there.  For finite presentation, applying internal Hom to a local presentation identifies with the kernel of a map . Taking stalks commutes with this finite kernel and gives the same kernel that computes . This proves the isomorphism.  A map between finite free constant sheaves is a finite matrix of locally constant scalar functions. After shrinking near any point, all entries are constant. Its cokernel is therefore the constant sheaf of the finitely presented cokernel module. The converse follows by applying the exact constant-sheaf functor to a finite module presentation.   For the general ringed-space version, see Stacks, Lemma 17.22.4 . A varying structure sheaf need not have locally constant matrix entries, so the final assertion of our proposition is specific to fixed coefficients.   Use from . The morphism is nonzero on every neighbourhood of zero, but its map on the stalk at zero is zero. Its germ is a nonzero element of mapping to zero in . Thus the comparison can fail even to be injective for constant vector-space sheaves of infinite rank.   Finite presentation also explains why an internal Hom can commute with filtered colimits locally while the corresponding global Hom need not. Taking global sections introduces a second condition on the space. For an infinite discrete space, is locally free of rank one, but is an infinite product and need not preserve filtered colimits. Local finite presentation therefore does not by itself make a sheaf a finitely presented object of the whole category.    Inverse image and direct image comparisons   For every continuous , inverse image is symmetric monoidal: Evaluation defines a comparison This comparison is an isomorphism if is locally finitely presented.  Pulling back the bilinear morphism gives the tensor comparison. At , it is the identity on , so it is an isomorphism. The unit assertion is . Evaluation and the tensor isomorphism give the Hom comparison by adjunction.  If has a finite presentation, internal Hom is locally a kernel between finite sums of . Exact inverse image preserves that kernel and those finite sums, and transforms the presentation into the corresponding presentation of . This gives the last assertion.   For fixed coefficients the stalk ring map is the identity , so the exactness used in the finite-presentation argument is part of ordinary inverse image. In a general ringed-space statement one needs flatness of the ringed map for this argument; see Stacks, Lemma 17.22.5 . The corresponding ringed inverse image is not automatically exact.   For and , there is a natural isomorphism There is also a natural projection morphism It is an isomorphism when is finite locally free.  On an open , the first assertion is the adjunction for the restricted map , applied to morphisms between the restricted sheaves. These identifications commute with restriction in and hence give an isomorphism of sheaves.  The projection morphism comes from pulling a local section of to and tensoring with a section of there. If for finite , both sides are , and the morphism is the identity under these identifications. Such opens cover .    The projection morphism is not always invertible. Let be discrete, , , and . The map is The left side consists of matrices whose nonzero columns lie in a single finite set. The right side permits an independent finite set of nonzero entries in each row. The matrix with entries lies only on the right. The failure is a failure to interchange an infinite sum and an infinite product.   This is an ordinary sheaf statement. Derived projection formulas allow other hypotheses and involve derived tensor products; their formal construction is in the homological algebra note, and their support versions belong to the note on six functors.   Let be open and closed. For the indicated coefficient sheaves, there are natural isomorphisms   The first comparison is defined by the adjunction for and the tensor comparison after restriction to . The second is the projection morphism for . On the included subspace both are the tensor product of the two stalks, and outside it both sides have zero stalks. They are therefore isomorphisms.     Tensor and Hom of local systems   Let be local systems.  Their tensor product is locally constant, with local model whenever and .  The internal Hom is locally constant if is locally connected. The same conclusion holds on an arbitrary space if has finitely generated local models.  Under the monodromy classification, tensor transport is . Where internal Hom is locally constant, its transport sends a map to   The tensor formula follows from the universal property, or from the constant-sheaf tensor comparison for the map to a point. On a connected open where both systems are constant, the internal Hom is the constant sheaf of module homomorphisms, since morphisms between constant sheaves on each connected subopen are constant homomorphisms. A connected open basis proves the assertion for locally connected spaces. For a finitely generated source on an arbitrary space, shows that local morphisms are locally constant functions valued in . These local descriptions give the stated transport maps.   For finite-dimensional vector-space systems, their dual, tensor, and internal Hom systems therefore have the expected finite-dimensional fibres. The dual action is the contragredient action: a functional is transported by precomposition with inverse transport. For a connected space in the classification range, Taking global sections of the Hom system is the same as taking invariants of its conjugation action.  The internal-Hom assertion for two local systems is broader than the finite-presentation criterion for an arbitrary target sheaf: here the target is itself locally constant. Local connectedness or a finite set of source generators controls the entire homomorphism on one neighbourhood. Without either condition, the counterexample in applies. A stalk formula for internal Hom must retain its hypotheses even when both sheaves happen to be constant. Constancy of the individual sheaves alone does not remove the infinite-neighbourhood issue.    Finite local models and duals   Dual module sheaf Dual sheaf  The dual of a module sheaf is . Evaluation and composition define maps    If is finite locally free, both displayed maps are isomorphisms. The functors and are exact, and is dualizable in the monoidal category of module sheaves. These conclusions also hold when has local models with a finitely generated projective -module.  For , both sides of the first comparison are . The dual basis gives the bidual isomorphism and the coevaluation sending to the identity endomorphism. The identity endomorphism is independent of the basis, so these local maps glue. The triangle identities can be checked in a basis. Exactness reduces locally to exactness of a finite direct sum. A finitely generated projective module is a direct summand of a finite free module; restricting these identities to the summand proves the last assertion.   A finite projective module need not be free. Already over a one-point space, dualizability means finite projectivity rather than freeness. Over a field, an infinite-dimensional vector space is not dualizable: the map has image the finite-rank operators and does not contain the identity. Thus the finite-dimensional condition in many uses of “local system” carries mathematical content beyond local constancy.  For general module sheaves a dual is still defined, but biduality is only a comparison. Verdier duality uses a dualizing complex in place of and is not this underived operation. The present notation will be distinguished from it when support and duality are introduced.    Flatness and its stalk criterion   Flat module sheaf Flat sheaf Stalk criterion for flatness  A module sheaf is flat if is exact on . It is flat at  if is a flat -module.    A sheaf is flat if and only if it is flat at every point. Inverse image preserves flat sheaves. Direct sums and filtered colimits of flat sheaves are flat. In a short exact sequence if is flat, tensoring with any sheaf preserves this short exact sequence. If is flat, flatness of is equivalent to flatness of .  If the stalks are flat, the stalk tensor formula proves preservation of exact sequences. Conversely, apply exact tensoring by to a short exact sequence of skyscraper sheaves . These form an exact sequence by . Its stalk at , after tensoring, is the sequence of modules obtained by tensoring with . Thus is flat.  Inverse image preserves the stalk modules at the image point. Stalks commute with direct sums and filtered colimits, which preserve flatness for modules. The remaining assertions are the corresponding module assertions, applied at every stalk: a flat quotient kills the relevant first Tor obstruction, and extensions or kernels of epimorphisms between flat modules have the stated flatness properties. These are also recorded for sheaves in Stacks, Lemmas 17.17.8–17.17.9 .   In particular, every sheaf of vector spaces over a field is flat, whether or not it is locally constant. Flatness measures exactness of tensoring; it is not a local triviality condition. With , a constant sheaf of a torsion-free group is flat, whereas fails to be flat on any nonempty space for . The latter failure is detected by tensoring multiplication by on .    Enough flat sheaves   For every open , the sheaf is flat and satisfies Every module sheaf admits an epimorphism Consequently every module sheaf is a quotient of a flat sheaf and admits a flat resolution.  The first sheaf has stalk on and zero outside, so it is flat. Its Hom formula follows from and the constant-sheaf adjunction. For each pair , use the corresponding map to . Every germ of is represented by one of these sections and hence is in the image. The direct sum is flat, and the map is an epimorphism by stalks. Repeating the construction on successive kernels gives an exact complex of flat sheaves resolving .   This also identifies with the generator attached to in : both represent the section functor . In that earlier construction the generator was defined before extension by zero was available. The identification follows from the representing property, so it does not introduce a circular proof of the Grothendieck property.  The construction works with the opens of any basis: a germ can be represented on a basis neighbourhood. No compactness or separation hypothesis is needed. A basis that is a set gives a set of these generators, while the direct sum for one sheaf is indexed by the set of its sections on those opens. Compare Stacks, Lemmas 17.17.6–17.17.7 .  For the cochain conventions of this note, a flat resolution can be written Choose as above, choose a flat epimorphism onto its kernel, and continue. The differential is the epimorphism onto the previous kernel followed by that kernel's inclusion. Its square is zero, and the resulting augmentation is a quasi-isomorphism. This establishes existence, without claiming a finite length.  These flat generators need not be projective. Their Hom functor is , which is left exact and need not carry epimorphisms of sheaves to surjections of section modules. Enough flat objects therefore does not prove enough projective objects. For unbounded derived tensor products, a complex of flat terms also requires a homotopical condition; the K-flat resolutions used for that purpose are introduced in .   "
},
{
  "id": "sh-c06-tensor",
  "level": "2",
  "url": "sh-c06.html#sh-c06-tensor",
  "type": "Definition",
  "number": "6.1",
  "title": "Tensor product of module sheaves.",
  "body": " Tensor product of module sheaves Tensor product of sheaves Bilinear morphism  For , their tensor product is the sheaf Restrictions on the displayed presheaf are the tensor products of restrictions. A bilinear morphism from to is a family of bilinear maps compatible with restriction.  "
},
{
  "id": "sh-c06-tensor-properties",
  "level": "2",
  "url": "sh-c06.html#sh-c06-tensor-properties",
  "type": "Proposition",
  "number": "6.2",
  "title": "",
  "body": " There is a universal bilinear morphism . It gives a natural bijection between bilinear morphisms to and sheaf morphisms . At every point there is a canonical isomorphism Every local section of the tensor product can, after restricting to an open covering, be written as a finite sum of tensors of sections.  The universal property for modules gives a presheaf morphism from the tensor presheaf to , and sheafification gives the claimed correspondence. For the stalk formula, representatives for finitely many germs in and can be chosen on one common neighbourhood. A finite tensor relation between such germs can also be witnessed on one common neighbourhood. Thus the colimit of the section tensor products is the tensor product of the two stalk colimits. Sheafification preserves this colimit. The last assertion is the local representation property of sheafification, together with the definition of a module tensor product.  "
},
{
  "id": "sh-c06-two-points",
  "level": "2",
  "url": "sh-c06.html#sh-c06-two-points",
  "type": "Example",
  "number": "6.3",
  "title": "",
  "body": " Let consist of two isolated points and assume . With , the tensor presheaf over the fixed ring has The tensor product sheaf has section module . If are the characteristic functions of the two points, then is nonzero in the presheaf and restricts to zero on both singleton opens. It becomes zero after sheafification. This is a failure of the presheaf separation axiom, before any question of gluing new sections.  "
},
{
  "id": "sh-c06-global-tensor-failure",
  "level": "2",
  "url": "sh-c06.html#sh-c06-global-tensor-failure",
  "type": "Example",
  "number": "6.4",
  "title": "",
  "body": " Let be distinct points of and let , . At each point at least one of is zero, so . Yet . Thus the natural map is . This failure occurs for flat sheaves and reflects the positions of their local data, rather than a torsion obstruction.  "
},
{
  "id": "sh-c06-internalhom",
  "level": "2",
  "url": "sh-c06.html#sh-c06-internalhom",
  "type": "Definition",
  "number": "6.5",
  "title": "Internal Hom.",
  "body": " Internal Hom Internal Hom Sheaf Hom Evaluation morphism  For module sheaves , define Restriction is restriction of morphisms. This is a sheaf of modules, called the internal Hom or sheaf Hom . Evaluation of a morphism on a section gives  "
},
{
  "id": "sh-c06-tensorhom",
  "level": "2",
  "url": "sh-c06.html#sh-c06-tensorhom",
  "type": "Theorem",
  "number": "6.6",
  "title": "",
  "body": " For module sheaves , there are natural isomorphisms  Consequently tensor product preserves all colimits in either variable and is right exact. Internal Hom is left exact in the second variable and takes cokernel sequences in the first variable to kernel sequences.  A bilinear morphism sends to a morphism : on evaluate the bilinear map on . This gives a map . Evaluation reverses this construction. The tensor universal property gives the first isomorphism. Applying the same correspondence on every open subset gives the second.  Preservation of colimits follows because tensor is a left adjoint. Left exactness of can be checked on each open by the left exactness of the ordinary Hom functor. Similarly a map from a cokernel to is exactly a map from its presenting object that annihilates the given morphism; this proves the assertion about the first variable.  "
},
{
  "id": "sh-c06-finitepresentation",
  "level": "2",
  "url": "sh-c06.html#sh-c06-finitepresentation",
  "type": "Definition",
  "number": "6.7",
  "title": "Local finite generation and presentation.",
  "body": " Local finite generation and presentation Locally finitely generated sheaf Locally finitely presented sheaf  A module sheaf is locally finitely generated , or of finite type , if every point has an open neighbourhood with an epimorphism for a finite . It is locally finitely presented if it has, near every point, a presentation with finite. These are local properties of sheaves, not a claim that preserves filtered colimits.  "
},
{
  "id": "sh-c06-hom-stalk",
  "level": "2",
  "url": "sh-c06.html#sh-c06-hom-stalk",
  "type": "Proposition",
  "number": "6.8",
  "title": "",
  "body": " If is locally finitely generated, the comparison is injective. If is locally finitely presented, it is an isomorphism. In the fixed-coefficient setting, local finite presentation is equivalent to having local models with a finitely presented -module.  For injectivity, represent a germ by whose stalk map at is zero. Choose finitely many generating sections of near . Their images vanish after a common shrinking, so the whole map vanishes there.  For finite presentation, applying internal Hom to a local presentation identifies with the kernel of a map . Taking stalks commutes with this finite kernel and gives the same kernel that computes . This proves the isomorphism.  A map between finite free constant sheaves is a finite matrix of locally constant scalar functions. After shrinking near any point, all entries are constant. Its cokernel is therefore the constant sheaf of the finitely presented cokernel module. The converse follows by applying the exact constant-sheaf functor to a finite module presentation.  "
},
{
  "id": "sh-c06-hom-stalk-failure",
  "level": "2",
  "url": "sh-c06.html#sh-c06-hom-stalk-failure",
  "type": "Example",
  "number": "6.9",
  "title": "",
  "body": " Use from . The morphism is nonzero on every neighbourhood of zero, but its map on the stalk at zero is zero. Its germ is a nonzero element of mapping to zero in . Thus the comparison can fail even to be injective for constant vector-space sheaves of infinite rank.  "
},
{
  "id": "sh-c06-pullback-tensor",
  "level": "2",
  "url": "sh-c06.html#sh-c06-pullback-tensor",
  "type": "Proposition",
  "number": "6.10",
  "title": "",
  "body": " For every continuous , inverse image is symmetric monoidal: Evaluation defines a comparison This comparison is an isomorphism if is locally finitely presented.  Pulling back the bilinear morphism gives the tensor comparison. At , it is the identity on , so it is an isomorphism. The unit assertion is . Evaluation and the tensor isomorphism give the Hom comparison by adjunction.  If has a finite presentation, internal Hom is locally a kernel between finite sums of . Exact inverse image preserves that kernel and those finite sums, and transforms the presentation into the corresponding presentation of . This gives the last assertion.  "
},
{
  "id": "sh-c06-push-hom",
  "level": "2",
  "url": "sh-c06.html#sh-c06-push-hom",
  "type": "Proposition",
  "number": "6.11",
  "title": "",
  "body": " For and , there is a natural isomorphism There is also a natural projection morphism It is an isomorphism when is finite locally free.  On an open , the first assertion is the adjunction for the restricted map , applied to morphisms between the restricted sheaves. These identifications commute with restriction in and hence give an isomorphism of sheaves.  The projection morphism comes from pulling a local section of to and tensoring with a section of there. If for finite , both sides are , and the morphism is the identity under these identifications. Such opens cover .  "
},
{
  "id": "sh-c06-projection-failure",
  "level": "2",
  "url": "sh-c06.html#sh-c06-projection-failure",
  "type": "Example",
  "number": "6.12",
  "title": "",
  "body": " The projection morphism is not always invertible. Let be discrete, , , and . The map is The left side consists of matrices whose nonzero columns lie in a single finite set. The right side permits an independent finite set of nonzero entries in each row. The matrix with entries lies only on the right. The failure is a failure to interchange an infinite sum and an infinite product.  "
},
{
  "id": "sh-c06-extensions-tensor",
  "level": "2",
  "url": "sh-c06.html#sh-c06-extensions-tensor",
  "type": "Proposition",
  "number": "6.13",
  "title": "",
  "body": " Let be open and closed. For the indicated coefficient sheaves, there are natural isomorphisms   The first comparison is defined by the adjunction for and the tensor comparison after restriction to . The second is the projection morphism for . On the included subspace both are the tensor product of the two stalks, and outside it both sides have zero stalks. They are therefore isomorphisms.  "
},
{
  "id": "sh-c06-local-tensorhom",
  "level": "2",
  "url": "sh-c06.html#sh-c06-local-tensorhom",
  "type": "Proposition",
  "number": "6.14",
  "title": "",
  "body": " Let be local systems.  Their tensor product is locally constant, with local model whenever and .  The internal Hom is locally constant if is locally connected. The same conclusion holds on an arbitrary space if has finitely generated local models.  Under the monodromy classification, tensor transport is . Where internal Hom is locally constant, its transport sends a map to   The tensor formula follows from the universal property, or from the constant-sheaf tensor comparison for the map to a point. On a connected open where both systems are constant, the internal Hom is the constant sheaf of module homomorphisms, since morphisms between constant sheaves on each connected subopen are constant homomorphisms. A connected open basis proves the assertion for locally connected spaces. For a finitely generated source on an arbitrary space, shows that local morphisms are locally constant functions valued in . These local descriptions give the stated transport maps.  "
},
{
  "id": "sh-c06-dual",
  "level": "2",
  "url": "sh-c06.html#sh-c06-dual",
  "type": "Definition",
  "number": "6.15",
  "title": "Dual module sheaf.",
  "body": " Dual module sheaf Dual sheaf  The dual of a module sheaf is . Evaluation and composition define maps  "
},
{
  "id": "sh-c06-finite-duality",
  "level": "2",
  "url": "sh-c06.html#sh-c06-finite-duality",
  "type": "Proposition",
  "number": "6.16",
  "title": "",
  "body": " If is finite locally free, both displayed maps are isomorphisms. The functors and are exact, and is dualizable in the monoidal category of module sheaves. These conclusions also hold when has local models with a finitely generated projective -module.  For , both sides of the first comparison are . The dual basis gives the bidual isomorphism and the coevaluation sending to the identity endomorphism. The identity endomorphism is independent of the basis, so these local maps glue. The triangle identities can be checked in a basis. Exactness reduces locally to exactness of a finite direct sum. A finitely generated projective module is a direct summand of a finite free module; restricting these identities to the summand proves the last assertion.  "
},
{
  "id": "sh-c06-flat",
  "level": "2",
  "url": "sh-c06.html#sh-c06-flat",
  "type": "Definition",
  "number": "6.17",
  "title": "Flat module sheaf.",
  "body": " Flat module sheaf Flat sheaf Stalk criterion for flatness  A module sheaf is flat if is exact on . It is flat at  if is a flat -module.  "
},
{
  "id": "sh-c06-flat-stalk",
  "level": "2",
  "url": "sh-c06.html#sh-c06-flat-stalk",
  "type": "Theorem",
  "number": "6.18",
  "title": "",
  "body": " A sheaf is flat if and only if it is flat at every point. Inverse image preserves flat sheaves. Direct sums and filtered colimits of flat sheaves are flat. In a short exact sequence if is flat, tensoring with any sheaf preserves this short exact sequence. If is flat, flatness of is equivalent to flatness of .  If the stalks are flat, the stalk tensor formula proves preservation of exact sequences. Conversely, apply exact tensoring by to a short exact sequence of skyscraper sheaves . These form an exact sequence by . Its stalk at , after tensoring, is the sequence of modules obtained by tensoring with . Thus is flat.  Inverse image preserves the stalk modules at the image point. Stalks commute with direct sums and filtered colimits, which preserve flatness for modules. The remaining assertions are the corresponding module assertions, applied at every stalk: a flat quotient kills the relevant first Tor obstruction, and extensions or kernels of epimorphisms between flat modules have the stated flatness properties. These are also recorded for sheaves in Stacks, Lemmas 17.17.8–17.17.9 .  "
},
{
  "id": "sh-c06-enoughflat",
  "level": "2",
  "url": "sh-c06.html#sh-c06-enoughflat",
  "type": "Proposition",
  "number": "6.19",
  "title": "",
  "body": " For every open , the sheaf is flat and satisfies Every module sheaf admits an epimorphism Consequently every module sheaf is a quotient of a flat sheaf and admits a flat resolution.  The first sheaf has stalk on and zero outside, so it is flat. Its Hom formula follows from and the constant-sheaf adjunction. For each pair , use the corresponding map to . Every germ of is represented by one of these sections and hence is in the image. The direct sum is flat, and the map is an epimorphism by stalks. Repeating the construction on successive kernels gives an exact complex of flat sheaves resolving .  "
},
{
  "id": "sh-c07",
  "level": "1",
  "url": "sh-c07.html",
  "type": "Chapter",
  "number": "7",
  "title": "Resolutions and derived sheaf operations",
  "body": " Resolutions and derived sheaf operations   A sheaf epimorphism admits local lifts, whereas cohomology measures the obstruction to choosing compatible lifts. Injective and flabby resolutions replace this local lifting problem by complexes on which sections can be taken directly. We construct the Godement resolution explicitly, then explain the replacements needed for unbounded complexes. Throughout, the space is arbitrary and the coefficient ring is the fixed commutative ring .  We use the homotopy and derived categories of cochain complexes, denoted and . General comparison theorems for resolutions, cones, and total derived functors are used in the form developed in the homological algebra note . The arguments retained here explain the additional facts about sheaves that make those theorems apply.    Injectives and extension of sections   injective sheaf  injective resolution   A sheaf is injective if every morphism extends across every monomorphism . Equivalently, the contravariant functor is exact. An injective resolution of is an exact sequence with injective terms. The category has enough injectives by .      For an open inclusion , restriction sends injective sheaves to injective sheaves. For a continuous map , direct image sends injective sheaves of -modules to injective sheaves of -modules.    The left adjoints of these two functors are and . Both are exact by and . If is an exact left adjoint of , then is exact whenever is injective.      For every , choose module embeddings with injective over . Then there is a natural monomorphism for these choices and the target is an injective sheaf. Every injective sheaf is a direct summand of a product of this form.    The stalk functor is exact and left adjoint to , so is injective. A product of injectives is injective: Hom into the product is the product of the exact Hom functors, and products of modules are exact. The embeddings of stalks give maps by adjunction. The product map is a monomorphism. To check this at , its composite with the projection onto has stalk the chosen injection . If is injective, its monomorphism into this product splits.    This also proves enough injectives directly, using enough injectives in the module category. The Godement sheaf below uses the same point direct images with replaced by . Those modules need not be injective, which is one reason that the Godement resolution is a flabby resolution rather than an injective resolution.  Here fixed coefficients matter: is the actual left adjoint in the module categories under consideration. The analogous statement for direct image between arbitrary ringed spaces requires attention to the exactness of the corresponding left adjoint. The inverse image of an injective sheaf need not be injective. Nor does the stalk of an injective sheaf have to be an injective module. The adjunctions used in this proposition have the opposite direction from either of those assertions.   flabby sheaf  flasque sheaf  acyclic sheaf   A sheaf is flabby , or flasque , if every restriction for open sets is surjective. It is equivalent to require surjectivity of for every open . A sheaf is acyclic for sections on if its positive right derived functors for vanish.      Every injective sheaf is flabby. Restrictions and direct images of flabby sheaves are flabby. Products of flabby sheaves are flabby.    Write for the open extension by zero of the constant sheaf on . A section of on is a morphism . For , the natural map is a monomorphism, as one sees on stalks. Injectivity of therefore makes surjective. The other assertions follow from the formulas for restriction, direct image, and products of sheaves.      If is exact and is flabby, then is surjective for every open . If is also flabby, then is flabby.    Fix . Order the pairs , where is open and lifts , by extension of sections. A chain has an upper bound by the sheaf axiom. Choose a maximal pair. If , the epimorphism provides a lift on an open neighborhood of . On , the difference comes from a section of . Extend that section to by flabbiness and add its image to . The two lifts now agree on the intersection, so they glue on , contradicting maximality. Thus .  If is flabby, lift a section of to , extend it to , and take its image in .      A flabby sheaf is acyclic for on every open , and for under every continuous map . Consequently, a bounded below resolution by flabby sheaves computes these right derived functors.    Embed a flabby sheaf into an injective . Its cokernel is flabby by , and taking sections on any open preserves the resulting short exact sequence. Repeating gives an injective resolution whose successive kernels are flabby. Its section complex is exact in positive degrees. The same argument applies to , since its sections on are sections on . The assertion about resolutions is the acyclic resolution theorem.    The definition of flabbiness concerns extension of individual sections. Acyclicity concerns the exactness of a resolution after applying a functor. The implication between them uses the lifting lemma; they are different conditions. See also Stacks, §20.12 .    For every sheaf and injective sheaf , the sheaf is flabby. If is flat, it is injective.    For , use the monomorphism It is a monomorphism on stalks, with the identity on and zero source outside . Applying Hom into extends every morphism to . These Hom modules are the section modules of the internal Hom sheaf. If is flat, the tensor–Hom adjunction gives Both tensoring with and Hom into are exact, so the internal Hom is injective.    For example, applying internal Hom from an arbitrary sheaf to an injective resolution yields a bounded below complex of flabby sheaves. Its ordinary global sections already compute its derived global sections. This is the bounded below explanation of the local-to-global Ext comparison in ; flatness is only needed for the stronger injectivity assertion.    For the inclusion and a module , the sheaf is flabby. If , the constant sheaf on the real line is not flabby.    The sections of on an open are when and zero otherwise, so all restriction maps are surjective. No closedness assumption on is needed. On the real line, a global locally constant function is constant. On the union of two disjoint nonempty intervals there is a locally constant function taking the values zero and one. It does not extend globally. Flabbiness is stronger than being acyclic on the whole space. For example, the constant sheaf on the real line is acyclic; that uses the comparison theorem of , not the preceding elementary argument.      The Godement resolution  A resolution by injectives is appropriate for existence and comparison arguments. A resolution whose first term has an explicit description is often more useful for understanding how local data enter cohomology.   Godement resolution   For a sheaf , define Restrictions discard the components outside the smaller open set. The map sends a section to its family of germs. Set , , and The differential is the quotient onto followed by its germ embedding. The augmented complex is the Godement resolution used here.      The functors , , and are exact. The map is a monomorphism, each is flabby, and is a functorial resolution.    The rule defining is a sheaf: compatible families of assignments of germs glue component by component. It is flabby because an assignment on a smaller open set extends by assigning zero at the remaining points. A section with all germs zero is zero, so is injective. Stalks are exact functors, and products of modules are exact. It follows that takes a short exact sequence to a sequence exact on sections on every open, hence to a short exact sequence of sheaves. The snake lemma applied to the natural monomorphisms proves exactness of . Iteration proves exactness of . Finally the short exact sequences show directly that the augmented complex is exact.    Thus allows arbitrary assignments of germs, with no continuity or local representability requirement. The quotient is the sheaf cokernel of the locally representable assignments. Taking its quotient sheaf is essential: the presheaf quotient need not be a sheaf. One can also write . This equality describes the functor, rather than asserting a formula for its stalks as a product of stalks. Infinite products of sheaves are computed on sections, but taking a stalk need not commute with an infinite product. The stalk of at contains information from arbitrarily small neighborhoods of , and is usually much larger than . The name Godement resolution also refers to the cosimplicial resolution from the adjunction between and its discrete underlying space. Its terms involve iterates of . Our successive-cokernel model computes the same derived functors; its terms and extra multiplicative structures are different. See and Stacks, §20.30 .    Let be a bounded below complex of sheaves. Apply to each term and use the double complex , with total differential . Its total complex is bounded below and flabby in every degree, and the augmentation is a quasi-isomorphism. Applying or to this total complex computes the corresponding derived functor of .    If for , only finitely many pairs with contribute to any fixed total degree. Thus every term of the total complex is a finite direct sum of flabby sheaves. Filtering the augmented double complex in the resolution direction and using exactness of each Godement resolution proves that its augmentation is a quasi-isomorphism. The acyclic resolution theorem and then apply.    Boundedness enters both the finite sums and the convergence of this double-complex argument. For an unbounded , one cannot justify either a sum totalization or a product totalization merely by saying that the columns are resolutions. We use K-injective resolutions for that case.    K-injective resolutions and direct image   K-injective complex   A complex is K-injective if for every acyclic complex . Equivalently, the complex of module homomorphisms is acyclic for every such . The equivalence uses all shifts of . A K-injective resolution is a quasi-isomorphism with K-injective.    The K-injective condition is a property of the whole complex. Every bounded below complex of injectives is K-injective. For an arbitrary unbounded complex, injectivity of the individual terms does not suffice. The general statements and their proofs are recorded in the chapter on unbounded resolutions .    Every complex in admits a K-injective resolution whose terms are injective sheaves. The resolution may be chosen functorially in complexes.    The category is Grothendieck by . Apply the existence theorem for K-injective resolutions in a Grothendieck abelian category. A precise sheaf formulation is Stacks, §20.28 ; see also for the unbounded resolution methods. This existence theorem is the general homological algebra used here.      An unbounded acyclic complex can have every term injective and flat, while failing to be K-injective and K-flat. This happens already when is a point.    Take a field and . The pairing taking to the coefficient of in identifies with as a module over itself. The latter is injective, since Hom into it is naturally , an exact functor. Consider the complex with a copy of in every degree and every differential multiplication by . It is acyclic because both the kernel and image are .  If were K-injective, its identity would be null-homotopic. Every component of is multiplication by an element in , so it cannot equal the identity. It is also not K-flat. Indeed, an acyclic K-flat complex has acyclic tensor product with every module: resolve the module by a bounded above flat complex and compare the two tensor products using K-flatness in each variable. But has a copy of in every degree and zero differential.     derived direct image   For every continuous , direct image preserves K-injective complexes. Restriction to an open set also preserves K-injective complexes. The prescriptions define exact functors on unbounded derived categories They extend the usual bounded below right derived functors. Moreover , and for there is a natural isomorphism     If is acyclic on , exactness of inverse image and the adjunction on homotopy categories give For restriction, use its exact left adjoint in the same argument. Maps into a K-injective complex in the derived category are already computed in the homotopy category. This proves independence of the resolution, as well as the derived adjunction. Finally, is K-injective, so both sides of the composition formula are represented by the same complex . Applying this to the map to a point gives the assertion about derived sections.    For example, if , then can be computed as using a K-injective resolution on ; no second resolution on is necessary. Flabby resolutions remain useful for sheaves and bounded below complexes, but an unbounded complex of flabby sheaves is not certified to compute by termwise acyclicity alone. This is a distinction between a valid class of resolutions of individual objects and a class of complexes on which an unbounded total derived functor can be evaluated. Unbounded totalizations require control of all degrees at once.    Derived tensor and internal Hom   K-flat complex   A complex is K-flat if is acyclic for every acyclic complex of sheaves. Tensor totalization always uses direct sums: Here has degree . A K-flat resolution is a quasi-isomorphism with K-flat.      A complex is K-flat if and only if every stalk complex is K-flat over . Every bounded above complex of flat sheaves is K-flat. Every complex admits a K-flat resolution with flat terms. Inverse image preserves K-flat complexes.    If the stalk complexes are K-flat, take stalks of . Stalks commute with tensor products and direct sums and detect acyclicity. Conversely, for an acyclic complex of modules, is an acyclic complex of sheaves and its stalk at is . Testing K-flatness against proves that is K-flat. The bounded above assertion follows from the corresponding module theorem and the stalk criterion for flat sheaves in . Existence is the unbounded flat resolution theorem, in the form Stacks, Lemma 20.26.12 . Its construction uses the flat generators of . Finally, , so inverse image preserves K-flatness.    The construction of an unbounded flat resolution is stronger than repeatedly resolving the separate terms by flat sheaves. It arranges compatibility with the differential and with unbounded totalization. We use that existence theorem as a whole, as in the homological algebra note.   derived tensor product  derived internal Hom   For , define the derived tensor product by using a K-flat resolution . Define the derived internal Hom by using a K-injective resolution . The Hom complex has terms and differential The product is a product of sheaves. These constructions give bifunctors on the unbounded derived categories, covariant in both tensor factors and contravariant in the first Hom variable.      The derived tensor product is associative and symmetric, with unit and symmetry sign on degrees . There is a natural adjunction Restriction to an open set commutes with both bifunctors. Inverse image commutes with derived tensor products.    K-flatness makes tensoring preserve quasi-isomorphisms, by applying tensor to their acyclic cones. For internal Hom, restriction of a K-injective complex is K-injective. Thus, if is a quasi-isomorphism, the complex is acyclic for every open . It follows that internal Hom takes the quasi-isomorphism to a quasi-isomorphism. A quasi-isomorphism between K-injective targets is a homotopy equivalence, which proves independence in the second variable.  Choose K-flat and K-injective. The complex is K-injective: a map into it from an acyclic corresponds, by the tensor–Hom adjunction on complexes, to a map , which is null-homotopic. Consequently the same adjunction on complexes computes both sides of the derived adjunction. Associativity and symmetry follow by choosing K-flat resolutions of the factors; tensor products of K-flat complexes are K-flat. Restriction preserves the chosen types of resolutions, and inverse image preserves K-flat complexes and ordinary tensor products.    Internal derived Hom is an object on . The global derived Hom will be a complex of -modules, obtained by derived sections; see . Keeping these target categories visible prevents a common ambiguity in the notation . Sources for the unbounded internal construction are Stacks, §20.41 and §20.42 . The bounded constructions can also be compared with . Schapira's coefficient convention assumes finite global dimension throughout that text. The definitions of K-injective and K-flat resolutions, and the existence results cited here, allow an arbitrary commutative coefficient ring. We have not transferred a finite resolution-length argument from that convention.   "
},
{
  "id": "sh-c07-injective",
  "level": "2",
  "url": "sh-c07.html#sh-c07-injective",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": " injective sheaf  injective resolution   A sheaf is injective if every morphism extends across every monomorphism . Equivalently, the contravariant functor is exact. An injective resolution of is an exact sequence with injective terms. The category has enough injectives by .   "
},
{
  "id": "sh-c07-injective-functors",
  "level": "2",
  "url": "sh-c07.html#sh-c07-injective-functors",
  "type": "Proposition",
  "number": "7.2",
  "title": "",
  "body": "  For an open inclusion , restriction sends injective sheaves to injective sheaves. For a continuous map , direct image sends injective sheaves of -modules to injective sheaves of -modules.    The left adjoints of these two functors are and . Both are exact by and . If is an exact left adjoint of , then is exact whenever is injective.   "
},
{
  "id": "sh-c07-injective-supply",
  "level": "2",
  "url": "sh-c07.html#sh-c07-injective-supply",
  "type": "Proposition",
  "number": "7.3",
  "title": "",
  "body": "  For every , choose module embeddings with injective over . Then there is a natural monomorphism for these choices and the target is an injective sheaf. Every injective sheaf is a direct summand of a product of this form.    The stalk functor is exact and left adjoint to , so is injective. A product of injectives is injective: Hom into the product is the product of the exact Hom functors, and products of modules are exact. The embeddings of stalks give maps by adjunction. The product map is a monomorphism. To check this at , its composite with the projection onto has stalk the chosen injection . If is injective, its monomorphism into this product splits.   "
},
{
  "id": "sh-c07-flabby",
  "level": "2",
  "url": "sh-c07.html#sh-c07-flabby",
  "type": "Definition",
  "number": "7.4",
  "title": "",
  "body": " flabby sheaf  flasque sheaf  acyclic sheaf   A sheaf is flabby , or flasque , if every restriction for open sets is surjective. It is equivalent to require surjectivity of for every open . A sheaf is acyclic for sections on if its positive right derived functors for vanish.   "
},
{
  "id": "sh-c07-injective-flabby",
  "level": "2",
  "url": "sh-c07.html#sh-c07-injective-flabby",
  "type": "Proposition",
  "number": "7.5",
  "title": "",
  "body": "  Every injective sheaf is flabby. Restrictions and direct images of flabby sheaves are flabby. Products of flabby sheaves are flabby.    Write for the open extension by zero of the constant sheaf on . A section of on is a morphism . For , the natural map is a monomorphism, as one sees on stalks. Injectivity of therefore makes surjective. The other assertions follow from the formulas for restriction, direct image, and products of sheaves.   "
},
{
  "id": "sh-c07-flabby-lifting",
  "level": "2",
  "url": "sh-c07.html#sh-c07-flabby-lifting",
  "type": "Lemma",
  "number": "7.6",
  "title": "",
  "body": "  If is exact and is flabby, then is surjective for every open . If is also flabby, then is flabby.    Fix . Order the pairs , where is open and lifts , by extension of sections. A chain has an upper bound by the sheaf axiom. Choose a maximal pair. If , the epimorphism provides a lift on an open neighborhood of . On , the difference comes from a section of . Extend that section to by flabbiness and add its image to . The two lifts now agree on the intersection, so they glue on , contradicting maximality. Thus .  If is flabby, lift a section of to , extend it to , and take its image in .   "
},
{
  "id": "sh-c07-flabby-acyclic",
  "level": "2",
  "url": "sh-c07.html#sh-c07-flabby-acyclic",
  "type": "Proposition",
  "number": "7.7",
  "title": "",
  "body": "  A flabby sheaf is acyclic for on every open , and for under every continuous map . Consequently, a bounded below resolution by flabby sheaves computes these right derived functors.    Embed a flabby sheaf into an injective . Its cokernel is flabby by , and taking sections on any open preserves the resulting short exact sequence. Repeating gives an injective resolution whose successive kernels are flabby. Its section complex is exact in positive degrees. The same argument applies to , since its sections on are sections on . The assertion about resolutions is the acyclic resolution theorem.   "
},
{
  "id": "sh-c07-hom-injective",
  "level": "2",
  "url": "sh-c07.html#sh-c07-hom-injective",
  "type": "Proposition",
  "number": "7.8",
  "title": "",
  "body": "  For every sheaf and injective sheaf , the sheaf is flabby. If is flat, it is injective.    For , use the monomorphism It is a monomorphism on stalks, with the identity on and zero source outside . Applying Hom into extends every morphism to . These Hom modules are the section modules of the internal Hom sheaf. If is flat, the tensor–Hom adjunction gives Both tensoring with and Hom into are exact, so the internal Hom is injective.   "
},
{
  "id": "sh-c07-flabby-examples",
  "level": "2",
  "url": "sh-c07.html#sh-c07-flabby-examples",
  "type": "Example",
  "number": "7.9",
  "title": "",
  "body": "  For the inclusion and a module , the sheaf is flabby. If , the constant sheaf on the real line is not flabby.    The sections of on an open are when and zero otherwise, so all restriction maps are surjective. No closedness assumption on is needed. On the real line, a global locally constant function is constant. On the union of two disjoint nonempty intervals there is a locally constant function taking the values zero and one. It does not extend globally. Flabbiness is stronger than being acyclic on the whole space. For example, the constant sheaf on the real line is acyclic; that uses the comparison theorem of , not the preceding elementary argument.   "
},
{
  "id": "sh-c07-godement",
  "level": "2",
  "url": "sh-c07.html#sh-c07-godement",
  "type": "Definition",
  "number": "7.10",
  "title": "",
  "body": " Godement resolution   For a sheaf , define Restrictions discard the components outside the smaller open set. The map sends a section to its family of germs. Set , , and The differential is the quotient onto followed by its germ embedding. The augmented complex is the Godement resolution used here.   "
},
{
  "id": "sh-c07-godement-properties",
  "level": "2",
  "url": "sh-c07.html#sh-c07-godement-properties",
  "type": "Proposition",
  "number": "7.11",
  "title": "",
  "body": "  The functors , , and are exact. The map is a monomorphism, each is flabby, and is a functorial resolution.    The rule defining is a sheaf: compatible families of assignments of germs glue component by component. It is flabby because an assignment on a smaller open set extends by assigning zero at the remaining points. A section with all germs zero is zero, so is injective. Stalks are exact functors, and products of modules are exact. It follows that takes a short exact sequence to a sequence exact on sections on every open, hence to a short exact sequence of sheaves. The snake lemma applied to the natural monomorphisms proves exactness of . Iteration proves exactness of . Finally the short exact sequences show directly that the augmented complex is exact.   "
},
{
  "id": "sh-c07-godement-complex",
  "level": "2",
  "url": "sh-c07.html#sh-c07-godement-complex",
  "type": "Proposition",
  "number": "7.12",
  "title": "",
  "body": "  Let be a bounded below complex of sheaves. Apply to each term and use the double complex , with total differential . Its total complex is bounded below and flabby in every degree, and the augmentation is a quasi-isomorphism. Applying or to this total complex computes the corresponding derived functor of .    If for , only finitely many pairs with contribute to any fixed total degree. Thus every term of the total complex is a finite direct sum of flabby sheaves. Filtering the augmented double complex in the resolution direction and using exactness of each Godement resolution proves that its augmentation is a quasi-isomorphism. The acyclic resolution theorem and then apply.   "
},
{
  "id": "sh-c07-kinjective",
  "level": "2",
  "url": "sh-c07.html#sh-c07-kinjective",
  "type": "Definition",
  "number": "7.13",
  "title": "",
  "body": " K-injective complex   A complex is K-injective if for every acyclic complex . Equivalently, the complex of module homomorphisms is acyclic for every such . The equivalence uses all shifts of . A K-injective resolution is a quasi-isomorphism with K-injective.   "
},
{
  "id": "sh-c07-kinjective-existence",
  "level": "2",
  "url": "sh-c07.html#sh-c07-kinjective-existence",
  "type": "Theorem",
  "number": "7.14",
  "title": "",
  "body": "  Every complex in admits a K-injective resolution whose terms are injective sheaves. The resolution may be chosen functorially in complexes.    The category is Grothendieck by . Apply the existence theorem for K-injective resolutions in a Grothendieck abelian category. A precise sheaf formulation is Stacks, §20.28 ; see also for the unbounded resolution methods. This existence theorem is the general homological algebra used here.   "
},
{
  "id": "sh-c07-unbounded-warning",
  "level": "2",
  "url": "sh-c07.html#sh-c07-unbounded-warning",
  "type": "Example",
  "number": "7.15",
  "title": "",
  "body": "  An unbounded acyclic complex can have every term injective and flat, while failing to be K-injective and K-flat. This happens already when is a point.    Take a field and . The pairing taking to the coefficient of in identifies with as a module over itself. The latter is injective, since Hom into it is naturally , an exact functor. Consider the complex with a copy of in every degree and every differential multiplication by . It is acyclic because both the kernel and image are .  If were K-injective, its identity would be null-homotopic. Every component of is multiplication by an element in , so it cannot equal the identity. It is also not K-flat. Indeed, an acyclic K-flat complex has acyclic tensor product with every module: resolve the module by a bounded above flat complex and compare the two tensor products using K-flatness in each variable. But has a copy of in every degree and zero differential.   "
},
{
  "id": "sh-c07-derived-directimage",
  "level": "2",
  "url": "sh-c07.html#sh-c07-derived-directimage",
  "type": "Proposition",
  "number": "7.16",
  "title": "",
  "body": " derived direct image   For every continuous , direct image preserves K-injective complexes. Restriction to an open set also preserves K-injective complexes. The prescriptions define exact functors on unbounded derived categories They extend the usual bounded below right derived functors. Moreover , and for there is a natural isomorphism     If is acyclic on , exactness of inverse image and the adjunction on homotopy categories give For restriction, use its exact left adjoint in the same argument. Maps into a K-injective complex in the derived category are already computed in the homotopy category. This proves independence of the resolution, as well as the derived adjunction. Finally, is K-injective, so both sides of the composition formula are represented by the same complex . Applying this to the map to a point gives the assertion about derived sections.   "
},
{
  "id": "sh-c07-kflat",
  "level": "2",
  "url": "sh-c07.html#sh-c07-kflat",
  "type": "Definition",
  "number": "7.17",
  "title": "",
  "body": " K-flat complex   A complex is K-flat if is acyclic for every acyclic complex of sheaves. Tensor totalization always uses direct sums: Here has degree . A K-flat resolution is a quasi-isomorphism with K-flat.   "
},
{
  "id": "sh-c07-kflat-properties",
  "level": "2",
  "url": "sh-c07.html#sh-c07-kflat-properties",
  "type": "Proposition",
  "number": "7.18",
  "title": "",
  "body": "  A complex is K-flat if and only if every stalk complex is K-flat over . Every bounded above complex of flat sheaves is K-flat. Every complex admits a K-flat resolution with flat terms. Inverse image preserves K-flat complexes.    If the stalk complexes are K-flat, take stalks of . Stalks commute with tensor products and direct sums and detect acyclicity. Conversely, for an acyclic complex of modules, is an acyclic complex of sheaves and its stalk at is . Testing K-flatness against proves that is K-flat. The bounded above assertion follows from the corresponding module theorem and the stalk criterion for flat sheaves in . Existence is the unbounded flat resolution theorem, in the form Stacks, Lemma 20.26.12 . Its construction uses the flat generators of . Finally, , so inverse image preserves K-flatness.   "
},
{
  "id": "sh-c07-derived-tensor-hom",
  "level": "2",
  "url": "sh-c07.html#sh-c07-derived-tensor-hom",
  "type": "Definition",
  "number": "7.19",
  "title": "",
  "body": " derived tensor product  derived internal Hom   For , define the derived tensor product by using a K-flat resolution . Define the derived internal Hom by using a K-injective resolution . The Hom complex has terms and differential The product is a product of sheaves. These constructions give bifunctors on the unbounded derived categories, covariant in both tensor factors and contravariant in the first Hom variable.   "
},
{
  "id": "sh-c07-derived-closed",
  "level": "2",
  "url": "sh-c07.html#sh-c07-derived-closed",
  "type": "Proposition",
  "number": "7.20",
  "title": "",
  "body": "  The derived tensor product is associative and symmetric, with unit and symmetry sign on degrees . There is a natural adjunction Restriction to an open set commutes with both bifunctors. Inverse image commutes with derived tensor products.    K-flatness makes tensoring preserve quasi-isomorphisms, by applying tensor to their acyclic cones. For internal Hom, restriction of a K-injective complex is K-injective. Thus, if is a quasi-isomorphism, the complex is acyclic for every open . It follows that internal Hom takes the quasi-isomorphism to a quasi-isomorphism. A quasi-isomorphism between K-injective targets is a homotopy equivalence, which proves independence in the second variable.  Choose K-flat and K-injective. The complex is K-injective: a map into it from an acyclic corresponds, by the tensor–Hom adjunction on complexes, to a map , which is null-homotopic. Consequently the same adjunction on complexes computes both sides of the derived adjunction. Associativity and symmetry follow by choosing K-flat resolutions of the factors; tensor products of K-flat complexes are K-flat. Restriction preserves the chosen types of resolutions, and inverse image preserves K-flat complexes and ordinary tensor products.   "
},
{
  "id": "sh-c08",
  "level": "1",
  "url": "sh-c08.html",
  "type": "Chapter",
  "number": "8",
  "title": "Cohomology, hypercohomology, and products",
  "body": " Cohomology, hypercohomology, and products   Derived sections and derived direct image retain the information lost when sections fail to lift globally. Their cohomology groups and sheaves can be computed by the resolutions of . This chapter relates the resulting constructions: cohomology on open sets, higher direct images, hypercohomology, Leray spectral sequences, local and global Ext, and cup products. The total derived functors exist without boundedness assumptions; the spectral sequences below are stated under bounded below hypotheses that ensure finite filtrations in each total degree.    Derived sections and connecting morphisms   sheaf cohomology  hypercohomology   For and an open set , define For a sheaf placed in degree zero, these are its sheaf cohomology groups . For a complex they are also called hypercohomology groups . We use the same notation in both cases. If is a K-injective resolution on , then     In particular, and for . The object is a complex of -modules up to quasi-isomorphism. Its cohomology is a family of modules. The cohomology sheaves are objects on ; they are different from both of these constructions. Some references reserve for hypercohomology and write only on sheaves. Our notation includes both and makes explicit.    A distinguished triangle gives a natural long exact sequence For a short exact sequence , the sequence begins These sequences commute with restriction to a smaller open set.    The functor is exact as a functor of triangulated categories. Take cohomology of its image triangle. Restriction is induced by the maps of section complexes , so it commutes with the connecting maps.    The equation says exactly that lifts to . A sheaf epimorphism ensures that has lifts on a covering, so its obstruction class restricts to zero on that covering. If are local lifts on , the differences on lie in and measure whether the lifts can be modified to glue. The sign in this description agrees with the Čech differential fixed in .    For a sheaf of -modules , the groups agree with those obtained by regarding as a sheaf of abelian groups. The same assertion holds for bounded below complexes, and for higher direct images of sheaves or bounded below complexes. The identifications commute with restriction and connecting morphisms.    Choose an injective resolution in . Its terms are flabby, and remain flabby after forgetting the module structure. They are therefore acyclic for sections in the abelian-sheaf category as well. The same resolution computes both cohomologies. For a bounded below complex use a bounded below injective resolution and the acyclic resolution theorem. Taking sections on inverse images of open sets proves the assertion for higher direct images.    This comparison does not say that an injective sheaf of -modules is injective after forgetting coefficients. Flabbiness provides the needed acyclicity. See Stacks, Lemma 20.13.3 . We only use coefficient forgetting in the bounded below range just proved.    For a continuous map and , the derived unit gives a natural morphism These morphisms compose under composition of maps. A morphism therefore induces maps .    Apply to the unit , and use , proved below. Compatibility with composition is the compatibility of the units of the composed adjunctions.    For an inclusion of an open set this is ordinary restriction in cohomology. For constant coefficients it gives the usual contravariance of in . For a general sheaf on , a map to alone does not specify a sheaf on from which to pull back; the coefficient morphism belongs to the data.    Higher direct images and locality   higher direct image   For a sheaf on , its higher direct images are Thus . For a complex , we write when it is useful to distinguish cohomology of a total derived functor from its restriction to sheaves.      For , the sheaf is the sheaf associated to the presheaf Consequently, for , In particular, for a sheaf and , the presheaf has zero associated sheaf.    Take a K-injective resolution . The complex of sections of on is , which computes the stated hypercohomology because restriction preserves K-injectives. Cohomology of a complex of sheaves is the sheafification of its cohomology presheaf. Taking stalks gives the formula, since filtered colimits of modules are exact. For and a sheaf , the positive cohomology sheaves are zero.    Thus every positive-degree cohomology class becomes zero on some neighborhood of each point. This is a local assertion about a given class, rather than a claim that every sufficiently small open set has no positive cohomology. Different classes may require different neighborhoods. The stalk formula involves neighborhoods of the whole inverse image of . Replacing it by requires a base change theorem and is not valid for an arbitrary continuous map.    Let be open. On , the positive sheaves vanish, but their stalks on the boundary can be nonzero.    For , take neighborhoods contained in . The stalk formula is then the stalk at of the positive cohomology presheaf of , hence zero. At a boundary point, the formula is instead For instance, the topology of punctured neighborhoods can contribute to this colimit. This formula explains why , unlike , need not be exact. A computation of a particular punctured neighborhood requires the comparison results of .      The two hypercohomology spectral sequences  For a bounded below complex, there are two natural ways to separate its differential from the operation of taking sections. One begins with its terms, and the other with its cohomology sheaves. We keep the different first pages visible.    Let be a complex with for . There is a natural spectral sequence For , there is also a natural spectral sequence In each case has bidegree , and the abutment in each degree has a finite filtration with successive quotients .    For the first sequence, use the Godement double complex from . Taking cohomology in the resolution direction gives . The induced first differential is the one induced by . The total complex computes . Each diagonal is finite, which proves the claimed convergence.  For the second sequence, apply derived sections to the canonical truncation triangles The associated exact couple, with the usual reindexing, has the displayed page. Boundedness below and the absence of negative cohomology for sections of a sheaf leave only finitely many terms in each total degree. The exact-couple construction and finite-filtration convergence are the general results of the spectral sequence chapter . A sheaf reference with these two filtrations is Stacks, Examples 20.29.3–20.29.4 .      If is bounded below and each is acyclic for sections on , the natural map is a quasi-isomorphism. The analogous assertion holds for and bounded below complexes of -acyclic sheaves.    The first spectral sequence is concentrated in the row . The comparison map induces the resulting isomorphisms on cohomology. The proof for direct image is the same acyclic resolution theorem.    For a two-term complex in degrees zero and one, the term spectral sequence can be read as the exact sequence In particular there is a natural short exact sequence This sequence need not split naturally. Knowing the two surviving associated graded modules is not the same as specifying the abutment with its extension data.  The cohomology-sheaf spectral sequence expresses a different issue. Even when is easy to describe, the differential and extension data of may produce nonzero higher differentials. Replacing by the direct sum of its shifted cohomology sheaves would discard this information. Neither spectral sequence is asserted to converge for every unbounded complex. Finite cohomological dimension or additional completeness and convergence conditions can extend the range. The unbounded existence of itself does not supply those conditions.    Composition and the Leray spectral sequence   Leray spectral sequence   For every continuous there is a natural isomorphism on unbounded derived categories If , there is a convergent spectral sequence For a sheaf , this is the first-quadrant sequence . For , there is likewise a spectral sequence of sheaves     Choose K-injective. By , the complex is K-injective, and . This proves the derived comparison without boundedness. In the bounded below case, apply the cohomology-sheaf spectral sequence to . For the relative statement use the corresponding spectral sequence for and the comparison . See Stacks, §20.13 .    For a sheaf , the low-degree terms give The middle arrow sends a class to its family of local images in the higher direct image. Thus a class coming from restricts to zero in that family, while the next arrow measures the obstruction to lifting a family to a global class. No identification of higher direct image stalks with fiber cohomology is needed for this sequence.    If for every , then . If for every and , then . These are the corresponding edge isomorphisms.   In the first case only the row survives; in the second only the column survives.    If is a closed inclusion, then for every sheaf on .  The functor is exact: its stalks are on and zero off . Hence its positive derived functors vanish, and the first edge isomorphism applies. The same conclusion for complexes follows directly from the derived composition formula.     Local and global Ext   global derived Hom  Ext sheaf   For , choose a K-injective resolution and define Set . For sheaves , their Ext sheaves are Here , and the negative Ext sheaves vanish.      For arbitrary , there is a natural isomorphism In particular, For sheaves , there is a first-quadrant spectral sequence     Choose K-flat and K-injective. The complex is K-injective by the tensor–Hom argument in . Its sections therefore compute the left side. They equal , which also computes the right side because is K-injective. For the second assertion, internal Hom from the unit is the identity, both ordinarily and derivatively. For sheaves , the internal derived Hom is bounded below: an ordinary injective resolution of represents it in nonnegative degrees. Apply .    The Ext sheaf is the sheafification of the presheaf . This follows by computing with an injective resolution whose restriction remains injective. Its stalk is a colimit of these extension groups over neighborhoods. It must not be replaced without hypotheses by . Even for ordinary internal Hom, a morphism between stalks need not extend to a morphism on one neighborhood. Finite local presentations or finite locally free resolutions provide familiar sufficient conditions for some stalk comparisons; unrestricted sheaves do not have those finiteness properties. See Stacks, §20.43 and §20.44 .  The beginning of the local-to-global sequence is An extension class maps to its local extension classes. The kernel consists of extensions that split locally, with the differences between local splittings measured by the Hom sheaf. This will be used for torsors and extensions in .   If is locally free of finite rank, then    Locally, is a finite power of the identity functor, hence exact. The positive Ext sheaves vanish, so the spectral sequence has only its bottom row. This does not make projective in : taking global sections of its Hom sheaf can still fail to be exact. In particular, the tensor unit is flat and locally free of rank one, but is projective only when is exact.      Cup products   cup product   There is a natural morphism for all . It is associative, unital, and compatible with the symmetries of the derived tensor products. It defines products A morphism of sheaves gives, by composition, products .    Let . The inverse image is exact and symmetric monoidal. Tensor the counit morphisms and , and take their adjoint under . This gives the displayed map. Associativity, the unit, and symmetry follow from the corresponding identities for tensor and the counit. For a pairing of sheaves, use the natural augmentation and then the given pairing. This requires no flatness assumption on or .    Equivalently, a class in is a morphism . Tensoring it with a morphism gives a morphism , which is their cup product. This description also specifies products for negative degrees of complexes. It makes the sign under exchange of factors explicit: after the symmetry , the product changes by .  For the multiplication of , the groups form a unital graded-commutative -algebra. An odd-degree class satisfies ; graded commutativity alone does not imply over an arbitrary coefficient ring. The pullback maps of preserve these products. The Čech formula for them appears in . See Stacks, §20.31 .  The displayed map of derived sections is a product map, not a Künneth isomorphism. Its construction gives no claim that the cohomology of a tensor product is determined by ordinary tensor products of cohomology groups. Torsion and the geometry of the space can both affect that question.   "
},
{
  "id": "sh-c08-cohomology",
  "level": "2",
  "url": "sh-c08.html#sh-c08-cohomology",
  "type": "Definition",
  "number": "8.1",
  "title": "",
  "body": " sheaf cohomology  hypercohomology   For and an open set , define For a sheaf placed in degree zero, these are its sheaf cohomology groups . For a complex they are also called hypercohomology groups . We use the same notation in both cases. If is a K-injective resolution on , then    "
},
{
  "id": "sh-c08-longexact",
  "level": "2",
  "url": "sh-c08.html#sh-c08-longexact",
  "type": "Proposition",
  "number": "8.2",
  "title": "",
  "body": "  A distinguished triangle gives a natural long exact sequence For a short exact sequence , the sequence begins These sequences commute with restriction to a smaller open set.    The functor is exact as a functor of triangulated categories. Take cohomology of its image triangle. Restriction is induced by the maps of section complexes , so it commutes with the connecting maps.   "
},
{
  "id": "sh-c08-coefficients",
  "level": "2",
  "url": "sh-c08.html#sh-c08-coefficients",
  "type": "Proposition",
  "number": "8.3",
  "title": "",
  "body": "  For a sheaf of -modules , the groups agree with those obtained by regarding as a sheaf of abelian groups. The same assertion holds for bounded below complexes, and for higher direct images of sheaves or bounded below complexes. The identifications commute with restriction and connecting morphisms.    Choose an injective resolution in . Its terms are flabby, and remain flabby after forgetting the module structure. They are therefore acyclic for sections in the abelian-sheaf category as well. The same resolution computes both cohomologies. For a bounded below complex use a bounded below injective resolution and the acyclic resolution theorem. Taking sections on inverse images of open sets proves the assertion for higher direct images.   "
},
{
  "id": "sh-c08-pullback",
  "level": "2",
  "url": "sh-c08.html#sh-c08-pullback",
  "type": "Proposition",
  "number": "8.4",
  "title": "",
  "body": "  For a continuous map and , the derived unit gives a natural morphism These morphisms compose under composition of maps. A morphism therefore induces maps .    Apply to the unit , and use , proved below. Compatibility with composition is the compatibility of the units of the composed adjunctions.   "
},
{
  "id": "sh-c08-higherdirectimage",
  "level": "2",
  "url": "sh-c08.html#sh-c08-higherdirectimage",
  "type": "Definition",
  "number": "8.5",
  "title": "",
  "body": " higher direct image   For a sheaf on , its higher direct images are Thus . For a complex , we write when it is useful to distinguish cohomology of a total derived functor from its restriction to sheaves.   "
},
{
  "id": "sh-c08-directimage-local",
  "level": "2",
  "url": "sh-c08.html#sh-c08-directimage-local",
  "type": "Proposition",
  "number": "8.6",
  "title": "",
  "body": "  For , the sheaf is the sheaf associated to the presheaf Consequently, for , In particular, for a sheaf and , the presheaf has zero associated sheaf.    Take a K-injective resolution . The complex of sections of on is , which computes the stated hypercohomology because restriction preserves K-injectives. Cohomology of a complex of sheaves is the sheafification of its cohomology presheaf. Taking stalks gives the formula, since filtered colimits of modules are exact. For and a sheaf , the positive cohomology sheaves are zero.   "
},
{
  "id": "sh-c08-open-directimage",
  "level": "2",
  "url": "sh-c08.html#sh-c08-open-directimage",
  "type": "Example",
  "number": "8.7",
  "title": "",
  "body": "  Let be open. On , the positive sheaves vanish, but their stalks on the boundary can be nonzero.    For , take neighborhoods contained in . The stalk formula is then the stalk at of the positive cohomology presheaf of , hence zero. At a boundary point, the formula is instead For instance, the topology of punctured neighborhoods can contribute to this colimit. This formula explains why , unlike , need not be exact. A computation of a particular punctured neighborhood requires the comparison results of .   "
},
{
  "id": "sh-c08-hypercohomology",
  "level": "2",
  "url": "sh-c08.html#sh-c08-hypercohomology",
  "type": "Theorem",
  "number": "8.8",
  "title": "",
  "body": "  Let be a complex with for . There is a natural spectral sequence For , there is also a natural spectral sequence In each case has bidegree , and the abutment in each degree has a finite filtration with successive quotients .    For the first sequence, use the Godement double complex from . Taking cohomology in the resolution direction gives . The induced first differential is the one induced by . The total complex computes . Each diagonal is finite, which proves the claimed convergence.  For the second sequence, apply derived sections to the canonical truncation triangles The associated exact couple, with the usual reindexing, has the displayed page. Boundedness below and the absence of negative cohomology for sections of a sheaf leave only finitely many terms in each total degree. The exact-couple construction and finite-filtration convergence are the general results of the spectral sequence chapter . A sheaf reference with these two filtrations is Stacks, Examples 20.29.3–20.29.4 .   "
},
{
  "id": "sh-c08-acyclic-complex",
  "level": "2",
  "url": "sh-c08.html#sh-c08-acyclic-complex",
  "type": "Corollary",
  "number": "8.9",
  "title": "",
  "body": "  If is bounded below and each is acyclic for sections on , the natural map is a quasi-isomorphism. The analogous assertion holds for and bounded below complexes of -acyclic sheaves.    The first spectral sequence is concentrated in the row . The comparison map induces the resulting isomorphisms on cohomology. The proof for direct image is the same acyclic resolution theorem.   "
},
{
  "id": "sh-c08-leray",
  "level": "2",
  "url": "sh-c08.html#sh-c08-leray",
  "type": "Theorem",
  "number": "8.10",
  "title": "Leray spectral sequence.",
  "body": " Leray spectral sequence   For every continuous there is a natural isomorphism on unbounded derived categories If , there is a convergent spectral sequence For a sheaf , this is the first-quadrant sequence . For , there is likewise a spectral sequence of sheaves     Choose K-injective. By , the complex is K-injective, and . This proves the derived comparison without boundedness. In the bounded below case, apply the cohomology-sheaf spectral sequence to . For the relative statement use the corresponding spectral sequence for and the comparison . See Stacks, §20.13 .   "
},
{
  "id": "sh-c08-leray-degeneration",
  "level": "2",
  "url": "sh-c08.html#sh-c08-leray-degeneration",
  "type": "Corollary",
  "number": "8.11",
  "title": "",
  "body": "  If for every , then . If for every and , then . These are the corresponding edge isomorphisms.   In the first case only the row survives; in the second only the column survives.  "
},
{
  "id": "sh-c08-closedembedding",
  "level": "2",
  "url": "sh-c08.html#sh-c08-closedembedding",
  "type": "Example",
  "number": "8.12",
  "title": "",
  "body": " If is a closed inclusion, then for every sheaf on .  The functor is exact: its stalks are on and zero off . Hence its positive derived functors vanish, and the first edge isomorphism applies. The same conclusion for complexes follows directly from the derived composition formula.  "
},
{
  "id": "sh-c08-ext",
  "level": "2",
  "url": "sh-c08.html#sh-c08-ext",
  "type": "Definition",
  "number": "8.13",
  "title": "",
  "body": " global derived Hom  Ext sheaf   For , choose a K-injective resolution and define Set . For sheaves , their Ext sheaves are Here , and the negative Ext sheaves vanish.   "
},
{
  "id": "sh-c08-ext-global",
  "level": "2",
  "url": "sh-c08.html#sh-c08-ext-global",
  "type": "Proposition",
  "number": "8.14",
  "title": "",
  "body": "  For arbitrary , there is a natural isomorphism In particular, For sheaves , there is a first-quadrant spectral sequence     Choose K-flat and K-injective. The complex is K-injective by the tensor–Hom argument in . Its sections therefore compute the left side. They equal , which also computes the right side because is K-injective. For the second assertion, internal Hom from the unit is the identity, both ordinarily and derivatively. For sheaves , the internal derived Hom is bounded below: an ordinary injective resolution of represents it in nonnegative degrees. Apply .   "
},
{
  "id": "sh-c08-locallyfree-ext",
  "level": "2",
  "url": "sh-c08.html#sh-c08-locallyfree-ext",
  "type": "Example",
  "number": "8.15",
  "title": "",
  "body": " If is locally free of finite rank, then    Locally, is a finite power of the identity functor, hence exact. The positive Ext sheaves vanish, so the spectral sequence has only its bottom row. This does not make projective in : taking global sections of its Hom sheaf can still fail to be exact. In particular, the tensor unit is flat and locally free of rank one, but is projective only when is exact.   "
},
{
  "id": "sh-c08-cup",
  "level": "2",
  "url": "sh-c08.html#sh-c08-cup",
  "type": "Proposition",
  "number": "8.16",
  "title": "",
  "body": " cup product   There is a natural morphism for all . It is associative, unital, and compatible with the symmetries of the derived tensor products. It defines products A morphism of sheaves gives, by composition, products .    Let . The inverse image is exact and symmetric monoidal. Tensor the counit morphisms and , and take their adjoint under . This gives the displayed map. Associativity, the unit, and symmetry follow from the corresponding identities for tensor and the counit. For a pairing of sheaves, use the natural augmentation and then the given pairing. This requires no flatness assumption on or .   "
},
{
  "id": "sh-c09",
  "level": "1",
  "url": "sh-c09.html",
  "type": "Chapter",
  "number": "9",
  "title": "Čech cohomology and descent on open covers",
  "body": " Čech cohomology and descent on open covers   A covering turns the sheaf axiom into an augmented complex. Its degree-zero exactness expresses gluing, and its higher cohomology records obstructions to gluing chosen local data. This complex depends on the covering. We construct its comparison with derived cohomology, prove the acyclic-cover criterion, and distinguish a fixed covering from the limit over refinements. The two-open case gives Mayer–Vietoris without any acyclicity assumption on the open sets.  All covers in this chapter are open covers. We use ordered tuples with repetitions in Čech cochains. This choice makes refinement maps explicit and avoids choosing an order on the index set. The alternating complex used in many textbooks is discussed separately below.    The complex of a covering   Čech complex  Čech cohomology   Let cover , and write . For an abelian or module presheaf , its Čech complex is with differential Its cohomology is denoted . A cochain in the kernel of is a Čech cocycle ; one in the image is a Čech coboundary . The augmentation sends a section to its restrictions.    The terms indexed by empty intersections are zero for a sheaf of modules. The use of a product allows arbitrary families of local sections. Replacing the product by a direct sum would impose a finite-support condition unrelated to the sheaf axiom, even if the cover were locally finite. In degree zero and one the formulas are The restrictions in the second formula are understood. Each term in occurs twice with opposite signs, so .    For a sheaf , the augmentation gives an isomorphism . Conversely, a presheaf is a sheaf if and only if this assertion holds for every covering of every open subset.   A degree-zero cocycle is precisely a family whose restrictions agree on pairwise intersections. The assertion is the existence and uniqueness of their gluing.   With our convention a one-cocycle automatically satisfies and , by evaluating its cocycle equation on repeated indices. No such conditions are imposed on arbitrary cochains. If the index set is ordered, one may instead use products over and extend by alternation, setting repeated-index components to zero. This alternating complex has the same cohomology, by an integral normalization argument without division by factorials. We use it for small calculations. See Stacks, §20.23 .    If one member of equals , the augmented Čech complex is contractible, for every presheaf .    Choose with and define , including projection onto the component in degree zero. All required restriction maps are identities on the corresponding intersections. Expansion of cancels the terms containing the inserted index and leaves . Thus for .    In particular the one-member cover has no positive Čech cohomology. It follows already that an arbitrary fixed cover cannot compute every sheaf cohomology group.    Refinements and their choices   refinement of an open cover   A cover  refines  if each is contained in some . A choice of indices with induces a cochain map The Čech cohomology of the space is with transition maps given by refinements.      The maps on Čech cohomology induced by a refinement are independent of the index choice. They compose under successive refinements, so the colimit in is defined over the preorder of covers.    Let be two choices. For , , set The repeated position contributes both and . Every lies in both corresponding members, so all restrictions make sense. Expanding the two alternating sums gives The interior terms cancel in pairs; the two end terms are the displayed difference. In degree zero the identity reads , which fixes the sign. Thus the maps are homotopic. Composition is equality on cochains when the composite choice is used, and hence is independent of choices on cohomology.    Any two covers have a common refinement by their pairwise intersections. One may restrict to covers that are subsets of the topology of ; these form a set, and are cofinal up to refinement among indexed covers. Thus the displayed colimit is an ordinary filtered colimit of modules. A Čech class in this colimit is zero precisely when its representative becomes a coboundary on some refinement. See Stacks, §20.15 .  The distinction between an index choice and the underlying refinement matters on cochains. The two cochain maps are generally different; it is their homotopy classes and their induced cohomology maps that agree. Likewise a class may survive on a chosen cover and disappear after refinement.    Comparison with derived cohomology    For an injective sheaf , the augmented complex is exact for every open cover.    For an open set , write . Form the augmented chain complex of sheaves with boundary the alternating sum of the maps that delete one index. This complex is exact. Indeed, its stalk at is the augmented chain complex on all tuples of indices whose open sets contain ; choose one such index and insert it at the start to contract that complex. Stalks commute with the direct sums used here.  Apply the exact contravariant functor . Since , the resulting augmented cochain complex is the one in the statement. Injectivity is used for exactness of Hom, rather than for any projectivity assertion about the sheaves .      For every sheaf , there are natural comparison maps The first is a morphism in . There is a first-quadrant spectral sequence where is the presheaf . Its differential has bidegree . The comparison is compatible with morphisms of sheaves, refinements, and pullback together with a coefficient morphism.    Choose an injective resolution and use the double complex By , every augmented horizontal row is exact. Hence the augmentation is a quasi-isomorphism. There is also a map . Composing it in the derived category with the inverse of the augmentation gives the comparison.  Restriction of an injective sheaf to an open set is injective. Taking vertical cohomology in therefore gives the displayed page. Products of modules are exact, so vertical cohomology commutes with the products. The next differential is the Čech differential of the cohomology presheaf. Every total degree has finitely many possible , which gives convergence with a finite filtration. Comparison of injective resolutions proves independence of the choice. Refinement maps commute with the augmentations, and the same construction with a map of resolutions proves the functoriality assertions. See Stacks, Lemmas 20.11.2 and 20.11.5 and Lemma 20.15.1 . The underline marks a presheaf. For , has zero associated sheaf by , but its values on intersections can be nonzero. Sheafifying it on the page would incorrectly force degeneration for every cover.      For every fixed cover there is an exact sequence In particular the degree-one fixed-cover comparison is injective. Passing to all refinements gives isomorphisms for , and an injection for .    The five-term sequence is the low-degree sequence of . To pass to refinements, note that an element of is a family of local degree-one classes. Each class vanishes on a cover of its open set, because the associated sheaf of is zero. Refining by all those smaller sets kills the family. Its colimit is therefore zero. Filtered colimits of modules are exact, which proves the last assertions. The degree-zero assertion is already the sheaf axiom.    One can also see surjectivity in degree one directly. Represent a derived class by a closed section . Locally, with . Then belongs to and is a Čech one-cocycle. In the total complex, , so its comparison class is . The sign here concerns the realization of a Čech class in this particular total complex. The opposite differences map to . In describing a connecting morphism by local lifts, one must also fix the convention for the extension class and the comparison. The formula itself remains fixed. This is the local lifting construction behind the torsor classification in .    Acyclic covers and computations   acyclic cover   A cover is acyclic for if for every and every nonempty finite intersection of members of the cover. This condition depends on both the cover and the sheaf.      If is acyclic for , the comparison maps are isomorphisms for all . More generally, if is bounded below and every term is acyclic for sections on every finite intersection, then is a quasi-isomorphism.    For a sheaf, the positive rows of the page in vanish. The remaining row is , which proves the assertion. For a complex, apply a functorial Godement resolution termwise. Compare the total complex of the resulting Čech double complexes with the Čech complex of . On each intersection, the acyclic resolution theorem identifies the section complex of with its derived sections. Taking the Čech products preserves quasi-isomorphisms of these module complexes. The remaining totalizations converge because the Čech and resolution degrees are nonnegative and is bounded below. This proves the comparison. The sheaf version is also Stacks, Lemma 20.11.6 .    No separation or local finiteness assumption on or the cover occurs in this theorem. The hypothesis is cohomological. A geometrically described good cover becomes useful only after one proves that its intersections are acyclic for the chosen coefficients. Contractibility alone is not a general criterion for arbitrary sheaves. The comparison with locally constant and singular coefficients is established in .    Fix . It is enough to assume to obtain comparison isomorphisms in degrees . If the vanishing is known only for , the comparison is an isomorphism for and injective for .    In the spectral sequence, all positive-row terms below the stated diagonal are zero already on . An incoming differential to has source , of total degree . Those sources vanish in the asserted range, and no differential leaves the bottom row for . Thus the bottom-row edge map is injective through degree . To make it surjective, the other associated graded pieces of the abutment in that degree must also vanish. They do vanish under the hypothesis including the diagonal. Below degree they vanish under either hypothesis.    This finite-degree form can reduce the work in a low-degree calculation. To compute , for example, vanishing of is sufficient; one need not establish all higher cohomology groups on every intersection. To compute by the same criterion, one checks on pairwise intersections and on the individual members. The full acyclic-cover condition is convenient when one wants all degrees or a comparison of complexes.    Suppose , and is acyclic on , , and . Then  and for . The map is .    Use the alternating complex for the two-member cover. It has only degrees zero and one. The acyclic-cover theorem identifies its cohomology with derived cohomology.    For a circle covered by two arcs whose intersection has two components, the constant sheaf has section modules , , and . The map is , with cokernel . The acyclicity needed for this computation is supplied in , and the resulting class is discussed in . Using the constant presheaf, which assigns only one copy of to the disconnected intersection, would give the wrong complex.  The same example, for , shows that the cover has while . A sufficiently fine acyclic cover detects the class. A single cover and the colimit over covers must therefore be distinguished even in degree one.  There are useful topological hypotheses under which all-cover Čech cohomology agrees with derived cohomology in every degree. For example, this holds for every abelian sheaf on a compact Hausdorff space; see Stacks, Lemma 20.16.2 . The refinement argument for that theorem uses the stated topological hypotheses. For the arbitrary spaces of this note, our general comparison is the spectral sequence and the low-degree result above. For an actual computation in higher degree we will verify an acyclic cover or apply an appropriate comparison theorem.    Mayer–Vietoris without acyclic intersections   Mayer–Vietoris   Let be a union of two open sets. For every there is a natural distinguished triangle where the second map is restriction from minus restriction from . Its long exact sequence includes     Choose a K-injective resolution with injective terms. In each degree, the sheaf axiom gives exactness at the first two positions of The last map is surjective because every term of is flabby: a section on the intersection extends to . This is a short exact sequence of complexes, even when is unbounded. Restriction preserves K-injectives, so its three complexes represent the derived sections stated in the theorem. The triangle and long exact sequence follow.    The theorem uses the cohomology of the open sets and the intersection in every degree. In contrast, the elementary two-term Čech complex uses only their ordinary sections. Its replacement of derived sections by ordinary sections is justified by the acyclic-cover hypothesis, not by the Mayer–Vietoris theorem itself. This distinction explains the additional rows of the Čech comparison spectral sequence.  The boundary can be calculated from the proof. Represent a class on by a cocycle . Choose a pair of degree- sections with . Their differential restricts to zero under the difference map, so it is the image of a unique global section . This section is closed and represents . Changing the lift or the cocycle changes by a coboundary. This is the connecting-map construction for a short exact sequence of complexes with our difference convention.  The argument also works after taking sections on inverse images of opens of a target space, giving the relative Mayer–Vietoris sequence for higher direct images. A reference for the classical sheaf statement and its relative form is Stacks, §20.8 .    Products and the scope of the comparison    A pairing gives a product on Čech cochains by It satisfies and induces Under the comparison maps to derived cohomology this is the cup product of . Refinement maps preserve the products.    Expand the alternating sum on the union of the front and back tuples. The terms deleting an index before the shared vertex give ; those after it give . The two terms at the shared vertex cancel. This proves the differential identity. Restriction of tuples commutes with the formula, proving compatibility with refinement. Comparison with the derived product follows by applying the same front-and-back diagonal to the augmented Čech resolution and passing to resolutions of the coefficients; it is the Alexander–Whitney comparison. A detailed comparison with the derived cup product is Stacks, Lemma 20.31.4 .    For a sheaf of commutative algebras this product is associative on cochains. It is generally not graded commutative on cochains; graded commutativity is a cohomology assertion with a homotopy behind it. When an acyclic cover computes derived cohomology, its Čech classes therefore compute the cohomology algebra as well as the individual groups.  For a bounded below complex, the total Čech degree is the sum of the covering degree and the complex degree, and the differential is on covering degree . For a genuinely unbounded complex, each diagonal can be infinite. The bounded below comparison proof does not authorize changing the totalization to a product, or treating an unbounded complex of acyclic terms as a resolution. Unbounded Čech constructions require additional convergence arguments; K-injective derived sections remain the definition in that range.   "
},
{
  "id": "sh-c09-cech-definition",
  "level": "2",
  "url": "sh-c09.html#sh-c09-cech-definition",
  "type": "Definition",
  "number": "9.1",
  "title": "",
  "body": " Čech complex  Čech cohomology   Let cover , and write . For an abelian or module presheaf , its Čech complex is with differential Its cohomology is denoted . A cochain in the kernel of is a Čech cocycle ; one in the image is a Čech coboundary . The augmentation sends a section to its restrictions.   "
},
{
  "id": "sh-c09-degreezero",
  "level": "2",
  "url": "sh-c09.html#sh-c09-degreezero",
  "type": "Proposition",
  "number": "9.2",
  "title": "",
  "body": "  For a sheaf , the augmentation gives an isomorphism . Conversely, a presheaf is a sheaf if and only if this assertion holds for every covering of every open subset.   A degree-zero cocycle is precisely a family whose restrictions agree on pairwise intersections. The assertion is the existence and uniqueness of their gluing.  "
},
{
  "id": "sh-c09-trivial-cover",
  "level": "2",
  "url": "sh-c09.html#sh-c09-trivial-cover",
  "type": "Example",
  "number": "9.3",
  "title": "",
  "body": "  If one member of equals , the augmented Čech complex is contractible, for every presheaf .    Choose with and define , including projection onto the component in degree zero. All required restriction maps are identities on the corresponding intersections. Expansion of cancels the terms containing the inserted index and leaves . Thus for .   "
},
{
  "id": "sh-c09-refinement",
  "level": "2",
  "url": "sh-c09.html#sh-c09-refinement",
  "type": "Definition",
  "number": "9.4",
  "title": "",
  "body": " refinement of an open cover   A cover  refines  if each is contained in some . A choice of indices with induces a cochain map The Čech cohomology of the space is with transition maps given by refinements.   "
},
{
  "id": "sh-c09-refinement-homotopy",
  "level": "2",
  "url": "sh-c09.html#sh-c09-refinement-homotopy",
  "type": "Proposition",
  "number": "9.5",
  "title": "",
  "body": "  The maps on Čech cohomology induced by a refinement are independent of the index choice. They compose under successive refinements, so the colimit in is defined over the preorder of covers.    Let be two choices. For , , set The repeated position contributes both and . Every lies in both corresponding members, so all restrictions make sense. Expanding the two alternating sums gives The interior terms cancel in pairs; the two end terms are the displayed difference. In degree zero the identity reads , which fixes the sign. Thus the maps are homotopic. Composition is equality on cochains when the composite choice is used, and hence is independent of choices on cohomology.   "
},
{
  "id": "sh-c09-injective-cech",
  "level": "2",
  "url": "sh-c09.html#sh-c09-injective-cech",
  "type": "Lemma",
  "number": "9.6",
  "title": "",
  "body": "  For an injective sheaf , the augmented complex is exact for every open cover.    For an open set , write . Form the augmented chain complex of sheaves with boundary the alternating sum of the maps that delete one index. This complex is exact. Indeed, its stalk at is the augmented chain complex on all tuples of indices whose open sets contain ; choose one such index and insert it at the start to contract that complex. Stalks commute with the direct sums used here.  Apply the exact contravariant functor . Since , the resulting augmented cochain complex is the one in the statement. Injectivity is used for exactness of Hom, rather than for any projectivity assertion about the sheaves .   "
},
{
  "id": "sh-c09-comparison",
  "level": "2",
  "url": "sh-c09.html#sh-c09-comparison",
  "type": "Theorem",
  "number": "9.7",
  "title": "",
  "body": "  For every sheaf , there are natural comparison maps The first is a morphism in . There is a first-quadrant spectral sequence where is the presheaf . Its differential has bidegree . The comparison is compatible with morphisms of sheaves, refinements, and pullback together with a coefficient morphism.    Choose an injective resolution and use the double complex By , every augmented horizontal row is exact. Hence the augmentation is a quasi-isomorphism. There is also a map . Composing it in the derived category with the inverse of the augmentation gives the comparison.  Restriction of an injective sheaf to an open set is injective. Taking vertical cohomology in therefore gives the displayed page. Products of modules are exact, so vertical cohomology commutes with the products. The next differential is the Čech differential of the cohomology presheaf. Every total degree has finitely many possible , which gives convergence with a finite filtration. Comparison of injective resolutions proves independence of the choice. Refinement maps commute with the augmentations, and the same construction with a map of resolutions proves the functoriality assertions. See Stacks, Lemmas 20.11.2 and 20.11.5 and Lemma 20.15.1 . The underline marks a presheaf. For , has zero associated sheaf by , but its values on intersections can be nonzero. Sheafifying it on the page would incorrectly force degeneration for every cover.   "
},
{
  "id": "sh-c09-lowdegree",
  "level": "2",
  "url": "sh-c09.html#sh-c09-lowdegree",
  "type": "Corollary",
  "number": "9.8",
  "title": "",
  "body": "  For every fixed cover there is an exact sequence In particular the degree-one fixed-cover comparison is injective. Passing to all refinements gives isomorphisms for , and an injection for .    The five-term sequence is the low-degree sequence of . To pass to refinements, note that an element of is a family of local degree-one classes. Each class vanishes on a cover of its open set, because the associated sheaf of is zero. Refining by all those smaller sets kills the family. Its colimit is therefore zero. Filtered colimits of modules are exact, which proves the last assertions. The degree-zero assertion is already the sheaf axiom.   "
},
{
  "id": "sh-c09-acyclic-cover-definition",
  "level": "2",
  "url": "sh-c09.html#sh-c09-acyclic-cover-definition",
  "type": "Definition",
  "number": "9.9",
  "title": "",
  "body": " acyclic cover   A cover is acyclic for if for every and every nonempty finite intersection of members of the cover. This condition depends on both the cover and the sheaf.   "
},
{
  "id": "sh-c09-acyclic-cover",
  "level": "2",
  "url": "sh-c09.html#sh-c09-acyclic-cover",
  "type": "Theorem",
  "number": "9.10",
  "title": "",
  "body": "  If is acyclic for , the comparison maps are isomorphisms for all . More generally, if is bounded below and every term is acyclic for sections on every finite intersection, then is a quasi-isomorphism.    For a sheaf, the positive rows of the page in vanish. The remaining row is , which proves the assertion. For a complex, apply a functorial Godement resolution termwise. Compare the total complex of the resulting Čech double complexes with the Čech complex of . On each intersection, the acyclic resolution theorem identifies the section complex of with its derived sections. Taking the Čech products preserves quasi-isomorphisms of these module complexes. The remaining totalizations converge because the Čech and resolution degrees are nonnegative and is bounded below. This proves the comparison. The sheaf version is also Stacks, Lemma 20.11.6 .   "
},
{
  "id": "sh-c09-partial-acyclicity",
  "level": "2",
  "url": "sh-c09.html#sh-c09-partial-acyclicity",
  "type": "Proposition",
  "number": "9.11",
  "title": "",
  "body": "  Fix . It is enough to assume to obtain comparison isomorphisms in degrees . If the vanishing is known only for , the comparison is an isomorphism for and injective for .    In the spectral sequence, all positive-row terms below the stated diagonal are zero already on . An incoming differential to has source , of total degree . Those sources vanish in the asserted range, and no differential leaves the bottom row for . Thus the bottom-row edge map is injective through degree . To make it surjective, the other associated graded pieces of the abutment in that degree must also vanish. They do vanish under the hypothesis including the diagonal. Below degree they vanish under either hypothesis.   "
},
{
  "id": "sh-c09-twoopen-computation",
  "level": "2",
  "url": "sh-c09.html#sh-c09-twoopen-computation",
  "type": "Example",
  "number": "9.12",
  "title": "",
  "body": "  Suppose , and is acyclic on , , and . Then  and for . The map is .    Use the alternating complex for the two-member cover. It has only degrees zero and one. The acyclic-cover theorem identifies its cohomology with derived cohomology.   "
},
{
  "id": "sh-c09-mayer-vietoris",
  "level": "2",
  "url": "sh-c09.html#sh-c09-mayer-vietoris",
  "type": "Theorem",
  "number": "9.13",
  "title": "Mayer–Vietoris.",
  "body": " Mayer–Vietoris   Let be a union of two open sets. For every there is a natural distinguished triangle where the second map is restriction from minus restriction from . Its long exact sequence includes     Choose a K-injective resolution with injective terms. In each degree, the sheaf axiom gives exactness at the first two positions of The last map is surjective because every term of is flabby: a section on the intersection extends to . This is a short exact sequence of complexes, even when is unbounded. Restriction preserves K-injectives, so its three complexes represent the derived sections stated in the theorem. The triangle and long exact sequence follow.   "
},
{
  "id": "sh-c09-products",
  "level": "2",
  "url": "sh-c09.html#sh-c09-products",
  "type": "Proposition",
  "number": "9.14",
  "title": "",
  "body": "  A pairing gives a product on Čech cochains by It satisfies and induces Under the comparison maps to derived cohomology this is the cup product of . Refinement maps preserve the products.    Expand the alternating sum on the union of the front and back tuples. The terms deleting an index before the shared vertex give ; those after it give . The two terms at the shared vertex cancel. This proves the differential identity. Restriction of tuples commutes with the formula, proving compatibility with refinement. Comparison with the derived product follows by applying the same front-and-back diagonal to the augmented Čech resolution and passing to resolutions of the coefficients; it is the Alexander–Whitney comparison. A detailed comparison with the derived cup product is Stacks, Lemma 20.31.4 .   "
},
{
  "id": "sh-c10",
  "level": "1",
  "url": "sh-c10.html",
  "type": "Chapter",
  "number": "10",
  "title": "Low-degree classes and calculations",
  "body": " Low-degree classes and calculations   A degree-zero class is a section. A degree-one class records a failure of local choices to agree, and can be represented by a torsor or by an extension. These interpretations do not require separation, local compactness, or a finiteness condition on the coefficients. They explain why an epimorphism of sheaves need not be surjective on global sections, and they give concrete ways to calculate the connecting homomorphism.  We first use sheaves of Abelian groups. The corresponding statements for -module sheaves use the coefficient comparison in . The last two sections calculate cohomology on a circle and on a finite non-Hausdorff space. The calculations use the Čech and Mayer–Vietoris results of ; the acyclicity of locally constant sheaves on intervals is proved in .    Sections and their lifting obstructions  Let be an exact sequence of Abelian sheaves on . An element has local lifts in , since is an epimorphism of sheaves. It need not have a global lift. The beginning of the cohomology sequence is Thus is the obstruction to a global lift. This is an obstruction to making already existing local lifts compatible; it is not an obstruction to their local existence.    Choose an open covering and lifts of . Define by Then on triple intersections. Its image under the Čech-to-derived comparison is . Replacing by replaces by .    The difference belongs to the kernel of , so exactness determines . The identity gives the cocycle relation. A connecting class is obtained by lifting a cocycle and applying the differential. Applying this construction in the Čech resolution and an injective resolution gives the displayed representative of ; the comparison of the two constructions is the naturality of the connecting homomorphism. With the total differential used in , resolution preimages satisfying represent by . There is no sign conflict here: if is a global resolution lift of , then , so . Genuine local lifts in and local preimages in a resolution of are different choices. The formula for a change of lifts follows by subtraction.    If the local lifts can be adjusted to agree, the adjusted sections glue to a global lift. One must allow refinements when using arbitrary Čech classes: a fixed covering need not represent every class of . The direct limit over all open coverings does represent every degree-one class, as explained in . When a class is given by local lifts on a particular covering, its fixed-cover Čech representative is already available. This does not imply surjectivity of the fixed-cover comparison for other classes.    Let be the sheaf of continuous real-valued functions and the sheaf of continuous circle-valued functions, the latter regarded as an Abelian group under multiplication. There is an exact sequence of Abelian sheaves For a continuous map , the class vanishes exactly when has a continuous real-valued logarithm with this normalization.    Every point of the circle has an open arc on which a continuous argument exists. Pulling back such arcs proves local surjectivity of for any . Its kernel consists of continuous integer-valued functions, which are locally constant. If are local arguments for , their differences are integer-valued and represent the boundary class. The lifting criterion follows from the long exact sequence. For and the identity, this class is nonzero: a continuous lift around a full turn would have to return both to its initial value and to that value plus . Choosing the positive orientation gives the usual generator of .    This example uses only exactness and local arguments. No assertion about higher cohomology of is needed. Acyclicity statements derived from partitions of unity have additional space hypotheses and belong to the treatment of fine and soft sheaves.    Torsors and degree-one cocycles   Torsors  Torsor Principal homogeneous sheaf Non-Abelian first cohomology   Let be a sheaf of groups on . A right -torsor is a sheaf of sets with a right -action such that every point has a neighborhood on which has a section, and the morphism is an isomorphism. A morphism of torsors is a -equivariant morphism of sheaves. The trivial torsor is with right multiplication. The set of isomorphism classes, pointed by this trivial torsor, is denoted when is not assumed Abelian.  For an Abelian sheaf , we write the action additively. The torsor is a sheaf of sets acted on by ; it does not come with a chosen zero section or an Abelian group structure.    The isomorphism in the definition says that two sections on the same open set differ by a unique group section whenever those sections exist. The local-existence condition is equivalent to the nonemptiness of all stalks of . It does not require to be nonempty for every open . A torsor is also called a principal homogeneous sheaf. A principal bundle for a topological group includes continuity and local-triviality data of a different kind. For a constant discrete group the étalé space of a torsor is a covering space; this does not identify torsors under an arbitrary sheaf of groups with bundles for one fixed topological group.    Every morphism of -torsors is an isomorphism. A -torsor is trivial if and only if it has a global section. If is Abelian and is an -torsor, translation gives an isomorphism     Choose a local section of the source torsor. The map identifies that torsor locally with , and the image of gives the same identification for the target. An equivariant morphism becomes the identity in these coordinates. It is therefore an isomorphism on an open covering. A global section makes the same construction on all of , proving the criterion for triviality. In the Abelian case an equivariant automorphism is locally translation by a unique element of ; these translations agree on overlaps and glue to an element of .    Choose local sections . Write Associativity and uniqueness give . If , then Conversely, such transition sections glue copies of to a torsor. For an Abelian sheaf, these are exactly the additive cocycle and coboundary formulas The change-of-trivialization formula explains why isomorphism classes are the objects to classify.  For non-Abelian , the notation denotes a pointed set here. It is not the first right derived functor of global sections in an Abelian category, and there is no addition of its classes supplied by the definition. We will not introduce higher non-Abelian cohomology. For Abelian , the torsor classification agrees with the cohomology group already defined; this agreement is proved below.    In the exact sequence of , let . The rule defines an -torsor, acted on by addition. Its class is .    The equation defining is local, so this rule is a sheaf. Epimorphy of gives local sections, and exactness identifies differences of lifts with unique sections of . Local trivializations are the chosen lifts ; their transition cocycle is . Thus the torsor and the connecting class record the same failure to lift globally.      Extensions and the classification of torsors  For Abelian sheaves, the identification identifies their right derived functors. Hence classifies extensions with the end terms fixed. The module version is . We use the Yoneda interpretation of from the homological algebra note , rather than prove the general theory of extensions again.    For any Abelian sheaf on any topological space , there is a natural bijection The trivial torsor corresponds to zero. If an extension of by represents a class , its fiber over the global section is a torsor representing .    For an extension , let , taking the fiber in sheaves of sets. Since is an epimorphism, has local lifts. Their differences are unique sections of , so is a torsor. This construction respects equivalences of extensions.  Conversely, choose local sections of a torsor and write . On , take . Glue the copy on to the copy on by The cocycle relation is exactly the compatibility required for these isomorphisms on triple intersections. Their first component fixes , and their second component fixes . They therefore glue to an extension of by . Its fiber over has the same transitions as , and is isomorphic to .  Changing the sections to gives an equivalent extension, using the local coordinate change in the old coordinates. Any two trivializing coverings have a common refinement, so the extension class is independent of the covering. Starting instead with an extension, choose lifts of . The maps identify it with the extension just constructed from its fiber torsor. Thus the two constructions are inverse on isomorphism classes.  The connecting homomorphism for an extension sends to its Yoneda class. Its local lifts are the sections of the fiber torsor, whose differences are . The bijection therefore agrees with the Čech-to-derived comparison and with . Pullback and morphisms of Abelian coefficient sheaves preserve these descriptions, proving naturality.    For the general result and a construction without choosing local coordinates, see Stacks, §20.4 . The proof above keeps the transition maps visible, so it also fixes our sign convention.  If is a -module sheaf, replace by in the gluing construction and use . This realizes the same additive torsor as a -linear extension of . Thus the Abelian torsor interpretation agrees with the module-valued cohomology and with ; it does not require to be free or flat. The automorphisms of such an extension that induce the identity on both end terms are also , acting by . The cohomology group classifies isomorphism classes, and does not assert that objects in one class have no automorphisms.  The group operation has a torsor interpretation. For two -torsors , form the sheaf quotient of by the action The result, usually written , is an -torsor. Local sections give transitions , so its class is the sum of the two classes. Negating the action gives the inverse torsor. This construction agrees with Baer sum of the corresponding extensions. The quotient is sheafified. Taking orbit sets on each open set need not itself give a sheaf. This is the same reason that cokernels of Abelian sheaves are obtained by sheafifying presheaf cokernels.    Let be a finite locally free -module sheaf and let be any -module sheaf. Equivalence classes of extensions are naturally classified by The torsor associated with an extension is its sheaf of local -linear splittings.    Where is free of finite rank, lift its finitely many basis sections through after shrinking the neighborhood. This gives a local splitting. Two splittings differ by a unique section of . They therefore form a torsor under this Abelian sheaf. Conversely, glue the locally split extensions using the additive cocycle of a torsor, by the maps . These constructions are inverse, by the same coordinate changes as in .    Local freeness and finite rank have been used to obtain local splittings by lifting finitely many generators simultaneously. A locally free sheaf need not be a projective object of the global sheaf category. Even can have nonzero global . The obstruction is precisely the failure of the local splittings to glue. For a general quotient sheaf , an extension need not be locally split, and a torsor of splittings need not exist; one then needs more than this description.    Affine monodromy in degree one  For locally constant coefficients, the torsor description expresses degree one directly in terms of monodromy. Assume in this section that is connected, locally path-connected, and semilocally simply connected. These are sufficient hypotheses for the monodromy classification in . Let have stalk at , and write for its monodromy. We choose the multiplication convention in which .   Crossed homomorphisms  Crossed homomorphism Group cohomology!degree one Affine monodromy   A crossed homomorphism for is a map satisfying Two such maps are equivalent if, for one , Their quotient group, under addition, is the degree-one group cohomology for this action.      Under the stated hypotheses there is an isomorphism No asphericity hypothesis on is needed in degree one.    An -torsor is locally isomorphic to as a sheaf of sets. It is therefore locally constant. Choose an element ; its additive torsor action identifies with by . Compatibility of monodromy with the -action forces the action of to have the affine form Composition of these affine maps is an action exactly when satisfies the crossed-homomorphism identity. Changing the chosen origin to changes by the displayed equivalence relation.  Conversely, a crossed homomorphism defines an affine action on the set , whose translations are compatible with the given linear action . The monodromy equivalence constructs a locally constant sheaf of sets with this action and a locally simply transitive -action; it is an -torsor. An equivariant map respecting translations is a translation by one , and gives exactly the stated change of crossed homomorphism. The torsor classification proves the bijection. Addition of torsors adds the translation parts, so the bijection is a group isomorphism.    When the action is trivial, a crossed homomorphism is an ordinary homomorphism into the additive group , and the equivalence relation does not change it. Thus under these hypotheses. For nontrivial monodromy, replacing crossed homomorphisms by ordinary homomorphisms discards the coefficient action. The group-cohomology description in degree one follows because a torsor has no topology beyond its locally constant gluing and its affine monodromy. In higher degrees the cohomology of the universal cover can contribute. The example of in shows why this argument must not be promoted to an all-degree formula without further assumptions.    A circle with local coefficients  Let be a locally constant -module sheaf on . Choose a base point, an orientation, and an identification of its stalk with a module . Positive monodromy is an automorphism ; compare . No finite-generation or projectivity assumption on is imposed.    With these choices, the cohomology of is computed by the two-term complex in degrees . Thus The first isomorphism is evaluation at the chosen base point. The second uses the orientation and the corresponding trivializations.    Cover the circle by two open arcs whose intersection is a disjoint union of two open arcs . Locally constant sheaves on each of these intervals are constant and have no positive cohomology, by . Consequently the Mayer–Vietoris sequence is represented by after choosing the trivializations to agree on . We choose the orientation so that their transition on is . This is the difference-of-restrictions convention of .  The kernel consists of pairs with and . For the cokernel, use coordinates in the target and in the source. The differential becomes Its first summand is an isomorphism and can be removed. The second summand is the stated two-term complex. The higher groups vanish because the cover and all its nonempty intersections are acyclic and its normalized Čech complex has length one.    The kernel consists of invariant elements, while the cokernel consists of coinvariants. These are different operations. For example, an automorphism can have no fixed vectors and still have nonzero coinvariants over a general ring. Reversing the circle replaces by . The identity identifies the resulting kernels and cokernels, but the coordinate expression for the degree-one class depends on this change. Some accounts obtain or instead of , depending on the chosen loop and on whether cochain values are transported to the first or last vertex. The induced complexes are isomorphic; the sign and transport convention should still be fixed before calculating a specific connecting class.    The formula gives the following cases.   If , then and .  For and , the invariants are zero and the coinvariants are . The torsion in degree one comes from an integral local system even though its stalk is torsion-free.  For a rank-one local system over a field with monodromy , both groups vanish. Over , the same argument only works when is a unit.       For , let be the local system with stalk and monodromy The first coordinate and the second-coordinate quotient give an extension Under the identification , with the corresponding transition convention, its class is .    The quotient section has local lifts given by the second basis vector. After one positive turn this vector differs from itself by times the first basis vector. The torsor of lifts therefore has transition , representing the stated class. A global splitting would be a monodromy-invariant vector of the form . Its image under is , so such a splitting exists exactly when . Local splitting does not imply global splitting, even when both end terms are constant free rank-one sheaves.      A finite gluing space  A finite example separates the calculation from manifold intuition. Let , with open sets the upper sets for the order and no further strict comparisons. This is a finite space. It is not Hausdorff. The minimal open neighborhoods of are and is discrete.    For every , its cohomology is computed by in degrees , where the maps are induced by restriction from minimal neighborhoods. In particular, for the constant sheaf,     On a finite space, the stalk at a point is the sections over its minimal open neighborhood. Thus and . These functors are exact, because stalks are exact. On the discrete two-point space, sections are the finite product , which is exact as well. The covering and its intersection are therefore acyclic for every . The Čech calculation in gives precisely the displayed complex.  For , every restriction in that complex is the identity. The differential is . Its kernel is the diagonal copy of ; its cokernel is , using the difference of the two coordinates. The complex has no higher terms.    The space is connected: each of is connected and their intersection is nonempty. Its nonzero degree-one class comes from the two components of the overlap. This is the same gluing calculation as for the two-arc cover of a circle, although the spaces are very different as topological spaces. Equality of these cohomology groups alone asserts neither a homeomorphism nor a homotopy equivalence.    An -torsor trivialized over and is specified by a pair of translations on the two overlap points. Its class is .    A change of trivializations by on and on adds to . The difference is invariant, and every pair is equivalent to . Such a torsor is trivial exactly when the two overlap translations agree. This realizes every element of the calculated as an actual gluing obstruction.    These examples suggest a practical order for a low-degree calculation: identify which local choices are being made; determine the sheaf acting on those choices; compute their differences on overlaps; then justify the comparison with derived cohomology. The justification may use the general degree-one classification, or an acyclic covering when all degrees are wanted. Knowing the overlap equations without that justification is a Čech calculation, not yet a general computation of sheaf cohomology.   "
},
{
  "id": "sh-c10-boundary-cocycle",
  "level": "2",
  "url": "sh-c10.html#sh-c10-boundary-cocycle",
  "type": "Proposition",
  "number": "10.1",
  "title": "",
  "body": "  Choose an open covering and lifts of . Define by Then on triple intersections. Its image under the Čech-to-derived comparison is . Replacing by replaces by .    The difference belongs to the kernel of , so exactness determines . The identity gives the cocycle relation. A connecting class is obtained by lifting a cocycle and applying the differential. Applying this construction in the Čech resolution and an injective resolution gives the displayed representative of ; the comparison of the two constructions is the naturality of the connecting homomorphism. With the total differential used in , resolution preimages satisfying represent by . There is no sign conflict here: if is a global resolution lift of , then , so . Genuine local lifts in and local preimages in a resolution of are different choices. The formula for a change of lifts follows by subtraction.   "
},
{
  "id": "sh-c10-angle",
  "level": "2",
  "url": "sh-c10.html#sh-c10-angle",
  "type": "Example",
  "number": "10.2",
  "title": "",
  "body": "  Let be the sheaf of continuous real-valued functions and the sheaf of continuous circle-valued functions, the latter regarded as an Abelian group under multiplication. There is an exact sequence of Abelian sheaves For a continuous map , the class vanishes exactly when has a continuous real-valued logarithm with this normalization.    Every point of the circle has an open arc on which a continuous argument exists. Pulling back such arcs proves local surjectivity of for any . Its kernel consists of continuous integer-valued functions, which are locally constant. If are local arguments for , their differences are integer-valued and represent the boundary class. The lifting criterion follows from the long exact sequence. For and the identity, this class is nonzero: a continuous lift around a full turn would have to return both to its initial value and to that value plus . Choosing the positive orientation gives the usual generator of .   "
},
{
  "id": "sh-c10-torsor-definition",
  "level": "2",
  "url": "sh-c10.html#sh-c10-torsor-definition",
  "type": "Definition",
  "number": "10.3",
  "title": "Torsors.",
  "body": " Torsors  Torsor Principal homogeneous sheaf Non-Abelian first cohomology   Let be a sheaf of groups on . A right -torsor is a sheaf of sets with a right -action such that every point has a neighborhood on which has a section, and the morphism is an isomorphism. A morphism of torsors is a -equivariant morphism of sheaves. The trivial torsor is with right multiplication. The set of isomorphism classes, pointed by this trivial torsor, is denoted when is not assumed Abelian.  For an Abelian sheaf , we write the action additively. The torsor is a sheaf of sets acted on by ; it does not come with a chosen zero section or an Abelian group structure.   "
},
{
  "id": "sh-c10-torsor-basics",
  "level": "2",
  "url": "sh-c10.html#sh-c10-torsor-basics",
  "type": "Proposition",
  "number": "10.4",
  "title": "",
  "body": "  Every morphism of -torsors is an isomorphism. A -torsor is trivial if and only if it has a global section. If is Abelian and is an -torsor, translation gives an isomorphism     Choose a local section of the source torsor. The map identifies that torsor locally with , and the image of gives the same identification for the target. An equivariant morphism becomes the identity in these coordinates. It is therefore an isomorphism on an open covering. A global section makes the same construction on all of , proving the criterion for triviality. In the Abelian case an equivariant automorphism is locally translation by a unique element of ; these translations agree on overlaps and glue to an element of .   "
},
{
  "id": "sh-c10-lift-torsor",
  "level": "2",
  "url": "sh-c10.html#sh-c10-lift-torsor",
  "type": "Example",
  "number": "10.5",
  "title": "",
  "body": "  In the exact sequence of , let . The rule defines an -torsor, acted on by addition. Its class is .    The equation defining is local, so this rule is a sheaf. Epimorphy of gives local sections, and exactness identifies differences of lifts with unique sections of . Local trivializations are the chosen lifts ; their transition cocycle is . Thus the torsor and the connecting class record the same failure to lift globally.   "
},
{
  "id": "sh-c10-torsor-classification",
  "level": "2",
  "url": "sh-c10.html#sh-c10-torsor-classification",
  "type": "Theorem",
  "number": "10.6",
  "title": "",
  "body": "  For any Abelian sheaf on any topological space , there is a natural bijection The trivial torsor corresponds to zero. If an extension of by represents a class , its fiber over the global section is a torsor representing .    For an extension , let , taking the fiber in sheaves of sets. Since is an epimorphism, has local lifts. Their differences are unique sections of , so is a torsor. This construction respects equivalences of extensions.  Conversely, choose local sections of a torsor and write . On , take . Glue the copy on to the copy on by The cocycle relation is exactly the compatibility required for these isomorphisms on triple intersections. Their first component fixes , and their second component fixes . They therefore glue to an extension of by . Its fiber over has the same transitions as , and is isomorphic to .  Changing the sections to gives an equivalent extension, using the local coordinate change in the old coordinates. Any two trivializing coverings have a common refinement, so the extension class is independent of the covering. Starting instead with an extension, choose lifts of . The maps identify it with the extension just constructed from its fiber torsor. Thus the two constructions are inverse on isomorphism classes.  The connecting homomorphism for an extension sends to its Yoneda class. Its local lifts are the sections of the fiber torsor, whose differences are . The bijection therefore agrees with the Čech-to-derived comparison and with . Pullback and morphisms of Abelian coefficient sheaves preserve these descriptions, proving naturality.   "
},
{
  "id": "sh-c10-splitting-torsor",
  "level": "2",
  "url": "sh-c10.html#sh-c10-splitting-torsor",
  "type": "Proposition",
  "number": "10.7",
  "title": "",
  "body": "  Let be a finite locally free -module sheaf and let be any -module sheaf. Equivalence classes of extensions are naturally classified by The torsor associated with an extension is its sheaf of local -linear splittings.    Where is free of finite rank, lift its finitely many basis sections through after shrinking the neighborhood. This gives a local splitting. Two splittings differ by a unique section of . They therefore form a torsor under this Abelian sheaf. Conversely, glue the locally split extensions using the additive cocycle of a torsor, by the maps . These constructions are inverse, by the same coordinate changes as in .   "
},
{
  "id": "sh-c10-crossed-homomorphism",
  "level": "2",
  "url": "sh-c10.html#sh-c10-crossed-homomorphism",
  "type": "Definition",
  "number": "10.8",
  "title": "Crossed homomorphisms.",
  "body": " Crossed homomorphisms  Crossed homomorphism Group cohomology!degree one Affine monodromy   A crossed homomorphism for is a map satisfying Two such maps are equivalent if, for one , Their quotient group, under addition, is the degree-one group cohomology for this action.   "
},
{
  "id": "sh-c10-affine-classification",
  "level": "2",
  "url": "sh-c10.html#sh-c10-affine-classification",
  "type": "Proposition",
  "number": "10.9",
  "title": "",
  "body": "  Under the stated hypotheses there is an isomorphism No asphericity hypothesis on is needed in degree one.    An -torsor is locally isomorphic to as a sheaf of sets. It is therefore locally constant. Choose an element ; its additive torsor action identifies with by . Compatibility of monodromy with the -action forces the action of to have the affine form Composition of these affine maps is an action exactly when satisfies the crossed-homomorphism identity. Changing the chosen origin to changes by the displayed equivalence relation.  Conversely, a crossed homomorphism defines an affine action on the set , whose translations are compatible with the given linear action . The monodromy equivalence constructs a locally constant sheaf of sets with this action and a locally simply transitive -action; it is an -torsor. An equivariant map respecting translations is a translation by one , and gives exactly the stated change of crossed homomorphism. The torsor classification proves the bijection. Addition of torsors adds the translation parts, so the bijection is a group isomorphism.   "
},
{
  "id": "sh-c10-circle-formula",
  "level": "2",
  "url": "sh-c10.html#sh-c10-circle-formula",
  "type": "Proposition",
  "number": "10.10",
  "title": "",
  "body": "  With these choices, the cohomology of is computed by the two-term complex in degrees . Thus The first isomorphism is evaluation at the chosen base point. The second uses the orientation and the corresponding trivializations.    Cover the circle by two open arcs whose intersection is a disjoint union of two open arcs . Locally constant sheaves on each of these intervals are constant and have no positive cohomology, by . Consequently the Mayer–Vietoris sequence is represented by after choosing the trivializations to agree on . We choose the orientation so that their transition on is . This is the difference-of-restrictions convention of .  The kernel consists of pairs with and . For the cokernel, use coordinates in the target and in the source. The differential becomes Its first summand is an isomorphism and can be removed. The second summand is the stated two-term complex. The higher groups vanish because the cover and all its nonempty intersections are acyclic and its normalized Čech complex has length one.   "
},
{
  "id": "sh-c10-circle-examples",
  "level": "2",
  "url": "sh-c10.html#sh-c10-circle-examples",
  "type": "Example",
  "number": "10.11",
  "title": "",
  "body": "  The formula gives the following cases.   If , then and .  For and , the invariants are zero and the coinvariants are . The torsion in degree one comes from an integral local system even though its stalk is torsion-free.  For a rank-one local system over a field with monodromy , both groups vanish. Over , the same argument only works when is a unit.    "
},
{
  "id": "sh-c10-unipotent-extension",
  "level": "2",
  "url": "sh-c10.html#sh-c10-unipotent-extension",
  "type": "Example",
  "number": "10.12",
  "title": "",
  "body": "  For , let be the local system with stalk and monodromy The first coordinate and the second-coordinate quotient give an extension Under the identification , with the corresponding transition convention, its class is .    The quotient section has local lifts given by the second basis vector. After one positive turn this vector differs from itself by times the first basis vector. The torsor of lifts therefore has transition , representing the stated class. A global splitting would be a monodromy-invariant vector of the form . Its image under is , so such a splitting exists exactly when . Local splitting does not imply global splitting, even when both end terms are constant free rank-one sheaves.   "
},
{
  "id": "sh-c10-fourpoint-computation",
  "level": "2",
  "url": "sh-c10.html#sh-c10-fourpoint-computation",
  "type": "Proposition",
  "number": "10.13",
  "title": "",
  "body": "  For every , its cohomology is computed by in degrees , where the maps are induced by restriction from minimal neighborhoods. In particular, for the constant sheaf,     On a finite space, the stalk at a point is the sections over its minimal open neighborhood. Thus and . These functors are exact, because stalks are exact. On the discrete two-point space, sections are the finite product , which is exact as well. The covering and its intersection are therefore acyclic for every . The Čech calculation in gives precisely the displayed complex.  For , every restriction in that complex is the identity. The differential is . Its kernel is the diagonal copy of ; its cokernel is , using the difference of the two coordinates. The complex has no higher terms.   "
},
{
  "id": "sh-c10-fourpoint-torsor",
  "level": "2",
  "url": "sh-c10.html#sh-c10-fourpoint-torsor",
  "type": "Example",
  "number": "10.14",
  "title": "",
  "body": "  An -torsor trivialized over and is specified by a pair of translations on the two overlap points. Its class is .    A change of trivializations by on and on adds to . The difference is invariant, and every pair is equivalent to . Such a torsor is trivial exactly when the two overlap translations agree. This realizes every element of the calculated as an actual gluing obstruction.   "
},
{
  "id": "sh-c11",
  "level": "1",
  "url": "sh-c11.html",
  "type": "Chapter",
  "number": "11",
  "title": "Singular cohomology and homotopy",
  "body": " Singular cohomology and homotopy   Sheaf cohomology is defined for every topological space, but singular cohomology need not compute it. The comparison depends on local topology, and a particular proof can require additional covering properties. Homotopy invariance is a different question: cohomology of locally constant sheaves is homotopy invariant on arbitrary spaces, with the coefficient sheaf transported along the homotopy. Neither assertion extends to arbitrary coefficient sheaves in the same form.  We give a singular-cochain comparison with local coefficients, including a proof under hereditary paracompactness. We then separate that proof hypothesis from broader comparison theorems, and establish the homotopy statement through the projection with fiber . No local compactness, support functor, or manifold structure is part of the argument.    Singular cochains with local coefficients  Let be a locally constant -module sheaf on . A path gives parallel transport It depends only on homotopy relative to the endpoints. These transports were constructed from the étalé space and local trivializations in ; a universal covering space is not required for this construction.   Singular cochains with local coefficients  Singular cochain Local coefficients Singular cohomology   For , let be the set of continuous maps , with ordered vertices . Define For a cochain and an -simplex , set where omits the th vertex and is the edge from the first to the second vertex. The cohomology of this complex is denoted .    All terms in the formula belong to the stalk at . Only the zeroth face changes the first vertex, which explains the inverse transport in that term. For a constant sheaf , this is the ordinary singular cochain complex with coefficients in . Choosing the last vertex instead gives another convention. The resulting complex is isomorphic after transporting values inside each simplex, but formulas involving monodromy can then contain inverse automorphisms. We use first-vertex values throughout this chapter.    The displayed differential satisfies . A continuous map and a locally constant sheaf on give a cochain map There is an augmentation of presheaf complexes on  sending a section to its values at points.    In , the two occurrences of each codimension-two face have opposite signs. Their coefficient identifications agree: on a triangular face the transport along the direct edge equals transport along the two successive edges, because the two paths are homotopic in that face. Every term therefore cancels with its partner. Pullback commutes with edge transports and faces, proving the cochain-map assertion. A section of is preserved by transport along every path, so its degree-zero differential vanishes.    A degree-zero cocycle is an assignment of a stalk element to every point which is preserved along every path. On a locally path-connected space, such assignments are exactly sections of . On a general space, pathwise compatibility need not imply local compatibility; this distinction already allows the comparison with sheaf cohomology to fail in degree zero.  For the standard singular construction with local coefficients, see . We use its cochain complex, not a reconstruction of singular homology or covering-space theory inside the sheaf note.    The sheafified singular complex   Local contractibility and covering assumptions  Local contractibility Paracompactness Hereditary paracompactness   We say that is locally contractible if every point has a basis of contractible open neighborhoods. In this chapter, a paracompact space is Hausdorff and every open covering has a locally finite open refinement. We say that is hereditarily paracompact Hausdorff if every subspace is paracompact Hausdorff. For the proof below, it suffices that every open subspace is paracompact Hausdorff.    The stronger, basis formulation of local contractibility makes the local exactness argument immediate. Some books use the same name for the weaker requirement that every neighborhood contain a smaller neighborhood whose inclusion into it is null-homotopic. We discuss that version separately. Metrizable spaces are hereditarily paracompact Hausdorff; finite-dimensional second-countable Hausdorff manifolds and locally finite countable simplicial complexes therefore satisfy our covering assumptions.  Let be the sheaf associated with the presheaf . Restrictions discard the components indexed by simplices not lying in the smaller open set. They are surjective: extend a cochain by assigning zero to the remaining simplices. This observation alone does not prove that the associated sheaf is flabby. Sheafification of a presheaf with surjective restrictions need not have surjective restrictions.    If is locally contractible, the augmented sheaf complex is exact.    Fix and trivialize on a neighborhood of , with value . Restrict to a cofinal basis of contractible open neighborhoods inside it. On each such neighborhood the augmented singular cochain complex has cohomology in degree zero and zero in positive degrees. This is the ordinary singular contraction argument, with the trivialized coefficients. Filtered colimits of modules are exact and commute with taking cohomology. Since sheafification preserves stalks, the same statement holds for the stalk of at . The augmentation identifies the degree-zero stalk with . Exactness on all stalks proves the claim.      Suppose that every open subspace of is paracompact Hausdorff. Then for every open and every , the natural map is surjective. Each sheaf is flabby.    Let . Choose open sets covering and cochains on representing . The shrinking property of paracompact Hausdorff spaces gives a locally finite open refinement and indices with , where closure is taken in . This is the point-set topology fact used in the argument.  Define a cochain on as follows. For a simplex whose image lies in some , choose one such and take its value from . For every other simplex take zero. We show that the germ of represents at every .  Choose a neighborhood of meeting only finitely many . After shrinking it, every remaining such satisfies : the other finitely many closures can be avoided. Hence all the remaining contain . Choose one index with . The cochains and have the same sheaf germ at , so on a sufficiently small neighborhood they agree on all simplices. Only finitely many agreements are needed. Choose one neighborhood on which all of them hold. Every simplex in is eligible for at least one , and whichever eligible index was chosen, its value equals the value from . Thus has the required germ at .  This proves surjectivity. A section of on an open set can now be represented by one cochain there, and that cochain can be extended by zero to the ambient open set. Sheafifying gives an extension of the original section. Therefore is flabby.    The locally finite refinement is used to replace agreement of germs by finitely many simultaneous agreements near a point. Without a covering hypothesis this step is not available. The distinction between a flabby presheaf and a flabby sheaf is discussed in ; see also for the section-lifting argument.    The comparison theorem  The previous lemmas give a flabby resolution, but one more step is necessary: global sections of a sheafified complex are not automatically the original cochains. This step uses small singular simplices.   Small and locally zero cochains  Small singular simplex Locally zero cochain   For an open covering of , a singular simplex is -small if its image lies in one member of the covering. Let be the cochain complex assigning values only to these simplices, with the same differential. A cochain on is locally zero if each point has an open neighborhood on all of whose simplices its values vanish.      For every open covering , restriction is a quasi-isomorphism     Barycentric subdivision makes a sufficiently fine subdivision of any one simplex small for the inverse-image covering of that simplex. The usual subdivision homotopy and the construction of a small-chain inverse give the small-simplex theorem; see . For local coefficients, every subdivision and prism lies in the image of the original simplex. Pull back to that simplex and transport all coefficient values from a chosen vertex. Since a simplex is contractible, the transports agree under the face and prism identifications. Thus the same subdivision and homotopy formulas hold with these coefficients, and give homotopy inverse cochain maps after restriction.  It is the chain homotopy construction that permits arbitrary coefficient modules: dualizing a quasi-isomorphism alone would not suffice. The local-coefficient form of subdivision and excision is also described in .      Let be locally contractible and suppose that every open subspace is paracompact Hausdorff. For every locally constant -module sheaf , there are natural isomorphisms They are natural in the coefficient sheaf and in continuous maps between spaces satisfying these hypotheses.    Let be the module of locally zero -cochains. It is the kernel of the map from cochains to sections of . It is also the union, over open coverings, of the kernels of restriction to the small cochains for that covering. By , the natural map is onto, so with the colimit taken toward finer coverings. Each restriction to small cochains is surjective degree by degree, since arbitrary values can be assigned to the omitted simplices. This explains the last quotient description.  By , the maps from the original singular complex into every small-cochain complex are quasi-isomorphisms. Exactness of filtered colimits shows that the map into their colimit is a quasi-isomorphism as well. Thus is a quasi-isomorphism. By and , the augmented complex is a flabby resolution of . Its global sections therefore compute , proving the comparison.  The augmentation, passage to germs, and restriction of cochains are natural maps. Pullback by a continuous map sends a simplex to its composite and transports the coefficient stalk by the inverse-image identification. These maps commute with the augmentation and differential. The isomorphism on cohomology therefore respects pullback; choices of refinements in the proof do not become choices in the resulting comparison.    The proof separates three different assertions: local contractibility makes the augmentation exact on stalks; the covering hypothesis makes its terms acyclic by the flabby argument; subdivision compares the global cochains with global sections. Confusing these assertions is a source of incorrect generalizations. Neither exactness on stalks nor flabbiness alone proves the comparison with the original singular complex.    For every interval , including half-open and closed intervals, and every constant coefficient module , one has for . If is nonempty, evaluation gives . Every locally constant sheaf on a nonempty interval is constant.    An interval is metrizable and has a basis of contractible neighborhoods. Singular contraction and give the cohomology assertion. Triviality of a local system follows from parallel transport on the interval: paths with fixed endpoints are homotopic, and transport from one base point gives local trivializations which agree. Equivalently, apply the monodromy description from .      Broader local hypotheses  The covering condition in was chosen to make every term of one particular resolution flabby. It is not a necessary condition for the comparison. Even the classical paracompact Hausdorff argument can use acyclic singular-cochain sheaves without proving all of them flabby; see and the discussion in . The distinction matters on paracompact spaces whose open subspaces need not all be paracompact.   A local vanishing condition  Cohomological local connectedness Semilocal contractibility   For an Abelian group , consider the condition We call this cohomological local connectedness with coefficients in , in the colimit sense. We say that is semilocally contractible if for every , with open, there is an open such that the inclusion is null-homotopic.    A basis of contractible neighborhoods implies semilocal contractibility, and semilocal contractibility implies the displayed local vanishing for every coefficient group. The condition in degree zero is part of the definition: vanishing only in positive degrees does not control the discrepancy between locally constant functions and pathwise constant functions. A classical definition of cohomological local connectedness asks for a smaller neighborhood on which the entire restriction homomorphism is zero. The colimit condition asks that each individual class die after some restriction. The former implies the latter; we do not silently identify them. These two formulations are explicitly distinguished in .    Let be an Abelian group and let satisfy the colimit local-vanishing condition in . Then singular cohomology with coefficients in and sheaf cohomology of are naturally isomorphic in every degree. No Hausdorff or paracompactness assumption is required. In particular, this holds for every semilocally contractible space.    This is . The semilocally contractible version is proved by using a different flabby resolution. We use these broader results as external comparison theorems. Their proofs remove the covering assumptions by changing the method, rather than by assuming that ordinary sheafification preserves flabby presheaves.    This statement is recorded for constant coefficients. Our explicit local-coefficient construction and proof remain available under . One should not expand the scope of a cited theorem by replacing constant coefficients with an arbitrary sheaf. For a particular space with local coefficients, the proof should either verify the singular resolution and its acyclicity, or invoke a comparison result that actually includes those coefficients.  A contractible open covering is another useful computational condition, not a consequence of every version of local contractibility. If a covering has contractible nonempty finite intersections, a local system is constant and acyclic on each such intersection. Its cohomology is therefore computed by the Čech complex of that covering. When the coefficients are globally constant, this becomes the usual cohomology of the nerve with those coefficients. For a nonconstant local system the restriction maps contain transport data; replacing them by identity maps generally gives the wrong complex.    Homotopy invariance with transported coefficients  We now return to arbitrary spaces. The compact interval supplies a separate route to homotopy invariance, so this assertion does not need a comparison with singular cohomology on . Write , , and .    For every topological space and every , the adjunction unit is an isomorphism Consequently pullback gives an isomorphism The maps back induced by are all the inverse of this isomorphism.    We use the compact-fiber cohomology statement for this projection: for a bounded-below complex , A precise general form is Stacks, Lemma 20.18.1 . Its assumptions here are satisfied without conditions on : projection along the compact space is closed, its relative diagonal is closed because is Hausdorff, and every fiber is compact. We only use this compact-projection case, not the general theory of support functors.  The restriction of to the fiber is the constant sheaf with value . By , its cohomology is in degree zero and zero otherwise. Under this identification the unit is the identity on . It is therefore a quasi-isomorphism on every stalk. Derived composition gives the assertion for global sections. Since , functoriality makes each map induced by an inverse to the same isomorphism.      If is locally constant on , then for , is locally constant, and the counit is an isomorphism. Restriction to either endpoint induces isomorphisms on derived global sections.    On each fiber, is a locally constant sheaf on an interval, hence is constant and acyclic. The compact-projection formula used in identifies with its sections on the fiber and kills all higher direct images. Evaluation of these sections at is an isomorphism. These evaluations are the stalk maps of the counit, proving it is an isomorphism. Pulling back along identifies with , which is locally constant. Applying to proves the final assertion.      Let be a homotopy from to , and let be a locally constant -module sheaf on . Transport along this homotopy gives an isomorphism such that the induced pullback maps satisfy If is constant, the standard coefficient identifications make the identity, so the two pullback maps are equal.    Apply to . Evaluation at the two endpoints identifies with and ; their composite is . Equivalently, its stalk at is parallel transport along .  The two maps factor as pullback by followed by restriction to the endpoint. The endpoint restriction maps become equal after the displayed transport, since under the counit they are both the inverse of pullback along . This proves the cohomology identity. For constant coefficients, the transported constant section has the same value at both endpoints, giving the last assertion.    The coefficient isomorphism depends on the chosen homotopy. A loop of homotopies can produce monodromy. Thus one should not write equality of maps into and before specifying the coefficient identification. This distinction is absent for constant coefficients.    A homotopy equivalence induces isomorphisms for every locally constant sheaf . If is nonempty and contractible, every locally constant -module sheaf on is constant, and No separation or paracompactness assumption is needed.    Pullback of local systems along a homotopy equivalence is an equivalence, with inverse given by a homotopy inverse and the coefficient transports from the two homotopies. The functorial pullback maps on cohomology respect these transports by ; applying the theorem to the composites gives the stated isomorphisms. For a contraction, pullback from a point is therefore an equivalence of local-system categories and gives the cohomology formula, since sections on a point are an exact functor. The same statements are .      Computations and the limits of the comparison    For and any -module , When , the two occurrences mean one copy in degree zero and one in degree one. Every local system on for is constant.    Use two enlarged hemispheres . They are contractible, and their intersection deformation retracts onto . For , the intersection has two contractible components, and the calculation is with identity monodromy. For , the intersection is connected, so the degree-zero difference map is onto and has diagonal kernel. Mayer–Vietoris gives the asserted degree zero, vanishing in degree one, and Induction proves the formula. The cohomology on the contractible sets and the deformation retraction are justified by , not by an implicit assumption that every open set is acyclic. Triviality of the local systems follows from simple connectivity and the monodromy classification.    Describing local systems by a fundamental group does not mean that all their sheaf cohomology is group cohomology. For a connected CW complex with contractible universal cover, the equivariant singular chains of the universal cover form a free resolution over the group ring. In that case the local-coefficient complex gives Contractibility of the universal cover is a substantive additional condition. For , the fundamental group is trivial but , whereas positive group cohomology of the trivial group vanishes. The equivalence describing local systems controls the coefficients; the topology of still enters their cohomology. In the universal-cover formula one computes equivariant cochains before taking cohomology. Replacing the entire space by its fundamental group requires an acyclic resolution of the trivial module, which the universal-cover chains supply in the contractible-cover case. See .    Let be the closed topologist's sine curve For a nonzero module , the natural comparison from constant-sheaf sections to singular cohomology fails to be an isomorphism already in degree zero.    This space is connected and has two path components: the graph and the vertical segment. To see the first assertion, the graph is connected and its closure is all of . For the second, a path leaving the vertical segment would have a continuous positive first coordinate approaching zero; the intermediate value property forces its second coordinate to take the values and arbitrarily close to the departure time, contradicting continuity. Each of the two displayed pieces is itself path-connected.  A locally constant function from the connected space to the discrete set is constant, so . A singular degree-zero cocycle can independently choose a value on each path component, so . Evaluation of a sheaf section as a degree-zero cochain sends to . It is not onto. The space is compact and metrizable; these properties do not replace the missing local condition.    For an arbitrary space, sheaf degree zero consists of locally constant functions ; arbitrary functions on connected components need not be locally constant because the components need not be open. Singular degree zero permits all assignments to path components. The displayed diagonal map does not identify these constructions, even for a module abstractly isomorphic to its own square.    Homotopy equivalence need not preserve cohomology with an arbitrary sheaf pulled back. Let , let , and let be the skyscraper sheaf at , with . Then is a homotopy equivalence, but     The first group is the global sections of the skyscraper, and the second is its stalk at , which vanishes. The sheaf is not locally constant near . Its restriction to a homotopy path therefore supplies no invertible coefficient transport. This is exactly the missing input in .    There are consequently separate tests for a proposed topological computation. To use a singular complex, verify a comparison theorem for the space and coefficients. To use homotopy invariance, verify local constancy and retain the pullback coefficient sheaf. To use a Čech complex, verify either the relevant low-degree comparison or acyclicity of the chosen intersections. None of these justifications can be replaced by the assertion that the space is familiar or finite-dimensional.   "
},
{
  "id": "sh-c11-cochain-definition",
  "level": "2",
  "url": "sh-c11.html#sh-c11-cochain-definition",
  "type": "Definition",
  "number": "11.1",
  "title": "Singular cochains with local coefficients.",
  "body": " Singular cochains with local coefficients  Singular cochain Local coefficients Singular cohomology   For , let be the set of continuous maps , with ordered vertices . Define For a cochain and an -simplex , set where omits the th vertex and is the edge from the first to the second vertex. The cohomology of this complex is denoted .   "
},
{
  "id": "sh-c11-cochain-properties",
  "level": "2",
  "url": "sh-c11.html#sh-c11-cochain-properties",
  "type": "Proposition",
  "number": "11.2",
  "title": "",
  "body": "  The displayed differential satisfies . A continuous map and a locally constant sheaf on give a cochain map There is an augmentation of presheaf complexes on  sending a section to its values at points.    In , the two occurrences of each codimension-two face have opposite signs. Their coefficient identifications agree: on a triangular face the transport along the direct edge equals transport along the two successive edges, because the two paths are homotopic in that face. Every term therefore cancels with its partner. Pullback commutes with edge transports and faces, proving the cochain-map assertion. A section of is preserved by transport along every path, so its degree-zero differential vanishes.   "
},
{
  "id": "sh-c11-topology-definition",
  "level": "2",
  "url": "sh-c11.html#sh-c11-topology-definition",
  "type": "Definition",
  "number": "11.3",
  "title": "Local contractibility and covering assumptions.",
  "body": " Local contractibility and covering assumptions  Local contractibility Paracompactness Hereditary paracompactness   We say that is locally contractible if every point has a basis of contractible open neighborhoods. In this chapter, a paracompact space is Hausdorff and every open covering has a locally finite open refinement. We say that is hereditarily paracompact Hausdorff if every subspace is paracompact Hausdorff. For the proof below, it suffices that every open subspace is paracompact Hausdorff.   "
},
{
  "id": "sh-c11-local-resolution",
  "level": "2",
  "url": "sh-c11.html#sh-c11-local-resolution",
  "type": "Lemma",
  "number": "11.4",
  "title": "",
  "body": "  If is locally contractible, the augmented sheaf complex is exact.    Fix and trivialize on a neighborhood of , with value . Restrict to a cofinal basis of contractible open neighborhoods inside it. On each such neighborhood the augmented singular cochain complex has cohomology in degree zero and zero in positive degrees. This is the ordinary singular contraction argument, with the trivialized coefficients. Filtered colimits of modules are exact and commute with taking cohomology. Since sheafification preserves stalks, the same statement holds for the stalk of at . The augmentation identifies the degree-zero stalk with . Exactness on all stalks proves the claim.   "
},
{
  "id": "sh-c11-cochain-lifting",
  "level": "2",
  "url": "sh-c11.html#sh-c11-cochain-lifting",
  "type": "Lemma",
  "number": "11.5",
  "title": "",
  "body": "  Suppose that every open subspace of is paracompact Hausdorff. Then for every open and every , the natural map is surjective. Each sheaf is flabby.    Let . Choose open sets covering and cochains on representing . The shrinking property of paracompact Hausdorff spaces gives a locally finite open refinement and indices with , where closure is taken in . This is the point-set topology fact used in the argument.  Define a cochain on as follows. For a simplex whose image lies in some , choose one such and take its value from . For every other simplex take zero. We show that the germ of represents at every .  Choose a neighborhood of meeting only finitely many . After shrinking it, every remaining such satisfies : the other finitely many closures can be avoided. Hence all the remaining contain . Choose one index with . The cochains and have the same sheaf germ at , so on a sufficiently small neighborhood they agree on all simplices. Only finitely many agreements are needed. Choose one neighborhood on which all of them hold. Every simplex in is eligible for at least one , and whichever eligible index was chosen, its value equals the value from . Thus has the required germ at .  This proves surjectivity. A section of on an open set can now be represented by one cochain there, and that cochain can be extended by zero to the ambient open set. Sheafifying gives an extension of the original section. Therefore is flabby.   "
},
{
  "id": "sh-c11-small-cochains",
  "level": "2",
  "url": "sh-c11.html#sh-c11-small-cochains",
  "type": "Definition",
  "number": "11.6",
  "title": "Small and locally zero cochains.",
  "body": " Small and locally zero cochains  Small singular simplex Locally zero cochain   For an open covering of , a singular simplex is -small if its image lies in one member of the covering. Let be the cochain complex assigning values only to these simplices, with the same differential. A cochain on is locally zero if each point has an open neighborhood on all of whose simplices its values vanish.   "
},
{
  "id": "sh-c11-small-simplex-lemma",
  "level": "2",
  "url": "sh-c11.html#sh-c11-small-simplex-lemma",
  "type": "Lemma",
  "number": "11.7",
  "title": "",
  "body": "  For every open covering , restriction is a quasi-isomorphism     Barycentric subdivision makes a sufficiently fine subdivision of any one simplex small for the inverse-image covering of that simplex. The usual subdivision homotopy and the construction of a small-chain inverse give the small-simplex theorem; see . For local coefficients, every subdivision and prism lies in the image of the original simplex. Pull back to that simplex and transport all coefficient values from a chosen vertex. Since a simplex is contractible, the transports agree under the face and prism identifications. Thus the same subdivision and homotopy formulas hold with these coefficients, and give homotopy inverse cochain maps after restriction.  It is the chain homotopy construction that permits arbitrary coefficient modules: dualizing a quasi-isomorphism alone would not suffice. The local-coefficient form of subdivision and excision is also described in .   "
},
{
  "id": "sh-c11-comparison-theorem",
  "level": "2",
  "url": "sh-c11.html#sh-c11-comparison-theorem",
  "type": "Theorem",
  "number": "11.8",
  "title": "",
  "body": "  Let be locally contractible and suppose that every open subspace is paracompact Hausdorff. For every locally constant -module sheaf , there are natural isomorphisms They are natural in the coefficient sheaf and in continuous maps between spaces satisfying these hypotheses.    Let be the module of locally zero -cochains. It is the kernel of the map from cochains to sections of . It is also the union, over open coverings, of the kernels of restriction to the small cochains for that covering. By , the natural map is onto, so with the colimit taken toward finer coverings. Each restriction to small cochains is surjective degree by degree, since arbitrary values can be assigned to the omitted simplices. This explains the last quotient description.  By , the maps from the original singular complex into every small-cochain complex are quasi-isomorphisms. Exactness of filtered colimits shows that the map into their colimit is a quasi-isomorphism as well. Thus is a quasi-isomorphism. By and , the augmented complex is a flabby resolution of . Its global sections therefore compute , proving the comparison.  The augmentation, passage to germs, and restriction of cochains are natural maps. Pullback by a continuous map sends a simplex to its composite and transports the coefficient stalk by the inverse-image identification. These maps commute with the augmentation and differential. The isomorphism on cohomology therefore respects pullback; choices of refinements in the proof do not become choices in the resulting comparison.   "
},
{
  "id": "sh-c11-interval",
  "level": "2",
  "url": "sh-c11.html#sh-c11-interval",
  "type": "Corollary",
  "number": "11.9",
  "title": "",
  "body": "  For every interval , including half-open and closed intervals, and every constant coefficient module , one has for . If is nonempty, evaluation gives . Every locally constant sheaf on a nonempty interval is constant.    An interval is metrizable and has a basis of contractible neighborhoods. Singular contraction and give the cohomology assertion. Triviality of a local system follows from parallel transport on the interval: paths with fixed endpoints are homotopic, and transport from one base point gives local trivializations which agree. Equivalently, apply the monodromy description from .   "
},
{
  "id": "sh-c11-local-cohomological-connectivity",
  "level": "2",
  "url": "sh-c11.html#sh-c11-local-cohomological-connectivity",
  "type": "Definition",
  "number": "11.10",
  "title": "A local vanishing condition.",
  "body": " A local vanishing condition  Cohomological local connectedness Semilocal contractibility   For an Abelian group , consider the condition We call this cohomological local connectedness with coefficients in , in the colimit sense. We say that is semilocally contractible if for every , with open, there is an open such that the inclusion is null-homotopic.   "
},
{
  "id": "sh-c11-general-constant-comparison",
  "level": "2",
  "url": "sh-c11.html#sh-c11-general-constant-comparison",
  "type": "Theorem",
  "number": "11.11",
  "title": "",
  "body": "  Let be an Abelian group and let satisfy the colimit local-vanishing condition in . Then singular cohomology with coefficients in and sheaf cohomology of are naturally isomorphic in every degree. No Hausdorff or paracompactness assumption is required. In particular, this holds for every semilocally contractible space.    This is . The semilocally contractible version is proved by using a different flabby resolution. We use these broader results as external comparison theorems. Their proofs remove the covering assumptions by changing the method, rather than by assuming that ordinary sheafification preserves flabby presheaves.   "
},
{
  "id": "sh-c11-cylinder",
  "level": "2",
  "url": "sh-c11.html#sh-c11-cylinder",
  "type": "Lemma",
  "number": "11.12",
  "title": "",
  "body": "  For every topological space and every , the adjunction unit is an isomorphism Consequently pullback gives an isomorphism The maps back induced by are all the inverse of this isomorphism.    We use the compact-fiber cohomology statement for this projection: for a bounded-below complex , A precise general form is Stacks, Lemma 20.18.1 . Its assumptions here are satisfied without conditions on : projection along the compact space is closed, its relative diagonal is closed because is Hausdorff, and every fiber is compact. We only use this compact-projection case, not the general theory of support functors.  The restriction of to the fiber is the constant sheaf with value . By , its cohomology is in degree zero and zero otherwise. Under this identification the unit is the identity on . It is therefore a quasi-isomorphism on every stalk. Derived composition gives the assertion for global sections. Since , functoriality makes each map induced by an inverse to the same isomorphism.   "
},
{
  "id": "sh-c11-cylinder-local-system",
  "level": "2",
  "url": "sh-c11.html#sh-c11-cylinder-local-system",
  "type": "Lemma",
  "number": "11.13",
  "title": "",
  "body": "  If is locally constant on , then for , is locally constant, and the counit is an isomorphism. Restriction to either endpoint induces isomorphisms on derived global sections.    On each fiber, is a locally constant sheaf on an interval, hence is constant and acyclic. The compact-projection formula used in identifies with its sections on the fiber and kills all higher direct images. Evaluation of these sections at is an isomorphism. These evaluations are the stalk maps of the counit, proving it is an isomorphism. Pulling back along identifies with , which is locally constant. Applying to proves the final assertion.   "
},
{
  "id": "sh-c11-homotopy-theorem",
  "level": "2",
  "url": "sh-c11.html#sh-c11-homotopy-theorem",
  "type": "Theorem",
  "number": "11.14",
  "title": "",
  "body": "  Let be a homotopy from to , and let be a locally constant -module sheaf on . Transport along this homotopy gives an isomorphism such that the induced pullback maps satisfy If is constant, the standard coefficient identifications make the identity, so the two pullback maps are equal.    Apply to . Evaluation at the two endpoints identifies with and ; their composite is . Equivalently, its stalk at is parallel transport along .  The two maps factor as pullback by followed by restriction to the endpoint. The endpoint restriction maps become equal after the displayed transport, since under the counit they are both the inverse of pullback along . This proves the cohomology identity. For constant coefficients, the transported constant section has the same value at both endpoints, giving the last assertion.   "
},
{
  "id": "sh-c11-contractible",
  "level": "2",
  "url": "sh-c11.html#sh-c11-contractible",
  "type": "Corollary",
  "number": "11.15",
  "title": "",
  "body": "  A homotopy equivalence induces isomorphisms for every locally constant sheaf . If is nonempty and contractible, every locally constant -module sheaf on is constant, and No separation or paracompactness assumption is needed.    Pullback of local systems along a homotopy equivalence is an equivalence, with inverse given by a homotopy inverse and the coefficient transports from the two homotopies. The functorial pullback maps on cohomology respect these transports by ; applying the theorem to the composites gives the stated isomorphisms. For a contraction, pullback from a point is therefore an equivalence of local-system categories and gives the cohomology formula, since sections on a point are an exact functor. The same statements are .   "
},
{
  "id": "sh-c11-sphere",
  "level": "2",
  "url": "sh-c11.html#sh-c11-sphere",
  "type": "Example",
  "number": "11.16",
  "title": "",
  "body": "  For and any -module , When , the two occurrences mean one copy in degree zero and one in degree one. Every local system on for is constant.    Use two enlarged hemispheres . They are contractible, and their intersection deformation retracts onto . For , the intersection has two contractible components, and the calculation is with identity monodromy. For , the intersection is connected, so the degree-zero difference map is onto and has diagonal kernel. Mayer–Vietoris gives the asserted degree zero, vanishing in degree one, and Induction proves the formula. The cohomology on the contractible sets and the deformation retraction are justified by , not by an implicit assumption that every open set is acyclic. Triviality of the local systems follows from simple connectivity and the monodromy classification.   "
},
{
  "id": "sh-c11-sine-curve",
  "level": "2",
  "url": "sh-c11.html#sh-c11-sine-curve",
  "type": "Example",
  "number": "11.17",
  "title": "",
  "body": "  Let be the closed topologist's sine curve For a nonzero module , the natural comparison from constant-sheaf sections to singular cohomology fails to be an isomorphism already in degree zero.    This space is connected and has two path components: the graph and the vertical segment. To see the first assertion, the graph is connected and its closure is all of . For the second, a path leaving the vertical segment would have a continuous positive first coordinate approaching zero; the intermediate value property forces its second coordinate to take the values and arbitrarily close to the departure time, contradicting continuity. Each of the two displayed pieces is itself path-connected.  A locally constant function from the connected space to the discrete set is constant, so . A singular degree-zero cocycle can independently choose a value on each path component, so . Evaluation of a sheaf section as a degree-zero cochain sends to . It is not onto. The space is compact and metrizable; these properties do not replace the missing local condition.   "
},
{
  "id": "sh-c11-nonlocal-coefficients",
  "level": "2",
  "url": "sh-c11.html#sh-c11-nonlocal-coefficients",
  "type": "Example",
  "number": "11.18",
  "title": "",
  "body": "  Homotopy equivalence need not preserve cohomology with an arbitrary sheaf pulled back. Let , let , and let be the skyscraper sheaf at , with . Then is a homotopy equivalence, but     The first group is the global sections of the skyscraper, and the second is its stalk at , which vanishes. The sheaf is not locally constant near . Its restriction to a homotopy path therefore supplies no invertible coefficient transport. This is exactly the missing input in .   "
},
{
  "id": "sh-concordance",
  "level": "1",
  "url": "sh-concordance.html",
  "type": "Appendix",
  "number": "A",
  "title": "Terminology and hypotheses",
  "body": " Terminology and hypotheses   This appendix collects distinctions used in the statements of the note. The references lead to definitions, proofs, and examples; the conventions listed here do not add hypotheses to those statements.    Objects and notation  Associated sheaf. The notation in and in the inverse-image construction denote sheafification. The two constructions agree by their universal property. A presheaf-to-sheaf map that induces isomorphisms on stalks need not be a sectionwise isomorphism before sheafification; see and .  Constant and locally constant. The constant sheaf consists of locally constant functions to the discrete module . Its sections on a disconnected open set need not be one copy of . A locally constant sheaf has constant models locally, with possibly nontrivial monodromy globally. Isomorphic stalks do not supply these local trivializations or determine the gluing. See , , and the examples in .  Local system and finite rank. Here a local system means an arbitrary locally constant -module sheaf. Finite rank over a field, finite local freeness over a ring, and finite generation of a local coefficient module are separate conditions. Some sources incorporate finiteness into the words local system . Our finite-rank assertions state it explicitly; over the zero ring rank is not an invariant. Morphisms between unrestricted constant module sheaves can also require a distinction between local constancy after evaluation on each element and local constancy of the entire homomorphism; see .  Étale terminology. An étalé space in is a local homeomorphism over . A covering map requires simultaneous trivialization of the entire inverse image of a neighborhood, and corresponds to a locally constant sheaf of sets; see . These terms do not introduce the étale topology of a scheme.    Operations and exactness  Inverse images. The notation always includes sheafification. The intermediate presheaf is denoted ; see . Some topological sources write for our exact inverse image. A general ringed inverse image additionally extends scalars and need not be exact. Fixed coefficients satisfy , so the two functors coincide in this special case. We retain to display that setting.  Internal and global Hom. The module consists of global sheaf morphisms; the sheaf assigns morphisms of restrictions to each open set. Derived global Hom is an object of ; derived internal Hom is an object of . Their cohomologies are global Ext groups and Ext sheaves, respectively. Derived global sections relate them in . The stalk of internal Hom or an Ext sheaf need not be Hom or Ext of the stalks; see and .  Exactness. Exactness of module sheaves is stalkwise exactness, not exactness of their sections on every open set. Kernels are sectionwise kernels; cokernels require sheafification. An epimorphism therefore permits local lifts but need not permit a global lift. Global sections and direct image are left exact; inverse image for fixed coefficients is exact. See , , and the connecting classes in .  Flabby, injective, and acyclic. Flabby and flasque mean the same extension property for sections. Injectivity is an extension property for morphisms across arbitrary monomorphisms. An injective sheaf is flabby; flabby sheaves are acyclic for sections on every open set, but need not be injective. The Godement resolution is flabby, rather than automatically injective. For unbounded complexes, injective or acyclic terms alone do not replace the K-injective condition. See , , and .    Cohomology and covering choices  Three cohomology constructions. The groups belong to a fixed covering. The groups are their colimit under refinement. Derived sheaf cohomology is . These definitions are distinct. Acyclicity of every finite intersection gives an all-degree fixed-cover comparison. On arbitrary spaces, the all-cover comparison is an isomorphism in degrees zero and one and an injection in degree two; see , , and .  Complexes and sheaves. Hypercohomology means cohomology of derived sections of a complex; we write for it. This is a module, whereas is a sheaf. Bounded-below hypotheses on the spectral sequences in ensure the stated convergence. Existence of unbounded derived sections does not remove those hypotheses.    Which topology assumptions are being used?  The basic theory uses arbitrary topological spaces. The monodromy classification in adds local path connectedness and semilocal simple connectedness; the fundamental-group form also chooses a point in a path-connected space.  The explicit local-coefficient singular comparison in assumes a basis of contractible neighborhoods and paracompact Hausdorff open subspaces. Local contractibility gives exactness on stalks; the covering condition supports the flabby-resolution proof. Broader constant-coefficient comparison theorems in replace these assumptions with a specified local vanishing condition. They do not justify deleting assumptions from the earlier proof.  Homotopy invariance in holds on arbitrary spaces for locally constant sheaves, independently of singular comparison. A homotopy supplies an isomorphism between the two pullback coefficient sheaves; the induced maps agree after that transport. Arbitrary sheaves do not have such transport, as the skyscraper counterexample shows. Contractibility consequently gives acyclicity for constant coefficients, not for every sheaf.   "
},
{
  "id": "sh-references",
  "level": "1",
  "url": "sh-references.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Glen E. Bredon. Sheaf Theory . Second edition. Graduate Texts in Mathematics 170. Springer, 1997. Publisher .  Roger Godement. Topologie algébrique et théorie des faisceaux . Actualités scientifiques et industrielles 1252. Hermann, 1958; later reprints. Publisher .  Allen Hatcher. Algebraic Topology . Cambridge University Press, 2002. Author's text .  Birger Iversen. Cohomology of Sheaves . Universitext. Springer, 1986. Publisher .  Masaki Kashiwara and Pierre Schapira. Sheaves on Manifolds . Grundlehren der mathematischen Wissenschaften 292. Springer, 1990. Publisher .  Masaki Kashiwara and Pierre Schapira. Categories and Sheaves . Grundlehren der mathematischen Wissenschaften 332. Springer, 2006. Publisher ; Authors' errata .  Dan Petersen. A remark on singular cohomology and sheaf cohomology . Author's manuscript, version 3, 3 October 2021. arXiv .  Pierre Schapira. An Introduction to Sheaves on Grothendieck Topologies . Lecture notes, version dated 15 October 2026. Author's text . The manuscript is marked work in progress; cited statements are compared with the sources indicated in the text.  Yehonatan Sella. Comparison of sheaf cohomology and singular cohomology . Author's manuscript, version 3, 24 March 2016. arXiv .  Nicolas Spaltenstein. Resolutions of unbounded complexes . Compositio Mathematica 65 (1988), no. 2, 121–154. Journal archive .  The Stacks Project Authors. The Stacks Project . Results are identified by stable tags; references checked 26 October 2026. Project .  Charles A. Weibel. An Introduction to Homological Algebra . Cambridge Studies in Advanced Mathematics 38. Cambridge University Press, 1994. Publisher .  "
},
{
  "id": "sh-index",
  "level": "1",
  "url": "sh-index.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "Index "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
