var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ha-c00",
  "level": "1",
  "url": "ha-c00.html",
  "type": "Chapter",
  "number": "0",
  "title": "Conventions and sources",
  "body": " Conventions and sources   Homological algebra studies the failure of exactness and the constructions that preserve its consequences. Resolutions give explicit calculations; derived categories express the constructions independently of a resolution. These notes develop both descriptions, then study localization, monoidal structures, and an abstract form of the six operations.  The prerequisites are modules and ordinary category theory, including adjunctions, limits, and localization. The accompanying notes on 1-category theory develop that language. Additive, abelian, and monoidal structures are established here with their exactness properties. Concrete theories of sheaves and geometric duality have separate developments.    Size, rings, and variance  Fix a universe of small sets, contained in a larger universe when necessary. Categories are locally small at the indicated scale. Small limits, colimits, generating sets, and indexed sums refer to the fixed universe. A localization is allowed initially to live in a larger universe; local smallness at the original scale must be proved or assumed. A set of roofs can be much larger than a hom-set in the original category. The existence of the categorical localization alone does not settle this size question. Suitable resolutions will give hom-set calculations in the derived categories used below.  Rings are associative with identity, and ring homomorphisms preserve the identity. An -module is a left module unless the side is specified. Tensor products over a noncommutative ring require a right action on the first factor and a left action on the second. When is treated as a symmetric monoidal category under , the ring is commutative. The zero ring is allowed.  We write for the group of morphisms in an additive category. An internal Hom is an object of a specified monoidal category, denoted in the abstract monoidal chapters; the notation is also used when its ambient category is specified. Its existence is extra structure. The complex of morphisms between complexes is distinguished from both: it is denoted .  A functor is called exact in an abelian context if it preserves short exact sequences. In a triangulated context an exact functor includes a specified compatibility with translation and preserves distinguished triangles. The ambient category determines which meaning is intended. Some authors reserve triangulated functor for the second meaning. The compatibility is part of the data: an additive functor between triangulated categories does not acquire it merely by preserving some triangles on objects.    Degrees and signs  Complexes have cohomological grading: . Their translations satisfy Thus . An object placed in degree is . A homologically graded complex can be reindexed by ; differential and tensor signs must be translated with this convention.  For a chain map , use For a homogeneous map of degree , the differential on the Hom complex is . The tensor differential is . The symmetry sends to .  Tensor complexes use direct sums on diagonals. Hom complexes use products. For an unbounded double complex these totalizations can differ, and an exactness assertion about one does not automatically apply to the other. These distinctions are treated in and .  The symbols and denote the truncations that preserve the retained cohomology; and denote brutal truncations. All four are compared in . In cohomology vanishes in sufficiently negative degrees; in it vanishes in sufficiently positive degrees. The bounded derived category is .    Homology, cohomology, and dual terminology  Homological grading Cohomological grading Resolution Coresolution  We use complex for a cochain complex unless another grading is specified, and call its objects its cohomology. We also use the standard expressions chain map , chain homotopy , and homotopy category for these complexes. Replacing every occurrence of chain by cochain would add no mathematical structure. The phrase homological algebra names the subject and includes both grading conventions.  For a homologically graded complex , our reindexing is and . It gives If homological translation is written , its differential is ; it corresponds exactly to . A complex bounded below in the homological indices is bounded above after this reindexing. For example, the usual projective resolution has in cochain degree . Statements involving , , or first-quadrant diagrams must therefore be translated together with the indices.  The object is defined by the same kernel–image construction in both conventions. Calling it homology or cohomology does not by itself change covariance: a morphism of cochain complexes induces a map of cohomology in the same direction. Contravariance can instead come from a functor used to construct the complex, such as the first argument of Hom. Thus neither an upper index nor the prefix co- alone determines the variance of a functor.  An augmented projective resolution is represented here by with in nonpositive degrees; a coaugmented injective resolution is with in nonnegative degrees. Some authors call the latter a coresolution , reserving resolution for an augmentation. We use projective resolution and injective resolution and always specify the arrow. This is separate from the choice of chain or cochain indices. Likewise, a resolution of a complex need not consist of objects projective or injective in the abelian category of complexes. The bounded and unbounded replacement conditions are stated in and .  For a right exact additive functor and a left exact additive functor, respectively, our conventions give and whenever these constructions exist and agree with classical resolutions. In particular, Ext is contravariant in its first argument and covariant in its second; Tor is covariant in both. We retain their established names and indices rather than renaming one of them according to its cochain realization. For general complexes, positive and negative derived degrees may both occur. A cohomological spectral sequence has differential of bidegree ; simultaneous negation of both indices converts it to the homological bidegree .  Other occurrences of co- describe categorical duality, not a grading convention. Limits and colimits, kernels and cokernels, products and coproducts are related by passing to the opposite category. A monad has multiplication ; a comonad has comultiplication , with the correspondingly reversed unit and associativity laws. The dual of a projective object is called injective, rather than coprojective. These established names do not follow a uniform spelling rule. We specify the arrows or universal property whenever the distinction is used. Ordinary monads and comonads are treated in the category theory notes .  We do not use cohomotopy to mean a homotopy between cochain maps, cocomplex as the default name for a cochain complex, or coexact as a replacement for exact. The word exact retains the kernel–image condition in an abelian category, and its triangulated meaning is specified separately. At later occurrences, a footnote records a different convention only when it affects interpretation of a statement or comparison with a source.    Reading and reference conventions  The first chapters establish abelian and closed monoidal structures, complexes, classical derived functors, and spectral sequences. The derived chapters compare these constructions with their universal formulations and distinguish bounded arguments from unbounded ones. The later chapters add -structures, representability, recollement, and duality. The last chapter specifies an indexed six-operation framework and derives consequences from its stated axioms.  For a general abelian category, enough injectives or projectives is always a hypothesis when needed. Grothendieck categories supply a broad setting for K-injective resolutions. Flatness additionally refers to a specified tensor product. Compact generation, monoidal structure, and a six-operation system are separate hypotheses; none is silently included in the word Grothendieck.  The supplement explains exact structures and quasi-abelian categories. It distinguishes admissible or strict exact sequences from the unrestricted abelian theory. The main chapters continue to state their abelian hypotheses; the supplement does not implicitly extend every theorem to that wider setting.  The organizing references are , , and . Classical calculations and spectral sequences are compared with . The unbounded constructions are also compared with . References to a chapter give a thematic source; a quoted existence theorem is accompanied by a more specific location or stable tag.  The abstract operations use , , and selected general constructions from . The frameworks compared in have different hypotheses and levels of structure. We specify the version used here rather than treating six-operation formalism as a uniquely fixed definition.  Proofs are retained when they explain a construction or a dependence on hypotheses. Technical general existence theorems may be cited with their precise scope. Footnotes compare terminology, conventions, and variants. A reader may omit these comparisons while retaining the assumptions and statements in the main text.   "
},
{
  "id": "ha-c01",
  "level": "1",
  "url": "ha-c01.html",
  "type": "Chapter",
  "number": "1",
  "title": "Additive and abelian categories",
  "body": " Additive and abelian categories   The operations on complexes require addition of morphisms; their cohomology requires kernels and quotients. These requirements lead to additive and abelian categories. We keep them separate: a category can support chain homotopies and mapping cones even when it has no cohomology objects. The definitions and exactness criteria here follow and .    Addition and biproducts   Preadditive and additive categories  Preadditive category Additive category Biproduct   A preadditive category is a category in which each is an abelian group and composition is additive in each variable. Its additive identity is the zero morphism .  A biproduct of consists of an object and morphisms , satisfying and . We denote it by .  An additive category is a preadditive category with a zero object and all finite biproducts. The empty biproduct is a zero object. An additive functor is a functor inducing group homomorphisms on all morphism groups.    The biproduct equations say that is both a product and a coproduct, with the indicated projections and inclusions. A morphism between finite biproducts is a matrix, and composition is matrix multiplication. This gives a categorical meaning to block matrices without choosing bases. Some authors call a preadditive category an additive category and impose finite biproducts separately. Our convention includes them. “Linear” means enrichment over a specified commutative ring; preadditive means linear over .   In a preadditive category, a finite product is a biproduct, and a finite coproduct is a biproduct. An additive functor preserves zero objects and finite biproducts. Conversely, a functor between additive categories that preserves zero objects and finite biproduct diagrams is additive.  For a product , define by its components . The two endomorphisms and have the same composites with every projection, so they agree. The coproduct assertion is dual. An additive functor preserves the defining equations. For the converse, addition is recovered from the diagonal and codiagonal by . Preservation of the biproduct diagrams preserves this formula.   The categories and finitely generated projective -modules are additive. The latter category usually has fewer kernels and cokernels. For example, multiplication by on is both monic and epic in the category of finitely generated free abelian groups: cancellation on either side follows because the relevant morphism groups are torsion-free. It is not an isomorphism. This category is therefore not abelian.  There is an intrinsic version of additivity. In a category with a zero object and finite products and coproducts, there is a canonical map from a coproduct to the corresponding product, whose diagonal components are identities and whose other components are zero. If these maps are invertible, the diagonal–codiagonal formula defines a commutative monoid structure on every morphism set. Requiring these monoids to be groups recovers an additive category. Thus the addition is determined by the categorical structure when it exists; it is not an arbitrary choice of addition on each set. See .   The opposite of an additive category is additive. If is small and is additive, the functor category is additive, with addition of natural transformations and finite biproducts defined componentwise. If is abelian, so is this functor category; kernels, cokernels, and exactness are computed componentwise.  Adding the component equations of naturality proves that the sum of two natural transformations is natural. A morphism of diagrams carries the kernel of each component into the next kernel, by its universal property. This defines the kernel diagram and its universal map. The cokernel construction is dual. The coimage-to-image map is an isomorphism because each of its components is one.   These constructions apply to diagrams of modules and later to complexes. A ring can itself be regarded as a preadditive category with one object: its endomorphism group is the additive group of the ring and composition is multiplication. An additive covariant functor from this category to is a left module. The one-object category is usually not additive because the required finite biproducts have not been added.  Finite biproduct notation does not identify infinite products and coproducts. For a small family of abelian groups, includes the families with finite support. Even when both objects exist in an abelian category, their universal properties remain different. This distinction accounts for the different totalizations used later.    Kernels, images, and exactness   Abelian categories and exact sequences  Abelian category Image Coimage Exact sequence  Let be additive.  A kernel of represents morphisms into annihilated by ; a cokernel represents morphisms out of annihilating . When they exist, set and .  The category is abelian if all kernels and cokernels exist and the canonical morphism is an isomorphism for every .  In an abelian category, a sequence is exact at if as subobjects of . A short exact sequence is an exact sequence .    The canonical map in this definition comes from factoring through its cokernel of the kernel and then through its kernel of the cokernel. Equality of subobjects means equality of their classes of monomorphisms, not equality of chosen kernel objects. The definition gives a factorization Thus image factorization has the same form as for modules. In an additive category with kernels and cokernels, a morphism for which the coimage-to-image map is invertible is often called strict. Every morphism in an abelian category is strict. This is the strictness of morphisms in , not strictness of monoidal constraints.   Let be abelian.  Every monomorphism is the kernel of its cokernel, and every epimorphism is the cokernel of its kernel. A morphism that is both monic and epic is an isomorphism.  Finite limits and finite colimits exist. Epimorphisms are stable under pullback, and monomorphisms are stable under pushout.  For subobjects , there is a canonical isomorphism . For subobjects , there is a canonical isomorphism .    The first assertion follows from image factorization. Finite limits are constructed using biproducts and kernels; for example, the pullback of and is . The dual construction gives pushouts. The stability and quotient assertions are the diagram and isomorphism lemmas in . These arguments use the abelian axiom, so they do not extend to every additive category with kernels and cokernels.  More explicitly, a kernel satisfies , and every with has a unique factorization through . The cokernel has the reversed property. A morphism is monic if and only if its kernel is zero, and epic if and only if its cokernel is zero. In an additive category with kernels and cokernels these tests already hold; the stronger assertions that every monomorphism and epimorphism is normal are what the abelian axiom adds. Equivalently, an additive category with kernels and cokernels is abelian if every monomorphism is a kernel and every epimorphism is a cokernel.   In an abelian category, intersections of two subobjects are their pullbacks, and the sum is the image of . Inverse image along is defined by pullback, and direct image is image factorization. They satisfy For , subobjects of correspond to subobjects of containing . The subobject lattice is modular: if , then .  The pullback property proves the displayed equivalence. Pulling back a subobject of gives a subobject containing the kernel ; conversely, quotienting a subobject containing gives a subobject of . Image factorization and stability of epimorphisms under pullback show that these operations are inverse. To prove modularity, pass to . Both sides correspond to the image of , since the inverse image of in is . The correspondence gives equality in .   A subobject is an isomorphism class of monomorphisms with fixed target. An intersection or sum is therefore a subobject, even when no particular representative has been chosen. We do not yet assert that all subobjects form a small set; a generator will imply that size property in . The finite constructions in this section need no such assumption.   For a commutative square with arrows , , , and , form the sequence The square is a pullback if and only if the first arrow is a kernel of the second. It is a pushout if and only if the second is a cokernel of the first. It is both if and only if the sequence, extended by zero at both ends, is short exact. Pulling back a short exact sequence along a map to its last term gives a short exact sequence with the same kernel. Pushing out along a map from its first term gives one with the same cokernel.  A map to is a pair of maps, and its composite to vanishes precisely when their two composites cancel. Changing the sign on the second component converts this condition into the pullback condition. The pushout assertion is dual. For the last assertions use stability of epimorphisms under pullback and of monomorphisms under pushout; the universal properties identify the remaining kernel and cokernel.   Consequently a short exact sequence may be pulled back in its quotient variable and pushed out in its subobject variable. These operations explain the two variances of extension classes before any resolution is chosen. They will define the functoriality of Yoneda extensions in .  Modules over any ring form an abelian category. Finite-dimensional vector spaces and finitely generated abelian groups form abelian categories, although they have no arbitrary direct sums. Finitely generated modules over a left noetherian ring form an abelian category because kernels remain finitely generated. For a general ring this assertion can fail at kernels.   Split sequences and idempotents  Split exact sequence Idempotent splitting  A sequence in an additive category is split exact if it is isomorphic to the biproduct sequence. An idempotent  splits if there are and with and .    A short exact sequence in an abelian category is split if and only if its epimorphism has a section, equivalently if its monomorphism has a retraction. Every idempotent in an abelian category splits.  If , then factors uniquely through , giving . The relations , , and show that has inverse . The retraction criterion is dual. For an idempotent , factor through its image. Since , cancellation gives .   Additive functors preserve split exact sequences. Exact sequences need not split: has no section. An additive category equipped with its split exact sequences is an example of an exact category. More general exact categories specify which kernel–cokernel pairs count as exact, subject to stability and composition axioms; their theory is developed in . The word “exact” also occurs in regular category theory, where it concerns effective equivalence relations. That meaning differs from the exact structures on additive categories used in homological algebra.    Finiteness of objects   Chain conditions and length  Noetherian object Artinian object Object of finite length  An object of an abelian category is noetherian if every increasing sequence of subobjects stabilizes, and artinian if every decreasing sequence stabilizes. A nonzero object is simple if it has no proper nonzero subobject. An object has finite length if it has a finite filtration by subobjects with simple successive quotients; zero has length zero.   These conditions concern subobjects in the specified category. Finite generation and finite presentation, introduced through colimits in later chapters, are different definitions. For modules, the noetherian condition is equivalent to finite generation of every submodule, including the whole module. Finite generation of the whole module alone does not suffice over an arbitrary ring.   An object has finite length if and only if it is both noetherian and artinian. Its simple factors, counted with multiplicity, are independent of the chosen filtration up to permutation and isomorphism. In a short exact sequence, the middle object has finite length if and only if both outer objects do, and its length is then the sum of their lengths.   For the existence assertion, a nonzero noetherian object has a maximal proper subobject. Repeat inside that subobject. The resulting decreasing sequence stops by the artinian condition and gives a composition series. Conversely, induction on a composition series proves both chain conditions, using intersection with a subobject and its image in the quotient. Uniqueness of factors and additivity of length are the Jordan–Hölder theorem; see . This statement counts isomorphism classes with multiplicity, not distinguished subobjects of the original object.  The abelian group is noetherian, since every subgroup is cyclic, but is not artinian: the chain never stabilizes. A finite-dimensional vector space has length equal to its dimension. A finitely generated module over a noetherian ring can have infinite length, as the first example shows.  These distinctions will matter when comparing general Grothendieck categories with locally finite categories in tensor theory. Exactness is a condition on sequences; finite length is a condition on objects. Neither definition should be inferred merely from the presence of the other in a familiar example.   Subobjects, quotients, and extensions of noetherian objects are noetherian. The same assertion holds for artinian objects. A nonzero morphism between simple objects is an isomorphism; consequently the endomorphism ring of a simple object is a division ring.  In an extension , an increasing chain in gives increasing chains of intersections with and images in . If both stabilize, the short exact sequences for two successive terms and the short five lemma show that the original terms agree. Subobjects and quotients use these same intersection and inverse-image operations. Decreasing chains give the artinian statement. For a nonzero map between simple objects, its kernel must be zero and its image must be the whole target. Image factorization makes it an isomorphism.   The last assertion is Schur's lemma. It gives a division ring, not a chosen coefficient field. If the category is -linear, is algebraically closed, and is finite-dimensional over , then : each endomorphism has an eigenvalue as a linear operator on the finite-dimensional algebra, so its difference from some scalar cannot be invertible and must be zero. Finite length does not itself make morphism spaces finite-dimensional. A division algebra over , viewed as a one-dimensional module over itself, is simple regardless of its dimension over .   Semisimplicity in finite length Semisimple object  An object of finite length is semisimple if it is a finite direct sum of simple objects, allowing the empty sum for zero.    For a finite-length object , the following are equivalent: is semisimple; every subobject of is a direct summand; every short exact sequence with middle term splits. Subobjects and quotients of such an object are semisimple. If are pairwise nonisomorphic simple objects, then  The equivalence between the last two conditions is the splitting criterion. If every subobject splits, choose a simple subobject, split it off, and induct on length. For the reverse implication, write as a sum of simple objects and induct on . A nonzero subobject contains a simple subobject . Some projection from to a simple summand of is nonzero, hence invertible. That projection gives a retraction onto and a decomposition , with a sum of simples. Restricting the retraction to gives . Induction supplies the required complement and semisimplicity. Quotients are the complementary summands. Schur's lemma removes the off-diagonal blocks in the endomorphism ring formula.   Semisimple objects need not be closed under extensions. The sequence has simple outer terms and a nonsemisimple middle term. For modules of arbitrary size, the usual definition allows arbitrary direct sums of simple modules; the submodule and splitting characterizations still hold. We have stated the finite-length version separately because an arbitrary abelian category need not possess those sums. These conventions and the general semisimple-module result are treated in .    Exact functors   Exactness of additive functors  Exact functor Left exact functor Right exact functor  Let be additive between abelian categories. It is left exact if it sends every short exact sequence to an exact sequence ; it is right exact if is exact. It is exact if it has both properties.    An additive functor is left exact if and only if it preserves kernels, equivalently finite limits; the dual criterion holds for right exactness. An exact functor preserves images and coimages. A faithful exact functor reflects exact sequences and isomorphisms. For every , the functors and are left exact, the second viewed on .  Factor a morphism through its image and apply the short exact sequence criterion to its kernel sequence; this proves the kernel criterion. Additivity already preserves finite biproducts. Preservation of kernels and cokernels gives preservation of images. To reflect exactness, an exact sequence test reduces to the vanishing of when . Faithfulness reflects zero morphisms and zero objects. The Hom assertions are the universal properties of kernels and cokernels.   Contravariance matters in this assertion: applying to gives . Surjectivity of the last arrow is an additional lifting property, addressed in .   An additive left adjoint between abelian categories is right exact; an additive right adjoint is left exact. A functor with both a left and a right adjoint is exact, provided it is additive. If an exact functor reflects zero objects, it reflects exact sequences and is faithful.  Left adjoints preserve colimits and right adjoints preserve limits. For the last assertion, exactness identifies the image of a morphism after applying the functor with the functor of its image. If a morphism becomes zero, its image becomes zero, hence was zero already. This proves faithfulness, and the preceding criterion then reflects exactness.   Limits and colimits of diagrams explain a frequent asymmetry. When the required limits exist, the limit functor from a diagram category is right adjoint to the constant-diagram functor, hence left exact. A colimit functor is left adjoint and right exact. The assertion that a particular infinite limit or colimit is exact is an additional condition. For example, filtered colimits of modules are exact, while inverse limits need not preserve epimorphisms; this failure will give .    Embedding and finite diagrams   Every small abelian category admits a fully faithful exact functor for some ring . The same holds for an essentially small abelian category after choosing a small equivalent category.   This is the Freyd–Mitchell embedding theorem, in the form of . That source writes right modules; taking the opposite ring gives our left-module version. The target contains an exact full copy of the given abelian category. It may contain many additional modules, and the embedded category need not be closed under their arbitrary submodules or colimits. The ring depends on the chosen construction. The theorem does not say that an arbitrary large abelian category embeds exactly and fully into the modules over one small ring at the original universe. Enlarging the universe changes the size assertion. For the applications to finite diagrams below, a global embedding is unnecessary.  The proof is not a choice of underlying elements for each object. One construction first embeds exactly into . The opposite category is Grothendieck and has an injective cogenerator; reversing arrows supplies projective objects in the pro-category. A sufficiently large projective generator, chosen to cover every object of the original small category, gives an exact Hom functor to modules. The lifting arguments in prove full faithfulness on the original category. We use the theorem rather than develop pro-objects here.   Let be a locally small abelian category. Every finite diagram in is contained in an essentially small full abelian subcategory whose inclusion is exact. One may include any specified finite collection of its kernels, cokernels, and image factorizations. Consequently a finite diagram argument involving these constructions and their exactness can be checked after a fully faithful exact embedding of that subcategory into a module category.  Start with the objects of the diagram and the specified additional objects. Add a zero object and representatives of all finite biproducts, kernels, and cokernels of maps between the objects already chosen. Repeat this operation countably many times and take the full subcategory on the resulting objects. At each stage there is only a small set of maps by local smallness, so the union has a small set of objects up to the chosen size convention. Every finite construction involving objects of the union occurs at a later stage. The subcategory is additive and closed under the ambient kernels and cokernels. Its coimage-to-image maps are the ambient isomorphisms, so it is abelian and its inclusion is exact. Apply to a small equivalent category.   A faithful exact functor preserves and reflects the finite exactness conditions by . This justifies using elements to prove the diagram lemmas, even when the original category has no chosen underlying-set functor. It does not justify transferring projectivity, injectivity, infinite products, infinite colimits, or a tensor product. Those properties involve extra tests or structure beyond the finite exact diagram. The Gabriel–Popescu realization in makes a different assertion: it provides a generally left exact fully faithful embedding of an entire Grothendieck category, together with an exact left adjoint.    Diagram lemmas   Given a morphism of short exact sequences in an abelian category, with vertical maps , , and , there is a natural exact sequence In particular, if and are isomorphisms, then is an isomorphism.   Here is the construction of . Pull back along , obtaining an epimorphism with kernel . The composite factors through . Its composite with vanishes on , so descends to . Exactness and naturality follow from the kernel and cokernel calculations in . The last assertion is the short five lemma.  This construction explains why the connecting arrow is canonical even when an elementwise description chooses lifts. Module calculations can help discover the arrow, but its definition uses only a pullback and a quotient. The same construction, applied degree by degree, produces the connecting morphism in the cohomology sequence of complexes.    Consider a commutative diagram with exact rows and , and vertical maps . If is epic and are monic, then is monic. If are epic and is monic, then is epic. Thus is invertible if are invertible, is epic, and is monic.  In a commutative three-by-three diagram with all columns short exact, if the top and middle rows are short exact, then the bottom row is short exact. The dual assertion reconstructs the top row from the middle and bottom rows.    These are the four lemma, five lemma, and the stated forms of the nine lemma. One proves the first by replacing the row maps by their image factorizations and applying the snake lemma to the resulting short exact sequences. Applying the same construction to the maps between the first two rows proves the second. See for the diagrams and the categorical proofs. The endpoint assumptions in the five lemma cannot be omitted: they control the kernel and cokernel contributions entering from outside its middle three terms.  Element notation is safe for modules but is not the definition of exactness in an abstract abelian category. Nor does exactness mean that takes an exact sequence to a sequence surjective at its last term for every . That stronger statement splits every short exact sequence by taking to be its quotient. The categorical kernel, image, and pullback constructions above retain the distinction.   "
},
{
  "id": "ha-c01-additive-definition",
  "level": "2",
  "url": "ha-c01.html#ha-c01-additive-definition",
  "type": "Definition",
  "number": "1.1",
  "title": "Preadditive and additive categories.",
  "body": " Preadditive and additive categories  Preadditive category Additive category Biproduct   A preadditive category is a category in which each is an abelian group and composition is additive in each variable. Its additive identity is the zero morphism .  A biproduct of consists of an object and morphisms , satisfying and . We denote it by .  An additive category is a preadditive category with a zero object and all finite biproducts. The empty biproduct is a zero object. An additive functor is a functor inducing group homomorphisms on all morphism groups.   "
},
{
  "id": "ha-c01-biproduct-properties",
  "level": "2",
  "url": "ha-c01.html#ha-c01-biproduct-properties",
  "type": "Proposition",
  "number": "1.2",
  "title": "",
  "body": " In a preadditive category, a finite product is a biproduct, and a finite coproduct is a biproduct. An additive functor preserves zero objects and finite biproducts. Conversely, a functor between additive categories that preserves zero objects and finite biproduct diagrams is additive.  For a product , define by its components . The two endomorphisms and have the same composites with every projection, so they agree. The coproduct assertion is dual. An additive functor preserves the defining equations. For the converse, addition is recovered from the diagonal and codiagonal by . Preservation of the biproduct diagrams preserves this formula.  "
},
{
  "id": "ha-c01-additive-examples",
  "level": "2",
  "url": "ha-c01.html#ha-c01-additive-examples",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "The categories and finitely generated projective -modules are additive. The latter category usually has fewer kernels and cokernels. For example, multiplication by on is both monic and epic in the category of finitely generated free abelian groups: cancellation on either side follows because the relevant morphism groups are torsion-free. It is not an isomorphism. This category is therefore not abelian. "
},
{
  "id": "ha-c01-additive-constructions",
  "level": "2",
  "url": "ha-c01.html#ha-c01-additive-constructions",
  "type": "Proposition",
  "number": "1.4",
  "title": "",
  "body": " The opposite of an additive category is additive. If is small and is additive, the functor category is additive, with addition of natural transformations and finite biproducts defined componentwise. If is abelian, so is this functor category; kernels, cokernels, and exactness are computed componentwise.  Adding the component equations of naturality proves that the sum of two natural transformations is natural. A morphism of diagrams carries the kernel of each component into the next kernel, by its universal property. This defines the kernel diagram and its universal map. The cokernel construction is dual. The coimage-to-image map is an isomorphism because each of its components is one.  "
},
{
  "id": "ha-c01-abelian-definition",
  "level": "2",
  "url": "ha-c01.html#ha-c01-abelian-definition",
  "type": "Definition",
  "number": "1.5",
  "title": "Abelian categories and exact sequences.",
  "body": " Abelian categories and exact sequences  Abelian category Image Coimage Exact sequence  Let be additive.  A kernel of represents morphisms into annihilated by ; a cokernel represents morphisms out of annihilating . When they exist, set and .  The category is abelian if all kernels and cokernels exist and the canonical morphism is an isomorphism for every .  In an abelian category, a sequence is exact at if as subobjects of . A short exact sequence is an exact sequence .   "
},
{
  "id": "ha-c01-abelian-properties",
  "level": "2",
  "url": "ha-c01.html#ha-c01-abelian-properties",
  "type": "Proposition",
  "number": "1.6",
  "title": "",
  "body": " Let be abelian.  Every monomorphism is the kernel of its cokernel, and every epimorphism is the cokernel of its kernel. A morphism that is both monic and epic is an isomorphism.  Finite limits and finite colimits exist. Epimorphisms are stable under pullback, and monomorphisms are stable under pushout.  For subobjects , there is a canonical isomorphism . For subobjects , there is a canonical isomorphism .   "
},
{
  "id": "ha-c01-subobject-calculus",
  "level": "2",
  "url": "ha-c01.html#ha-c01-subobject-calculus",
  "type": "Proposition",
  "number": "1.7",
  "title": "",
  "body": " In an abelian category, intersections of two subobjects are their pullbacks, and the sum is the image of . Inverse image along is defined by pullback, and direct image is image factorization. They satisfy For , subobjects of correspond to subobjects of containing . The subobject lattice is modular: if , then .  The pullback property proves the displayed equivalence. Pulling back a subobject of gives a subobject containing the kernel ; conversely, quotienting a subobject containing gives a subobject of . Image factorization and stability of epimorphisms under pullback show that these operations are inverse. To prove modularity, pass to . Both sides correspond to the image of , since the inverse image of in is . The correspondence gives equality in .  "
},
{
  "id": "ha-c01-bicartesian",
  "level": "2",
  "url": "ha-c01.html#ha-c01-bicartesian",
  "type": "Proposition",
  "number": "1.8",
  "title": "",
  "body": " For a commutative square with arrows , , , and , form the sequence The square is a pullback if and only if the first arrow is a kernel of the second. It is a pushout if and only if the second is a cokernel of the first. It is both if and only if the sequence, extended by zero at both ends, is short exact. Pulling back a short exact sequence along a map to its last term gives a short exact sequence with the same kernel. Pushing out along a map from its first term gives one with the same cokernel.  A map to is a pair of maps, and its composite to vanishes precisely when their two composites cancel. Changing the sign on the second component converts this condition into the pullback condition. The pushout assertion is dual. For the last assertions use stability of epimorphisms under pullback and of monomorphisms under pushout; the universal properties identify the remaining kernel and cokernel.  "
},
{
  "id": "ha-c01-abelian-examples",
  "level": "2",
  "url": "ha-c01.html#ha-c01-abelian-examples",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": "Modules over any ring form an abelian category. Finite-dimensional vector spaces and finitely generated abelian groups form abelian categories, although they have no arbitrary direct sums. Finitely generated modules over a left noetherian ring form an abelian category because kernels remain finitely generated. For a general ring this assertion can fail at kernels. "
},
{
  "id": "ha-c01-split-definition",
  "level": "2",
  "url": "ha-c01.html#ha-c01-split-definition",
  "type": "Definition",
  "number": "1.10",
  "title": "Split sequences and idempotents.",
  "body": " Split sequences and idempotents  Split exact sequence Idempotent splitting  A sequence in an additive category is split exact if it is isomorphic to the biproduct sequence. An idempotent  splits if there are and with and .  "
},
{
  "id": "ha-c01-splitting",
  "level": "2",
  "url": "ha-c01.html#ha-c01-splitting",
  "type": "Proposition",
  "number": "1.11",
  "title": "",
  "body": " A short exact sequence in an abelian category is split if and only if its epimorphism has a section, equivalently if its monomorphism has a retraction. Every idempotent in an abelian category splits.  If , then factors uniquely through , giving . The relations , , and show that has inverse . The retraction criterion is dual. For an idempotent , factor through its image. Since , cancellation gives .  "
},
{
  "id": "ha-c01-finiteness-definition",
  "level": "2",
  "url": "ha-c01.html#ha-c01-finiteness-definition",
  "type": "Definition",
  "number": "1.12",
  "title": "Chain conditions and length.",
  "body": " Chain conditions and length  Noetherian object Artinian object Object of finite length  An object of an abelian category is noetherian if every increasing sequence of subobjects stabilizes, and artinian if every decreasing sequence stabilizes. A nonzero object is simple if it has no proper nonzero subobject. An object has finite length if it has a finite filtration by subobjects with simple successive quotients; zero has length zero.  "
},
{
  "id": "ha-c01-length-properties",
  "level": "2",
  "url": "ha-c01.html#ha-c01-length-properties",
  "type": "Proposition",
  "number": "1.13",
  "title": "",
  "body": " An object has finite length if and only if it is both noetherian and artinian. Its simple factors, counted with multiplicity, are independent of the chosen filtration up to permutation and isomorphism. In a short exact sequence, the middle object has finite length if and only if both outer objects do, and its length is then the sum of their lengths.  "
},
{
  "id": "ha-c01-length-examples",
  "level": "2",
  "url": "ha-c01.html#ha-c01-length-examples",
  "type": "Example",
  "number": "1.14",
  "title": "",
  "body": "The abelian group is noetherian, since every subgroup is cyclic, but is not artinian: the chain never stabilizes. A finite-dimensional vector space has length equal to its dimension. A finitely generated module over a noetherian ring can have infinite length, as the first example shows. "
},
{
  "id": "ha-c01-chain-conditions",
  "level": "2",
  "url": "ha-c01.html#ha-c01-chain-conditions",
  "type": "Proposition",
  "number": "1.15",
  "title": "",
  "body": " Subobjects, quotients, and extensions of noetherian objects are noetherian. The same assertion holds for artinian objects. A nonzero morphism between simple objects is an isomorphism; consequently the endomorphism ring of a simple object is a division ring.  In an extension , an increasing chain in gives increasing chains of intersections with and images in . If both stabilize, the short exact sequences for two successive terms and the short five lemma show that the original terms agree. Subobjects and quotients use these same intersection and inverse-image operations. Decreasing chains give the artinian statement. For a nonzero map between simple objects, its kernel must be zero and its image must be the whole target. Image factorization makes it an isomorphism.  "
},
{
  "id": "ha-c01-semisimple-definition",
  "level": "2",
  "url": "ha-c01.html#ha-c01-semisimple-definition",
  "type": "Definition",
  "number": "1.16",
  "title": "Semisimplicity in finite length.",
  "body": " Semisimplicity in finite length Semisimple object  An object of finite length is semisimple if it is a finite direct sum of simple objects, allowing the empty sum for zero.  "
},
{
  "id": "ha-c01-semisimple-properties",
  "level": "2",
  "url": "ha-c01.html#ha-c01-semisimple-properties",
  "type": "Proposition",
  "number": "1.17",
  "title": "",
  "body": " For a finite-length object , the following are equivalent: is semisimple; every subobject of is a direct summand; every short exact sequence with middle term splits. Subobjects and quotients of such an object are semisimple. If are pairwise nonisomorphic simple objects, then  The equivalence between the last two conditions is the splitting criterion. If every subobject splits, choose a simple subobject, split it off, and induct on length. For the reverse implication, write as a sum of simple objects and induct on . A nonzero subobject contains a simple subobject . Some projection from to a simple summand of is nonzero, hence invertible. That projection gives a retraction onto and a decomposition , with a sum of simples. Restricting the retraction to gives . Induction supplies the required complement and semisimplicity. Quotients are the complementary summands. Schur's lemma removes the off-diagonal blocks in the endomorphism ring formula.  "
},
{
  "id": "ha-c01-exact-functor-definition",
  "level": "2",
  "url": "ha-c01.html#ha-c01-exact-functor-definition",
  "type": "Definition",
  "number": "1.18",
  "title": "Exactness of additive functors.",
  "body": " Exactness of additive functors  Exact functor Left exact functor Right exact functor  Let be additive between abelian categories. It is left exact if it sends every short exact sequence to an exact sequence ; it is right exact if is exact. It is exact if it has both properties.  "
},
{
  "id": "ha-c01-exactness-criteria",
  "level": "2",
  "url": "ha-c01.html#ha-c01-exactness-criteria",
  "type": "Proposition",
  "number": "1.19",
  "title": "",
  "body": " An additive functor is left exact if and only if it preserves kernels, equivalently finite limits; the dual criterion holds for right exactness. An exact functor preserves images and coimages. A faithful exact functor reflects exact sequences and isomorphisms. For every , the functors and are left exact, the second viewed on .  Factor a morphism through its image and apply the short exact sequence criterion to its kernel sequence; this proves the kernel criterion. Additivity already preserves finite biproducts. Preservation of kernels and cokernels gives preservation of images. To reflect exactness, an exact sequence test reduces to the vanishing of when . Faithfulness reflects zero morphisms and zero objects. The Hom assertions are the universal properties of kernels and cokernels.  "
},
{
  "id": "ha-c01-exact-adjunctions",
  "level": "2",
  "url": "ha-c01.html#ha-c01-exact-adjunctions",
  "type": "Proposition",
  "number": "1.20",
  "title": "",
  "body": " An additive left adjoint between abelian categories is right exact; an additive right adjoint is left exact. A functor with both a left and a right adjoint is exact, provided it is additive. If an exact functor reflects zero objects, it reflects exact sequences and is faithful.  Left adjoints preserve colimits and right adjoints preserve limits. For the last assertion, exactness identifies the image of a morphism after applying the functor with the functor of its image. If a morphism becomes zero, its image becomes zero, hence was zero already. This proves faithfulness, and the preceding criterion then reflects exactness.  "
},
{
  "id": "ha-c01-freyd-mitchell",
  "level": "2",
  "url": "ha-c01.html#ha-c01-freyd-mitchell",
  "type": "Theorem",
  "number": "1.21",
  "title": "",
  "body": " Every small abelian category admits a fully faithful exact functor for some ring . The same holds for an essentially small abelian category after choosing a small equivalent category.  "
},
{
  "id": "ha-c01-finite-diagram-reduction",
  "level": "2",
  "url": "ha-c01.html#ha-c01-finite-diagram-reduction",
  "type": "Proposition",
  "number": "1.22",
  "title": "",
  "body": " Let be a locally small abelian category. Every finite diagram in is contained in an essentially small full abelian subcategory whose inclusion is exact. One may include any specified finite collection of its kernels, cokernels, and image factorizations. Consequently a finite diagram argument involving these constructions and their exactness can be checked after a fully faithful exact embedding of that subcategory into a module category.  Start with the objects of the diagram and the specified additional objects. Add a zero object and representatives of all finite biproducts, kernels, and cokernels of maps between the objects already chosen. Repeat this operation countably many times and take the full subcategory on the resulting objects. At each stage there is only a small set of maps by local smallness, so the union has a small set of objects up to the chosen size convention. Every finite construction involving objects of the union occurs at a later stage. The subcategory is additive and closed under the ambient kernels and cokernels. Its coimage-to-image maps are the ambient isomorphisms, so it is abelian and its inclusion is exact. Apply to a small equivalent category.  "
},
{
  "id": "ha-c01-snake",
  "level": "2",
  "url": "ha-c01.html#ha-c01-snake",
  "type": "Proposition",
  "number": "1.23",
  "title": "",
  "body": " Given a morphism of short exact sequences in an abelian category, with vertical maps , , and , there is a natural exact sequence In particular, if and are isomorphisms, then is an isomorphism.  "
},
{
  "id": "ha-c01-five-and-nine",
  "level": "2",
  "url": "ha-c01.html#ha-c01-five-and-nine",
  "type": "Proposition",
  "number": "1.24",
  "title": "",
  "body": "  Consider a commutative diagram with exact rows and , and vertical maps . If is epic and are monic, then is monic. If are epic and is monic, then is epic. Thus is invertible if are invertible, is epic, and is monic.  In a commutative three-by-three diagram with all columns short exact, if the top and middle rows are short exact, then the bottom row is short exact. The dual assertion reconstructs the top row from the middle and bottom rows.   "
},
{
  "id": "ha-c02",
  "level": "1",
  "url": "ha-c02.html",
  "type": "Chapter",
  "number": "2",
  "title": "Grothendieck categories and abelian localization",
  "body": " Grothendieck categories and abelian localization   An abelian category provides finite exact constructions. Infinite resolutions and their comparison require further existence and exactness assumptions. Grothendieck categories give one common set of hypotheses: they have arbitrary small colimits, exact filtered colimits, and a generator. Abelian localization explains how such categories can be obtained from module categories while retaining an exact quotient functor. The basic references are and .    Infinite exactness and generators   Grothendieck's conditions  AB3 AB4 AB5 Grothendieck category Generator  Let be an abelian category. All indexing sets and indexing categories in the following conditions are small.  AB3 means that all coproducts exist. AB4 means AB3 and exactness of coproducts. AB5 means AB3 and exactness of filtered colimits.  AB3* means that all products exist. AB4* means AB3* and exactness of products.  An object is a generator if is faithful. A Grothendieck category is an abelian category satisfying AB5 and having a generator.    In an additive category with cokernels, coproducts give all small colimits: a colimit of is the cokernel of the difference of the two maps from to . Thus “AB5 with a generator” agrees with the convention using cocompleteness in the chapter introduction. See . The adjective Grothendieck here describes an abelian category. It does not specify a topology, a site, or a monoidal product. In particular, flat objects have no meaning until a tensor product has been chosen.   Suppose has coproducts and . The following conditions are equivalent: is a generator; every object is a quotient of a coproduct of copies of ; for every proper subobject , some morphism does not factor through . If these conditions hold, is well-powered: the subobjects of each object form a small set up to isomorphism over that object.  Consider the evaluation map . If is a generator and , then for every , so faithfulness gives . Thus is epic. If all objects are quotients of such coproducts and , some component of a covering coproduct distinguishes them. This proves faithfulness. The proper subobject criterion follows by applying the same argument to its inclusion and quotient. A subobject is determined by the subset of consisting of maps factoring through : the image of their evaluation map is . Subobjects therefore inject into a power set of a small set.    AB5 implies AB4. If is a filtered diagram in an AB5 category and , then In particular, a directed union of subobjects is a subobject, and taking that union commutes with intersection with a fixed subobject.  A coproduct is the filtered colimit of its finite partial biproducts. Finite biproducts are exact, so AB5 proves AB4. For the second assertion, apply exactness of the filtered colimit to the kernels defining inside . The colimit of the constant diagram is , since a filtered category is nonempty and connected. The resulting kernel is the pullback of along , hence is .   The generator need not be projective, small, or finitely presentable. Those are additional requirements on its Hom functor. A small family of generators can be replaced by its coproduct, but this replacement does not make the coproduct finitely presentable.  Coproducts are always right exact when they exist, because they are colimits. Products are always left exact when they exist, because they are limits. Thus AB4 asks that coproducts preserve monomorphisms, and AB4* asks that products preserve epimorphisms. AB5 asks that filtered colimits preserve monomorphisms; it then preserves kernels and all finite limits by additivity. An arbitrary colimit functor need not be left exact. Even a coequalizer can destroy injectivity.   Every Grothendieck category has all small limits and enough injectives: every object admits a monomorphism into an injective object. These assertions require no monoidal structure. For unbounded complexes, the stronger existence of K-injective resolutions is established in .   We use this existence theorem from ; the construction through accessible objects is given in . Injective means that maps into the object extend across monomorphisms, as defined in . These hypotheses provide no corresponding general theorem for projective resolutions.   A Grothendieck category has an injective cogenerator : the contravariant functor is faithful. Every object has a natural monomorphism whose components are the maps . A product of injective objects is injective.  Choose a generator . Its quotients form a small set up to isomorphism by well-poweredness. For each quotient , choose a monomorphism to an injective object , and let . Products of injectives are injective: a map to the product extends across a monomorphism by extending each component. To detect a nonzero morphism , choose a nonzero map . Its image is a nonzero quotient inside . Injectivity extends its chosen map to across this inclusion, giving nonzero on . The product therefore detects . The kernel of the displayed evaluation map must be zero by this detection property.   This proof uses enough injectives, all products, and a small collection of quotients of a generator. It explains the cogenerator conclusion of . The evaluation construction is functorial, with the map between products given by precomposition on the indexing sets. That functor need not be additive. A functorial embedding into injectives as objects and a functorial K-injective replacement of unbounded complexes are different existence results.    Finite generation and finite presentation  The generator controls all objects through quotients of sums. Finiteness asks how much of such a sum, or of a filtered approximation, is needed for one map. The relevant notions are relative to the ambient category, rather than to a selected description of its objects.   Finite objects and local finiteness conditions Finitely generated object Finitely presentable object Locally finitely presentable category Locally coherent category Locally noetherian category  Let be Grothendieck.  An object is finitely generated if, whenever it is the directed union of subobjects , one of those subobjects is .  It is finitely presentable if commutes with all small filtered colimits. Thus the canonical map must be bijective for every filtered diagram.  The category is locally finitely generated if it has a small generating family of finitely generated objects. It is locally finitely presentable if a small family of finitely presentable objects supplies every object as a filtered colimit. It is locally coherent if it is locally finitely presentable and its full subcategory of finitely presentable objects is abelian with exact inclusion. It is locally noetherian if it has a small generating family of noetherian objects.    For filtered diagrams of monomorphisms, the finite-generation condition says that a map from into the union factors through one stage. Apply to its image, or pull the union back to , to obtain this factorization. The map between Hom colimits is then bijective, since transition monomorphisms detect equality. Finite presentation makes the same demand for filtered diagrams with arbitrary transition maps. It controls both the existence of a finite stage for a map and the relations identifying two such maps. Some category-theoretic texts call preservation of filtered colimits compactness. In these notes compactness in a triangulated category will mean preservation of coproducts by its Hom functor. These are different tests, so we use “finitely presentable” here.  The finite-presentation condition is the case of the presentability conventions in ; the diagrams are ordinary filtered diagrams. Larger regular cardinals provide different bounds. No fixed finite-presentation condition is part of the definition of a Grothendieck category.   Finitely presentable objects are finitely generated, and noetherian objects are finitely generated. Finitely generated objects are closed under quotients and extensions. Finitely presentable objects are closed under finite colimits and direct summands. In a locally finitely generated Grothendieck category, every object is a directed union of finitely generated subobjects.  Apply preservation of filtered colimits to a union covering a finitely presentable object and to its identity map. A noetherian object has a maximal member in any directed family of subobjects; directedness makes that member contain the whole family. For an extension with finitely generated outer terms, a union covering the middle term eventually covers its quotient and eventually contains its subobject, so eventually equals the middle term. Quotients use inverse images of a covering union. Finite colimits become finite limits under Hom, and filtered colimits of sets commute with finite limits; this proves the finite-presentation assertion. Direct summands follow by taking retracts of the Hom comparison maps. For the final assertion, cover an object by a sum of the finitely generated generators. The images of its finite partial sums are finitely generated and have union the whole object.   For modules, these definitions recover finite generation and finite presentation by generators and relations. Every module is a filtered colimit of finitely presented modules, so is locally finitely presentable for every ring. It is locally noetherian exactly when is left noetherian. It is locally coherent exactly when is left coherent, meaning that every finitely generated left ideal is finitely presented, equivalently that kernels of maps between finitely presented left modules are finitely presented. A ring need not be coherent for its entire module category to be abelian; coherence concerns its smaller category of finitely presented modules.   Let and . The cyclic module is finitely generated but not finitely presented, because the kernel of its presentation by one free generator is not finitely generated. The free module is finitely presented but not noetherian. Thus neither “finitely generated” nor “finitely presented” may be replaced by “noetherian” over an arbitrary ring.   A category described as locally finite requires a further convention. In the representation-theoretic terminology recalled in , a locally finite -linear abelian category has finite-length objects and finite-dimensional Hom spaces. In some discussions of Grothendieck categories, local finiteness instead means that arbitrary objects are unions of finite-length subobjects. All vector spaces over satisfy the latter condition and include objects of infinite length; finite-dimensional vector spaces satisfy the former and lack infinite coproducts. We will state the actual finiteness conditions when using either convention.    Examples and failures of duality  For any ring , is Grothendieck, with generator . Filtered colimits are exact by the element criterion: an element vanishes in a filtered colimit precisely when it vanishes at some later stage. If is a small category, is Grothendieck. Limits and colimits are computed pointwise. A generating family consists of the functors , since as abelian groups.  Another construction starts with a small abelian category . Its category of formal filtered colimits is Grothendieck, and the canonical inclusion is fully faithful and exact. The objects of are precisely its finitely presentable objects, up to isomorphism. Here finitely presentable means that the Hom functor commutes with filtered colimits. See and . This construction retains the original finite exact sequences while adding filtered colimits. It does not assert that an arbitrary small abelian category already has those colimits.  The morphism formula explains the finite-presentation assertion. For filtered diagrams and in , An object of therefore has Hom commuting with filtered colimits. Conversely, if an ind-object is finitely presentable, its identity factors through one of the objects in a filtered presentation, making it a retract of that object. Idempotents split in , so this retract belongs to up to isomorphism. The embedding and Grothendieck assertions are ; the Hom formula is the defining calculation of Ind-categories.  It follows that is locally coherent. For a finite-dimensional -algebra , every -module is a union of finite-dimensional submodules, so the ind-category of finite-dimensional -modules is equivalent to . Taking to be a small equivalent category of finite abelian groups instead gives the category of torsion abelian groups: finitely generated torsion groups are finite. The original small category determines which finite objects are being completed. Ind-completion adds formal filtered colimits. If the original category already has some filtered colimits, the inclusion need not preserve them. An existing colimit and its formal ind-object are distinct constructions unless the relevant preservation statement has been checked.  The category of torsion abelian groups is Grothendieck. Kernels, cokernels, coproducts, and filtered colimits are computed in , and is a generator. Products are the torsion subgroups of the products in . They are not exact. Fix a prime and take the epimorphisms for . The element with every coordinate equal to belongs to the target product. Any lift has components of unbounded order, so does not belong to the torsion subgroup of the source product. Thus fails AB4*.  In fact, has no nonzero projective object. Here is a direct argument, using the lifting definition from . Every torsion group is a quotient of a direct sum of finite cyclic groups. A projective would therefore be a direct summand of such a sum. If is nonzero of order , some coordinate projection, followed by projection to a primary cyclic factor, gives with . Projectivity lifts through . Every lift of the nonzero element has order greater than , contradicting the order of .  This example separates three assertions: products exist, products are exact, and projectives are available. It also shows why the dual of a theorem about Grothendieck categories must be stated with dual hypotheses; it cannot be used in the same category merely by reversing arrows.    Serre quotients and exact localizations   Serre and localizing subcategories  Serre subcategory Localizing subcategory, abelian  A Serre subcategory  is a full subcategory closed under isomorphisms, containing zero, and closed under subobjects, quotient objects, and extensions. When is Grothendieck, we call  localizing if it is also closed under small coproducts.   The kernel of an exact functor is Serre. Conversely, a Serre quotient makes precisely the objects of vanish. Its morphisms allow a domain to be restricted and a target to be divided by objects that vanish. “Thick” has several uses: some abelian sources mean Serre, others mean closure under extensions, kernels, and cokernels of maps between objects of the subcategory. In triangulated categories it usually includes closure under direct summands. We use the explicit terms here; see .   Let be Grothendieck and Serre. There is an abelian category and an exact functor with kernel . Precomposition with identifies exact functors out of the quotient, including their natural transformations, with exact functors out of annihilating . One may take the same objects and morphism groups where , , and . The transition maps restrict the domain and enlarge the quotient of the target.   Well-poweredness makes this a small filtered colimit of groups: intersections refine domains and sums refine the subobjects divided out. Equivalently, inverts exactly the morphisms whose kernel and cokernel lie in . The fraction construction proves the theorem; see . Its universal property is understood up to natural isomorphism, independently of a chosen quotient model.  The quotient is not generally a full subcategory of . It keeps the objects and changes their morphisms. For an actual morphism in , exactness gives the tests A representative of a quotient morphism is zero precisely when its image belongs to . These tests do not identify the quotient with the category of objects having no subobject in . Such torsion-free objects can still acquire additional morphisms.   For a Serre subcategory of a Grothendieck category, closure under coproducts is equivalent to the existence of a right adjoint to . In that case is Grothendieck, is fully faithful and left exact, and the counit is an isomorphism. The kernel and cokernel of the unit belong to .   The existence criterion is . Since a Serre subcategory is closed under cokernels, closure under coproducts is equivalent to closure under all small colimits, the condition used there. In sources defining “localizing” by existence of the section functor , this theorem supplies the equivalence with our definition. Applying the exact functor to the unit proves its kernel and cokernel assertion. An exact left adjoint with fully faithful right adjoint is called an exact localization ; left exactness of the section does not assert that the section preserves epimorphisms.   In the setting of , an object is in the essential image of if and only if every morphism from an object of to is zero and every short exact sequence with splits.  For , the vanishing follows by adjunction. Apply to an extension with inclusion . The map is an isomorphism, and its inverse corresponds by adjunction to a retraction . Conversely, the kernel of belongs to , so vanishes by the first condition. Its cokernel is some . The second condition splits that exact sequence. A summand must vanish, since adjunction gives . Thus the unit is an isomorphism.   Each object has a largest subobject belonging to : take the sum of all such subobjects. This is a small sum by well-poweredness, and its image belongs to . The quotient has no nonzero subobject in , since any such subobject would lift to an extension of objects of inside . The local object satisfies the further splitting condition in the proposition. Removing torsion and making an object local are therefore distinct operations; the unit performs both, with kernel .   For a localizing subcategory of a Grothendieck category :  The category is Grothendieck. Its inclusion is exact and preserves small colimits, and the torsion functor is its right adjoint. In particular, is left exact.  The quotient functor preserves small colimits. Its section preserves small limits and takes injective objects of the quotient to injective objects of .  The full subcategory of local objects is closed under limits and extensions. The kernel of a map of local objects is its ambient kernel. Its cokernel in that subcategory is obtained by applying to its ambient cokernel.   Colimits of objects of are formed using sums and cokernels in , so remain in . AB5 is inherited. The quotients of a generator that belong to form a small generating family there: the image of every map with is one of these quotients, and their sum covers . Every map from a torsion object to factors through , which proves the adjunction. The second assertion follows from the adjunctions; preservation of injectives uses the exactness of . Local objects are closed under limits because they are the objects orthogonal to the morphisms inverted by . They are closed under extensions by the Hom and splitting criterion, equivalently the vanishing of and for . Finally transport kernels and cokernels from the abelian quotient along its fully faithful section. Left exactness of gives the ambient kernel description.   The Ext formulation uses the extension interpretation developed in . The main local-object criterion above uses only short exact sequences. The section gives an abelian category of local objects, but its cokernels generally differ from the ambient cokernels. Calling its inclusion left exact records precisely this difference. A reflective full subcategory is closed under limits, but a reflector need not preserve them. Here the reflector is ; the quotient is exact, whereas is only asserted left exact.  In , let be all torsion groups. The exact functor has kernel and fully faithful right adjoint given by restriction of scalars from -vector spaces. Thus . In particular, becomes invertible for each nonzero . The quotient retains rational information, whereas the torsion category in the preceding example retains torsion information.  For this example the torsion-free group is not local: its unit is . Local objects are uniquely divisible groups, equivalently -vector spaces. The torsion functor is not right exact; applying it to produces . More generally, localization of modules at a multiplicative subset of a commutative ring is an exact quotient with fully faithful restriction as section. In that case the local objects are the modules on which all selected denominators act invertibly.    Realization as a quotient of modules   Let be a generator of a Grothendieck category , and let . The functor is fully faithful and has an exact left adjoint . Here an endomorphism , regarded as an element of , acts on by . Consequently .   We use the Gabriel–Popescu theorem in ; a proof is . The opposite ring translates the right modules in that source into our left-module convention. The adjoint can be described without a projective generator: replace a free presentation by the corresponding map , and let be its cokernel. The adjunction shows independence of the presentation. Exactness of this adjoint and full faithfulness of are the substantive assertions of the theorem.  The embedding is generally only left exact: is not assumed projective. Hence an abelian category realized inside modules by this theorem need not inherit module cokernels through that embedding. If the generator is projective and finitely presentable, its Hom functor gives an equivalence with a module category. This is the stronger module recognition statement of . The general Gabriel–Popescu theorem allows a nonzero localization kernel. The quotient description and an exact full embedding are different assertions. This distinction will remain necessary when exact localization is compared with localization of derived categories in .  If is projective and finitely presentable, its Hom functor is exact and preserves coproducts; a free-presentation argument then makes it an equivalence with modules. The precise recognition theorem is . The additional assumptions are substantive. Even in , the generator with is not projective: its torsion projection cannot lift through . The associated Gabriel–Popescu section is therefore not exact. Choosing a generator does not choose an exact embedding.  The Freyd–Mitchell theorem of and Gabriel–Popescu therefore answer different questions. The former embeds a small abelian category exactly and fully into modules and supports finite diagram arguments. The latter describes a Grothendieck category as an exact quotient of modules and supplies its section, which need not be exact. Neither theorem transports arbitrary monoidal structure or asserts that injective and projective objects correspond under the displayed embedding.   "
},
{
  "id": "ha-c02-ab-definition",
  "level": "2",
  "url": "ha-c02.html#ha-c02-ab-definition",
  "type": "Definition",
  "number": "2.1",
  "title": "Grothendieck’s conditions.",
  "body": " Grothendieck's conditions  AB3 AB4 AB5 Grothendieck category Generator  Let be an abelian category. All indexing sets and indexing categories in the following conditions are small.  AB3 means that all coproducts exist. AB4 means AB3 and exactness of coproducts. AB5 means AB3 and exactness of filtered colimits.  AB3* means that all products exist. AB4* means AB3* and exactness of products.  An object is a generator if is faithful. A Grothendieck category is an abelian category satisfying AB5 and having a generator.   "
},
{
  "id": "ha-c02-generator-criteria",
  "level": "2",
  "url": "ha-c02.html#ha-c02-generator-criteria",
  "type": "Proposition",
  "number": "2.2",
  "title": "",
  "body": " Suppose has coproducts and . The following conditions are equivalent: is a generator; every object is a quotient of a coproduct of copies of ; for every proper subobject , some morphism does not factor through . If these conditions hold, is well-powered: the subobjects of each object form a small set up to isomorphism over that object.  Consider the evaluation map . If is a generator and , then for every , so faithfulness gives . Thus is epic. If all objects are quotients of such coproducts and , some component of a covering coproduct distinguishes them. This proves faithfulness. The proper subobject criterion follows by applying the same argument to its inclusion and quotient. A subobject is determined by the subset of consisting of maps factoring through : the image of their evaluation map is . Subobjects therefore inject into a power set of a small set.  "
},
{
  "id": "ha-c02-ab-five-consequences",
  "level": "2",
  "url": "ha-c02.html#ha-c02-ab-five-consequences",
  "type": "Proposition",
  "number": "2.3",
  "title": "",
  "body": " AB5 implies AB4. If is a filtered diagram in an AB5 category and , then In particular, a directed union of subobjects is a subobject, and taking that union commutes with intersection with a fixed subobject.  A coproduct is the filtered colimit of its finite partial biproducts. Finite biproducts are exact, so AB5 proves AB4. For the second assertion, apply exactness of the filtered colimit to the kernels defining inside . The colimit of the constant diagram is , since a filtered category is nonempty and connected. The resulting kernel is the pullback of along , hence is .  "
},
{
  "id": "ha-c02-injective-existence",
  "level": "2",
  "url": "ha-c02.html#ha-c02-injective-existence",
  "type": "Theorem",
  "number": "2.4",
  "title": "",
  "body": " Every Grothendieck category has all small limits and enough injectives: every object admits a monomorphism into an injective object. These assertions require no monoidal structure. For unbounded complexes, the stronger existence of K-injective resolutions is established in .  "
},
{
  "id": "ha-c02-injective-cogenerator",
  "level": "2",
  "url": "ha-c02.html#ha-c02-injective-cogenerator",
  "type": "Proposition",
  "number": "2.5",
  "title": "",
  "body": " A Grothendieck category has an injective cogenerator : the contravariant functor is faithful. Every object has a natural monomorphism whose components are the maps . A product of injective objects is injective.  Choose a generator . Its quotients form a small set up to isomorphism by well-poweredness. For each quotient , choose a monomorphism to an injective object , and let . Products of injectives are injective: a map to the product extends across a monomorphism by extending each component. To detect a nonzero morphism , choose a nonzero map . Its image is a nonzero quotient inside . Injectivity extends its chosen map to across this inclusion, giving nonzero on . The product therefore detects . The kernel of the displayed evaluation map must be zero by this detection property.  "
},
{
  "id": "ha-c02-finite-definitions",
  "level": "2",
  "url": "ha-c02.html#ha-c02-finite-definitions",
  "type": "Definition",
  "number": "2.6",
  "title": "Finite objects and local finiteness conditions.",
  "body": " Finite objects and local finiteness conditions Finitely generated object Finitely presentable object Locally finitely presentable category Locally coherent category Locally noetherian category  Let be Grothendieck.  An object is finitely generated if, whenever it is the directed union of subobjects , one of those subobjects is .  It is finitely presentable if commutes with all small filtered colimits. Thus the canonical map must be bijective for every filtered diagram.  The category is locally finitely generated if it has a small generating family of finitely generated objects. It is locally finitely presentable if a small family of finitely presentable objects supplies every object as a filtered colimit. It is locally coherent if it is locally finitely presentable and its full subcategory of finitely presentable objects is abelian with exact inclusion. It is locally noetherian if it has a small generating family of noetherian objects.   "
},
{
  "id": "ha-c02-finite-properties",
  "level": "2",
  "url": "ha-c02.html#ha-c02-finite-properties",
  "type": "Proposition",
  "number": "2.7",
  "title": "",
  "body": " Finitely presentable objects are finitely generated, and noetherian objects are finitely generated. Finitely generated objects are closed under quotients and extensions. Finitely presentable objects are closed under finite colimits and direct summands. In a locally finitely generated Grothendieck category, every object is a directed union of finitely generated subobjects.  Apply preservation of filtered colimits to a union covering a finitely presentable object and to its identity map. A noetherian object has a maximal member in any directed family of subobjects; directedness makes that member contain the whole family. For an extension with finitely generated outer terms, a union covering the middle term eventually covers its quotient and eventually contains its subobject, so eventually equals the middle term. Quotients use inverse images of a covering union. Finite colimits become finite limits under Hom, and filtered colimits of sets commute with finite limits; this proves the finite-presentation assertion. Direct summands follow by taking retracts of the Hom comparison maps. For the final assertion, cover an object by a sum of the finitely generated generators. The images of its finite partial sums are finitely generated and have union the whole object.  "
},
{
  "id": "ha-c02-finite-counterexamples",
  "level": "2",
  "url": "ha-c02.html#ha-c02-finite-counterexamples",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": " Let and . The cyclic module is finitely generated but not finitely presented, because the kernel of its presentation by one free generator is not finitely generated. The free module is finitely presented but not noetherian. Thus neither “finitely generated” nor “finitely presented” may be replaced by “noetherian” over an arbitrary ring.  "
},
{
  "id": "ha-c02-groth-examples",
  "level": "2",
  "url": "ha-c02.html#ha-c02-groth-examples",
  "type": "Example",
  "number": "2.9",
  "title": "",
  "body": "For any ring , is Grothendieck, with generator . Filtered colimits are exact by the element criterion: an element vanishes in a filtered colimit precisely when it vanishes at some later stage. If is a small category, is Grothendieck. Limits and colimits are computed pointwise. A generating family consists of the functors , since as abelian groups. "
},
{
  "id": "ha-c02-torsion-example",
  "level": "2",
  "url": "ha-c02.html#ha-c02-torsion-example",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": "The category of torsion abelian groups is Grothendieck. Kernels, cokernels, coproducts, and filtered colimits are computed in , and is a generator. Products are the torsion subgroups of the products in . They are not exact. Fix a prime and take the epimorphisms for . The element with every coordinate equal to belongs to the target product. Any lift has components of unbounded order, so does not belong to the torsion subgroup of the source product. Thus fails AB4*. "
},
{
  "id": "ha-c02-serre-definition",
  "level": "2",
  "url": "ha-c02.html#ha-c02-serre-definition",
  "type": "Definition",
  "number": "2.11",
  "title": "Serre and localizing subcategories.",
  "body": " Serre and localizing subcategories  Serre subcategory Localizing subcategory, abelian  A Serre subcategory  is a full subcategory closed under isomorphisms, containing zero, and closed under subobjects, quotient objects, and extensions. When is Grothendieck, we call  localizing if it is also closed under small coproducts.  "
},
{
  "id": "ha-c02-serre-quotient",
  "level": "2",
  "url": "ha-c02.html#ha-c02-serre-quotient",
  "type": "Theorem",
  "number": "2.12",
  "title": "",
  "body": " Let be Grothendieck and Serre. There is an abelian category and an exact functor with kernel . Precomposition with identifies exact functors out of the quotient, including their natural transformations, with exact functors out of annihilating . One may take the same objects and morphism groups where , , and . The transition maps restrict the domain and enlarge the quotient of the target.  "
},
{
  "id": "ha-c02-localizing-quotient",
  "level": "2",
  "url": "ha-c02.html#ha-c02-localizing-quotient",
  "type": "Theorem",
  "number": "2.13",
  "title": "",
  "body": " For a Serre subcategory of a Grothendieck category, closure under coproducts is equivalent to the existence of a right adjoint to . In that case is Grothendieck, is fully faithful and left exact, and the counit is an isomorphism. The kernel and cokernel of the unit belong to .  "
},
{
  "id": "ha-c02-local-objects",
  "level": "2",
  "url": "ha-c02.html#ha-c02-local-objects",
  "type": "Proposition",
  "number": "2.14",
  "title": "",
  "body": " In the setting of , an object is in the essential image of if and only if every morphism from an object of to is zero and every short exact sequence with splits.  For , the vanishing follows by adjunction. Apply to an extension with inclusion . The map is an isomorphism, and its inverse corresponds by adjunction to a retraction . Conversely, the kernel of belongs to , so vanishes by the first condition. Its cokernel is some . The second condition splits that exact sequence. A summand must vanish, since adjunction gives . Thus the unit is an isomorphism.  "
},
{
  "id": "ha-c02-localization-calculus",
  "level": "2",
  "url": "ha-c02.html#ha-c02-localization-calculus",
  "type": "Proposition",
  "number": "2.15",
  "title": "",
  "body": " For a localizing subcategory of a Grothendieck category :  The category is Grothendieck. Its inclusion is exact and preserves small colimits, and the torsion functor is its right adjoint. In particular, is left exact.  The quotient functor preserves small colimits. Its section preserves small limits and takes injective objects of the quotient to injective objects of .  The full subcategory of local objects is closed under limits and extensions. The kernel of a map of local objects is its ambient kernel. Its cokernel in that subcategory is obtained by applying to its ambient cokernel.   Colimits of objects of are formed using sums and cokernels in , so remain in . AB5 is inherited. The quotients of a generator that belong to form a small generating family there: the image of every map with is one of these quotients, and their sum covers . Every map from a torsion object to factors through , which proves the adjunction. The second assertion follows from the adjunctions; preservation of injectives uses the exactness of . Local objects are closed under limits because they are the objects orthogonal to the morphisms inverted by . They are closed under extensions by the Hom and splitting criterion, equivalently the vanishing of and for . Finally transport kernels and cokernels from the abelian quotient along its fully faithful section. Left exactness of gives the ambient kernel description.  "
},
{
  "id": "ha-c02-rational-localization",
  "level": "2",
  "url": "ha-c02.html#ha-c02-rational-localization",
  "type": "Example",
  "number": "2.16",
  "title": "",
  "body": "In , let be all torsion groups. The exact functor has kernel and fully faithful right adjoint given by restriction of scalars from -vector spaces. Thus . In particular, becomes invertible for each nonzero . The quotient retains rational information, whereas the torsion category in the preceding example retains torsion information. "
},
{
  "id": "ha-c02-gabriel-popescu-theorem",
  "level": "2",
  "url": "ha-c02.html#ha-c02-gabriel-popescu-theorem",
  "type": "Theorem",
  "number": "2.17",
  "title": "",
  "body": " Let be a generator of a Grothendieck category , and let . The functor is fully faithful and has an exact left adjoint . Here an endomorphism , regarded as an element of , acts on by . Consequently .  "
},
{
  "id": "ha-c03",
  "level": "1",
  "url": "ha-c03.html",
  "type": "Chapter",
  "number": "3",
  "title": "Closed monoidal structures",
  "body": " Closed monoidal structures   Tensor products and internal Hom objects belong to the structure of a category. Exactness and the existence of resolutions are additional questions. We first describe the ordinary structures that will be derived in . Our conventions follow and . The term “tensor category” has stronger meanings in representation theory, which we distinguish below.    Monoidal data and linearity   Monoidal and symmetric monoidal categories  Monoidal category Symmetric monoidal category   A monoidal category has a bifunctor , a unit object , and natural isomorphisms , , and . They satisfy the pentagon and triangle identities.  A braiding is a natural family of isomorphisms satisfying the two hexagon identities. A symmetry is a braiding satisfying . The corresponding structures are called braided monoidal and symmetric monoidal .  If is additive, the tensor product is biadditive when it is additive separately in each variable. Over a commutative ring , a -linear monoidal category has -module morphism groups, bilinear composition, and a tensor product that is -linear in each variable.    The pentagon identifies the two composites from to . The triangle is the equality . We suppress these associativity and unit maps in formulas. The coherence theorem justifies this convention: composites of associativity and unit constraints with the same source and target agree. With a symmetry, one must also keep track of the permutation of factors. See .  With associators suppressed, the two hexagon equations are They say that moving a factor past a tensor of two factors agrees with moving it past them successively. The further symmetry equation makes two opposite interchanges cancel. In a merely braided category, composites inducing the same permutation may differ. For example, over a field fix . On graded vector spaces the maps for homogeneous degrees define a braiding; the composite in the two directions is multiplication by . It is generally not a symmetry.  The unit constraints identify the two ways of removing the unit from . They also determine how a braiding interchanges a factor with the unit. These are consequences of coherence, rather than additional choices of maps. We use coherence only for expressions built from the stated constraints; it does not assert that arbitrary diagrams of morphisms commute.  Biadditivity means separate additivity. It does not mean that , viewed as a functor from the additive product category, is additive: expanding has four terms. It does imply preservation of finite biproducts in each variable, including . Associativity isomorphisms are specified structure. Writing tensors without parentheses does not assert that the original category is strictly associative. A strictification is a monoidal equivalence, not an equality of categories.  For a commutative ring , is symmetric monoidal under , with unit and symmetry . For a noncommutative ring, two left modules have no such tensor product over that ring. Instead, an – -bimodule and an – -bimodule have an – -bimodule . The category of – -bimodules is monoidal with unit , and is generally not symmetric.  Finite biproduct is a different monoidal operation on an additive category, with unit zero. For fixed nonzero , the functor is not additive and has no right adjoint: it does not preserve the initial object. The tensor products used in the additive homological theory have the separate additivity required above.   Algebra and module objects  Monoid object Algebra object Module object  A monoid object , also called an algebra object , is an object with multiplication and unit , satisfying associativity and the two unit equations using the constraints. In a braided monoidal category it is commutative if . A left -module object has an action satisfying the corresponding associativity and unit equations.   For commutative , algebra objects in are associative unital -algebras with central -action; module objects are their usual modules. The unit object itself is an algebra object through its unit constraints. A monoidal structure, which multiplies objects of a category, and an algebra object, which is one object carrying a multiplication map, are different data. We will use both when differential graded algebras and their modules occur.   The monoid under composition is commutative in every monoidal category. In an additive category with biadditive tensor product it is a commutative ring. Each element acts naturally on every object by .  Transport tensor product to a second multiplication on using . Both multiplications have identity , and functoriality of tensor gives the interchange equation. Substituting identities in alternate positions shows that the multiplications agree and commute. Additivity gives the ring laws. Naturality of the unit constraint proves naturality of its action on each object.   This ring of unit endomorphisms is one source of scalars in a monoidal category. The right unit constraint defines a second action. In a symmetric monoidal category the two actions agree. In a general monoidal category they can differ: on an -bimodule a central element of can act differently on the left and on the right. A specified linear structure over another commutative ring must act compatibly with composition and tensor product; it is additional data, not a choice of a name for the same ring.    Internal Hom and adjunction   Closed structures  Internal Hom Closed monoidal category  A monoidal category is right closed , in our convention, if for every the functor has a right adjoint . Thus there are natural bijections The object is the internal Hom . Left closedness means that has a right adjoint for every . In a symmetric monoidal category, the symmetry converts either structure into the other; we then say closed symmetric monoidal .   Internal Hom is an object of ; is a set, or an abelian group in the additive case. Our bracket notation keeps the two visible. The representing property determines internal Hom up to a unique isomorphism compatible with its adjunction, and gives a bifunctor . “Left closed” and “right closed” are interchanged in some sources, according to whether the named side describes the fixed factor or the location of its adjoint. The displayed adjunction fixes our convention.  This is the internal-Hom convention of . Its ordinary Hom and currying identities are . We retain their representing-property proofs because the same argument will produce the internal adjunction formulas for exceptional operations.   In a closed symmetric monoidal category there are natural isomorphisms and There is a natural bijection . The counit is the evaluation map . If small colimits exist, tensoring with any fixed object preserves them.  Apply the defining adjunction to morphisms from an arbitrary . For the second isomorphism, the required chain is . Yoneda gives the isomorphisms and their naturality. The last assertion holds because tensoring is a left adjoint.   Evaluation also defines internal composition : its adjoint evaluates first at and then at . The morphism corresponding to is its unit. Associativity follows by evaluating both composites on . In particular, is a monoid object, with multiplication given by composition.   In a closed symmetric monoidal category, for every small diagram for which the indicated limits and colimits exist, there are natural isomorphisms In the second formula the limit is indexed by the opposite of the original indexing category. A morphism acts on internal Hom by precomposition, and acts by postcomposition. The evaluation maps characterize both operations.  The first assertion is preservation of limits by the right adjoint . For the second, test against an arbitrary . Tensor with preserves colimits, so Yoneda proves the statement. The same argument constructs the variance maps from their composites with evaluation.   There is also a canonical morphism Its adjoint interchanges and , evaluates , and leaves as a tensor factor. This morphism need not be invertible. Dualizability of will make it invertible for every . Merely writing a tensor–Hom comparison does not supply that hypothesis.  For commutative , the internal Hom is the -module , with . For noncommutative rings, the variance is expressed by bimodules. If is an – -bimodule, a left -module, and a left -module, then where . The inverse maps a homomorphism to ; the balance relation is exactly its -linearity.  Let be commutative. For -graded modules, set and Morphisms of the category preserve degree. These formulas define a closed symmetric monoidal structure with symmetry on degrees . The product in internal Hom allows a homogeneous map to have a component on every source degree. Adding differentials will impose the formulas in .  The functor extracts ordinary morphisms from an internal Hom object. It need not detect all information in an arbitrary object. For graded modules the unit is in degree zero, so . A nonzero object concentrated in another degree has no nonzero map from the unit. Thus knowing ordinary maps is not in general enough to reconstruct . A generator condition on the unit is an extra assumption.    Exactness and dualizable objects   Flatness and duality  Flat object Dualizable object Rigid monoidal category   In an abelian symmetric monoidal category with biadditive tensor product, is flat if is exact.  In a symmetric monoidal category, a dual of consists of and maps , such that the composites obtained by inserting coevaluation and then evaluation on and on are their identities. An object having such a dual is dualizable . A category in which every object is dualizable is rigid .     Let be abelian, closed symmetric monoidal, with biadditive tensor product.  Tensoring with a fixed object is right exact, and is left exact. For a short exact sequence , the sequence is exact.  If is dualizable, then naturally in , and tensoring with is exact.   Left adjoints preserve cokernels and right adjoints preserve kernels. For the contravariant assertion, apply and the tensor–Hom adjunction. The right exact sequence becomes a left exact sequence after applying . This is the kernel criterion, tested by every . A dual pair gives a bijection : insert coevaluation in one direction and contract evaluation in the other. The two identities of a dual pair show these maps are inverse. The right adjoint is therefore . Symmetry gives an adjunction in the other direction as well, so tensoring with preserves kernels and cokernels.   For a module over a commutative ring, dualizability is equivalent to being finitely generated projective. One direction follows from a finite dual basis. Conversely, a coevaluation is a finite sum . The triangle identity says , which expresses the module as a direct summand of . Thus the algebraic dual exists for every module, but is a dual in the monoidal sense only under this finite projectivity condition. For instance, is not flat and has zero algebraic dual. The -module is flat, since tensoring with it is localization, but it is not dualizable because it is not finitely generated.   In an abelian closed symmetric monoidal category, an object is flat if and only if tensoring with it preserves monomorphisms. Finite biproducts and direct summands of flat objects are flat. If the category is Grothendieck, filtered colimits and arbitrary coproducts of flat objects are flat.  Tensor is already right exact, so preserving monomorphisms gives exactness. A finite sum of exact additive functors is exact, and a direct summand of an exact functor is exact, by taking the corresponding direct summands of its kernel and cokernel sequences. For a filtered diagram of flat objects, tensor commutes with its colimit and AB5 preserves the short exact sequences obtained at each stage. Arbitrary coproducts are filtered colimits of finite partial sums.   In a nonsymmetric monoidal abelian category, exactness of and of must be distinguished. For bimodules they test different module actions. The symmetry in our definition identifies the two tests. Flatness is also relative to the chosen tensor product: its definition says nothing about . Projectivity concerns the exactness of that ordinary Hom functor and has a different role in resolutions.   In a closed symmetric monoidal category, let and use evaluation to form The object is dualizable if and only if these maps are isomorphisms for all . Duals, when they exist, are unique up to the isomorphism respecting evaluation and coevaluation. The unit is dualizable, the dual of is , and a dualizable object has a natural bidual isomorphism . In an additive category with biadditive tensor, finite biproducts of dualizable objects are dualizable. They are also closed under retracts.  A dual pair gives the tensor–Hom isomorphisms proved above. Conversely, the assumed isomorphisms identify the right adjoint of with , compatibly with evaluation. The adjunction unit at gives coevaluation, with symmetry putting its factors in the specified order. The adjunction identities give the two dual-pair identities. Uniqueness is uniqueness of the right adjoint with its counit. Tensoring two evaluation and coevaluation pairs gives the reversed-order tensor dual; the two contractions cancel separately. Exchanging the roles of an object and its dual gives biduality. For a finite biproduct take the sum of the duals, with diagonal evaluations and coevaluations, so the two identities hold on each summand. For a retract of , its tensor–Hom comparison is a retract of the comparison for , by naturality in the first variable. It is therefore invertible, and the criterion proves dualizability.   The resulting duality is contravariant on the subcategory of dualizable objects. For , its dual is characterized by This equation gives . The existence of an object called an algebraic dual is weaker than these assertions. In a closed category the object exists for every , but its tensor–Hom comparison may fail to be an isomorphism. Biduality for a particular object is weaker than dualizability as well; the distinction will be used in .  For the ordinary dual-pair calculus, see and . In a nonsymmetric category a left dual and a right dual are distinct notions, and having one does not by itself identify them. Symmetry supplies the interchange needed for the single convention used here.  A Grothendieck category equipped with a closed symmetric monoidal structure satisfies both an existence condition on the category and adjunction conditions on its tensor product. Neither condition alone supplies enough flat objects. Even after choosing flat objects, an unbounded complex of them need not be K-flat; the latter condition tests tensor products with acyclic complexes and belongs to .    Tensor terminology and functors   Monoidal functors  Strong monoidal functor Lax monoidal functor  A lax monoidal functor  has natural maps and compatible with associativity and units. It is strong monoidal when these maps are invertible. Between symmetric monoidal categories, compatibility with the two symmetries is an additional requirement. Exactness and faithfulness are separate properties.   Writing the structure maps as and , the associativity condition equates the two maps from to . The unit conditions equate the composite through with the corresponding unit constraint. A monoidal natural transformation satisfies A monoidal equivalence is a strong monoidal functor whose underlying functor is an equivalence; an inverse equivalence can be equipped with compatible strong monoidal structure. A strict monoidal functor preserves the tensor and unit with identity structure maps. Strictness concerns specified data and is stronger than being strong.  A colax monoidal functor has structure maps in the opposite directions, and . When these maps are invertible the directions can be reversed; without invertibility lax and colax are different structures. Some sources use “monoidal” for strong monoidal and others for lax monoidal. We state the adjective when invertibility matters. “Tensor functor” has a further representation-theoretic convention described below.   A lax monoidal functor sends algebra objects to algebra objects. A strong monoidal functor sends dual pairs to dual pairs, and therefore preserves dualizable objects. If is strong monoidal between closed symmetric monoidal categories, there is a natural comparison It is an isomorphism when is dualizable. It need not be an isomorphism for arbitrary .  The multiplication on is the composite , with unit obtained from . Functoriality and the monoidal equations give its associativity and units. For a dual pair apply to evaluation and coevaluation and use the invertible structure maps to identify their sources and targets. The identities remain identities. The displayed comparison is adjoint to . When is dualizable, both its source and target are identified with .   For an adjunction with strong monoidal, the right adjoint has a lax monoidal structure. Its tensor map is adjoint to and its unit map is adjoint to . The adjunction identities give coherence. These maps need not be invertible. Extension and restriction of scalars provide a familiar example: extension along a map of commutative rings is strong monoidal, while restriction is generally only lax. Its unit structure map is the ring map itself. The adjunction is developed abstractly in .  In , over an algebraically closed field , a tensor category is a locally finite -linear abelian rigid monoidal category with bilinear tensor product and . Here local finiteness includes finite-dimensional morphism spaces and finite length of objects. Neither symmetry nor semisimplicity is part of that definition. Their tensor functors also carry exactness and faithfulness requirements; see . These are stronger conventions than the monoidal terminology of this chapter.  For example, all -modules form our closed symmetric monoidal category, but generally not a tensor category in that representation-theoretic sense. Finite-dimensional representations of a group over a field provide examples with duals, while arbitrary-dimensional vector spaces already include nondualizable objects. A reference to “tensor categories” must therefore specify which hypotheses are intended. In this note the assumptions “abelian,” “closed,” “symmetric,” and “exact in each variable” will be stated when used.   "
},
{
  "id": "ha-c03-monoidal-definition",
  "level": "2",
  "url": "ha-c03.html#ha-c03-monoidal-definition",
  "type": "Definition",
  "number": "3.1",
  "title": "Monoidal and symmetric monoidal categories.",
  "body": " Monoidal and symmetric monoidal categories  Monoidal category Symmetric monoidal category   A monoidal category has a bifunctor , a unit object , and natural isomorphisms , , and . They satisfy the pentagon and triangle identities.  A braiding is a natural family of isomorphisms satisfying the two hexagon identities. A symmetry is a braiding satisfying . The corresponding structures are called braided monoidal and symmetric monoidal .  If is additive, the tensor product is biadditive when it is additive separately in each variable. Over a commutative ring , a -linear monoidal category has -module morphism groups, bilinear composition, and a tensor product that is -linear in each variable.   "
},
{
  "id": "ha-c03-monoidal-examples",
  "level": "2",
  "url": "ha-c03.html#ha-c03-monoidal-examples",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": "For a commutative ring , is symmetric monoidal under , with unit and symmetry . For a noncommutative ring, two left modules have no such tensor product over that ring. Instead, an – -bimodule and an – -bimodule have an – -bimodule . The category of – -bimodules is monoidal with unit , and is generally not symmetric. "
},
{
  "id": "ha-c03-algebra-objects",
  "level": "2",
  "url": "ha-c03.html#ha-c03-algebra-objects",
  "type": "Definition",
  "number": "3.3",
  "title": "Algebra and module objects.",
  "body": " Algebra and module objects  Monoid object Algebra object Module object  A monoid object , also called an algebra object , is an object with multiplication and unit , satisfying associativity and the two unit equations using the constraints. In a braided monoidal category it is commutative if . A left -module object has an action satisfying the corresponding associativity and unit equations.  "
},
{
  "id": "ha-c03-unit-scalars",
  "level": "2",
  "url": "ha-c03.html#ha-c03-unit-scalars",
  "type": "Proposition",
  "number": "3.4",
  "title": "",
  "body": " The monoid under composition is commutative in every monoidal category. In an additive category with biadditive tensor product it is a commutative ring. Each element acts naturally on every object by .  Transport tensor product to a second multiplication on using . Both multiplications have identity , and functoriality of tensor gives the interchange equation. Substituting identities in alternate positions shows that the multiplications agree and commute. Additivity gives the ring laws. Naturality of the unit constraint proves naturality of its action on each object.  "
},
{
  "id": "ha-c03-closed-definition",
  "level": "2",
  "url": "ha-c03.html#ha-c03-closed-definition",
  "type": "Definition",
  "number": "3.5",
  "title": "Closed structures.",
  "body": " Closed structures  Internal Hom Closed monoidal category  A monoidal category is right closed , in our convention, if for every the functor has a right adjoint . Thus there are natural bijections The object is the internal Hom . Left closedness means that has a right adjoint for every . In a symmetric monoidal category, the symmetry converts either structure into the other; we then say closed symmetric monoidal .  "
},
{
  "id": "ha-c03-closed-identities",
  "level": "2",
  "url": "ha-c03.html#ha-c03-closed-identities",
  "type": "Proposition",
  "number": "3.6",
  "title": "",
  "body": " In a closed symmetric monoidal category there are natural isomorphisms and There is a natural bijection . The counit is the evaluation map . If small colimits exist, tensoring with any fixed object preserves them.  Apply the defining adjunction to morphisms from an arbitrary . For the second isomorphism, the required chain is . Yoneda gives the isomorphisms and their naturality. The last assertion holds because tensoring is a left adjoint.  "
},
{
  "id": "ha-c03-closed-limits",
  "level": "2",
  "url": "ha-c03.html#ha-c03-closed-limits",
  "type": "Proposition",
  "number": "3.7",
  "title": "",
  "body": " In a closed symmetric monoidal category, for every small diagram for which the indicated limits and colimits exist, there are natural isomorphisms In the second formula the limit is indexed by the opposite of the original indexing category. A morphism acts on internal Hom by precomposition, and acts by postcomposition. The evaluation maps characterize both operations.  The first assertion is preservation of limits by the right adjoint . For the second, test against an arbitrary . Tensor with preserves colimits, so Yoneda proves the statement. The same argument constructs the variance maps from their composites with evaluation.  "
},
{
  "id": "ha-c03-module-closed",
  "level": "2",
  "url": "ha-c03.html#ha-c03-module-closed",
  "type": "Example",
  "number": "3.8",
  "title": "",
  "body": "For commutative , the internal Hom is the -module , with . For noncommutative rings, the variance is expressed by bimodules. If is an – -bimodule, a left -module, and a left -module, then where . The inverse maps a homomorphism to ; the balance relation is exactly its -linearity. "
},
{
  "id": "ha-c03-graded-example",
  "level": "2",
  "url": "ha-c03.html#ha-c03-graded-example",
  "type": "Example",
  "number": "3.9",
  "title": "",
  "body": "Let be commutative. For -graded modules, set and Morphisms of the category preserve degree. These formulas define a closed symmetric monoidal structure with symmetry on degrees . The product in internal Hom allows a homogeneous map to have a component on every source degree. Adding differentials will impose the formulas in . "
},
{
  "id": "ha-c03-flat-dual-definition",
  "level": "2",
  "url": "ha-c03.html#ha-c03-flat-dual-definition",
  "type": "Definition",
  "number": "3.10",
  "title": "Flatness and duality.",
  "body": " Flatness and duality  Flat object Dualizable object Rigid monoidal category   In an abelian symmetric monoidal category with biadditive tensor product, is flat if is exact.  In a symmetric monoidal category, a dual of consists of and maps , such that the composites obtained by inserting coevaluation and then evaluation on and on are their identities. An object having such a dual is dualizable . A category in which every object is dualizable is rigid .   "
},
{
  "id": "ha-c03-exactness-duals-proposition",
  "level": "2",
  "url": "ha-c03.html#ha-c03-exactness-duals-proposition",
  "type": "Proposition",
  "number": "3.11",
  "title": "",
  "body": " Let be abelian, closed symmetric monoidal, with biadditive tensor product.  Tensoring with a fixed object is right exact, and is left exact. For a short exact sequence , the sequence is exact.  If is dualizable, then naturally in , and tensoring with is exact.   Left adjoints preserve cokernels and right adjoints preserve kernels. For the contravariant assertion, apply and the tensor–Hom adjunction. The right exact sequence becomes a left exact sequence after applying . This is the kernel criterion, tested by every . A dual pair gives a bijection : insert coevaluation in one direction and contract evaluation in the other. The two identities of a dual pair show these maps are inverse. The right adjoint is therefore . Symmetry gives an adjunction in the other direction as well, so tensoring with preserves kernels and cokernels.  "
},
{
  "id": "ha-c03-flat-criteria",
  "level": "2",
  "url": "ha-c03.html#ha-c03-flat-criteria",
  "type": "Proposition",
  "number": "3.12",
  "title": "",
  "body": " In an abelian closed symmetric monoidal category, an object is flat if and only if tensoring with it preserves monomorphisms. Finite biproducts and direct summands of flat objects are flat. If the category is Grothendieck, filtered colimits and arbitrary coproducts of flat objects are flat.  Tensor is already right exact, so preserving monomorphisms gives exactness. A finite sum of exact additive functors is exact, and a direct summand of an exact functor is exact, by taking the corresponding direct summands of its kernel and cokernel sequences. For a filtered diagram of flat objects, tensor commutes with its colimit and AB5 preserves the short exact sequences obtained at each stage. Arbitrary coproducts are filtered colimits of finite partial sums.  "
},
{
  "id": "ha-c03-duality-calculus",
  "level": "2",
  "url": "ha-c03.html#ha-c03-duality-calculus",
  "type": "Proposition",
  "number": "3.13",
  "title": "",
  "body": " In a closed symmetric monoidal category, let and use evaluation to form The object is dualizable if and only if these maps are isomorphisms for all . Duals, when they exist, are unique up to the isomorphism respecting evaluation and coevaluation. The unit is dualizable, the dual of is , and a dualizable object has a natural bidual isomorphism . In an additive category with biadditive tensor, finite biproducts of dualizable objects are dualizable. They are also closed under retracts.  A dual pair gives the tensor–Hom isomorphisms proved above. Conversely, the assumed isomorphisms identify the right adjoint of with , compatibly with evaluation. The adjunction unit at gives coevaluation, with symmetry putting its factors in the specified order. The adjunction identities give the two dual-pair identities. Uniqueness is uniqueness of the right adjoint with its counit. Tensoring two evaluation and coevaluation pairs gives the reversed-order tensor dual; the two contractions cancel separately. Exchanging the roles of an object and its dual gives biduality. For a finite biproduct take the sum of the duals, with diagonal evaluations and coevaluations, so the two identities hold on each summand. For a retract of , its tensor–Hom comparison is a retract of the comparison for , by naturality in the first variable. It is therefore invertible, and the criterion proves dualizability.  "
},
{
  "id": "ha-c03-monoidal-functor",
  "level": "2",
  "url": "ha-c03.html#ha-c03-monoidal-functor",
  "type": "Definition",
  "number": "3.14",
  "title": "Monoidal functors.",
  "body": " Monoidal functors  Strong monoidal functor Lax monoidal functor  A lax monoidal functor  has natural maps and compatible with associativity and units. It is strong monoidal when these maps are invertible. Between symmetric monoidal categories, compatibility with the two symmetries is an additional requirement. Exactness and faithfulness are separate properties.  "
},
{
  "id": "ha-c03-functor-effects",
  "level": "2",
  "url": "ha-c03.html#ha-c03-functor-effects",
  "type": "Proposition",
  "number": "3.15",
  "title": "",
  "body": " A lax monoidal functor sends algebra objects to algebra objects. A strong monoidal functor sends dual pairs to dual pairs, and therefore preserves dualizable objects. If is strong monoidal between closed symmetric monoidal categories, there is a natural comparison It is an isomorphism when is dualizable. It need not be an isomorphism for arbitrary .  The multiplication on is the composite , with unit obtained from . Functoriality and the monoidal equations give its associativity and units. For a dual pair apply to evaluation and coevaluation and use the invertible structure maps to identify their sources and targets. The identities remain identities. The displayed comparison is adjoint to . When is dualizable, both its source and target are identified with .  "
},
{
  "id": "ha-c04",
  "level": "1",
  "url": "ha-c04.html",
  "type": "Chapter",
  "number": "4",
  "title": "Complexes and homotopy",
  "body": " Complexes and homotopy  A complex records objects together with successive relations between them. Its cohomology forgets the boundaries, whereas homotopy retains enough information to compare constructions before passing to cohomology. We establish the signs and constructions used throughout the note. The main references are and .   Complexes and cohomology   Complexes and their cohomology  Complex Cochain complex Quasi-isomorphism Acyclic complex  Let be an additive category.  A cochain complex  consists of objects and morphisms , indexed by , such that . A morphism satisfies . These form the category .  Suppose that is abelian. Write , , and . The complex is acyclic if every is zero. A morphism is a quasi-isomorphism if it induces an isomorphism on each cohomology object.  The complex is bounded below if for all sufficiently negative , bounded above if for all sufficiently positive , and bounded if both hold. The corresponding full subcategories carry superscripts , , and .     The shift is , with differential . In particular, an object placed in degree becomes concentrated in degree after shifting by . Homological indexing uses a differential lowering degree. The translation converts it to our indexing; thus a projective resolution lies in nonpositive cochain degrees. The identity concerns cohomology objects and does not remove the sign in the differential.   If is abelian, then is abelian, with kernels and cokernels computed degreewise. Every short exact sequence of complexes gives a natural long exact sequence   Degreewise kernels and cokernels inherit differentials because the structure maps commute with differentials. The abelian category axioms follow degreewise. The snake lemma applied to cycles, boundaries, and the differentials gives the connecting maps and exactness. For modules, the connecting map has the following description: lift a cycle to ; then is the image of a cycle , and . Changing either lift changes by a boundary.   The description by elements explains the connecting map; the snake lemma supplies the same construction in every abelian category. We shall use element calculations for module examples without treating an arbitrary abelian category as a category of sets.   Let be abelian. Evaluation in degree is an exact functor . Limits and colimits indexed by a small category, whenever they exist in , are computed degreewise in . An exact additive functor induces natural isomorphisms . If a class of colimits is exact in , those colimits commute with cohomology.  The universal property of a degreewise limit or colimit supplies the differential; its square is zero by the same universal property. An exact additive functor preserves kernels, images, and cokernels, hence the quotient defining cohomology. For a diagram of complexes apply this assertion to the exact colimit functor from the diagram category. In particular, filtered colimits commute with cohomology in a Grothendieck category.   The last assertion requires exactness. Products are left exact in every abelian category having products, but need not preserve epimorphisms. Thus cohomology need not commute with products. Coproducts also need not be exact in an arbitrary abelian category. Conditions on infinite operations enter the theory of unbounded complexes even though each individual cohomology object uses only a finite diagram.  A morphism of short exact sequences of complexes induces a morphism of their long exact sequences, including the connecting maps. In the description above, applying the middle vertical map to a chosen lift gives a lift in the second sequence; applying the differential then gives the corresponding image of . This proves the naturality of . The same construction also shows that an exact additive functor commutes with the connecting maps under its cohomology comparisons. The justification of such finite diagram calculations in a general abelian category is given in .    Hom complexes and homotopy   Homotopy and the Hom complex  Homotopy of complex morphisms Hom complex Contractible complex Homotopy category  For complexes in an additive category, define the complex of abelian groups A homotopy from to is a family with . The category has complexes as objects and homotopy classes of complex morphisms as morphisms. A complex is contractible if its identity is homotopic to zero; a morphism is a homotopy equivalence if its class in is invertible.   The products here exist in , independently of products in . An internal Hom complex requires additional structure and will be considered in . A degree-zero cocycle is exactly a complex morphism, so More generally , with the shift signs understood.   The Hom differential has square zero. Composition of homogeneous families satisfies Consequently homotopy is compatible with composition and addition, and is additive. The shift of a homotopy between and is the homotopy between and .  For , expansion of leaves two mixed terms with coefficients and ; they cancel, and the remaining terms contain the square of a differential. Expanding the right side of the composition formula gives . Boundaries therefore form an ideal among degree-zero cocycles. The shift assertion follows from .   To check the higher-degree Hom identification, a degree- cocycle satisfies . This is exactly the equation for a complex morphism . A boundary , where , corresponds to the null-homotopic map with homotopy . The signs are needed even though the resulting cohomology groups have a short notation.   Differential graded categories and their degree-zero categories Differential graded category Enriched category  A differential graded category, or dg category , over consists of objects, a complex of abelian groups for each pair, associative composition maps of complexes and identity elements that are degree-zero cycles. Equivalently it is a category enriched over with its tensor product and unit . Its category has degree-zero cycles as arrows; its category has degree-zero cohomology classes as arrows. The composition formula in makes both compositions well-defined.   An additive category gives a dg category of complexes with Hom complexes . Its two degree-zero categories are and , respectively. Before passing to complexes, a preadditive category is already a category enriched over : its composition is bilinear. In a general enrichment the Hom sets are replaced by objects of a monoidal category and composition uses that category's tensor product. An internal tensor product of the objects of is a separate structure. The ordinary underlying category of a dg category has arrows , not . Taking additionally identifies boundaries. This distinction explains the passage from actual chain maps to homotopy classes. We use this language to describe the Hom construction; localization and enhancement theory for dg categories require a separate development.   Homotopic morphisms induce the same maps on cohomology. A homotopy equivalence is a quasi-isomorphism. Every contractible complex in an abelian category is acyclic, and an acyclic complex is contractible if and only if all the sequences split.  If , its restriction to cycles factors through boundaries, so it induces zero on cohomology. If the displayed sequences split, identify ; the differential sends to . Sending to in degree contracts . Conversely, if , then the restriction of to is a section of .    The exact complex , placed in three consecutive degrees, is acyclic but not contractible. A splitting would embed the nonzero torsion group in the torsion-free group . Thus the quasi-isomorphism from this complex to zero is not a homotopy equivalence. Over a field every short exact sequence of vector spaces splits, so every acyclic complex of vector spaces is contractible.    Stalk and disk complexes Stalk complex Disk complex  Write for in degree with all other terms zero. The disk complex has in degrees , identity differential between them, and zero elsewhere. It is contractible. There are natural bijections    In the first bijection the component in degree must be times the chosen component in degree . In the second it must satisfy . These formulas explain why a disk, rather than a stalk, represents unrestricted evaluation on complexes. A map from a stalk has to land in cycles.   Suppose that is abelian and that both sequences split for every . Then choices of splittings identify with the direct sum of its cohomology stalks and contractible disks. In particular is homotopy equivalent to the complex with zero differential.  The splittings give , with differential . The middle summands form . The other two summands form disks, contracted by sending to . In each degree only finitely many of these stalks and disks contribute, so this decomposition requires no infinite coproducts in .   The splitting hypothesis holds in a semisimple abelian category, in particular for vector spaces over a field. The resulting complex isomorphism depends on choices. One should not infer a natural splitting of a complex merely from the existence of a homotopy equivalence. Over a general abelian category, extension data between successive cohomology objects can survive in the derived category; the truncation triangles in describe that data.    Mapping cones   The mapping cone Mapping cone  For a morphism , its cone is It fits into the degreewise split exact sequence .    Let be abelian.  The cone sequence gives an exact sequence . In particular is a quasi-isomorphism if and only if is acyclic.  The cone of is contractible. If and are homotopic, their cones are isomorphic as complexes.  A strictly commutative square of complex morphisms induces a morphism of cones. A square commuting only up to homotopy also does so after choosing that homotopy.    For the first assertion use ; lifting a cycle in to identifies the connecting map with . The homotopy contracts . More generally, suppose , , and . Then is a morphism , as substitution in the differentials verifies. Taking gives the second assertion, with inverse obtained by replacing by .   The last assertion explains why cones require care after passing to homotopy classes: the chosen homotopy is part of the construction. The cone is functorial on the category of actual morphisms of complexes with strictly commutative squares. This does not provide a canonical cone functor on arbitrary morphisms in a triangulated category. Cone triangles will supply the triangulated structure on in .   For complexes in an additive category, is a homotopy equivalence if and only if is contractible.  For any complex , the cone formula gives an isomorphism of complexes of abelian groups Its cohomology sequence has successive terms , , and . If the cone is contractible, the first map is a bijection for every ; Yoneda makes invertible in . Conversely, if is invertible, exactness makes every Hom into its cone zero. Taking and shows that the identity of the cone is null-homotopic. This argument uses cohomology only in and therefore does not require to be abelian.    Mapping fiber and mapping cylinder Mapping fiber Mapping cylinder  Set . A mapping cylinder for is Thus its terms are and its differential is .   The maps , , and , , factor . The first is a split monomorphism on terms, and is a homotopy equivalence. Indeed satisfies ; the family satisfies . The cokernel of is . This replaces an arbitrary morphism by a degreewise split inclusion followed by a homotopy equivalence, a construction useful before any localization is formed.   For a short exact sequence of complexes , the morphism sending to is a quasi-isomorphism. No degreewise splitting is required.  Its kernel has terms and differential . It is therefore , which is contractible. The resulting short exact sequence and its cohomology sequence prove the assertion.   This comparison explains why short exact sequences can be replaced by cone sequences after quasi-isomorphisms are inverted. Before doing so, they retain different information: a general short exact sequence need not split degreewise, whereas the defining sequence of a cone always does. The natural connecting homomorphism in cohomology is the same under the comparison.    Truncations   Brutal and canonical truncation Brutal truncation Canonical truncation Smart truncation  Let be a complex in an abelian category and let . The brutal truncations and retain the terms in the indicated degrees and replace all other terms by zero. The canonical, or smart, truncations are Their differentials are induced by those of .   There are natural morphisms . The first preserves cohomology in degrees at most and kills higher cohomology; the second preserves cohomology in degrees at least and kills lower cohomology. For brutal truncation the natural maps instead have the directions . Sources use several symbols, including “stupid” for brutal truncation. We reserve for the truncations preserving the specified cohomology, and for those retaining terms.  Let in degrees . Then , whereas . The canonical truncation is zero and . Truncating terms and truncating cohomology therefore serve different purposes.   Let and denote the full subcategories of complexes whose terms vanish in degrees greater than and less than , respectively.  The inclusion has left adjoint and right adjoint . The inclusion has left adjoint and right adjoint .  There is a natural degreewise split exact sequence The connecting map at the cut is induced by .  The endpoint cohomology of the brutal truncations is Away from the endpoint they retain the cohomology in the retained range and have zero cohomology outside it. Canonical truncations retain at the endpoint as well.  Both composites and are canonically isomorphic to . All four truncations are additive functors of complexes. The canonical truncations preserve quasi-isomorphisms; the brutal truncations need not.    A map with has degree- component in , which proves the right adjunction for . A map with kills , proving the left adjunction for . The other two adjunctions follow by restricting the components, with no kernel or quotient required. The sequence in the second assertion is exact in each degree; lifting a class across its degreewise splitting gives the differential at the cut as its connecting map. Calculating kernels and images in degree proves the remaining assertions. For the last failure, take the acyclic disk with : its upper brutal truncation at is the nonacyclic stalk .   The degreewise splitting of the displayed sequence is not generally a splitting by complex morphisms: the differential crossing the cut obstructs such a splitting. Nor is generally exact as a sequence of complexes. At degree its putative kernel is , whereas the first term there is . Instead set . There is a natural quasi-isomorphism ; its kernel is the disk on in degrees . Passing from this actual quotient to its quasi-isomorphic canonical truncation yields the truncation triangle of . Some treatments formulate canonical truncation directly on the derived category, where it is characterized by cohomological bounds. The adjunctions just proved are on categories of complexes with bounds on their terms. Those statements have different domains; the derived adjunction requires the additional orthogonality argument in .  Brutal truncations are useful when a construction is made term by term, or a complex is filtered by its degrees. Canonical truncations are useful when a construction must preserve a prescribed range of cohomology. For example, a bounded above complex can be built from its successive terms using brutal cuts; a complex with bounded above cohomology may still have nonzero terms arbitrarily far to the right, and canonical truncation replaces it by a bounded above quasi-isomorphic complex.    Double complexes and totalization   Double complexes and their totals Double complex Total complex  A double complex has differentials and satisfying and . When the relevant sums or products exist, define in both cases with differential on bidegree .   The mixed terms in the square of this differential cancel. Replacing by converts our commuting squares into anticommuting squares; in that convention the total differential is simply the sum of the two differentials. This is the convention comparison used in and Stacks, Tag 0FNB .  If only finitely many entries on each diagonal are nonzero, the two totals agree canonically. This includes a first-quadrant double complex. Without this condition the distinction is substantive: for a field , put for every , all other terms and differentials zero. Its sum total has in degree zero, whereas its product total has ; the natural map is not surjective.  For complexes of modules, the tensor complex uses the sum total: The Hom complex uses products because a homogeneous morphism specifies a component in every degree. Acyclicity of rows or columns implies acyclicity of a total only under suitable boundedness or other hypotheses; proves the finite-diagonal case by a filtration. Unbounded totalization will require separate arguments.  More generally, an additive bifunctor gives a double complex . If countable coproducts exist in , its sum total defines a bifunctor on complexes. A homotopy in either argument induces a homotopy of totals, so it descends to homotopy categories. In the second argument its degree- homotopy is on the component of first degree ; in the first argument it is . These signs follow by expanding . A bifunctor on homotopy categories need not descend to derived categories: preserving homotopy equivalences is weaker than preserving quasi-isomorphisms. The acyclic replacement conditions in and address this additional requirement.    The salamander lemma  A connecting morphism often crosses a diagram against the direction of one of its arrows. The salamander lemma expresses such maps through kernels and quotients attached to neighboring vertices of a double complex. We use Bergman's construction from , with letter notation in place of his diagrammatic symbols. No boundedness, injective objects, or totalization is needed.   Donors, receptors, and their maps Salamander lemma Donor of a double complex Receptor of a double complex  Let be a commuting double complex in an abelian category. At write and for the outgoing maps, and , for the incoming maps. Let and be the diagonal composites. Define The last two objects are the receptor and donor at . Identity on the relevant subobjects of induces maps and . They form a commuting diamond. Every horizontal or vertical differential induces a map .   The subquotients are defined because the incoming diagonal has image in both outgoing kernels, and the two incoming images lie in the kernel of the outgoing diagonal. To check the last map, consider a horizontal arrow . For , its image is killed by the next horizontal arrow and by the vertical arrow at . The incoming horizontal image at maps to zero, and its incoming vertical image maps into the incoming diagonal image at . Interchanging the two directions gives the vertical case. These checks may be made in a module category by .  For a horizontal arrow , the induced vertical cohomology map factors as For a vertical arrow the same factorization holds with horizontal cohomology. It is induced by throughout. This factorization should be distinguished from the exact sequence below: the displayed composite need not be zero.   Let be a horizontal differential in , let be the vertex immediately above , and let be the vertex immediately below , with increasing vertical degree drawn downward. These vertices occupy the positions There is a natural sequence exact at its four interior objects. The first map is ; the last is . For a vertical differential , take immediately to the left of , immediately to the right of , and replace by .  All objects and maps involved belong to a finite diagram, so permits an exact embedding of the required small abelian subcategory into modules. Exactness and faithfulness preserve and reflect the assertions. We prove the horizontal case there. Write , for the incoming vertical and horizontal maps, and for the outgoing vertical map. Thus the donor numerator at is ; the incoming diagonal at is .  At , a class represented by maps to zero in precisely when . The equation gives , so belongs to the donor numerator at . Modulo the class of is the image of . Conversely, an image from this donor is represented by an element of , so maps to zero in .  At , a class represented by maps to zero in precisely when for some . Then represents the same donor class and comes from . Conversely a representative killed by gives zero in the receptor.  At , a representative maps to zero in precisely when . Since , this lies in and gives the required donor class. Conversely a donor image is in .  Finally, let be a horizontal cycle at whose class maps to zero in . The incoming diagonal at is , so for some . The representative is both a horizontal and a vertical cycle, hence gives a class in with the required horizontal cohomology class. Conversely a representative killed by maps to zero. The formulas commute with maps of double complexes, giving naturality. Transposing the double complex proves the vertical statement.   No zeros are asserted at the ends of this six-term sequence. In particular, the first map need not be monic and the last need not be epic. The two maps from to have equal composite through horizontal or vertical cohomology, but this common composite need not vanish. The notation here denotes a donor, not a duality functor or a disk complex . These local donor symbols are used only in this section. Bergman's displaced-square notation avoids this conflict in larger diagrams; the explicit quotients suffice for the applications here.   If the row containing a horizontal arrow is exact at both ends of that arrow, its map is an isomorphism. The analogous assertion holds for a vertical arrow whose column is exact at both ends.  The two neighboring cohomology objects in the salamander sequence vanish.    Place a short exact sequence of complexes in three columns of a double complex, with vertical differentials those of the complexes and zeros in all other columns. Exactness of each row gives isomorphisms At the outside columns, direct substitution in the definitions gives and . The composite is the connecting morphism. For a cycle , the inverse isomorphism selects the donor class of any lift ; the next arrow applies ; the final inverse identifies its class with the class of satisfying . The inverses take place between subquotients, so no splitting of is required. Exactness of the resulting long sequence follows by joining the vertical salamander sequences at these isomorphisms.   A commutative diagram of two short exact sequences is likewise a finite double complex after adjoining zeros. The snake connecting morphism is obtained by composing donor–receptor maps and inverses along its exact rows. Thus the snake lemma, the long cohomology sequence, and the lemma share the same local exactness argument; see for the corresponding diagrams. The ordinary snake lemma in remains available directly. The purpose of the present formulation is to expose the intermediate subquotients, rather than to require a new calculation every time a familiar diagram lemma is used.   "
},
{
  "id": "ha-c04-complex-definition",
  "level": "2",
  "url": "ha-c04.html#ha-c04-complex-definition",
  "type": "Definition",
  "number": "4.1",
  "title": "Complexes and their cohomology.",
  "body": " Complexes and their cohomology  Complex Cochain complex Quasi-isomorphism Acyclic complex  Let be an additive category.  A cochain complex  consists of objects and morphisms , indexed by , such that . A morphism satisfies . These form the category .  Suppose that is abelian. Write , , and . The complex is acyclic if every is zero. A morphism is a quasi-isomorphism if it induces an isomorphism on each cohomology object.  The complex is bounded below if for all sufficiently negative , bounded above if for all sufficiently positive , and bounded if both hold. The corresponding full subcategories carry superscripts , , and .    "
},
{
  "id": "ha-c04-long-exact",
  "level": "2",
  "url": "ha-c04.html#ha-c04-long-exact",
  "type": "Proposition",
  "number": "4.2",
  "title": "",
  "body": " If is abelian, then is abelian, with kernels and cokernels computed degreewise. Every short exact sequence of complexes gives a natural long exact sequence   Degreewise kernels and cokernels inherit differentials because the structure maps commute with differentials. The abelian category axioms follow degreewise. The snake lemma applied to cycles, boundaries, and the differentials gives the connecting maps and exactness. For modules, the connecting map has the following description: lift a cycle to ; then is the image of a cycle , and . Changing either lift changes by a boundary.  "
},
{
  "id": "ha-c04-degreewise-operations",
  "level": "2",
  "url": "ha-c04.html#ha-c04-degreewise-operations",
  "type": "Proposition",
  "number": "4.3",
  "title": "",
  "body": " Let be abelian. Evaluation in degree is an exact functor . Limits and colimits indexed by a small category, whenever they exist in , are computed degreewise in . An exact additive functor induces natural isomorphisms . If a class of colimits is exact in , those colimits commute with cohomology.  The universal property of a degreewise limit or colimit supplies the differential; its square is zero by the same universal property. An exact additive functor preserves kernels, images, and cokernels, hence the quotient defining cohomology. For a diagram of complexes apply this assertion to the exact colimit functor from the diagram category. In particular, filtered colimits commute with cohomology in a Grothendieck category.  "
},
{
  "id": "ha-c04-homotopy-definition",
  "level": "2",
  "url": "ha-c04.html#ha-c04-homotopy-definition",
  "type": "Definition",
  "number": "4.4",
  "title": "Homotopy and the Hom complex.",
  "body": " Homotopy and the Hom complex  Homotopy of complex morphisms Hom complex Contractible complex Homotopy category  For complexes in an additive category, define the complex of abelian groups A homotopy from to is a family with . The category has complexes as objects and homotopy classes of complex morphisms as morphisms. A complex is contractible if its identity is homotopic to zero; a morphism is a homotopy equivalence if its class in is invertible.  "
},
{
  "id": "ha-c04-hom-calculus",
  "level": "2",
  "url": "ha-c04.html#ha-c04-hom-calculus",
  "type": "Proposition",
  "number": "4.5",
  "title": "",
  "body": " The Hom differential has square zero. Composition of homogeneous families satisfies Consequently homotopy is compatible with composition and addition, and is additive. The shift of a homotopy between and is the homotopy between and .  For , expansion of leaves two mixed terms with coefficients and ; they cancel, and the remaining terms contain the square of a differential. Expanding the right side of the composition formula gives . Boundaries therefore form an ideal among degree-zero cocycles. The shift assertion follows from .  "
},
{
  "id": "ha-c04-dg-category",
  "level": "2",
  "url": "ha-c04.html#ha-c04-dg-category",
  "type": "Definition",
  "number": "4.6",
  "title": "Differential graded categories and their degree-zero categories.",
  "body": " Differential graded categories and their degree-zero categories Differential graded category Enriched category  A differential graded category, or dg category , over consists of objects, a complex of abelian groups for each pair, associative composition maps of complexes and identity elements that are degree-zero cycles. Equivalently it is a category enriched over with its tensor product and unit . Its category has degree-zero cycles as arrows; its category has degree-zero cohomology classes as arrows. The composition formula in makes both compositions well-defined.  "
},
{
  "id": "ha-c04-homotopy-properties",
  "level": "2",
  "url": "ha-c04.html#ha-c04-homotopy-properties",
  "type": "Proposition",
  "number": "4.7",
  "title": "",
  "body": " Homotopic morphisms induce the same maps on cohomology. A homotopy equivalence is a quasi-isomorphism. Every contractible complex in an abelian category is acyclic, and an acyclic complex is contractible if and only if all the sequences split.  If , its restriction to cycles factors through boundaries, so it induces zero on cohomology. If the displayed sequences split, identify ; the differential sends to . Sending to in degree contracts . Conversely, if , then the restriction of to is a section of .  "
},
{
  "id": "ha-c04-acyclic-not-contractible",
  "level": "2",
  "url": "ha-c04.html#ha-c04-acyclic-not-contractible",
  "type": "Example",
  "number": "4.8",
  "title": "",
  "body": " The exact complex , placed in three consecutive degrees, is acyclic but not contractible. A splitting would embed the nonzero torsion group in the torsion-free group . Thus the quasi-isomorphism from this complex to zero is not a homotopy equivalence. Over a field every short exact sequence of vector spaces splits, so every acyclic complex of vector spaces is contractible.  "
},
{
  "id": "ha-c04-disk-definition",
  "level": "2",
  "url": "ha-c04.html#ha-c04-disk-definition",
  "type": "Definition",
  "number": "4.9",
  "title": "Stalk and disk complexes.",
  "body": " Stalk and disk complexes Stalk complex Disk complex  Write for in degree with all other terms zero. The disk complex has in degrees , identity differential between them, and zero elsewhere. It is contractible. There are natural bijections   "
},
{
  "id": "ha-c04-split-complex",
  "level": "2",
  "url": "ha-c04.html#ha-c04-split-complex",
  "type": "Proposition",
  "number": "4.10",
  "title": "",
  "body": " Suppose that is abelian and that both sequences split for every . Then choices of splittings identify with the direct sum of its cohomology stalks and contractible disks. In particular is homotopy equivalent to the complex with zero differential.  The splittings give , with differential . The middle summands form . The other two summands form disks, contracted by sending to . In each degree only finitely many of these stalks and disks contribute, so this decomposition requires no infinite coproducts in .  "
},
{
  "id": "ha-c04-cone-definition",
  "level": "2",
  "url": "ha-c04.html#ha-c04-cone-definition",
  "type": "Definition",
  "number": "4.11",
  "title": "The mapping cone.",
  "body": " The mapping cone Mapping cone  For a morphism , its cone is It fits into the degreewise split exact sequence .  "
},
{
  "id": "ha-c04-cone-properties",
  "level": "2",
  "url": "ha-c04.html#ha-c04-cone-properties",
  "type": "Proposition",
  "number": "4.12",
  "title": "",
  "body": " Let be abelian.  The cone sequence gives an exact sequence . In particular is a quasi-isomorphism if and only if is acyclic.  The cone of is contractible. If and are homotopic, their cones are isomorphic as complexes.  A strictly commutative square of complex morphisms induces a morphism of cones. A square commuting only up to homotopy also does so after choosing that homotopy.    For the first assertion use ; lifting a cycle in to identifies the connecting map with . The homotopy contracts . More generally, suppose , , and . Then is a morphism , as substitution in the differentials verifies. Taking gives the second assertion, with inverse obtained by replacing by .  "
},
{
  "id": "ha-c04-cone-homotopy-equivalence",
  "level": "2",
  "url": "ha-c04.html#ha-c04-cone-homotopy-equivalence",
  "type": "Proposition",
  "number": "4.13",
  "title": "",
  "body": " For complexes in an additive category, is a homotopy equivalence if and only if is contractible.  For any complex , the cone formula gives an isomorphism of complexes of abelian groups Its cohomology sequence has successive terms , , and . If the cone is contractible, the first map is a bijection for every ; Yoneda makes invertible in . Conversely, if is invertible, exactness makes every Hom into its cone zero. Taking and shows that the identity of the cone is null-homotopic. This argument uses cohomology only in and therefore does not require to be abelian.  "
},
{
  "id": "ha-c04-cylinder-definition",
  "level": "2",
  "url": "ha-c04.html#ha-c04-cylinder-definition",
  "type": "Definition",
  "number": "4.14",
  "title": "Mapping fiber and mapping cylinder.",
  "body": " Mapping fiber and mapping cylinder Mapping fiber Mapping cylinder  Set . A mapping cylinder for is Thus its terms are and its differential is .  "
},
{
  "id": "ha-c04-cone-short-exact",
  "level": "2",
  "url": "ha-c04.html#ha-c04-cone-short-exact",
  "type": "Proposition",
  "number": "4.15",
  "title": "",
  "body": " For a short exact sequence of complexes , the morphism sending to is a quasi-isomorphism. No degreewise splitting is required.  Its kernel has terms and differential . It is therefore , which is contractible. The resulting short exact sequence and its cohomology sequence prove the assertion.  "
},
{
  "id": "ha-c04-truncation-definition",
  "level": "2",
  "url": "ha-c04.html#ha-c04-truncation-definition",
  "type": "Definition",
  "number": "4.16",
  "title": "Brutal and canonical truncation.",
  "body": " Brutal and canonical truncation Brutal truncation Canonical truncation Smart truncation  Let be a complex in an abelian category and let . The brutal truncations and retain the terms in the indicated degrees and replace all other terms by zero. The canonical, or smart, truncations are Their differentials are induced by those of .  "
},
{
  "id": "ha-c04-truncation-example",
  "level": "2",
  "url": "ha-c04.html#ha-c04-truncation-example",
  "type": "Example",
  "number": "4.17",
  "title": "",
  "body": "Let in degrees . Then , whereas . The canonical truncation is zero and . Truncating terms and truncating cohomology therefore serve different purposes. "
},
{
  "id": "ha-c04-truncation-properties",
  "level": "2",
  "url": "ha-c04.html#ha-c04-truncation-properties",
  "type": "Proposition",
  "number": "4.18",
  "title": "",
  "body": " Let and denote the full subcategories of complexes whose terms vanish in degrees greater than and less than , respectively.  The inclusion has left adjoint and right adjoint . The inclusion has left adjoint and right adjoint .  There is a natural degreewise split exact sequence The connecting map at the cut is induced by .  The endpoint cohomology of the brutal truncations is Away from the endpoint they retain the cohomology in the retained range and have zero cohomology outside it. Canonical truncations retain at the endpoint as well.  Both composites and are canonically isomorphic to . All four truncations are additive functors of complexes. The canonical truncations preserve quasi-isomorphisms; the brutal truncations need not.    A map with has degree- component in , which proves the right adjunction for . A map with kills , proving the left adjunction for . The other two adjunctions follow by restricting the components, with no kernel or quotient required. The sequence in the second assertion is exact in each degree; lifting a class across its degreewise splitting gives the differential at the cut as its connecting map. Calculating kernels and images in degree proves the remaining assertions. For the last failure, take the acyclic disk with : its upper brutal truncation at is the nonacyclic stalk .  "
},
{
  "id": "ha-c04-double-definition",
  "level": "2",
  "url": "ha-c04.html#ha-c04-double-definition",
  "type": "Definition",
  "number": "4.19",
  "title": "Double complexes and their totals.",
  "body": " Double complexes and their totals Double complex Total complex  A double complex has differentials and satisfying and . When the relevant sums or products exist, define in both cases with differential on bidegree .  "
},
{
  "id": "ha-c04-donor-receptor",
  "level": "2",
  "url": "ha-c04.html#ha-c04-donor-receptor",
  "type": "Definition",
  "number": "4.20",
  "title": "Donors, receptors, and their maps.",
  "body": " Donors, receptors, and their maps Salamander lemma Donor of a double complex Receptor of a double complex  Let be a commuting double complex in an abelian category. At write and for the outgoing maps, and , for the incoming maps. Let and be the diagonal composites. Define The last two objects are the receptor and donor at . Identity on the relevant subobjects of induces maps and . They form a commuting diamond. Every horizontal or vertical differential induces a map .  "
},
{
  "id": "ha-c04-salamander-lemma",
  "level": "2",
  "url": "ha-c04.html#ha-c04-salamander-lemma",
  "type": "Lemma",
  "number": "4.21",
  "title": "",
  "body": " Let be a horizontal differential in , let be the vertex immediately above , and let be the vertex immediately below , with increasing vertical degree drawn downward. These vertices occupy the positions There is a natural sequence exact at its four interior objects. The first map is ; the last is . For a vertical differential , take immediately to the left of , immediately to the right of , and replace by .  All objects and maps involved belong to a finite diagram, so permits an exact embedding of the required small abelian subcategory into modules. Exactness and faithfulness preserve and reflect the assertions. We prove the horizontal case there. Write , for the incoming vertical and horizontal maps, and for the outgoing vertical map. Thus the donor numerator at is ; the incoming diagonal at is .  At , a class represented by maps to zero in precisely when . The equation gives , so belongs to the donor numerator at . Modulo the class of is the image of . Conversely, an image from this donor is represented by an element of , so maps to zero in .  At , a class represented by maps to zero in precisely when for some . Then represents the same donor class and comes from . Conversely a representative killed by gives zero in the receptor.  At , a representative maps to zero in precisely when . Since , this lies in and gives the required donor class. Conversely a donor image is in .  Finally, let be a horizontal cycle at whose class maps to zero in . The incoming diagonal at is , so for some . The representative is both a horizontal and a vertical cycle, hence gives a class in with the required horizontal cohomology class. Conversely a representative killed by maps to zero. The formulas commute with maps of double complexes, giving naturality. Transposing the double complex proves the vertical statement.  "
},
{
  "id": "ha-c04-salamander-exact-arrow",
  "level": "2",
  "url": "ha-c04.html#ha-c04-salamander-exact-arrow",
  "type": "Corollary",
  "number": "4.22",
  "title": "",
  "body": " If the row containing a horizontal arrow is exact at both ends of that arrow, its map is an isomorphism. The analogous assertion holds for a vertical arrow whose column is exact at both ends.  The two neighboring cohomology objects in the salamander sequence vanish.  "
},
{
  "id": "ha-c04-salamander-connecting",
  "level": "2",
  "url": "ha-c04.html#ha-c04-salamander-connecting",
  "type": "Example",
  "number": "4.23",
  "title": "",
  "body": " Place a short exact sequence of complexes in three columns of a double complex, with vertical differentials those of the complexes and zeros in all other columns. Exactness of each row gives isomorphisms At the outside columns, direct substitution in the definitions gives and . The composite is the connecting morphism. For a cycle , the inverse isomorphism selects the donor class of any lift ; the next arrow applies ; the final inverse identifies its class with the class of satisfying . The inverses take place between subquotients, so no splitting of is required. Exactness of the resulting long sequence follows by joining the vertical salamander sequences at these isomorphisms.  "
},
{
  "id": "ha-c05",
  "level": "1",
  "url": "ha-c05.html",
  "type": "Chapter",
  "number": "5",
  "title": "Resolutions and classical derived functors",
  "body": " Resolutions and classical derived functors  A left exact functor need not preserve a cokernel. Its right derived functors record that failure in a natural long exact sequence. Resolutions first make this construction explicit; universality then identifies it independently of the chosen resolution. We work with abelian categories and state each supply of projective or injective objects as a hypothesis. Main sources are and .   Resolutions and comparison   Projective and injective objects Projective object Injective object Enough projectives Enough injectives  Let be abelian.  An object is projective if every map lifts along every epimorphism . Equivalently, the functor is exact.  An object is injective if every map extends along every monomorphism . Equivalently, is exact.  The category has enough projectives if every object is an epimorphic image of a projective object, and enough injectives if every object embeds in an injective object.  The equivalences follow because each Hom functor is already left exact in its covariant interpretation; lifting or extension supplies the remaining surjectivity.    Projective and injective resolutions Projective resolution Injective resolution  Let be abelian and let .  A projective resolution is a quasi-isomorphism , where every is projective and for . Thus is exact.  An injective resolution is a quasi-isomorphism , where every is injective and for . Thus is exact.     Enough projectives yields a projective resolution by successively choosing epimorphisms onto kernels. The dual construction gives injective resolutions. These arguments do not require functorial choices. Module categories have enough projectives and injectives; a general Grothendieck category has enough injectives, whereas enough projectives requires a separate argument.   Projective and injective objects are closed under retracts and finite direct sums. Any existing coproduct of projective objects is projective, and any existing product of injective objects is injective. A module is projective if and only if it is a direct summand of a free module.  A retract of an exact Hom functor is exact. Hom from a coproduct is the product of the individual Hom groups; Hom into a product has the analogous description. Products of surjections of abelian groups are surjective, so these descriptions give the asserted lifting properties. For the module assertion, free modules lift maps by lifting their basis elements. A surjection from a free module to a projective module splits, giving the converse.   The product assertion for injectives uses the product in the ambient category. There is no corresponding general assertion that coproducts of injectives are injective. For module categories, closure of arbitrary coproducts of injectives is related to noetherian hypotheses. The existence of enough injectives requires no such closure condition. Nor is an infinite product of projectives covered by the proposition.   For modules, projectives are summands of free modules, and injectivity can be tested on maps from left ideals of the ring: each such map must extend to the ring. This is Baer's criterion; see Stacks, Tag 0AVF . It gives divisible groups as the injectives in , since the ideals of are the groups . We shall use as a small explicit injective resolution. The general existence theorem for Grothendieck categories has its own treatment in .    Let and be projective resolutions. Every morphism lifts to a complex morphism , unique up to homotopy. Consequently any two projective resolutions of are homotopy equivalent compatibly with their augmentations. The dual assertions hold for injective resolutions.  Lift through the epimorphism . Suppose that the lift has been constructed in degrees above . The map obtained using the already constructed component has image in the kernel of the next differential. Exactness of identifies that kernel with the image of ; projectivity of gives the required lift.  For uniqueness, subtract two lifts and write their difference as . Since , lift to . Having constructed in larger degrees, the map has image in . Lift it to . This gives . Apply existence in both directions to two resolutions of the same object; uniqueness shows that their composites are homotopic to the identities.    Syzygies and cosyzygies Syzygy Cosyzygy  For a projective resolution , set and define by the short exact sequences . For an injective resolution , set and use . These objects depend on the resolution; we use syzygy and cosyzygy with that choice understood.    If and are exact with projective, then .  Form . Its projections give exact sequences and . Both split by projectivity. Their two decompositions of give the assertion.   This is Schanuel's lemma. It compares first syzygies up to projective summands, rather than asserting that the syzygies themselves are canonically isomorphic. Iterating this argument explains why finite projective dimension can be detected on any projective resolution. The dual statement compares cosyzygies up to injective summands.  Only projectivity of the source and exactness of the augmented target enter the lifting argument. The corresponding uniqueness statement must still use those hypotheses. A resolution by flat modules computes Tor, but flatness alone does not provide this comparison argument. Flat and projective resolutions should not be interchanged in arbitrary Hom constructions.   Given a short exact sequence and projective resolutions , , there is a projective resolution fitting into a degreewise split short exact sequence compatible with the augmentations. One may take . The dual assertion holds for injective resolutions.  Lift to and combine it with . The resulting map is an epimorphism. The snake lemma gives a short exact sequence of its kernel between the kernels of the two given augmentations. Repeat the same construction with these kernels, then continue in decreasing degrees. The resulting maps have square zero because each factors through the preceding kernel. The inclusions and projections give the asserted split sequence in each degree.     Classical derived functors   Object-valued derived functors Classical derived functor Right derived functor Left derived functor  Let be additive, with abelian.  If has enough injectives, choose an injective resolution and put for .  If has enough projectives, choose a projective resolution and put for .  Morphisms are defined by lifting to resolutions and passing to cohomology.   Additivity ensures that preserves homotopies. Thus comparison proves that these are well-defined functors up to their unique comparison isomorphisms. If is left exact, then ; if is right exact, then . Without the corresponding exactness assumption the degree-zero identification need not hold. The symbols and here denote object-valued functors. The total derived functors and in take values in derived categories; these constructions are related by cohomology.   Suppose that has enough injectives and is left exact.  A short exact sequence gives a natural long exact sequence starting with .  For injective , one has for .  If is exact with injective, then and for .  There are dual statements for left derived functors of right exact functors.  Use the injective version of . Its sequence of resolutions is split in every degree, so applying the additive functor preserves its exactness. The cohomology sequence gives the first assertion. The resolution consisting of in degree zero proves the second; the first two assertions give the third.   The last formulas are dimension shifting. For the cosyzygies just defined, their iteration gives The first formula does not extend to : degree zero is governed by the second formula and the beginning of the long exact sequence. Dually, for a right exact functor, for . These are connecting isomorphisms attached to the chosen resolution, not arbitrary identifications of groups. Sources using homological resolutions write for our . “The th syzygy” may also be indexed starting with the kernel of the augmentation rather than with ; our convention is fixed by .  A natural transformation between two left exact functors induces maps by evaluation on the same injective resolution. They commute with connecting morphisms because the latter come from maps of short exact sequences of resolution complexes. Their composites and identities agree with those of the original transformations. Thus the construction retains functoriality both in the input object and in the functor being derived.   Under the hypotheses for right derived functors, is exact if and only if , equivalently if and only if all positive derived functors vanish. More generally, to prove for all , it is enough to find an exact coresolution of of length by -acyclic objects. There are dual assertions for left derived functors.  The long exact sequence shows that vanishing of makes preserve epimorphisms, hence makes the left exact functor exact. An exact functor preserves the cohomology of a resolution and therefore has no higher derived values. The finite coresolution assertion follows from the acyclic-resolution result below.   The left exact functor sends to a sequence whose last map is . The missing cokernel map appears as the connecting isomorphism . One can compute this derived value using the injective resolution : divisible abelian groups are injective, , and . Thus the derived term accounts exactly for the failure of surjectivity in the original sequence.    Universality and effacement   Cohomological delta-functors Delta-functor Effaceable functor Universal delta-functor  A cohomological -functor consists of additive functors for and connecting maps for short exact sequences, natural under morphisms of those sequences, giving long exact sequences beginning with . A morphism is a family of natural transformations commuting with all connecting maps. It is universal if every natural transformation extends uniquely to such a morphism. A functor is effaceable if, for every , some monomorphism induces the zero map .    A cohomological -functor whose positive-degree functors are effaceable is universal. In particular, the right derived functors of a left exact functor on an abelian category with enough injectives form a universal -functor.  The general effacement criterion is proved in Stacks, Tag 010P, Lemma 12.12.4 . Its mechanism is as follows. Choose killing . Then is the cokernel of , so the transformation already constructed in degree , followed by the connecting map for , forces the next component. Comparing two choices in their pushout proves independence and naturality. For derived functors an embedding into an injective kills every positive degree, by .   Thus two universal -functors extending the same left exact functor are uniquely isomorphic compatibly with degree zero. Effaceability concerns the map induced by some embedding; it does not require the entire target value to vanish. Embedding into an injective is one sufficient way to achieve the stronger condition.  A homological  -functor has connecting maps lowering the index and long exact sequences ending in degree zero. For left derived functors the corresponding universality has the reversed direction: a transformation extends uniquely to . This direction follows by applying the preceding definition to the opposite target category.  A contravariant left exact functor is handled by the opposite source category. More explicitly, if is left exact and has enough projectives, a projective resolution becomes an injective resolution in . Applying gives a complex in nonnegative degrees. The resulting right derived functors have connecting maps for . Both the order of the objects and the grading are reversed before the covariant construction is applied. This is the convention used for the first variable of Ext in .   Let be left exact with having enough injectives, and let be exact. There are natural isomorphisms , compatible with connecting maps. Dually an exact functor commutes with classical left derived functors.  Use the same resolution of on both sides. Exactness of makes it commute with the kernels, images, and quotients defining cohomology. It also commutes with the connecting maps of the resolution sequence, by naturality of the snake lemma.   Exactness in this proposition is essential. Composing with a merely left exact functor introduces its own higher derived values. The resulting comparison is studied by the composite-functor spectral sequence in .    Acyclic resolutions and inverse limits   Let be left exact, and suppose that has enough injectives. Call  -acyclic if for every . If is exact and every is -acyclic, then there are natural comparison isomorphisms .  Put and . Left exactness identifies with . For , the short exact sequence therefore gives Its higher-degree connecting isomorphisms identify this last object with . In degree zero the same kernel computation gives .  For the comparison, extend the augmentation successively to a map . Injectivity of each target term supplies the extensions; exactness of the augmented source makes the induction possible. The same argument shows uniqueness up to homotopy. Applying and cohomology gives the above isomorphisms, independently of the map. For a map between two acyclic resolutions, comparison with injective resolutions proves naturality. See or .   Acyclicity is relative to the chosen functor. It is not the assertion that the object, placed in degree zero, is an acyclic complex. Nor does this bounded-below statement permit termwise acyclic objects in arbitrary unbounded resolutions; that question belongs to .  The acyclic-resolution criterion permits computation without replacing every term by an injective, but the comparison still takes place against the already constructed derived functor. To construct derived functors when the source lacks enough injectives, one must instead specify an adapted class with an existence and comparison theorem. A collection of objects on which one expects vanishing is not by itself such a construction.   The -acyclic objects contain the injectives and are closed under finite direct sums, retracts, extensions, and cokernels of monomorphisms between -acyclic objects. Applying to a short exact sequence of -acyclic objects gives a short exact sequence.  Additivity gives the sum and retract assertions. For , the long exact sequence gives vanishing on when it vanishes on , and vanishing on when it vanishes on . In the latter case also makes an epimorphism. These observations prove all assertions.   The dual formulation uses a right exact functor and a resolution by objects with vanishing positive left derived values. It includes flat resolutions for tensor product. Even there, the reason a flat resolution computes the answer is acyclicity for that tensor functor, not the lifting property of a projective object.   For a countable tower of abelian groups , with transition maps , the inverse limit is left exact and its derived functors satisfy where . This computation is specific to countable towers of groups; arbitrary indexing categories have different higher-limit behavior. See and .  If all transition maps are surjective, recursive lifting makes surjective, hence . Failure of exactness occurs already for the termwise exact sequence of towers , where the first transition maps are inclusions and the middle maps are identities. The map on limits is and is not surjective. Here denotes the group of 2-adic integers.  The associated long exact sequence makes the obstruction explicit: . Neither the exactness of products of groups nor exactness at each stage makes an inverse limit preserve this surjection. Products occur in the two-term formula, but inverse limit is its kernel, and that kernel construction is only left exact.    The Mittag–Leffler condition Mittag–Leffler condition  A countable tower is Mittag–Leffler if, for every , the descending sequence of images becomes constant for sufficiently large .    A countable Mittag–Leffler tower of abelian groups has . Consequently a short exact sequence of countable towers induces a surjection on inverse limits when its kernel tower is Mittag–Leffler.   The proof replaces the tower by its stable images, whose transitions are surjective, and uses the two-term formula; the quotient tower has eventually zero transition into each fixed stage. See or for the comparison. Surjective towers and towers of finite groups satisfy the condition. The tower with inclusion transitions does not. The implication stated here is sufficient; we make no converse assertion for arbitrary towers. Countability concerns the indexing of the tower. It is not a countability hypothesis on the groups. Derived inverse limits over other indexing categories need separate theorems.   "
},
{
  "id": "ha-c05-projective-injective",
  "level": "2",
  "url": "ha-c05.html#ha-c05-projective-injective",
  "type": "Definition",
  "number": "5.1",
  "title": "Projective and injective objects.",
  "body": " Projective and injective objects Projective object Injective object Enough projectives Enough injectives  Let be abelian.  An object is projective if every map lifts along every epimorphism . Equivalently, the functor is exact.  An object is injective if every map extends along every monomorphism . Equivalently, is exact.  The category has enough projectives if every object is an epimorphic image of a projective object, and enough injectives if every object embeds in an injective object.  The equivalences follow because each Hom functor is already left exact in its covariant interpretation; lifting or extension supplies the remaining surjectivity.  "
},
{
  "id": "ha-c05-resolution-definition",
  "level": "2",
  "url": "ha-c05.html#ha-c05-resolution-definition",
  "type": "Definition",
  "number": "5.2",
  "title": "Projective and injective resolutions.",
  "body": " Projective and injective resolutions Projective resolution Injective resolution  Let be abelian and let .  A projective resolution is a quasi-isomorphism , where every is projective and for . Thus is exact.  An injective resolution is a quasi-isomorphism , where every is injective and for . Thus is exact.    "
},
{
  "id": "ha-c05-projective-injective-closure",
  "level": "2",
  "url": "ha-c05.html#ha-c05-projective-injective-closure",
  "type": "Proposition",
  "number": "5.3",
  "title": "",
  "body": " Projective and injective objects are closed under retracts and finite direct sums. Any existing coproduct of projective objects is projective, and any existing product of injective objects is injective. A module is projective if and only if it is a direct summand of a free module.  A retract of an exact Hom functor is exact. Hom from a coproduct is the product of the individual Hom groups; Hom into a product has the analogous description. Products of surjections of abelian groups are surjective, so these descriptions give the asserted lifting properties. For the module assertion, free modules lift maps by lifting their basis elements. A surjection from a free module to a projective module splits, giving the converse.  "
},
{
  "id": "ha-c05-baer",
  "level": "2",
  "url": "ha-c05.html#ha-c05-baer",
  "type": "Example",
  "number": "5.4",
  "title": "",
  "body": " For modules, projectives are summands of free modules, and injectivity can be tested on maps from left ideals of the ring: each such map must extend to the ring. This is Baer's criterion; see Stacks, Tag 0AVF . It gives divisible groups as the injectives in , since the ideals of are the groups . We shall use as a small explicit injective resolution. The general existence theorem for Grothendieck categories has its own treatment in .  "
},
{
  "id": "ha-c05-comparison",
  "level": "2",
  "url": "ha-c05.html#ha-c05-comparison",
  "type": "Proposition",
  "number": "5.5",
  "title": "",
  "body": " Let and be projective resolutions. Every morphism lifts to a complex morphism , unique up to homotopy. Consequently any two projective resolutions of are homotopy equivalent compatibly with their augmentations. The dual assertions hold for injective resolutions.  Lift through the epimorphism . Suppose that the lift has been constructed in degrees above . The map obtained using the already constructed component has image in the kernel of the next differential. Exactness of identifies that kernel with the image of ; projectivity of gives the required lift.  For uniqueness, subtract two lifts and write their difference as . Since , lift to . Having constructed in larger degrees, the map has image in . Lift it to . This gives . Apply existence in both directions to two resolutions of the same object; uniqueness shows that their composites are homotopic to the identities.  "
},
{
  "id": "ha-c05-syzygy-definition",
  "level": "2",
  "url": "ha-c05.html#ha-c05-syzygy-definition",
  "type": "Definition",
  "number": "5.6",
  "title": "Syzygies and cosyzygies.",
  "body": " Syzygies and cosyzygies Syzygy Cosyzygy  For a projective resolution , set and define by the short exact sequences . For an injective resolution , set and use . These objects depend on the resolution; we use syzygy and cosyzygy with that choice understood.  "
},
{
  "id": "ha-c05-schanuel",
  "level": "2",
  "url": "ha-c05.html#ha-c05-schanuel",
  "type": "Proposition",
  "number": "5.7",
  "title": "",
  "body": " If and are exact with projective, then .  Form . Its projections give exact sequences and . Both split by projectivity. Their two decompositions of give the assertion.  "
},
{
  "id": "ha-c05-horseshoe",
  "level": "2",
  "url": "ha-c05.html#ha-c05-horseshoe",
  "type": "Proposition",
  "number": "5.8",
  "title": "",
  "body": " Given a short exact sequence and projective resolutions , , there is a projective resolution fitting into a degreewise split short exact sequence compatible with the augmentations. One may take . The dual assertion holds for injective resolutions.  Lift to and combine it with . The resulting map is an epimorphism. The snake lemma gives a short exact sequence of its kernel between the kernels of the two given augmentations. Repeat the same construction with these kernels, then continue in decreasing degrees. The resulting maps have square zero because each factors through the preceding kernel. The inclusions and projections give the asserted split sequence in each degree.  "
},
{
  "id": "ha-c05-derived-definition",
  "level": "2",
  "url": "ha-c05.html#ha-c05-derived-definition",
  "type": "Definition",
  "number": "5.9",
  "title": "Object-valued derived functors.",
  "body": " Object-valued derived functors Classical derived functor Right derived functor Left derived functor  Let be additive, with abelian.  If has enough injectives, choose an injective resolution and put for .  If has enough projectives, choose a projective resolution and put for .  Morphisms are defined by lifting to resolutions and passing to cohomology.  "
},
{
  "id": "ha-c05-derived-properties",
  "level": "2",
  "url": "ha-c05.html#ha-c05-derived-properties",
  "type": "Proposition",
  "number": "5.10",
  "title": "",
  "body": " Suppose that has enough injectives and is left exact.  A short exact sequence gives a natural long exact sequence starting with .  For injective , one has for .  If is exact with injective, then and for .  There are dual statements for left derived functors of right exact functors.  Use the injective version of . Its sequence of resolutions is split in every degree, so applying the additive functor preserves its exactness. The cohomology sequence gives the first assertion. The resolution consisting of in degree zero proves the second; the first two assertions give the third.  "
},
{
  "id": "ha-c05-vanishing-test",
  "level": "2",
  "url": "ha-c05.html#ha-c05-vanishing-test",
  "type": "Proposition",
  "number": "5.11",
  "title": "",
  "body": " Under the hypotheses for right derived functors, is exact if and only if , equivalently if and only if all positive derived functors vanish. More generally, to prove for all , it is enough to find an exact coresolution of of length by -acyclic objects. There are dual assertions for left derived functors.  The long exact sequence shows that vanishing of makes preserve epimorphisms, hence makes the left exact functor exact. An exact functor preserves the cohomology of a resolution and therefore has no higher derived values. The finite coresolution assertion follows from the acyclic-resolution result below.  "
},
{
  "id": "ha-c05-dual-functor-example",
  "level": "2",
  "url": "ha-c05.html#ha-c05-dual-functor-example",
  "type": "Example",
  "number": "5.12",
  "title": "",
  "body": "The left exact functor sends to a sequence whose last map is . The missing cokernel map appears as the connecting isomorphism . One can compute this derived value using the injective resolution : divisible abelian groups are injective, , and . Thus the derived term accounts exactly for the failure of surjectivity in the original sequence. "
},
{
  "id": "ha-c05-delta-definition",
  "level": "2",
  "url": "ha-c05.html#ha-c05-delta-definition",
  "type": "Definition",
  "number": "5.13",
  "title": "Cohomological delta-functors.",
  "body": " Cohomological delta-functors Delta-functor Effaceable functor Universal delta-functor  A cohomological -functor consists of additive functors for and connecting maps for short exact sequences, natural under morphisms of those sequences, giving long exact sequences beginning with . A morphism is a family of natural transformations commuting with all connecting maps. It is universal if every natural transformation extends uniquely to such a morphism. A functor is effaceable if, for every , some monomorphism induces the zero map .  "
},
{
  "id": "ha-c05-universal",
  "level": "2",
  "url": "ha-c05.html#ha-c05-universal",
  "type": "Proposition",
  "number": "5.14",
  "title": "",
  "body": " A cohomological -functor whose positive-degree functors are effaceable is universal. In particular, the right derived functors of a left exact functor on an abelian category with enough injectives form a universal -functor.  The general effacement criterion is proved in Stacks, Tag 010P, Lemma 12.12.4 . Its mechanism is as follows. Choose killing . Then is the cokernel of , so the transformation already constructed in degree , followed by the connecting map for , forces the next component. Comparing two choices in their pushout proves independence and naturality. For derived functors an embedding into an injective kills every positive degree, by .  "
},
{
  "id": "ha-c05-exact-postcomposition",
  "level": "2",
  "url": "ha-c05.html#ha-c05-exact-postcomposition",
  "type": "Proposition",
  "number": "5.15",
  "title": "",
  "body": " Let be left exact with having enough injectives, and let be exact. There are natural isomorphisms , compatible with connecting maps. Dually an exact functor commutes with classical left derived functors.  Use the same resolution of on both sides. Exactness of makes it commute with the kernels, images, and quotients defining cohomology. It also commutes with the connecting maps of the resolution sequence, by naturality of the snake lemma.  "
},
{
  "id": "ha-c05-acyclic-resolution",
  "level": "2",
  "url": "ha-c05.html#ha-c05-acyclic-resolution",
  "type": "Proposition",
  "number": "5.16",
  "title": "",
  "body": " Let be left exact, and suppose that has enough injectives. Call  -acyclic if for every . If is exact and every is -acyclic, then there are natural comparison isomorphisms .  Put and . Left exactness identifies with . For , the short exact sequence therefore gives Its higher-degree connecting isomorphisms identify this last object with . In degree zero the same kernel computation gives .  For the comparison, extend the augmentation successively to a map . Injectivity of each target term supplies the extensions; exactness of the augmented source makes the induction possible. The same argument shows uniqueness up to homotopy. Applying and cohomology gives the above isomorphisms, independently of the map. For a map between two acyclic resolutions, comparison with injective resolutions proves naturality. See or .  "
},
{
  "id": "ha-c05-acyclic-class",
  "level": "2",
  "url": "ha-c05.html#ha-c05-acyclic-class",
  "type": "Proposition",
  "number": "5.17",
  "title": "",
  "body": " The -acyclic objects contain the injectives and are closed under finite direct sums, retracts, extensions, and cokernels of monomorphisms between -acyclic objects. Applying to a short exact sequence of -acyclic objects gives a short exact sequence.  Additivity gives the sum and retract assertions. For , the long exact sequence gives vanishing on when it vanishes on , and vanishing on when it vanishes on . In the latter case also makes an epimorphism. These observations prove all assertions.  "
},
{
  "id": "ha-c05-lim-one",
  "level": "2",
  "url": "ha-c05.html#ha-c05-lim-one",
  "type": "Example",
  "number": "5.18",
  "title": "",
  "body": " For a countable tower of abelian groups , with transition maps , the inverse limit is left exact and its derived functors satisfy where . This computation is specific to countable towers of groups; arbitrary indexing categories have different higher-limit behavior. See and .  If all transition maps are surjective, recursive lifting makes surjective, hence . Failure of exactness occurs already for the termwise exact sequence of towers , where the first transition maps are inclusions and the middle maps are identities. The map on limits is and is not surjective. Here denotes the group of 2-adic integers.  The associated long exact sequence makes the obstruction explicit: . Neither the exactness of products of groups nor exactness at each stage makes an inverse limit preserve this surjection. Products occur in the two-term formula, but inverse limit is its kernel, and that kernel construction is only left exact.  "
},
{
  "id": "ha-c05-mittag-leffler",
  "level": "2",
  "url": "ha-c05.html#ha-c05-mittag-leffler",
  "type": "Definition",
  "number": "5.19",
  "title": "The Mittag–Leffler condition.",
  "body": " The Mittag–Leffler condition Mittag–Leffler condition  A countable tower is Mittag–Leffler if, for every , the descending sequence of images becomes constant for sufficiently large .  "
},
{
  "id": "ha-c05-ml-vanishing",
  "level": "2",
  "url": "ha-c05.html#ha-c05-ml-vanishing",
  "type": "Proposition",
  "number": "5.20",
  "title": "",
  "body": " A countable Mittag–Leffler tower of abelian groups has . Consequently a short exact sequence of countable towers induces a surjection on inverse limits when its kernel tower is Mittag–Leffler.  "
},
{
  "id": "ha-c06",
  "level": "1",
  "url": "ha-c06.html",
  "type": "Chapter",
  "number": "6",
  "title": "Ext, Tor, and homological dimension",
  "body": " Ext, Tor, and homological dimension  Ext measures extensions and the failure of Hom to be exact; Tor measures the failure of tensor product to be exact. Their two variables admit different kinds of resolutions, and the comparison between these computations is part of the theory. We first work in abelian categories when possible, then state tensor and change-of-ring results for modules. Main references are and .   The two computations of Ext   Ext groups Ext  If an abelian category has enough injectives, define If it has enough projectives, one can instead define . In either construction , the first variable is contravariant, and the second is covariant.    If has enough projectives and injectives, the two constructions of Ext are naturally isomorphic. They agree with Hom in degree zero and give long exact sequences in each variable. Moreover, for projective and for injective , whenever .  For resolutions and , compare and with the total complex of the first-quadrant double complex , inserting the Hom signs. Exactness of and makes both comparisons quasi-isomorphisms. The first-quadrant totalization argument is proved in . Comparison of resolutions makes the isomorphisms natural. The horseshoe lemma gives the long exact sequences, while one-term resolutions give the vanishing statements.   Using the opposite source category converts the first variable into a covariant left exact functor, so its long exact sequence has the direction . The two variances must be retained when transporting extension classes. These Ext groups derive the abelian-group-valued Hom functor. An internal Ext object requires a specified internal Hom and a separate construction. Linearity may provide additional scalar actions but does not identify these two notions.  In the injective construction, every fixed injective makes exact. Therefore resolving only still gives a long exact sequence in , even if the category has no projective objects. The projective construction has the dual property. Enough objects of one kind suffice to obtain the two-variable Ext theory; requiring both kinds is needed only for the displayed double-resolution comparison.    Extensions and their products   Yoneda extensions Yoneda extension Baer sum Yoneda product  For , an -extension of by is an exact sequence Equivalence is the relation generated by morphisms of these sequences which are the identity on the two endpoints. For , such a morphism is an isomorphism. The Baer sum is obtained by taking the direct sum of extensions, pulling back along the diagonal of , and pushing out along the addition map of . Splicing extensions gives the Yoneda product     In an abelian category with enough projectives or enough injectives, equivalence classes of -extensions form an abelian group under Baer sum, naturally isomorphic to . The zero class in degree one consists of the split short exact sequences. Splicing gives an associative bilinear product, with degree-zero morphisms acting by pullback and pushout.  For degree one, choose with projective. Pulling an extension back to splits it, and a choice of splitting gives a map . A different splitting changes this map by the restriction of a map . Conversely, pushing out along produces an extension. These constructions are inverse and identify the group with .  The higher comparison follows by cutting a resolution into short exact sequences and iterating this construction. The compatibility with Baer sum and splicing is the standard Yoneda comparison; see and Stacks, Tag 06XP . The injective construction is dual.   The definition by extensions makes sense without enough projectives or injectives, but its set-theoretic size must then be checked. In we shall compare it with whenever these morphisms form sets. For higher extensions, equivalence does not mean that all middle terms are isomorphic. The equivalence relation deliberately allows morphisms and chains of morphisms fixing the endpoints. The graded algebra need not be graded-commutative; such a conclusion requires extra structure.   Write an extension class of by as .  A morphism pulls back by taking the pullback at its right end; a morphism pushes it out at its left end. These operations commute and give the two variances of .  The inverse of a class under Baer sum is its pushout along . The Baer sum is commutative and associative, and pullback, pushout, and splicing are additive.  Given with class , its connecting map sends to the splice . Given with class , the first-variable connecting map sends to .  In degree zero, splicing at an endpoint means the corresponding pullback or pushout. We use the Yoneda comparison normalized to identify the connecting maps with splicing. Translating a cocycle in a Hom complex written with different differential signs requires translating this comparison as well.  Pullbacks of epimorphisms and pushouts of monomorphisms are exact in an abelian category, so the endpoint operations preserve extensions. Their interchange follows from the universal properties. For addition, taking a direct sum and then applying diagonal and addition at the ends gives the stated formulas; the interchange laws for those maps give associativity, commutativity, and distributivity. For the connecting morphism, lift an extension through a projective resolution, or compare it with an injective resolution. The boundary is the obstruction to extending that lift across the additional short exact sequence, represented precisely by concatenating the two extensions. The degree-one calculation in fixes this identification, and dimension shifting proves all degrees. See .   For a projective resolution, the full higher comparison can also be written without choosing a derived category. Its first steps form an -extension of by . Pushing it out along gives an extension class, and dimension shifting identifies A map extending across gives the zero class. Conversely the degree-one comparison applied to shows that these are all relations. This constructs every higher extension from a fixed resolution and explains why changing that resolution does not change Ext.  For instance, for , the class of generates . Pushing out along multiplication by gives its multiple by . Splitting is equivalent to this multiple being zero, which occurs exactly when divides . These are endpoint operations on the fixed extension, so no choice of generators in a second resolution is needed.    Balanced bifunctors  The two computations of Ext are an instance of a general resolution argument. It is useful to state the argument before specializing to tensor product: the exactness hypotheses belong to the partially resolved functors, and not merely to the categories.   Let be additive in each variable, with all three categories abelian.  Suppose that have enough projectives, that is right exact in each variable, and that and are exact whenever are projective. For projective resolutions and , there are natural isomorphisms . These bifunctors have homological long exact sequences in each variable.  Dually, suppose that both source categories have enough injectives, that is left exact in each variable, and that and are exact for injective . Then naturally, with cohomological long exact sequences in both variables.    In the projective case form , with both indices nonpositive. Augmenting in either direction gives a map from its total complex to one of the single-resolution complexes. The cone has exact rows or columns by the partially resolved exactness hypotheses. Each diagonal is finite, so the double-complex theorem of makes both augmentations quasi-isomorphisms. Comparison of resolutions proves naturality. The horseshoe lemma gives the long exact sequences. Reverse the degrees and arrows for the injective statement.   Apply the second statement to : projective objects of are injective in its opposite category. For tensor product of modules, apply the first statement. These special cases are called balanced computations. A general additive bifunctor need not satisfy either exactness condition, so resolving the two variables separately need not give the same result. This balance is distinct from a balanced bilinear map used to define a tensor product over a ring. Here the word concerns agreement of the two derived-functor calculations.    Tor and flat resolutions   Tor groups Tor Flat module  Let be an associative unital ring, a right -module, and a left -module. For a projective resolution in right modules, put . A right module is flat if is exact; left flatness is defined using .    Tor can be computed using a projective or flat resolution of either variable. It is covariant in both variables, agrees with tensor product in degree zero, and has the homological long exact sequence in each variable. A right module is flat if and only if for every left module ; equivalently all its positive Tor groups vanish. There are corresponding assertions for left modules.  If and are projective resolutions, the maps from to and are quasi-isomorphisms by exactness in the resolved variable. Both complexes are bounded above, so each total diagonal is finite. The same argument compares a flat resolution in one variable with a projective resolution in the other. The horseshoe lemma gives long exact sequences. Finally makes tensor preserve monomorphisms by that sequence, and tensor is already right exact. See also Stacks, Tag 00LY .   Functoriality can be seen before making any balance comparison. For between right modules, choose a lift between projective resolutions; for , tensor that lift with . Different lifts are homotopic, and tensoring the homotopy with gives a homotopy of the resulting total maps. Thus the map on Tor is independent of the lift and respects composition. Using flat resolutions computes these same maps by comparison with the projective construction, even when a map between the chosen flat resolutions cannot be lifted directly.  The connecting morphism also has a concrete meaning. For , choose a projective resolution . Every is flat, so tensoring gives a short exact sequence of complexes. To compute , lift a cycle in to , take its differential, and regard the result in . Its image in is independent of the lift. This is exactly the cohomology connecting map, with index lowered by one.  Let be commutative and let be a non-zero-divisor. The resolution gives Both functors vanish in degrees greater than one. Thus and are cyclic of order for positive . If is a zero-divisor, the displayed sequence is not a resolution and these higher-vanishing conclusions no longer follow.  For ideals of a commutative ring, tensor with . The Tor sequence and give In particular . This calculation needs no regularity or noetherian hypothesis and is often more useful than choosing a full resolution.   The Koszul complex Koszul complex Regular sequence  For elements in a commutative ring , the Koszul complex has and differential The sequence is regular if its ideal is proper and multiplication by is injective on for each .    The Koszul complex of a regular sequence is a finite free resolution of .  The displayed differential agrees with the tensor differential on . Induct on . Adjoining the last two-term factor gives, after the degreewise sign change identifying the tensor and cone conventions, the cone of multiplication by on the previous Koszul complex. Its cohomology sequence has only the kernel and cokernel of multiplication by on . Regularity kills that kernel and identifies the cokernel with the required quotient.   After tensoring this resolution with its quotient ring all differentials vanish, so the resulting Tor groups are the exterior powers of . Koszul complexes still exist for nonregular sequences, but their negative cohomology need not vanish. We use regularity only in the resolution statement. See .    Homological dimensions   Projective, injective, and flat dimension Projective dimension Injective dimension Flat dimension Global dimension Weak global dimension  In an abelian category with enough projectives, the projective dimension is the least for which has a projective resolution in degrees , or infinity if none exists. With enough injectives, injective dimension is defined using a resolution in degrees . We assign dimension zero to the zero object. For modules, write a subscript to specify the category. Flat dimension of an -module uses a flat resolution in degrees . The left global dimension of is the supremum of projective dimensions of left modules; left weak global dimension uses flat dimensions.    For a left module and an integer :  if and only if for every left module .  if and only if for every left module .  if and only if for every right module .  In each case the condition implies vanishing in all larger degrees.  Let be the th syzygy in a projective resolution, with . Dimension shifting identifies with . Vanishing for every says that every extension ending in splits, which is equivalent to projectivity. For flat dimension, dimension shifting identifies the Tor condition with ; hence is flat. A given length- flat resolution proves the converse. The injective argument uses cosyzygies and the dual extension criterion. See .   For and , multiplication by gives the infinite projective resolution . Its exactness follows from . Applying either or gives zero differentials, so and in every nonnegative degree. Finite-dimensional modules over a finite-dimensional algebra can therefore have infinite homological dimension.  The projective and injective definitions, dimension tests, and proofs apply in any abelian category with the respective supply of resolutions. Flat dimension requires a specified tensor setting and its supply of flat resolutions; it is not a structure carried by an arbitrary abelian category. In that more general categorical setting, the statement for is a dimension bound relative to , and different functors can give different bounds.   In an abelian category with enough projectives, a short exact sequence gives Use the convention . The dual inequalities hold for injective dimension when there are enough injectives.  Apply the first-variable long exact sequence of Ext with arbitrary second argument. Above the indicated bounds, the two groups adjacent to the group under consideration vanish. The dimension test then gives each inequality. Reversing the short exact sequence in the opposite category gives the injective inequalities.   These inequalities explain the role of the last syzygy: a resolution of length is possible exactly when a th syzygy is projective. It is not enough that a chosen object appearing as a term of the resolution have small dimension; the kernels connecting the terms are what transmit the bound. Over , all modules have projective dimension at most one because subgroups of free abelian groups are free. The group is flat but not projective, so flat and projective dimension can already differ in this example.    Changing the ring  For a ring homomorphism , restriction of scalars has left adjoint and right adjoint . In the latter, is an -bimodule and the left -action is . These bimodule structures are necessary even though restriction itself does not change the underlying abelian groups.   Let be a flat homomorphism of commutative rings and let be -modules.  There are natural isomorphisms .  If admits a projective resolution whose terms are finitely generated, there are natural isomorphisms .  For an -module , there are natural isomorphisms , where the right-hand side uses restriction of scalars.    Tensor a projective resolution of with . Flatness preserves its exactness, and extension of scalars preserves projectives. For Tor, the tensor associativity isomorphism identifies the computing complexes. For the second assertion, finite generation and projectivity give in each degree. Flatness commutes with their cohomology. The third assertion uses the ordinary extension-restriction adjunction degreewise, with no finiteness assumption on the resolution.   The finiteness condition in the Ext base-change statement cannot simply be discarded. For , , , and , its degree-zero source is zero and its target is . Nor does finite presentation alone justify every higher degree: the needed finite generation concerns the relevant part of a resolution. More general change-of-ring comparisons are derived adjunctions and spectral sequences; they will be stated after the machinery of and is available.   "
},
{
  "id": "ha-c06-ext-definition",
  "level": "2",
  "url": "ha-c06.html#ha-c06-ext-definition",
  "type": "Definition",
  "number": "6.1",
  "title": "Ext groups.",
  "body": " Ext groups Ext  If an abelian category has enough injectives, define If it has enough projectives, one can instead define . In either construction , the first variable is contravariant, and the second is covariant.  "
},
{
  "id": "ha-c06-balanced-ext",
  "level": "2",
  "url": "ha-c06.html#ha-c06-balanced-ext",
  "type": "Proposition",
  "number": "6.2",
  "title": "",
  "body": " If has enough projectives and injectives, the two constructions of Ext are naturally isomorphic. They agree with Hom in degree zero and give long exact sequences in each variable. Moreover, for projective and for injective , whenever .  For resolutions and , compare and with the total complex of the first-quadrant double complex , inserting the Hom signs. Exactness of and makes both comparisons quasi-isomorphisms. The first-quadrant totalization argument is proved in . Comparison of resolutions makes the isomorphisms natural. The horseshoe lemma gives the long exact sequences, while one-term resolutions give the vanishing statements.  "
},
{
  "id": "ha-c06-extension-definition",
  "level": "2",
  "url": "ha-c06.html#ha-c06-extension-definition",
  "type": "Definition",
  "number": "6.3",
  "title": "Yoneda extensions.",
  "body": " Yoneda extensions Yoneda extension Baer sum Yoneda product  For , an -extension of by is an exact sequence Equivalence is the relation generated by morphisms of these sequences which are the identity on the two endpoints. For , such a morphism is an isomorphism. The Baer sum is obtained by taking the direct sum of extensions, pulling back along the diagonal of , and pushing out along the addition map of . Splicing extensions gives the Yoneda product   "
},
{
  "id": "ha-c06-yoneda-comparison",
  "level": "2",
  "url": "ha-c06.html#ha-c06-yoneda-comparison",
  "type": "Proposition",
  "number": "6.4",
  "title": "",
  "body": " In an abelian category with enough projectives or enough injectives, equivalence classes of -extensions form an abelian group under Baer sum, naturally isomorphic to . The zero class in degree one consists of the split short exact sequences. Splicing gives an associative bilinear product, with degree-zero morphisms acting by pullback and pushout.  For degree one, choose with projective. Pulling an extension back to splits it, and a choice of splitting gives a map . A different splitting changes this map by the restriction of a map . Conversely, pushing out along produces an extension. These constructions are inverse and identify the group with .  The higher comparison follows by cutting a resolution into short exact sequences and iterating this construction. The compatibility with Baer sum and splicing is the standard Yoneda comparison; see and Stacks, Tag 06XP . The injective construction is dual.  "
},
{
  "id": "ha-c06-yoneda-operations",
  "level": "2",
  "url": "ha-c06.html#ha-c06-yoneda-operations",
  "type": "Proposition",
  "number": "6.5",
  "title": "",
  "body": " Write an extension class of by as .  A morphism pulls back by taking the pullback at its right end; a morphism pushes it out at its left end. These operations commute and give the two variances of .  The inverse of a class under Baer sum is its pushout along . The Baer sum is commutative and associative, and pullback, pushout, and splicing are additive.  Given with class , its connecting map sends to the splice . Given with class , the first-variable connecting map sends to .  In degree zero, splicing at an endpoint means the corresponding pullback or pushout. We use the Yoneda comparison normalized to identify the connecting maps with splicing. Translating a cocycle in a Hom complex written with different differential signs requires translating this comparison as well.  Pullbacks of epimorphisms and pushouts of monomorphisms are exact in an abelian category, so the endpoint operations preserve extensions. Their interchange follows from the universal properties. For addition, taking a direct sum and then applying diagonal and addition at the ends gives the stated formulas; the interchange laws for those maps give associativity, commutativity, and distributivity. For the connecting morphism, lift an extension through a projective resolution, or compare it with an injective resolution. The boundary is the obstruction to extending that lift across the additional short exact sequence, represented precisely by concatenating the two extensions. The degree-one calculation in fixes this identification, and dimension shifting proves all degrees. See .  "
},
{
  "id": "ha-c06-balance-general",
  "level": "2",
  "url": "ha-c06.html#ha-c06-balance-general",
  "type": "Proposition",
  "number": "6.6",
  "title": "",
  "body": " Let be additive in each variable, with all three categories abelian.  Suppose that have enough projectives, that is right exact in each variable, and that and are exact whenever are projective. For projective resolutions and , there are natural isomorphisms . These bifunctors have homological long exact sequences in each variable.  Dually, suppose that both source categories have enough injectives, that is left exact in each variable, and that and are exact for injective . Then naturally, with cohomological long exact sequences in both variables.    In the projective case form , with both indices nonpositive. Augmenting in either direction gives a map from its total complex to one of the single-resolution complexes. The cone has exact rows or columns by the partially resolved exactness hypotheses. Each diagonal is finite, so the double-complex theorem of makes both augmentations quasi-isomorphisms. Comparison of resolutions proves naturality. The horseshoe lemma gives the long exact sequences. Reverse the degrees and arrows for the injective statement.  "
},
{
  "id": "ha-c06-tor-definition",
  "level": "2",
  "url": "ha-c06.html#ha-c06-tor-definition",
  "type": "Definition",
  "number": "6.7",
  "title": "Tor groups.",
  "body": " Tor groups Tor Flat module  Let be an associative unital ring, a right -module, and a left -module. For a projective resolution in right modules, put . A right module is flat if is exact; left flatness is defined using .  "
},
{
  "id": "ha-c06-balanced-tor",
  "level": "2",
  "url": "ha-c06.html#ha-c06-balanced-tor",
  "type": "Proposition",
  "number": "6.8",
  "title": "",
  "body": " Tor can be computed using a projective or flat resolution of either variable. It is covariant in both variables, agrees with tensor product in degree zero, and has the homological long exact sequence in each variable. A right module is flat if and only if for every left module ; equivalently all its positive Tor groups vanish. There are corresponding assertions for left modules.  If and are projective resolutions, the maps from to and are quasi-isomorphisms by exactness in the resolved variable. Both complexes are bounded above, so each total diagonal is finite. The same argument compares a flat resolution in one variable with a projective resolution in the other. The horseshoe lemma gives long exact sequences. Finally makes tensor preserve monomorphisms by that sequence, and tensor is already right exact. See also Stacks, Tag 00LY .  "
},
{
  "id": "ha-c06-principal-example",
  "level": "2",
  "url": "ha-c06.html#ha-c06-principal-example",
  "type": "Example",
  "number": "6.9",
  "title": "",
  "body": "Let be commutative and let be a non-zero-divisor. The resolution gives Both functors vanish in degrees greater than one. Thus and are cyclic of order for positive . If is a zero-divisor, the displayed sequence is not a resolution and these higher-vanishing conclusions no longer follow. "
},
{
  "id": "ha-c06-ideal-intersection",
  "level": "2",
  "url": "ha-c06.html#ha-c06-ideal-intersection",
  "type": "Example",
  "number": "6.10",
  "title": "",
  "body": "For ideals of a commutative ring, tensor with . The Tor sequence and give In particular . This calculation needs no regularity or noetherian hypothesis and is often more useful than choosing a full resolution. "
},
{
  "id": "ha-c06-koszul-definition",
  "level": "2",
  "url": "ha-c06.html#ha-c06-koszul-definition",
  "type": "Definition",
  "number": "6.11",
  "title": "The Koszul complex.",
  "body": " The Koszul complex Koszul complex Regular sequence  For elements in a commutative ring , the Koszul complex has and differential The sequence is regular if its ideal is proper and multiplication by is injective on for each .  "
},
{
  "id": "ha-c06-koszul-resolution",
  "level": "2",
  "url": "ha-c06.html#ha-c06-koszul-resolution",
  "type": "Proposition",
  "number": "6.12",
  "title": "",
  "body": " The Koszul complex of a regular sequence is a finite free resolution of .  The displayed differential agrees with the tensor differential on . Induct on . Adjoining the last two-term factor gives, after the degreewise sign change identifying the tensor and cone conventions, the cone of multiplication by on the previous Koszul complex. Its cohomology sequence has only the kernel and cokernel of multiplication by on . Regularity kills that kernel and identifies the cokernel with the required quotient.  "
},
{
  "id": "ha-c06-dimension-definition",
  "level": "2",
  "url": "ha-c06.html#ha-c06-dimension-definition",
  "type": "Definition",
  "number": "6.13",
  "title": "Projective, injective, and flat dimension.",
  "body": " Projective, injective, and flat dimension Projective dimension Injective dimension Flat dimension Global dimension Weak global dimension  In an abelian category with enough projectives, the projective dimension is the least for which has a projective resolution in degrees , or infinity if none exists. With enough injectives, injective dimension is defined using a resolution in degrees . We assign dimension zero to the zero object. For modules, write a subscript to specify the category. Flat dimension of an -module uses a flat resolution in degrees . The left global dimension of is the supremum of projective dimensions of left modules; left weak global dimension uses flat dimensions.  "
},
{
  "id": "ha-c06-dimension-test",
  "level": "2",
  "url": "ha-c06.html#ha-c06-dimension-test",
  "type": "Proposition",
  "number": "6.14",
  "title": "",
  "body": " For a left module and an integer :  if and only if for every left module .  if and only if for every left module .  if and only if for every right module .  In each case the condition implies vanishing in all larger degrees.  Let be the th syzygy in a projective resolution, with . Dimension shifting identifies with . Vanishing for every says that every extension ending in splits, which is equivalent to projectivity. For flat dimension, dimension shifting identifies the Tor condition with ; hence is flat. A given length- flat resolution proves the converse. The injective argument uses cosyzygies and the dual extension criterion. See .  "
},
{
  "id": "ha-c06-infinite-dimension",
  "level": "2",
  "url": "ha-c06.html#ha-c06-infinite-dimension",
  "type": "Example",
  "number": "6.15",
  "title": "",
  "body": "For and , multiplication by gives the infinite projective resolution . Its exactness follows from . Applying either or gives zero differentials, so and in every nonnegative degree. Finite-dimensional modules over a finite-dimensional algebra can therefore have infinite homological dimension. "
},
{
  "id": "ha-c06-dimension-inequalities",
  "level": "2",
  "url": "ha-c06.html#ha-c06-dimension-inequalities",
  "type": "Proposition",
  "number": "6.16",
  "title": "",
  "body": " In an abelian category with enough projectives, a short exact sequence gives Use the convention . The dual inequalities hold for injective dimension when there are enough injectives.  Apply the first-variable long exact sequence of Ext with arbitrary second argument. Above the indicated bounds, the two groups adjacent to the group under consideration vanish. The dimension test then gives each inequality. Reversing the short exact sequence in the opposite category gives the injective inequalities.  "
},
{
  "id": "ha-c06-base-change",
  "level": "2",
  "url": "ha-c06.html#ha-c06-base-change",
  "type": "Proposition",
  "number": "6.17",
  "title": "",
  "body": " Let be a flat homomorphism of commutative rings and let be -modules.  There are natural isomorphisms .  If admits a projective resolution whose terms are finitely generated, there are natural isomorphisms .  For an -module , there are natural isomorphisms , where the right-hand side uses restriction of scalars.    Tensor a projective resolution of with . Flatness preserves its exactness, and extension of scalars preserves projectives. For Tor, the tensor associativity isomorphism identifies the computing complexes. For the second assertion, finite generation and projectivity give in each degree. Flatness commutes with their cohomology. The third assertion uses the ordinary extension-restriction adjunction degreewise, with no finiteness assumption on the resolution.  "
},
{
  "id": "ha-c07",
  "level": "1",
  "url": "ha-c07.html",
  "type": "Chapter",
  "number": "7",
  "title": "Filtered complexes and spectral sequences",
  "body": " Filtered complexes and spectral sequences  A filtration separates cohomology into successive approximation problems. The associated spectral sequence records which approximate cycles extend further through the filtration and which become boundaries. Construction and convergence are different questions: the pages can exist without determining the cohomology of the total complex. We prove convergence for degreewise finite filtrations and use that case for double complexes. Main references are and .   Filtrations and the abutment   Filtered complexes Filtered complex Associated graded object  Let be abelian. A decreasing filtration on a complex consists of subcomplexes , indexed by , with . Its associated graded complexes are . The induced filtration on cohomology is We call the filtration degreewise finite if for each there are integers with and .   The bounds may depend on the degree. There need not be one finite interval working for the whole complex. In modules, an arbitrary decreasing filtration is called exhaustive if , separated if , and complete if is an isomorphism. Degreewise finiteness implies all three conditions. These conditions alone should not be substituted for a convergence theorem.   Filtered morphisms and strictness Strict filtered morphism Filtered quasi-isomorphism  A filtered morphism is a complex morphism satisfying . It is strict if for all . A short exact sequence of filtered complexes is strict exact if its underlying sequence is exact and both maps are strict. A filtered quasi-isomorphism is a filtered morphism inducing quasi-isomorphisms on all associated graded complexes.   Strict exactness gives short exact sequences on associated graded complexes: use the induced filtration on the subcomplex and the quotient filtration on the quotient complex. An exact sequence of underlying complexes with unrelated filtrations need not have this property. For degreewise finite filtrations, a filtered quasi-isomorphism is an ordinary quasi-isomorphism by . The converse fails: the identity of , from the filtration with to the filtration with , is a filtered underlying isomorphism but is not an isomorphism on associated graded objects.   Cohomological spectral sequences Spectral sequence Degeneration of a spectral sequence Abutment  A cohomological spectral sequence consists of bigraded objects , for , and differentials with , together with specified isomorphisms . It degenerates at if all differentials from that page onward are zero. In the finite situations below, means that has a finite filtration with , where is the eventually stable page in that bidegree.   Outside finite filtrations we will specify the convergence statement, rather than use the arrow alone. “Weak convergence,” “abutment,” and “strong convergence” do not have uniform meanings across the literature; see Stacks, Tag 012K . For increasing homological filtrations the usual differential has bidegree . Reversing the grading and the filtration indices converts that convention to the one used here.    Construction from a filtered complex   Every filtered complex in an abelian category has a natural spectral sequence with If the filtration is degreewise finite, then each bidegree stabilizes and there are natural isomorphisms . In particular this is a convergent spectral sequence in the sense just defined.  Here is a construction using only subobjects, finite sums, and quotients. Write and, for , put Since the filtration is by subcomplexes, . Our is a subobject of . Some sources use the same symbol for its image in the associated graded object. Their quotients describe the same pages, but the cycle and boundary formulas must be translated together. For , define Both summands of the denominator are subobjects of the numerator. The differential of induces , with target bidegree . It is well-defined because changing by the first denominator summand changes by a boundary in the target, and changing it by the second changes by zero. Its square is zero.  To identify the next page, suppose that is a -cycle. The equation permits subtraction from of an element of so that the resulting differential lies in . Thus the cycle class has a representative in . Dividing these representatives by the old identifications and the -boundaries gives exactly The same argument is an identity of kernels, images, and quotients in an abelian category; the representatives merely describe it for modules. At the formula is the cohomology of the associated graded complex, as asserted. All constructions commute with filtration-preserving complex morphisms.  Now assume degreewise finiteness and fix . For large , the numerator becomes , since . The first denominator summand becomes . In the second summand, for large , and its defining cycle condition is . Consequently the stable value is The induced filtration on is finite, so these graded pieces account for the whole cohomology object. This proves convergence.   A class on page can therefore be represented by whose differential has moved at least steps into the filtration. The next differential is that remaining obstruction. This description also computes higher differentials in examples: one corrects a representative by terms of deeper filtration until the first obstruction that cannot be removed.  The direct construction makes higher differentials explicit. The exact-couple construction below instead organizes the long exact sequences already present in the filtration. Both descriptions will be used: cycle representatives are convenient for calculation, while exact couples apply to towers of distinguished triangles.   Let preserve filtrations which are degreewise finite. If its map on one page is an isomorphism for every bidegree, then is a quasi-isomorphism.  Passing to cohomology of pages preserves the isomorphisms. The theorem identifies the stable maps with the associated graded maps on cohomology. A morphism between finite filtered objects which is an isomorphism on associated graded objects is an isomorphism, by induction on the filtration length and the short five lemma.     Exact couples   Exact and derived couples Exact couple Derived exact couple  An exact couple in an abelian category consists of objects and maps , , and such that the sequence around the triangle is exact at all three objects. Then satisfies . Its derived couple has objects and , with maps described by In the last expression is a -cycle, so . For graded couples these maps retain their specified degrees.    The derived-couple maps are well-defined and form an exact couple. Iterating gives a spectral sequence.  Changing with fixed changes by , so is well-defined. Changing by a boundary does not change , since . At , if , write ; then , so . If , then for some , and ; hence . Finally, if , then for some , so . The reverse inclusions follow from the zero consecutive composites. Repetition replaces by its differential cohomology at every step.   These formulas are written with elements to display the mechanism; the same kernel and image identities define the construction in an abelian category. Applied to a filtered complex, use the families Inclusion gives , the quotient gives , and the connecting map gives . These are families of objects; no infinite direct sum in the abelian category is required. Setting gives the first page and differential of . Tracking these degrees through derived couples gives of bidegree . See .  A tower of distinguished triangles has the same construction after applying a cohomological functor. This is why spectral sequences can be obtained from truncation towers without first choosing a double complex. The exact couple constructs the pages; convergence still depends on how the tower relates to the proposed abutment.    Convergence beyond finite filtrations  For this paragraph work with modules, so all the following intersections and unions exist. For , let be the image of in , and let be the image there of . Then The cycles decrease and boundaries increase inside the fixed associated graded object. This defines a limiting term even when there is no eventually constant page. It does not itself identify that term with graded cohomology.   Suppose a filtered complex of modules is exhaustive in every degree and satisfies for all sufficiently large , with the bound allowed to depend on . Then . The filtration on each is exhaustive, separated, and complete, although it need not be finite.  For fixed , the numerator cycles stabilize to the image of , because for large . Every boundary in has a preimage belonging to some by exhaustiveness. Thus the union of the displayed boundaries is the image of . Their quotient is the asserted graded cohomology. Every cohomology class has a cycle representative in some filtration step, giving exhaustiveness. For large the filtration step in degree is zero, so the cohomology filtration is separated and complete.   This is a common convergence version of . Degreewise finite filtrations imply its hypotheses, but its boundary subobjects need not stabilize at a common finite page. This is one reason to distinguish a limiting term from an eventually stable one.   For a filtered complex in an abelian category, suppose that for each there are bounds such that for all sufficiently large , and is an isomorphism for all sufficiently small . Then its spectral sequence has a finite filtration on the abutment and converges to .   This cohomological criterion is Stacks, Tag 0BK5 . The exact sequence of consecutive filtration steps bounds the nonzero first-page terms on each total diagonal. The eventual vanishing and eventual isomorphism in the statement supply the cycle and boundary limits needed for convergence. The hypotheses concern the complexes , so they can hold even when the filtrations of their individual terms are not finite. A finite support pattern on a displayed page, without these links to the abutment, is not a replacement for this criterion.    The spectral sequences of a double complex   Let be a double complex with commuting differentials. Suppose that on each diagonal only finitely many entries are nonzero. Its total complex has two convergent spectral sequences. Filtering by columns gives Filtering by rows gives the analogous sequence with horizontal cohomology taken first. The usual sign adjustment identifies its first-page differentials with the vertical maps. If all columns are acyclic, or all rows are acyclic, then is acyclic.  Give the column filtration . It is a subcomplex filtration because the horizontal differential raises the column and the vertical differential retains it. Its associated graded differential in column is , so its cohomology is vertical cohomology. The next differential is induced by . Finiteness on each diagonal makes the filtration degreewise finite. Apply . Interchanging the two indices gives the second sequence.   This proves the totalization comparisons used for Ext and Tor: resolve each variable, augment the double complex in one direction, and apply the proposition to the cone of the augmentation. First-quadrant and third-quadrant double complexes have finite diagonals. A one-sided bound on only one coordinate need not make the diagonals finite.  The second differential can be computed by two steps in the double complex. Let be a vertical cycle representing an -class. Horizontal closedness on says that for some . The element in the total complex has differential : the terms in column cancel. Therefore Commutativity of the two differentials implies that is a vertical cycle. Changing or the representative changes this result by the relations defining , as follows from the filtered-complex construction. Thus the zigzag computation uses a choice of intermediate lift, but the resulting page differential is independent of that choice. Its sign depends on the chosen totalization convention.  A first-quadrant example already has a nonzero second differential. Over a field, put basis elements in bidegrees . Set , , and , and set all other differentials to zero. The commuting-square condition holds. Vertical cohomology leaves only and , and the first differential is zero. But , by the preceding calculation, so the third page is zero. The total complex is indeed acyclic: its differential sends to and to , an invertible map between its two nonzero terms. The second page can therefore contain nonzero classes even when total cohomology is zero.   Let be a field. Put and for every integer . The vertical and horizontal maps out of to the two adjacent entries on the other diagonal are identities; all remaining maps are zero. The squares commute, and every row and every column is acyclic.  The sum total has only two nonzero degrees. Its differential sends the basis vector indexed by in degree to in degree zero. This map on is injective, by looking at the smallest index in a nonzero finite support. Its cokernel is one-dimensional, since the relations express every basis vector as a nonzero scalar multiple of . Thus , despite both first pages being zero. The column filtration is not degreewise finite, so the proposition does not apply. For the product total the same recurrence is surjective and has a one-dimensional kernel, giving instead . Choosing a totalization and establishing convergence are separate decisions.     Edges, extensions, and products  In a first-quadrant spectral sequence, the filtration of runs from to . On the bottom row no differential leaves for , so surjects onto . On the left edge no differential enters , so embeds in . These maps give the edge morphisms They are respectively an inclusion after quotienting incoming boundaries and a quotient followed by inclusion. Neither edge map is generally an isomorphism.  For a first-quadrant cohomological spectral sequence obtained above, the edge maps come from the extreme filtration pieces. Its first low-degree terms give the exact sequence Indeed , , and . The last term embeds in as its filtration-two piece. The first-quadrant condition rules out all other differentials affecting these identifications.  If vertical cohomology of a first-quadrant double complex is concentrated in row zero, the column spectral sequence has just that row on its first page and degenerates on its second page. Its edge map identifies with . If vertical cohomology vanishes altogether, total cohomology vanishes. Thus the familiar single-resolution computations are collapse cases with a specified edge isomorphism, rather than just dimension counts.  Degeneration determines associated graded objects, not a splitting of the resulting filtration. A complex concentrated in degree zero with value and filtration , , has the same graded pieces and zero spectral-sequence differentials as filtered by one summand. Their abutments are not isomorphic. Even when all filtration extensions split, a canonical splitting requires further data.   Let be filtered complexes of modules over a commutative ring, and let be a complex morphism satisfying . It induces pairings satisfying . Passing from one page to the next takes the induced cohomology pairing. In the convergent cases established above, the limiting pairing is the associated graded pairing on cohomology.  If represent page- cycles, their differentials lie steps deeper in their filtrations. The tensor differential shows that satisfies the same condition in filtration . Changing either representative by a deeper cycle or an allowed boundary changes the product by the corresponding denominator in the target page. The Leibniz rule on the complexes therefore descends with the displayed total-degree sign. The construction of the next page is by cohomology, which gives its compatibility. Actual cycles and boundaries give the assertion on the abutment.   A filtered differential graded algebra is the case . Associativity descends to all pages. For the unital assertion, require also that the unit lie in , so that the unit map from the coefficient ring with its standard filtration preserves filtration; it then supplies the unit on each page. Graded commutativity on the complex gives graded commutativity on the pages with respect to total degree . Without that hypothesis, a multiplicative spectral sequence need not be commutative. Nor does the existence of the displayed pairings assert a Künneth isomorphism for tensor products of page terms. The two gradings have different roles: the product adds both indices, while the commutativity and derivation signs use total cohomological degree.  For a finite spectral sequence of finite-dimensional vector spaces, taking cohomology preserves the alternating sum in total degree. Hence for every page, provided only finitely many terms under discussion are nonzero. This follows by pairing each boundary with its source contribution on a page, then using the finite filtration on the abutment. Without a finiteness or summability condition, the displayed alternating sums need not be defined.  Grothendieck's spectral sequence for a composite of left exact functors also requires an acyclicity hypothesis connecting the two functors. We postpone its statement to , where the derived comparison for a composite is available; a spectral sequence cannot replace a missing hypothesis on that comparison.   "
},
{
  "id": "ha-c07-filtration-definition",
  "level": "2",
  "url": "ha-c07.html#ha-c07-filtration-definition",
  "type": "Definition",
  "number": "7.1",
  "title": "Filtered complexes.",
  "body": " Filtered complexes Filtered complex Associated graded object  Let be abelian. A decreasing filtration on a complex consists of subcomplexes , indexed by , with . Its associated graded complexes are . The induced filtration on cohomology is We call the filtration degreewise finite if for each there are integers with and .  "
},
{
  "id": "ha-c07-filtered-morphisms",
  "level": "2",
  "url": "ha-c07.html#ha-c07-filtered-morphisms",
  "type": "Definition",
  "number": "7.2",
  "title": "Filtered morphisms and strictness.",
  "body": " Filtered morphisms and strictness Strict filtered morphism Filtered quasi-isomorphism  A filtered morphism is a complex morphism satisfying . It is strict if for all . A short exact sequence of filtered complexes is strict exact if its underlying sequence is exact and both maps are strict. A filtered quasi-isomorphism is a filtered morphism inducing quasi-isomorphisms on all associated graded complexes.  "
},
{
  "id": "ha-c07-spectral-definition",
  "level": "2",
  "url": "ha-c07.html#ha-c07-spectral-definition",
  "type": "Definition",
  "number": "7.3",
  "title": "Cohomological spectral sequences.",
  "body": " Cohomological spectral sequences Spectral sequence Degeneration of a spectral sequence Abutment  A cohomological spectral sequence consists of bigraded objects , for , and differentials with , together with specified isomorphisms . It degenerates at if all differentials from that page onward are zero. In the finite situations below, means that has a finite filtration with , where is the eventually stable page in that bidegree.  "
},
{
  "id": "ha-c07-filtered-theorem",
  "level": "2",
  "url": "ha-c07.html#ha-c07-filtered-theorem",
  "type": "Theorem",
  "number": "7.4",
  "title": "",
  "body": " Every filtered complex in an abelian category has a natural spectral sequence with If the filtration is degreewise finite, then each bidegree stabilizes and there are natural isomorphisms . In particular this is a convergent spectral sequence in the sense just defined.  Here is a construction using only subobjects, finite sums, and quotients. Write and, for , put Since the filtration is by subcomplexes, . Our is a subobject of . Some sources use the same symbol for its image in the associated graded object. Their quotients describe the same pages, but the cycle and boundary formulas must be translated together. For , define Both summands of the denominator are subobjects of the numerator. The differential of induces , with target bidegree . It is well-defined because changing by the first denominator summand changes by a boundary in the target, and changing it by the second changes by zero. Its square is zero.  To identify the next page, suppose that is a -cycle. The equation permits subtraction from of an element of so that the resulting differential lies in . Thus the cycle class has a representative in . Dividing these representatives by the old identifications and the -boundaries gives exactly The same argument is an identity of kernels, images, and quotients in an abelian category; the representatives merely describe it for modules. At the formula is the cohomology of the associated graded complex, as asserted. All constructions commute with filtration-preserving complex morphisms.  Now assume degreewise finiteness and fix . For large , the numerator becomes , since . The first denominator summand becomes . In the second summand, for large , and its defining cycle condition is . Consequently the stable value is The induced filtration on is finite, so these graded pieces account for the whole cohomology object. This proves convergence.  "
},
{
  "id": "ha-c07-comparison",
  "level": "2",
  "url": "ha-c07.html#ha-c07-comparison",
  "type": "Corollary",
  "number": "7.5",
  "title": "",
  "body": " Let preserve filtrations which are degreewise finite. If its map on one page is an isomorphism for every bidegree, then is a quasi-isomorphism.  Passing to cohomology of pages preserves the isomorphisms. The theorem identifies the stable maps with the associated graded maps on cohomology. A morphism between finite filtered objects which is an isomorphism on associated graded objects is an isomorphism, by induction on the filtration length and the short five lemma.  "
},
{
  "id": "ha-c07-exact-couple-definition",
  "level": "2",
  "url": "ha-c07.html#ha-c07-exact-couple-definition",
  "type": "Definition",
  "number": "7.6",
  "title": "Exact and derived couples.",
  "body": " Exact and derived couples Exact couple Derived exact couple  An exact couple in an abelian category consists of objects and maps , , and such that the sequence around the triangle is exact at all three objects. Then satisfies . Its derived couple has objects and , with maps described by In the last expression is a -cycle, so . For graded couples these maps retain their specified degrees.  "
},
{
  "id": "ha-c07-derived-couple",
  "level": "2",
  "url": "ha-c07.html#ha-c07-derived-couple",
  "type": "Proposition",
  "number": "7.7",
  "title": "",
  "body": " The derived-couple maps are well-defined and form an exact couple. Iterating gives a spectral sequence.  Changing with fixed changes by , so is well-defined. Changing by a boundary does not change , since . At , if , write ; then , so . If , then for some , and ; hence . Finally, if , then for some , so . The reverse inclusions follow from the zero consecutive composites. Repetition replaces by its differential cohomology at every step.  "
},
{
  "id": "ha-c07-exhaustive-convergence",
  "level": "2",
  "url": "ha-c07.html#ha-c07-exhaustive-convergence",
  "type": "Proposition",
  "number": "7.8",
  "title": "",
  "body": " Suppose a filtered complex of modules is exhaustive in every degree and satisfies for all sufficiently large , with the bound allowed to depend on . Then . The filtration on each is exhaustive, separated, and complete, although it need not be finite.  For fixed , the numerator cycles stabilize to the image of , because for large . Every boundary in has a preimage belonging to some by exhaustiveness. Thus the union of the displayed boundaries is the image of . Their quotient is the asserted graded cohomology. Every cohomology class has a cycle representative in some filtration step, giving exhaustiveness. For large the filtration step in degree is zero, so the cohomology filtration is separated and complete.  "
},
{
  "id": "ha-c07-cohomological-convergence",
  "level": "2",
  "url": "ha-c07.html#ha-c07-cohomological-convergence",
  "type": "Proposition",
  "number": "7.9",
  "title": "",
  "body": " For a filtered complex in an abelian category, suppose that for each there are bounds such that for all sufficiently large , and is an isomorphism for all sufficiently small . Then its spectral sequence has a finite filtration on the abutment and converges to .  "
},
{
  "id": "ha-c07-double-theorem",
  "level": "2",
  "url": "ha-c07.html#ha-c07-double-theorem",
  "type": "Proposition",
  "number": "7.10",
  "title": "",
  "body": " Let be a double complex with commuting differentials. Suppose that on each diagonal only finitely many entries are nonzero. Its total complex has two convergent spectral sequences. Filtering by columns gives Filtering by rows gives the analogous sequence with horizontal cohomology taken first. The usual sign adjustment identifies its first-page differentials with the vertical maps. If all columns are acyclic, or all rows are acyclic, then is acyclic.  Give the column filtration . It is a subcomplex filtration because the horizontal differential raises the column and the vertical differential retains it. Its associated graded differential in column is , so its cohomology is vertical cohomology. The next differential is induced by . Finiteness on each diagonal makes the filtration degreewise finite. Apply . Interchanging the two indices gives the second sequence.  "
},
{
  "id": "ha-c07-d-two-calculation",
  "level": "2",
  "url": "ha-c07.html#ha-c07-d-two-calculation",
  "type": "Example",
  "number": "7.11",
  "title": "",
  "body": "The second differential can be computed by two steps in the double complex. Let be a vertical cycle representing an -class. Horizontal closedness on says that for some . The element in the total complex has differential : the terms in column cancel. Therefore Commutativity of the two differentials implies that is a vertical cycle. Changing or the representative changes this result by the relations defining , as follows from the filtered-complex construction. Thus the zigzag computation uses a choice of intermediate lift, but the resulting page differential is independent of that choice. Its sign depends on the chosen totalization convention. "
},
{
  "id": "ha-c07-nonzero-d-two",
  "level": "2",
  "url": "ha-c07.html#ha-c07-nonzero-d-two",
  "type": "Example",
  "number": "7.12",
  "title": "",
  "body": "A first-quadrant example already has a nonzero second differential. Over a field, put basis elements in bidegrees . Set , , and , and set all other differentials to zero. The commuting-square condition holds. Vertical cohomology leaves only and , and the first differential is zero. But , by the preceding calculation, so the third page is zero. The total complex is indeed acyclic: its differential sends to and to , an invertible map between its two nonzero terms. The second page can therefore contain nonzero classes even when total cohomology is zero. "
},
{
  "id": "ha-c07-unbounded-failure",
  "level": "2",
  "url": "ha-c07.html#ha-c07-unbounded-failure",
  "type": "Example",
  "number": "7.13",
  "title": "",
  "body": " Let be a field. Put and for every integer . The vertical and horizontal maps out of to the two adjacent entries on the other diagonal are identities; all remaining maps are zero. The squares commute, and every row and every column is acyclic.  The sum total has only two nonzero degrees. Its differential sends the basis vector indexed by in degree to in degree zero. This map on is injective, by looking at the smallest index in a nonzero finite support. Its cokernel is one-dimensional, since the relations express every basis vector as a nonzero scalar multiple of . Thus , despite both first pages being zero. The column filtration is not degreewise finite, so the proposition does not apply. For the product total the same recurrence is surjective and has a one-dimensional kernel, giving instead . Choosing a totalization and establishing convergence are separate decisions.  "
},
{
  "id": "ha-c07-pairing",
  "level": "2",
  "url": "ha-c07.html#ha-c07-pairing",
  "type": "Proposition",
  "number": "7.14",
  "title": "",
  "body": " Let be filtered complexes of modules over a commutative ring, and let be a complex morphism satisfying . It induces pairings satisfying . Passing from one page to the next takes the induced cohomology pairing. In the convergent cases established above, the limiting pairing is the associated graded pairing on cohomology.  If represent page- cycles, their differentials lie steps deeper in their filtrations. The tensor differential shows that satisfies the same condition in filtration . Changing either representative by a deeper cycle or an allowed boundary changes the product by the corresponding denominator in the target page. The Leibniz rule on the complexes therefore descends with the displayed total-degree sign. The construction of the next page is by cohomology, which gives its compatibility. Actual cycles and boundaries give the assertion on the abutment.  "
},
{
  "id": "ha-c08",
  "level": "1",
  "url": "ha-c08.html",
  "type": "Chapter",
  "number": "8",
  "title": "Triangulated categories and Verdier quotients",
  "body": " Triangulated categories and Verdier quotients   Mapping cones replace cokernels when homotopies are retained. A triangle records a map, a cone, and a connecting morphism. The axioms below retain the consequences of cone constructions that are used by exact functors and localization. The references are , , and .    Triangles and exact functors   Triangles and their morphisms Triangle Distinguished triangle  Let be additive with an additive autoequivalence . A triangle is a diagram . A morphism to a triangle is a triple satisfying , , and .    Triangulated categories Triangulated category Octahedral axiom   A triangulated structure on specifies distinguished triangles with the following properties.  The class is closed under isomorphism. The triangle is distinguished, and every map is the first map of a distinguished triangle.  A triangle is distinguished if and only if its rotation is distinguished.  A commutative square on the first two objects of distinguished triangles extends to a morphism of triangles.  For composable maps , choose distinguished triangles with third objects . Write their second and third maps as , , and . There exist maps and such that and are morphisms of the chosen triangles and is distinguished.     The last condition is the octahedral axiom in the convention of . We retain the minus sign in rotation. In particular, shifting all three maps of a distinguished triangle without adjusting the connecting map is not our convention for a shifted distinguished triangle. The word pretriangulated has different uses. In the Stacks definition it means the first three axioms; in the theory of differential graded categories it describes a different structure. We use triangulated here with all four axioms.   Exact and cohomological functors Exact functor, triangulated Cohomological functor   An exact functor is additive, has a specified natural isomorphism , and takes distinguished triangles to distinguished triangles using this isomorphism on the last map.  An additive functor to an abelian category is cohomological if each distinguished triangle induces an exact sequence . Rotation then gives its long exact sequence.      Consecutive maps of a distinguished triangle have zero composite.  The functors and give exact sequences on distinguished triangles, with the latter contravariant.  In a morphism of distinguished triangles, if two components are isomorphisms, the third is an isomorphism.  A distinguished triangle is split if its last map is zero. In this case it is isomorphic to with inclusion, projection, and zero as maps.   Compare the identity triangle of with the given triangle using the third axiom; the middle square gives , and rotation gives the other zero composites. For exactness of , a map killed by extends, by the third axiom applied to a split triangle and a rotation, to a factorization through . The dual argument proves the other assertion. Applying these long exact sequences and the five lemma proves the isomorphism assertion. If the connecting map is zero, exactness of supplies a section . Together with it gives a morphism from the split triangle which is the identity on and ; the third assertion proves it is an isomorphism.   A cone of a fixed map is consequently unique up to an isomorphism compatible with the triangle, but this isomorphism need not be unique. The third axiom does not specify a functorial choice of the third component. Concrete cones of chain maps and cones in an abstract homotopy category must be distinguished.   For a distinguished triangle , the following criteria hold.  The map is an isomorphism if and only if .  The map is a split monomorphism if and only if , and this is equivalent to being a split epimorphism.  A map is invertible if it induces isomorphisms on for all . A distinguished triangle with zero connecting map is split as a triangle, not just as a relation between its three objects.   The first criterion follows by applying the exact Hom sequences in all degrees: if is invertible, the identity of is zero; the converse is Yoneda. A retraction of forces by applying , and a section of forces the same equation by composing with . The split-triangle assertion already proved supplies both splittings. The last criterion is Yoneda applied to the natural transformation represented by the map.   The exact Hom sequences are weak kernel and weak cokernel statements: a map killed by the next arrow factors through the preceding arrow, without uniqueness of that factorization. They do not make a triangulated category abelian. For example, a monomorphism in a triangulated category splits, since injectivity of makes the preceding connecting map zero and hence splits . Non-split short exact sequences belong to an abelian heart or to a category of complexes; they are not ordinary kernel–cokernel sequences inside the ambient triangulated category.    The homotopy category as an example   For an additive category , the category , with the translation of , is triangulated. Its distinguished triangles are those isomorphic to An additive functor , applied termwise, induces an exact functor on homotopy categories.  The inclusion and projection in a cone give the displayed triangle. Rotating it produces an isomorphic cone triangle in the homotopy category; the contractible summands account for the sign. A square commuting up to a specified chain homotopy extends to a map of cones by placing that homotopy in the off-diagonal entry. For composable chain maps, the cone maps induced by and give the octahedron after removing a contractible summand. The explicit construction and verification of the four axioms are given in and . Termwise application of an additive functor preserves these formulas because it preserves finite biproducts.   If is abelian, cohomology gives a long exact sequence on these triangles. A termwise split short exact sequence of complexes is a distinguished triangle in . A general short exact sequence need not give such a triangle in ; it will do so after passing to .    Cone maps and suspension signs  A morphism in is a homotopy class, so a commutative square there need not be a strictly commutative square of its chosen chain maps. The homotopy correcting that square appears in the cone map.   Let , , , and be chain maps. If a degree-minus-one map satisfies , then is a chain map giving a morphism of cone triangles in the homotopy category. Also, the map is an isomorphism of complexes. Thus the shifted distinguished triangle has maps , where are the cone inclusion and projection.  For the first assertion, the first component of on is , which is zero. The second component vanishes because is a chain map. Inclusion and projection commute with by its formula. In the second assertion the differentials on the first components are and , respectively. Negating the second coordinate changes one to the other. It also negates the projection to , which gives the stated connecting map.    Take to be zero. Its cone is concentrated in degree zero. For every scalar , the matrix is an automorphism of that cone fixing both its inclusion from and its projection to . These are different automorphisms even in . Thus an isomorphism between cones compatible with the two end objects need not be unique.   A specified complex of chain maps has more data than its image in the homotopy category. Its explicit cone construction is functorial on strictly commutative chain-map squares. Replacing a square by its homotopy class discards the chosen , so that functoriality does not descend merely by omitting the extra entry. Enhanced theories retain compatible homotopies rather than selecting a cone map from a commutative square of homotopy classes. Their construction is separate from the triangulated axioms used here.  A natural transformation between exact functors must respect the chosen isomorphisms with suspension when it is to induce a morphism of distinguished triangles. In particular, the translation functor uses the negative suspension comparison in this cone convention. A statement about exact functors therefore includes their suspension comparison, not only their underlying additive functors.    The cone of a composite  The octahedral axiom compares the errors measured by a map and a second map with the error of their composite. Its concrete form is a triangle of three cones. This is also the reason that maps whose cones lie in a triangulated subcategory are closed under composition.   For chain maps , define There is a distinguished triangle in .  The two formulas are chain maps. Their composite is null-homotopic: the homotopy into satisfies . Write a degree- element of as , with components in . The map is a split chain epimorphism, with chain section . Its kernel is the complex on with differential , hence is the contractible complex . The epimorphism is a homotopy equivalence. Its composite with the inclusion from is ; its chain section followed by the cone projection is . Transporting the cone triangle of along this equivalence gives the asserted triangle.   This computation proves more than a relation between isomorphism classes of cones: it provides the maps compatible with the original triangles. It explains the composition part of Verdier localization without requiring a separate theory of homotopy limits.   Homotopy Cartesian squares Homotopy Cartesian square  A commutative square with maps , , , and is homotopy Cartesian if it can be completed to a distinguished triangle The assertion includes the existence of a compatible last arrow.   For specified chain maps , the shifted cone of , with the projection sign prescribed by rotation, supplies such a square in the homotopy category. The ordinary pullback of the underlying complexes need not give it. For example, the square with , , and is homotopy Cartesian, whereas the ordinary pullback of is zero. This language records the triangle and does not assert a categorical pullback universal property for all Hom sets.    Thick subcategories and quotients   Triangulated and thick subcategories Thick subcategory Verdier quotient  A strictly full subcategory is triangulated if it contains zero, is closed under both translations, and contains the third object of any distinguished triangle whose first two objects lie in . It is thick if it is also closed under direct summands that exist in . For a triangulated , let consist of the maps whose cone lies in . The Verdier quotient is the localization .   The quotient is taken at a size scale where the localization exists. If is small this causes no hom-set difficulty. For a large category, the following structural assertions do not assert local smallness at the original scale.   The class admits a calculus of fractions. The quotient has a triangulated structure for which the quotient functor is exact. Every exact functor annihilating factors through , with the localization universal property on functors and natural transformations. If is thick, exactly when , and is invertible exactly when .  The octahedron makes closed under composition: the cone of a composite is an extension of the cones of its factors. Completing a map to a triangle and applying the third axiom supplies the common denominators and cancellation required by the fraction construction. Triangles isomorphic to images of distinguished triangles then give the quotient structure. The full verification is the Verdier localization theorem; see or . An exact functor annihilating inverts its denominators by the long exact Hom sequence, so the ordinary localization property gives the factorization. The final assertions use thickness; without thickness the kernel is the thick closure of .   A morphism of the quotient may be represented by a roof with , representing . Two roofs represent the same map if they have a common refinement on which their numerators agree and whose composite denominators lie in . The equalities are in ; for a homotopy category they are equalities of homotopy classes.  The quotient universal property does not produce a right or left adjoint of . Such adjoints are additional localization results, developed in . This separates the construction of the quotient from the existence of preferred local representatives.   A roof is zero in the quotient if and only if there is a further denominator with . To compose it with , choose in the denominator class and with . The composite is represented by .  The zero criterion is cancellation in the fraction calculus: equality with the zero numerator is witnessed after a common refinement. The displayed equation replaces the formal factor by . Substitution yields the composite roof. A second choice admits a common refinement, so it represents the same morphism.   The operative equation for composition is , with a denominator. It is an equation in the original category ; if , the representatives need only agree up to homotopy. No inverse chain map to a quasi-isomorphism is being asserted.    Orthogonals and exact adjoints   Orthogonal subcategories Right orthogonal Left orthogonal  For a triangulated subcategory , its right orthogonal consists of objects such that for every and . Its left orthogonal consists of such that for those objects and shifts. Both are thick in .    If , localization induces an isomorphism for every . If , it induces for every . In particular the restrictions to either orthogonal are fully faithful.  For a denominator , its cone triangle and orthogonality show that is bijective. Thus the numerator of any roof into descends uniquely to , and common refinements preserve that descended map. The left-orthogonal assertion uses the right-hand fraction calculus. Closure under triangles, shifts, and retracts follows from the Hom exact sequences.   Full faithfulness does not imply that every quotient object has an orthogonal representative. The existence of those representatives is exactly the additional replacement question. In , the relevant orthogonals will be the K-injective and K-projective complexes. In , they will be the local objects for a reflective localization.   A right or left adjoint of an exact functor is exact for its adjoint suspension comparison. Units and counits respect these comparisons.  For a right adjoint of , adjunction and the exact suspension comparison of give by Yoneda. To test a triangle after applying , first choose a cone triangle for its first map in the source of . Apply , and use the counit and the triangle-morphism axiom to map this cone triangle to the original triangle. Its adjoint supplies a comparison from the chosen cone to the proposed third object. The Hom exact sequences and the five lemma make that comparison invertible. This proves exactness, with the indicated suspension sign; see . The argument for a left adjoint is dual.    "
},
{
  "id": "ha-c08-def-triangle",
  "level": "2",
  "url": "ha-c08.html#ha-c08-def-triangle",
  "type": "Definition",
  "number": "8.1",
  "title": "Triangles and their morphisms.",
  "body": " Triangles and their morphisms Triangle Distinguished triangle  Let be additive with an additive autoequivalence . A triangle is a diagram . A morphism to a triangle is a triple satisfying , , and .  "
},
{
  "id": "ha-c08-def-triangulated",
  "level": "2",
  "url": "ha-c08.html#ha-c08-def-triangulated",
  "type": "Definition",
  "number": "8.2",
  "title": "Triangulated categories.",
  "body": " Triangulated categories Triangulated category Octahedral axiom   A triangulated structure on specifies distinguished triangles with the following properties.  The class is closed under isomorphism. The triangle is distinguished, and every map is the first map of a distinguished triangle.  A triangle is distinguished if and only if its rotation is distinguished.  A commutative square on the first two objects of distinguished triangles extends to a morphism of triangles.  For composable maps , choose distinguished triangles with third objects . Write their second and third maps as , , and . There exist maps and such that and are morphisms of the chosen triangles and is distinguished.    "
},
{
  "id": "ha-c08-def-exact",
  "level": "2",
  "url": "ha-c08.html#ha-c08-def-exact",
  "type": "Definition",
  "number": "8.3",
  "title": "Exact and cohomological functors.",
  "body": " Exact and cohomological functors Exact functor, triangulated Cohomological functor   An exact functor is additive, has a specified natural isomorphism , and takes distinguished triangles to distinguished triangles using this isomorphism on the last map.  An additive functor to an abelian category is cohomological if each distinguished triangle induces an exact sequence . Rotation then gives its long exact sequence.   "
},
{
  "id": "ha-c08-prop-basic",
  "level": "2",
  "url": "ha-c08.html#ha-c08-prop-basic",
  "type": "Proposition",
  "number": "8.4",
  "title": "",
  "body": "  Consecutive maps of a distinguished triangle have zero composite.  The functors and give exact sequences on distinguished triangles, with the latter contravariant.  In a morphism of distinguished triangles, if two components are isomorphisms, the third is an isomorphism.  A distinguished triangle is split if its last map is zero. In this case it is isomorphic to with inclusion, projection, and zero as maps.   Compare the identity triangle of with the given triangle using the third axiom; the middle square gives , and rotation gives the other zero composites. For exactness of , a map killed by extends, by the third axiom applied to a split triangle and a rotation, to a factorization through . The dual argument proves the other assertion. Applying these long exact sequences and the five lemma proves the isomorphism assertion. If the connecting map is zero, exactness of supplies a section . Together with it gives a morphism from the split triangle which is the identity on and ; the third assertion proves it is an isomorphism.  "
},
{
  "id": "ha-c08-prop-detection",
  "level": "2",
  "url": "ha-c08.html#ha-c08-prop-detection",
  "type": "Proposition",
  "number": "8.5",
  "title": "",
  "body": " For a distinguished triangle , the following criteria hold.  The map is an isomorphism if and only if .  The map is a split monomorphism if and only if , and this is equivalent to being a split epimorphism.  A map is invertible if it induces isomorphisms on for all . A distinguished triangle with zero connecting map is split as a triangle, not just as a relation between its three objects.   The first criterion follows by applying the exact Hom sequences in all degrees: if is invertible, the identity of is zero; the converse is Yoneda. A retraction of forces by applying , and a section of forces the same equation by composing with . The split-triangle assertion already proved supplies both splittings. The last criterion is Yoneda applied to the natural transformation represented by the map.  "
},
{
  "id": "ha-c08-thm-homotopy",
  "level": "2",
  "url": "ha-c08.html#ha-c08-thm-homotopy",
  "type": "Theorem",
  "number": "8.6",
  "title": "",
  "body": " For an additive category , the category , with the translation of , is triangulated. Its distinguished triangles are those isomorphic to An additive functor , applied termwise, induces an exact functor on homotopy categories.  The inclusion and projection in a cone give the displayed triangle. Rotating it produces an isomorphic cone triangle in the homotopy category; the contractible summands account for the sign. A square commuting up to a specified chain homotopy extends to a map of cones by placing that homotopy in the off-diagonal entry. For composable chain maps, the cone maps induced by and give the octahedron after removing a contractible summand. The explicit construction and verification of the four axioms are given in and . Termwise application of an additive functor preserves these formulas because it preserves finite biproducts.  "
},
{
  "id": "ha-c08-prop-cone-map",
  "level": "2",
  "url": "ha-c08.html#ha-c08-prop-cone-map",
  "type": "Proposition",
  "number": "8.7",
  "title": "",
  "body": " Let , , , and be chain maps. If a degree-minus-one map satisfies , then is a chain map giving a morphism of cone triangles in the homotopy category. Also, the map is an isomorphism of complexes. Thus the shifted distinguished triangle has maps , where are the cone inclusion and projection.  For the first assertion, the first component of on is , which is zero. The second component vanishes because is a chain map. Inclusion and projection commute with by its formula. In the second assertion the differentials on the first components are and , respectively. Negating the second coordinate changes one to the other. It also negates the projection to , which gives the stated connecting map.  "
},
{
  "id": "ha-c08-example-cone-choice",
  "level": "2",
  "url": "ha-c08.html#ha-c08-example-cone-choice",
  "type": "Example",
  "number": "8.8",
  "title": "",
  "body": " Take to be zero. Its cone is concentrated in degree zero. For every scalar , the matrix is an automorphism of that cone fixing both its inclusion from and its projection to . These are different automorphisms even in . Thus an isomorphism between cones compatible with the two end objects need not be unique.  "
},
{
  "id": "ha-c08-prop-concrete-octahedron",
  "level": "2",
  "url": "ha-c08.html#ha-c08-prop-concrete-octahedron",
  "type": "Proposition",
  "number": "8.9",
  "title": "",
  "body": " For chain maps , define There is a distinguished triangle in .  The two formulas are chain maps. Their composite is null-homotopic: the homotopy into satisfies . Write a degree- element of as , with components in . The map is a split chain epimorphism, with chain section . Its kernel is the complex on with differential , hence is the contractible complex . The epimorphism is a homotopy equivalence. Its composite with the inclusion from is ; its chain section followed by the cone projection is . Transporting the cone triangle of along this equivalence gives the asserted triangle.  "
},
{
  "id": "ha-c08-def-cartesian",
  "level": "2",
  "url": "ha-c08.html#ha-c08-def-cartesian",
  "type": "Definition",
  "number": "8.10",
  "title": "Homotopy Cartesian squares.",
  "body": " Homotopy Cartesian squares Homotopy Cartesian square  A commutative square with maps , , , and is homotopy Cartesian if it can be completed to a distinguished triangle The assertion includes the existence of a compatible last arrow.  "
},
{
  "id": "ha-c08-def-thick",
  "level": "2",
  "url": "ha-c08.html#ha-c08-def-thick",
  "type": "Definition",
  "number": "8.11",
  "title": "Triangulated and thick subcategories.",
  "body": " Triangulated and thick subcategories Thick subcategory Verdier quotient  A strictly full subcategory is triangulated if it contains zero, is closed under both translations, and contains the third object of any distinguished triangle whose first two objects lie in . It is thick if it is also closed under direct summands that exist in . For a triangulated , let consist of the maps whose cone lies in . The Verdier quotient is the localization .  "
},
{
  "id": "ha-c08-thm-verdier",
  "level": "2",
  "url": "ha-c08.html#ha-c08-thm-verdier",
  "type": "Theorem",
  "number": "8.12",
  "title": "",
  "body": " The class admits a calculus of fractions. The quotient has a triangulated structure for which the quotient functor is exact. Every exact functor annihilating factors through , with the localization universal property on functors and natural transformations. If is thick, exactly when , and is invertible exactly when .  The octahedron makes closed under composition: the cone of a composite is an extension of the cones of its factors. Completing a map to a triangle and applying the third axiom supplies the common denominators and cancellation required by the fraction construction. Triangles isomorphic to images of distinguished triangles then give the quotient structure. The full verification is the Verdier localization theorem; see or . An exact functor annihilating inverts its denominators by the long exact Hom sequence, so the ordinary localization property gives the factorization. The final assertions use thickness; without thickness the kernel is the thick closure of .  "
},
{
  "id": "ha-c08-prop-roofs",
  "level": "2",
  "url": "ha-c08.html#ha-c08-prop-roofs",
  "type": "Proposition",
  "number": "8.13",
  "title": "",
  "body": " A roof is zero in the quotient if and only if there is a further denominator with . To compose it with , choose in the denominator class and with . The composite is represented by .  The zero criterion is cancellation in the fraction calculus: equality with the zero numerator is witnessed after a common refinement. The displayed equation replaces the formal factor by . Substitution yields the composite roof. A second choice admits a common refinement, so it represents the same morphism.  "
},
{
  "id": "ha-c08-def-orthogonals",
  "level": "2",
  "url": "ha-c08.html#ha-c08-def-orthogonals",
  "type": "Definition",
  "number": "8.14",
  "title": "Orthogonal subcategories.",
  "body": " Orthogonal subcategories Right orthogonal Left orthogonal  For a triangulated subcategory , its right orthogonal consists of objects such that for every and . Its left orthogonal consists of such that for those objects and shifts. Both are thick in .  "
},
{
  "id": "ha-c08-prop-orthogonal-calculation",
  "level": "2",
  "url": "ha-c08.html#ha-c08-prop-orthogonal-calculation",
  "type": "Proposition",
  "number": "8.15",
  "title": "",
  "body": " If , localization induces an isomorphism for every . If , it induces for every . In particular the restrictions to either orthogonal are fully faithful.  For a denominator , its cone triangle and orthogonality show that is bijective. Thus the numerator of any roof into descends uniquely to , and common refinements preserve that descended map. The left-orthogonal assertion uses the right-hand fraction calculus. Closure under triangles, shifts, and retracts follows from the Hom exact sequences.  "
},
{
  "id": "ha-c08-prop-adjoints",
  "level": "2",
  "url": "ha-c08.html#ha-c08-prop-adjoints",
  "type": "Proposition",
  "number": "8.16",
  "title": "",
  "body": " A right or left adjoint of an exact functor is exact for its adjoint suspension comparison. Units and counits respect these comparisons.  For a right adjoint of , adjunction and the exact suspension comparison of give by Yoneda. To test a triangle after applying , first choose a cone triangle for its first map in the source of . Apply , and use the counit and the triangle-morphism axiom to map this cone triangle to the original triangle. Its adjoint supplies a comparison from the chosen cone to the proposed third object. The Hom exact sequences and the five lemma make that comparison invertible. This proves exactness, with the indicated suspension sign; see . The argument for a left adjoint is dual.  "
},
{
  "id": "ha-c09",
  "level": "1",
  "url": "ha-c09.html",
  "type": "Chapter",
  "number": "9",
  "title": "Derived categories",
  "body": " Derived categories  The derived category makes quasi-isomorphisms invertible while retaining extension classes as morphisms. Its construction is a Verdier quotient of the homotopy category. The distinction between homotopy equivalence and quasi-isomorphism is precisely the distinction between the two categories. Main references are , , and .   Inverting quasi-isomorphisms   Derived categories and boundedness Derived category Acyclic complex Quasi-isomorphism  Let be abelian. Write for the strictly full subcategory of acyclic complexes in . The derived category is Its full subcategories , , and consist respectively of objects with cohomology bounded below, above, and on both sides.    The acyclic complexes form a thick triangulated subcategory. The maps inverted by the quotient are exactly the quasi-isomorphisms. Cohomology descends to , and a morphism of is invertible if and only if it induces isomorphisms on every cohomology object.  The cone long exact sequence proves closure under cones and translations; cohomology preserves finite direct sums, so it also proves closure under summands. The same sequence says that a chain map is a quasi-isomorphism exactly when its cone is acyclic. The quotient theorem applies. For an arbitrary derived morphism, complete it to a distinguished triangle. Its cone is zero exactly when all its cohomology objects vanish, which gives the last assertion.   The phrase quasi-isomorphic complexes may mean that there is a single quasi-isomorphism between them, or that they are joined by a zigzag of quasi-isomorphisms. We use the latter meaning when no arrow is displayed. It is equivalent to their being isomorphic in the derived category. A roof representing an isomorphism has both legs quasi-isomorphisms, by the preceding proposition. Thus the zigzag can be shortened to a span. This does not assert that a quasi-isomorphism exists in either prescribed direction.  For a large , local smallness of is not automatic. If every target has a K-injective replacement, derived morphisms can be calculated in the locally small homotopy category. This applies to Grothendieck categories by . The size issue and the convention of working first at a larger universe are discussed in .    Bounded models and short exact sequences    An object with cohomology zero below has a bounded below representative, and one with cohomology zero above has a bounded above representative. If both conditions hold it has a bounded representative.  Localization of , , or at quasi-isomorphisms identifies with the corresponding full subcategory of .  Every short exact sequence of complexes defines a distinguished triangle in .   For the first assertion use smart truncations. When both bounds are present, the zigzag from to consists of quasi-isomorphisms. To prove full faithfulness in the second assertion, truncate the middle objects of roofs and common refinements outside the cohomological bounds; the fraction equivalence is preserved. This standard fraction argument is given in . For the last assertion the map sending to the image of is a quasi-isomorphism: its kernel is the cone of . Replace the cone by in its triangle.   The cohomological bounds in the definition concern the object of the derived category, not each chosen complex representing it. A bounded object can have unbounded injective or projective resolutions. We also distinguish from the full subcategory of whose cohomology lies in an abelian subcategory : their equivalence requires additional hypotheses.   The functor placing objects in degree zero is fully faithful. For , If has enough injectives or enough projectives, the nonnegative groups are naturally , with composition corresponding to Yoneda product.  For a roof from to , truncate its middle complex above degree zero. The target map then factors through its degree-zero cohomology; the quasi-isomorphism to identifies that cohomology with . This gives the full faithfulness assertion and its uniqueness by the roof equivalence. The same truncation gives the negative-degree vanishing. Under an injective hypothesis choose with bounded below and injective. Then which is the classical definition of Ext. The comparison with extensions identifies the connecting morphism of a short exact sequence with its degree-one class; splicing and composition give the general product. The projective proof is dual. The replacement calculation is proved in ; the quotient and truncation arguments do not depend on these existence hypotheses.     What derived morphisms retain   The exact complex is zero in but is not contractible. A contracting homotopy would split the surjection , which has no section. Thus a quasi-isomorphism need not be a homotopy equivalence.    The short exact sequence gives a nonzero morphism . Its class generates . No chain map from the stalk complex to the stalk complex represents this nonzero morphism: such a chain map is zero. A roof or a resolution supplies the additional morphism.   Over a field, every complex is isomorphic in the derived category to its graded cohomology with zero differential. Choose complements to boundaries inside cycles and to cycles inside each term; the remaining pieces form contractible two-term complexes. The splitting generally depends on choices. Over a general ring, a complex need not split into its cohomology objects: connecting maps between truncations retain extension data.  For a ring , the homotopy category of bounded complexes of finitely generated projective modules embeds fully faithfully in . Its essential image is the perfect complexes. A bounded complex of finitely generated modules need not be perfect: over , the residue field has an infinite projective resolution with repeated multiplication by . These distinctions will also separate boundedness from compactness.    Morphism calculations and resolution models  The localization describes a morphism by a roof, but a roof is not always the best way to calculate it. A resolution replaces one variable by an object orthogonal to every acyclic complex. The orthogonal calculation of then removes the denominators.   Assume the indicated replacements exist.  If is a quasi-isomorphism with K-injective target, then for every .  If is a quasi-isomorphism with K-projective source, then for every .  If has enough injectives, then is an equivalence. If it has enough projectives, then is an equivalence.   The first two statements are the orthogonal calculation; their definitions and existence hypotheses are developed in . For the bounded below case, resolve a bounded below representative by a bounded below complex of injectives. Such complexes are K-injective, so the displayed functor is fully faithful as well as essentially surjective. The projective case is dual. This proof indicates the dependency: the construction of does not require resolutions, while a resolution model requires the relevant existence theorem.   The numerator of a morphism into is an actual chain map into , up to chain homotopy. A morphism into the original need not be an actual chain map into . Similarly, a morphism between two chosen injective models lifts uniquely only as a homotopy class. This supplies a functor on homotopy categories; it is not a strictly unique map of complexes.  Bounded cohomology does not mean a bounded injective resolution exists. An object of may be represented by a complex of injectives extending indefinitely to the right. Thus need not model all of . A finite injective dimension hypothesis would have to be supplied. These boundedness distinctions also matter for total derived functors.   If for and for , then At the boundary there is a natural isomorphism No injective or projective hypothesis is required.  Choose a representative of vanishing below . For a roof from to , truncate its middle complex above ; the denominator remains a quasi-isomorphism. If , the numerator has disjoint source and target degree supports, so is zero. For the boundary case, the truncation triangles remove cohomology of below and of above ; the just-proved vanishing shows that these removals do not change Hom. The remaining calculation is full faithfulness of stalk complexes.   This is an orthogonality statement about cohomological ranges. It does not bound positive Ext groups between two stalk complexes. Such a bound is a homological-dimension assertion, which is additional information.    Cohomology layers and extension data   Smart truncations define natural triangles and If has cohomology in , these triangles give a finite construction of by extensions of its cohomology objects in their prescribed degrees.  The cone of maps by a quasi-isomorphism to ; this follows either by the cone cohomology sequence or by the explicit smart-truncation complexes. The second triangle follows by comparing successive upper truncations: the cone has only in degree and hence is quasi-isomorphic to its stalk there. These triangles are natural in the derived category by the upper\/lower range orthogonality. Iteration between and gives the finite construction.   The successive objects are called the cohomology layers, or the Postnikov layers, of . Their connecting maps record information lost by the graded object . This use of a Postnikov tower concerns truncation triangles. No topological Postnikov construction is needed. The abstract treatment of truncation by a t-structure appears in .   Suppose that has just and . Its truncation triangle has the form Thus the interaction between the two cohomology objects is measured by . Conversely, any such morphism gives a triangle whose middle object has precisely these two cohomology objects. The split-triangle criterion says that precisely when this triangle splits, giving . Nonzero degree-two extension classes therefore give complexes which are not isomorphic to their graded cohomology.   For an unbounded complex there is an infinite truncation tower. The finite-layer argument by itself does not identify the complex with a homotopy limit or homotopy colimit of that tower. Such a conclusion requires the relevant limits, exactness, and convergence conditions. In particular, exact filtered colimits in a Grothendieck category give no automatic exactness of infinite products.    Yoneda extensions and full subcategories   For every abelian category and , Yoneda -extensions of by correspond naturally to morphisms in . Equivalence of extensions corresponds to equality of morphisms, and splicing corresponds to shifted composition. This assertion is made at a universe scale where the relevant extension classes or derived morphisms are sets.  For an exact sequence , form the complex with in degree , in degree zero, and no final term . Its augmentation to is a quasi-isomorphism, and its projection to gives a roof representing the extension. Conversely, a roof from to can be truncated to these degrees; kernels and cokernels at the ends turn it into an exact sequence of this form. The fraction-equivalence relation gives precisely Yoneda equivalence. This construction, including the endpoint modification, is proved in .   Thus Ext can be defined by derived morphisms or by Yoneda extensions even when there are not enough injectives or projectives. Resolutions provide a calculation of these groups under additional hypotheses. The comparison in the earlier stalk-complex proposition concerns that calculation; its hypotheses do not restrict the Yoneda statement.   Let be a full abelian subcategory whose inclusion is exact and whose image is a Serre subcategory. Assume that for all and the comparison is an isomorphism, using Yoneda Ext. Then is fully faithful, with essential image the objects whose cohomology lies in .  The inclusion preserves quasi-isomorphisms and gives the displayed functor. By the Yoneda comparison it is fully faithful on all shifts of stalk objects. Use the finite cohomology-layer construction and the five lemma, first in one variable and then in the other, to obtain full faithfulness on bounded complexes. Its essential image is therefore triangulated: a map between two objects in the image lifts to , and its cone lifts as well. Every bounded object with cohomology in is an iterated extension of such stalks, proving essential surjectivity onto the asserted subcategory. The Serre condition ensures that this cohomological condition is stable under triangles.   The Ext comparison is a genuine hypothesis. Exactness and full faithfulness of the original abelian inclusion only control degree zero. The criterion explains what must be checked before replacing the phrase derived complexes with cohomology in by the derived category of .   "
},
{
  "id": "ha-c09-def-derived",
  "level": "2",
  "url": "ha-c09.html#ha-c09-def-derived",
  "type": "Definition",
  "number": "9.1",
  "title": "Derived categories and boundedness.",
  "body": " Derived categories and boundedness Derived category Acyclic complex Quasi-isomorphism  Let be abelian. Write for the strictly full subcategory of acyclic complexes in . The derived category is Its full subcategories , , and consist respectively of objects with cohomology bounded below, above, and on both sides.  "
},
{
  "id": "ha-c09-prop-quotient",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-quotient",
  "type": "Proposition",
  "number": "9.2",
  "title": "",
  "body": " The acyclic complexes form a thick triangulated subcategory. The maps inverted by the quotient are exactly the quasi-isomorphisms. Cohomology descends to , and a morphism of is invertible if and only if it induces isomorphisms on every cohomology object.  The cone long exact sequence proves closure under cones and translations; cohomology preserves finite direct sums, so it also proves closure under summands. The same sequence says that a chain map is a quasi-isomorphism exactly when its cone is acyclic. The quotient theorem applies. For an arbitrary derived morphism, complete it to a distinguished triangle. Its cone is zero exactly when all its cohomology objects vanish, which gives the last assertion.  "
},
{
  "id": "ha-c09-prop-bounded",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-bounded",
  "type": "Proposition",
  "number": "9.3",
  "title": "",
  "body": "  An object with cohomology zero below has a bounded below representative, and one with cohomology zero above has a bounded above representative. If both conditions hold it has a bounded representative.  Localization of , , or at quasi-isomorphisms identifies with the corresponding full subcategory of .  Every short exact sequence of complexes defines a distinguished triangle in .   For the first assertion use smart truncations. When both bounds are present, the zigzag from to consists of quasi-isomorphisms. To prove full faithfulness in the second assertion, truncate the middle objects of roofs and common refinements outside the cohomological bounds; the fraction equivalence is preserved. This standard fraction argument is given in . For the last assertion the map sending to the image of is a quasi-isomorphism: its kernel is the cone of . Replace the cone by in its triangle.  "
},
{
  "id": "ha-c09-prop-objects",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-objects",
  "type": "Proposition",
  "number": "9.4",
  "title": "",
  "body": " The functor placing objects in degree zero is fully faithful. For , If has enough injectives or enough projectives, the nonnegative groups are naturally , with composition corresponding to Yoneda product.  For a roof from to , truncate its middle complex above degree zero. The target map then factors through its degree-zero cohomology; the quasi-isomorphism to identifies that cohomology with . This gives the full faithfulness assertion and its uniqueness by the roof equivalence. The same truncation gives the negative-degree vanishing. Under an injective hypothesis choose with bounded below and injective. Then which is the classical definition of Ext. The comparison with extensions identifies the connecting morphism of a short exact sequence with its degree-one class; splicing and composition give the general product. The projective proof is dual. The replacement calculation is proved in ; the quotient and truncation arguments do not depend on these existence hypotheses.  "
},
{
  "id": "ha-c09-example-not-homotopy",
  "level": "2",
  "url": "ha-c09.html#ha-c09-example-not-homotopy",
  "type": "Example",
  "number": "9.5",
  "title": "",
  "body": " The exact complex is zero in but is not contractible. A contracting homotopy would split the surjection , which has no section. Thus a quasi-isomorphism need not be a homotopy equivalence.  "
},
{
  "id": "ha-c09-example-extension",
  "level": "2",
  "url": "ha-c09.html#ha-c09-example-extension",
  "type": "Example",
  "number": "9.6",
  "title": "",
  "body": " The short exact sequence gives a nonzero morphism . Its class generates . No chain map from the stalk complex to the stalk complex represents this nonzero morphism: such a chain map is zero. A roof or a resolution supplies the additional morphism.  "
},
{
  "id": "ha-c09-prop-resolution-models",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-resolution-models",
  "type": "Proposition",
  "number": "9.7",
  "title": "",
  "body": " Assume the indicated replacements exist.  If is a quasi-isomorphism with K-injective target, then for every .  If is a quasi-isomorphism with K-projective source, then for every .  If has enough injectives, then is an equivalence. If it has enough projectives, then is an equivalence.   The first two statements are the orthogonal calculation; their definitions and existence hypotheses are developed in . For the bounded below case, resolve a bounded below representative by a bounded below complex of injectives. Such complexes are K-injective, so the displayed functor is fully faithful as well as essentially surjective. The projective case is dual. This proof indicates the dependency: the construction of does not require resolutions, while a resolution model requires the relevant existence theorem.  "
},
{
  "id": "ha-c09-prop-hom-bound",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-hom-bound",
  "type": "Proposition",
  "number": "9.8",
  "title": "",
  "body": " If for and for , then At the boundary there is a natural isomorphism No injective or projective hypothesis is required.  Choose a representative of vanishing below . For a roof from to , truncate its middle complex above ; the denominator remains a quasi-isomorphism. If , the numerator has disjoint source and target degree supports, so is zero. For the boundary case, the truncation triangles remove cohomology of below and of above ; the just-proved vanishing shows that these removals do not change Hom. The remaining calculation is full faithfulness of stalk complexes.  "
},
{
  "id": "ha-c09-prop-truncation-layers",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-truncation-layers",
  "type": "Proposition",
  "number": "9.9",
  "title": "",
  "body": " Smart truncations define natural triangles and If has cohomology in , these triangles give a finite construction of by extensions of its cohomology objects in their prescribed degrees.  The cone of maps by a quasi-isomorphism to ; this follows either by the cone cohomology sequence or by the explicit smart-truncation complexes. The second triangle follows by comparing successive upper truncations: the cone has only in degree and hence is quasi-isomorphic to its stalk there. These triangles are natural in the derived category by the upper\/lower range orthogonality. Iteration between and gives the finite construction.  "
},
{
  "id": "ha-c09-example-two-layers",
  "level": "2",
  "url": "ha-c09.html#ha-c09-example-two-layers",
  "type": "Example",
  "number": "9.10",
  "title": "",
  "body": " Suppose that has just and . Its truncation triangle has the form Thus the interaction between the two cohomology objects is measured by . Conversely, any such morphism gives a triangle whose middle object has precisely these two cohomology objects. The split-triangle criterion says that precisely when this triangle splits, giving . Nonzero degree-two extension classes therefore give complexes which are not isomorphic to their graded cohomology.  "
},
{
  "id": "ha-c09-prop-yoneda-general",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-yoneda-general",
  "type": "Proposition",
  "number": "9.11",
  "title": "",
  "body": " For every abelian category and , Yoneda -extensions of by correspond naturally to morphisms in . Equivalence of extensions corresponds to equality of morphisms, and splicing corresponds to shifted composition. This assertion is made at a universe scale where the relevant extension classes or derived morphisms are sets.  For an exact sequence , form the complex with in degree , in degree zero, and no final term . Its augmentation to is a quasi-isomorphism, and its projection to gives a roof representing the extension. Conversely, a roof from to can be truncated to these degrees; kernels and cokernels at the ends turn it into an exact sequence of this form. The fraction-equivalence relation gives precisely Yoneda equivalence. This construction, including the endpoint modification, is proved in .  "
},
{
  "id": "ha-c09-prop-subcategory-criterion",
  "level": "2",
  "url": "ha-c09.html#ha-c09-prop-subcategory-criterion",
  "type": "Proposition",
  "number": "9.12",
  "title": "",
  "body": " Let be a full abelian subcategory whose inclusion is exact and whose image is a Serre subcategory. Assume that for all and the comparison is an isomorphism, using Yoneda Ext. Then is fully faithful, with essential image the objects whose cohomology lies in .  The inclusion preserves quasi-isomorphisms and gives the displayed functor. By the Yoneda comparison it is fully faithful on all shifts of stalk objects. Use the finite cohomology-layer construction and the five lemma, first in one variable and then in the other, to obtain full faithfulness on bounded complexes. Its essential image is therefore triangulated: a map between two objects in the image lifts to , and its cone lifts as well. Every bounded object with cohomology in is an iterated extension of such stalks, proving essential surjectivity onto the asserted subcategory. The Serre condition ensures that this cohomological condition is stable under triangles.  "
},
{
  "id": "ha-c10",
  "level": "1",
  "url": "ha-c10.html",
  "type": "Chapter",
  "number": "10",
  "title": "Unbounded resolutions",
  "body": " Unbounded resolutions  Injective terms suffice for bounded below resolutions, but not for arbitrary unbounded complexes. The replacement must be insensitive to acyclic complexes in every degree. This is the purpose of K-injective, K-projective, and K-flat complexes. Main references are , , , and .   Homotopically injective and projective complexes   K-injective and K-projective complexes K-injective complex K-projective complex Homotopically injective complex  A complex is K-injective if for every acyclic complex . A complex is K-projective if for every acyclic . Equivalently, the complexes and , respectively, are acyclic for all such . A K-injective replacement is a quasi-isomorphism with K-injective; a K-projective replacement is a quasi-isomorphism with K-projective.   The equivalence uses translations of the acyclic test complex, so a condition on degree-zero homotopy classes controls every cohomology group of the Hom complex. The definitions do not require that the terms themselves be injective or projective. Homotopically injective and homotopically projective are frequent alternative names. Some definitions of a resolution additionally require injective or projective terms. We specify those terms separately when they are needed.    If is K-injective, the natural map is a bijection for every .  If is K-projective, the natural map is a bijection for every .  A quasi-isomorphism between K-injective complexes, or between K-projective complexes, is a homotopy equivalence. An acyclic complex of either type is contractible.   If is a quasi-isomorphism, its cone is acyclic. The Hom sequence of its triangle says that precomposition gives a bijection . Every roof ending at therefore has a unique numerator descending to , which proves the first assertion. The second is dual, using roofs with denominators on the target side. A quasi-isomorphism of replacements has an inverse in the derived category, and these bijections lift that inverse and its two equations to the homotopy category. If a complex is acyclic, apply its defining vanishing to its identity map to obtain a contracting homotopy.    A bounded below complex of injective objects is K-injective. A bounded above complex of projective objects is K-projective.  For the first assertion let have acyclic source, and let for . Construct a homotopy with . Start with zero below . If is constructed, the map kills by the preceding equation and the chain-map identity. It factors through . Injectivity of extends that factor to . Induction gives a null-homotopy. Reverse arrows and degrees for the projective assertion.    For a complex , the K-injective condition is equivalent to either of the following conditions.  For every quasi-isomorphism , the map is a quasi-isomorphism.  For every , localization induces a bijection .  There are dual characterizations of K-projective complexes, with and maps out of .  The cone of is acyclic, and applying the Hom complex identifies the cone of the displayed comparison, up to a shift, with Hom from that acyclic cone. This proves the first equivalence by also testing for an acyclic . The calculation proposition gives the second condition from K-injectivity. Conversely, that condition applied to an acyclic makes , since in .   These characterizations distinguish two uses of the word acyclic . The complex used in a K-condition is acyclic before applying any functor. A complex called acyclic for a particular functor need only satisfy the vanishing needed by that functor. That relative condition can be useful for one derived functor without making the complex K-injective or K-projective for all Hom tests.   The K-injective and K-projective objects form thick triangulated subcategories of . A product of K-injective complexes is K-injective whenever the termwise product exists. A coproduct of K-projective complexes is K-projective whenever the termwise coproduct exists.  These subcategories are the right and left orthogonals of the acyclic complexes. The orthogonal argument of proves closure under shifts, cones, and homotopy retracts. For products, the natural identity of complexes and exactness of products of abelian groups prove K-injectivity. The coproduct assertion uses . These identities concern Hom complexes of abelian groups; they do not require that products in be exact.   Direct sums of K-injective complexes and products of K-projective complexes are not supplied by this argument. Moving a coproduct or product through the wrong Hom variable would assert a preservation property that has not been assumed. Likewise, a quasi-isomorphic complex need not inherit a K-property. It does inherit the property under a homotopy equivalence; replacing a K-injective target by an arbitrary quasi-isomorphic target can lose the Hom calculation.    Existence and its hypotheses    In a Grothendieck abelian category every complex has a functorial K-injective replacement whose terms are injective.  Over any ring, every complex of modules has a K-projective replacement, which can be chosen to have free terms.  An abelian category with enough injectives has bounded below injective resolutions for bounded below complexes. The dual assertion holds for bounded above complexes and enough projectives.    The first assertion is the general existence theorem of ; its proof uses the generator and exact filtered colimits. The module version of the second assertion follows from semi-free resolutions; see . Such a resolution has an exhaustive increasing filtration with graded-free successive quotients and controlled differential. The filtration supplies the lifting homotopies that freeness of separate terms alone does not provide. The third assertion is the classical complex-resolution construction, combined with .  We use these existence theorems with their stated hypotheses. In particular, the K-projective assertion for modules is not inferred merely from the Grothendieck property. For a general abelian category, enough projective objects by itself is used here only for bounded above complexes.   If every complex in has a K-injective replacement, the full subcategory of K-injective complexes maps equivalently to . With K-projective replacements there is the analogous equivalence from . In either case derived morphisms are sets at the original local size scale.  The calculation proposition gives full faithfulness, and the replacement hypothesis gives essential surjectivity. Local smallness follows from the corresponding hom-set in . A chosen inverse equivalence is a replacement functor up to natural isomorphism; it is not a claim that independently chosen resolutions are equal as complexes.     Compatible towers of injective models  Bounded below truncations suggest resolving an unbounded complex by an inverse tower. Three issues must be separated: producing compatible maps between the resolutions, proving that the limit is K-injective, and proving that the limit remains quasi-isomorphic to the original complex. The last issue involves exactness of limits and cannot be inferred from eventual stabilization of cohomology without further hypotheses.   Assume has countable products. Let be a tower of K-injective complexes whose transition maps are split epimorphisms in each degree. Its termwise inverse limit is K-injective and represents the homotopy inverse limit of the tower in .  For , let have -th component the transition map applied to the -st component. The sequence is split exact in every degree. To construct a graded section of , choose sections of the transition maps, set the first coordinate to zero, and solve the subsequent coordinates recursively. Thus is isomorphic in the homotopy category to . The product closure and triangle closure of K-injectives prove the assertion. This limit argument is also used in .    In the preceding proposition assume additionally that countable products in are exact. Let be compatible maps such that, for each , the induced map is an isomorphism for all sufficiently large . Then is a quasi-isomorphism.  Exactness of products identifies with . The long exact sequence of the split-degreewise sequence gives For each of these cohomology towers the transition maps are eventually isomorphisms, by compatibility with . Recursive solution in the constant tail makes surjective, and its kernel is the stable value . The left cokernel vanishes and the right kernel gives the claimed comparison.   One may apply this criterion to compatible resolutions of when such a split tower has been constructed. Independently choosing resolutions does not construct its transition maps with the required splittings. A general Grothendieck category also need not have exact products. Its K-injective existence theorem therefore remains the theorem cited above, rather than a consequence of an unqualified inverse-limit argument. The kernel and cokernel of are often written and for countable towers. Using this short exact formula for a general abelian category requires precisely the product and tower hypotheses used in the proof.    K-flat complexes and a failure of termwise arguments   K-flat complexes K-flat complex  A complex of left -modules is K-flat if is acyclic for every acyclic complex of right -modules. Use direct-sum totalization in this tensor product. The definition for right modules is obtained by reversing the sides.    Bounded above complexes of flat modules are K-flat. Every complex of modules has a K-flat replacement. Tensoring a quasi-isomorphism with a K-flat complex preserves quasi-isomorphisms. A tensor product of K-flat complexes over a commutative ring is K-flat.  A bounded complex of flat modules is K-flat by its finite filtration by stalks and the cone sequence. A bounded above complex is the filtered union of its finite brutal truncations from below. These inclusions are chain maps, and exact filtered colimits of modules prove the first assertion. A semi-free resolution, as in the preceding existence theorem, is K-flat: its filtration reduces the assertion to sums of shifts of the ring, and then uses exact filtered colimits. For the third assertion tensor the acyclic cone of the given quasi-isomorphism. For the final assertion, apply the two K-flat conditions successively and use associativity of direct-sum tensor totalization.   K-flat complexes are closed under shifts, cones, homotopy retracts, arbitrary direct sums, and filtered colimits of complexes of modules. For the first three assertions tensor with a fixed acyclic complex and use triangles and homotopies. For sums and filtered colimits, direct-sum tensor totalization commutes with the indicated colimits, and those colimits of modules are exact. This last use of exactness is specific to the stated category; it must be supplied again in another monoidal abelian category.   Let for a field , and let have in every degree and differential multiplication by . Since , the complex is acyclic. It is not contractible: every term of has image in , whereas an identity map does not. Its terms are free, so a termwise projective unbounded complex need not be K-projective.  The terms are also injective. Indeed the coefficient-of- pairing gives as -modules, and the latter is injective because is exact. Thus termwise injectivity does not imply K-injectivity either.  Finally has zero differential and is nonzero in every degree. If the acyclic complex were K-flat, take a bounded above free resolution of right modules. K-flatness of makes acyclic, and K-flatness of would make a quasi-isomorphism, a contradiction. This gives a termwise flat complex which is not K-flat. The same example isolates three distinct failures using one acyclic complex. Its unboundedness in both directions is essential to the failures of the bounded criteria.   In a general monoidal Grothendieck category, the existence of K-flat replacements requires additional assumptions on its tensor product and flat objects. The module theorem must not be used there without checking an applicable version.    A filtered construction of a replacement  For complexes of modules the unbounded projective replacement can be constructed by an increasing filtration, so that induction is on generators rather than on cohomological degree. We give the construction to explain the extra condition behind the module existence theorem. It is not a claim that an arbitrary abelian category has the requisite free objects or exact colimits.   Semi-free complexes Semi-free complex  A semi-free complex of -modules is a complex with an exhaustive filtration by subcomplexes such that the inclusions split as maps of graded modules and each quotient is a direct sum of shifts of with zero differential. Equivalently, a graded basis can be assigned stages so that the differential of each basis vector is a finite combination of vectors from earlier stages.    Every complex of modules admits a quasi-isomorphism with semi-free. A semi-free complex is K-projective and K-flat. Consequently every K-projective complex of modules is K-flat.  Start with a free graded complex with one cycle generator for each cycle of , in its degree, and send that generator to the corresponding cycle. This gives surjectivity on cohomology. At a stage , for every cycle whose image is a boundary , attach a generator in degree with and send to . Take all such pairs and repeat. In the union , each cohomology class in the kernel appears at a finite stage and is killed at the next one. Exact filtered colimits prove that is a quasi-isomorphism.  Let have acyclic target. Suppose a null-homotopy has been constructed on earlier-stage generators. For a new generator , the element is a cycle, since the homotopy equation already holds on . Acyclicity allows a choice of with . This extends the homotopy to that stage. The filtration induction proves K-projectivity without a bound on the degrees of the generators.  After tensoring with an acyclic complex, the filtration quotients are sums of shifts of that complex. Degreewise splitting and exact filtered colimits show the tensor product acyclic, proving K-flatness. Finally resolve a K-projective complex by a semi-free . Since both are K-projective, that map is a homotopy equivalence. K-flatness is invariant under homotopy equivalence, so is K-flat.   Termwise freeness has been supplemented by a filtration that directs each differential toward earlier stages. The periodic acyclic free complex above has no such structure: if it did, its K-projectivity would make it contractible. This explains the role of the filtration without confusing a degreewise projective object with a projective replacement in the homotopy category.   "
},
{
  "id": "ha-c10-def-k",
  "level": "2",
  "url": "ha-c10.html#ha-c10-def-k",
  "type": "Definition",
  "number": "10.1",
  "title": "K-injective and K-projective complexes.",
  "body": " K-injective and K-projective complexes K-injective complex K-projective complex Homotopically injective complex  A complex is K-injective if for every acyclic complex . A complex is K-projective if for every acyclic . Equivalently, the complexes and , respectively, are acyclic for all such . A K-injective replacement is a quasi-isomorphism with K-injective; a K-projective replacement is a quasi-isomorphism with K-projective.  "
},
{
  "id": "ha-c10-prop-calculation",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-calculation",
  "type": "Proposition",
  "number": "10.2",
  "title": "",
  "body": "  If is K-injective, the natural map is a bijection for every .  If is K-projective, the natural map is a bijection for every .  A quasi-isomorphism between K-injective complexes, or between K-projective complexes, is a homotopy equivalence. An acyclic complex of either type is contractible.   If is a quasi-isomorphism, its cone is acyclic. The Hom sequence of its triangle says that precomposition gives a bijection . Every roof ending at therefore has a unique numerator descending to , which proves the first assertion. The second is dual, using roofs with denominators on the target side. A quasi-isomorphism of replacements has an inverse in the derived category, and these bijections lift that inverse and its two equations to the homotopy category. If a complex is acyclic, apply its defining vanishing to its identity map to obtain a contracting homotopy.  "
},
{
  "id": "ha-c10-prop-bounded",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-bounded",
  "type": "Proposition",
  "number": "10.3",
  "title": "",
  "body": " A bounded below complex of injective objects is K-injective. A bounded above complex of projective objects is K-projective.  For the first assertion let have acyclic source, and let for . Construct a homotopy with . Start with zero below . If is constructed, the map kills by the preceding equation and the chain-map identity. It factors through . Injectivity of extends that factor to . Induction gives a null-homotopy. Reverse arrows and degrees for the projective assertion.  "
},
{
  "id": "ha-c10-prop-invariance",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-invariance",
  "type": "Proposition",
  "number": "10.4",
  "title": "",
  "body": " For a complex , the K-injective condition is equivalent to either of the following conditions.  For every quasi-isomorphism , the map is a quasi-isomorphism.  For every , localization induces a bijection .  There are dual characterizations of K-projective complexes, with and maps out of .  The cone of is acyclic, and applying the Hom complex identifies the cone of the displayed comparison, up to a shift, with Hom from that acyclic cone. This proves the first equivalence by also testing for an acyclic . The calculation proposition gives the second condition from K-injectivity. Conversely, that condition applied to an acyclic makes , since in .  "
},
{
  "id": "ha-c10-prop-closure",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-closure",
  "type": "Proposition",
  "number": "10.5",
  "title": "",
  "body": " The K-injective and K-projective objects form thick triangulated subcategories of . A product of K-injective complexes is K-injective whenever the termwise product exists. A coproduct of K-projective complexes is K-projective whenever the termwise coproduct exists.  These subcategories are the right and left orthogonals of the acyclic complexes. The orthogonal argument of proves closure under shifts, cones, and homotopy retracts. For products, the natural identity of complexes and exactness of products of abelian groups prove K-injectivity. The coproduct assertion uses . These identities concern Hom complexes of abelian groups; they do not require that products in be exact.  "
},
{
  "id": "ha-c10-thm-existence",
  "level": "2",
  "url": "ha-c10.html#ha-c10-thm-existence",
  "type": "Theorem",
  "number": "10.6",
  "title": "",
  "body": "  In a Grothendieck abelian category every complex has a functorial K-injective replacement whose terms are injective.  Over any ring, every complex of modules has a K-projective replacement, which can be chosen to have free terms.  An abelian category with enough injectives has bounded below injective resolutions for bounded below complexes. The dual assertion holds for bounded above complexes and enough projectives.   "
},
{
  "id": "ha-c10-prop-equivalence",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-equivalence",
  "type": "Proposition",
  "number": "10.7",
  "title": "",
  "body": " If every complex in has a K-injective replacement, the full subcategory of K-injective complexes maps equivalently to . With K-projective replacements there is the analogous equivalence from . In either case derived morphisms are sets at the original local size scale.  The calculation proposition gives full faithfulness, and the replacement hypothesis gives essential surjectivity. Local smallness follows from the corresponding hom-set in . A chosen inverse equivalence is a replacement functor up to natural isomorphism; it is not a claim that independently chosen resolutions are equal as complexes.  "
},
{
  "id": "ha-c10-prop-split-tower",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-split-tower",
  "type": "Proposition",
  "number": "10.8",
  "title": "",
  "body": " Assume has countable products. Let be a tower of K-injective complexes whose transition maps are split epimorphisms in each degree. Its termwise inverse limit is K-injective and represents the homotopy inverse limit of the tower in .  For , let have -th component the transition map applied to the -st component. The sequence is split exact in every degree. To construct a graded section of , choose sections of the transition maps, set the first coordinate to zero, and solve the subsequent coordinates recursively. Thus is isomorphic in the homotopy category to . The product closure and triangle closure of K-injectives prove the assertion. This limit argument is also used in .  "
},
{
  "id": "ha-c10-prop-tower-quasiisomorphism",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-tower-quasiisomorphism",
  "type": "Proposition",
  "number": "10.9",
  "title": "",
  "body": " In the preceding proposition assume additionally that countable products in are exact. Let be compatible maps such that, for each , the induced map is an isomorphism for all sufficiently large . Then is a quasi-isomorphism.  Exactness of products identifies with . The long exact sequence of the split-degreewise sequence gives For each of these cohomology towers the transition maps are eventually isomorphisms, by compatibility with . Recursive solution in the constant tail makes surjective, and its kernel is the stable value . The left cokernel vanishes and the right kernel gives the claimed comparison.  "
},
{
  "id": "ha-c10-def-flat",
  "level": "2",
  "url": "ha-c10.html#ha-c10-def-flat",
  "type": "Definition",
  "number": "10.10",
  "title": "K-flat complexes.",
  "body": " K-flat complexes K-flat complex  A complex of left -modules is K-flat if is acyclic for every acyclic complex of right -modules. Use direct-sum totalization in this tensor product. The definition for right modules is obtained by reversing the sides.  "
},
{
  "id": "ha-c10-prop-flat",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-flat",
  "type": "Proposition",
  "number": "10.11",
  "title": "",
  "body": " Bounded above complexes of flat modules are K-flat. Every complex of modules has a K-flat replacement. Tensoring a quasi-isomorphism with a K-flat complex preserves quasi-isomorphisms. A tensor product of K-flat complexes over a commutative ring is K-flat.  A bounded complex of flat modules is K-flat by its finite filtration by stalks and the cone sequence. A bounded above complex is the filtered union of its finite brutal truncations from below. These inclusions are chain maps, and exact filtered colimits of modules prove the first assertion. A semi-free resolution, as in the preceding existence theorem, is K-flat: its filtration reduces the assertion to sums of shifts of the ring, and then uses exact filtered colimits. For the third assertion tensor the acyclic cone of the given quasi-isomorphism. For the final assertion, apply the two K-flat conditions successively and use associativity of direct-sum tensor totalization.  "
},
{
  "id": "ha-c10-example-periodic",
  "level": "2",
  "url": "ha-c10.html#ha-c10-example-periodic",
  "type": "Example",
  "number": "10.12",
  "title": "",
  "body": " Let for a field , and let have in every degree and differential multiplication by . Since , the complex is acyclic. It is not contractible: every term of has image in , whereas an identity map does not. Its terms are free, so a termwise projective unbounded complex need not be K-projective.  The terms are also injective. Indeed the coefficient-of- pairing gives as -modules, and the latter is injective because is exact. Thus termwise injectivity does not imply K-injectivity either.  Finally has zero differential and is nonzero in every degree. If the acyclic complex were K-flat, take a bounded above free resolution of right modules. K-flatness of makes acyclic, and K-flatness of would make a quasi-isomorphism, a contradiction. This gives a termwise flat complex which is not K-flat. The same example isolates three distinct failures using one acyclic complex. Its unboundedness in both directions is essential to the failures of the bounded criteria.  "
},
{
  "id": "ha-c10-def-semi-free",
  "level": "2",
  "url": "ha-c10.html#ha-c10-def-semi-free",
  "type": "Definition",
  "number": "10.13",
  "title": "Semi-free complexes.",
  "body": " Semi-free complexes Semi-free complex  A semi-free complex of -modules is a complex with an exhaustive filtration by subcomplexes such that the inclusions split as maps of graded modules and each quotient is a direct sum of shifts of with zero differential. Equivalently, a graded basis can be assigned stages so that the differential of each basis vector is a finite combination of vectors from earlier stages.  "
},
{
  "id": "ha-c10-prop-semi-free",
  "level": "2",
  "url": "ha-c10.html#ha-c10-prop-semi-free",
  "type": "Proposition",
  "number": "10.14",
  "title": "",
  "body": " Every complex of modules admits a quasi-isomorphism with semi-free. A semi-free complex is K-projective and K-flat. Consequently every K-projective complex of modules is K-flat.  Start with a free graded complex with one cycle generator for each cycle of , in its degree, and send that generator to the corresponding cycle. This gives surjectivity on cohomology. At a stage , for every cycle whose image is a boundary , attach a generator in degree with and send to . Take all such pairs and repeat. In the union , each cohomology class in the kernel appears at a finite stage and is killed at the next one. Exact filtered colimits prove that is a quasi-isomorphism.  Let have acyclic target. Suppose a null-homotopy has been constructed on earlier-stage generators. For a new generator , the element is a cycle, since the homotopy equation already holds on . Acyclicity allows a choice of with . This extends the homotopy to that stage. The filtration induction proves K-projectivity without a bound on the degrees of the generators.  After tensoring with an acyclic complex, the filtration quotients are sums of shifts of that complex. Degreewise splitting and exact filtered colimits show the tensor product acyclic, proving K-flatness. Finally resolve a K-projective complex by a semi-free . Since both are K-projective, that map is a homotopy equivalence. K-flatness is invariant under homotopy equivalence, so is K-flat.  "
},
{
  "id": "ha-c11",
  "level": "1",
  "url": "ha-c11.html",
  "type": "Chapter",
  "number": "11",
  "title": "Total derived functors and adjunctions",
  "body": " Total derived functors and adjunctions  A total derived functor acts on derived objects and retains connecting morphisms. Its cohomology recovers classical derived functors, but their individual values do not by themselves specify all this data. This chapter fixes the universal-property convention and constructs the functors using resolutions. Main references are , , and .   The universal comparison   Total derived functors Total derived functor Derived natural transformation  Let be a localization and let . A right derived functor in our convention is a functor and a transformation such that, for every , composition with induces a bijection A left derived functor has a transformation and the dual universal property. Use the same definitions on bounded homotopy categories when a bounded domain is specified.   With the usual convention for Kan extensions, the displayed right derived functor is a left Kan extension along . The adjective right refers to the resolution and classical right-derived construction, not to the direction of this Kan extension. Universal-property terminology is not uniform. The direction of removes the ambiguity. A total right derived functor and the family of classical functors are related below but are different kinds of objects.  The universal property compares functors already defined on the localization. It does not assert that itself preserves denominators. If does preserve them, the ordinary localization property gives with ; the comparison is then invertible, and is both a right and a left derived functor. In particular, an exact functor between abelian categories induces its derived functor termwise without any hypothesis about enough injectives or projectives.  For two right derived functors of the same , apply universality in both directions to their comparison maps. The two resulting composites must be identities, again by uniqueness. This explains what the phrase “unique compatible isomorphism” means: compatibility is with the specified map out of , and it determines the isomorphism. A bare isomorphism between objectwise values does not supply this compatibility.   Let be additive, applied termwise to complexes. If has K-injective replacements, then defines a right derived functor of . The comparison is induced by . K-projective replacements dually define . Both functors are exact, and different choices give unique compatible natural isomorphisms.  The K-injective replacement identifies the localized category with . Its inclusion into is right adjoint to localization, by the Hom calculation in . If is given, evaluate it on and identify to obtain the required map . Naturality for proves both the factorization and uniqueness. Exactness follows because K-injectives are closed under cones and shifts, and the termwise additive functor preserves cone triangles. The projective construction is dual.   Enough injectives gives the bounded below construction, and enough projectives gives the bounded above construction. Grothendieck categories give the unbounded right-derived construction; module categories also give the unbounded left-derived construction. An arbitrary choice of termwise injective unbounded resolution is insufficient.   If is left exact and has enough injectives, then for one has , naturally in . In degree zero the comparison identifies with . Dually, for a right exact functor with projective resolutions, .  Use a classical resolution concentrated in nonnegative degrees for the right-derived case. The total construction is its image complex, whose cohomology defines . Left exactness identifies its degree-zero kernel with . The maps agree by the comparison theorem for resolutions. Reversing degrees proves the left-derived assertion.   A transformation between additive functors with the same source category induces by evaluation on the same K-injective replacement; this is independent of choices. For functors with different variance or target categories, the appropriate comparison must first be specified.  The map can also be constructed directly from universality: compose with and factor the result through . Thus deriving transformations respects identity transformations and composition. If a transformation is invertible on a class of replacements computing both derived functors, its derived transformation is invertible on every object represented by those replacements.    Adapted classes and bounded computation  K-injective replacements give one general construction. A functor may admit a simpler computing class, and enough injectives need not be part of its existence theorem. The following criterion is a useful categorical version of the acyclic-resolution method.   Let be additive between abelian categories, and let be a full additive subcategory such that:  Every object of embeds in an object of .  If is exact with , then and is exact.  Then every bounded below complex has a quasi-isomorphism to a bounded below complex with terms in . The functor exists and is computed by applying to such a replacement. The dual criterion, using epimorphisms and kernels, constructs on .   This is . The second condition explains its mechanism. In an acyclic bounded below complex of objects of , start in its first nonzero degree. Successive short exact sequences of cycles show inductively that all cycles belong to , and that preserves these sequences. Hence its image complex is acyclic. The first condition constructs replacements, successively embedding objects and using pushouts to extend the differentials. Localization of the computing subcategory then gives the stated derived functor. This proof uses the lower bound to start the induction. An adapted class is relative to . Its members need not be injective objects, and the criterion does not claim the existence of K-injective replacements for all functors or all unbounded complexes.  Injective objects satisfy the criterion when there are enough of them: a monomorphism between injectives splits, so its cokernel is injective and every additive functor preserves the resulting sequence. For left exact with existing classical derived functors, the class of -acyclic objects satisfies it by . Thus these two familiar methods fit the same criterion.   Suppose that is left exact, has enough injectives, and is a bounded below complex whose terms are -acyclic. Then the comparison is an isomorphism. The bounded above left-derived assertion holds under the dual hypotheses.   This is Leray's acyclicity lemma; see Stacks, Tag 015E . The adapted-class criterion gives its bounded below form. Its assertion concerns an arbitrary bounded below complex, not only a resolution of an object in degree zero. This distinction is what permits a composite derived functor to be computed on the image of a resolution.  Boundedness of the input and boundedness of the output are separate issues. A left exact functor has , because bounded below injective replacements can start in degree . Even for an object in degree zero its higher derived values may be nonzero in arbitrarily high degrees. A uniform bound for supplies the missing upper control on bounded inputs; the truncation argument is given in .    Composition and acyclicity   Let and be left exact between abelian categories with enough injectives in and . If takes injectives to -acyclic objects, there is a natural isomorphism on bounded below derived categories More generally, for unbounded constructions it suffices that the chosen compute and that the same replacements compute .  Choose an injective resolution . In the bounded below case the complex consists of -acyclic objects, so the acyclic-resolution theorem for bounded below complexes computes by applying termwise. Both sides are consequently represented by . Comparison with a replacement in proves naturality. The unbounded assertion states the exact replacement criterion used by the same argument; termwise acyclicity alone is not substituted for that criterion.   Without the acyclicity hypothesis there is still a canonical composition comparison whenever the indicated derived constructions exist, but it need not be invertible. To specify it, write and similarly for . Form the transformation Universality gives the unique compatible map The proposition supplies a sufficient condition for this particular comparison to be invertible. For left derived functors the direction is .  These comparisons are compatible with a third functor: the two composites from to agree. Both are obtained from the same three underived comparison maps, and the derived universal property forces equality. Identity comparisons behave in the same way. This associativity is needed before omitting parentheses in a formula for iterated derived operations. A composition isomorphism is therefore a specified comparison proved invertible, rather than an arbitrary choice of an isomorphism between two resulting functors.  For unbounded inputs, a convenient sufficient condition is that take the chosen K-injective complexes to K-injective complexes in . More generally they need only lie in a computing class for . Checking that each term is -acyclic proves the bounded below criterion, but does not prove this unbounded one.   Under the bounded below hypotheses of , for there is a natural first-quadrant spectral sequence The abutment has a finite filtration in each total degree.   Apply to the truncation tower of . Its successive cohomology objects are . The exact couples of this tower give the displayed second page. The composition proposition identifies the abutment, and the first-quadrant bounds make the filtration finite in each degree. A complex-level construction and the comparison with the double-complex spectral sequence are given in and .  The five-term sequence in low degree is If is -acyclic, only row zero remains and the edge map gives . If instead every is -acyclic, only column zero remains and . These are different collapse conditions. Neither follows merely from left exactness of the two functors.    Deriving an adjunction   Let be an additive adjunction with left adjoint. Assume every complex of has a K-projective replacement and every complex of has a K-injective replacement. Then there is a natural adjunction Its unit and counit satisfy the triangle identities.  Choose and . The ordinary adjunction gives an adjunction on homotopy categories: it respects chain maps and chain homotopies. Hence The first equality uses the target replacement and the last uses the source replacement. Neither requires to be K-projective or to be K-injective. These natural bijections define the derived adjunction, and their unit and counit satisfy the triangle identities by the general adjunction theorem.   The derived unit can be displayed as a roof. Resolve by and choose a K-injective replacement . The unit is represented by where the second arrow is adjoint to the replacement map. For the counit at , choose and a K-projective replacement . It is represented by the composite These descriptions use the original unit and counit together with the replacement maps. The triangle identities hold because the Hom bijections defining the derived adjunction are inverse; they are not additional equations to be imposed on independent choices of resolutions.  As for every adjunction, is fully faithful exactly when its unit is invertible, and is fully faithful exactly when its counit is invertible. These are derived comparison conditions. Full faithfulness of the original functor on abelian objects does not, by itself, verify them on all complexes.   In an additive adjunction , if is exact then preserves K-injective complexes. If is exact then preserves K-projective complexes. An adjoint of an exact functor between triangulated categories has a canonical exact structure.  For acyclic and K-injective , the adjunction gives when is exact. The other assertion is dual. For a triangulated adjoint, Yoneda first transports the translation isomorphism. To prove preservation of triangles, compare the image of a triangle with a distinguished triangle on its first map, use the adjunction to construct the comparison on the third object, and apply the long exact Hom sequences. See for this argument.    Let be an additive adjunction between abelian categories.  If is exact and has K-injective replacements, then is left adjoint to . No K-projective replacement hypothesis on is needed.  If is exact and has K-projective replacements, then is left adjoint to the induced . No K-injective replacement hypothesis on is needed.    For the first assertion choose . Exactness of makes K-injective by the preceding proposition. Hence The dual calculation proves the second assertion.   This form is useful for abstract operations on Grothendieck categories: an exact left adjoint and K-injectives suffice to derive its right adjoint. A simultaneous supply of projective resolutions is unnecessary. Subsequent projection and base-change formulas still require their own comparison maps and hypotheses.  For a ring map , restriction of scalars is exact and is right adjoint to . Its derived adjunction is . Restriction also has a right adjoint , which gives with its specified -module structure. These are useful algebraic adjunctions; the notation alone does not identify this chain of three functors with an indexed six-operation system.   "
},
{
  "id": "ha-c11-def-derived",
  "level": "2",
  "url": "ha-c11.html#ha-c11-def-derived",
  "type": "Definition",
  "number": "11.1",
  "title": "Total derived functors.",
  "body": " Total derived functors Total derived functor Derived natural transformation  Let be a localization and let . A right derived functor in our convention is a functor and a transformation such that, for every , composition with induces a bijection A left derived functor has a transformation and the dual universal property. Use the same definitions on bounded homotopy categories when a bounded domain is specified.  "
},
{
  "id": "ha-c11-prop-replacement",
  "level": "2",
  "url": "ha-c11.html#ha-c11-prop-replacement",
  "type": "Proposition",
  "number": "11.2",
  "title": "",
  "body": " Let be additive, applied termwise to complexes. If has K-injective replacements, then defines a right derived functor of . The comparison is induced by . K-projective replacements dually define . Both functors are exact, and different choices give unique compatible natural isomorphisms.  The K-injective replacement identifies the localized category with . Its inclusion into is right adjoint to localization, by the Hom calculation in . If is given, evaluate it on and identify to obtain the required map . Naturality for proves both the factorization and uniqueness. Exactness follows because K-injectives are closed under cones and shifts, and the termwise additive functor preserves cone triangles. The projective construction is dual.  "
},
{
  "id": "ha-c11-prop-classical",
  "level": "2",
  "url": "ha-c11.html#ha-c11-prop-classical",
  "type": "Proposition",
  "number": "11.3",
  "title": "",
  "body": " If is left exact and has enough injectives, then for one has , naturally in . In degree zero the comparison identifies with . Dually, for a right exact functor with projective resolutions, .  Use a classical resolution concentrated in nonnegative degrees for the right-derived case. The total construction is its image complex, whose cohomology defines . Left exactness identifies its degree-zero kernel with . The maps agree by the comparison theorem for resolutions. Reversing degrees proves the left-derived assertion.  "
},
{
  "id": "ha-c11-adapted-criterion",
  "level": "2",
  "url": "ha-c11.html#ha-c11-adapted-criterion",
  "type": "Theorem",
  "number": "11.4",
  "title": "",
  "body": " Let be additive between abelian categories, and let be a full additive subcategory such that:  Every object of embeds in an object of .  If is exact with , then and is exact.  Then every bounded below complex has a quasi-isomorphism to a bounded below complex with terms in . The functor exists and is computed by applying to such a replacement. The dual criterion, using epimorphisms and kernels, constructs on .  "
},
{
  "id": "ha-c11-leray",
  "level": "2",
  "url": "ha-c11.html#ha-c11-leray",
  "type": "Proposition",
  "number": "11.5",
  "title": "",
  "body": " Suppose that is left exact, has enough injectives, and is a bounded below complex whose terms are -acyclic. Then the comparison is an isomorphism. The bounded above left-derived assertion holds under the dual hypotheses.  "
},
{
  "id": "ha-c11-prop-composition",
  "level": "2",
  "url": "ha-c11.html#ha-c11-prop-composition",
  "type": "Proposition",
  "number": "11.6",
  "title": "",
  "body": " Let and be left exact between abelian categories with enough injectives in and . If takes injectives to -acyclic objects, there is a natural isomorphism on bounded below derived categories More generally, for unbounded constructions it suffices that the chosen compute and that the same replacements compute .  Choose an injective resolution . In the bounded below case the complex consists of -acyclic objects, so the acyclic-resolution theorem for bounded below complexes computes by applying termwise. Both sides are consequently represented by . Comparison with a replacement in proves naturality. The unbounded assertion states the exact replacement criterion used by the same argument; termwise acyclicity alone is not substituted for that criterion.  "
},
{
  "id": "ha-c11-thm-grothendieck-ss",
  "level": "2",
  "url": "ha-c11.html#ha-c11-thm-grothendieck-ss",
  "type": "Theorem",
  "number": "11.7",
  "title": "",
  "body": " Under the bounded below hypotheses of , for there is a natural first-quadrant spectral sequence The abutment has a finite filtration in each total degree.  "
},
{
  "id": "ha-c11-thm-adjunction",
  "level": "2",
  "url": "ha-c11.html#ha-c11-thm-adjunction",
  "type": "Theorem",
  "number": "11.8",
  "title": "",
  "body": " Let be an additive adjunction with left adjoint. Assume every complex of has a K-projective replacement and every complex of has a K-injective replacement. Then there is a natural adjunction Its unit and counit satisfy the triangle identities.  Choose and . The ordinary adjunction gives an adjunction on homotopy categories: it respects chain maps and chain homotopies. Hence The first equality uses the target replacement and the last uses the source replacement. Neither requires to be K-projective or to be K-injective. These natural bijections define the derived adjunction, and their unit and counit satisfy the triangle identities by the general adjunction theorem.  "
},
{
  "id": "ha-c11-prop-preservation",
  "level": "2",
  "url": "ha-c11.html#ha-c11-prop-preservation",
  "type": "Proposition",
  "number": "11.9",
  "title": "",
  "body": " In an additive adjunction , if is exact then preserves K-injective complexes. If is exact then preserves K-projective complexes. An adjoint of an exact functor between triangulated categories has a canonical exact structure.  For acyclic and K-injective , the adjunction gives when is exact. The other assertion is dual. For a triangulated adjoint, Yoneda first transports the translation isomorphism. To prove preservation of triangles, compare the image of a triangle with a distinguished triangle on its first map, use the adjunction to construct the comparison on the third object, and apply the long exact Hom sequences. See for this argument.  "
},
{
  "id": "ha-c11-exact-adjoint-case",
  "level": "2",
  "url": "ha-c11.html#ha-c11-exact-adjoint-case",
  "type": "Proposition",
  "number": "11.10",
  "title": "",
  "body": " Let be an additive adjunction between abelian categories.  If is exact and has K-injective replacements, then is left adjoint to . No K-projective replacement hypothesis on is needed.  If is exact and has K-projective replacements, then is left adjoint to the induced . No K-injective replacement hypothesis on is needed.    For the first assertion choose . Exactness of makes K-injective by the preceding proposition. Hence The dual calculation proves the second assertion.  "
},
{
  "id": "ha-c12",
  "level": "1",
  "url": "ha-c12.html",
  "type": "Chapter",
  "number": "12",
  "title": "Derived tensor and Hom",
  "body": " Derived tensor and Hom  We derive Hom and tensor while keeping three constructions distinct: a complex of abelian groups recording derived morphisms, an internal Hom object of a derived category, and a derived tensor product. The first is available in general abelian categories with suitable resolutions. The other two need monoidal structure and additional existence hypotheses. Ring modules provide explicit models for these constructions; the categorical statements are the main concern. Main references are , , and . The universal derived-functor constructions of and the closed structures of will be used separately.   Derived morphism complexes in an abelian category   Derived Hom with values in complexes of abelian groups External derived Hom  Let be an abelian category in which every complex admits a K-injective replacement. For , choose K-injective and put This is the external derived Hom. The adjective specifies its target and will be omitted when there is no risk of confusing it with an internal Hom.    The construction gives a bifunctor , independent of representatives and K-injective replacements up to the natural comparison isomorphisms. It is exact in either variable, with the first variable contravariant. There are natural isomorphisms In particular, on objects of this recovers classical Ext whenever an injective resolution computes it.  By K-injectivity, sends a quasi-isomorphism to a quasi-isomorphism. A morphism between two K-injective complexes in the derived category is represented uniquely up to homotopy by a complex morphism. In particular, the comparison between two replacements of is a homotopy equivalence, and applying preserves that equivalence. These facts define the bifunctor on localized categories and give its independence. The degree- Hom identification from and the computation of morphisms into a K-injective complex give the displayed formula. Hom sends cone sequences to cone sequences, with the translation sign in the contravariant argument; this proves exactness.   No tensor product, generator, or module embedding is required in this construction. The products in the Hom complex are products of abelian groups. In a Grothendieck category the necessary K-injectives exist by . With only enough injectives the same formula is available for bounded below , using a bounded below complex of injectives, while may be unbounded. Without such a resolution theorem the derived morphism groups can still make sense, but the present formula is not being asserted.  The identity above describes the graded cohomology groups. A list of those groups does not itself construct the derived Hom bifunctor, its comparisons, or its connecting maps; these are supplied by the resolution construction. Nor does the formula produce an object of : that would require an internal construction with a different target.    Deriving a monoidal structure  Let be an abelian closed symmetric monoidal category with countable coproducts. Its tensor product is additive in each variable. Form the sum-total tensor of complexes with the signs of . The unit is , and the symmetry on homogeneous components includes the Koszul sign. Existence of this tensor on complexes does not yet give a tensor on .   K-flat replacements for an abstract tensor product K-flat complex  A complex is K-flat for this tensor product if is acyclic for every acyclic complex . Symmetry makes the analogous condition in the other argument equivalent. A K-flat replacement is a quasi-isomorphism with K-flat.    Assume that every complex in has a K-flat replacement. Then for K-flat replacements and defines a symmetric monoidal structure on , exact in each variable. Its unit is . Replacing either one of the two arguments by a K-flat complex suffices for a computation. No closed structure on the derived category is included in this assertion.  K-flatness is equivalent to preserving quasi-isomorphisms under tensoring, by applying the tensor functor to a cone. The K-flat complexes are closed under shifts and cones, and is K-flat when are: apply , then , to an acyclic complex. The unit complex is K-flat because tensoring with it is the identity. The full homotopy category of K-flat complexes therefore localizes to . To see the morphism assertion, replace the source of a roof by a K-flat complex; the same replacement of common refinements proves faithfulness. The tensor functor sends a quasi-isomorphism between K-flat complexes to a quasi-isomorphism after tensoring with another K-flat complex, so descends in both variables. Associativity, unit, and symmetry descend from complexes, including their coherence equations. Comparing with and with proves the one-variable formulas. Tensor preserves cone sequences at the complex level, proving exactness.   A theorem supplying K-flat replacements has to be checked in the category under consideration. In particular, the Grothendieck property supplies K-injectives but does not by itself supply K-flat replacements for an arbitrarily specified tensor. A bounded above complex of flat objects is K-flat when the tensor and coproduct exactness hypotheses used in the usual totalization proof hold; the unbounded statement needs further arguments. These requirements concern the construction of the tensor, independently of any desired base-change or projection formula.   Suppose the preceding derived tensor has been constructed, that has small coproducts and is compactly generated, and that preserves coproducts for every . Then each has a right adjoint, denoted . These adjoints give a closed symmetric monoidal structure, with natural isomorphisms   For fixed , the functor is cohomological and takes coproducts to products. Brown representability in represents it; uniqueness makes the representing objects functorial in and gives the right adjunction. Testing the second formula against an arbitrary object and applying the adjunction twice proves it by Yoneda. The right adjoint is exact with its specified translation comparison by .   This is one sufficient existence theorem for internal derived Hom. Other settings construct it directly from compatible tensor and internal-Hom resolutions without compact generation. These approaches must prove that the internal Hom complexes used in the formula send the required quasi-isomorphisms to quasi-isomorphisms. Ordinary K-injectivity, defined using complexes of morphism groups, should not silently be substituted for such an internal condition. The external object lies in ; the internal object lies in . An identification between their presentations requires its own adjunction or enrichment argument. In module categories the formulas below make this relation explicit.  Once closedness is established, the evaluation map, the tensor–Hom adjunction, and the exponential law are formal categorical constructions. Whether the canonical map is invertible is a further question: it is the dualizability criterion of . Perfect complexes over a ring give one finite-resolution instance; their ring-theoretic description is not part of the abstract definition of a dualizable object.    Module models and replacement formulas   Derived tensor and derived Hom Derived tensor product Derived Hom   For a complex of right -modules and a complex of left -modules, choose K-flat replacements and . Their derived tensor product is the object of . A specified central base ring can be retained in the target.  For complexes of left -modules choose a K-projective replacement and a K-injective replacement . Define by the complex , viewed in .     These constructions are independent of replacements up to their natural derived isomorphisms. A K-flat replacement of either tensor factor suffices. Derived Hom can be computed by or by . In particular, For modules in degree zero, .  Tensor a quasi-isomorphism with a K-flat factor and apply the defining acyclicity criterion to its cone. This compares the two-replacement formula with each one-replacement formula. For Hom, the K-projective condition makes a quasi-isomorphism, while the K-injective condition does the same for . Degree-zero homotopy classes and their translations give the displayed equality. The Tor assertion uses a bounded above free resolution and the grading convention of .   The objects and therefore have different types: the former is a derived complex, the latter an abelian group. The latter is the degree-zero cohomology of the former. When is commutative, the Hom complex has its natural -action and represents an internal Hom in . For noncommutative , two left -modules do not naturally give an -module . Bimodule structures or a central coefficient ring can supply additional actions; they must be specified.    The closed structure over a commutative ring   For a commutative ring , the derived tensor product, with unit , and the internal derived Hom make a closed symmetric monoidal category. The symmetry is induced by the Koszul sign. There are natural isomorphisms Tensor is exact in each variable. Derived Hom is exact covariantly in its second variable and contravariantly in its first, with the triangulated sign conventions.  Use K-flat resolutions for associativity and symmetry; the tensor of K-flat complexes is K-flat. The coherence maps are induced by the corresponding maps on complexes, where their required equations hold. To prove the adjunction choose K-projective resolutions and , and a K-injective replacement . The ordinary tensor–Hom adjunction is an isomorphism of complexes K-projective complexes of modules are K-flat; moreover is K-injective because its Hom from an acyclic is , which is acyclic. Taking degree-zero cohomology proves the derived adjunction. The internal formula follows by Yoneda, or by the same calculation with a further test complex. Cone formulas give exactness, including the sign for the contravariant variable.   For an arbitrary closed monoidal abelian category, the same conclusion needs a specified compatible supply of tensor-acyclic replacements and control of internal Hom. Sufficient hypotheses may be checked by a resolving subcategory and the tensor–Hom calculation just used. We do not infer these hypotheses from the Grothendieck property alone.   Let . The resolution of , placed in degrees , gives Ordinary tensor detects only degree zero. Degree retains . Applying Hom to the same resolution gives with its nonzero cohomology in degree .     Change of rings and tensor comparisons   Let be a map of commutative rings. Extension of scalars is left adjoint to restriction. It is strong symmetric monoidal: for , For there is a projection isomorphism   If is K-flat over , the complex is K-flat over : tensoring it with an acyclic right -complex is the same as tensoring that complex, restricted to , with . Compute the formulas using such replacements and ordinary associativity of tensor products. The adjunction is the derived extension–restriction adjunction of .   For bimodule calculations, keep the outer module actions throughout a replacement. Over a field , semi-free resolutions of bimodules over -algebras give the familiar associative derived tensor calculus. Over a general base ring, a projective resolution over an ordinary tensor-product algebra need not remain flat after restricting one action. A statement about bimodule associativity must use replacements suitable for the intermediate ring actions, or a derived algebra construction that retains them. This is a source of hidden flatness hypotheses in formulas written only as . The parenthesized functors and their actions should be established before omitting the parentheses.    Finite resolutions and evaluation   Perfect complexes Perfect complex  A complex over a ring is perfect if it is isomorphic in the derived category to a bounded complex of finitely generated projective modules.    Let be commutative and let be perfect. Write . Evaluation induces a natural isomorphism for every , The bidual map is an isomorphism.  Represent by a bounded complex of finitely generated projectives. For a finitely generated projective module the ordinary evaluation map is an isomorphism: it is so for finite free modules and passes to direct summands. Apply this fact termwise. Boundedness makes each diagonal finite, so the finite direct sums in tensor and products in Hom agree. The resulting map of complexes has the Koszul signs required by the Hom differential. Double duality follows by applying the finite projective bidual isomorphism in each degree.   The boundedness and finite generation in this proof have distinct roles. Infinite free modules generally fail the evaluation formula because Hom introduces products. A merely bounded complex need not be perfect. In this formula becomes the abstract criterion for dualizability, while characterizes the same perfect complexes by compactness in .   "
},
{
  "id": "ha-c12-external-hom",
  "level": "2",
  "url": "ha-c12.html#ha-c12-external-hom",
  "type": "Definition",
  "number": "12.1",
  "title": "Derived Hom with values in complexes of abelian groups.",
  "body": " Derived Hom with values in complexes of abelian groups External derived Hom  Let be an abelian category in which every complex admits a K-injective replacement. For , choose K-injective and put This is the external derived Hom. The adjective specifies its target and will be omitted when there is no risk of confusing it with an internal Hom.  "
},
{
  "id": "ha-c12-external-hom-properties",
  "level": "2",
  "url": "ha-c12.html#ha-c12-external-hom-properties",
  "type": "Proposition",
  "number": "12.2",
  "title": "",
  "body": " The construction gives a bifunctor , independent of representatives and K-injective replacements up to the natural comparison isomorphisms. It is exact in either variable, with the first variable contravariant. There are natural isomorphisms In particular, on objects of this recovers classical Ext whenever an injective resolution computes it.  By K-injectivity, sends a quasi-isomorphism to a quasi-isomorphism. A morphism between two K-injective complexes in the derived category is represented uniquely up to homotopy by a complex morphism. In particular, the comparison between two replacements of is a homotopy equivalence, and applying preserves that equivalence. These facts define the bifunctor on localized categories and give its independence. The degree- Hom identification from and the computation of morphisms into a K-injective complex give the displayed formula. Hom sends cone sequences to cone sequences, with the translation sign in the contravariant argument; this proves exactness.  "
},
{
  "id": "ha-c12-monoidal-k-flat",
  "level": "2",
  "url": "ha-c12.html#ha-c12-monoidal-k-flat",
  "type": "Definition",
  "number": "12.3",
  "title": "K-flat replacements for an abstract tensor product.",
  "body": " K-flat replacements for an abstract tensor product K-flat complex  A complex is K-flat for this tensor product if is acyclic for every acyclic complex . Symmetry makes the analogous condition in the other argument equivalent. A K-flat replacement is a quasi-isomorphism with K-flat.  "
},
{
  "id": "ha-c12-abstract-derived-monoidal",
  "level": "2",
  "url": "ha-c12.html#ha-c12-abstract-derived-monoidal",
  "type": "Proposition",
  "number": "12.4",
  "title": "",
  "body": " Assume that every complex in has a K-flat replacement. Then for K-flat replacements and defines a symmetric monoidal structure on , exact in each variable. Its unit is . Replacing either one of the two arguments by a K-flat complex suffices for a computation. No closed structure on the derived category is included in this assertion.  K-flatness is equivalent to preserving quasi-isomorphisms under tensoring, by applying the tensor functor to a cone. The K-flat complexes are closed under shifts and cones, and is K-flat when are: apply , then , to an acyclic complex. The unit complex is K-flat because tensoring with it is the identity. The full homotopy category of K-flat complexes therefore localizes to . To see the morphism assertion, replace the source of a roof by a K-flat complex; the same replacement of common refinements proves faithfulness. The tensor functor sends a quasi-isomorphism between K-flat complexes to a quasi-isomorphism after tensoring with another K-flat complex, so descends in both variables. Associativity, unit, and symmetry descend from complexes, including their coherence equations. Comparing with and with proves the one-variable formulas. Tensor preserves cone sequences at the complex level, proving exactness.  "
},
{
  "id": "ha-c12-derived-closed-brown",
  "level": "2",
  "url": "ha-c12.html#ha-c12-derived-closed-brown",
  "type": "Proposition",
  "number": "12.5",
  "title": "",
  "body": " Suppose the preceding derived tensor has been constructed, that has small coproducts and is compactly generated, and that preserves coproducts for every . Then each has a right adjoint, denoted . These adjoints give a closed symmetric monoidal structure, with natural isomorphisms   For fixed , the functor is cohomological and takes coproducts to products. Brown representability in represents it; uniqueness makes the representing objects functorial in and gives the right adjunction. Testing the second formula against an arbitrary object and applying the adjunction twice proves it by Yoneda. The right adjoint is exact with its specified translation comparison by .  "
},
{
  "id": "ha-c12-def-tensor-hom",
  "level": "2",
  "url": "ha-c12.html#ha-c12-def-tensor-hom",
  "type": "Definition",
  "number": "12.6",
  "title": "Derived tensor and derived Hom.",
  "body": " Derived tensor and derived Hom Derived tensor product Derived Hom   For a complex of right -modules and a complex of left -modules, choose K-flat replacements and . Their derived tensor product is the object of . A specified central base ring can be retained in the target.  For complexes of left -modules choose a K-projective replacement and a K-injective replacement . Define by the complex , viewed in .   "
},
{
  "id": "ha-c12-prop-one-variable",
  "level": "2",
  "url": "ha-c12.html#ha-c12-prop-one-variable",
  "type": "Proposition",
  "number": "12.7",
  "title": "",
  "body": " These constructions are independent of replacements up to their natural derived isomorphisms. A K-flat replacement of either tensor factor suffices. Derived Hom can be computed by or by . In particular, For modules in degree zero, .  Tensor a quasi-isomorphism with a K-flat factor and apply the defining acyclicity criterion to its cone. This compares the two-replacement formula with each one-replacement formula. For Hom, the K-projective condition makes a quasi-isomorphism, while the K-injective condition does the same for . Degree-zero homotopy classes and their translations give the displayed equality. The Tor assertion uses a bounded above free resolution and the grading convention of .  "
},
{
  "id": "ha-c12-thm-closed",
  "level": "2",
  "url": "ha-c12.html#ha-c12-thm-closed",
  "type": "Theorem",
  "number": "12.8",
  "title": "",
  "body": " For a commutative ring , the derived tensor product, with unit , and the internal derived Hom make a closed symmetric monoidal category. The symmetry is induced by the Koszul sign. There are natural isomorphisms Tensor is exact in each variable. Derived Hom is exact covariantly in its second variable and contravariantly in its first, with the triangulated sign conventions.  Use K-flat resolutions for associativity and symmetry; the tensor of K-flat complexes is K-flat. The coherence maps are induced by the corresponding maps on complexes, where their required equations hold. To prove the adjunction choose K-projective resolutions and , and a K-injective replacement . The ordinary tensor–Hom adjunction is an isomorphism of complexes K-projective complexes of modules are K-flat; moreover is K-injective because its Hom from an acyclic is , which is acyclic. Taking degree-zero cohomology proves the derived adjunction. The internal formula follows by Yoneda, or by the same calculation with a further test complex. Cone formulas give exactness, including the sign for the contravariant variable.  "
},
{
  "id": "ha-c12-example-tor",
  "level": "2",
  "url": "ha-c12.html#ha-c12-example-tor",
  "type": "Example",
  "number": "12.9",
  "title": "",
  "body": " Let . The resolution of , placed in degrees , gives Ordinary tensor detects only degree zero. Degree retains . Applying Hom to the same resolution gives with its nonzero cohomology in degree .  "
},
{
  "id": "ha-c12-prop-base",
  "level": "2",
  "url": "ha-c12.html#ha-c12-prop-base",
  "type": "Proposition",
  "number": "12.10",
  "title": "",
  "body": " Let be a map of commutative rings. Extension of scalars is left adjoint to restriction. It is strong symmetric monoidal: for , For there is a projection isomorphism   If is K-flat over , the complex is K-flat over : tensoring it with an acyclic right -complex is the same as tensoring that complex, restricted to , with . Compute the formulas using such replacements and ordinary associativity of tensor products. The adjunction is the derived extension–restriction adjunction of .  "
},
{
  "id": "ha-c12-def-perfect",
  "level": "2",
  "url": "ha-c12.html#ha-c12-def-perfect",
  "type": "Definition",
  "number": "12.11",
  "title": "Perfect complexes.",
  "body": " Perfect complexes Perfect complex  A complex over a ring is perfect if it is isomorphic in the derived category to a bounded complex of finitely generated projective modules.  "
},
{
  "id": "ha-c12-prop-evaluation",
  "level": "2",
  "url": "ha-c12.html#ha-c12-prop-evaluation",
  "type": "Proposition",
  "number": "12.12",
  "title": "",
  "body": " Let be commutative and let be perfect. Write . Evaluation induces a natural isomorphism for every , The bidual map is an isomorphism.  Represent by a bounded complex of finitely generated projectives. For a finitely generated projective module the ordinary evaluation map is an isomorphism: it is so for finite free modules and passes to direct summands. Apply this fact termwise. Boundedness makes each diagonal finite, so the finite direct sums in tensor and products in Hom agree. The resulting map of complexes has the Koszul signs required by the Hom differential. Double duality follows by applying the finite projective bidual isomorphism in each degree.  "
},
{
  "id": "ha-c13",
  "level": "1",
  "url": "ha-c13.html",
  "type": "Chapter",
  "number": "13",
  "title": "t-structures and hearts",
  "body": " t-structures and hearts   A triangulated category does not specify which objects should be regarded as concentrated in degree zero. A t-structure makes that choice and provides functorial truncations and cohomology objects. Its heart is abelian, but recovering the whole triangulated category from that heart is a further question.  We use the cohomological shift convention of . The main reference is ; compare the treatments of truncation and derived categories in and .    Truncation as a universal construction   t-structures and boundedness  t-structure Heart Bounded t-structure Nondegenerate t-structure   A t-structure on a triangulated category is a pair of strictly full subcategories such that:   and .  for and , where .  Every occurs in a distinguished triangle with and .   Set , , and . The heart is . The t-structure is bounded if every object belongs to some . It is nondegenerate if both and contain only zero objects.    With this convention, shifting by lowers cohomological degrees. Thus . The two halves of a t-structure need not be triangulated subcategories: each is closed under just one of the two shift directions.    The inclusion has a right adjoint , and the inclusion has a left adjoint . The resulting triangle   is functorial in . Both halves of the t-structure are extension-closed and closed under existing retracts.    Choose a triangle with the required bounds. For , the two groups and vanish. The exact Hom sequence therefore gives . This represents the desired right adjoint, independently of the chosen triangle. The left adjoint follows by the dual argument. These universal properties force a unique morphism between the truncation triangles over a morphism of their middle objects; the triangulated category axiom supplies existence.  The orthogonality characterization , and its dual, follows by applying the same triangle to an object orthogonal to the indicated half. These characterizations prove extension-closure and closure under retracts.    Functorial truncation does not provide a functorial cone for arbitrary morphisms. The bounds and orthogonality make the particular truncation triangle unique. This is the additional reason it is functorial. Brutal truncation of a complex generally fails to descend to its derived category: it need not preserve quasi-isomorphisms. The functors here are the smart truncations, characterized by their universal properties.   There are natural isomorphisms Shifting truncation gives , and similarly for lower truncation. The common mixed truncation has its values in . If , both mixed truncations are zero.  Applying the appropriate Hom adjunction twice gives the first two formulas. For mixed truncation, truncate the triangle for one of the bounds at the other bound. Orthogonality identifies the remaining piece with the object having both bounds, and the universal maps identify the two orders. The same universal properties make the isomorphisms natural and compatible with repeated truncation. The shift formula follows by shifting the defining triangle. An object in for has zero identity by orthogonality.   In particular, the subcategories determine the truncation functors, their units and counits, and their comparison isomorphisms. Writing a truncation as an explicit complex is one model for these data. Equality of the resulting objects in a selected model is stronger than the natural isomorphism specified here. A common alternative indexes a t-structure homologically, with the shift raising the displayed degree. The inequalities, shift formulas, and the names left and right t-exact must all be translated together.    The abelian heart and its extensions    The heart is an abelian category. There is a cohomological functor , given by . Set . A distinguished triangle gives a natural long exact sequence of these cohomology objects.  If is a map in the heart and is its cone, then , and   A sequence in the heart is exact if and only if its two maps extend to a distinguished triangle .    The proof, including the equality of image and coimage and the cohomological property, is given in . The kernel construction can be seen directly. Truncate the cone triangle at its two possible cohomological degrees. Orthogonality makes the map universal among maps in the heart killed by . The dual argument constructs the cokernel. The octahedral axiom compares these two constructions and proves that the resulting image and coimage agree. Thus the abelian structure is induced by triangles; it is not an abelian structure assumed in advance.  More explicitly, rotate the cone triangle to . For in the heart, . The Hom sequence therefore identifies maps killed by with maps . Since , its degree-zero truncation is , and the truncation adjunction identifies this last Hom set with . This proves the kernel universal property. The dual Hom calculation gives the cokernel. The actual maps into and out of therefore come from the cone triangle, not just from knowing the isomorphism classes of its cohomology.   For every and integer , there are functorial distinguished triangles Thus an object of is obtained from the objects , for , by finitely many such triangles.  Apply the truncation triangle at to . The truncation calculus identifies the first term with and the third with . The second triangle follows dually. In a bounded interval, one end truncation is zero and the other is , which gives the finite construction.   The connecting morphisms in these triangles record how adjacent cohomological pieces are attached. A list of cohomology objects omits those morphisms. For the standard t-structure over a field all such attachments split after choosing complements; a general t-structure has no splitting assertion of this kind.    For , there is a natural isomorphism   where the left side denotes Yoneda extensions.    An extension gives the connecting map of its distinguished triangle. Conversely, complete a morphism to a triangle . Extension-closure places in the heart, and its cohomology sequence is a short exact sequence with ends . The axiom on morphisms of triangles identifies equivalent extensions. Pullback and pushout of extensions correspond to composition at the two ends of the connecting map. This also identifies Baer addition with addition of morphisms.    The higher-degree comparison requires care. Yoneda products give maps from higher extensions in the heart to shifted morphisms in , but the heart theorem alone does not assert their invertibility. Nor does it construct an equivalence . A realization theorem needs additional hypotheses and a specified construction.   Suppose that the t-structure on is bounded, that is locally small at the chosen scale, and that an exact functor has been given whose restriction to the heart is its inclusion, with the specified natural identification. If induced by is an isomorphism for every and , then is an equivalence. Ext here may be defined by Yoneda extensions.  For negative both sides of the corresponding shifted Hom comparison vanish by orthogonality. The assumed comparison therefore gives full faithfulness between all shifts of heart objects. Induct on the finite truncation lengths of the two arguments, applying their truncation triangles and the long exact Hom sequences. The five lemma gives full faithfulness on all bounded objects. The essential image contains the heart and, by full faithfulness and exactness, is closed under cones of maps between its objects. Every object of has the finite construction in , so the image is all of .   This is a criterion for a given realization functor, not its construction. It separates two tasks: producing the exact functor with the required compatibility, and proving the higher extension comparisons. Degree one is automatic by ; higher degrees are the substantive test. Boundedness makes the proof finite and is not a replacement for those comparisons.    Standard, shifted, and degenerate examples   For an abelian category whose derived category has the required morphism sets, define and by vanishing of ordinary cohomology above and below zero. Smart truncation gives the required triangle. The heart is equivalent to via complexes concentrated in degree zero. This t-structure is nondegenerate; its restriction to is bounded.  For any integer , the shifted pair is another t-structure. Its heart is . The abstract triangulated category does not select the original heart from all these choices.    The pairs and are t-structures with zero heart. Unless , they are degenerate and unbounded. In particular, cohomology objects for an arbitrary t-structure need not detect zero objects. If the t-structure is nondegenerate, the truncation triangles show that an object with all cohomology objects zero is zero.   For a bounded object, successive truncation triangles express it as a finite sequence of extensions of . In a bounded t-structure the heart therefore generates as a triangulated category. This generation statement gives no universal property identifying the category with a derived category of its heart: the morphisms and their higher extension comparisons still have to be checked.    Detection and reconstruction  Nondegeneracy detects whether an object is zero. Boundedness ensures that each object is assembled from finitely many cohomology objects. Reconstruction of an unbounded object from an infinite truncation tower is a third question.   For a nondegenerate t-structure, a map is an isomorphism if and only if every takes it to an isomorphism.  The cone of such a map has all cohomology zero. For an object with this property, consecutive truncations are isomorphic by . Fixing , the object then lies in for every ; nondegeneracy makes it zero. Thus for every , and nondegeneracy again gives .   For reconstruction, the towers in our cohomological convention are The first asks for a homotopy-colimit description of ; the second asks for a homotopy-limit description. A homotopy limit of an inverse sequence is specified by a triangle where uses the transition maps. The homotopy-colimit triangle uses direct sums and has the opposite orientation, as in . These constructions require the indicated products or coproducts. For derived categories one can choose models of the truncation towers and form the comparison maps there; a general triangulated category does not supply functorial cones for arbitrary towers.  The assertions that the resulting comparisons and are isomorphisms are completeness assertions. They do not follow from nondegeneracy alone. For the standard t-structure on , exact countable coproducts in make the first comparison an isomorphism: termwise stabilization and exact coproducts compute the same cohomology as . Exact countable products in make the second comparison an isomorphism by the dual product calculation. See Stacks, Tag 0A5K and Tag 08TB . The comparison with a homotopy limit need not be unique in the triangulated category; whether it is invertible is independent of that choice. The names left and right completeness depend on whether a source indexes homologically or cohomologically. The two displayed comparison maps specify exactly the assertions meant here. Completeness of a filtered object in is a different condition.  We shall use finite truncation arguments without imposing completeness on every abstract t-structure. Whenever an infinite truncation tower is used, its existence and the comparison with the original object must be checked separately. This is the same distinction between constructing spectral-sequence pages and proving convergence.    Functors and t-exactness   t-exact functors  t-exact functor Left t-exact functor Right t-exact functor   For t-structured triangulated categories, an exact functor is right t-exact if , and left t-exact if . It is t-exact if both conditions hold.      A t-exact functor commutes with truncation and cohomology up to the natural isomorphisms defined by their universal properties, and restricts to an exact functor of hearts. If are exact, then is right t-exact if and only if is left t-exact.    Apply to a truncation triangle and use both bounds to recognize the truncation triangle of . A short exact sequence in the heart is a distinguished triangle of heart objects, which proves exactness on hearts. For the adjoint assertion, if is right t-exact and , then for . Orthogonality places in . The converse uses the same calculation and the other orthogonality characterization.    One-sided t-exactness still gives useful maps. If is right t-exact, the map factors uniquely through . If is left t-exact, the map factors uniquely through . Thus there are comparisons under the respective assumptions. They need not be invertible without the other half of t-exactness.   Cohomological amplitude Cohomological amplitude  For integers , an exact functor has cohomological amplitude contained in if and . It then takes into .    Let be left exact with having enough injectives. Then is left t-exact. If for every , then for bounded inputs with cohomology in , its output has cohomology in . Dually a right exact functor with left derived dimension at most takes bounded cohomological intervals into .  A bounded below complex in degrees at least zero admits an injective replacement with the same lower bound, which proves left t-exactness. For a heart object the stated vanishing places its image in . The finite truncation construction of a bounded input then puts each successive image piece in the interval . Extension-closure gives the bound . Reverse degrees for the left-derived case.   This bounded-input conclusion uses finitely many triangles. Applying the same amplitude claim to an arbitrary unbounded object requires additional control of the corresponding infinite tower. Likewise, a right adjoint in an abstract six-operation formalism is not automatically bounded on a specified subcategory merely because its adjunction exists.   "
},
{
  "id": "ha-c13-definition-tstructure",
  "level": "2",
  "url": "ha-c13.html#ha-c13-definition-tstructure",
  "type": "Definition",
  "number": "13.1",
  "title": "t-structures and boundedness.",
  "body": " t-structures and boundedness  t-structure Heart Bounded t-structure Nondegenerate t-structure   A t-structure on a triangulated category is a pair of strictly full subcategories such that:   and .  for and , where .  Every occurs in a distinguished triangle with and .   Set , , and . The heart is . The t-structure is bounded if every object belongs to some . It is nondegenerate if both and contain only zero objects.   "
},
{
  "id": "ha-c13-proposition-truncation",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-truncation",
  "type": "Proposition",
  "number": "13.2",
  "title": "",
  "body": "  The inclusion has a right adjoint , and the inclusion has a left adjoint . The resulting triangle   is functorial in . Both halves of the t-structure are extension-closed and closed under existing retracts.    Choose a triangle with the required bounds. For , the two groups and vanish. The exact Hom sequence therefore gives . This represents the desired right adjoint, independently of the chosen triangle. The left adjoint follows by the dual argument. These universal properties force a unique morphism between the truncation triangles over a morphism of their middle objects; the triangulated category axiom supplies existence.  The orthogonality characterization , and its dual, follows by applying the same triangle to an object orthogonal to the indicated half. These characterizations prove extension-closure and closure under retracts.   "
},
{
  "id": "ha-c13-proposition-truncation-calculus",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-truncation-calculus",
  "type": "Proposition",
  "number": "13.3",
  "title": "",
  "body": " There are natural isomorphisms Shifting truncation gives , and similarly for lower truncation. The common mixed truncation has its values in . If , both mixed truncations are zero.  Applying the appropriate Hom adjunction twice gives the first two formulas. For mixed truncation, truncate the triangle for one of the bounds at the other bound. Orthogonality identifies the remaining piece with the object having both bounds, and the universal maps identify the two orders. The same universal properties make the isomorphisms natural and compatible with repeated truncation. The shift formula follows by shifting the defining triangle. An object in for has zero identity by orthogonality.  "
},
{
  "id": "ha-c13-theorem-heart",
  "level": "2",
  "url": "ha-c13.html#ha-c13-theorem-heart",
  "type": "Theorem",
  "number": "13.4",
  "title": "",
  "body": "  The heart is an abelian category. There is a cohomological functor , given by . Set . A distinguished triangle gives a natural long exact sequence of these cohomology objects.  If is a map in the heart and is its cone, then , and   A sequence in the heart is exact if and only if its two maps extend to a distinguished triangle .   "
},
{
  "id": "ha-c13-proposition-postnikov",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-postnikov",
  "type": "Proposition",
  "number": "13.5",
  "title": "",
  "body": " For every and integer , there are functorial distinguished triangles Thus an object of is obtained from the objects , for , by finitely many such triangles.  Apply the truncation triangle at to . The truncation calculus identifies the first term with and the third with . The second triangle follows dually. In a bounded interval, one end truncation is zero and the other is , which gives the finite construction.  "
},
{
  "id": "ha-c13-proposition-ext-one",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-ext-one",
  "type": "Proposition",
  "number": "13.6",
  "title": "",
  "body": "  For , there is a natural isomorphism   where the left side denotes Yoneda extensions.    An extension gives the connecting map of its distinguished triangle. Conversely, complete a morphism to a triangle . Extension-closure places in the heart, and its cohomology sequence is a short exact sequence with ends . The axiom on morphisms of triangles identifies equivalent extensions. Pullback and pushout of extensions correspond to composition at the two ends of the connecting map. This also identifies Baer addition with addition of morphisms.   "
},
{
  "id": "ha-c13-proposition-realization-test",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-realization-test",
  "type": "Proposition",
  "number": "13.7",
  "title": "",
  "body": " Suppose that the t-structure on is bounded, that is locally small at the chosen scale, and that an exact functor has been given whose restriction to the heart is its inclusion, with the specified natural identification. If induced by is an isomorphism for every and , then is an equivalence. Ext here may be defined by Yoneda extensions.  For negative both sides of the corresponding shifted Hom comparison vanish by orthogonality. The assumed comparison therefore gives full faithfulness between all shifts of heart objects. Induct on the finite truncation lengths of the two arguments, applying their truncation triangles and the long exact Hom sequences. The five lemma gives full faithfulness on all bounded objects. The essential image contains the heart and, by full faithfulness and exactness, is closed under cones of maps between its objects. Every object of has the finite construction in , so the image is all of .  "
},
{
  "id": "ha-c13-example-standard",
  "level": "2",
  "url": "ha-c13.html#ha-c13-example-standard",
  "type": "Example",
  "number": "13.8",
  "title": "",
  "body": " For an abelian category whose derived category has the required morphism sets, define and by vanishing of ordinary cohomology above and below zero. Smart truncation gives the required triangle. The heart is equivalent to via complexes concentrated in degree zero. This t-structure is nondegenerate; its restriction to is bounded.  For any integer , the shifted pair is another t-structure. Its heart is . The abstract triangulated category does not select the original heart from all these choices.  "
},
{
  "id": "ha-c13-example-degenerate",
  "level": "2",
  "url": "ha-c13.html#ha-c13-example-degenerate",
  "type": "Example",
  "number": "13.9",
  "title": "",
  "body": " The pairs and are t-structures with zero heart. Unless , they are degenerate and unbounded. In particular, cohomology objects for an arbitrary t-structure need not detect zero objects. If the t-structure is nondegenerate, the truncation triangles show that an object with all cohomology objects zero is zero.  "
},
{
  "id": "ha-c13-proposition-detection",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-detection",
  "type": "Proposition",
  "number": "13.10",
  "title": "",
  "body": " For a nondegenerate t-structure, a map is an isomorphism if and only if every takes it to an isomorphism.  The cone of such a map has all cohomology zero. For an object with this property, consecutive truncations are isomorphic by . Fixing , the object then lies in for every ; nondegeneracy makes it zero. Thus for every , and nondegeneracy again gives .  "
},
{
  "id": "ha-c13-definition-exact-functor",
  "level": "2",
  "url": "ha-c13.html#ha-c13-definition-exact-functor",
  "type": "Definition",
  "number": "13.11",
  "title": "t-exact functors.",
  "body": " t-exact functors  t-exact functor Left t-exact functor Right t-exact functor   For t-structured triangulated categories, an exact functor is right t-exact if , and left t-exact if . It is t-exact if both conditions hold.   "
},
{
  "id": "ha-c13-proposition-functors",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-functors",
  "type": "Proposition",
  "number": "13.12",
  "title": "",
  "body": "  A t-exact functor commutes with truncation and cohomology up to the natural isomorphisms defined by their universal properties, and restricts to an exact functor of hearts. If are exact, then is right t-exact if and only if is left t-exact.    Apply to a truncation triangle and use both bounds to recognize the truncation triangle of . A short exact sequence in the heart is a distinguished triangle of heart objects, which proves exactness on hearts. For the adjoint assertion, if is right t-exact and , then for . Orthogonality places in . The converse uses the same calculation and the other orthogonality characterization.   "
},
{
  "id": "ha-c13-definition-amplitude",
  "level": "2",
  "url": "ha-c13.html#ha-c13-definition-amplitude",
  "type": "Definition",
  "number": "13.13",
  "title": "Cohomological amplitude.",
  "body": " Cohomological amplitude Cohomological amplitude  For integers , an exact functor has cohomological amplitude contained in if and . It then takes into .  "
},
{
  "id": "ha-c13-proposition-derived-amplitude",
  "level": "2",
  "url": "ha-c13.html#ha-c13-proposition-derived-amplitude",
  "type": "Proposition",
  "number": "13.14",
  "title": "",
  "body": " Let be left exact with having enough injectives. Then is left t-exact. If for every , then for bounded inputs with cohomology in , its output has cohomology in . Dually a right exact functor with left derived dimension at most takes bounded cohomological intervals into .  A bounded below complex in degrees at least zero admits an injective replacement with the same lower bound, which proves left t-exactness. For a heart object the stated vanishing places its image in . The finite truncation construction of a bounded input then puts each successive image piece in the interval . Extension-closure gives the bound . Reverse degrees for the left-derived case.  "
},
{
  "id": "ha-c14",
  "level": "1",
  "url": "ha-c14.html",
  "type": "Chapter",
  "number": "14",
  "title": "Compact generation and representability",
  "body": " Compact generation and representability   A right adjoint can be constructed by representing a family of Hom-valued functors. Brown representability gives conditions under which this method works in a triangulated category. Compact objects supply those conditions and also allow some comparisons to be checked on a generating set.  Throughout this chapter, small coproducts mean coproducts indexed in the fixed universe. Representing functors take values in small abelian groups. We use and as the main references. The compactly generated Brown theorem and its adjoint consequence are stated and proved in .    Compact objects and generators   Compactness and generation  Compact object Compactly generated category Localizing subcategory Classical generator   Let have small coproducts.   An object is compact if the canonical map is an isomorphism for every small family. Write for the full subcategory of compact objects.  A set detects zero objects if for every and implies . We call compactly generated if such a small set can be chosen with every compact.  A localizing subcategory is a strictly full triangulated subcategory closed under small coproducts. Write for the smallest one containing . Write for closure under finite sums, shifts, triangles, and retracts. A classical generator satisfies .     Compactness is a condition on an object, not on the sizes of the morphism sets. It is also different from finite presentation in an abelian category. Some sources call compact objects small or finite . Here small continues to refer to the chosen universe. The phrase generator can mean zero detection, localizing generation, or classical generation; the condition used in a statement is given explicitly.  The compactness map is always injective: each projection from a coproduct recovers the corresponding component of a finite sum of maps. Thus compactness can be tested by requiring every map to factor through a finite partial coproduct. The canonical comparison includes this finite-support requirement; an abstract isomorphism between the two groups would not state it.  A zero-detecting set is a test for objects and for isomorphisms, rather than a claim that it detects every nonzero morphism. A map is an isomorphism if its maps on are isomorphisms, since those tests annihilate its cone. Vanishing of the tests on a map itself need not make the map zero. For example, in , the nonzero extension class induces zero on every cohomology group. The compact generator detects cohomology and therefore detects zero objects, but it does not detect that extension class.  A small detecting set can be replaced by the single object for zero detection. That sum need not be compact. Compact generation by a set and compact generation by one compact object are consequently different assertions. Classical generation is different again: it permits finitely many cone and retract operations, rather than arbitrary coproducts.    The compact objects form a thick subcategory. If is compact and is a sequence, then     Closure under shifts and retracts follows directly from the defining comparison. For a triangle, compare the long exact Hom sequences before and after a coproduct. Exactness of direct sums of abelian groups and the five lemma give closure under cones.  The sequential homotopy colimit is a cone of , where uses the transition maps into the next summand. After applying , compactness replaces Hom into these coproducts by direct sums of Hom groups. The map on either degree of those direct sums is injective: an element has finite support, and its first nonzero coordinate cannot cancel. Its cokernel is the direct limit. The long exact sequence gives the assertion.    This construction specifies a sequential homotopy colimit by a distinguished triangle. A triangulated category does not supply a functorial choice of cones for arbitrary maps, so no additional coherence of all such choices is implicit. The displayed Hom calculation is independent of the chosen cone in the sense supplied by isomorphisms of triangles. A telescope is another name for this construction. It is not the ordinary categorical colimit of the sequence, and its defining triangle is what allows compactness to compute its Hom groups.    If a small set of compact objects detects zero objects, then , and . In particular, is essentially small.    We use this compact generation theorem as an existence result; see and . Its finite part is stronger than zero detection: a compact object can be obtained using only finitely many cones and finite sums, followed by a retract. The general construction first uses coproducts and sequential homotopy colimits, and compactness then gives that finite factorization. Merely testing vanishing against a set of noncompact objects does not establish this finite conclusion.    Derived categories of modules   Let be an associative ring and use left modules. The object is compact in , since   and direct sums of modules are exact. These groups detect whether is zero. Thus is compactly generated by .  A perfect complex is an object isomorphic in to a bounded complex of finitely generated projective left modules. Such complexes form , and hence are precisely the compact objects. To see the finite construction, each finitely generated projective module is a retract of a finite free module, and successive brutal truncation triangles construct a bounded complex from its terms. Conversely, perfect complexes are closed under retracts in the derived category; this last assertion is part of the perfect-complex theorem, not an assertion that every idempotent chain map splits termwise in the chosen representative. For the commutative-ring version, see .   Bounded cohomology with finitely generated cohomology modules is a different condition. Over , the module in degree zero has that condition but has infinite projective dimension, so is not perfect. Thus it is not compact in the unbounded derived category.  An abelian generator of a Grothendieck category need not become a compact object of its derived category. In particular, the existence of enough injectives or K-injectives is not a compact-generation theorem. Whenever the compactly generated results below are applied to , compact generation must be checked separately.  Even over a field, the compact generator is usually not a classical generator for the whole unbounded category. The thick closure of consists of complexes with finite-dimensional total cohomology. The localizing closure allows arbitrary coproducts and is all of . Perfect complexes are useful here because they describe the part built by finite operations, without replacing the surrounding category by a bounded one. The relation with dualizable objects is established in .    Brown representability and right adjoints    Let be compactly generated. A contravariant cohomological functor which sends small coproducts to products is representable: there are and a natural isomorphism .    This is Brown representability in the form of . Both conditions on are necessary for representation: representable functors are cohomological and turn coproducts into products.  The construction can be described through a universal element. A pair , with , defines a natural transformation by sending to . Representation asks that this map be bijective for every . Its uniqueness is the Yoneda uniqueness of a representing pair, rather than equality of independently constructed objects.  Here is why compact generators suffice in the construction. Close the chosen set of generators under shifts. Let be the coproduct of one copy of for each pair with . Preservation of coproducts gives an element with those components, so the comparison is surjective on generators. At stage , take the coproduct of all maps in the kernels of these comparisons. Complete to a triangle with third object . The element restricts to zero on ; the cohomological property supplies a lift . Thus every relation detected at one stage vanishes at the next.  Let . The telescope triangle and supply an element lifting the compatible family . Compactness computes maps from each generator into as a direct limit. Surjectivity was imposed at the first stage, and a kernel element is killed at the next stage, so the comparison is an isomorphism on every shifted generator. The objects on which it is an isomorphism in every shift form a localizing subcategory: use the two long exact sequences for triangles and the product comparison for coproducts. The generation theorem makes that subcategory all of . This is the mechanism of the cited proof; the smallness hypotheses ensure that each attaching coproduct has a small indexing set.    Let be an exact functor, with compactly generated and a locally small triangulated category. If preserves small coproducts, then it has an exact right adjoint.    For , the functor is cohomological and sends coproducts to products. Brown representability gives an object representing it. Yoneda makes these representing objects functorial in and gives . Exactness of the right adjoint follows from the exact-adjoint result of . This is also .    The theorem is contravariant. A covariant homological functor preserving products is a different representability question, and the corresponding existence of left adjoints is not obtained by formally reversing this theorem. Nor does the representing object automatically belong to a bounded subcategory.  There is a broader Brown theorem for well generated triangulated categories, which includes noncompact generators with controlled cardinal bounds and an additional generation condition. The unbounded derived category of a Grothendieck category belongs to this broader class; see . We use the compactly generated form here. Applying the broader result requires its actual well-generation hypotheses, not merely replacing the word compact by a cardinality bound in one argument.    Preservation and tests on generators    Suppose is an exact adjunction, both categories have small coproducts, and is compactly generated. Then preserves small coproducts if and only if takes compact objects to compact objects.    If preserves coproducts and is compact, then , which proves compactness of . Conversely, test the canonical map against every shift of a compact generator. Compactness of that generator and of its image under , followed by adjunction, makes every test an isomorphism. The cone is zero by generation.      Let be exact coproduct-preserving functors, where . A natural transformation compatible with suspension is an isomorphism on all objects if it is an isomorphism on every member of .    The objects on which the transformation is invertible form a localizing subcategory. Closure under triangles follows by comparing long exact Hom sequences, and closure under coproducts uses preservation by both functors. This subcategory contains , so it is all of .    This last test will extend a projection or duality comparison from dualizable generators. Its preservation assumptions concern both sides of the comparison; a right adjoint cannot be assumed to preserve coproducts merely because its left adjoint does.   Let be exact and preserve small coproducts. Suppose is compactly generated by a small set , every is compact, and the natural maps are isomorphisms for and . Then is fully faithful. If the objects also detect zero objects of , then is an equivalence.  Fix . Compactness of and makes the objects on which is an isomorphism for all a localizing subcategory. It contains , hence all objects. Now fix in the target variable and vary the source of the same Hom comparison. These contravariant Hom functors take coproducts to products without a compactness assumption; the same localizing argument extends the isomorphism from to all sources. This proves full faithfulness. The essential image of a fully faithful exact coproduct-preserving functor is a localizing subcategory. In the final case it contains the compact generators of , so equals .   Testing only the maps between generators without controlling coproducts would miss both steps of this proof. This criterion compares entire triangulated categories; it does not construct a functor from a proposed correspondence on generators. Constructing such a functor can require information beyond the Hom groups of the generators.   "
},
{
  "id": "ha-c14-definition-compact",
  "level": "2",
  "url": "ha-c14.html#ha-c14-definition-compact",
  "type": "Definition",
  "number": "14.1",
  "title": "Compactness and generation.",
  "body": " Compactness and generation  Compact object Compactly generated category Localizing subcategory Classical generator   Let have small coproducts.   An object is compact if the canonical map is an isomorphism for every small family. Write for the full subcategory of compact objects.  A set detects zero objects if for every and implies . We call compactly generated if such a small set can be chosen with every compact.  A localizing subcategory is a strictly full triangulated subcategory closed under small coproducts. Write for the smallest one containing . Write for closure under finite sums, shifts, triangles, and retracts. A classical generator satisfies .    "
},
{
  "id": "ha-c14-proposition-compact-closure",
  "level": "2",
  "url": "ha-c14.html#ha-c14-proposition-compact-closure",
  "type": "Proposition",
  "number": "14.2",
  "title": "",
  "body": "  The compact objects form a thick subcategory. If is compact and is a sequence, then     Closure under shifts and retracts follows directly from the defining comparison. For a triangle, compare the long exact Hom sequences before and after a coproduct. Exactness of direct sums of abelian groups and the five lemma give closure under cones.  The sequential homotopy colimit is a cone of , where uses the transition maps into the next summand. After applying , compactness replaces Hom into these coproducts by direct sums of Hom groups. The map on either degree of those direct sums is injective: an element has finite support, and its first nonzero coordinate cannot cancel. Its cokernel is the direct limit. The long exact sequence gives the assertion.   "
},
{
  "id": "ha-c14-theorem-generation",
  "level": "2",
  "url": "ha-c14.html#ha-c14-theorem-generation",
  "type": "Theorem",
  "number": "14.3",
  "title": "",
  "body": "  If a small set of compact objects detects zero objects, then , and . In particular, is essentially small.   "
},
{
  "id": "ha-c14-example-ring",
  "level": "2",
  "url": "ha-c14.html#ha-c14-example-ring",
  "type": "Example",
  "number": "14.4",
  "title": "",
  "body": " Let be an associative ring and use left modules. The object is compact in , since   and direct sums of modules are exact. These groups detect whether is zero. Thus is compactly generated by .  A perfect complex is an object isomorphic in to a bounded complex of finitely generated projective left modules. Such complexes form , and hence are precisely the compact objects. To see the finite construction, each finitely generated projective module is a retract of a finite free module, and successive brutal truncation triangles construct a bounded complex from its terms. Conversely, perfect complexes are closed under retracts in the derived category; this last assertion is part of the perfect-complex theorem, not an assertion that every idempotent chain map splits termwise in the chosen representative. For the commutative-ring version, see .  "
},
{
  "id": "ha-c14-theorem-brown",
  "level": "2",
  "url": "ha-c14.html#ha-c14-theorem-brown",
  "type": "Theorem",
  "number": "14.5",
  "title": "",
  "body": "  Let be compactly generated. A contravariant cohomological functor which sends small coproducts to products is representable: there are and a natural isomorphism .   "
},
{
  "id": "ha-c14-corollary-adjoint",
  "level": "2",
  "url": "ha-c14.html#ha-c14-corollary-adjoint",
  "type": "Corollary",
  "number": "14.6",
  "title": "",
  "body": "  Let be an exact functor, with compactly generated and a locally small triangulated category. If preserves small coproducts, then it has an exact right adjoint.    For , the functor is cohomological and sends coproducts to products. Brown representability gives an object representing it. Yoneda makes these representing objects functorial in and gives . Exactness of the right adjoint follows from the exact-adjoint result of . This is also .   "
},
{
  "id": "ha-c14-proposition-compact-adjoint",
  "level": "2",
  "url": "ha-c14.html#ha-c14-proposition-compact-adjoint",
  "type": "Proposition",
  "number": "14.7",
  "title": "",
  "body": "  Suppose is an exact adjunction, both categories have small coproducts, and is compactly generated. Then preserves small coproducts if and only if takes compact objects to compact objects.    If preserves coproducts and is compact, then , which proves compactness of . Conversely, test the canonical map against every shift of a compact generator. Compactness of that generator and of its image under , followed by adjunction, makes every test an isomorphism. The cone is zero by generation.   "
},
{
  "id": "ha-c14-proposition-test",
  "level": "2",
  "url": "ha-c14.html#ha-c14-proposition-test",
  "type": "Proposition",
  "number": "14.8",
  "title": "",
  "body": "  Let be exact coproduct-preserving functors, where . A natural transformation compatible with suspension is an isomorphism on all objects if it is an isomorphism on every member of .    The objects on which the transformation is invertible form a localizing subcategory. Closure under triangles follows by comparing long exact Hom sequences, and closure under coproducts uses preservation by both functors. This subcategory contains , so it is all of .   "
},
{
  "id": "ha-c14-proposition-equivalence-test",
  "level": "2",
  "url": "ha-c14.html#ha-c14-proposition-equivalence-test",
  "type": "Proposition",
  "number": "14.9",
  "title": "",
  "body": " Let be exact and preserve small coproducts. Suppose is compactly generated by a small set , every is compact, and the natural maps are isomorphisms for and . Then is fully faithful. If the objects also detect zero objects of , then is an equivalence.  Fix . Compactness of and makes the objects on which is an isomorphism for all a localizing subcategory. It contains , hence all objects. Now fix in the target variable and vary the source of the same Hom comparison. These contravariant Hom functors take coproducts to products without a compactness assumption; the same localizing argument extends the isomorphism from to all sources. This proves full faithfulness. The essential image of a fully faithful exact coproduct-preserving functor is a localizing subcategory. In the final case it contains the compact generators of , so equals .  "
},
{
  "id": "ha-c15",
  "level": "1",
  "url": "ha-c15.html",
  "type": "Chapter",
  "number": "15",
  "title": "Localization and recollement",
  "body": " Localization and recollement   A Verdier quotient formally annihilates a triangulated subcategory. When that quotient has a fully faithful right adjoint, it can instead be represented by a category of local objects inside the original category. A recollement adds another adjoint and two compatible decompositions. These distinctions determine which gluing arguments are available.  We use for localization and for recollement and gluing of t-structures. The construction of Verdier quotients is given in .    Local objects and localization triangles   Exact localization  Exact localization Local object Acyclic object Bousfield localization   An exact localization on is an exact endofunctor with a natural transformation such that and this common map is an isomorphism. An object is local if is invertible, and acyclic if . Write and .      For an exact localization, the local objects form . The corestriction of is left adjoint to inclusion. There is a functorial distinguished triangle   with ; the corestriction of is right adjoint to inclusion . The Verdier quotient is locally small and its quotient functor induces an equivalence .    For a local object , the maps given by are bijective: an inverse sends to . Thus local objects are right orthogonal to acyclic objects. Complete to a triangle; applying makes its first object acyclic. The Hom sequence shows that maps from any to that first object are the same as maps to . This proves representability and functoriality of .  If , apply that universal property with . The identity of is zero, so and is local. Finally, a map whose cone lies in induces an isomorphism on Hom into a local object. The quotient universal property, together with the reflection, gives the stated equivalence and local smallness.    Conversely, if a Verdier quotient by a thick subcategory is locally small and has a right adjoint, that right adjoint is fully faithful and its composite with the quotient is an exact localization. A quotient by itself need not have such an adjoint. Similarly, the localization triangle supplies a right adjoint for the acyclic inclusion, but does not supply a left adjoint for it. The term Bousfield localization is often used for this reflective exact localization. It records more structure than the formal inversion defining a Verdier quotient.   For an exact localization with kernel :  A morphism becomes an isomorphism under if and only if its cone belongs to . An object is local if and only if precomposition with every such gives a bijection on Hom into .  The subcategory is thick and closed under all ambient coproducts that exist. The local subcategory is triangulated and closed under all ambient products that exist.  There are natural isomorphisms , and . Moreover , where the left orthogonal also tests all shifts.   Apply the exact functor to a triangle of ; a triangle has invertible first map exactly when its third object vanishes. The Hom sequence and give the local-object test; its converse can be tested on with . Both orthogonals are closed under triangles and retracts. Hom out of a coproduct is a product, so the left orthogonal is closed under coproducts. Hom into a product gives the dual assertion for local objects. If is left orthogonal to local objects, the adjunction gives , so . This proves the orthogonal equality and the coproduct assertion for the kernel. Applying the localization triangle to an acyclic or a local object proves the identities involving .   The functoriality of comes from its adjunction, rather than from a generally functorial cone. For example, a map has a unique induced map between the acyclic terms compatible with their maps to , since maps from acyclic objects to local objects vanish. The adjunction likewise determines the connecting maps in the localization triangles. These universal properties justify using the triangle as a natural construction.  The localization is determined, up to its unique compatible isomorphism, by its local objects or by its kernel. If , testing locality against and all its shifts already suffices: the objects for which form a localizing subcategory. This reduction does not require to be compact. Compactness enters the existence theorem and the claim that local objects are closed under coproducts.    Localization generated by compact objects    Let be compactly generated and let be a small set of compact objects. For , there is an exact localization with kernel . Its endofunctor preserves small coproducts. The quotient is compactly generated by the images of compact generators of . Its compact objects are retracts of images of objects of ; the possible need to take retracts cannot be omitted.    This is the compactly generated localization theorem of . To explain the existence argument, is itself compactly generated by , so Brown representability gives a right adjoint to its inclusion. The counit triangle has third term in , which constructs the reflection. That orthogonal subcategory is closed under ambient coproducts because its defining tests use compact objects. This proves the coproduct assertion. The finite factorization theorem for compact objects gives the final assertion.  A localization preserving coproducts is called smashing. Its kernel need not be generated by compact objects in an arbitrary compactly generated category; the converse of the theorem is an extra assertion, not part of the definition. The reflector, viewed as a functor into its category of local objects, is a left adjoint and preserves coproducts there. Smashing asks that its endofunctor on the ambient category preserve coproducts. The distinction is whether inclusion of local objects preserves those coproducts.  The finite part of the localization theorem has a precise quotient formulation. Let . There is a fully faithful exact functor and every object on the right is a retract of one in its image. Thus the right side is obtained from the left side by splitting idempotents. This is . Taking the quotient and taking compact objects commute only with this qualification. The quotient of the compact subcategories alone need not already contain every retract that exists in the large quotient.  Smashing, as defined here, asks for preservation of coproducts. It does not by definition assert a formula ; that expression requires a monoidal structure and compatibility with the kernel. A sufficient set of such assumptions is given in . The additional tensor assertion should be distinguished from the triangulated localization statement.   In , fix a prime and let , viewed again as a complex of abelian groups. Flatness and give a localization. Its local objects have multiplication by invertible on every cohomology group. Its acyclic objects have cohomology groups in which each element is killed by some power of ; the exponent may depend on the element.  The acyclic subcategory is . Indeed, orthogonality to every shift of , using the triangle , is precisely invertibility of multiplication by on cohomology. The localization theorem therefore gives the same local objects, and uniqueness of reflection gives the same kernel. This localization inverts ; it is not derived -adic completion.     Recollement data   Recollement  Recollement   A recollement of by triangulated categories and consists of exact functors in adjoint triples   where and , satisfying:   The functors are fully faithful.  .  The units and counits occur in functorial distinguished triangles       These axioms imply and an equivalence . For an object in the kernel, either triangle identifies it with an object from . The two embeddings of the quotient are generally different: adjunction gives and . Recollement is therefore more than a single reflective localization. For an exact localization, it is enough additionally that the acyclic inclusion admit a left adjoint to complete the corresponding localization diagram to a recollement; see .   In a recollement the adjunction maps give isomorphisms Also and . The functors and are exact localizations, with kernels and , respectively. Their associated acyclic functors are and .  A fully faithful right adjoint has invertible counit and a fully faithful left adjoint has invertible unit. Apply this to the four adjunctions involving an embedding. For and , Taking gives the first vanishing, and the second is dual. Each localization is the composite of a reflection and its fully faithful inclusion; the two recollement triangles identify its kernel and acyclic functor.   There is a natural map corresponding to under either adjunction. Applying makes it an isomorphism, so its cone belongs to . The obstruction to the two extensions agreeing is supported in the third category. The other mixed composites, and , need not vanish; they describe how the two parts interact. Recollement supplies two ordered orthogonal decompositions. It need not express as a product, since the vanishing is in specified directions and does not remove all morphisms between the pieces.   For , use the two inclusions and projections. Both adjoints of either inclusion are the corresponding projection, and both triangles split. A ring product gives this example with . The general axioms do not require a splitting; maps between the two components in the opposite orthogonality directions can carry extension data.     Gluing t-structures    Given a recollement and t-structures on and , there is a t-structure on defined by   The functors and are t-exact. The functors are right t-exact, while are left t-exact. If both given t-structures are bounded, the glued t-structure is bounded.    For the construction of truncation triangles, we use the gluing theorem of . Its orthogonality has a short direct proof. For and , the first recollement triangle for reduces to   Both vanish by the t-structures on the two pieces. The truncation construction first truncates , lifts its two parts using the two adjoints, and then truncates the remaining object supported in . The octahedral axiom assembles the triangles. This is the part of the proof for which both adjoints and both recollement triangles are needed. Boundedness follows by choosing common bounds for .  On hearts, is an exact fully faithful functor and is an exact quotient onto the heart on , with kernel the image of the heart on . The other four original functors need not take hearts to hearts; one uses their degree-zero cohomology when a heart-valued functor is required. Thus a triangulated recollement and a recollement of abelian categories should not be identified merely by suppressing truncation functors.   Intermediate extension in the glued heart Intermediate extension  Write for degree-zero cohomology in the glued t-structure. For an object of the heart of , its intermediate extension is the image in the heart of , using the natural comparison just constructed.   The image construction is functorial, since it is taken in an abelian category. One has . It is characterized among extensions of by having no nonzero subobject or quotient belonging to the image of the heart of . Indeed the adjunctions make have no such quotient and have no such subobject. Their image has both properties. Conversely the two adjunction maps to and from any extension with these properties force it to be that image. This characterization also proves full faithfulness of ; see .  Intermediate extension need not be exact. It is an image of a natural comparison between a right exact heart-valued functor and a left exact one, and those two exactness properties do not force their image functor to preserve all short exact sequences. The definition applies to any recollement with glued t-structures and uses no geometric interpretation of the symbols .  The six functors displayed in a recollement are not Grothendieck's six operations. A recollement concerns two embeddings and a quotient among three categories. It does not include a tensor product, an internal Hom, or base change over an arbitrary base category. Those require the additional indexed structure of .   "
},
{
  "id": "ha-c15-definition-localization",
  "level": "2",
  "url": "ha-c15.html#ha-c15-definition-localization",
  "type": "Definition",
  "number": "15.1",
  "title": "Exact localization.",
  "body": " Exact localization  Exact localization Local object Acyclic object Bousfield localization   An exact localization on is an exact endofunctor with a natural transformation such that and this common map is an isomorphism. An object is local if is invertible, and acyclic if . Write and .   "
},
{
  "id": "ha-c15-proposition-localization",
  "level": "2",
  "url": "ha-c15.html#ha-c15-proposition-localization",
  "type": "Proposition",
  "number": "15.2",
  "title": "",
  "body": "  For an exact localization, the local objects form . The corestriction of is left adjoint to inclusion. There is a functorial distinguished triangle   with ; the corestriction of is right adjoint to inclusion . The Verdier quotient is locally small and its quotient functor induces an equivalence .    For a local object , the maps given by are bijective: an inverse sends to . Thus local objects are right orthogonal to acyclic objects. Complete to a triangle; applying makes its first object acyclic. The Hom sequence shows that maps from any to that first object are the same as maps to . This proves representability and functoriality of .  If , apply that universal property with . The identity of is zero, so and is local. Finally, a map whose cone lies in induces an isomorphism on Hom into a local object. The quotient universal property, together with the reflection, gives the stated equivalence and local smallness.   "
},
{
  "id": "ha-c15-proposition-local-tests",
  "level": "2",
  "url": "ha-c15.html#ha-c15-proposition-local-tests",
  "type": "Proposition",
  "number": "15.3",
  "title": "",
  "body": " For an exact localization with kernel :  A morphism becomes an isomorphism under if and only if its cone belongs to . An object is local if and only if precomposition with every such gives a bijection on Hom into .  The subcategory is thick and closed under all ambient coproducts that exist. The local subcategory is triangulated and closed under all ambient products that exist.  There are natural isomorphisms , and . Moreover , where the left orthogonal also tests all shifts.   Apply the exact functor to a triangle of ; a triangle has invertible first map exactly when its third object vanishes. The Hom sequence and give the local-object test; its converse can be tested on with . Both orthogonals are closed under triangles and retracts. Hom out of a coproduct is a product, so the left orthogonal is closed under coproducts. Hom into a product gives the dual assertion for local objects. If is left orthogonal to local objects, the adjunction gives , so . This proves the orthogonal equality and the coproduct assertion for the kernel. Applying the localization triangle to an acyclic or a local object proves the identities involving .  "
},
{
  "id": "ha-c15-theorem-compact-localization",
  "level": "2",
  "url": "ha-c15.html#ha-c15-theorem-compact-localization",
  "type": "Theorem",
  "number": "15.4",
  "title": "",
  "body": "  Let be compactly generated and let be a small set of compact objects. For , there is an exact localization with kernel . Its endofunctor preserves small coproducts. The quotient is compactly generated by the images of compact generators of . Its compact objects are retracts of images of objects of ; the possible need to take retracts cannot be omitted.   "
},
{
  "id": "ha-c15-example-arithmetic",
  "level": "2",
  "url": "ha-c15.html#ha-c15-example-arithmetic",
  "type": "Example",
  "number": "15.5",
  "title": "",
  "body": " In , fix a prime and let , viewed again as a complex of abelian groups. Flatness and give a localization. Its local objects have multiplication by invertible on every cohomology group. Its acyclic objects have cohomology groups in which each element is killed by some power of ; the exponent may depend on the element.  The acyclic subcategory is . Indeed, orthogonality to every shift of , using the triangle , is precisely invertibility of multiplication by on cohomology. The localization theorem therefore gives the same local objects, and uniqueness of reflection gives the same kernel. This localization inverts ; it is not derived -adic completion.  "
},
{
  "id": "ha-c15-definition-recollement",
  "level": "2",
  "url": "ha-c15.html#ha-c15-definition-recollement",
  "type": "Definition",
  "number": "15.6",
  "title": "Recollement.",
  "body": " Recollement  Recollement   A recollement of by triangulated categories and consists of exact functors in adjoint triples   where and , satisfying:   The functors are fully faithful.  .  The units and counits occur in functorial distinguished triangles      "
},
{
  "id": "ha-c15-proposition-recollement-identities",
  "level": "2",
  "url": "ha-c15.html#ha-c15-proposition-recollement-identities",
  "type": "Proposition",
  "number": "15.7",
  "title": "",
  "body": " In a recollement the adjunction maps give isomorphisms Also and . The functors and are exact localizations, with kernels and , respectively. Their associated acyclic functors are and .  A fully faithful right adjoint has invertible counit and a fully faithful left adjoint has invertible unit. Apply this to the four adjunctions involving an embedding. For and , Taking gives the first vanishing, and the second is dual. Each localization is the composite of a reflection and its fully faithful inclusion; the two recollement triangles identify its kernel and acyclic functor.  "
},
{
  "id": "ha-c15-example-product",
  "level": "2",
  "url": "ha-c15.html#ha-c15-example-product",
  "type": "Example",
  "number": "15.8",
  "title": "",
  "body": " For , use the two inclusions and projections. Both adjoints of either inclusion are the corresponding projection, and both triangles split. A ring product gives this example with . The general axioms do not require a splitting; maps between the two components in the opposite orthogonality directions can carry extension data.  "
},
{
  "id": "ha-c15-theorem-gluing",
  "level": "2",
  "url": "ha-c15.html#ha-c15-theorem-gluing",
  "type": "Theorem",
  "number": "15.9",
  "title": "",
  "body": "  Given a recollement and t-structures on and , there is a t-structure on defined by   The functors and are t-exact. The functors are right t-exact, while are left t-exact. If both given t-structures are bounded, the glued t-structure is bounded.   "
},
{
  "id": "ha-c15-definition-intermediate-extension",
  "level": "2",
  "url": "ha-c15.html#ha-c15-definition-intermediate-extension",
  "type": "Definition",
  "number": "15.10",
  "title": "Intermediate extension in the glued heart.",
  "body": " Intermediate extension in the glued heart Intermediate extension  Write for degree-zero cohomology in the glued t-structure. For an object of the heart of , its intermediate extension is the image in the heart of , using the natural comparison just constructed.  "
},
{
  "id": "ha-c16",
  "level": "1",
  "url": "ha-c16.html",
  "type": "Chapter",
  "number": "16",
  "title": "Monoidal triangulated categories and duality",
  "body": " Monoidal triangulated categories and duality   Derived tensor products and derived Hom have both an adjunction and a compatibility with triangles. We separate the consequences of these two structures from statements that depend on a particular category of complexes. The distinction between a dualizable object, a reflexive object, and a compact object will be used in the comparison of adjoints.  The ordinary duality conventions are those of ; the categorical treatment of duality and adjoints in is the main reference for the derived formalism. The construction of derived tensor and Hom remains the responsibility of ; their existence is not part of the abstract definition below.    Exact closed monoidal structures   Monoidal triangulated structure  Monoidal triangulated category Closed symmetric monoidal category   Let be a locally small triangulated category. An exact closed symmetric monoidal structure consists of a symmetric monoidal product , a unit , and internal Hom objects with natural bijections   We require tensor and internal Hom to be exact in each variable, internal Hom being contravariant in the first variable. Their specified suspension isomorphisms must respect the adjunction, associativity, and the unit. Moving two suspensions past each other introduces a minus sign. In particular, under the resulting identification , its symmetry is . We use these suspension conventions throughout this chapter.    The adjective closed refers to the existence of internal Hom. It does not refer to closure under a class of limits. The symbol denotes an object of ; denotes an ordinary morphism set. In a derived category, is often written . Some authors use that notation for a complex of abelian groups instead. The category containing the Hom object must be specified before these expressions can be compared.  We require only the exactness and suspension compatibilities used in our statements. Additional compatibility axioms for tensor products of triangles occur in stronger definitions of a monoidal triangulated category. No theorem concerning such additional axioms is implicit here.  For example, if is distinguished, exactness in the second Hom variable gives a triangle . Contravariance in the first variable instead gives a triangle , with its connecting map determined by the contravariant translation convention. These assertions identify objects and maps in a triangle, not just three isomorphism classes. This distinction matters when one takes mates of connecting morphisms.  The graded endomorphisms of the unit illustrate the suspension sign. Set , and for homogeneous maps of degrees define . The symmetry of the two shifted units gives . Degree zero recovers the commutative ring of unit endomorphisms from . The graded statement uses the suspension compatibility in addition to ordinary monoidal coherence.    In the structure of :   Tensoring with a fixed object preserves every coproduct that exists.  The functor is exact. Internal Hom is exact contravariantly in its first variable, with the usual reversal of a distinguished triangle.  There are natural isomorphisms , compatible with the suspension signs.     The first assertion follows because is a left adjoint. The second records the exactness required in the definition; exactness of also follows from adjoint exactness as in . The suspension formula follows by moving the shifts across the adjunction, with the chosen suspension isomorphisms.     For a commutative ring , the unbounded derived category has tensor product , internal Hom , and unit . The symmetry on homogeneous tensors is . The resolutions constructed in are needed to define these operations on arbitrary unbounded complexes.  For a noncommutative ring, the tensor product of two left modules has no such definition in general. Bimodule tensor products still exist with their stated source and target rings; they do not turn into a symmetric monoidal category by omission of the right actions.     Duals and the tensor–Hom comparison   Dualizable and invertible objects  Dualizable object Invertible object   An object is dualizable if there is an object with evaluation and coevaluation maps   such that inserting and then applying gives the identity on and on . Associativity and unit isomorphisms are understood in these two triangle identities. An object is invertible if tensoring with it is an equivalence, or equivalently if it has a tensor inverse.    Write . Evaluation defines, for every , a natural comparison   Its adjoint is the map obtained by moving past and evaluating. The existence of alone does not assert that is dualizable.    For , the following conditions are equivalent:   is dualizable.  is an isomorphism for every .  is an isomorphism.   When these conditions hold, , the canonical map is an isomorphism, and     Evaluation and coevaluation for a dual pair give the displayed adjunction by inserting coevaluation in one direction and applying evaluation in the other. The triangle identities show that these operations are inverse. Uniqueness of right adjoints identifies with , and evaluation identifies with .  The second condition implies the third. Under the third condition, the morphism corresponding to gives a coevaluation into ; compose with the symmetry to obtain a map into . The tensor–Hom adjunction makes the first triangle identity exactly the assertion that this map corresponds to . Applying the same adjunction to evaluation gives the second triangle identity. Thus is a dual. Applying uniqueness of duals to this pair proves the bidual assertion.      The dualizable objects contain the unit and are closed under shifts, finite sums, tensor products, and retracts. If two objects of a distinguished triangle are dualizable, so is the third.    The unit is its own dual. Duals of shifts and finite sums are obtained by shifting oppositely and taking the corresponding finite sum. The dual of is . A retract of a dualizable object has an invertible comparison , because this comparison is a retract of an isomorphism. For a triangle, compare the exact contravariant functors and . The maps give a morphism of triangles. Applying Hom and the five lemma proves that the third comparison is an isomorphism.    An invertible object is dualizable, but a dualizable object need not be invertible. A two-dimensional vector space over a field is dualizable; the dimension of a tensor inverse would have to multiply its dimension to one. This distinction persists in derived categories.  The inverse of an invertible object is its dual. The objects are invertible, with inverse . In particular, suspending an object changes its dual by the opposite shift. Invertibility is stronger than nonvanishing or the existence of biduality; it asks that the evaluation against its dual be an isomorphism to the unit.    Reflexivity and dualizing objects   Relative duality  Reflexive object Dualizing object Bidual map   For , set . The evaluation map induces a canonical bidual map . We call  -reflexive when this map is an isomorphism. If a full subcategory is preserved by and all its objects are -reflexive, then is a dualizing object for .    A dualizing object makes a contravariant equivalence. The subcategory is part of this assertion: an object may give duality on perfect complexes or on another bounded subcategory without giving duality on all objects. The words dual , dualizable , and dualizing therefore express different conditions. The internal Hom object always exists in a closed category; dualizability concerns tensor evaluation, and a dualizing object concerns biduality on a specified subcategory.   Let denote the bidual map. It satisfies The full subcategory of -reflexive objects is thick and preserved by . This functor is a duality on that subcategory. If is invertible, it is a dualizing object on the subcategory of dualizable objects.  The defining adjoint of is evaluation with its two factors interchanged. Evaluate the displayed composite on ; the two adjunction identities give evaluation itself, proving the identity by adjunction. If is invertible, so is , and the identity makes its inverse. This proves preservation. The map compares two exact covariant functors, so its isomorphism locus is closed under shifts and triangles by the five lemma and under retracts by taking retracts of the comparison. It is therefore thick. Biduality supplies the inverse equivalence. For invertible and dualizable , one has ; dualizing this expression a second time contracts and gives , with the resulting map equal to .   The reflexive subcategory need not be closed under tensor products or infinite coproducts. These are additional questions about and the category. It need not consist of the dualizable objects. Even the unit need not be -reflexive: its bidual map is the homothety , so its invertibility is a condition on . The term “dualizing complex” in geometric or commutative-algebra sources often includes boundedness, finiteness, and injective-dimension assumptions. Our phrase “dualizing object for a specified subcategory” states only the categorical duality property; it does not include those extra conditions.   In for a field , let have one copy of in every nonnegative degree and zero differential. Its Hom dual into has one copy in every nonpositive degree. Double duality is an isomorphism in each degree, so is an isomorphism.  It is not compact: , and its identity cannot factor through a finite partial sum, since such a factorization would act as zero on its cohomology in sufficiently large degree. Compactness of the unit and show that it is not dualizable. Biduality with respect to the unit therefore does not imply dualizability, even for complexes of vector spaces. Dualizability requires finite-dimensional total cohomology here, rather than finite dimension separately in each degree.  Both and are reflexive, but is not: its degree-zero cohomology is the infinite direct sum of copies of , which is not isomorphic to its algebraic bidual by the evaluation map. The infinite coproduct of copies of gives the same failure of closure under coproducts.     Compactness and perfect complexes  Compactness concerns coproducts and Hom sets. Dualizability concerns the tensor product. A hypothesis about the unit relates them.  Both properties were needed separately in the earlier chapters. Duality moves a tensor factor across Hom without changing the category; compactness moves Hom across a coproduct. A formula involving both operations must justify both moves. In particular, an exact strong monoidal functor preserves dualizable objects, whereas preservation of compact objects is governed by the coproduct behavior of its right adjoint, as in .    Assume has small coproducts.   If is compact, every dualizable object is compact.  If is compact and is compactly generated by dualizable objects, the compact and dualizable objects coincide.     For a dualizable object , the formula proves the first assertion: tensor preserves coproducts and the unit is compact. For the second, the description of compact objects in says that they form the thick closure of the given compact generators. Use .    A closed symmetric monoidal triangulated category with compact unit, small coproducts, and a small set of dualizable compact generators is often called rigidly compactly generated . In that terminology the equality of compact and dualizable objects is the conclusion of the proposition, not an additional finiteness condition on every object of the large category. The compact subcategory is thick and closed under tensoring its own objects. It is not generally a tensor ideal of the large category: if it contained the unit and were closed under tensoring with every large object, it would contain every object.   For a commutative ring , the compact objects of are precisely the perfect complexes, and is a compact generator. Since is dualizable, the proposition identifies dualizable objects with perfect complexes. A bounded complex of finitely generated projective modules has dual given by its Hom complex into . Finite projectivity ensures that the Hom–tensor comparison is an isomorphism; boundedness makes the sums in tensor totalization and the products in Hom totalization finite in each degree.    Let be an infinite set and use componentwise tensor on . Its unit is the constant family , so it is dualizable. Let be in component and zero elsewhere. Then , while   The unit is not compact. This example isolates the role of the compact-unit hypothesis.   More generally, in that product category an object is dualizable precisely when every component is perfect, with no bound on the number of nonzero components. Compactness instead requires finite support and a compact object in every component: apply compactness to the coproduct decomposition by components, and then test the surviving components separately. Thus the two classes differ by an explicit support condition. This example is categorical and does not depend on a geometric construction.    Tensor-compatible localization   Suppose has compact unit and is compactly generated by dualizable objects. Let be a localizing tensor ideal, meaning that whenever and . If is generated as a localizing subcategory by a small set of compact objects, its localization satisfies a natural isomorphism Under this isomorphism the unit is .  The localization exists and is smashing by . If is dualizable and is local, then is local: for , the group vanishes because is a tensor ideal. In particular is local. The objects for which is local form a localizing subcategory: tensor is exact and preserves coproducts, and the local objects are closed under coproducts because the localization is smashing. They contain the dualizable generators, so this holds for all . Tensor the localization triangle of the unit with . Its acyclic term belongs to , while its last term is local by the preceding argument. It is therefore the localization triangle of , by the universal property of reflection. That property supplies the natural isomorphism and identifies the unit.   The tensor ideal assumption and compact generation of the kernel have separate roles. The first makes the tensor of an acyclic object acyclic; the second gives existence and coproduct closure of local objects. A coproduct-preserving localization without a tensor ideal hypothesis does not acquire the displayed formula from its name. This statement is an application of duality, compact generation, and localization, rather than a new construction of all indexed operations.    Trace and suspension  For a dualizable object and endomorphism , define its trace by Thus a trace takes values in , rather than in a field unless such a field has been identified. The triangle identities give cyclicity for maps , between dualizable objects. Tensor products multiply traces, and finite biproducts add them. These ordinary categorical trace properties are developed in .  For a perfect complex over a field, the trace of its identity is . Split the complex into its cohomology and contractible summands; the latter vanish in the derived category, and the Koszul symmetry contributes the sign on each shifted one-dimensional summand. This calculation explains why the suspension sign in the monoidal structure must be retained. A general additivity theorem for traces along distinguished triangles requires further compatibility of tensor products of triangles; it is not included among the assumptions used here.   "
},
{
  "id": "ha-c16-definition-structure",
  "level": "2",
  "url": "ha-c16.html#ha-c16-definition-structure",
  "type": "Definition",
  "number": "16.1",
  "title": "Monoidal triangulated structure.",
  "body": " Monoidal triangulated structure  Monoidal triangulated category Closed symmetric monoidal category   Let be a locally small triangulated category. An exact closed symmetric monoidal structure consists of a symmetric monoidal product , a unit , and internal Hom objects with natural bijections   We require tensor and internal Hom to be exact in each variable, internal Hom being contravariant in the first variable. Their specified suspension isomorphisms must respect the adjunction, associativity, and the unit. Moving two suspensions past each other introduces a minus sign. In particular, under the resulting identification , its symmetry is . We use these suspension conventions throughout this chapter.   "
},
{
  "id": "ha-c16-proposition-exactness",
  "level": "2",
  "url": "ha-c16.html#ha-c16-proposition-exactness",
  "type": "Proposition",
  "number": "16.2",
  "title": "",
  "body": "  In the structure of :   Tensoring with a fixed object preserves every coproduct that exists.  The functor is exact. Internal Hom is exact contravariantly in its first variable, with the usual reversal of a distinguished triangle.  There are natural isomorphisms , compatible with the suspension signs.     The first assertion follows because is a left adjoint. The second records the exactness required in the definition; exactness of also follows from adjoint exactness as in . The suspension formula follows by moving the shifts across the adjunction, with the chosen suspension isomorphisms.   "
},
{
  "id": "ha-c16-example-derived-ring",
  "level": "2",
  "url": "ha-c16.html#ha-c16-example-derived-ring",
  "type": "Example",
  "number": "16.3",
  "title": "",
  "body": " For a commutative ring , the unbounded derived category has tensor product , internal Hom , and unit . The symmetry on homogeneous tensors is . The resolutions constructed in are needed to define these operations on arbitrary unbounded complexes.  For a noncommutative ring, the tensor product of two left modules has no such definition in general. Bimodule tensor products still exist with their stated source and target rings; they do not turn into a symmetric monoidal category by omission of the right actions.  "
},
{
  "id": "ha-c16-definition-dual",
  "level": "2",
  "url": "ha-c16.html#ha-c16-definition-dual",
  "type": "Definition",
  "number": "16.4",
  "title": "Dualizable and invertible objects.",
  "body": " Dualizable and invertible objects  Dualizable object Invertible object   An object is dualizable if there is an object with evaluation and coevaluation maps   such that inserting and then applying gives the identity on and on . Associativity and unit isomorphisms are understood in these two triangle identities. An object is invertible if tensoring with it is an equivalence, or equivalently if it has a tensor inverse.   "
},
{
  "id": "ha-c16-proposition-dual-criterion",
  "level": "2",
  "url": "ha-c16.html#ha-c16-proposition-dual-criterion",
  "type": "Proposition",
  "number": "16.5",
  "title": "",
  "body": "  For , the following conditions are equivalent:   is dualizable.  is an isomorphism for every .  is an isomorphism.   When these conditions hold, , the canonical map is an isomorphism, and     Evaluation and coevaluation for a dual pair give the displayed adjunction by inserting coevaluation in one direction and applying evaluation in the other. The triangle identities show that these operations are inverse. Uniqueness of right adjoints identifies with , and evaluation identifies with .  The second condition implies the third. Under the third condition, the morphism corresponding to gives a coevaluation into ; compose with the symmetry to obtain a map into . The tensor–Hom adjunction makes the first triangle identity exactly the assertion that this map corresponds to . Applying the same adjunction to evaluation gives the second triangle identity. Thus is a dual. Applying uniqueness of duals to this pair proves the bidual assertion.   "
},
{
  "id": "ha-c16-proposition-thick",
  "level": "2",
  "url": "ha-c16.html#ha-c16-proposition-thick",
  "type": "Proposition",
  "number": "16.6",
  "title": "",
  "body": "  The dualizable objects contain the unit and are closed under shifts, finite sums, tensor products, and retracts. If two objects of a distinguished triangle are dualizable, so is the third.    The unit is its own dual. Duals of shifts and finite sums are obtained by shifting oppositely and taking the corresponding finite sum. The dual of is . A retract of a dualizable object has an invertible comparison , because this comparison is a retract of an isomorphism. For a triangle, compare the exact contravariant functors and . The maps give a morphism of triangles. Applying Hom and the five lemma proves that the third comparison is an isomorphism.   "
},
{
  "id": "ha-c16-definition-relative-duality",
  "level": "2",
  "url": "ha-c16.html#ha-c16-definition-relative-duality",
  "type": "Definition",
  "number": "16.7",
  "title": "Relative duality.",
  "body": " Relative duality  Reflexive object Dualizing object Bidual map   For , set . The evaluation map induces a canonical bidual map . We call  -reflexive when this map is an isomorphism. If a full subcategory is preserved by and all its objects are -reflexive, then is a dualizing object for .   "
},
{
  "id": "ha-c16-proposition-biduality",
  "level": "2",
  "url": "ha-c16.html#ha-c16-proposition-biduality",
  "type": "Proposition",
  "number": "16.8",
  "title": "",
  "body": " Let denote the bidual map. It satisfies The full subcategory of -reflexive objects is thick and preserved by . This functor is a duality on that subcategory. If is invertible, it is a dualizing object on the subcategory of dualizable objects.  The defining adjoint of is evaluation with its two factors interchanged. Evaluate the displayed composite on ; the two adjunction identities give evaluation itself, proving the identity by adjunction. If is invertible, so is , and the identity makes its inverse. This proves preservation. The map compares two exact covariant functors, so its isomorphism locus is closed under shifts and triangles by the five lemma and under retracts by taking retracts of the comparison. It is therefore thick. Biduality supplies the inverse equivalence. For invertible and dualizable , one has ; dualizing this expression a second time contracts and gives , with the resulting map equal to .  "
},
{
  "id": "ha-c16-example-reflexive-not-dualizable",
  "level": "2",
  "url": "ha-c16.html#ha-c16-example-reflexive-not-dualizable",
  "type": "Example",
  "number": "16.9",
  "title": "",
  "body": " In for a field , let have one copy of in every nonnegative degree and zero differential. Its Hom dual into has one copy in every nonpositive degree. Double duality is an isomorphism in each degree, so is an isomorphism.  It is not compact: , and its identity cannot factor through a finite partial sum, since such a factorization would act as zero on its cohomology in sufficiently large degree. Compactness of the unit and show that it is not dualizable. Biduality with respect to the unit therefore does not imply dualizability, even for complexes of vector spaces. Dualizability requires finite-dimensional total cohomology here, rather than finite dimension separately in each degree.  Both and are reflexive, but is not: its degree-zero cohomology is the infinite direct sum of copies of , which is not isomorphic to its algebraic bidual by the evaluation map. The infinite coproduct of copies of gives the same failure of closure under coproducts.  "
},
{
  "id": "ha-c16-proposition-compact",
  "level": "2",
  "url": "ha-c16.html#ha-c16-proposition-compact",
  "type": "Proposition",
  "number": "16.10",
  "title": "",
  "body": "  Assume has small coproducts.   If is compact, every dualizable object is compact.  If is compact and is compactly generated by dualizable objects, the compact and dualizable objects coincide.     For a dualizable object , the formula proves the first assertion: tensor preserves coproducts and the unit is compact. For the second, the description of compact objects in says that they form the thick closure of the given compact generators. Use .   "
},
{
  "id": "ha-c16-example-perfect",
  "level": "2",
  "url": "ha-c16.html#ha-c16-example-perfect",
  "type": "Example",
  "number": "16.11",
  "title": "",
  "body": " For a commutative ring , the compact objects of are precisely the perfect complexes, and is a compact generator. Since is dualizable, the proposition identifies dualizable objects with perfect complexes. A bounded complex of finitely generated projective modules has dual given by its Hom complex into . Finite projectivity ensures that the Hom–tensor comparison is an isomorphism; boundedness makes the sums in tensor totalization and the products in Hom totalization finite in each degree.  "
},
{
  "id": "ha-c16-example-noncompact-unit",
  "level": "2",
  "url": "ha-c16.html#ha-c16-example-noncompact-unit",
  "type": "Example",
  "number": "16.12",
  "title": "",
  "body": " Let be an infinite set and use componentwise tensor on . Its unit is the constant family , so it is dualizable. Let be in component and zero elsewhere. Then , while   The unit is not compact. This example isolates the role of the compact-unit hypothesis.  "
},
{
  "id": "ha-c16-proposition-tensor-localization",
  "level": "2",
  "url": "ha-c16.html#ha-c16-proposition-tensor-localization",
  "type": "Proposition",
  "number": "16.13",
  "title": "",
  "body": " Suppose has compact unit and is compactly generated by dualizable objects. Let be a localizing tensor ideal, meaning that whenever and . If is generated as a localizing subcategory by a small set of compact objects, its localization satisfies a natural isomorphism Under this isomorphism the unit is .  The localization exists and is smashing by . If is dualizable and is local, then is local: for , the group vanishes because is a tensor ideal. In particular is local. The objects for which is local form a localizing subcategory: tensor is exact and preserves coproducts, and the local objects are closed under coproducts because the localization is smashing. They contain the dualizable generators, so this holds for all . Tensor the localization triangle of the unit with . Its acyclic term belongs to , while its last term is local by the preceding argument. It is therefore the localization triangle of , by the universal property of reflection. That property supplies the natural isomorphism and identifies the unit.  "
},
{
  "id": "ha-c17",
  "level": "1",
  "url": "ha-c17.html",
  "type": "Chapter",
  "number": "17",
  "title": "Monoidal adjunctions and formal duality",
  "body": " Monoidal adjunctions and formal duality   We fix two closed symmetric monoidal categories and . A strong symmetric monoidal functor with a right adjoint already determines several comparison maps. A second adjoint pair supplies further comparisons only after an additional relation to tensor products has been given. We prove the formal implications and keep existence hypotheses separate.  The main sources are and . Most statements initially concern closed symmetric monoidal categories without triangulations. Exactness is required when we use triangles or coproducts to extend a result from generators.    Adjoint transposition of natural transformations  Before comparing the six functors, we record the transposition operation used to construct their maps. Let and be adjunctions, and let and . Their units and counits are denoted and .   Mates Mate of a natural transformation Adjoint transposition  The mate of is the transformation Conversely, the mate of is     These constructions give inverse bijections between the natural transformations of the two displayed types. They respect pasting of adjunction squares: the mate of a pasted square equals the corresponding pasted composite of mates, after inserting the indicated identity functors and adjunction comparisons.  Substitute the formula for into the second construction. Move the units and counits through the transformation by naturality. The two adjacent unit–counit pairs cancel by the triangle identities, leaving . The calculation starting from is the same with the two adjunctions interchanged. For pasting, the formulas for the units and counits of a composite adjunction are precisely the composites obtained by performing the two transpositions successively; substitution gives the stated compatibility.   An invertible transformation need not have an invertible mate in this general square. This operation moves only part of each composite across an adjunction. The ordinary base-change comparison in is a mate of an isomorphism of pullbacks, yet needs a base-change theorem to be invertible. There is a different special case: if are two left adjoints with right adjoints , an isomorphism induces an isomorphism between their entire right adjoints. Its inverse is obtained by transposing the inverse isomorphism. Both constructions are often called taking mates. Distinguishing an entire adjoint functor from one side of an adjunction square prevents an incorrect inference that every exchange map is invertible.  When all functors carry exact structures, the transformations used below are required to commute with their suspension comparisons. Adjoint transposition preserves this compatibility. The unit and counit identities then verify naturality, signs, and pasting for one specified construction, rather than permitting arbitrary isomorphisms with the same source and target.    One monoidal adjunction  Fix , with unit and counit . Internal Hom in the two categories is denoted by the same bracket, with its containing category determined by the arguments.    For and , there are canonical natural maps   The first makes lax symmetric monoidal. There is always a natural isomorphism   If is dualizable, then is dualizable, and and are isomorphisms for all .    The first map is adjoint to the tensor product of the two counits. The map is adjoint to   The map is adjoint, within , to the image under of evaluation. Associativity, unit, and symmetry for the lax structure follow by taking adjoints and using these properties for and the triangle identities.  To prove the internal Hom isomorphism, test against :   A strong symmetric monoidal functor takes evaluation, coevaluation, and their triangle identities to a dual pair. Thus . For dualizable , the tensor–Hom descriptions of identify with this isomorphism tensored with . For , the same duality adjunctions give   Following a morphism through these bijections gives the map constructed from the counit. Yoneda proves its invertibility.    We say that the projection formula for holds when is invertible for all its arguments. This property is stronger than the existence of the adjunction. The notation resembles a direct-image functor, but no map of spaces is being assumed. The symbols name a specified adjoint pair. Assertions about base change require a system of such pairs and comparison data, introduced in .   Let be a field extension, and take on derived categories. For and , the degree-zero instance of is   Every sequence in the image has all its coordinates in a finite-dimensional -subspace of : a tensor is a finite sum. The sequence has no such property. Thus is not an isomorphism. A strong monoidal left adjoint need not preserve internal Hom.     The second adjunction and the projection isomorphism   Fixed-functor duality data  Projection formula Verdier–Grothendieck context Grothendieck context Wirthmüller context   In addition to , suppose that has a right adjoint . We specify a natural isomorphism   It must respect the unit and associativity of the tensor action. Explicitly, start with . Apply and then . After the monoidal identifications, this composite must agree with . Its unit instance is the unit isomorphism. When the categories are triangulated, exact fixed-functor data also require these comparisons to respect the specified suspension isomorphisms in both variables.    The specified projection isomorphism is additional data. The two adjunctions alone do not construct it. This is the fixed-functor Verdier–Grothendieck context of . The separate condition , up to a specified compatible isomorphism, is called the Grothendieck context there; the condition leads to a Wirthmüller context.    The data of give natural isomorphisms     For the first isomorphism, test against :   For the second, test against and move tensor with across by the projection isomorphism. Both sides then represent . These bijections are natural, so Yoneda provides the stated isomorphisms.    The first isomorphism is an internal version of the adjunction . It is stronger than a bijection of morphism sets because it is an isomorphism of objects of . Its proof records precisely where the projection formula is used.   Start with the two adjunctions, before imposing a projection isomorphism. A natural family of maps determines by adjoint transposition natural families Specifying any one of these families specifies the other two. One family is invertible for every choice of its arguments if and only if the other two are invertible for every choice of their arguments.  Apply to the first map. The source and target of the induced map can be rewritten, by the two adjunctions and the tensor–Hom adjunction, as Naturality in and Yoneda give the first transposed family. Rewriting those same groups with as the testing object gives the second family. The inverse transposition reconstructs the original family. Invertibility for all testing objects is equivalent by Yoneda to invertibility of the corresponding object map. This proves the assertion about whole families; it does not claim that an arbitrary single component remains invertible under partial transposition. Compare .   The module-action coherence in the definition has corresponding internal Hom coherence after transposition. For example, moving across the exceptional functor agrees with moving and then . This is checked by applying the mate bijection to the tensor-action associativity diagram. It is not an extra choice of an unrelated isomorphism for each pair of objects.    Let be the counit. There is a natural map   adjoint to the composite   If is dualizable, then is an isomorphism. In particular, with , there is a natural isomorphism for dualizable .    For , duality and the two adjunctions give   The inverse bijection is induced by the stated counit composite. This identifies its representing isomorphism with .    The object need not be invertible and need not be dualizing for the whole category. Even when it is known, the formula for has just been proved for dualizable . Removing that restriction requires another hypothesis.    Representability and extension from generators    Suppose that is a compactly generated triangulated category, is triangulated with small coproducts, and is exact and preserves small coproducts. Then has a right adjoint. This conclusion does not provide a projection isomorphism.    For each , the functor is cohomological and takes coproducts to products. Brown representability, in the form stated in , represents it. The representing objects and uniqueness of representing morphisms give the right adjoint; see also .      Assume the fixed-functor data are exact monoidal triangulated data, is compactly generated by dualizable objects, and preserves small coproducts. Then is an isomorphism for every .    Fix . The objects on which is invertible form a triangulated subcategory by exactness and the five lemma. They form a localizing subcategory because both functors in this comparison preserve coproducts. The preceding proposition about dualizable arguments places all the stated generators in that subcategory. Generation proves the assertion.    A right adjoint does not in general preserve coproducts. Its preservation can be checked by compactness criteria from . Likewise, existence on an unbounded category does not imply preservation of a chosen bounded subcategory. These questions remain separate from the formal isomorphisms.    Descriptions using dualizing objects  Choose and set . The second isomorphism of gives   If and are dualities on specified full subcategories, and the displayed functors preserve those subcategories, this gives there. The first isomorphism similarly gives , provided the objects involved remain in the subcategories on which biduality holds. Thus the exceptional functors can sometimes be described using ordinary adjoints and duality. These formulas are conditional descriptions. Defining on arbitrary objects does not establish an adjunction unless the required biduality and preservation statements have been proved.   More explicitly, let and be full subcategories, preserved by their dualities . Assume take into and take into . Then on these subcategories there are natural isomorphisms   Apply to and use biduality in . For the second formula apply , then and biduality. The preservation hypotheses place every term of these substitutions in the stated biduality subcategory.    Let be a finite set, , and . Take to be the constant-family functor. Its right adjoint is product; finite product is finite sum, which is also its left adjoint. Set and . The projection isomorphism follows from distributivity over finite sums. All the fixed-functor data therefore exist, including when is empty. This model uses no sheaf theory.     Grothendieck and Wirthmüller comparisons  There are two different ways for the four intercategory functors to coincide in pairs. The direction of the resulting twist changes. We keep these cases separate, following .   Two special adjoint configurations   In a Grothendieck configuration, , and the canonical projection formula for holds. Thus take in the fixed-functor data.  In a Wirthmüller configuration, , and is closed symmetric monoidal: its internal Hom comparison is invertible for all arguments. Its adjoint projection comparison is then invertible; equivalently, the fixed-functor data may be taken with .    In the Grothendieck case, the previous theorem gives for dualizable . The twist occurs after pullback, in . If the right adjoint preserves coproducts and is generated by dualizable objects, the generation argument extends the formula to all . Neither invertibility of the twisting object nor its biduality on a chosen subcategory follows from this formula.  In the Wirthmüller case, that particular formula merely recovers . A different question asks whether the ordinary right adjoint can be expressed using the left adjoint, after a twist before applying it. Choose and an isomorphism . Define by the unit followed by . This gives a specified comparison   The object and the isomorphism are extra hypotheses. The map need not be invertible merely because is dualizable. This is one of the distinctions between the two configurations stressed in .   In this Wirthmüller configuration, is invertible if is a retract of and either or is dualizable. If, in addition, both functors and are exact and preserve coproducts, invertibility on a localizing generating set implies invertibility on all objects.  For , internal adjunction gives . The internal adjunction at the unit identifies with . The projection formula and identify the other side of with . Under these identifications the reverse comparison is the tensor–Hom evaluation comparison. It is invertible when either indicated object is dualizable. The unit–counit identities make it inverse to ; this is verified in . Retracts preserve invertibility. The last assertion is the natural-transformation test of .   This theorem twists an object of before direct image. The Grothendieck comparison twists the pullback of an object of . The two formulas therefore do not express the same theorem with exclamation marks moved between positions.    Counits and their compatibility with composition  The counit is the trace associated with this adjunction. It corresponds to , so it is determined once the adjunction is fixed. For composable exceptional functors and , the counit of their composite is   This formula follows from the composite adjunction, independently of any geometric interpretation. The unit has the reverse nested form. Taking these as the comparison conventions proves transitivity of traces and compatibility with the mate isomorphisms.  Setting gives in particular the trace . It need not be an isomorphism. Nor is it a numerical trace of an endomorphism from : it is a natural transformation between intercategory functors. A numerical pairing or integration formula results only after specifying a suitable base category, a coefficient object, and additional identifications.   "
},
{
  "id": "ha-c17-definition-mate",
  "level": "2",
  "url": "ha-c17.html#ha-c17-definition-mate",
  "type": "Definition",
  "number": "17.1",
  "title": "Mates.",
  "body": " Mates Mate of a natural transformation Adjoint transposition  The mate of is the transformation Conversely, the mate of is   "
},
{
  "id": "ha-c17-proposition-mates",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-mates",
  "type": "Proposition",
  "number": "17.2",
  "title": "",
  "body": " These constructions give inverse bijections between the natural transformations of the two displayed types. They respect pasting of adjunction squares: the mate of a pasted square equals the corresponding pasted composite of mates, after inserting the indicated identity functors and adjunction comparisons.  Substitute the formula for into the second construction. Move the units and counits through the transformation by naturality. The two adjacent unit–counit pairs cancel by the triangle identities, leaving . The calculation starting from is the same with the two adjunctions interchanged. For pasting, the formulas for the units and counits of a composite adjunction are precisely the composites obtained by performing the two transpositions successively; substitution gives the stated compatibility.  "
},
{
  "id": "ha-c17-proposition-one-pair",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-one-pair",
  "type": "Proposition",
  "number": "17.3",
  "title": "",
  "body": "  For and , there are canonical natural maps   The first makes lax symmetric monoidal. There is always a natural isomorphism   If is dualizable, then is dualizable, and and are isomorphisms for all .    The first map is adjoint to the tensor product of the two counits. The map is adjoint to   The map is adjoint, within , to the image under of evaluation. Associativity, unit, and symmetry for the lax structure follow by taking adjoints and using these properties for and the triangle identities.  To prove the internal Hom isomorphism, test against :   A strong symmetric monoidal functor takes evaluation, coevaluation, and their triangle identities to a dual pair. Thus . For dualizable , the tensor–Hom descriptions of identify with this isomorphism tensored with . For , the same duality adjunctions give   Following a morphism through these bijections gives the map constructed from the counit. Yoneda proves its invertibility.   "
},
{
  "id": "ha-c17-example-hom-comparison",
  "level": "2",
  "url": "ha-c17.html#ha-c17-example-hom-comparison",
  "type": "Example",
  "number": "17.4",
  "title": "",
  "body": " Let be a field extension, and take on derived categories. For and , the degree-zero instance of is   Every sequence in the image has all its coordinates in a finite-dimensional -subspace of : a tensor is a finite sum. The sequence has no such property. Thus is not an isomorphism. A strong monoidal left adjoint need not preserve internal Hom.  "
},
{
  "id": "ha-c17-definition-second-pair",
  "level": "2",
  "url": "ha-c17.html#ha-c17-definition-second-pair",
  "type": "Definition",
  "number": "17.5",
  "title": "Fixed-functor duality data.",
  "body": " Fixed-functor duality data  Projection formula Verdier–Grothendieck context Grothendieck context Wirthmüller context   In addition to , suppose that has a right adjoint . We specify a natural isomorphism   It must respect the unit and associativity of the tensor action. Explicitly, start with . Apply and then . After the monoidal identifications, this composite must agree with . Its unit instance is the unit isomorphism. When the categories are triangulated, exact fixed-functor data also require these comparisons to respect the specified suspension isomorphisms in both variables.   "
},
{
  "id": "ha-c17-proposition-internal-duality",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-internal-duality",
  "type": "Proposition",
  "number": "17.6",
  "title": "",
  "body": "  The data of give natural isomorphisms     For the first isomorphism, test against :   For the second, test against and move tensor with across by the projection isomorphism. Both sides then represent . These bijections are natural, so Yoneda provides the stated isomorphisms.   "
},
{
  "id": "ha-c17-proposition-projection-equivalences",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-projection-equivalences",
  "type": "Proposition",
  "number": "17.7",
  "title": "",
  "body": " Start with the two adjunctions, before imposing a projection isomorphism. A natural family of maps determines by adjoint transposition natural families Specifying any one of these families specifies the other two. One family is invertible for every choice of its arguments if and only if the other two are invertible for every choice of their arguments.  Apply to the first map. The source and target of the induced map can be rewritten, by the two adjunctions and the tensor–Hom adjunction, as Naturality in and Yoneda give the first transposed family. Rewriting those same groups with as the testing object gives the second family. The inverse transposition reconstructs the original family. Invertibility for all testing objects is equivalent by Yoneda to invertibility of the corresponding object map. This proves the assertion about whole families; it does not claim that an arbitrary single component remains invertible under partial transposition. Compare .  "
},
{
  "id": "ha-c17-proposition-twist",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-twist",
  "type": "Proposition",
  "number": "17.8",
  "title": "",
  "body": "  Let be the counit. There is a natural map   adjoint to the composite   If is dualizable, then is an isomorphism. In particular, with , there is a natural isomorphism for dualizable .    For , duality and the two adjunctions give   The inverse bijection is induced by the stated counit composite. This identifies its representing isomorphism with .   "
},
{
  "id": "ha-c17-proposition-brown",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-brown",
  "type": "Proposition",
  "number": "17.9",
  "title": "",
  "body": "  Suppose that is a compactly generated triangulated category, is triangulated with small coproducts, and is exact and preserves small coproducts. Then has a right adjoint. This conclusion does not provide a projection isomorphism.    For each , the functor is cohomological and takes coproducts to products. Brown representability, in the form stated in , represents it. The representing objects and uniqueness of representing morphisms give the right adjoint; see also .   "
},
{
  "id": "ha-c17-proposition-extension",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-extension",
  "type": "Proposition",
  "number": "17.10",
  "title": "",
  "body": "  Assume the fixed-functor data are exact monoidal triangulated data, is compactly generated by dualizable objects, and preserves small coproducts. Then is an isomorphism for every .    Fix . The objects on which is invertible form a triangulated subcategory by exactness and the five lemma. They form a localizing subcategory because both functors in this comparison preserve coproducts. The preceding proposition about dualizable arguments places all the stated generators in that subcategory. Generation proves the assertion.   "
},
{
  "id": "ha-c17-proposition-dualizing-restrictions",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-dualizing-restrictions",
  "type": "Proposition",
  "number": "17.11",
  "title": "",
  "body": " More explicitly, let and be full subcategories, preserved by their dualities . Assume take into and take into . Then on these subcategories there are natural isomorphisms   Apply to and use biduality in . For the second formula apply , then and biduality. The preservation hypotheses place every term of these substitutions in the stated biduality subcategory.  "
},
{
  "id": "ha-c17-example-finite-family",
  "level": "2",
  "url": "ha-c17.html#ha-c17-example-finite-family",
  "type": "Example",
  "number": "17.12",
  "title": "",
  "body": " Let be a finite set, , and . Take to be the constant-family functor. Its right adjoint is product; finite product is finite sum, which is also its left adjoint. Set and . The projection isomorphism follows from distributivity over finite sums. All the fixed-functor data therefore exist, including when is empty. This model uses no sheaf theory.  "
},
{
  "id": "ha-c17-definition-contexts",
  "level": "2",
  "url": "ha-c17.html#ha-c17-definition-contexts",
  "type": "Definition",
  "number": "17.13",
  "title": "Two special adjoint configurations.",
  "body": " Two special adjoint configurations   In a Grothendieck configuration, , and the canonical projection formula for holds. Thus take in the fixed-functor data.  In a Wirthmüller configuration, , and is closed symmetric monoidal: its internal Hom comparison is invertible for all arguments. Its adjoint projection comparison is then invertible; equivalently, the fixed-functor data may be taken with .   "
},
{
  "id": "ha-c17-proposition-wirthmuller",
  "level": "2",
  "url": "ha-c17.html#ha-c17-proposition-wirthmuller",
  "type": "Proposition",
  "number": "17.14",
  "title": "",
  "body": " In this Wirthmüller configuration, is invertible if is a retract of and either or is dualizable. If, in addition, both functors and are exact and preserve coproducts, invertibility on a localizing generating set implies invertibility on all objects.  For , internal adjunction gives . The internal adjunction at the unit identifies with . The projection formula and identify the other side of with . Under these identifications the reverse comparison is the tensor–Hom evaluation comparison. It is invertible when either indicated object is dualizable. The unit–counit identities make it inverse to ; this is verified in . Retracts preserve invertibility. The last assertion is the natural-transformation test of .  "
},
{
  "id": "ha-c18",
  "level": "1",
  "url": "ha-c18.html",
  "type": "Chapter",
  "number": "18",
  "title": "Indexed categories and the six operations",
  "body": " Indexed categories and the six operations   The adjunctions of concern one pair of categories. A six-operation system also varies those categories with a base object and compares operations around Cartesian squares. We give a classical version with explicit coherence requirements. It is sufficient for the formal results below and does not assert the existence of these data in an unspecified geometric setting.  For adjoint monoidal pseudofunctors and exchange transformations, the main reference is . The general fibred-category definitions and the exceptional operations in provide a more extensive treatment. Our definition omits the homotopy and geometric axioms used to construct motivic examples. For comparisons between formulations, see .    The base and the ordinary adjunction  Fix a category with pullbacks, and a class of its arrows containing all isomorphisms and stable under composition and pullback. Categories and index sets are taken in the size conventions of . For in , every base change therefore also lies in .   Indexed monoidal categories  Indexed monoidal category Pseudofunctor   An indexed exact closed symmetric monoidal category on consists of:   For each , an exact closed symmetric monoidal triangulated category , with tensor , unit , and internal Hom .  For each arrow , an exact strong symmetric monoidal functor .  Monoidal natural isomorphisms and . For three composable arrows, the two ways of applying the composition isomorphisms agree. Composing with an identity agrees with the identity isomorphisms.   We further require each to have a chosen right adjoint . Composition and identity isomorphisms for are the mates of those for .    The third condition is the pseudofunctor associativity and unit condition. It permits canonical identifications of iterated pullbacks while retaining the assertion that these are isomorphisms, not literal equalities. Taking mates makes the corresponding conditions for right adjoints consequences rather than additional independent choices.  Consider a Cartesian square   The equality gives . The ordinary exchange map   is its mate: it is adjoint under to   where the last map uses the counit for . The map exists for every Cartesian square. Its invertibility is a separate property of the square and the indexed system. A base-change theorem has two assertions: the comparison is a specified natural map, and that map is invertible under stated conditions. Listing two isomorphic-looking composites without specifying the comparison loses the compatibility needed for iteration.  The composition isomorphism for the right adjoints is likewise fixed, rather than chosen independently. For , the chain of adjunction bijections identifies the right adjoint of with , giving . The counit of this composite first applies the counit for inside , then the counit for . This determines the order of all ordinary direct-image compositors.  Pullbacks need not have been selected strictly associatively in the base category. For iterated pullbacks, the unique base isomorphism preserving all projections induces a monoidal equivalence of the corresponding fibres. All formulas involving an iterated Cartesian square include these base identifications. Treating them as notation is justified by their universal property, not by assuming the category of pullback choices is literally equal to the original base.    Exceptional operations and coherence   Six-operation data on  Six operations Exceptional direct image Exceptional inverse image Base change   In addition to , require the following data.   For every in , an exact adjunction . The functors have composition isomorphisms and identity isomorphisms satisfying associativity and units. Those for are their mates.  For every Cartesian square displayed above with , a natural isomorphism .  For and , a natural isomorphism .   These isomorphisms must respect the specified suspensions and satisfy the following compatibilities; every comparison is taken with the specified composition, unit, and monoidal isomorphisms.   For an identity square, is the identity comparison. For a horizontal or vertical pasting of Cartesian squares, applying the two exchange isomorphisms successively equals the exchange isomorphism of the outer square. Vertical pasting is required when both vertical arrows belong to .  For a fixed , the projection isomorphisms satisfy the unit and tensor-associativity conditions of . For composable , the projection isomorphism for equals the composite obtained by first moving the tensor factor through and then through . For an identity arrow it is the identity comparison.  In a Cartesian square, the following two maps from to agree. One applies followed by , using . The other applies followed by .     The word six counts the two operations within each fibre, tensor and internal Hom, and the four operations between fibres. On this abstract level all six symbols already denote the specified functors; an extra derived-functor decoration would not add information.  This is one version of a classical six-operation system. The allowed exceptional arrows and base-change squares have been fixed explicitly. Definitions in which fewer squares are allowed, or in which stronger descent or higher coherence is retained, describe different amounts of structure. Our definition does not identify them. The modern treatments reviewed by often retain stable enhancements. This chapter works with triangulated categories and stated natural isomorphisms. It makes no uniqueness assertion about enhancing these data or recovering all higher compatibilities from them.  The maps and are assumptions. They are not supplied by the existence of four adjoint functors. Brown representability can construct from a given exact under generation and coproduct hypotheses; it does not construct the exceptional direct images for all arrows, nor prove their base change.    Exchange maps and pasting  The coherence conditions specify usable equalities of maps. We spell out their two basic forms. Suppose and form the two successive pullbacks of , with vertical arrows and top maps . The ordinary exchange for the composite base change is   This equals by the unit–counit formulas. For exceptional direct image, replace by and the lower-star symbols by lower-shriek symbols. Equality with is the horizontal-pasting requirement in the definition.  For vertical pasting, take in and a base change . Denote the pullback of by , its map to by , and similarly use . The required composite is   It equals the exchange for the outer square. The same two formulas work for ordinary direct image with its canonical comparisons, regardless of their invertibility. Combining horizontal and vertical pasting gives the cube compatibility: changing the order of these two expansions does not change the comparison of the outer composites. The proof is the interchange law for natural transformations, followed by the stated composition isomorphisms. A diagram calculation may therefore subdivide a Cartesian rectangle without introducing a new comparison map.   For a square with , there is a natural map It is adjoint under to Its construction is compatible with successive base changes. Its invertibility is not among the axioms of the six-operation data.  The displayed map has the stated source and target, so adjunction supplies . For two successive squares, insert the formula for each map. Exceptional base-change pasting combines the two inverse factors; the counit identity for the composite adjunction combines the remaining factors. The resulting adjoint is the formula for the outer square. This is a partial mate, so the invertibility of alone does not prove its invertibility.     Mates, proper comparisons, and relative duality    For six-operation data, a Cartesian square with has a natural isomorphism   For each such there are also natural isomorphisms     The first map is the mate of between the entire right adjoints of its two sides. Its adjoint evaluation is where the last two arrows are the ordinary and exceptional counits. Both sides of are left adjoints, so the inverse isomorphism has the inverse mate. This distinguishes it from the partial mate . Pasting compatibility follows from compatibility of mates with composition. The internal Hom isomorphisms are the fixed-functor result of , applied in the two fibres.    The displayed mate involves and . It does not assert that . Other mixed exchange comparisons require their own hypotheses or constructions.   A comparison with ordinary direct image  Proper arrow Proper base change Ordinary direct image   One may add natural transformations for , compatible with identities and composition. For , this means that equals under the composition isomorphisms. Require also that, for each allowed Cartesian square, the composite equals . A chosen subclass , containing isomorphisms and stable under composition and pullback, is called the class of proper arrows for these data if is an isomorphism for every .    Here proper labels specified abstract structure. In an application one must compare that class with the geometric definition. For , the last compatibility proves that is invertible: both vertical comparisons and the exceptional base-change map are invertible. The projection formula for follows from that for if the comparison also respects their tensor-action maps.  The tensor compatibility just mentioned is the equation Its two sides map to . This condition connects the specified exceptional projection map to the ordinary comparison constructed from the counit. For proper arrows it lets one transport the exceptional formula to precisely that ordinary comparison, rather than just find an unspecified isomorphism between its two objects.  Under , the exceptional inverse image is a right adjoint of the ordinary direct image, as in the Grothendieck configuration. The identification uses the transported unit and counit. For an arbitrary arrow, a right adjoint of , if it exists, need not agree with : the latter was defined as right adjoint of . This distinction is present even before any geometric example is chosen.  Suppose now that has a terminal object and every structure arrow lies in . Define   Pseudofunctoriality gives for . The internal Hom isomorphisms give and . These formulas do not say that is a duality on all of . On specified subcategories preserved by the functors and satisfying biduality, they give the exceptional-functor descriptions of . The counit supplies the trace map; a formula for its value is additional information.  For a dualizable , there is also . The relative twisting object and the absolute object have different bases. They need not coincide. A special formula for one of them, preservation of a bounded subcategory, and biduality on that subcategory are additional assertions. None is part of the adjunction notation.    External products and an abstract Künneth isomorphism  Assume the terminal-object hypotheses just stated. For and , define the external product on by This differs from tensor within one fibre. Its base object is the product, and it uses the two pullback functors.   There is a natural isomorphism It is compatible with reassociation of three external factors, using the projection and base-change coherence of the six-operation data.  The product square identifies with by exceptional base change. Apply the projection isomorphism first to and then to to obtain The composite is the structure arrow of , giving the result. For three factors, projection associativity and Cartesian pasting identify the two expansions with the same composite. No interchange between an ordinary direct image and tensor is used.   This theorem is a statement in the coefficient category . Turning it into a direct-sum formula for individual cohomology groups requires whatever tensor cohomology theorem holds in that category. For example, over a general coefficient ring, derived tensor retains Tor terms. Those do not disappear from the formula because its proof uses only formal adjunctions.  One can define abstract ordinary and supported cohomology by and . Their comparison comes from , when that comparison is given. The internal duality isomorphism says Evaluation therefore gives a pairing between and . It is a dual-pair evaluation when is dualizable. Existence of this displayed internal Hom does not alone make the pairing perfect or its individual cohomology groups finite.    Localization at an abstract decomposition  Localization is extra structure on the base and on its coefficient categories. Fix arrows and in , designated as a decomposition. No topology on these objects is being defined. Suppose that the data include compatible identifications and .   Localization for a decomposition Localization, six operations  Require that be fully faithful, that , and that the adjunction maps extend to functorial distinguished triangles and If decompositions are to vary under base change, require their pullbacks to be designated decompositions. Compatibility of localization triangles means compatibility with the comparisons constructed from the adjunctions and exchange maps; it does not require every component of those comparison morphisms to be invertible.  For the tensor compatibility used below, require also that the counit satisfy , after the unit identifications. This specifies compatibility of the localization map with the exceptional tensor action.   For each designated decomposition these conditions are exactly a recollement of by and . They identify with and identify the quotient with . They also permit the gluing of t-structures from . A system can satisfy the six-operation definition without any designated decomposition, so this conclusion is an additional localization property.   For a localization decomposition, is a tensor ideal: if , then for every . The exceptional projection formula identifies with . If is proper and its comparison respects tensor as above, it similarly identifies with .  The kernel assertion follows from the strong monoidal isomorphism . For the other two assertions apply the indicated projection isomorphisms to the unit object on the source. Unit and counit compatibility identify the resulting maps with those in the first localization triangle.   The second localization triangle involves . Its analogous tensor description needs the ordinary projection formula for , which has not been assumed for arbitrary arrows. Thus one should not tensor the unit triangle and silently identify every resulting term with an ordinary direct-image localization. This is another place where lower star and lower shriek have different formal roles.  There is a similar distinction for base change. The first triangle uses and, with the proper comparison, , so exceptional base change compares it to the first triangle on the pulled-back decomposition by isomorphisms. The second uses and ; its comparison uses and , whose invertibility requires additional hypotheses. Requiring both triangles to be preserved isomorphically by every ordinary pullback would impose a stronger condition than the localization axioms stated here.    Constructing exceptional direct images from factorizations  A common construction begins with less than six operations. Suppose the base has two specified classes , thought of as open-like and proper-like arrows, and that every admits a factorization with and . Suppose is already defined for , while is the ordinary right adjoint for . A candidate is   The factorization is called a compactification relative to these classes. The notation does not give a compactification theorem. Existence of such factorizations, and the class of refinements allowed between them, must be specified for the chosen base.   Fix . Assume that its compactifications form a nonempty cofiltered category at a suitable universe scale. For every refinement , suppose there is a natural isomorphism , with identity and composition compatibility. Then choosing any compactification defines a functor independent of that choice up to the comparison isomorphisms. These comparisons satisfy the cocycle condition for three choices.  Choose a common refinement of . The two specified isomorphisms from its candidate functor define an isomorphism from the candidate for to that for . A further common refinement compares any two such constructions. If the refinement diagrams contain parallel arrows, cofilteredness supplies a further arrow equalizing them. Composition compatibility makes the two functor comparisons equal after that refinement, and hence equal. The same argument with three compactifications proves the cocycle identity.   For a refinement given by an arrow over , with and , its transition isomorphism would come from a support comparison . This support comparison is an actual theorem or input about the elementary functors; it does not follow from the written factorization equation. Proper base change, localization, and compatibility for a square mixing the two classes are typical hypotheses used to prove it.  The proposition settles only independence for one . To obtain the six-operation system one must additionally compare compactifications of composites, compare their base changes, verify projection formulas, and check that all comparison paths agree. Once exact preserving coproducts is available and the source fibres satisfy Brown representability, right adjoints exist. That last step still does not establish the earlier compactification and exchange assertions.  The construction by exceptional functoriality is developed in ; discusses the construction problem and its dependencies. Their existence theorems have further hypotheses on their indexed categories and geometric bases. We retain the factorization-independence argument here and leave those background theories to their own notes. This provides a place to insert a precise construction theorem later without treating a chosen formula as an already verified six-operation formalism.    A system indexed by sets   Let be a field and let be the category of finite sets, with all arrows. Put and use componentwise tensor and Hom. For , define   The adjunctions are the product and coproduct adjunctions. Composition isomorphisms regroup finite sums or products. In a Cartesian square, the fibre over is in bijection with the fibre of over its image in ; this bijection defines . The projection isomorphism distributes tensor over the indicated sum.  All coherence requirements can be checked on a single summand labelled by an element of a fibre. Pasting follows from composition of the fibre bijections. The two projection composites send each tensor in that summand to the same tensor in the same target summand. The coproduct universal property proves equality of these maps. Finite sum and product agree, giving ; one may take .  The same formulas give a system on small sets, using arbitrary coproducts and products of complexes of vector spaces. The natural map from a sum to a product supplies ; maps with finite fibres form a pullback-stable class . For with infinite, exceptional direct image is sum and ordinary direct image is product. They differ. Tensor preserves the first, while the map need not be invertible. Take and an infinite-dimensional : a sequence of linearly independent vectors is not in its image.   For a decomposition of a finite set , restriction to the two parts and extension by zero give a recollement. Its triangles split componentwise. This is an instance of the recollement of . The six functors in a recollement describe the gluing of three categories; they are not the list consisting of tensor, internal Hom, and the four indexed operations. In a general system, a localization or recollement statement must be added or proved. It is not a consequence of the six-operation data specified here.   "
},
{
  "id": "ha-c18-definition-indexed",
  "level": "2",
  "url": "ha-c18.html#ha-c18-definition-indexed",
  "type": "Definition",
  "number": "18.1",
  "title": "Indexed monoidal categories.",
  "body": " Indexed monoidal categories  Indexed monoidal category Pseudofunctor   An indexed exact closed symmetric monoidal category on consists of:   For each , an exact closed symmetric monoidal triangulated category , with tensor , unit , and internal Hom .  For each arrow , an exact strong symmetric monoidal functor .  Monoidal natural isomorphisms and . For three composable arrows, the two ways of applying the composition isomorphisms agree. Composing with an identity agrees with the identity isomorphisms.   We further require each to have a chosen right adjoint . Composition and identity isomorphisms for are the mates of those for .   "
},
{
  "id": "ha-c18-definition-six",
  "level": "2",
  "url": "ha-c18.html#ha-c18-definition-six",
  "type": "Definition",
  "number": "18.2",
  "title": "Six-operation data on <span class=\"process-math\">\\((\\mathcal B,E)\\)<\/span>.",
  "body": " Six-operation data on  Six operations Exceptional direct image Exceptional inverse image Base change   In addition to , require the following data.   For every in , an exact adjunction . The functors have composition isomorphisms and identity isomorphisms satisfying associativity and units. Those for are their mates.  For every Cartesian square displayed above with , a natural isomorphism .  For and , a natural isomorphism .   These isomorphisms must respect the specified suspensions and satisfy the following compatibilities; every comparison is taken with the specified composition, unit, and monoidal isomorphisms.   For an identity square, is the identity comparison. For a horizontal or vertical pasting of Cartesian squares, applying the two exchange isomorphisms successively equals the exchange isomorphism of the outer square. Vertical pasting is required when both vertical arrows belong to .  For a fixed , the projection isomorphisms satisfy the unit and tensor-associativity conditions of . For composable , the projection isomorphism for equals the composite obtained by first moving the tensor factor through and then through . For an identity arrow it is the identity comparison.  In a Cartesian square, the following two maps from to agree. One applies followed by , using . The other applies followed by .    "
},
{
  "id": "ha-c18-proposition-exceptional-pullback-map",
  "level": "2",
  "url": "ha-c18.html#ha-c18-proposition-exceptional-pullback-map",
  "type": "Proposition",
  "number": "18.3",
  "title": "",
  "body": " For a square with , there is a natural map It is adjoint under to Its construction is compatible with successive base changes. Its invertibility is not among the axioms of the six-operation data.  The displayed map has the stated source and target, so adjunction supplies . For two successive squares, insert the formula for each map. Exceptional base-change pasting combines the two inverse factors; the counit identity for the composite adjunction combines the remaining factors. The resulting adjoint is the formula for the outer square. This is a partial mate, so the invertibility of alone does not prove its invertibility.  "
},
{
  "id": "ha-c18-proposition-mates",
  "level": "2",
  "url": "ha-c18.html#ha-c18-proposition-mates",
  "type": "Proposition",
  "number": "18.4",
  "title": "",
  "body": "  For six-operation data, a Cartesian square with has a natural isomorphism   For each such there are also natural isomorphisms     The first map is the mate of between the entire right adjoints of its two sides. Its adjoint evaluation is where the last two arrows are the ordinary and exceptional counits. Both sides of are left adjoints, so the inverse isomorphism has the inverse mate. This distinguishes it from the partial mate . Pasting compatibility follows from compatibility of mates with composition. The internal Hom isomorphisms are the fixed-functor result of , applied in the two fibres.   "
},
{
  "id": "ha-c18-definition-support",
  "level": "2",
  "url": "ha-c18.html#ha-c18-definition-support",
  "type": "Definition",
  "number": "18.5",
  "title": "A comparison with ordinary direct image.",
  "body": " A comparison with ordinary direct image  Proper arrow Proper base change Ordinary direct image   One may add natural transformations for , compatible with identities and composition. For , this means that equals under the composition isomorphisms. Require also that, for each allowed Cartesian square, the composite equals . A chosen subclass , containing isomorphisms and stable under composition and pullback, is called the class of proper arrows for these data if is an isomorphism for every .   "
},
{
  "id": "ha-c18-proposition-kunneth",
  "level": "2",
  "url": "ha-c18.html#ha-c18-proposition-kunneth",
  "type": "Proposition",
  "number": "18.6",
  "title": "",
  "body": " There is a natural isomorphism It is compatible with reassociation of three external factors, using the projection and base-change coherence of the six-operation data.  The product square identifies with by exceptional base change. Apply the projection isomorphism first to and then to to obtain The composite is the structure arrow of , giving the result. For three factors, projection associativity and Cartesian pasting identify the two expansions with the same composite. No interchange between an ordinary direct image and tensor is used.  "
},
{
  "id": "ha-c18-definition-localization",
  "level": "2",
  "url": "ha-c18.html#ha-c18-definition-localization",
  "type": "Definition",
  "number": "18.7",
  "title": "Localization for a decomposition.",
  "body": " Localization for a decomposition Localization, six operations  Require that be fully faithful, that , and that the adjunction maps extend to functorial distinguished triangles and If decompositions are to vary under base change, require their pullbacks to be designated decompositions. Compatibility of localization triangles means compatibility with the comparisons constructed from the adjunctions and exchange maps; it does not require every component of those comparison morphisms to be invertible.  For the tensor compatibility used below, require also that the counit satisfy , after the unit identifications. This specifies compatibility of the localization map with the exceptional tensor action.  "
},
{
  "id": "ha-c18-proposition-localization-tensor",
  "level": "2",
  "url": "ha-c18.html#ha-c18-proposition-localization-tensor",
  "type": "Proposition",
  "number": "18.8",
  "title": "",
  "body": " For a localization decomposition, is a tensor ideal: if , then for every . The exceptional projection formula identifies with . If is proper and its comparison respects tensor as above, it similarly identifies with .  The kernel assertion follows from the strong monoidal isomorphism . For the other two assertions apply the indicated projection isomorphisms to the unit object on the source. Unit and counit compatibility identify the resulting maps with those in the first localization triangle.  "
},
{
  "id": "ha-c18-proposition-factorization-independence",
  "level": "2",
  "url": "ha-c18.html#ha-c18-proposition-factorization-independence",
  "type": "Proposition",
  "number": "18.9",
  "title": "",
  "body": " Fix . Assume that its compactifications form a nonempty cofiltered category at a suitable universe scale. For every refinement , suppose there is a natural isomorphism , with identity and composition compatibility. Then choosing any compactification defines a functor independent of that choice up to the comparison isomorphisms. These comparisons satisfy the cocycle condition for three choices.  Choose a common refinement of . The two specified isomorphisms from its candidate functor define an isomorphism from the candidate for to that for . A further common refinement compares any two such constructions. If the refinement diagrams contain parallel arrows, cofilteredness supplies a further arrow equalizing them. Composition compatibility makes the two functor comparisons equal after that refinement, and hence equal. The same argument with three compactifications proves the cocycle identity.  "
},
{
  "id": "ha-c18-example-finite-sets",
  "level": "2",
  "url": "ha-c18.html#ha-c18-example-finite-sets",
  "type": "Example",
  "number": "18.10",
  "title": "",
  "body": " Let be a field and let be the category of finite sets, with all arrows. Put and use componentwise tensor and Hom. For , define   The adjunctions are the product and coproduct adjunctions. Composition isomorphisms regroup finite sums or products. In a Cartesian square, the fibre over is in bijection with the fibre of over its image in ; this bijection defines . The projection isomorphism distributes tensor over the indicated sum.  All coherence requirements can be checked on a single summand labelled by an element of a fibre. Pasting follows from composition of the fibre bijections. The two projection composites send each tensor in that summand to the same tensor in the same target summand. The coproduct universal property proves equality of these maps. Finite sum and product agree, giving ; one may take .  The same formulas give a system on small sets, using arbitrary coproducts and products of complexes of vector spaces. The natural map from a sum to a product supplies ; maps with finite fibres form a pullback-stable class . For with infinite, exceptional direct image is sum and ordinary direct image is product. They differ. Tensor preserves the first, while the map need not be invertible. Take and an infinite-dimensional : a sequence of linearly independent vectors is not in its image.  "
},
{
  "id": "ha-exact",
  "level": "1",
  "url": "ha-exact.html",
  "type": "Appendix",
  "number": "A",
  "title": "Exact and quasi-abelian categories",
  "body": " Exact and quasi-abelian categories   Some additive categories have a useful class of short exact sequences without being abelian. An exact structure specifies which sequences may be used in extension and resolution arguments. A quasi-abelian category has kernels and cokernels and supplies such a structure through strict morphisms. We record these definitions and their relation, using finite filtered vector spaces to distinguish categorical monomorphisms from admissible ones.  The main sources are and . No general theory of derived categories of exact or quasi-abelian categories is assumed here.    A chosen class of exact sequences   Exact structures and admissible morphisms Exact category Conflation Admissible monomorphism Admissible epimorphism Inflation Deflation  Let be additive. A kernel–cokernel pair is a pair with and , in the sense of their universal properties. An exact structure is a class of these pairs, closed under isomorphism, satisfying:  The identity of zero is admissible both as an epimorphism and as a monomorphism.  Composites of admissible monomorphisms are admissible monomorphisms, and composites of admissible epimorphisms are admissible epimorphisms.  The pullback of an admissible epimorphism along any morphism exists and is an admissible epimorphism.  The pushout of an admissible monomorphism along any morphism exists and is an admissible monomorphism.  Here a morphism is an admissible monomorphism, or inflation , if it is the first map of a chosen pair, and an admissible epimorphism, or deflation , if it is the second. A chosen pair, written , is a conflation . The category together with this structure is an exact category.   The zeros in a conflation record its two universal properties. They do not assert that all morphisms in have kernels or cokernels. Even an existing kernel need not be admissible for the chosen structure. This is why an exact category consists of the additive category and the selected class of pairs. This version of Quillen's axioms is equivalent to the symmetric formulation in . Reducing the identity axioms to the zero object is justified in his Remark 2.4.   Every split short exact sequence is a conflation in any exact structure. Finite direct sums of conflations are conflations. An additive functor between exact categories is called exact if it takes conflations to conflations.  Pulling back the admissible identity of zero gives admissible identities on arbitrary objects. Their kernel pairs show that is admissible. Pushing this map out along gives the split sequence . The pushout and pullback axioms applied to the two summands, followed by composition of admissible maps, give finite direct sums of conflations. See for these elementary consequences.    Every additive category has the split exact structure, whose conflations are precisely the split short exact sequences. An abelian category has the exact structure consisting of all its short exact sequences. The same abelian category can therefore carry two different exact structures.  More generally, let be a full additive, extension-closed subcategory of an abelian category . The short exact sequences of with all three terms in give an exact structure on . For example, the pushout of an inflation has the same quotient and a new left term; extension-closure keeps its middle term in . The pullback argument is dual. Kernels or cokernels of arbitrary morphisms need not stay in .   Projectivity and injectivity in an exact category are relative to the chosen structure: projectives lift along deflations, and injectives extend along inflations. In the split exact structure every object is both projective and injective. Thus these words cannot be interpreted using all ambient epimorphisms or monomorphisms unless that is the specified exact structure.  The same distinction applies to acyclic complexes. An acyclic complex in an exact category has factorizations and conflations for every . In an abelian category with its usual exact structure, these are the usual cycle factorizations. A complex that is acyclic in a larger abelian category need not have its cycle objects or these conflations in the selected exact category. Resolution arguments must check this extra condition before being transferred.    Preabelian categories and strict morphisms   Preabelian categories, image, and coimage Preabelian category Strict morphism  An additive category is preabelian if every morphism has a kernel and a cokernel. For , define The morphism factors canonically as . It is strict if is an isomorphism. A strict monomorphism or strict epimorphism is a morphism with both stated properties.   All morphisms of an abelian category are strict. Conversely, a preabelian category in which all morphisms are strict is abelian. The strictness condition therefore isolates the image–coimage property used throughout the abelian theory. The factorization itself exists before strictness is imposed.   In a preabelian category, a monomorphism is strict if and only if it is a kernel of its cokernel; an epimorphism is strict if and only if it is a cokernel of its kernel. Every kernel is a strict monomorphism and every cokernel is a strict epimorphism.  For a monomorphism the coimage is its source, so strictness is exactly identification with the kernel of its cokernel. If and , then factors through . Consequently the kernel of factors through , and factors through that kernel because . The two kernel universal properties make these factorizations inverse. The epimorphism assertions are dual.   Every preabelian category has pullbacks and pushouts: they can be constructed as a kernel in a biproduct and a cokernel of a map into a biproduct. However, the existence of these finite limits and colimits does not say that strict epimorphisms or strict monomorphisms are preserved by them.    The canonical exact structure   Quasi-abelian categories Quasi-abelian category Strict short exact sequence  A preabelian category is quasi-abelian if every pullback of a strict epimorphism is a strict epimorphism, and every pushout of a strict monomorphism is a strict monomorphism. A strict short exact sequence is a kernel–cokernel pair, written .    The strict short exact sequences in a quasi-abelian category form an exact structure. Its inflations are precisely the strict monomorphisms, and its deflations are precisely the strict epimorphisms.  The preceding proposition identifies the two maps of a kernel–cokernel pair with strict monomorphisms and strict epimorphisms, and supplies the partner of each such map. The two base-change axioms are the quasi-abelian axioms. Strict monomorphisms and strict epimorphisms are closed under composition by . Identities and the zero sequence supply the zero axioms. This verifies the exact-category axioms; compare .   This canonical structure uses all kernel–cokernel pairs of the category. An arbitrary preabelian category need not satisfy the required stability axioms for those pairs. A quasi-abelian category may also be equipped with the smaller split exact structure, so the intended structure should still be stated when necessary.  Exactness of a functor for the canonical structures means preservation of strict short exact sequences. It does not automatically mean preservation of every kernel and cokernel. Schneiders distinguishes this from stronger exactness conditions; see . Outside abelian categories, “left exact” can mean preservation of all finite limits or preservation of an appropriate class of strict exact sequences. These are different requirements. We specify the preserved sequences when using such a functor.    Finite filtered vector spaces  Fix a field . Consider finite-dimensional vector spaces with increasing filtrations that are zero for sufficiently small and equal for sufficiently large . Morphisms preserve every filtration step. This increasing convention is convenient for the example; it is converted to the decreasing convention of by .   This category is quasi-abelian. For a filtered map , its kernel has the induced filtration on , and its cokernel has the quotient filtration on . Its coimage and image have underlying vector space , with filtrations and , respectively. Therefore A strict short exact sequence is precisely a short exact sequence of underlying vector spaces that is exact on every filtration step.  The induced and quotient filtrations have the kernel and cokernel universal properties, which gives the displayed coimage and image filtrations. A strict epimorphism is surjective on every filtration step. Given such an epimorphism and , form their ordinary pullback with its induced filtration in . An element in lifts using surjectivity of ; thus the pullback map is again surjective on every step. Dually, quotient filtrations on the ordinary pushout preserve strict monomorphisms. These verify the quasi-abelian axioms. The criterion for a strict short exact sequence follows from the kernel and quotient filtrations.   Let be the one-dimensional vector space with for and for . The identity of underlying vector spaces gives a filtered map . It is both a categorical monomorphism and a categorical epimorphism, but it is not an isomorphism: its inverse does not preserve filtration step zero. Its coimage is and its image is , so it is not strict. In particular this preabelian category is not abelian.   Chain conditions for strict subobjects Strict subobject Finite length, quasi-abelian  In a quasi-abelian category with its canonical exact structure, a strict subobject is represented by a strict monomorphism. An object is strictly noetherian or strictly artinian if its increasing or decreasing chains of strict subobjects stabilize, respectively. We say it has finite strict length if it satisfies both conditions.   A proper strict subobject of a finite filtered vector space has smaller underlying dimension: a strict map with bijective underlying linear map has a filtered inverse. Thus these objects have finite strict length, bounded by their dimensions. In contrast, is a nonstabilizing chain of categorical subobjects of , with every underlying map the identity. Its maps are not strict. Chain conditions on all categorical monomorphisms would give a different assertion. Sources often say simply “finite length” here, with strict subobjects understood. The abelian Jordan–Hölder statement in concerns all subobjects, since they are strict in an abelian category; it must not be transferred to an arbitrary exact structure without a separate theorem.  The filtered example explains the scope of the generalization. Kernels, cokernels, and an image factorization remain available, but only the strict maps give the exact sequences stable under the required changes of base. This supplies enough structure to formulate extensions and admissible resolutions while preserving the distinction from abelian homological algebra.   "
},
{
  "id": "ha-exact-definition",
  "level": "2",
  "url": "ha-exact.html#ha-exact-definition",
  "type": "Definition",
  "number": "A.1",
  "title": "Exact structures and admissible morphisms.",
  "body": " Exact structures and admissible morphisms Exact category Conflation Admissible monomorphism Admissible epimorphism Inflation Deflation  Let be additive. A kernel–cokernel pair is a pair with and , in the sense of their universal properties. An exact structure is a class of these pairs, closed under isomorphism, satisfying:  The identity of zero is admissible both as an epimorphism and as a monomorphism.  Composites of admissible monomorphisms are admissible monomorphisms, and composites of admissible epimorphisms are admissible epimorphisms.  The pullback of an admissible epimorphism along any morphism exists and is an admissible epimorphism.  The pushout of an admissible monomorphism along any morphism exists and is an admissible monomorphism.  Here a morphism is an admissible monomorphism, or inflation , if it is the first map of a chosen pair, and an admissible epimorphism, or deflation , if it is the second. A chosen pair, written , is a conflation . The category together with this structure is an exact category.  "
},
{
  "id": "ha-exact-basic",
  "level": "2",
  "url": "ha-exact.html#ha-exact-basic",
  "type": "Proposition",
  "number": "A.2",
  "title": "",
  "body": " Every split short exact sequence is a conflation in any exact structure. Finite direct sums of conflations are conflations. An additive functor between exact categories is called exact if it takes conflations to conflations.  Pulling back the admissible identity of zero gives admissible identities on arbitrary objects. Their kernel pairs show that is admissible. Pushing this map out along gives the split sequence . The pushout and pullback axioms applied to the two summands, followed by composition of admissible maps, give finite direct sums of conflations. See for these elementary consequences.  "
},
{
  "id": "ha-exact-examples",
  "level": "2",
  "url": "ha-exact.html#ha-exact-examples",
  "type": "Example",
  "number": "A.3",
  "title": "",
  "body": " Every additive category has the split exact structure, whose conflations are precisely the split short exact sequences. An abelian category has the exact structure consisting of all its short exact sequences. The same abelian category can therefore carry two different exact structures.  More generally, let be a full additive, extension-closed subcategory of an abelian category . The short exact sequences of with all three terms in give an exact structure on . For example, the pushout of an inflation has the same quotient and a new left term; extension-closure keeps its middle term in . The pullback argument is dual. Kernels or cokernels of arbitrary morphisms need not stay in .  "
},
{
  "id": "ha-exact-preabelian",
  "level": "2",
  "url": "ha-exact.html#ha-exact-preabelian",
  "type": "Definition",
  "number": "A.4",
  "title": "Preabelian categories, image, and coimage.",
  "body": " Preabelian categories, image, and coimage Preabelian category Strict morphism  An additive category is preabelian if every morphism has a kernel and a cokernel. For , define The morphism factors canonically as . It is strict if is an isomorphism. A strict monomorphism or strict epimorphism is a morphism with both stated properties.  "
},
{
  "id": "ha-exact-kernel-strictness",
  "level": "2",
  "url": "ha-exact.html#ha-exact-kernel-strictness",
  "type": "Proposition",
  "number": "A.5",
  "title": "",
  "body": " In a preabelian category, a monomorphism is strict if and only if it is a kernel of its cokernel; an epimorphism is strict if and only if it is a cokernel of its kernel. Every kernel is a strict monomorphism and every cokernel is a strict epimorphism.  For a monomorphism the coimage is its source, so strictness is exactly identification with the kernel of its cokernel. If and , then factors through . Consequently the kernel of factors through , and factors through that kernel because . The two kernel universal properties make these factorizations inverse. The epimorphism assertions are dual.  "
},
{
  "id": "ha-exact-quasi-definition",
  "level": "2",
  "url": "ha-exact.html#ha-exact-quasi-definition",
  "type": "Definition",
  "number": "A.6",
  "title": "Quasi-abelian categories.",
  "body": " Quasi-abelian categories Quasi-abelian category Strict short exact sequence  A preabelian category is quasi-abelian if every pullback of a strict epimorphism is a strict epimorphism, and every pushout of a strict monomorphism is a strict monomorphism. A strict short exact sequence is a kernel–cokernel pair, written .  "
},
{
  "id": "ha-exact-canonical-structure",
  "level": "2",
  "url": "ha-exact.html#ha-exact-canonical-structure",
  "type": "Proposition",
  "number": "A.7",
  "title": "",
  "body": " The strict short exact sequences in a quasi-abelian category form an exact structure. Its inflations are precisely the strict monomorphisms, and its deflations are precisely the strict epimorphisms.  The preceding proposition identifies the two maps of a kernel–cokernel pair with strict monomorphisms and strict epimorphisms, and supplies the partner of each such map. The two base-change axioms are the quasi-abelian axioms. Strict monomorphisms and strict epimorphisms are closed under composition by . Identities and the zero sequence supply the zero axioms. This verifies the exact-category axioms; compare .  "
},
{
  "id": "ha-exact-filtered-calculus",
  "level": "2",
  "url": "ha-exact.html#ha-exact-filtered-calculus",
  "type": "Proposition",
  "number": "A.8",
  "title": "",
  "body": " This category is quasi-abelian. For a filtered map , its kernel has the induced filtration on , and its cokernel has the quotient filtration on . Its coimage and image have underlying vector space , with filtrations and , respectively. Therefore A strict short exact sequence is precisely a short exact sequence of underlying vector spaces that is exact on every filtration step.  The induced and quotient filtrations have the kernel and cokernel universal properties, which gives the displayed coimage and image filtrations. A strict epimorphism is surjective on every filtration step. Given such an epimorphism and , form their ordinary pullback with its induced filtration in . An element in lifts using surjectivity of ; thus the pullback map is again surjective on every step. Dually, quotient filtrations on the ordinary pushout preserve strict monomorphisms. These verify the quasi-abelian axioms. The criterion for a strict short exact sequence follows from the kernel and quotient filtrations.  "
},
{
  "id": "ha-exact-strict-length",
  "level": "2",
  "url": "ha-exact.html#ha-exact-strict-length",
  "type": "Definition",
  "number": "A.9",
  "title": "Chain conditions for strict subobjects.",
  "body": " Chain conditions for strict subobjects Strict subobject Finite length, quasi-abelian  In a quasi-abelian category with its canonical exact structure, a strict subobject is represented by a strict monomorphism. An object is strictly noetherian or strictly artinian if its increasing or decreasing chains of strict subobjects stabilize, respectively. We say it has finite strict length if it satisfies both conditions.  "
},
{
  "id": "ha-concordance",
  "level": "1",
  "url": "ha-concordance.html",
  "type": "Appendix",
  "number": "B",
  "title": "Terminology and hypothesis comparisons",
  "body": " Terminology and hypothesis comparisons   Names and structures  This appendix collects distinctions used in the chapters. Each entry refers to the definition in the main text; it does not replace its hypotheses.   Exact category An abelian category has its usual exact sequences. A Quillen exact category is an additive category with a specified class of kernel–cokernel pairs satisfying exact-structure axioms; see . An exact category in the sense of Barr belongs to ordinary category theory and uses equivalence relations and their effective quotients. These are different uses of the same name. The full Quillen theory is developed in .  Tensor category We specify monoidal, symmetric, closed, linear, abelian, or rigid as separate conditions. The convention called tensor category in includes additional conditions; its finite tensor and fusion theories are more specialized. Our basic closed structures do not require all objects to be dualizable.  Hom and Ext The group , the complex , and an internal Hom object have distinct targets. For complexes, is sometimes defined to mean ; when this notation is used it extends the classical module- or object-valued Ext convention.  Acyclic and contractible Acyclic means zero cohomology; contractible means the identity is chain-homotopic to zero. Contractibility implies acyclicity. An acyclic complex can be nonzero in the homotopy category but is zero in the derived category.  Homology, cohomology, and co- These notes use cochain degrees, with of degree and under . This reindexing is distinct from passing to an opposite category. The conventions for resolutions, left and right derived functors, Ext, Tor, spectral sequences, and dual terminology are collected in .  Derived and classical derived functors A total derived functor takes values in a derived or triangulated category. Its individual cohomology functors recover classical derived functors under the stated hypotheses. Our universal comparison for a right derived functor has direction ; inspect the direction when comparing Kan-extension formulations.  Six functors Recollement involves the two adjoint triples connecting three categories. A six-operation framework involves tensor, internal Hom, and two adjoint pairs indexed by base morphisms. A recollement can express an additional localization property of a six-operation system; it does not specify that system on its own.     Conditions that must be checked separately   The Grothendieck condition supplies enough injectives and unbounded K-injective replacements. It does not specify a tensor product, enough projectives, or compact generators for the derived category.  K-flatness refers to a tensor product and an acyclic-test condition. A theorem giving K-flat replacements in modules does not by itself give them in every Grothendieck category carrying a tensor product.  A bounded object has bounded cohomology. A perfect object has a bounded finite projective model. A compact object is detected by preservation of coproducts by its representable functor. A dualizable object has a tensor dual. Over a commutative ring, the last three conditions agree in the usual unbounded derived category; in an arbitrary monoidal triangulated category they require separate comparisons.  A Verdier quotient is a localization at maps with prescribed cones. A right adjoint of its quotient functor, an exact localization endofunctor, and preservation of coproducts are further properties. A recollement requires additional adjoints on both sides.  A natural projection or base-change comparison is not an isomorphism without a theorem or an axiom. The class of base maps and the class of squares on which invertibility is asserted are part of a six-operation framework.  A formula established on an unbounded category need not preserve a bounded or finite subcategory. Restriction requires a separate boundedness, compactness, or finiteness argument.    "
},
{
  "id": "ha-references",
  "level": "1",
  "url": "ha-references.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Pramod N. Achar. Perverse Sheaves and Applications to Representation Theory . Mathematical Surveys and Monographs 258. American Mathematical Society, 2021. Book information .  Alexander A. Beilinson, Joseph Bernstein, and Pierre Deligne. Faisceaux pervers . Astérisque 100 (1982), 5–171. Author's copy .  George M. Bergman. On diagram-chasing in double complexes . Theory and Applications of Categories 26 (2012), no. 3, 60–96. Author's manuscript .  Theo Bühler. Exact Categories . Expositiones Mathematicae 28 (2010), 1–69. Author's manuscript .  Denis-Charles Cisinski and Frédéric Déglise. Triangulated Categories of Mixed Motives . Springer Monographs in Mathematics, 2019. Publisher ; Author's manuscript .  Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik. Tensor Categories . Mathematical Surveys and Monographs 205. American Mathematical Society, 2015. Authors' final version .  Halvard Fausk, Po Hu, and J. Peter May. Isomorphisms between left and right adjoints . Theory and Applications of Categories 11 (2003), 107–131. Journal ; Authors' revised text . Section references apply to the revised text.  Martin Gallauer. An introduction to six-functor formalisms . Lecture notes, 2021. Author's manuscript . Section references follow the December 2021 manuscript.  Pierre Gabriel. Des catégories abéliennes . Bulletin de la Société Mathématique de France 90 (1962), 323–448. Journal archive .  Sergei I. Gelfand and Yuri I. Manin. Methods of Homological Algebra . Second edition. Springer Monographs in Mathematics, 2003. Publisher .  Henning Krause. Localization theory for triangulated categories . Author's manuscript .  Masaki Kashiwara and Pierre Schapira. Categories and Sheaves . Grundlehren der mathematischen Wissenschaften 332. Springer, 2006. Publisher ; Authors' errata .  Masaki Kashiwara and Pierre Schapira. Sheaves on Manifolds . Grundlehren der mathematischen Wissenschaften 292. Springer, 1990. Chapter I supplies an additional comparison for homological conventions. Publisher .  Wen-Wei Li. Methods of Algebra, Volume II: Linear Algebra ( 代数学方法：卷二，线性代数 ; in Chinese). Higher Education Press, 2024. References follow the author's online version dated 20 October 2026. Author's text ; Versions and errata .  Joseph Lipman. Notes on Derived Functors and Grothendieck Duality . In Foundations of Grothendieck Duality for Diagrams of Schemes , Lecture Notes in Mathematics 1960, pages 1–259. Springer, 2009. Author's text .  Amnon Neeman. Triangulated Categories . Annals of Mathematics Studies 148. Princeton University Press, 2001. Publisher's edition .  Nicolas Spaltenstein. Resolutions of unbounded complexes . Compositio Mathematica 65 (1988), 121–154. Journal archive .  Jean-Pierre Schneiders. Quasi-abelian categories and sheaves . Mémoires de la Société Mathématique de France, nouvelle série, no. 76 (1999). Journal archive .  The Stacks Project Authors. The Stacks Project . Results are identified by stable tags; references checked 24 October 2026. Project .  Charles A. Weibel. An Introduction to Homological Algebra . Cambridge Studies in Advanced Mathematics 38. Cambridge University Press, 1994. Publisher .  Amnon Yekutieli. Derived Categories . Cambridge Studies in Advanced Mathematics 183. Cambridge University Press, 2019. Publisher ; Author's prepublication manuscript .  "
},
{
  "id": "ha-index",
  "level": "1",
  "url": "ha-index.html",
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
