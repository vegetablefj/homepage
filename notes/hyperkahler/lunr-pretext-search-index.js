var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "hkg-conventions",
  "level": "1",
  "url": "hkg-conventions.html",
  "type": "Chapter",
  "number": "0",
  "title": "Scope and conventions",
  "body": " Scope and conventions   These notes develop the geometry of smooth compact irreducible holomorphic symplectic manifolds, including their relation to hyperkähler metrics, their deformations and periods, and their realization as moduli spaces. The examples and moduli constructions are part of the theory: they explain which lattice classes, birational models, and fibrations actually occur.    Background and references  We assume differential forms and connections, compact Kähler Hodge theory, basic deformation theory, and the language of smooth projective varieties and coherent sheaves.  The foundational references are Beauville and Huybrechts . For global Torelli and monodromy we use Markman and Huybrechts ; for sheaf moduli we use Mukai, Yoshioka, and Huybrechts–Lehn. A citation to Huybrechts's Basic results with a subsection number refers to the linked 1997 preprint, unless stated otherwise. Its projectivity argument must be read with the erratum . The erratum corrects an auxiliary positivity assertion and the proof of projectivity. It does not retract the projectivity criterion.    Notation  Dimension means complex dimension. An IHS manifold is denoted by , with ; its underlying smooth manifold may be denoted by . The broader metric meaning of hyperkähler is defined in . A hyperkähler metric has real dimension . Projectivity is imposed only when stated.  We write for singular cohomology with coefficients in ; an omitted coefficient ring means . The superscript is the ordinary cohomological degree. The Hodge component is a subspace of . Products of cohomology classes are cup products; integrals mean evaluation on the complex orientation. Chern classes have .  The primitive integral Beauville–Bogomolov–Fujiki bilinear form is denoted by , and . We use the same symbol after extension of scalars. Its normalization and the Fujiki constant are fixed in . A rescaled form is written with a different symbol and its scaling factor is specified.  A holomorphic symplectic form is denoted by . It is chosen only up to a nonzero scalar unless a normalization is stated. A Kähler form and its cohomology class are both denoted by when no confusion is possible. For a hyperkähler metric, are parallel complex structures and are their Kähler forms.  For a compact Kähler manifold, is the group of holomorphic line bundles and . Its rank is the Picard number . For IHS manifolds , and the first Chern class identifies with ; this is proved in . A lattice is a free abelian group of finite rank with an integral nondegenerate symmetric bilinear form. When a Picard group is called a lattice, nondegeneracy of its restricted form must be checked: it can fail on a nonprojective manifold.   "
},
{
  "id": "hkg-metric",
  "level": "1",
  "url": "hkg-metric.html",
  "type": "Chapter",
  "number": "1",
  "title": "Hyperkähler metrics and holomorphic symplectic manifolds",
  "body": " Hyperkähler metrics and holomorphic symplectic manifolds   A hyperkähler structure describes one Riemannian metric through several compatible complex structures. A holomorphic symplectic structure starts with a complex manifold and a nondegenerate holomorphic two-form. For compact Kähler manifolds, the Calabi–Yau theorem connects these descriptions. Irreducible holomorphic symplectic manifolds correspond to the case of holonomy exactly .  The main references are and . Smooth manifolds are connected.    Quaternionic structures on an inner product space    A quaternionic Hermitian structure on a real vector space consists of a positive definite inner product and orthogonal endomorphisms satisfying The other multiplication rules follow: and . Equivalently, the quaternions act on , with their three standard imaginary units acting by .    Here orthogonality means , and similarly for . Since , it also gives . Thus are real alternating forms.   Let be quaternionic Hermitian. Then for an integer , and is an orthogonal direct sum of quaternionic lines. The orthogonal transformations commuting with form the compact symplectic group .   Choose a unit vector . The vectors are orthonormal. For example, ; all other pairings follow from the same skew-adjointness and multiplication rules. Their span is preserved by . Its orthogonal complement is also preserved: if lies in the complement and lies in the span, then . Induction gives the orthogonal decomposition and the dimension.  In a basis obtained this way, commuting with the quaternionic action is quaternionic linearity. Preserving is preservation of the corresponding quaternionic Hermitian inner product. Its group of isometries is the definition of the compact group . This group is different from the complex group , which preserves a nondegenerate alternating form on a complex vector space of dimension .    The three-dimensional real space has the ordered orthonormal basis . For , write . Quaternion multiplication gives Consequently, exactly when . If is an oriented orthonormal basis of , then is another quaternionic triple. This gives the sphere of complex structures and the rotations of a chosen triple without changing the inner product.  The space has quaternionic dimension , complex dimension for every induced , and real dimension .    Parallel structures and holonomy   A hyperkähler structure on a smooth manifold is a Riemannian metric with orthogonal endomorphisms of satisfying the quaternion relations and where is the Levi-Civita connection. A metric admitting such a triple is called a hyperkähler metric . Compactness and irreducibility are not part of this definition.   Fix . The holonomy group  consists of parallel transports around all piecewise smooth loops based at , viewed as orthogonal transformations of . The restricted holonomy group uses loops homotopic to the constant loop. Changing the base point conjugates these groups. On a simply connected manifold they agree.   A Riemannian manifold of real dimension admits a hyperkähler structure if and only if, after an orthogonal identification of one tangent space with a quaternionic Hermitian space, Containment of the restricted holonomy alone guarantees the structure on the universal cover, but need not make a chosen triple descend to .   A parallel endomorphism commutes with parallel transport around every loop. Thus a hyperkähler triple makes commute with , and identifies this centralizer with .  Conversely, choose a quaternionic triple on fixed by the holonomy. For a path from to , transport the three endomorphisms to . Two paths differ by a loop, and holonomy invariance makes their transports equal. This defines smooth parallel endomorphisms on . Their orthogonality and multiplication rules hold at and are preserved by parallel transport, so they hold everywhere. On the universal cover all loops downstairs arising from loops upstairs are null-homotopic; the same argument applies to restricted holonomy there.     Let be an orthogonal endomorphism of a Riemannian tangent bundle with and . Then is an integrable complex structure, and is Kähler for , with Kähler form .   The Levi-Civita connection is torsion free, so . Substitute this into the Nijenhuis tensor Move each through using . The terms cancel in pairs. Hence , and the Newlander–Nirenberg integrability theorem gives complex coordinates for ; see .  The form is parallel because and are parallel. For a torsion-free connection, exterior differentiation is the alternation of covariant differentiation, so . Orthogonality gives type , and for . These are the Kähler conditions.    Apply the lemma to for each . Thus a hyperkähler metric is Kähler for an entire sphere of induced complex structures. A hypercomplex structure only requires an integrable quaternionic triple; it does not include a metric for which all three structures are parallel. A quaternionic Kähler metric is a different notion, usually defined by holonomy contained in . There the three-dimensional bundle of quaternionic structures is preserved, but its individual local generators need not be parallel.   Let be hyperkähler. Then is a parallel holomorphic symplectic form on . The metric is Ricci flat.   The quaternion relations give Skew-symmetry gives the same identity in the second argument. Thus has type . It is parallel, so it is closed. The part of the induced connection on holomorphic forms is ; hence a parallel form is holomorphic.  Every vector of type has the form for a real vector . If for all vectors of type , type implies the same vanishing for arbitrary complexified vectors . Since , both and vanish for all real . This forces , proving nondegeneracy.  The top form is a nowhere vanishing parallel section of the canonical bundle. The connection on the canonical bundle is therefore flat. On a Kähler manifold its curvature is, up to the fixed factor and sign convention, the Ricci form. The Ricci form and hence the Ricci tensor vanish. This curvature identity is the local Kähler identity .      Holomorphic symplectic structures   A holomorphic symplectic manifold is a complex manifold with a holomorphic two-form such that and contraction is an isomorphism. We also use the term for when the form is understood or only its existence is asserted.   A nondegenerate alternating form exists only in even dimension. At a point, choose vectors with and all other basis pairings zero. The existence of such a basis follows by selecting one pair with nonzero pairing, splitting off its symplectic orthogonal complement, and repeating. In the dual basis, In particular, never vanishes and trivializes . Therefore in integral cohomology.  On a compact Kähler manifold every holomorphic differential form is closed. Indeed, a holomorphic -form is -closed, and its -adjoint is zero for bidegree reasons. The Kähler identity makes it -harmonic and therefore closed. This is why can formulate the compact definition using only a nondegenerate holomorphic two-form. Closedness is a separate condition without compact Kähler hypotheses. On , the holomorphic form is nondegenerate, but its exterior derivative is .   Let be holomorphic symplectic of dimension . Contraction and exterior multiplication give holomorphic bundle isomorphisms Consequently, for every . The odd Chern classes of vanish in integral cohomology.   The first isomorphism is nondegeneracy. For the second, contraction with the nowhere vanishing top form gives an isomorphism , and Composing with the inverse of proves the assertion. Sheaf cohomology preserves an isomorphism of sheaves.  More generally, the odd integral Chern classes of any complex symplectic bundle vanish. We prove this by induction on its even rank; compare . On the projective bundle of lines, the tautological line bundle is contained in its symplectic orthogonal . The quotient is symplectic of rank two less, and the form identifies with . The two resulting exact sequences give Induction makes every odd component zero. The projective bundle formula makes injective, so the odd Chern classes of vanish as well. Apply this to . Self-duality alone gives only . The alternating form gives integral vanishing, including possible two-torsion; see .    For compact Kähler , the degree-one isomorphism identifies with , the tangent space used in deformation theory.    The Calabi–Yau theorem and parallel forms   (Yau)  Let be a compact Kähler manifold with in . Every Kähler class contains the Kähler form of a unique Ricci-flat Kähler metric.   See and for this case of the Calabi–Yau theorem. Uniqueness is for the fixed complex structure and Kähler class.   (Bochner)  Let be compact Ricci-flat Kähler. Every holomorphic tensor formed from and is parallel. In particular, for , evaluation gives The group in this formula is the full holonomy group.   For the analytic assertion, see . The Bochner identity for a holomorphic tensor, integrated over the compact manifold, has zero curvature term when the Ricci tensor is zero and yields . The invariant-tensor description then follows by the parallel-transport construction in . Compactness is used in the integrated identity; a holomorphic tensor on a noncompact Ricci-flat Kähler manifold need not be parallel.   Let be compact Kähler and holomorphic symplectic. The Ricci-flat metric in any Kähler class admits a hyperkähler triple with first complex structure equal to the given complex structure of .   The form trivializes , so provides a Ricci-flat Kähler metric in the chosen class. By , write the parallel form as , with parallel real two-forms . Define skew-adjoint endomorphisms by The type identity gives and , so . Nondegeneracy of implies that is invertible: implies , hence both and vanish, and then .  The endomorphism is positive definite and self-adjoint. Let be its positive square root. Since is parallel, functional calculus makes parallel; it commutes with . Set Then , , and . Therefore is orthogonal, and obey the quaternion relations. All three are parallel, giving the required structure.    On a product, a holomorphic symplectic form can have different scales on different factors; the polar decomposition normalizes each parallel summand. When , the metric-compatible form differs from the chosen by a single nonzero scalar.    Products and irreducible factors   An irreducible holomorphic symplectic manifold , abbreviated IHS, is a simply connected compact Kähler manifold for which with everywhere nondegenerate. Its dimension is for some .   In this definition closedness follows from compact Kählerness. The word irreducible concerns the symplectic and holonomy decomposition; it does not merely mean that the underlying analytic space is irreducible. Every connected complex manifold is irreducible as a smooth analytic space, including a product of two K3 surfaces. Many algebraic-geometric papers use hyperkähler manifold as shorthand for IHS, often without choosing a metric. Differential-geometric papers frequently allow arbitrary hyperkähler metrics, including products and flat tori. We use IHS for the compact irreducible complex object and state explicitly when the broader metric meaning is intended.   (Beauville–Bogomolov)   Let be a compact Kähler manifold with in real cohomology. Its universal cover is biholomorphic to where each is simply connected and projective, of dimension , with trivial canonical bundle and for , and each is IHS. There is a finite étale cover where is a complex torus. Factors of dimension zero are omitted.  For a Ricci-flat Kähler metric on , the lifted metric has the corresponding de Rham product decomposition. The nonflat factors have holonomy and , respectively.    The complex-geometric statement is ; the metric statement is its Theorem 1 and the holonomy descriptions in §§3–4. The proof combines the Calabi–Yau theorem, de Rham splitting, the classification of irreducible Ricci-flat Kähler holonomy, and the structure of the fundamental group.  The factors are often called strict Calabi–Yau manifolds . The unqualified term Calabi–Yau has several conventions: it may only require trivial canonical bundle, may also require the vanishing of intermediate holomorphic forms, or may refer to a metric with special unitary holonomy. Under the first convention an IHS manifold is Calabi–Yau; under the strict convention in the decomposition theorem it is a different type of factor. The overlap is assigned to the symplectic factors, which explains the bound .   A compact Kähler holomorphic symplectic manifold has a finite étale cover of the form where is an even-dimensional complex torus with a nondegenerate translation-invariant holomorphic two-form and the are IHS. If the original manifold is simply connected, it is itself a product of IHS manifolds.   Pull back to the product cover in . Each simply connected compact Kähler factor has : its first Betti number is zero, and Hodge decomposition gives . Thus holomorphic two-forms have no mixed terms involving two different non-torus factors or one such factor and the torus. On a strict Calabi–Yau factor, because its dimension is at least three. A tangent vector in that factor would be in the kernel of the pulled-back form. Nondegeneracy therefore excludes all strict Calabi–Yau factors.  The remaining form is the sum of a form on and forms on the . It is nondegenerate on each factor separately. Holomorphic forms on a complex torus are translation invariant, as follows by lifting their coefficients to periodic holomorphic functions and using compactness. Hence has even dimension and the stated symplectic structure. If is simply connected, its universal cover is itself. The Euclidean factor in the universal-cover statement is absent because is compact, leaving the asserted product.     Let be the standard complex representation of , with invariant symplectic form . Then   Choose a unitary symplectic coframe with . A maximal compact torus acts on by inverse phases, independently for each . A basis wedge monomial fixed by all these phases must contain both or neither for every . There are no such monomials in odd degree. In degree , every invariant is a linear combination of Symplectic unitary transformations permute the pairs. Since the factors in this product have even degree, no signs appear when pairs are permuted. Invariance therefore makes all coefficients equal. The resulting sum is . Conversely, is invariant under the whole group, so this one-dimensional upper bound is attained.     Let be IHS of dimension . The Ricci-flat Kähler metric in every Kähler class has full holonomy exactly . Conversely, if a compact Riemannian manifold of real dimension has holonomy exactly , every complex structure in its induced sphere makes it IHS.   For the first implication, apply to . Simple connectedness removes the torus and the finite quotient. Each symplectic factor contributes a nonzero independent holomorphic two-form, so leaves only one factor. The metric part of then gives restricted holonomy . Full and restricted holonomy agree because is simply connected.  Conversely, gives a parallel quaternionic triple, and gives a holomorphic symplectic form for each induced complex structure. Since is connected, it is also the restricted holonomy. Its real representation on the tangent space is irreducible. Thus the product decomposition in has no flat factor and only one nonflat factor. By , this gives a finite étale cover with IHS.  The lifted metric on the simply connected cover has the same restricted, and hence full, holonomy . The Bochner principle and therefore give and Let be the Todd class of the tangent bundle. Hirzebruch–Riemann–Roch and give Hence , so is simply connected and therefore IHS.      Holomorphic forms and elementary consequences   Let be IHS of dimension . Then Consequently, The abelian group is torsion free.   Use a Ricci-flat metric in a Kähler class. Its holonomy is by . The Bochner principle and give the spaces of holomorphic forms. Hodge symmetry gives and , hence .  Simple connectedness implies and thus . The nonzero classes , , and a Kähler class lie in three different Hodge components of , so . Contraction with identifies holomorphic vector fields with holomorphic one-forms, and the latter vanish. Finally, the universal coefficient exact sequence has left term , so A compact smooth manifold has finitely generated homology, and this Hom group is free abelian.    Vanishing of odd-degree holomorphic forms does not imply vanishing of odd cohomology.   Let have its Euclidean metric and a standard quaternionic triple. All three endomorphisms are constant, so they are parallel. Every full lattice acts by translations preserving the metric and the triple. The quotient is compact hyperkähler with trivial holonomy. For each induced complex structure it is a complex torus of dimension , and No invariance of the lattice under multiplication by is needed: it is the translation action, whose differential is the identity, that must preserve the tensors. In dimension two this torus has , but its fundamental group is , so it is not IHS.    Let be K3 surfaces with Ricci-flat Kähler metrics. The product metric, with the componentwise quaternionic triple, is hyperkähler. Its holonomy is , a proper subgroup of , and The product is simply connected and holomorphic symplectic, but is not IHS. Thus both simple connectedness and the one-dimensional space of holomorphic two-forms have a role in the definition.   The induced sphere is attached to a quaternionic triple. On a flat metric, or a product with reducible holonomy, other parallel triples may give other induced spheres. In the irreducible case, the commutant of the standard action is the quaternion algebra, so the metric determines the sphere, while an oriented orthonormal basis of its imaginary part determines the ordered triple.   "
},
{
  "id": "hkg-def-quaternionic-hermitian",
  "level": "2",
  "url": "hkg-metric.html#hkg-def-quaternionic-hermitian",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A quaternionic Hermitian structure on a real vector space consists of a positive definite inner product and orthogonal endomorphisms satisfying The other multiplication rules follow: and . Equivalently, the quaternions act on , with their three standard imaginary units acting by .   "
},
{
  "id": "hkg-lemma-quaternionic-blocks",
  "level": "2",
  "url": "hkg-metric.html#hkg-lemma-quaternionic-blocks",
  "type": "Lemma",
  "number": "1.2",
  "title": "",
  "body": " Let be quaternionic Hermitian. Then for an integer , and is an orthogonal direct sum of quaternionic lines. The orthogonal transformations commuting with form the compact symplectic group .   Choose a unit vector . The vectors are orthonormal. For example, ; all other pairings follow from the same skew-adjointness and multiplication rules. Their span is preserved by . Its orthogonal complement is also preserved: if lies in the complement and lies in the span, then . Induction gives the orthogonal decomposition and the dimension.  In a basis obtained this way, commuting with the quaternionic action is quaternionic linearity. Preserving is preservation of the corresponding quaternionic Hermitian inner product. Its group of isometries is the definition of the compact group . This group is different from the complex group , which preserves a nondegenerate alternating form on a complex vector space of dimension .   "
},
{
  "id": "hkg-def-hyperkahler-metric",
  "level": "2",
  "url": "hkg-metric.html#hkg-def-hyperkahler-metric",
  "type": "Definition",
  "number": "1.3",
  "title": "",
  "body": " A hyperkähler structure on a smooth manifold is a Riemannian metric with orthogonal endomorphisms of satisfying the quaternion relations and where is the Levi-Civita connection. A metric admitting such a triple is called a hyperkähler metric . Compactness and irreducibility are not part of this definition.  "
},
{
  "id": "hkg-prop-holonomy-containment",
  "level": "2",
  "url": "hkg-metric.html#hkg-prop-holonomy-containment",
  "type": "Proposition",
  "number": "1.4",
  "title": "",
  "body": " A Riemannian manifold of real dimension admits a hyperkähler structure if and only if, after an orthogonal identification of one tangent space with a quaternionic Hermitian space, Containment of the restricted holonomy alone guarantees the structure on the universal cover, but need not make a chosen triple descend to .   A parallel endomorphism commutes with parallel transport around every loop. Thus a hyperkähler triple makes commute with , and identifies this centralizer with .  Conversely, choose a quaternionic triple on fixed by the holonomy. For a path from to , transport the three endomorphisms to . Two paths differ by a loop, and holonomy invariance makes their transports equal. This defines smooth parallel endomorphisms on . Their orthogonality and multiplication rules hold at and are preserved by parallel transport, so they hold everywhere. On the universal cover all loops downstairs arising from loops upstairs are null-homotopic; the same argument applies to restricted holonomy there.   "
},
{
  "id": "hkg-lemma-parallel-complex",
  "level": "2",
  "url": "hkg-metric.html#hkg-lemma-parallel-complex",
  "type": "Lemma",
  "number": "1.5",
  "title": "",
  "body": " Let be an orthogonal endomorphism of a Riemannian tangent bundle with and . Then is an integrable complex structure, and is Kähler for , with Kähler form .   The Levi-Civita connection is torsion free, so . Substitute this into the Nijenhuis tensor Move each through using . The terms cancel in pairs. Hence , and the Newlander–Nirenberg integrability theorem gives complex coordinates for ; see .  The form is parallel because and are parallel. For a torsion-free connection, exterior differentiation is the alternation of covariant differentiation, so . Orthogonality gives type , and for . These are the Kähler conditions.   "
},
{
  "id": "hkg-prop-hk-symplectic-form",
  "level": "2",
  "url": "hkg-metric.html#hkg-prop-hk-symplectic-form",
  "type": "Proposition",
  "number": "1.6",
  "title": "",
  "body": " Let be hyperkähler. Then is a parallel holomorphic symplectic form on . The metric is Ricci flat.   The quaternion relations give Skew-symmetry gives the same identity in the second argument. Thus has type . It is parallel, so it is closed. The part of the induced connection on holomorphic forms is ; hence a parallel form is holomorphic.  Every vector of type has the form for a real vector . If for all vectors of type , type implies the same vanishing for arbitrary complexified vectors . Since , both and vanish for all real . This forces , proving nondegeneracy.  The top form is a nowhere vanishing parallel section of the canonical bundle. The connection on the canonical bundle is therefore flat. On a Kähler manifold its curvature is, up to the fixed factor and sign convention, the Ricci form. The Ricci form and hence the Ricci tensor vanish. This curvature identity is the local Kähler identity .   "
},
{
  "id": "hkg-def-holomorphic-symplectic",
  "level": "2",
  "url": "hkg-metric.html#hkg-def-holomorphic-symplectic",
  "type": "Definition",
  "number": "1.7",
  "title": "",
  "body": " A holomorphic symplectic manifold is a complex manifold with a holomorphic two-form such that and contraction is an isomorphism. We also use the term for when the form is understood or only its existence is asserted.  "
},
{
  "id": "hkg-prop-symplectic-bundle-consequences",
  "level": "2",
  "url": "hkg-metric.html#hkg-prop-symplectic-bundle-consequences",
  "type": "Proposition",
  "number": "1.8",
  "title": "",
  "body": " Let be holomorphic symplectic of dimension . Contraction and exterior multiplication give holomorphic bundle isomorphisms Consequently, for every . The odd Chern classes of vanish in integral cohomology.   The first isomorphism is nondegeneracy. For the second, contraction with the nowhere vanishing top form gives an isomorphism , and Composing with the inverse of proves the assertion. Sheaf cohomology preserves an isomorphism of sheaves.  More generally, the odd integral Chern classes of any complex symplectic bundle vanish. We prove this by induction on its even rank; compare . On the projective bundle of lines, the tautological line bundle is contained in its symplectic orthogonal . The quotient is symplectic of rank two less, and the form identifies with . The two resulting exact sequences give Induction makes every odd component zero. The projective bundle formula makes injective, so the odd Chern classes of vanish as well. Apply this to . Self-duality alone gives only . The alternating form gives integral vanishing, including possible two-torsion; see .   "
},
{
  "id": "hkg-thm-yau",
  "level": "2",
  "url": "hkg-metric.html#hkg-thm-yau",
  "type": "Theorem",
  "number": "1.9",
  "title": "(Yau).",
  "body": " (Yau)  Let be a compact Kähler manifold with in . Every Kähler class contains the Kähler form of a unique Ricci-flat Kähler metric.  "
},
{
  "id": "hkg-thm-bochner",
  "level": "2",
  "url": "hkg-metric.html#hkg-thm-bochner",
  "type": "Theorem",
  "number": "1.10",
  "title": "(Bochner).",
  "body": " (Bochner)  Let be compact Ricci-flat Kähler. Every holomorphic tensor formed from and is parallel. In particular, for , evaluation gives The group in this formula is the full holonomy group.  "
},
{
  "id": "hkg-prop-kahler-symplectic-metric",
  "level": "2",
  "url": "hkg-metric.html#hkg-prop-kahler-symplectic-metric",
  "type": "Proposition",
  "number": "1.11",
  "title": "",
  "body": " Let be compact Kähler and holomorphic symplectic. The Ricci-flat metric in any Kähler class admits a hyperkähler triple with first complex structure equal to the given complex structure of .   The form trivializes , so provides a Ricci-flat Kähler metric in the chosen class. By , write the parallel form as , with parallel real two-forms . Define skew-adjoint endomorphisms by The type identity gives and , so . Nondegeneracy of implies that is invertible: implies , hence both and vanish, and then .  The endomorphism is positive definite and self-adjoint. Let be its positive square root. Since is parallel, functional calculus makes parallel; it commutes with . Set Then , , and . Therefore is orthogonal, and obey the quaternion relations. All three are parallel, giving the required structure.   "
},
{
  "id": "hkg-def-ihs",
  "level": "2",
  "url": "hkg-metric.html#hkg-def-ihs",
  "type": "Definition",
  "number": "1.12",
  "title": "",
  "body": " An irreducible holomorphic symplectic manifold , abbreviated IHS, is a simply connected compact Kähler manifold for which with everywhere nondegenerate. Its dimension is for some .  "
},
{
  "id": "hkg-thm-bb-decomposition",
  "level": "2",
  "url": "hkg-metric.html#hkg-thm-bb-decomposition",
  "type": "Theorem",
  "number": "1.13",
  "title": "(Beauville–Bogomolov).",
  "body": " (Beauville–Bogomolov)   Let be a compact Kähler manifold with in real cohomology. Its universal cover is biholomorphic to where each is simply connected and projective, of dimension , with trivial canonical bundle and for , and each is IHS. There is a finite étale cover where is a complex torus. Factors of dimension zero are omitted.  For a Ricci-flat Kähler metric on , the lifted metric has the corresponding de Rham product decomposition. The nonflat factors have holonomy and , respectively.   "
},
{
  "id": "hkg-cor-symplectic-decomposition",
  "level": "2",
  "url": "hkg-metric.html#hkg-cor-symplectic-decomposition",
  "type": "Corollary",
  "number": "1.14",
  "title": "",
  "body": " A compact Kähler holomorphic symplectic manifold has a finite étale cover of the form where is an even-dimensional complex torus with a nondegenerate translation-invariant holomorphic two-form and the are IHS. If the original manifold is simply connected, it is itself a product of IHS manifolds.   Pull back to the product cover in . Each simply connected compact Kähler factor has : its first Betti number is zero, and Hodge decomposition gives . Thus holomorphic two-forms have no mixed terms involving two different non-torus factors or one such factor and the torus. On a strict Calabi–Yau factor, because its dimension is at least three. A tangent vector in that factor would be in the kernel of the pulled-back form. Nondegeneracy therefore excludes all strict Calabi–Yau factors.  The remaining form is the sum of a form on and forms on the . It is nondegenerate on each factor separately. Holomorphic forms on a complex torus are translation invariant, as follows by lifting their coefficients to periodic holomorphic functions and using compactness. Hence has even dimension and the stated symplectic structure. If is simply connected, its universal cover is itself. The Euclidean factor in the universal-cover statement is absent because is compact, leaving the asserted product.   "
},
{
  "id": "hkg-lemma-sp-invariant-exterior",
  "level": "2",
  "url": "hkg-metric.html#hkg-lemma-sp-invariant-exterior",
  "type": "Lemma",
  "number": "1.15",
  "title": "",
  "body": " Let be the standard complex representation of , with invariant symplectic form . Then   Choose a unitary symplectic coframe with . A maximal compact torus acts on by inverse phases, independently for each . A basis wedge monomial fixed by all these phases must contain both or neither for every . There are no such monomials in odd degree. In degree , every invariant is a linear combination of Symplectic unitary transformations permute the pairs. Since the factors in this product have even degree, no signs appear when pairs are permuted. Invariance therefore makes all coefficients equal. The resulting sum is . Conversely, is invariant under the whole group, so this one-dimensional upper bound is attained.   "
},
{
  "id": "hkg-thm-ihs-metric-equivalence",
  "level": "2",
  "url": "hkg-metric.html#hkg-thm-ihs-metric-equivalence",
  "type": "Theorem",
  "number": "1.16",
  "title": "",
  "body": " Let be IHS of dimension . The Ricci-flat Kähler metric in every Kähler class has full holonomy exactly . Conversely, if a compact Riemannian manifold of real dimension has holonomy exactly , every complex structure in its induced sphere makes it IHS.   For the first implication, apply to . Simple connectedness removes the torus and the finite quotient. Each symplectic factor contributes a nonzero independent holomorphic two-form, so leaves only one factor. The metric part of then gives restricted holonomy . Full and restricted holonomy agree because is simply connected.  Conversely, gives a parallel quaternionic triple, and gives a holomorphic symplectic form for each induced complex structure. Since is connected, it is also the restricted holonomy. Its real representation on the tangent space is irreducible. Thus the product decomposition in has no flat factor and only one nonflat factor. By , this gives a finite étale cover with IHS.  The lifted metric on the simply connected cover has the same restricted, and hence full, holonomy . The Bochner principle and therefore give and Let be the Todd class of the tangent bundle. Hirzebruch–Riemann–Roch and give Hence , so is simply connected and therefore IHS.   "
},
{
  "id": "hkg-prop-ihs-holomorphic-forms",
  "level": "2",
  "url": "hkg-metric.html#hkg-prop-ihs-holomorphic-forms",
  "type": "Proposition",
  "number": "1.17",
  "title": "",
  "body": " Let be IHS of dimension . Then Consequently, The abelian group is torsion free.   Use a Ricci-flat metric in a Kähler class. Its holonomy is by . The Bochner principle and give the spaces of holomorphic forms. Hodge symmetry gives and , hence .  Simple connectedness implies and thus . The nonzero classes , , and a Kähler class lie in three different Hodge components of , so . Contraction with identifies holomorphic vector fields with holomorphic one-forms, and the latter vanish. Finally, the universal coefficient exact sequence has left term , so A compact smooth manifold has finitely generated homology, and this Hom group is free abelian.   "
},
{
  "id": "hkg-example-flat-torus",
  "level": "2",
  "url": "hkg-metric.html#hkg-example-flat-torus",
  "type": "Example",
  "number": "1.18",
  "title": "",
  "body": " Let have its Euclidean metric and a standard quaternionic triple. All three endomorphisms are constant, so they are parallel. Every full lattice acts by translations preserving the metric and the triple. The quotient is compact hyperkähler with trivial holonomy. For each induced complex structure it is a complex torus of dimension , and No invariance of the lattice under multiplication by is needed: it is the translation action, whose differential is the identity, that must preserve the tensors. In dimension two this torus has , but its fundamental group is , so it is not IHS.  "
},
{
  "id": "hkg-example-product-k3",
  "level": "2",
  "url": "hkg-metric.html#hkg-example-product-k3",
  "type": "Example",
  "number": "1.19",
  "title": "",
  "body": " Let be K3 surfaces with Ricci-flat Kähler metrics. The product metric, with the componentwise quaternionic triple, is hyperkähler. Its holonomy is , a proper subgroup of , and The product is simply connected and holomorphic symplectic, but is not IHS. Thus both simple connectedness and the one-dimensional space of holomorphic two-forms have a role in the definition.  "
},
{
  "id": "hkg-bbf",
  "level": "1",
  "url": "hkg-bbf.html",
  "type": "Chapter",
  "number": "2",
  "title": "The BBF form and intersection theory",
  "body": " The BBF form and intersection theory   On a surface, the intersection of two degree-two classes is a number. On a -fold it is a degree-four class, so the same construction no longer gives a pairing on . For an IHS manifold, the top intersection polynomial is the -th power of a quadratic form, up to a positive constant. This form relates the Hodge decomposition, the positive cone, and the intersection theory of line bundles.    The quadratic form  Let be IHS of dimension . The group is torsion-free by . We distinguish a quadratic function from its polarized bilinear form by writing , with the convention    (Beauville–Bogomolov–Fujiki)  There is a nondegenerate symmetric integral bilinear form on , primitive and positive on Kähler classes, and a constant such that The form with these properties is unique. Both and are preserved by parallel transport in smooth families of IHS manifolds.   See and . Primitivity means that the values , for integral , generate , or equivalently that the entries of a Gram matrix have greatest common divisor one. The K3 intersection lattice is primitive and even: its pairings generate , while every square is even. Some authors formulate primitivity for an integral quadratic polynomial instead. The bilinear convention fixes the normalization used here.   For a nonzero integral class , its divisibility is the positive generator of the nonzero ideal . The class is primitive if with and an integer forces . A primitive class can have divisibility greater than one. Both its square and its divisibility are preserved by lattice isometries, hence by parallel transport.   Two forms satisfying the Fujiki identity have proportional -th powers as polynomials. Over , their quotient is therefore constant; positivity on a Kähler class makes the factor positive. Two proportional primitive integral Gram matrices have proportionality factor one, proving uniqueness. Evaluating on a rational class of nonzero square shows .  In a smooth proper family, local differentiable trivializations identify the integral cohomology groups and cup products of nearby fibers. Continuing these identifications along a path is called parallel transport . The polynomial is preserved by these identifications. The uniqueness just explained determines the pairing up to its sign. Positivity on a continuously varying local Kähler class fixes that sign along a path, giving the deformation invariance in the theorem.  For calculations with the Hodge decomposition, one may normalize by . The following expression is a positive multiple of : See for this analytic description. The notation retains the primitive integral normalization.   The decomposition is orthogonal except for the pairing of with . More precisely, In particular, is the orthogonal complement of .  Write with . In , type considerations eliminate the cross terms involving and one of . The first term contributes , and the product in the second term contributes . Consequently, It follows that and all the stated orthogonalities hold. Positive rescaling gives the assertions for . Nondegeneracy identifies the indicated orthogonal complement.     Polarization and signature  A pairing of indices is a partition of into unordered two-element sets. There are such pairings.   For , where runs through all pairings. In particular, for , When , the second identity means simply .  The two sides of are symmetric multilinear functions of variables. On the diagonal, the sum has identical terms , so the functions agree by . A symmetric multilinear function over a characteristic-zero field is determined by its diagonal polynomial: its value on is times the coefficient of in that polynomial evaluated at .  For the two remaining identities, differentiate . One derivative in gives the first identity after division by . A derivative in each of gives the second after division by .    The signature of on is , and its signature on is . For a Kähler class , the subspace equals , and is negative definite on it.  The first derivative identity and show that the two definitions of agree. On this subspace the second derivative identity reduces to The Hodge–Riemann bilinear relations make the left side negative for every nonzero real primitive class. The factor multiplying is positive. Since is a positive vector, the signature on follows.  Write with real. The identity gives and ; positivity of makes both squares positive. By , their plane is orthogonal to . These are the other two positive directions.   For , the BBF pairing is generally not a fixed multiple of on the whole space: the second term of must be included. It disappears on the primitive subspace.    Line bundles and the positive cone   For an IHS manifold, the first Chern class gives an isomorphism This group is free abelian, and .  The exponential sequence gives an exact sequence Hodge theory and simple connectedness give . The last map is projection to . An integral class is real, so its part vanishes if and only if both its and parts vanish. Thus the kernel is exactly the integral classes. Freeness follows from the torsion-freeness of .    The positive cone  is the connected component of containing a Kähler class. The Kähler cone  consists of the classes of Kähler forms.   The Kähler cone is convex: a positive linear combination of Kähler forms is Kähler. It is contained in one component of the positive-square locus, so is independent of the Kähler class chosen in its definition. There are exactly two components because the restricted form has signature .  The Kähler cone is open in . Choose closed real forms representing a basis of this space. Compactness ensures that adding a sufficiently small linear combination of these forms to a Kähler form preserves positivity. The sum is still closed, hence is Kähler.   Let . Then If , then . For , with equality exactly when are positive multiples of one another.  Choose orthogonal real coordinates in which the form is and the component containing is . The boundary has . In particular, a nonzero vector in its closure has strictly positive pairing with every vector in the open component. For the last assertion, scale to square one and decompose with . The complement of is negative definite, so ; here . Equality holds precisely when .    (Huybrechts)  An IHS manifold is projective if and only if there is a line bundle with .   See for the corrected proof. The forward implication follows by taking an ample line bundle. In the converse, the given or its dual need not be ample: its class can lie on a wall or in a different chamber.  For comparison, the Kodaira embedding theorem requires an integral Kähler class. Huybrechts's theorem starts with an integral Hodge class of positive BBF square. Moving from that weaker condition to projectivity is the geometric content of the theorem. The primitive integral form has signature on when is projective, because an ample class supplies the positive direction and its orthogonal complement is negative definite.  A real class is nef if it belongs to . Equivalently, for a Kähler class , its sum with is Kähler for every . A line bundle is nef if its first Chern class is nef.  The Picard group of a nonprojective IHS manifold need not contain a positive vector, and its restricted pairing can be negative definite or degenerate. The ambient group is always a nondegenerate lattice. In particular, the term Picard lattice requires care when the restricted form is degenerate.    Generalized Fujiki constants   Let and . Suppose its parallel transport has type on every sufficiently small deformation of . Then there is a constant such that In particular, . The same statement holds with real coefficients and a real constant.   See and ; an LLV proof is given in . The hypothesis requires Hodge type on all small deformations, not just on . Products of Chern classes of satisfy it because they are restrictions of the Chern classes of the relative tangent bundle.  If one replaces by , , while keeping the intersection identity, then This accounts for different numerical constants in references using the analytic form, an integral form, or a normalization adapted to Riemann–Roch.   For the same bilinear form, some references use the small Fujiki constant  . Beckmann–Song denote this smaller number by and our constant by ; see . For Hilbert schemes the small constant is one, whereas our constant is .    The inverse of the bilinear form is a tensor in . Its image under cup product is the inverse quadratic class  . In a basis , The tensor definition makes this independent of the basis.   The Hodge orthogonality in shows that has type . The pairing and cup product are preserved by parallel transport, so remains of that type on every deformation. Under a rescaling , its inverse class becomes .   For a class satisfying , with , Hence, for ,   Let , write , and apply the differential operator to . On its left side the result is Since and , the right side becomes Comparison gives the first formula. Repeated application with gives the second. This proof is a coordinate form of contraction by the inverse pairing; compare .     Riemann–Roch and isotropic classes  The odd Chern classes vanish by . Consequently the Todd class has only components ; in particular and .   There is a degree- polynomial such that Explicitly, Its leading coefficient is , and its constant coefficient is .  Hirzebruch–Riemann–Roch gives . The part of degree is Each Todd component is a polynomial in Chern classes and therefore satisfies the deformation hypothesis of . Applying that theorem gives . The leading coefficient is obtained from , and the constant term is , as in .   This is a polynomial identity for Euler characteristics. For an ample line bundle, Kodaira vanishing and give . Without a vanishing theorem, an Euler characteristic alone does not determine the number of sections.  The polynomial is constant on a deformation type. Indeed, parallel transport preserves , cup product, integration, and the Chern classes of the tangent bundle. It therefore preserves each polynomial occurring in its construction. The coefficients of are determined by these polynomials.   Let be a line bundle with nonzero class and . For every Kähler class , Thus its numerical dimension, defined by the largest with , is . Also for every integer .  Because is a nonzero vector in , gives . The Fujiki identity becomes The right side has degree in . Comparing coefficients yields both intersection assertions. The Euler-characteristic assertion follows by evaluating at .   If a positive power of is generated by global sections, its morphism has -dimensional image. This condition on is called semiampleness .   "
},
{
  "id": "hkg-bbf-existence",
  "level": "2",
  "url": "hkg-bbf.html#hkg-bbf-existence",
  "type": "Theorem",
  "number": "2.1",
  "title": "(Beauville–Bogomolov–Fujiki).",
  "body": " (Beauville–Bogomolov–Fujiki)  There is a nondegenerate symmetric integral bilinear form on , primitive and positive on Kähler classes, and a constant such that The form with these properties is unique. Both and are preserved by parallel transport in smooth families of IHS manifolds.  "
},
{
  "id": "hkg-polarization-topology-anchor",
  "level": "2",
  "url": "hkg-bbf.html#hkg-polarization-topology-anchor",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": " For a nonzero integral class , its divisibility is the positive generator of the nonzero ideal . The class is primitive if with and an integer forces . A primitive class can have divisibility greater than one. Both its square and its divisibility are preserved by lattice isometries, hence by parallel transport.  "
},
{
  "id": "hkg-bbf-hodge",
  "level": "2",
  "url": "hkg-bbf.html#hkg-bbf-hodge",
  "type": "Proposition",
  "number": "2.3",
  "title": "",
  "body": " The decomposition is orthogonal except for the pairing of with . More precisely, In particular, is the orthogonal complement of .  Write with . In , type considerations eliminate the cross terms involving and one of . The first term contributes , and the product in the second term contributes . Consequently, It follows that and all the stated orthogonalities hold. Positive rescaling gives the assertions for . Nondegeneracy identifies the indicated orthogonal complement.  "
},
{
  "id": "hkg-bbf-polarized",
  "level": "2",
  "url": "hkg-bbf.html#hkg-bbf-polarized",
  "type": "Proposition",
  "number": "2.4",
  "title": "",
  "body": " For , where runs through all pairings. In particular, for , When , the second identity means simply .  The two sides of are symmetric multilinear functions of variables. On the diagonal, the sum has identical terms , so the functions agree by . A symmetric multilinear function over a characteristic-zero field is determined by its diagonal polynomial: its value on is times the coefficient of in that polynomial evaluated at .  For the two remaining identities, differentiate . One derivative in gives the first identity after division by . A derivative in each of gives the second after division by .  "
},
{
  "id": "hkg-bbf-signature",
  "level": "2",
  "url": "hkg-bbf.html#hkg-bbf-signature",
  "type": "Proposition",
  "number": "2.5",
  "title": "",
  "body": " The signature of on is , and its signature on is . For a Kähler class , the subspace equals , and is negative definite on it.  The first derivative identity and show that the two definitions of agree. On this subspace the second derivative identity reduces to The Hodge–Riemann bilinear relations make the left side negative for every nonzero real primitive class. The factor multiplying is positive. Since is a positive vector, the signature on follows.  Write with real. The identity gives and ; positivity of makes both squares positive. By , their plane is orthogonal to . These are the other two positive directions.  "
},
{
  "id": "hkg-picard-identification",
  "level": "2",
  "url": "hkg-bbf.html#hkg-picard-identification",
  "type": "Proposition",
  "number": "2.6",
  "title": "",
  "body": " For an IHS manifold, the first Chern class gives an isomorphism This group is free abelian, and .  The exponential sequence gives an exact sequence Hodge theory and simple connectedness give . The last map is projection to . An integral class is real, so its part vanishes if and only if both its and parts vanish. Thus the kernel is exactly the integral classes. Freeness follows from the torsion-freeness of .  "
},
{
  "id": "hkg-positive-cone",
  "level": "2",
  "url": "hkg-bbf.html#hkg-positive-cone",
  "type": "Definition",
  "number": "2.7",
  "title": "",
  "body": " The positive cone  is the connected component of containing a Kähler class. The Kähler cone  consists of the classes of Kähler forms.  "
},
{
  "id": "hkg-positive-lorentz",
  "level": "2",
  "url": "hkg-bbf.html#hkg-positive-lorentz",
  "type": "Lemma",
  "number": "2.8",
  "title": "",
  "body": " Let . Then If , then . For , with equality exactly when are positive multiples of one another.  Choose orthogonal real coordinates in which the form is and the component containing is . The boundary has . In particular, a nonzero vector in its closure has strictly positive pairing with every vector in the open component. For the last assertion, scale to square one and decompose with . The complement of is negative definite, so ; here . Equality holds precisely when .  "
},
{
  "id": "hkg-projectivity-criterion",
  "level": "2",
  "url": "hkg-bbf.html#hkg-projectivity-criterion",
  "type": "Theorem",
  "number": "2.9",
  "title": "(Huybrechts).",
  "body": " (Huybrechts)  An IHS manifold is projective if and only if there is a line bundle with .  "
},
{
  "id": "hkg-generalized-fujiki",
  "level": "2",
  "url": "hkg-bbf.html#hkg-generalized-fujiki",
  "type": "Theorem",
  "number": "2.10",
  "title": "",
  "body": " Let and . Suppose its parallel transport has type on every sufficiently small deformation of . Then there is a constant such that In particular, . The same statement holds with real coefficients and a real constant.  "
},
{
  "id": "hkg-inverse-class",
  "level": "2",
  "url": "hkg-bbf.html#hkg-inverse-class",
  "type": "Definition",
  "number": "2.11",
  "title": "",
  "body": " The inverse of the bilinear form is a tensor in . Its image under cup product is the inverse quadratic class  . In a basis , The tensor definition makes this independent of the basis.  "
},
{
  "id": "hkg-inverse-contraction",
  "level": "2",
  "url": "hkg-bbf.html#hkg-inverse-contraction",
  "type": "Proposition",
  "number": "2.12",
  "title": "",
  "body": " For a class satisfying , with , Hence, for ,   Let , write , and apply the differential operator to . On its left side the result is Since and , the right side becomes Comparison gives the first formula. Repeated application with gives the second. This proof is a coordinate form of contraction by the inverse pairing; compare .  "
},
{
  "id": "hkg-rr-formula",
  "level": "2",
  "url": "hkg-bbf.html#hkg-rr-formula",
  "type": "Proposition",
  "number": "2.13",
  "title": "",
  "body": " There is a degree- polynomial such that Explicitly, Its leading coefficient is , and its constant coefficient is .  Hirzebruch–Riemann–Roch gives . The part of degree is Each Todd component is a polynomial in Chern classes and therefore satisfies the deformation hypothesis of . Applying that theorem gives . The leading coefficient is obtained from , and the constant term is , as in .  "
},
{
  "id": "hkg-nef-isotropic-dimension",
  "level": "2",
  "url": "hkg-bbf.html#hkg-nef-isotropic-dimension",
  "type": "Proposition",
  "number": "2.14",
  "title": "",
  "body": " Let be a line bundle with nonzero class and . For every Kähler class , Thus its numerical dimension, defined by the largest with , is . Also for every integer .  Because is a nonzero vector in , gives . The Fujiki identity becomes The right side has degree in . Comparing coefficients yields both intersection assertions. The Euler-characteristic assertion follows by evaluating at .  "
},
{
  "id": "hkg-twistor",
  "level": "1",
  "url": "hkg-twistor.html",
  "type": "Chapter",
  "number": "3",
  "title": "Twistor families",
  "body": " Twistor families   Fix a hyperkähler structure . Rotating through the induced sphere changes the complex structure while keeping the smooth manifold and metric fixed. The rotations form a holomorphic family over . Its period map is a conic in a three-dimensional subspace of , and this description determines exactly which degree-two integral classes remain of type .  The construction in the first three sections works without compactness or irreducibility. The period and Picard statements assume that the fibers are IHS, and use the Beauville–Bogomolov–Fujiki form from . We follow the coordinate convention of . The classical twistor construction is due to Hitchin, Karlhede, Lindström, and Roček; see .    The sphere and its holomorphic parameter  Write . The sphere of induced complex structures is , with . Each is integrable and is Kähler for it by . Identify the sphere with by the coordinate Thus correspond to , respectively. The antipodal map is .   For finite , a holomorphic symplectic form on is Its coefficients as a differential form on the fixed smooth manifold are holomorphic in . On the chart , use At this is , a holomorphic symplectic form for .   Let and . Define endomorphisms by the same coefficient rows that express the real and imaginary parts of : The row vectors have squared length before division by , and their pairwise dot products are zero. For example, the first and second have dot product The other two pairings follow by interchanging or by the same expansion. The matrix is orthogonal, and its determinant is , since the determinant is continuous and equals at . Thus it is a rotation. Formula makes a parallel orthogonal quaternionic triple.  Expanding the polynomial in gives Hence . The metric construction of proves that it is holomorphic symplectic for . The second chart formula and its value at infinity follow by multiplying the polynomial by .    The normalized form is compatible with the fixed metric; the polynomial varies holomorphically in . The signs depend on the stereographic coordinate and on whether the Kähler form is written or . Our conventions agree with , whose introduction explains its sign difference from HKLR.  At the two equatorial points above, the formula becomes and . This checks that rotating from to or cycles the three Kähler forms with the stated conventions.    The holomorphic family   On the smooth product , define the almost complex structure The resulting complex manifold, once integrability is established, is the twistor space . Projection is its twistor family .    Let be an almost complex structure on a smooth manifold of real dimension . If every point has a neighborhood with a nowhere vanishing closed form of type , then is integrable.   The subbundle consists precisely of the complexified tangent vectors satisfying . For local sections of this subbundle, Cartan's formula gives because . Thus is closed under the Lie bracket. The Newlander–Nirenberg theorem gives integrability.     The almost complex structure on is integrable. Projection is a holomorphic submersion with fiber . If is compact, is proper.   On the finite coordinate chart, regard as a two-form on vanishing on tangent vectors to the base. Its type is for . Hence has type and never vanishes. The three forms are closed on , and the coefficients of are polynomials in . Therefore The same computation with works near infinity. Apply .  The differential of intertwines with the standard complex structure on the base and is surjective, so is a holomorphic submersion. The induced structure on each fiber is its defining . For compact , projection from the smooth product is proper.    See for this differential-form proof and for the integrability theorem.  The smooth product gives flat identifications , while the Hodge decomposition varies with .   The local forms define a nowhere degenerate holomorphic section It is closed in the fiber directions. Consequently,   The transformation is the transition rule for a section twisted by . In each chart the form has relative type , and Its exterior derivative is zero after quotienting differential forms by those containing . Taking the component shows that its relative is zero, which proves holomorphicity as a relative form. The same identity gives relative closedness. Fiberwise nondegeneracy was proved in .  The exterior power is a nowhere vanishing section of . It trivializes that line bundle. Finally, the canonical-bundle formula for a holomorphic submersion gives , with .    The twist records why a symplectic form can be chosen holomorphically on a coordinate chart of the base but not as one nowhere vanishing untwisted relative form over the entire sphere. The fibers have trivial canonical bundle, although the canonical bundle of the total space is not trivial.    Sections, real structure, and the total space   For , the map given by is a holomorphic section. Its normal bundle is The map is an antiholomorphic involution of , and it preserves each curve as a set.   The differential of sends to , so it intertwines the complex structures. Along this section the normal bundle is the vertical tangent bundle, with fiber . To determine its holomorphic structure, let , , and use . A substitution in gives For example, and ; the coefficients of and in both vanish. These subspaces form the holomorphic subbundle of the trivial bundle . At infinity the same subspace is generated by , giving the stated degree .  The normal bundle is the holomorphic quotient by this subbundle. Indeed, differentiation in the base direction uses the product splitting, so its is the quotient of the trivial bundle's . Under , the inclusion is the tensor product with of the tautological inclusion , with one constant factor . The quotient in the Euler sequence is . This proves .  The antipodal point has complex structure , so the identity on is complex antilinear between the two vertical tangent spaces. The antipodal map is antiholomorphic on as well. Thus is antiholomorphic on . It squares to the identity and sends to .    The curves are called real twistor lines . A twistor line in the period domain instead means the conic of periods constructed below.  The normal bundle has complex global sections and zero first cohomology. The real structure selects real infinitesimal deformations of a real twistor line. Conversely, suitable real families of sections with this normal bundle and an -valued relative symplectic form reconstruct a hyperkähler metric; the real and positivity conditions are specified in . A holomorphic section of need not be one of the sections .   If is compact and has positive dimension, its twistor space is not Kähler. There is no line bundle on whose restriction to every fiber is ample.   Suppose were a Kähler form on . The inclusions of the fibers into the smooth product are homotopic. Their restrictions of the closed form therefore represent the same class . On the fiber , positivity of two Kähler forms gives On the antipodal fiber , the metric Kähler form is , so positivity instead gives . The complex orientations of and agree because the complex dimension is even. Since is odd, the two integrals are negatives of one another, a contradiction.  If a line bundle were ample on every fiber, its first Chern class would have the same flat value on every fiber. Ample classes are Kähler by the projective embedding definition of ampleness, so exactly the two integrals above would again have to be positive. This gives the second assertion.    The fibers and base are Kähler, although the total space is not. No degree-two class is Kähler on both antipodal fibers.    The positive three-plane and the period conic  Assume from now on that the hyperkähler metric has holonomy exactly and is compact. Every fiber is then IHS. Let and let be the primitive integral BBF form, transported to the fixed group . Its deformation invariance makes this one form serve the whole family. Define the oriented real three-plane with orientation given by .   The three classes are pairwise orthogonal for and have the same positive square . Thus is positive definite. Its orthogonal complement in is negative definite.   For the fiber , the Hodge orthogonality of the BBF form gives and . Taking real and imaginary parts yields All three classes are Kähler on their respective induced complex manifolds, so their squares are positive. The metric volume is the same for these three complex structures, and their complex orientations agree. Hence Fujiki's relation, with the same transported form and constant, gives equality of the positive th powers of their squares; positivity gives equality of the squares. The BBF signature is , so the orthogonal complement of this positive three-plane is negative definite.    Replacing by an oriented orthogonal rotation rotates the three cohomology classes and preserves the oriented plane . In the irreducible case, this plane therefore depends on the metric rather than on a choice of basis for its induced sphere. The statement uses the irreducible assumption: a reducible metric may admit several different choices of parallel quaternionic structure.   For the fixed cohomology identification, the period of is its holomorphic two-form line. The twistor period map is The line at infinity is .    The period map is a holomorphic isomorphism onto the smooth conic Every point of this conic satisfies , so lies in the period domain of . For finite ,   We have , , and . Therefore the square of is . Pairing it with its conjugate gives , as claimed.  In homogeneous coordinates on , the map is The three displayed cohomology vectors are a basis of , so this is the quadratic Veronese embedding followed by an invertible linear change of coordinates. Its image is the entire nonsingular conic cut out by the nondegenerate quadratic form on this projective plane.  There is also a coordinate-free positivity check. Write a nonzero isotropic vector in as , with . Isotropy says and . Positive definiteness then forces both to be nonzero and gives .    This is the period description in . A period line determines an oriented real two-plane Its positive normal line is . Thus the same sphere can be read as induced complex structures, as oriented two-planes in , or as isotropic complex lines in .   In , the induced complex structure corresponds to its normalized Kähler class. Its period corresponds to the oriented orthogonal plane . The antipodal structure has the same underlying plane with the opposite orientation, and hence the conjugate period.  The normalized Kähler classes form a sphere in the positive three-plane. The class omega I is normal to the oriented period plane spanned by omega J and omega K. The antipodal point corresponds to minus I.   In particular, the period varies nontrivially. At , the derivative of its chosen representative is , considered modulo . Under the deformation-theoretic identification by contraction with , the twistor deformation direction is therefore the line generated by the Kähler class ; see . The scalar depends on the coordinate and the convention for the Kodaira–Spencer map, while this line does not.    Integral Hodge classes along a twistor line  Let and define By , the first Chern class identifies for each fiber.   Every class in has type on every fiber. A class has type at exactly two antipodal points of the twistor sphere. Consequently, outside a countable set of parameters, The restriction of to the real span of this group is negative definite.   For a real degree-two class, type is equivalent to orthogonality to both the real and imaginary parts of the period. Hence has this type exactly when . Let be its orthogonal projection to . If , this condition holds for all . Otherwise, the condition says that the two-plane has normal line . There are exactly two oriented unit normals on this line. They correspond to antipodal parameters, or equivalently to the two complex structures with opposite signs.  The lattice is countable. Removing the two points for every class not in therefore removes at most a countable set. At every remaining parameter, its integral classes are precisely . Negative definiteness follows from and .    Here very general on the twistor line means outside a countable set of parameters, rather than very general in the full deformation space. Such a fiber has zero Picard group exactly when ; the classes in persist on the whole sphere.   Let be projective IHS with Picard number , and choose the hyperkähler metric whose Kähler class is an integral ample class . Since is spanned by , we have The rational linear functional is nonzero on , because . Its kernel has dimension . Thus the very general twistor fiber has Picard number , and its Picard lattice is negative definite. For this supplies nonzero Picard classes that persist even though the very general fiber has no effective divisors. Projective K3 surfaces of Picard number at least two already give examples.   The algebraic dimension of a compact complex manifold is the transcendence degree over of its field of meromorphic functions.   Outside a countable set of parameters, an IHS twistor fiber has no nonzero effective divisors and no compact curves. In particular it is not projective and has algebraic dimension zero.   First choose a parameter satisfying . If were a nonzero effective divisor, its class would lie in . The polarized Fujiki formula gives On the other hand, this integral is the positive Kähler volume . This excludes effective divisors.  The same parameter choice controls rational classes, since an integer multiple of any rational class is integral. If were a compact irreducible curve, nondegeneracy and rationality of would give a unique such that The integral of a holomorphic or antiholomorphic two-form over a curve is zero. Hence , which means has type . Our parameter choice forces . But then , contradicting Kähler positivity.  A projective manifold of positive dimension has effective hyperplane divisors, so these fibers are not projective. A nonconstant meromorphic function on a compact complex manifold has a nonzero polar divisor: if it had none, extension across subsets of codimension at least two would make it holomorphic everywhere, and compactness would make it constant. With no effective divisors, every meromorphic function is constant. This is algebraic dimension zero.    See also , following Fujiki. In dimensions at least four, the degree-two argument does not exclude subvarieties of intermediate dimension.   For an IHS twistor family, every meromorphic function on is the pullback of a meromorphic function on . Consequently, the algebraic dimension of is . In particular, is not the analytification of a proper algebraic variety.   Let be meromorphic on . On a very general fiber its restriction is defined as a meromorphic function and is constant by . Only a proper analytic set of parameters can have a whole fiber inside the polar or indeterminacy set, so this applies on a dense set of fibers.  Choose a point where is holomorphic and finite, and the real twistor section through that point. Then is a meromorphic function on . On every very general fiber where both restrictions are defined, constancy gives . These fibers meet a dense subset of the open set where both functions are holomorphic, so the identity theorem gives equality as meromorphic functions on . Pullback in the other direction is available for every rational function on . Hence the meromorphic function field has transcendence degree .  A proper algebraic variety has a rational function field of transcendence degree its dimension, and rational functions become meromorphic on its analytification. Here , so the field calculation rules out such an algebraic realization.     "
},
{
  "id": "hkg-prop-twistor-symplectic-polynomial",
  "level": "2",
  "url": "hkg-twistor.html#hkg-prop-twistor-symplectic-polynomial",
  "type": "Proposition",
  "number": "3.1",
  "title": "",
  "body": " For finite , a holomorphic symplectic form on is Its coefficients as a differential form on the fixed smooth manifold are holomorphic in . On the chart , use At this is , a holomorphic symplectic form for .   Let and . Define endomorphisms by the same coefficient rows that express the real and imaginary parts of : The row vectors have squared length before division by , and their pairwise dot products are zero. For example, the first and second have dot product The other two pairings follow by interchanging or by the same expansion. The matrix is orthogonal, and its determinant is , since the determinant is continuous and equals at . Thus it is a rotation. Formula makes a parallel orthogonal quaternionic triple.  Expanding the polynomial in gives Hence . The metric construction of proves that it is holomorphic symplectic for . The second chart formula and its value at infinity follow by multiplying the polynomial by .   "
},
{
  "id": "hkg-def-twistor-space",
  "level": "2",
  "url": "hkg-twistor.html#hkg-def-twistor-space",
  "type": "Definition",
  "number": "3.2",
  "title": "",
  "body": " On the smooth product , define the almost complex structure The resulting complex manifold, once integrability is established, is the twistor space . Projection is its twistor family .  "
},
{
  "id": "hkg-lemma-closed-top-form-integrability",
  "level": "2",
  "url": "hkg-twistor.html#hkg-lemma-closed-top-form-integrability",
  "type": "Lemma",
  "number": "3.3",
  "title": "",
  "body": " Let be an almost complex structure on a smooth manifold of real dimension . If every point has a neighborhood with a nowhere vanishing closed form of type , then is integrable.   The subbundle consists precisely of the complexified tangent vectors satisfying . For local sections of this subbundle, Cartan's formula gives because . Thus is closed under the Lie bracket. The Newlander–Nirenberg theorem gives integrability.   "
},
{
  "id": "hkg-thm-twistor-family",
  "level": "2",
  "url": "hkg-twistor.html#hkg-thm-twistor-family",
  "type": "Theorem",
  "number": "3.4",
  "title": "",
  "body": " The almost complex structure on is integrable. Projection is a holomorphic submersion with fiber . If is compact, is proper.   On the finite coordinate chart, regard as a two-form on vanishing on tangent vectors to the base. Its type is for . Hence has type and never vanishes. The three forms are closed on , and the coefficients of are polynomials in . Therefore The same computation with works near infinity. Apply .  The differential of intertwines with the standard complex structure on the base and is surjective, so is a holomorphic submersion. The induced structure on each fiber is its defining . For compact , projection from the smooth product is proper.   "
},
{
  "id": "hkg-prop-relative-twistor-form",
  "level": "2",
  "url": "hkg-twistor.html#hkg-prop-relative-twistor-form",
  "type": "Proposition",
  "number": "3.5",
  "title": "",
  "body": " The local forms define a nowhere degenerate holomorphic section It is closed in the fiber directions. Consequently,   The transformation is the transition rule for a section twisted by . In each chart the form has relative type , and Its exterior derivative is zero after quotienting differential forms by those containing . Taking the component shows that its relative is zero, which proves holomorphicity as a relative form. The same identity gives relative closedness. Fiberwise nondegeneracy was proved in .  The exterior power is a nowhere vanishing section of . It trivializes that line bundle. Finally, the canonical-bundle formula for a holomorphic submersion gives , with .   "
},
{
  "id": "hkg-prop-twistor-sections",
  "level": "2",
  "url": "hkg-twistor.html#hkg-prop-twistor-sections",
  "type": "Proposition",
  "number": "3.6",
  "title": "",
  "body": " For , the map given by is a holomorphic section. Its normal bundle is The map is an antiholomorphic involution of , and it preserves each curve as a set.   The differential of sends to , so it intertwines the complex structures. Along this section the normal bundle is the vertical tangent bundle, with fiber . To determine its holomorphic structure, let , , and use . A substitution in gives For example, and ; the coefficients of and in both vanish. These subspaces form the holomorphic subbundle of the trivial bundle . At infinity the same subspace is generated by , giving the stated degree .  The normal bundle is the holomorphic quotient by this subbundle. Indeed, differentiation in the base direction uses the product splitting, so its is the quotient of the trivial bundle's . Under , the inclusion is the tensor product with of the tautological inclusion , with one constant factor . The quotient in the Euler sequence is . This proves .  The antipodal point has complex structure , so the identity on is complex antilinear between the two vertical tangent spaces. The antipodal map is antiholomorphic on as well. Thus is antiholomorphic on . It squares to the identity and sends to .   "
},
{
  "id": "hkg-prop-twistor-not-kahler",
  "level": "2",
  "url": "hkg-twistor.html#hkg-prop-twistor-not-kahler",
  "type": "Proposition",
  "number": "3.7",
  "title": "",
  "body": " If is compact and has positive dimension, its twistor space is not Kähler. There is no line bundle on whose restriction to every fiber is ample.   Suppose were a Kähler form on . The inclusions of the fibers into the smooth product are homotopic. Their restrictions of the closed form therefore represent the same class . On the fiber , positivity of two Kähler forms gives On the antipodal fiber , the metric Kähler form is , so positivity instead gives . The complex orientations of and agree because the complex dimension is even. Since is odd, the two integrals are negatives of one another, a contradiction.  If a line bundle were ample on every fiber, its first Chern class would have the same flat value on every fiber. Ample classes are Kähler by the projective embedding definition of ampleness, so exactly the two integrals above would again have to be positive. This gives the second assertion.   "
},
{
  "id": "hkg-prop-twistor-positive-plane",
  "level": "2",
  "url": "hkg-twistor.html#hkg-prop-twistor-positive-plane",
  "type": "Proposition",
  "number": "3.8",
  "title": "",
  "body": " The three classes are pairwise orthogonal for and have the same positive square . Thus is positive definite. Its orthogonal complement in is negative definite.   For the fiber , the Hodge orthogonality of the BBF form gives and . Taking real and imaginary parts yields All three classes are Kähler on their respective induced complex manifolds, so their squares are positive. The metric volume is the same for these three complex structures, and their complex orientations agree. Hence Fujiki's relation, with the same transported form and constant, gives equality of the positive th powers of their squares; positivity gives equality of the squares. The BBF signature is , so the orthogonal complement of this positive three-plane is negative definite.   "
},
{
  "id": "hkg-def-twistor-period-map",
  "level": "2",
  "url": "hkg-twistor.html#hkg-def-twistor-period-map",
  "type": "Definition",
  "number": "3.9",
  "title": "",
  "body": " For the fixed cohomology identification, the period of is its holomorphic two-form line. The twistor period map is The line at infinity is .  "
},
{
  "id": "hkg-prop-twistor-period-conic",
  "level": "2",
  "url": "hkg-twistor.html#hkg-prop-twistor-period-conic",
  "type": "Proposition",
  "number": "3.10",
  "title": "",
  "body": " The period map is a holomorphic isomorphism onto the smooth conic Every point of this conic satisfies , so lies in the period domain of . For finite ,   We have , , and . Therefore the square of is . Pairing it with its conjugate gives , as claimed.  In homogeneous coordinates on , the map is The three displayed cohomology vectors are a basis of , so this is the quadratic Veronese embedding followed by an invertible linear change of coordinates. Its image is the entire nonsingular conic cut out by the nondegenerate quadratic form on this projective plane.  There is also a coordinate-free positivity check. Write a nonzero isotropic vector in as , with . Isotropy says and . Positive definiteness then forces both to be nonzero and gives .   "
},
{
  "id": "hkg-figure-twistor-period-plane",
  "level": "2",
  "url": "hkg-twistor.html#hkg-figure-twistor-period-plane",
  "type": "Figure",
  "number": "3.11",
  "title": "",
  "body": " In , the induced complex structure corresponds to its normalized Kähler class. Its period corresponds to the oriented orthogonal plane . The antipodal structure has the same underlying plane with the opposite orientation, and hence the conjugate period.  The normalized Kähler classes form a sphere in the positive three-plane. The class omega I is normal to the oriented period plane spanned by omega J and omega K. The antipodal point corresponds to minus I.  "
},
{
  "id": "hkg-prop-twistor-picard",
  "level": "2",
  "url": "hkg-twistor.html#hkg-prop-twistor-picard",
  "type": "Proposition",
  "number": "3.12",
  "title": "",
  "body": " Every class in has type on every fiber. A class has type at exactly two antipodal points of the twistor sphere. Consequently, outside a countable set of parameters, The restriction of to the real span of this group is negative definite.   For a real degree-two class, type is equivalent to orthogonality to both the real and imaginary parts of the period. Hence has this type exactly when . Let be its orthogonal projection to . If , this condition holds for all . Otherwise, the condition says that the two-plane has normal line . There are exactly two oriented unit normals on this line. They correspond to antipodal parameters, or equivalently to the two complex structures with opposite signs.  The lattice is countable. Removing the two points for every class not in therefore removes at most a countable set. At every remaining parameter, its integral classes are precisely . Negative definiteness follows from and .   "
},
{
  "id": "hkg-example-twistor-picard-positive-rank",
  "level": "2",
  "url": "hkg-twistor.html#hkg-example-twistor-picard-positive-rank",
  "type": "Example",
  "number": "3.13",
  "title": "",
  "body": " Let be projective IHS with Picard number , and choose the hyperkähler metric whose Kähler class is an integral ample class . Since is spanned by , we have The rational linear functional is nonzero on , because . Its kernel has dimension . Thus the very general twistor fiber has Picard number , and its Picard lattice is negative definite. For this supplies nonzero Picard classes that persist even though the very general fiber has no effective divisors. Projective K3 surfaces of Picard number at least two already give examples.  "
},
{
  "id": "hkg-cor-twistor-no-divisors-curves",
  "level": "2",
  "url": "hkg-twistor.html#hkg-cor-twistor-no-divisors-curves",
  "type": "Corollary",
  "number": "3.14",
  "title": "",
  "body": " Outside a countable set of parameters, an IHS twistor fiber has no nonzero effective divisors and no compact curves. In particular it is not projective and has algebraic dimension zero.   First choose a parameter satisfying . If were a nonzero effective divisor, its class would lie in . The polarized Fujiki formula gives On the other hand, this integral is the positive Kähler volume . This excludes effective divisors.  The same parameter choice controls rational classes, since an integer multiple of any rational class is integral. If were a compact irreducible curve, nondegeneracy and rationality of would give a unique such that The integral of a holomorphic or antiholomorphic two-form over a curve is zero. Hence , which means has type . Our parameter choice forces . But then , contradicting Kähler positivity.  A projective manifold of positive dimension has effective hyperplane divisors, so these fibers are not projective. A nonconstant meromorphic function on a compact complex manifold has a nonzero polar divisor: if it had none, extension across subsets of codimension at least two would make it holomorphic everywhere, and compactness would make it constant. With no effective divisors, every meromorphic function is constant. This is algebraic dimension zero.   "
},
{
  "id": "hkg-cor-twistor-meromorphic-functions",
  "level": "2",
  "url": "hkg-twistor.html#hkg-cor-twistor-meromorphic-functions",
  "type": "Corollary",
  "number": "3.15",
  "title": "",
  "body": " For an IHS twistor family, every meromorphic function on is the pullback of a meromorphic function on . Consequently, the algebraic dimension of is . In particular, is not the analytification of a proper algebraic variety.   Let be meromorphic on . On a very general fiber its restriction is defined as a meromorphic function and is constant by . Only a proper analytic set of parameters can have a whole fiber inside the polar or indeterminacy set, so this applies on a dense set of fibers.  Choose a point where is holomorphic and finite, and the real twistor section through that point. Then is a meromorphic function on . On every very general fiber where both restrictions are defined, constancy gives . These fibers meet a dense subset of the open set where both functions are holomorphic, so the identity theorem gives equality as meromorphic functions on . Pullback in the other direction is available for every rational function on . Hence the meromorphic function field has transcendence degree .  A proper algebraic variety has a rational function field of transcendence degree its dimension, and rational functions become meromorphic on its analytification. Here , so the field calculation rules out such an algebraic realization.   "
},
{
  "id": "hkg-deformations",
  "level": "1",
  "url": "hkg-deformations.html",
  "type": "Chapter",
  "number": "4",
  "title": "Deformations and periods",
  "body": " Deformations and periods   Let be IHS of dimension , and let . A deformation varies its complex structure while keeping its differentiable topology locally fixed. The line spanned by the holomorphic symplectic form gives local coordinates on the deformation space; orthogonality to fixed classes describes where line bundles persist.  References for the local theory are , , and .    Families, markings, and first-order deformations    A smooth family of compact complex manifolds over a complex manifold is a proper holomorphic submersion , with fibers . A deformation of over a pointed complex analytic base is a proper flat holomorphic family together with an isomorphism . Over a smooth base, a deformation of a smooth compact manifold becomes a smooth family after shrinking around .    Two IHS manifolds are deformation equivalent if they can be joined by a finite chain of smooth families of IHS manifolds over connected bases, where successive families have an isomorphic fiber. An equivalence class is a deformation type . Projectivity of the intermediate fibers is not required.  Infinitesimal deformation theory permits nonreduced analytic bases, including the first-order base with ring . The topological and Hodge-theoretic arguments below concern actual smooth families over complex manifolds.  Ehresmann's theorem says that a proper differentiable submersion is locally a differentiable fiber bundle. Consequently, is a local system with fiber . Transport along a path identifies the cohomology of its endpoint fibers. This identification depends only on the homotopy class of the path with fixed endpoints. On a simply connected sufficiently small base, the central-fiber identification therefore gives identifications Cup product and integration are preserved. These assertions concern topological cohomology; the Hodge decomposition changes with .  A lattice is a finitely generated free abelian group with a nondegenerate integral symmetric bilinear form.    Let be an integral lattice isometric to . A marking of is a lattice isometry . A marked family is a smooth family of IHS manifolds together with an isometry of local systems Here is the constant local system with fiber . In particular, a marking of a central fiber extends uniquely over a simply connected small base by parallel transport.    We use for the lattice pairing and its scalar extensions, and let . Its signature is . No choice of basis of is part of a marking.  The Kuranishi space  is an analytic germ with a semiuniversal deformation of . Its Zariski tangent space is Obstructions lie in . If , the deformation is universal as a germ with identified central fiber. We quote these facts from .  An obstruction space contains the obstruction classes, which need not exhaust the space.   The vanishing is sufficient for unobstructedness; it is not necessary.   A tangent vector of a family has a Kodaira–Spencer class  . It measures the first-order change of complex structure in the direction . The Kodaira–Spencer map of the Kuranishi family is the displayed tangent-space identification.    Unobstructedness and the symplectic form   (Bogomolov–Tian–Todorov)   The Kuranishi space of a compact Kähler manifold with trivial canonical bundle is smooth. In particular, if is IHS, then is smooth of dimension , and its sufficiently small fibers are again IHS.    We quote smoothness from Bogomolov in the symplectic case and Tian–Todorov for the stated Kähler case. Stability of the IHS condition is explained in .    Choose a generator . Contraction with induces isomorphisms Moreover, and .    At a point , nondegeneracy means exactly that the map from to its dual is an isomorphism. The local maps vary holomorphically, so they give an isomorphism of holomorphic vector bundles. Taking cohomology and using the Dolbeault isomorphism gives the second displayed isomorphism. Since is simply connected, ; the Kähler Hodge decomposition then gives . Thus . Finally, This proves the dimension assertion.    Replacing by scales the contraction isomorphism by .  Small deformations of a compact Kähler manifold remain Kähler. In a small smooth Kähler family the Hodge numbers are constant. A relative two-form extending remains nondegenerate after shrinking: its top exterior power is nonzero on the compact central fiber, and nonvanishing is open. Differentiable triviality preserves simple connectedness. Thus the small fibers remain IHS.  Universality refers to the pointed germ with identified central fiber, rather than to a global moduli space.   The vanishing excludes infinitesimal automorphisms. Discrete automorphisms can still affect gluing and the existence of a global universal family.     The period domain    Let have signature , and let . Its period domain is The period of a marked IHS manifold is .    Both conditions are independent of the choice of a nonzero representative of . The first condition is a homogeneous quadratic equation; the second is a strict real inequality. The BBF relations for show that the period of an IHS manifold belongs to .    The space is a smooth complex manifold of dimension . Its underlying real manifold is naturally the space of oriented positive definite two-planes in . It is connected and has the homotopy type of a two-sphere.    Write with . Then Thus the period conditions are equivalent to and . In particular, are linearly independent and span a positive definite plane, oriented by the ordered basis . Multiplying by a nonzero complex scalar changes this basis by a positive scalar times a rotation, and hence preserves its orientation. Conversely, an oriented positive plane has an oriented orthogonal basis of equal length; all such bases give the same projective line . These constructions are inverse and smooth.  The projective quadric is smooth because the pairing is nondegenerate. At a nonzero isotropic vector , the differential of the equation on the affine cone is the nonzero linear functional . Hence the quadric has dimension . The inequality in defines an open subset of this quadric.  For the topology, choose an orthogonal decomposition , with positive definite of dimension three and negative definite. Projection of a positive two-plane to is injective. Such a plane is therefore the graph of a linear map , where is an oriented two-plane and , using the positive definite norms on and . Replacing by , for , preserves positivity and defines a deformation retraction onto the oriented two-planes in . After choosing an orientation of , these planes correspond to their unit normal vectors and form . The conclusion follows.    Fixing a positive polarization class instead gives a signature- orthogonal complement, whose oriented positive two-plane domain has two components.   A type IV domain usually has signature . The unpolarized domain here has signature and contains compact twistor conics.     A point determines the weight-two Hodge decomposition The summands have types , , and , respectively. For , being of type is equivalent to .    The pairing on is nondegenerate because and the two diagonal entries vanish. The asserted direct sum follows. Complex conjugation interchanges the first and third summands and preserves the middle one, so this is a real Hodge structure. A real vector orthogonal to is also orthogonal to ; the last assertion follows.      Local Torelli  Take a sufficiently small simply connected representative of , and extend a marking over the Kuranishi family. The Hodge lines form a holomorphic line subbundle of the flat complex cohomology bundle. Hence they define a holomorphic map Holomorphicity follows from variation of Hodge structure for smooth proper Kähler families.    At , the tangent space of the period domain is If , then is identified by the marking with .    A first-order change of a line is represented by , with taken modulo . Differentiating the isotropy equation gives . This proves the first description; equivalently, a tangent vector is a homomorphism sending to the class of . In the Hodge decomposition, , because the pairing of with the nonzero direction is nonzero. Quotienting gives the second assertion.     (Beauville)   The period map of the Kuranishi family of an IHS manifold is a local biholomorphism. After shrinking , it identifies with an open neighborhood of in .    The source is smooth by . Let , and let be its Kodaira–Spencer class. Using the marking, identify the target tangent space with . The infinitesimal variation formula says This fixes our Kodaira–Spencer sign convention; the opposite convention changes only the sign of the derivative.  The Kodaira–Spencer map of the Kuranishi family is an isomorphism. Contraction with is an isomorphism by . Evaluating a homomorphism on the chosen generator identifies the tangent space in with . Thus the differential of the period map is an isomorphism. The holomorphic inverse function theorem proves the assertion at . Shrinking the family, or applying the same argument at nearby fibers, gives the stated local biholomorphism.    Represent a first-order deformation by a Čech cocycle of vector fields on chart overlaps. Comparing local symplectic forms uses their Lie derivatives. Cartan's formula and give The component in the Čech–de Rham description is represented by . Its Dolbeault class gives .  Local Torelli concerns one pointed deformation. The gluing of period charts and global period fibers are treated in .   The phrase local Torelli can also mean only injectivity of the period derivative. Here the equal dimensions give a local analytic isomorphism.     Line bundles and Noether–Lefschetz loci    For , its degree-two Hodge locus is defined by : For a rational subspace , let . An empty intersection of conditions means .    The locus consists exactly of periods at which every class in has type . Only the rational span matters. In particular, a class and any nonzero rational multiple define the same locus. An integral sublattice and its saturation in also define the same locus.    Let . If is nonempty, it is a smooth complex submanifold of of codimension , hence of dimension . In particular, a nonempty is a smooth hypersurface. The assertion does not require the form on to be nondegenerate.    Take . Every vector in belongs to the subspace . This subspace is nondegenerate for . In the tangent-space description obtained by evaluating on , the differential of the equation associated to is the functional on . Linearly independent vectors in give linearly independent functionals, since the form on is nondegenerate. Thus the equations have independent differentials. The holomorphic implicit function theorem gives the assertion at every point.    The locus is nonempty precisely when contains a positive two-plane. If itself contains a positive two-plane, its orthogonal complement has positive index at most one, so the locus is empty. If is negative definite of rank , the complement has signature , so the locus is nonempty.  Under the local period isomorphism, these are the loci on which selected topological degree-two classes remain of type . By , an integral class is the first Chern class of a unique isomorphism class of line bundles exactly when it has type . Recall that these classes identify , whose rank is the Picard number . Thus these period equations are precisely the conditions for selected line-bundle classes to persist.    Let be a line bundle on with . Its local extension locus is the smooth hypersurface Its dimension is . More generally, if the first Chern classes of line bundles are independent over , their simultaneous extension locus is smooth of codimension .    The deformation theory of the pair identifies its image in with the locus on which the flat class has type ; the line bundle extends locally over that locus. We use this extension statement from . The type condition is precisely the orthogonality equation defining the displayed locus. Its smoothness and codimension now follow from local Torelli and . Applying the same extension statement to finitely many line bundles proves the last assertion.    Twisting an extension by a bundle from the base preserves its fiber restrictions. Scalar automorphisms of the bundle also remain. Neither ambiguity changes its extension locus.   Holomorphicity gives a period hyperplane. Ampleness gives an additional open Kähler-cone condition.   The Noether–Lefschetz locus in an unpolarized local deformation space usually means the locus . It is the union of the loci associated with nonzero integral classes. In a family where a fixed lattice of line-bundle classes is already present, the same name usually means the locus where the Picard number exceeds that prescribed rank. The ambient family is therefore part of the meaning of this term.    Very general periods and projective deformations    A property holds for a very general point of a connected complex manifold if it holds outside a countable union of proper closed analytic subsets of . In an algebraic family one often requires the exceptional subsets to be algebraic; that stronger convention will be stated when needed.    Proper closed analytic subsets of a connected complex manifold have empty interior. By the Baire category theorem, their countable unions contain no nonempty open set. Thus a very general set is dense, though it need not be open.    In the full local deformation space of an IHS manifold, a very general fiber satisfies . More generally, on each nonempty connected component of , a very general period has rational subspace exactly . Its integral lattice is then .    The lattice is countable. For every nonzero , the set is either empty or a proper analytic hypersurface by . The complement of their union consists precisely of periods with no nonzero integral classes. A rational class is a rational multiple of an integral class, so the same complement has no nonzero rational classes. Pulling back by local Torelli proves the first assertion.  Let and . Its additional type condition on is . If nonempty, this locus has dimension by , whereas every component of has dimension . It is therefore a proper closed analytic subset of each component. Excluding these loci for the countably many rational outside proves the assertion. Intersecting the rational subspace with gives the integral lattice.      Projective fibers with Picard number one are dense in every full local deformation space of an IHS manifold.    By and , it suffices to approximate every period by periods admitting an integral class of positive BBF square.  Let , with orthogonal of equal positive square. The orthogonal complement of their plane has signature , so choose a vector in it with . Choose rational vectors . For large , their squares are positive. Define Then and , . Their plane is positive for large . Within that plane, orthogonalize and rescale the ordered pair continuously so that its two vectors have equal positive length. The corresponding period tends to and is orthogonal to .  Local Torelli realizes all sufficiently close by fibers of the given local family. Multiplying by a positive integer gives an integral class of positive square without changing its Hodge locus. The projectivity criterion makes these fibers projective. By with , periods with rational subspace exactly are dense in this hyperplane. Perturb within that hyperplane and within the local period image to such a period. The resulting fiber is projective with Picard number one, and these perturbations can still tend to .    Projective fibers lie in a countable dense union of proper hypersurfaces whose complement is also dense.    Hodge classes in higher degree  Degree-two Hodge loci are hyperplane sections because the period is a line and the BBF form identifies its orthogonal complement. In higher degree there is still an analytic type condition, but it need not be one equation and need not be smooth.    Let be a smooth proper family of compact Kähler manifolds over a simply connected complex manifold. Fix a real flat cohomology class of degree . The set is a closed analytic subset of .    The Hodge filtration is a holomorphic subbundle of the holomorphic flat cohomology bundle . A flat class gives a holomorphic section of this bundle. Its image in the quotient bundle is holomorphic, so its zero locus is closed analytic.  For a real class of weight , belonging to is equivalent to having type . Indeed, membership in allows only components with . Reality then allows only components with as well. Both inequalities force . Thus the zero locus is exactly .      A rational class is persistent of type if its parallel transport has type on every sufficiently small deformation of .    Persistence concerns Hodge type along local deformations. Monodromy invariance concerns a global group action; a relation between the two requires an additional theorem.    In a connected simply connected local deformation space, outside a countable union of proper closed analytic subsets, every rational Hodge class is of Hodge type throughout the entire base.    Trivialize each rational cohomology local system. There are countably many rational classes in the finitely many cohomological degrees. For each such class, its Hodge locus is analytic by . Discard those loci that equal the whole connected base, and take the union of the remaining proper loci. Outside this union, a rational class can be a Hodge class only if its Hodge locus was the entire base.    Chern classes of the tangent bundle give examples of persistent classes: the relative holomorphic tangent bundle restricts to , its topological Chern classes are flat, and has type on every fiber. By contrast, the class of an individual divisor is generally not persistent; its type condition is the proper hypersurface calculated above. This distinction is the hypothesis that appears in generalized Fujiki formulas for higher-degree classes.   "
},
{
  "id": "hkg-definition-deformation",
  "level": "2",
  "url": "hkg-deformations.html#hkg-definition-deformation",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "  A smooth family of compact complex manifolds over a complex manifold is a proper holomorphic submersion , with fibers . A deformation of over a pointed complex analytic base is a proper flat holomorphic family together with an isomorphism . Over a smooth base, a deformation of a smooth compact manifold becomes a smooth family after shrinking around .   "
},
{
  "id": "hkg-definition-marking",
  "level": "2",
  "url": "hkg-deformations.html#hkg-definition-marking",
  "type": "Definition",
  "number": "4.2",
  "title": "",
  "body": "  Let be an integral lattice isometric to . A marking of is a lattice isometry . A marked family is a smooth family of IHS manifolds together with an isometry of local systems Here is the constant local system with fiber . In particular, a marking of a central fiber extends uniquely over a simply connected small base by parallel transport.   "
},
{
  "id": "hkg-theorem-unobstructedness",
  "level": "2",
  "url": "hkg-deformations.html#hkg-theorem-unobstructedness",
  "type": "Theorem",
  "number": "4.3",
  "title": "(Bogomolov–Tian–Todorov).",
  "body": " (Bogomolov–Tian–Todorov)   The Kuranishi space of a compact Kähler manifold with trivial canonical bundle is smooth. In particular, if is IHS, then is smooth of dimension , and its sufficiently small fibers are again IHS.   "
},
{
  "id": "hkg-proposition-deformation-tangent",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-deformation-tangent",
  "type": "Proposition",
  "number": "4.4",
  "title": "",
  "body": "  Choose a generator . Contraction with induces isomorphisms Moreover, and .    At a point , nondegeneracy means exactly that the map from to its dual is an isomorphism. The local maps vary holomorphically, so they give an isomorphism of holomorphic vector bundles. Taking cohomology and using the Dolbeault isomorphism gives the second displayed isomorphism. Since is simply connected, ; the Kähler Hodge decomposition then gives . Thus . Finally, This proves the dimension assertion.   "
},
{
  "id": "hkg-definition-period-domain",
  "level": "2",
  "url": "hkg-deformations.html#hkg-definition-period-domain",
  "type": "Definition",
  "number": "4.5",
  "title": "",
  "body": "  Let have signature , and let . Its period domain is The period of a marked IHS manifold is .   "
},
{
  "id": "hkg-proposition-period-domain-planes",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-period-domain-planes",
  "type": "Proposition",
  "number": "4.6",
  "title": "",
  "body": "  The space is a smooth complex manifold of dimension . Its underlying real manifold is naturally the space of oriented positive definite two-planes in . It is connected and has the homotopy type of a two-sphere.    Write with . Then Thus the period conditions are equivalent to and . In particular, are linearly independent and span a positive definite plane, oriented by the ordered basis . Multiplying by a nonzero complex scalar changes this basis by a positive scalar times a rotation, and hence preserves its orientation. Conversely, an oriented positive plane has an oriented orthogonal basis of equal length; all such bases give the same projective line . These constructions are inverse and smooth.  The projective quadric is smooth because the pairing is nondegenerate. At a nonzero isotropic vector , the differential of the equation on the affine cone is the nonzero linear functional . Hence the quadric has dimension . The inequality in defines an open subset of this quadric.  For the topology, choose an orthogonal decomposition , with positive definite of dimension three and negative definite. Projection of a positive two-plane to is injective. Such a plane is therefore the graph of a linear map , where is an oriented two-plane and , using the positive definite norms on and . Replacing by , for , preserves positivity and defines a deformation retraction onto the oriented two-planes in . After choosing an orientation of , these planes correspond to their unit normal vectors and form . The conclusion follows.   "
},
{
  "id": "hkg-proposition-period-hodge-structure",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-period-hodge-structure",
  "type": "Proposition",
  "number": "4.7",
  "title": "",
  "body": "  A point determines the weight-two Hodge decomposition The summands have types , , and , respectively. For , being of type is equivalent to .    The pairing on is nondegenerate because and the two diagonal entries vanish. The asserted direct sum follows. Complex conjugation interchanges the first and third summands and preserves the middle one, so this is a real Hodge structure. A real vector orthogonal to is also orthogonal to ; the last assertion follows.   "
},
{
  "id": "hkg-lemma-period-tangent",
  "level": "2",
  "url": "hkg-deformations.html#hkg-lemma-period-tangent",
  "type": "Lemma",
  "number": "4.8",
  "title": "",
  "body": "  At , the tangent space of the period domain is If , then is identified by the marking with .    A first-order change of a line is represented by , with taken modulo . Differentiating the isotropy equation gives . This proves the first description; equivalently, a tangent vector is a homomorphism sending to the class of . In the Hodge decomposition, , because the pairing of with the nonzero direction is nonzero. Quotienting gives the second assertion.   "
},
{
  "id": "hkg-theorem-local-torelli",
  "level": "2",
  "url": "hkg-deformations.html#hkg-theorem-local-torelli",
  "type": "Theorem",
  "number": "4.9",
  "title": "(Beauville).",
  "body": " (Beauville)   The period map of the Kuranishi family of an IHS manifold is a local biholomorphism. After shrinking , it identifies with an open neighborhood of in .    The source is smooth by . Let , and let be its Kodaira–Spencer class. Using the marking, identify the target tangent space with . The infinitesimal variation formula says This fixes our Kodaira–Spencer sign convention; the opposite convention changes only the sign of the derivative.  The Kodaira–Spencer map of the Kuranishi family is an isomorphism. Contraction with is an isomorphism by . Evaluating a homomorphism on the chosen generator identifies the tangent space in with . Thus the differential of the period map is an isomorphism. The holomorphic inverse function theorem proves the assertion at . Shrinking the family, or applying the same argument at nearby fibers, gives the stated local biholomorphism.   "
},
{
  "id": "hkg-definition-degree-two-hodge-locus",
  "level": "2",
  "url": "hkg-deformations.html#hkg-definition-degree-two-hodge-locus",
  "type": "Definition",
  "number": "4.10",
  "title": "",
  "body": "  For , its degree-two Hodge locus is defined by : For a rational subspace , let . An empty intersection of conditions means .   "
},
{
  "id": "hkg-proposition-hodge-loci-codimension",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-hodge-loci-codimension",
  "type": "Proposition",
  "number": "4.11",
  "title": "",
  "body": "  Let . If is nonempty, it is a smooth complex submanifold of of codimension , hence of dimension . In particular, a nonempty is a smooth hypersurface. The assertion does not require the form on to be nondegenerate.    Take . Every vector in belongs to the subspace . This subspace is nondegenerate for . In the tangent-space description obtained by evaluating on , the differential of the equation associated to is the functional on . Linearly independent vectors in give linearly independent functionals, since the form on is nondegenerate. Thus the equations have independent differentials. The holomorphic implicit function theorem gives the assertion at every point.   "
},
{
  "id": "hkg-proposition-line-bundle-deformations",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-line-bundle-deformations",
  "type": "Proposition",
  "number": "4.12",
  "title": "",
  "body": "  Let be a line bundle on with . Its local extension locus is the smooth hypersurface Its dimension is . More generally, if the first Chern classes of line bundles are independent over , their simultaneous extension locus is smooth of codimension .    The deformation theory of the pair identifies its image in with the locus on which the flat class has type ; the line bundle extends locally over that locus. We use this extension statement from . The type condition is precisely the orthogonality equation defining the displayed locus. Its smoothness and codimension now follow from local Torelli and . Applying the same extension statement to finitely many line bundles proves the last assertion.   "
},
{
  "id": "hkg-definition-very-general",
  "level": "2",
  "url": "hkg-deformations.html#hkg-definition-very-general",
  "type": "Definition",
  "number": "4.13",
  "title": "",
  "body": "  A property holds for a very general point of a connected complex manifold if it holds outside a countable union of proper closed analytic subsets of . In an algebraic family one often requires the exceptional subsets to be algebraic; that stronger convention will be stated when needed.   "
},
{
  "id": "hkg-proposition-generic-picard-zero",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-generic-picard-zero",
  "type": "Proposition",
  "number": "4.14",
  "title": "",
  "body": "  In the full local deformation space of an IHS manifold, a very general fiber satisfies . More generally, on each nonempty connected component of , a very general period has rational subspace exactly . Its integral lattice is then .    The lattice is countable. For every nonzero , the set is either empty or a proper analytic hypersurface by . The complement of their union consists precisely of periods with no nonzero integral classes. A rational class is a rational multiple of an integral class, so the same complement has no nonzero rational classes. Pulling back by local Torelli proves the first assertion.  Let and . Its additional type condition on is . If nonempty, this locus has dimension by , whereas every component of has dimension . It is therefore a proper closed analytic subset of each component. Excluding these loci for the countably many rational outside proves the assertion. Intersecting the rational subspace with gives the integral lattice.   "
},
{
  "id": "hkg-proposition-projective-deformations-dense",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-projective-deformations-dense",
  "type": "Proposition",
  "number": "4.15",
  "title": "",
  "body": "  Projective fibers with Picard number one are dense in every full local deformation space of an IHS manifold.    By and , it suffices to approximate every period by periods admitting an integral class of positive BBF square.  Let , with orthogonal of equal positive square. The orthogonal complement of their plane has signature , so choose a vector in it with . Choose rational vectors . For large , their squares are positive. Define Then and , . Their plane is positive for large . Within that plane, orthogonalize and rescale the ordered pair continuously so that its two vectors have equal positive length. The corresponding period tends to and is orthogonal to .  Local Torelli realizes all sufficiently close by fibers of the given local family. Multiplying by a positive integer gives an integral class of positive square without changing its Hodge locus. The projectivity criterion makes these fibers projective. By with , periods with rational subspace exactly are dense in this hyperplane. Perturb within that hyperplane and within the local period image to such a period. The resulting fiber is projective with Picard number one, and these perturbations can still tend to .   "
},
{
  "id": "hkg-proposition-local-hodge-locus",
  "level": "2",
  "url": "hkg-deformations.html#hkg-proposition-local-hodge-locus",
  "type": "Proposition",
  "number": "4.16",
  "title": "",
  "body": "  Let be a smooth proper family of compact Kähler manifolds over a simply connected complex manifold. Fix a real flat cohomology class of degree . The set is a closed analytic subset of .    The Hodge filtration is a holomorphic subbundle of the holomorphic flat cohomology bundle . A flat class gives a holomorphic section of this bundle. Its image in the quotient bundle is holomorphic, so its zero locus is closed analytic.  For a real class of weight , belonging to is equivalent to having type . Indeed, membership in allows only components with . Reality then allows only components with as well. Both inequalities force . Thus the zero locus is exactly .   "
},
{
  "id": "hkg-definition-persistent-hodge-class",
  "level": "2",
  "url": "hkg-deformations.html#hkg-definition-persistent-hodge-class",
  "type": "Definition",
  "number": "4.17",
  "title": "",
  "body": "  A rational class is persistent of type if its parallel transport has type on every sufficiently small deformation of .   "
},
{
  "id": "hkg-corollary-generic-persistent-classes",
  "level": "2",
  "url": "hkg-deformations.html#hkg-corollary-generic-persistent-classes",
  "type": "Corollary",
  "number": "4.18",
  "title": "",
  "body": "  In a connected simply connected local deformation space, outside a countable union of proper closed analytic subsets, every rational Hodge class is of Hodge type throughout the entire base.    Trivialize each rational cohomology local system. There are countably many rational classes in the finitely many cohomological degrees. For each such class, its Hodge locus is analytic by . Discard those loci that equal the whole connected base, and take the union of the remaining proper loci. Outside this union, a rational class can be a Hodge class only if its Hodge locus was the entire base.   "
},
{
  "id": "hkg-examples",
  "level": "1",
  "url": "hkg-examples.html",
  "type": "Chapter",
  "number": "5",
  "title": "K3 surfaces and higher-dimensional examples",
  "body": " K3 surfaces and higher-dimensional examples   Hilbert schemes of points on K3 surfaces and generalized Kummer varieties provide examples in every even dimension. O'Grady's constructions give two further deformation types, in dimensions six and ten. The Fano variety of lines on a cubic fourfold and the Debarre–Voisin construction describe polarized families within the Hilbert-square deformation type.    K3 surfaces    A K3 surface is a simply connected compact Kähler surface with trivial canonical bundle . A common equivalent definition over requires a connected compact complex surface with and . The equivalence, including the Kähler and simple-connectedness assertions, is a theorem about complex surfaces. Over a general field the algebraic definition uses a smooth proper geometrically connected surface, trivial canonical bundle, and vanishing ; it does not use the topological fundamental group. See .    A nonzero section of has no zeros and is a holomorphic symplectic form. Since , every holomorphic two-form is a scalar multiple of . Thus K3 surfaces are exactly the irreducible holomorphic symplectic manifolds of dimension two.    For a K3 surface , one has The BBF form is the intersection form , and its Fujiki constant is .    Simple connectedness implies ; Hodge decomposition gives . Triviality of gives , so . The surface Riemann–Roch formula gives By the Chern–Gauss–Bonnet theorem, the last integral is the topological Euler characteristic. Poincaré duality gives , hence . Removing and from gives . In dimension two the defining Fujiki identity is the intersection pairing itself, with the integral normalization fixed by the K3 lattice below.    The integral intersection lattice is Here is the lattice with Gram matrix , and is the negative definite even unimodular lattice of rank eight. The lattice is torsion-free and unimodular by simple connectedness and Poincaré duality, and even because . Its signature is . The displayed identification then uses the classification of indefinite even unimodular lattices; see .   Let be a smooth quartic. Adjunction gives , and the Lefschetz hyperplane theorem gives . Thus is a projective K3 surface. The hyperplane class has .    Let be a smooth sextic and let be the double cover branched over . The double-cover formula gives . Moreover, , whose first cohomology vanishes. The equivalent surface-theoretic definition in shows that is a K3 surface. Its degree-two polarization is .   There are also nonprojective K3 surfaces. Projectivity is an extra condition on the integral -classes, not part of the analytic definition. The Hilbert and Kummer constructions below therefore have both analytic and projective versions.    Hilbert schemes of points    For a smooth projective surface and an integer , let be the Hilbert scheme of zero-dimensional closed subschemes of length . Length means . The Hilbert–Chow morphism is    Over the locus of cycles with distinct support, is an isomorphism. The extra points of record the infinitesimal structure of subschemes when points collide. For a compact complex surface one uses the analytic space of finite subspaces, usually called the Douady space; the notation is retained.   (Fogarty)   Let be a smooth connected projective surface over . Then is a smooth connected projective variety of dimension , and is a resolution of singularities. See .    For a connected compact Kähler surface, the analytic space is likewise smooth, connected, compact, and Kähler, of dimension . Smoothness has the same local models as for length- subspaces of . The Kähler assertion uses the Kähler structure on the symmetric product and the projectivity of the Hilbert–Chow morphism, together with Varouchas's theorem; see . If has a holomorphic symplectic form, the sum of that form on the distinct-point locus extends nondegenerately to ; the local extension argument in applies to tori as well as K3 surfaces.   (Beauville)   Let be a K3 surface. For every , the manifold is irreducible holomorphic symplectic. On the open set of distinct points, its symplectic form is induced by on . This form extends across the exceptional locus to an everywhere nondegenerate holomorphic two-form. See .     Choose local coordinates on with . Near a pair of coincident points, write the two ordered points as and . Exchanging them sends to , and The quotient in the difference coordinates has invariants , , satisfying . It is the ordinary double point .  In one chart of its minimal resolution, let and . The quotient coordinates are , and Thus the form becomes , which is regular and nondegenerate even along . The second chart, obtained by exchanging and , gives the same form on the overlap because both are extensions of the form on the complement of the exceptional curve. Locally, the Hilbert–Chow resolution is this resolution times the centre coordinates . The calculation explains the symplectic extension at a double collision; collisions of greater length require the general theorem.   For , let be the reduced exceptional divisor of . There is an integral primitive class with . The second cohomology and its BBF form are The first summand is induced by the correspondence of a point lying in a length- subscheme. In particular, These are Beauville's computations in . The restrictions are essential: has no exceptional divisor and has . The notation usually means half the exceptional divisor. Some sources instead use the full divisor ; then . A formula involving the exceptional class must be read with this factor of two in mind.  If is a line bundle on , the line bundle descends to ; its pullback to has first Chern class in the summand and square . If is ample and , this pullback is nef but not ample: it has degree zero on every curve contracted by . Thus positive BBF square alone does not characterize the ample cone.    An irreducible holomorphic symplectic manifold is of type if it is deformation equivalent to for a K3 surface .    For , the Hilbert scheme of a projective K3 surface has the independent divisor classes coming from an ample class and from , while projective deformations with Picard rank one also occur. Thus a manifold of type need not be isomorphic to a Hilbert scheme.    Generalized Kummer varieties  Let be a complex torus of dimension two, with origin and a translation-invariant symplectic form . When projective, is an abelian surface. Write . Addition on gives a map , and its composition with Hilbert–Chow is    For , the generalized Kummer variety is . Our index records half the dimension: . Some authors write or index by the number of points. Here is a K3 surface, whereas is a fourfold.      The map is a surjective holomorphic submersion. The fibre is smooth of dimension , and the symplectic form on restricts to a nondegenerate form on this fibre. If is projective, the fibre is projective.    Translation by induces and satisfies . The differential along the translation orbit is therefore multiplication by from to , hence is invertible. Thus is surjective everywhere. Surjectivity of follows as well, since multiplication by on is surjective.  Let be the induced symplectic form on ; its extension is the surface version of the construction in . For , let be the vector field induced by translation. On the dense open set of distinct points, Both identities extend everywhere, since the forms and vector fields are holomorphic. The translation directions are therefore a nondegenerate two-dimensional subspace, orthogonal to . Their intersection with is zero because . Since the ambient tangent space has dimension , it is the direct sum of these two subspaces. Nondegeneracy of the ambient form then implies nondegeneracy on , the tangent space of each fibre. Projectivity follows because a closed fibre of a projective variety is projective.    The argument also describes a finite étale cover. The fibre product of with multiplication is isomorphic to : the isomorphism sends to . Consequently, is finite étale of degree , the degree of on a two-dimensional complex torus.   (Beauville)   For , the manifold is irreducible holomorphic symplectic. For , its BBF lattice and Fujiki constant are In particular for . See .    For , the summand comes from , with its intersection form. The final generator is again half the restricted exceptional divisor. The same rank-seven formula is false for . In that case the zero-sum cycle identifies the symmetric fibre with , and is its minimal resolution. Its sixteen exceptional curves resolve the images of the two-torsion points; the result is a K3 surface with second Betti number twenty-two.  An irreducible holomorphic symplectic manifold deformation equivalent to , for , is said to be of generalized Kummer type . A very general deformation need not retain a presentation as the fibre of a summation map.    O'Grady's examples  Moduli spaces of stable sheaves on K3 surfaces give many manifolds of type. O'Grady's examples arise from singular moduli spaces containing strictly semistable sheaves. Here semistability means Gieseker semistability for the indicated ample line bundle, as defined in . The Mukai vector means rank two, , and on a K3 surface, or on an abelian surface. The difference comes from the factor in the Mukai vector; see and .  A symplectic resolution is a proper birational morphism from a smooth variety to a normal variety, isomorphic over , such that the symplectic form on pulls back and extends to an everywhere nondegenerate closed two-form on . It is projective when the morphism is projective. The extension condition and its relation to crepancy are studied in .   (O'Grady)    Let be a projective K3 surface with , where is ample and . The moduli space of -semistable torsion-free sheaves with Mukai vector admits a projective symplectic resolution that is an irreducible holomorphic symplectic manifold of dimension ten. Its deformation type is called .  Let be the Jacobian of a genus-two curve, with for its principal polarization . The zero fibre of the determinant-and-Albanese map on the moduli space of -semistable torsion-free sheaves with Mukai vector admits a projective symplectic resolution that is an irreducible holomorphic symplectic manifold of dimension six. Its deformation type is called .   See and .    On the abelian surface, let . The map in the theorem is Here is its second Chern zero-cycle, and for a degree-zero cycle. Its zero fibre imposes both zero sum and trivial determinant. O'Grady's resolution of the full ten-dimensional moduli space is compatible with this map; its fibre over is the sixfold in the theorem. This is the normalization used in .  Rapagnetta computed the BBF lattices and Fujiki constants: Here has Gram matrix . See and . Rapagnetta also writes the final rank-two lattice with matrix . If is the displayed basis, replacing it by gives that matrix. The two formulas describe the same integral lattice.  The second Betti numbers distinguish these examples from the Hilbert and generalized Kummer manifolds of the same dimensions. The Fujiki constant alone does not: and both have constant sixty, while and both have constant 945.    Projective fourfolds from Grassmannians   Lines on a cubic fourfold  Let be a smooth cubic hypersurface. Its Fano variety of lines is If is the tautological rank-two bundle on , the cubic equation defines a section of , and is its zero locus. The Grassmannian has dimension eight and this bundle has rank four.   (Beauville–Donagi)   For every smooth cubic fourfold , the variety is a smooth projective irreducible holomorphic symplectic fourfold of type. The incidence correspondence of a point on a line induces an isomorphism between the primitive rational Hodge structures and . Primitivity on is with respect to the hyperplane class, and on with respect to the Plücker class. See .    The shift subtracts from Hodge bidegrees, so corresponds to . Concretely, if is the universal line with projections and , the map is . Pullback preserves degree and integration along the one-dimensional fibres of lowers cohomological degree by two. This accounts for both the degree and the Hodge shift.  Adjunction explains why the canonical bundle is trivial. Write . The canonical bundle of is . If are the Chern roots of , those of are , whose sum is . Hence Smoothness and the codimension follow from .  Let . Its fourth self-intersection is computed on the Grassmannian: The Grassmannian integration rule takes the coefficient of in for a symmetric polynomial of degree eight. The coefficients of and in the displayed integrand are 414 and 306, giving . See .  The Fujiki constant for type is three. Since the Plücker class is ample, , and the Fujiki identity gives . Therefore . Its intersection degree and its BBF square are different invariants: here they are 108 and six.    Debarre–Voisin fourfolds  Let be a ten-dimensional vector space and an alternating three-form. On , restriction of gives a section of , where has rank six. Define Since and , its expected dimension is four.   (Debarre–Voisin)   For in a nonempty Zariski open subset of , the zero locus is a smooth projective irreducible holomorphic symplectic fourfold of type. With its Plücker polarization, it is deformation equivalent to the Hilbert square of a degree-twenty-two K3 surface equipped with the polarization described in .    The determinant calculation is parallel to the cubic example. For a rank- vector bundle , every Chern root of occurs in exactly Chern roots of . Thus . For and , the exponent is ten. Since , adjunction gives  The polarized deformation in also determines the BBF square of the Plücker class. Let be the degree-twenty-two K3 surface there, let be the induced class from its polarization, and let be half the Hilbert–Chow exceptional divisor. The corresponding polarization is . Since , , and , its square is Thus the Plücker class on has BBF square twenty-two and fourth self-intersection . It is primitive and has divisibility two, in the sense of . Indeed, is primitive in the unimodular K3 lattice, so ; pairing with the two orthogonal summands of gives the ideal generated by and . Its positive generator is two.  The Fano variety of lines and the Debarre–Voisin fourfold have the same deformation type, with Plücker classes of BBF squares six and twenty-two, respectively. Their constructions supply different families of polarized manifolds within that deformation type.     Deformation invariants  The preceding lattice and intersection computations give the following comparison. All Fujiki constants use the primitive integral bilinear form fixed in .   Numerical invariants of the classical deformation types.   Deformation type Dimension  K3  ,  Generalized Kummer,      Deformation equivalent manifolds have the same BBF lattice and Fujiki constant. The second Betti number therefore distinguishes the Hilbert, Kummer, and O'Grady types in equal dimensions. The Fano variety of lines and the Debarre–Voisin fourfold belong to the Hilbert-square row; their different Plücker degrees describe different polarizations within that type.   "
},
{
  "id": "hkg-def-k3",
  "level": "2",
  "url": "hkg-examples.html#hkg-def-k3",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": "  A K3 surface is a simply connected compact Kähler surface with trivial canonical bundle . A common equivalent definition over requires a connected compact complex surface with and . The equivalence, including the Kähler and simple-connectedness assertions, is a theorem about complex surfaces. Over a general field the algebraic definition uses a smooth proper geometrically connected surface, trivial canonical bundle, and vanishing ; it does not use the topological fundamental group. See .   "
},
{
  "id": "hkg-k3-invariants",
  "level": "2",
  "url": "hkg-examples.html#hkg-k3-invariants",
  "type": "Proposition",
  "number": "5.2",
  "title": "",
  "body": "  For a K3 surface , one has The BBF form is the intersection form , and its Fujiki constant is .    Simple connectedness implies ; Hodge decomposition gives . Triviality of gives , so . The surface Riemann–Roch formula gives By the Chern–Gauss–Bonnet theorem, the last integral is the topological Euler characteristic. Poincaré duality gives , hence . Removing and from gives . In dimension two the defining Fujiki identity is the intersection pairing itself, with the integral normalization fixed by the K3 lattice below.   "
},
{
  "id": "hkg-k3-quartic",
  "level": "2",
  "url": "hkg-examples.html#hkg-k3-quartic",
  "type": "Example",
  "number": "5.3",
  "title": "",
  "body": " Let be a smooth quartic. Adjunction gives , and the Lefschetz hyperplane theorem gives . Thus is a projective K3 surface. The hyperplane class has .  "
},
{
  "id": "hkg-k3-double-plane",
  "level": "2",
  "url": "hkg-examples.html#hkg-k3-double-plane",
  "type": "Example",
  "number": "5.4",
  "title": "",
  "body": " Let be a smooth sextic and let be the double cover branched over . The double-cover formula gives . Moreover, , whose first cohomology vanishes. The equivalent surface-theoretic definition in shows that is a K3 surface. Its degree-two polarization is .  "
},
{
  "id": "hkg-def-hilbert-points",
  "level": "2",
  "url": "hkg-examples.html#hkg-def-hilbert-points",
  "type": "Definition",
  "number": "5.5",
  "title": "",
  "body": "  For a smooth projective surface and an integer , let be the Hilbert scheme of zero-dimensional closed subschemes of length . Length means . The Hilbert–Chow morphism is   "
},
{
  "id": "hkg-hilbert-smooth",
  "level": "2",
  "url": "hkg-examples.html#hkg-hilbert-smooth",
  "type": "Theorem",
  "number": "5.6",
  "title": "(Fogarty).",
  "body": " (Fogarty)   Let be a smooth connected projective surface over . Then is a smooth connected projective variety of dimension , and is a resolution of singularities. See .   "
},
{
  "id": "hkg-hilbert-ihs",
  "level": "2",
  "url": "hkg-examples.html#hkg-hilbert-ihs",
  "type": "Theorem",
  "number": "5.7",
  "title": "(Beauville).",
  "body": " (Beauville)   Let be a K3 surface. For every , the manifold is irreducible holomorphic symplectic. On the open set of distinct points, its symplectic form is induced by on . This form extends across the exceptional locus to an everywhere nondegenerate holomorphic two-form. See .   "
},
{
  "id": "hkg-hilbert-square-local",
  "level": "2",
  "url": "hkg-examples.html#hkg-hilbert-square-local",
  "type": "Example",
  "number": "5.8",
  "title": "",
  "body": " Choose local coordinates on with . Near a pair of coincident points, write the two ordered points as and . Exchanging them sends to , and The quotient in the difference coordinates has invariants , , satisfying . It is the ordinary double point .  In one chart of its minimal resolution, let and . The quotient coordinates are , and Thus the form becomes , which is regular and nondegenerate even along . The second chart, obtained by exchanging and , gives the same form on the overlap because both are extensions of the form on the complement of the exceptional curve. Locally, the Hilbert–Chow resolution is this resolution times the centre coordinates . The calculation explains the symplectic extension at a double collision; collisions of greater length require the general theorem.  "
},
{
  "id": "hkg-def-k3n-type",
  "level": "2",
  "url": "hkg-examples.html#hkg-def-k3n-type",
  "type": "Definition",
  "number": "5.9",
  "title": "",
  "body": "  An irreducible holomorphic symplectic manifold is of type if it is deformation equivalent to for a K3 surface .   "
},
{
  "id": "hkg-def-generalized-kummer",
  "level": "2",
  "url": "hkg-examples.html#hkg-def-generalized-kummer",
  "type": "Definition",
  "number": "5.10",
  "title": "",
  "body": "  For , the generalized Kummer variety is . Our index records half the dimension: . Some authors write or index by the number of points. Here is a K3 surface, whereas is a fourfold.   "
},
{
  "id": "hkg-kummer-smooth",
  "level": "2",
  "url": "hkg-examples.html#hkg-kummer-smooth",
  "type": "Proposition",
  "number": "5.11",
  "title": "",
  "body": "  The map is a surjective holomorphic submersion. The fibre is smooth of dimension , and the symplectic form on restricts to a nondegenerate form on this fibre. If is projective, the fibre is projective.    Translation by induces and satisfies . The differential along the translation orbit is therefore multiplication by from to , hence is invertible. Thus is surjective everywhere. Surjectivity of follows as well, since multiplication by on is surjective.  Let be the induced symplectic form on ; its extension is the surface version of the construction in . For , let be the vector field induced by translation. On the dense open set of distinct points, Both identities extend everywhere, since the forms and vector fields are holomorphic. The translation directions are therefore a nondegenerate two-dimensional subspace, orthogonal to . Their intersection with is zero because . Since the ambient tangent space has dimension , it is the direct sum of these two subspaces. Nondegeneracy of the ambient form then implies nondegeneracy on , the tangent space of each fibre. Projectivity follows because a closed fibre of a projective variety is projective.   "
},
{
  "id": "hkg-kummer-ihs",
  "level": "2",
  "url": "hkg-examples.html#hkg-kummer-ihs",
  "type": "Theorem",
  "number": "5.12",
  "title": "(Beauville).",
  "body": " (Beauville)   For , the manifold is irreducible holomorphic symplectic. For , its BBF lattice and Fujiki constant are In particular for . See .   "
},
{
  "id": "hkg-ogrady-existence",
  "level": "2",
  "url": "hkg-examples.html#hkg-ogrady-existence",
  "type": "Theorem",
  "number": "5.13",
  "title": "(O’Grady).",
  "body": " (O'Grady)    Let be a projective K3 surface with , where is ample and . The moduli space of -semistable torsion-free sheaves with Mukai vector admits a projective symplectic resolution that is an irreducible holomorphic symplectic manifold of dimension ten. Its deformation type is called .  Let be the Jacobian of a genus-two curve, with for its principal polarization . The zero fibre of the determinant-and-Albanese map on the moduli space of -semistable torsion-free sheaves with Mukai vector admits a projective symplectic resolution that is an irreducible holomorphic symplectic manifold of dimension six. Its deformation type is called .   See and .   "
},
{
  "id": "hkg-beauville-donagi",
  "level": "2",
  "url": "hkg-examples.html#hkg-beauville-donagi",
  "type": "Theorem",
  "number": "5.14",
  "title": "(Beauville–Donagi).",
  "body": " (Beauville–Donagi)   For every smooth cubic fourfold , the variety is a smooth projective irreducible holomorphic symplectic fourfold of type. The incidence correspondence of a point on a line induces an isomorphism between the primitive rational Hodge structures and . Primitivity on is with respect to the hyperplane class, and on with respect to the Plücker class. See .   "
},
{
  "id": "hkg-debarre-voisin",
  "level": "2",
  "url": "hkg-examples.html#hkg-debarre-voisin",
  "type": "Theorem",
  "number": "5.15",
  "title": "(Debarre–Voisin).",
  "body": " (Debarre–Voisin)   For in a nonempty Zariski open subset of , the zero locus is a smooth projective irreducible holomorphic symplectic fourfold of type. With its Plücker polarization, it is deformation equivalent to the Hilbert square of a degree-twenty-two K3 surface equipped with the polarization described in .   "
},
{
  "id": "hkg-table-known-deformation-types",
  "level": "2",
  "url": "hkg-examples.html#hkg-table-known-deformation-types",
  "type": "Table",
  "number": "5.16",
  "title": "Numerical invariants of the classical deformation types.",
  "body": " Numerical invariants of the classical deformation types.   Deformation type Dimension  K3  ,  Generalized Kummer,     "
},
{
  "id": "hkg-torelli",
  "level": "1",
  "url": "hkg-torelli.html",
  "type": "Chapter",
  "number": "6",
  "title": "Marked moduli and the Torelli theorems",
  "body": " Marked moduli and the Torelli theorems   Local Torelli gives a period chart near every IHS manifold. Global Torelli describes how these charts fit together: all allowed periods occur, and manifolds in one period fiber are bimeromorphic. To recover an isomorphism one must also compare Kähler cones. The cohomology isometries in the theorem are parallel-transport operators; an arbitrary lattice Hodge isometry need not have this property.  For the global theorems we assume , covering the Hilbert-scheme, generalized Kummer, and O'Grady types. The local results of need no such restriction. We quote global Torelli in the marked formulation of . For Teichmüller space, see and its erratum .    The space of marked manifolds  Fix a lattice occurring as the second cohomology lattice of an IHS manifold, with markings as in .    Marked manifolds and are isomorphic if there is a biholomorphism such that The space of isomorphism classes of marked IHS manifolds with lattice is denoted by , with its analytic structure obtained from local deformation charts. We write for one chosen connected component.    Pullback maps the cohomology of to that of . Replacing by , for , generally changes the marked point.  Each sufficiently small Kuranishi family gives an open chart in after extending its central marking. The existence and gluing of these charts are used here as the construction of the marked moduli space; see . They make it a smooth complex manifold of dimension , with the convention that a complex manifold in this discussion need not be Hausdorff. It is locally Hausdorff because every chart is an ordinary complex manifold.  An automorphism acting trivially on preserves every marking. Thus marked period charts need not glue to a global universal family on .   A fine moduli space represents the family-valued moduli functor and carries a universal family. Classification of isomorphism classes alone is weaker.   The local period maps glue because the Hodge line is invariant under isomorphisms compatible with markings. Thus there is a global holomorphic map It is a local biholomorphism by , without necessarily being injective or a covering map.    Parallel transport and monodromy    A parallel-transport operator from to is an isomorphism obtained by transport along a path in a smooth proper family of IHS manifolds, with its endpoint fibers identified with and . We also allow finite compositions of these operators along a chain of families. The degree-two monodromy group  consists of parallel-transport operators from to itself.    Chains give the usual definition over a connected analytic base by joining bases at endpoint fibers. Reversing paths gives inverses, and concatenating chains gives compositions. Thus transport operators form a groupoid, and is a group.  Transport preserves the integral lattice and BBF form, and extends to total cohomology preserving cup product and topological characteristic classes.  The Hodge filtration is not flat in a varying family. Consequently, a monodromy operator on need not preserve the Hodge decomposition of . We distinguish the subgroup where consists of isometries preserving the Hodge decomposition. A parallel-transport Hodge isometry between two manifolds satisfies both conditions.    Let and be markings. The marked pairs belong to the same connected component of if and only if is a parallel-transport operator.    A connected complex manifold is locally path connected and therefore path connected. Cover a path between the marked points by finitely many Kuranishi charts. The markings are flat in each chart. Their overlap identifications therefore give a chain of transport operators whose composite is .  Conversely, take a chain of families realizing this operator. Extend the marking along each path by flat transport. Each resulting path of marked fibers is continuous in the local deformation charts. At the endpoint the marking is , where . Concatenating the paths connects the two marked points.    For a Kähler class , the ordered triple orients a positive three-space in . Changing the nonzero generator preserves the orientation of the first two vectors; varying in the Kähler cone preserves the resulting component of the oriented positive three-space Grassmannian. This defines the natural positive orientation. Parallel transport preserves it; see . The subgroup of lattice isometries preserving it is denoted by .  Thus ; the inclusion can be strict.   For transport between two different manifolds of type, one must also compare their monodromy orbits of embeddings into the Mukai lattice; see .    For an integral lattice , its dual lattice and discriminant group are The group is finite. An isometry induces an automorphism of . If is even, the discriminant quadratic form is , . Write for its group of form-preserving automorphisms.    (Markman)  If is of type with and , then    We quote . Here , by the lattice decomposition in . Thus membership in monodromy imposes an integral condition beyond positive orientation. For the group has no nonidentity automorphism, so .    Differentiable markings and Teichmüller space  The marked moduli space remembers an identification of second cohomology. Teichmüller space starts with more differentiable information. Fix an oriented differentiable manifold underlying an IHS manifold. Let be the space of integrable complex structures on for which is IHS. Its topology is induced from the smooth topology on tensor fields.    The Teichmüller space of IHS complex structures on is where is the subgroup of diffeomorphisms isotopic to the identity. The mapping class group is , acting on this space.    The notation means orientation-preserving diffeomorphisms. A point in Teichmüller space is a complex structure on the fixed smooth manifold, with two structures identified only when the comparison is isotopic to the identity. A differentiable identification of with a fiber induces a cohomology marking after fixing one isometry . Forgetting the differentiable identification and retaining this cohomology marking relates Teichmüller space to .  A diffeomorphism can act trivially on cohomology without being isotopic to the identity. Period comparisons use the image on second cohomology of the subgroup preserving the chosen component.  The marked formulation uses transport and requires no finiteness assertion about the kernel of the full mapping-class action on cohomology. See the correction in .   The term Torelli group is used for a kernel of a mapping-class action on cohomology. Authors may mean the action on or on total cohomology. It is different from the geometric Torelli theorem, which compares manifolds from Hodge and transport data.     Global Torelli and inseparable points    Two points of a topological space are inseparable if every open neighborhood of meets every open neighborhood of . A point is a Hausdorff point if it is inseparable from no other point.    Inseparability is reflexive and symmetric, but need not be transitive. Global Torelli makes it an equivalence relation on each component of marked IHS moduli.   (Huybrechts, Verbitsky)   Assume , and let be a nonempty connected component of the marked moduli space. The period map is surjective. Every fiber consists of pairwise inseparable points. If two marked points are inseparable, their underlying manifolds are bimeromorphic.    Surjectivity is due to Huybrechts; the description of the period fibers is the global Torelli theorem of Verbitsky, combined with Huybrechts' analysis of inseparability. We use these assertions without proof. Their precise marked formulation is ; gives an exposition of the twistor and separation arguments.    Within , two points are inseparable if and only if they have the same period. Identifying inseparable points gives a Hausdorff complex manifold naturally isomorphic to .    A continuous map to a Hausdorff space sends inseparable points to the same point: if their images were distinct, disjoint neighborhoods of the images would pull back to disjoint neighborhoods. This applies to , since is Hausdorff. The converse is part of . Thus inseparability is equality of periods and is an equivalence relation here.  The quotient map induced by is bijective by surjectivity. It is also open: a local biholomorphism is open, so the image of every open subset of is open in . Hence the induced bijection is a homeomorphism. The local period coordinates give the quotient its complex structure, and in those coordinates the map is the identity. It is therefore a biholomorphism.    This is the birational or separated quotient of the chosen marked component.  The geometric proof uses chains of twistor conics connecting periods, control of their lifts, and the Kähler cone at periods with no integral classes. These global results are quoted.    Birational and isomorphism criteria  A bimeromorphic map of IHS manifolds is an isomorphism in codimension one. Its graph induces a Hodge isometry on second cohomology, and Huybrechts' deformation theorem makes this a transport operator; see .    Let be deformation-equivalent IHS manifolds with . They are bimeromorphic if and only if there is a parallel-transport Hodge isometry between and .    A bimeromorphic map gives such an operator by the result just stated. Conversely, let be a parallel-transport Hodge isometry. Choose a marking and set . By , the two marked pairs belong to the same connected component. Since preserves the line, Their periods are equal. Global Torelli makes them inseparable and hence makes and bimeromorphic.    The specified need not be induced by the resulting bimeromorphic map. Realizing that operator requires a Kähler-class condition.   (Verbitsky, Markman)   Let be deformation-equivalent IHS manifolds with , and let be a parallel-transport Hodge isometry. There is a biholomorphism with if and only if sends some Kähler class of to a Kähler class of . In that case, .    See , in pullback convention. Existence from the Kähler-class condition is quoted; the converse follows by pulling back Kähler forms.  Two such biholomorphisms differ by an automorphism of acting trivially on . For K3 surfaces that action is faithful, giving uniqueness.   For , the geometric map has pullback .    Let be a K3 surface containing a smooth rational curve , and let . Adjunction gives . The reflection is an integral Hodge isometry: it fixes , sends to , and fixes the line because has type . If is Kähler, then Hence is not Kähler, so no automorphism induces . This reflection is a K3 monodromy operator; see .   In higher dimension there is a second issue before one reaches the cone condition: a Hodge isometry may fail to be a transport operator at all. Examples of nonbimeromorphic manifolds with Hodge-isometric second cohomology show that the naive Hodge-theoretic birational statement is false; see . The hypotheses of address that issue, while then distinguishes isomorphism from bimeromorphism.    Period fibers and Kähler chambers  Recall the Kähler cone and the positive cone from . The period and positive orientation select , but its subdivision into Kähler chambers requires further geometric information.    A marked IHS manifold is a Hausdorff point of if and only if . In that case it is the only point in its period fiber inside its connected component. In particular, this holds when , or when has rank one and is generated by a class of nonnegative square.    See . Uniqueness in the period fiber also follows from global Torelli and the Hausdorff-point condition.  Periods with no integral classes are very general by . At special periods, such classes can define Kähler walls, and different chambers can give distinct marked points with the same period. For the description by Kähler-type chambers, see .  The K3 reflection example also exhibits non-Hausdorff points without changing the underlying manifold. Give a marking . The pairs and have the same period. They are distinct marked points because an isomorphism between them would induce , which the preceding Kähler-class calculation excludes. They lie in the same component because is a K3 monodromy operator. Global Torelli makes them inseparable. Thus distinct points in a period fiber need not even represent distinct unmarked isomorphism classes.  Conversely, if is bimeromorphic and is a marking, the compatible marking on is . The induced Hodge transport makes these marked points belong to the same component and have the same period. Arbitrary independently chosen markings need not have this property.   The graph gives the second-cohomology isometry. On total cohomology, deformation transport can require additional correspondence components.     Polarized periods and arithmetic quotients    A polarized IHS manifold is a pair with an ample line bundle. A primitive polarization means that is primitive in . For a fixed positive integral vector , a marked -polarized pair also has a marking satisfying . The vector need not be primitive unless primitive polarizations are specified.    Fixing the polarization class restricts periods to Since , the real form on has signature . The domain has two connected components, each of dimension . They correspond to the two orientation choices for maximal positive two-planes in a space of positive index two. We denote one component by .  Choose a positive two-space and a negative orthogonal complement. Projection of an oriented positive two-plane to is an isomorphism. It preserves or reverses a chosen orientation of ; the sign is locally constant. For each sign, the plane is the graph of a linear map of norm less than one, a convex parameter space. This gives the two components, as in .  The period hyperplane says only that the class is of type . The line bundle with that class can fail to be ample. A marked polarized moduli space is the open part of this Hodge locus on which the corresponding class lies in the Kähler cone. Locally near a polarized pair, ampleness is open, so the deformation space of the pair is smooth of dimension . This is the polarized form of .  Preserving the square alone does not in general specify the deformation type of a polarized pair. Divisibility, defined in , is another invariant of transport. Numerical invariants need not by themselves determine the transport orbit. When discussing a component of polarized moduli, we fix the full polarization orbit appropriate to that component.   The group realized by polarized transport must also be specified. Replacing it by every lattice isometry fixing can change the resulting quotient.   A parallel-transport operator between polarized pairs is called polarized parallel transport if it is realized by a smooth family carrying a flat degree-two integral section that is ample on every fibre and equals the two polarization classes at the endpoints. This definition requires an ample flat class throughout the family; a global relative line bundle is not part of the transport data. It is the definition in .  Choose a polarized base pair and a marking , and set . For this marked deformation component and polarization, the group is Choose to contain the base period. Positive orientation and the fixed vector make preserve this component. It is the image of polarized monodromy, by .    Let be an irreducible component of a coarse moduli space of polarized IHS manifolds with fixed polarization data and . Choose a base pair in and define as above. The period map identifies with a Zariski open subset of the quasi-projective arithmetic quotient .    We quote . Strong Torelli gives injectivity. Proving that the period map is algebraic, and hence that its image is Zariski open, also uses the algebraic construction of polarized moduli and Borel's extension theorem.    Applying Torelli    Let and be polarized IHS manifolds with . If a parallel-transport Hodge isometry satisfies , then there is a biholomorphism with and .    An ample line bundle has a Kähler first Chern class. Thus maps a Kähler class of to one of , and gives . The bundles and have the same first Chern class. The injectivity of proves their isomorphism.    For a proposed automorphism of one manifold, the same criterion says that a Hodge monodromy operator preserving a Kähler class is induced by an automorphism. If one can prove that it preserves the Kähler cone, that stronger cone statement is sufficient. Preservation of the positive cone alone is weaker: the root reflection in preserves the positive-cone component but crosses a Kähler wall.  Here moduli spaces parametrize IHS manifolds. In and , the IHS manifolds themselves parametrize sheaves or stable objects.   "
},
{
  "id": "hkg-definition-marked-isomorphism",
  "level": "2",
  "url": "hkg-torelli.html#hkg-definition-marked-isomorphism",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": "  Marked manifolds and are isomorphic if there is a biholomorphism such that The space of isomorphism classes of marked IHS manifolds with lattice is denoted by , with its analytic structure obtained from local deformation charts. We write for one chosen connected component.   "
},
{
  "id": "hkg-definition-parallel-transport",
  "level": "2",
  "url": "hkg-torelli.html#hkg-definition-parallel-transport",
  "type": "Definition",
  "number": "6.2",
  "title": "",
  "body": "  A parallel-transport operator from to is an isomorphism obtained by transport along a path in a smooth proper family of IHS manifolds, with its endpoint fibers identified with and . We also allow finite compositions of these operators along a chain of families. The degree-two monodromy group  consists of parallel-transport operators from to itself.   "
},
{
  "id": "hkg-proposition-transport-components",
  "level": "2",
  "url": "hkg-torelli.html#hkg-proposition-transport-components",
  "type": "Proposition",
  "number": "6.3",
  "title": "",
  "body": "  Let and be markings. The marked pairs belong to the same connected component of if and only if is a parallel-transport operator.    A connected complex manifold is locally path connected and therefore path connected. Cover a path between the marked points by finitely many Kuranishi charts. The markings are flat in each chart. Their overlap identifications therefore give a chain of transport operators whose composite is .  Conversely, take a chain of families realizing this operator. Extend the marking along each path by flat transport. Each resulting path of marked fibers is continuous in the local deformation charts. At the endpoint the marking is , where . Concatenating the paths connects the two marked points.   "
},
{
  "id": "hkg-def-discriminant-group",
  "level": "2",
  "url": "hkg-torelli.html#hkg-def-discriminant-group",
  "type": "Definition",
  "number": "6.4",
  "title": "",
  "body": " For an integral lattice , its dual lattice and discriminant group are The group is finite. An isometry induces an automorphism of . If is even, the discriminant quadratic form is , . Write for its group of form-preserving automorphisms.  "
},
{
  "id": "hkg-k3-hilbert-monodromy",
  "level": "2",
  "url": "hkg-torelli.html#hkg-k3-hilbert-monodromy",
  "type": "Theorem",
  "number": "6.5",
  "title": "(Markman).",
  "body": " (Markman)  If is of type with and , then   "
},
{
  "id": "hkg-definition-teichmuller",
  "level": "2",
  "url": "hkg-torelli.html#hkg-definition-teichmuller",
  "type": "Definition",
  "number": "6.6",
  "title": "",
  "body": "  The Teichmüller space of IHS complex structures on is where is the subgroup of diffeomorphisms isotopic to the identity. The mapping class group is , acting on this space.   "
},
{
  "id": "hkg-definition-inseparable",
  "level": "2",
  "url": "hkg-torelli.html#hkg-definition-inseparable",
  "type": "Definition",
  "number": "6.7",
  "title": "",
  "body": "  Two points of a topological space are inseparable if every open neighborhood of meets every open neighborhood of . A point is a Hausdorff point if it is inseparable from no other point.   "
},
{
  "id": "hkg-theorem-global-torelli",
  "level": "2",
  "url": "hkg-torelli.html#hkg-theorem-global-torelli",
  "type": "Theorem",
  "number": "6.8",
  "title": "(Huybrechts, Verbitsky).",
  "body": " (Huybrechts, Verbitsky)   Assume , and let be a nonempty connected component of the marked moduli space. The period map is surjective. Every fiber consists of pairwise inseparable points. If two marked points are inseparable, their underlying manifolds are bimeromorphic.   "
},
{
  "id": "hkg-corollary-separated-period-moduli",
  "level": "2",
  "url": "hkg-torelli.html#hkg-corollary-separated-period-moduli",
  "type": "Corollary",
  "number": "6.9",
  "title": "",
  "body": "  Within , two points are inseparable if and only if they have the same period. Identifying inseparable points gives a Hausdorff complex manifold naturally isomorphic to .    A continuous map to a Hausdorff space sends inseparable points to the same point: if their images were distinct, disjoint neighborhoods of the images would pull back to disjoint neighborhoods. This applies to , since is Hausdorff. The converse is part of . Thus inseparability is equality of periods and is an equivalence relation here.  The quotient map induced by is bijective by surjectivity. It is also open: a local biholomorphism is open, so the image of every open subset of is open in . Hence the induced bijection is a homeomorphism. The local period coordinates give the quotient its complex structure, and in those coordinates the map is the identity. It is therefore a biholomorphism.   "
},
{
  "id": "hkg-theorem-birational-torelli",
  "level": "2",
  "url": "hkg-torelli.html#hkg-theorem-birational-torelli",
  "type": "Theorem",
  "number": "6.10",
  "title": "",
  "body": "  Let be deformation-equivalent IHS manifolds with . They are bimeromorphic if and only if there is a parallel-transport Hodge isometry between and .    A bimeromorphic map gives such an operator by the result just stated. Conversely, let be a parallel-transport Hodge isometry. Choose a marking and set . By , the two marked pairs belong to the same connected component. Since preserves the line, Their periods are equal. Global Torelli makes them inseparable and hence makes and bimeromorphic.   "
},
{
  "id": "hkg-theorem-strong-torelli",
  "level": "2",
  "url": "hkg-torelli.html#hkg-theorem-strong-torelli",
  "type": "Theorem",
  "number": "6.11",
  "title": "(Verbitsky, Markman).",
  "body": " (Verbitsky, Markman)   Let be deformation-equivalent IHS manifolds with , and let be a parallel-transport Hodge isometry. There is a biholomorphism with if and only if sends some Kähler class of to a Kähler class of . In that case, .   "
},
{
  "id": "hkg-example-root-reflection",
  "level": "2",
  "url": "hkg-torelli.html#hkg-example-root-reflection",
  "type": "Example",
  "number": "6.12",
  "title": "",
  "body": " Let be a K3 surface containing a smooth rational curve , and let . Adjunction gives . The reflection is an integral Hodge isometry: it fixes , sends to , and fixes the line because has type . If is Kähler, then Hence is not Kähler, so no automorphism induces . This reflection is a K3 monodromy operator; see .  "
},
{
  "id": "hkg-theorem-period-fiber-hausdorff",
  "level": "2",
  "url": "hkg-torelli.html#hkg-theorem-period-fiber-hausdorff",
  "type": "Theorem",
  "number": "6.13",
  "title": "",
  "body": "  A marked IHS manifold is a Hausdorff point of if and only if . In that case it is the only point in its period fiber inside its connected component. In particular, this holds when , or when has rank one and is generated by a class of nonnegative square.   "
},
{
  "id": "hkg-definition-polarized-ihs",
  "level": "2",
  "url": "hkg-torelli.html#hkg-definition-polarized-ihs",
  "type": "Definition",
  "number": "6.14",
  "title": "",
  "body": "  A polarized IHS manifold is a pair with an ample line bundle. A primitive polarization means that is primitive in . For a fixed positive integral vector , a marked -polarized pair also has a marking satisfying . The vector need not be primitive unless primitive polarizations are specified.   "
},
{
  "id": "hkg-theorem-polarized-moduli-period",
  "level": "2",
  "url": "hkg-torelli.html#hkg-theorem-polarized-moduli-period",
  "type": "Theorem",
  "number": "6.15",
  "title": "",
  "body": "  Let be an irreducible component of a coarse moduli space of polarized IHS manifolds with fixed polarization data and . Choose a base pair in and define as above. The period map identifies with a Zariski open subset of the quasi-projective arithmetic quotient .   "
},
{
  "id": "hkg-proposition-polarized-torelli-application",
  "level": "2",
  "url": "hkg-torelli.html#hkg-proposition-polarized-torelli-application",
  "type": "Proposition",
  "number": "6.16",
  "title": "",
  "body": "  Let and be polarized IHS manifolds with . If a parallel-transport Hodge isometry satisfies , then there is a biholomorphism with and .    An ample line bundle has a Kähler first Chern class. Thus maps a Kähler class of to one of , and gives . The bundles and have the same first Chern class. The injectivity of proves their isomorphism.   "
},
{
  "id": "hkg-cones",
  "level": "1",
  "url": "hkg-cones.html",
  "type": "Chapter",
  "number": "7",
  "title": "Kähler cones and birational geometry",
  "body": " Kähler cones and birational geometry   The period determines which integral classes have type . It does not determine which positive classes are Kähler. The additional data are chambers separated by negative classes. This chapter describes those chambers and distinguishes walls that contract divisors from walls that separate small birational models.    Projectivity and positivity  Recall the projectivity criterion of and the definition of nef classes . A nef line bundle of positive BBF square defines a birational contraction, as follows.  On a projective manifold, the nef cone of divisor classes is the intersection of this closure with ; it is also characterized by nonnegative degree on every curve. The two conventions live in different ambient spaces. We write when is projective. The ample cone is .   A line bundle is semiample if is generated by global sections for some . On a projective variety of dimension , it is big if    Let be a nef line bundle on an IHS manifold with . Then is projective and is big and semiample. A sufficiently divisible power defines, after Stein factorization, a birational morphism onto a normal projective variety. An irreducible curve is contracted if and only if .  Projectivity follows from . Fujiki's identity gives . We use the general theorem that a nef line bundle on a projective variety is big precisely when its top self-intersection is positive; see . The base-point-free theorem then applies, since is smooth, , and is nef and big. In this specialization it asserts that all sufficiently large powers are generated; see . These two positivity theorems are quoted.  Take the Stein factorization of the resulting morphism. Then for an ample bundle on a normal projective . The positive top self-intersection forces . Thus is generically finite. Its Stein condition makes the generic degree one, so is birational. Finally, is equivalent to ; ampleness of makes this equivalent to being a point.    (Huybrechts–Boucksom)  For an IHS manifold ,    Here a rational curve is an irreducible reduced curve whose normalization is . The theorem includes nonprojective ; see and . The restriction is part of the statement. Positivity on rational curves alone is not a criterion outside that component.   If has no rational curves, then . In particular this holds when .  The first assertion follows directly from the theorem. For the second, suppose a curve exists. Nondegeneracy of the rational BBF form gives a class characterized by Integration over a complex curve annihilates and . The Hodge orthogonality of therefore makes a rational class. It is nonzero because a Kähler class has strictly positive integral on . An integral multiple would define a nontrivial line bundle by , a contradiction. Thus there are no curves at all.    If and , then exactly one of is ample.  The projectivity criterion supplies an ample bundle . Write with . A line bundle is ample if a positive tensor power is ample, so is ample when and is ample when . They cannot both be ample, since their classes belong to opposite components of the positive-square locus.     A wall on a K3 surface  Let be a projective K3 surface and a smooth rational curve. The adjunction formula gives . Choose an ample class , and set Direct calculation gives and . Also , so belongs to the positive cone.  For any irreducible curve , the intersection is nonnegative, hence . For every , the class is positive and has positive integral on every rational curve; it is therefore Kähler. Thus is nef but not Kähler. Positive BBF square by itself permits boundary classes.  The reflection in exchanges the two sides of this wall, as calculated in . Thus preservation of the positive cone by a Hodge isometry does not guarantee preservation of the Kähler cone. The general K3 chamber theorem is discussed in .    Identifying the second cohomology of birational models  A bimeromorphic map between IHS manifolds is an isomorphism outside subsets of codimension at least two. It induces an integral Hodge isometry See . A common resolution and the graph correspondence define the same map on . The graph correspondence need not preserve products on total cohomology. The second-cohomology isometry does not assert this stronger property.  When discussing several birational models, all their degree-two classes are transported to by these maps. The Hodge structure and pairing are then fixed, while their Kähler cones can be different.   The birational Kähler cone is the union where runs through IHS manifolds bimeromorphic to . Its closure is taken in .   This union need not be convex. Distinct Kähler chambers can be separated by a hyperplane missing from the union even when that hyperplane belongs to its closure. The distinction matters when comparing an open union with a closed movable cone.  For projective , a line bundle is movable if is nonempty and its base locus has codimension at least two. Let be the convex cone generated by the first Chern classes of such line bundles. We use for its closure in . Some references call the closure itself the movable cone. The open interior, the cone generated by movable integral divisors, and its closure should be compared with their definitions in view.  The relation with birational Kähler classes is We use the divisorial Zariski decomposition theorem behind this identity without proof; see . It follows that birational changes reorganize nef chambers inside a fixed closed movable cone.    MBM classes and chamber walls  The class defined in identifies rational curve functionals with rational degree-two classes by the BBF form. This identification need not be integral. For example, denominators can occur when the BBF lattice is not unimodular. A negative rational ray has a primitive integral generator, whose square depends on this integral normalization.   Let have . It is monodromy birationally minimal , abbreviated MBM, if there are a monodromy isometry and a birational model such that is of type on and its orthogonal hyperplane contains a wall of . A wall here means that its intersection with contains a nonempty relatively open subset of that hyperplane.   This is in cohomological notation. Replacing by a nonzero rational multiple does not change its hyperplane or MBM property. We usually take primitive integral representatives to avoid listing the same wall repeatedly.   (Amerik–Verbitsky)  The MBM property is invariant under deformation and parallel transport as long as the class remains of type . Let be the primitive integral MBM classes of type on . Then is a connected component of If , every component admits a birational model and a Hodge monodromy isometry such that .   We quote the deformation and chamber assertions from . These basic MBM assertions have no additional lower bound on . For the final identification by Hodge monodromy, we use the global Torelli range of and the Kähler-type chamber formulation in . The definition allows monodromy and birational changes because the existence of an extremal curve on one particular model is not itself deformation-invariant. On a special fiber a curve may split into components. Its transported negative class can remain MBM even if it no longer determines an extremal ray on that model.  The notation refers to a full hyperplane in . Its part inside the positive cone may contain several walls. An MBM hyperplane need not support the Kähler cone of the original model. The cone is recovered by taking the chamber containing a chosen Kähler class, not by imposing one common sign on all classes in , which contains both and .  A negative integral class in is also called MBM if it becomes an MBM class on some deformation where its parallel transport has type . Deformation invariance makes this independent of the chosen deformation on which it has that type; see . This convention defines a monodromy-invariant set in the full lattice, including classes that are not of type on . In the chamber theorem, is the subset that is of type on .   A slice of the cone . Three negative-vector orthogonals cut the disk into chambers. The green chamber contains ; the point lies on one of its walls while still having positive square.   A blue unit disk is cut by three straight chords. A central green chamber contains a point alpha. A point eta on its left chord is inside the disk but on the chamber boundary. The circle is the isotropic boundary; the straight chords are orthogonals of negative vectors.    The slice in is a Lorentz-space model. Its circle is the isotropic boundary, whereas its chords lie inside the positive cone. This separates two ways in which a nef class can fail to be Kähler: it can be isotropic, or it can have positive square and lie on a wall.  For a prime divisor with , the wall has divisorial significance. Such divisors are called prime exceptional divisors. Their inequalities define the fundamental exceptional chamber This chamber is convex. One has , and, for projective , its intersection with is the interior of the movable cone; see . Additional MBM walls can divide this region into the Kähler chambers of small birational models.    Lagrangian projective spaces and local flops  Let be a Lagrangian submanifold of a holomorphic symplectic -fold. The symplectic form induces an isomorphism It is well-defined because vanishes on . Its kernel is zero because the symplectic orthogonal of the Lagrangian subspace is itself. The ranks agree, proving the isomorphism.  Consider the explicit model , whose zero section has this normal bundle. For , blowing up its zero section produces an exceptional divisor , with the convention of one-dimensional subspaces. Its points can be identified with incident pairs , where a line lies in a hyperplane . Indeed, a nonzero cotangent vector at , up to scale, is a nonzero map up to scale, and its kernel determines .  The incidence variety has projections to and its dual. Contracting along the other projection exchanges the two cotangent models. This is the local Mukai flop. It is an isomorphism away from the zero sections, so it changes the geometry of codimension at least two. For a compact embedding, existence of a global second contraction and the Kähler or projective property of its target are additional assertions; the local description alone does not establish them.  The two contractions in this model can be written explicitly. Let and equipped with its reduced affine variety structure. For rank at most one, the trace-zero condition is equivalent to . A point of is a pair with . Forgetting maps it to . At a nonzero point of , the line is forced to be ; over zero the fiber is . The dual resolution remembers the hyperplane instead. The common blowup remembers the incident pair , and the scalar endomorphism from to is its remaining fiber coordinate. Its zero section is the exceptional incidence divisor. This describes both contractions without inferring an analytic neighborhood theorem from a normal-bundle computation.  This explains why a small wall need not be detected by a negative divisor. A line in the Lagrangian projective space can have zero degree against a nef boundary class even though no divisor is contracted. Moduli spaces of sheaves and stable objects provide global instances in which the two chambers and the wall-crossing maps can be constructed.   Let be a smooth rational curve on a projective K3 surface. The closed submanifold of is Lagrangian. On the open set of two distinct points the symplectic form is the sum of the surface forms, both zero on the two curve directions. Its restriction is holomorphic, so it vanishes everywhere on .  Write , let be a line in this plane, and let be half the integral class of the Hilbert–Chow exceptional divisor , as in . A class restricts to . This can be tested on the line of unordered pairs with fixed and varying. The nonreduced pairs form a conic in . The restriction of has multiplicity one: in the local chart of , with , the plane is and is . Thus , so .  Using the orthogonal decomposition , with , the rational BBF dual of the curve functional is therefore Indeed, and . The corresponding primitive integral class is , whose square is . The square describes the rational curve functional; the square describes its primitive integral degree-two representative. They refer to the same orthogonal hyperplane, with different normalizations.     Periods of hyperkähler metrics  Fix the smooth manifold underlying an IHS manifold of dimension , and let . A hyperkähler metric determines the positive three-plane oriented by the displayed triple. Rotating by preserves this orientation and does not change the metric. The induced complex structures form the sphere in this oriented three-space, as in .   The three Kähler classes are mutually BBF-orthogonal, with a common square , and Thus unit volume fixes . Scaling the metric by multiplies the Kähler forms by , their BBF squares by , and the volume by , while preserving .  Orthogonality and equality of the three squares are . For any induced structure, the Riemannian volume form is . Integrating and applying Fujiki gives the formula. The scaling assertions follow from , the quadratic nature of , and the displayed volume formula.    Let be the space of unit-volume hyperkähler metrics on with holonomy exactly , modulo pullback by , the identity component of the diffeomorphism group. Its period map is . For a connected component , let be the component of the Grassmannian of oriented positive three-planes containing its periods, and let be the primitive integral MBM classes belonging to its compatible complex deformation component.   Equivalently, begin with unit-volume quadruples , divide by rotation of the triple through , and then divide by . Allowing arbitrary volume adds a positive real scale. Retaining but forgetting instead gives a space of pairs whose projection to has twistor fiber . Thus the full triple has rotation fiber , whereas a chosen induced complex structure has fiber .   (Amerik–Verbitsky; Looijenga)  Suppose . On each connected component , the metric period map is a diffeomorphism onto the open subset In particular, it is a local diffeomorphism.   We quote the componentwise statement from , in the Torelli range used above; see also . Looijenga's is this metric space; his retains the chosen complex structure. The assertion is about one connected component. Elements of the mapping class group acting trivially on can move components; no single global injectivity statement for their union follows.  The excluded planes have a direct geometric meaning. If , then has type for every induced structure and pairs to zero with its Kähler class, contradicting . Conversely, for a plane outside the excluded sets, choose a generic oriented two-plane inside it. The countably many MBM classes can all be avoided as Hodge classes: each class has nonzero projection to and excludes just one unoriented two-plane in . Period surjectivity in the compatible complex deformation component supplies a complex structure; its Kähler cone is the positive cone because it has no Hodge MBM classes. The compatible normal ray is then Kähler, and the Calabi–Yau theorem constructs a metric with period . The global injectivity is the additional assertion of the quoted theorem.   The space , and hence each component of the unit-volume metric Teichmüller space in the preceding theorem, has real dimension . For a negative class , the locus has real codimension three.  Near a positive three-plane , every nearby plane is the graph of a linear map . Positivity is an open condition on . Consequently If , its orthogonal complement has signature . Its positive-three-plane Grassmannian therefore has dimension , proving the codimension statement.   For a K3 surface, : the unit-volume metric space has local real dimension fifty-seven, and including scale gives fifty-eight. Retaining a chosen induced complex structure adds two real dimensions; retaining the full quaternionic triple adds three. These additions come from the respective sphere and rotation fibers.   "
},
{
  "id": "hkg-def-semiample",
  "level": "2",
  "url": "hkg-cones.html#hkg-def-semiample",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": " A line bundle is semiample if is generated by global sections for some . On a projective variety of dimension , it is big if  "
},
{
  "id": "hkg-nef-positive-contraction",
  "level": "2",
  "url": "hkg-cones.html#hkg-nef-positive-contraction",
  "type": "Proposition",
  "number": "7.2",
  "title": "",
  "body": " Let be a nef line bundle on an IHS manifold with . Then is projective and is big and semiample. A sufficiently divisible power defines, after Stein factorization, a birational morphism onto a normal projective variety. An irreducible curve is contracted if and only if .  Projectivity follows from . Fujiki's identity gives . We use the general theorem that a nef line bundle on a projective variety is big precisely when its top self-intersection is positive; see . The base-point-free theorem then applies, since is smooth, , and is nef and big. In this specialization it asserts that all sufficiently large powers are generated; see . These two positivity theorems are quoted.  Take the Stein factorization of the resulting morphism. Then for an ample bundle on a normal projective . The positive top self-intersection forces . Thus is generically finite. Its Stein condition makes the generic degree one, so is birational. Finally, is equivalent to ; ampleness of makes this equivalent to being a point.  "
},
{
  "id": "hkg-kahler-rational-curves",
  "level": "2",
  "url": "hkg-cones.html#hkg-kahler-rational-curves",
  "type": "Theorem",
  "number": "7.3",
  "title": "(Huybrechts–Boucksom).",
  "body": " (Huybrechts–Boucksom)  For an IHS manifold ,   "
},
{
  "id": "hkg-no-curves-kahler",
  "level": "2",
  "url": "hkg-cones.html#hkg-no-curves-kahler",
  "type": "Corollary",
  "number": "7.4",
  "title": "",
  "body": " If has no rational curves, then . In particular this holds when .  The first assertion follows directly from the theorem. For the second, suppose a curve exists. Nondegeneracy of the rational BBF form gives a class characterized by Integration over a complex curve annihilates and . The Hodge orthogonality of therefore makes a rational class. It is nonzero because a Kähler class has strictly positive integral on . An integral multiple would define a nontrivial line bundle by , a contradiction. Thus there are no curves at all.  "
},
{
  "id": "hkg-rank-one-ample",
  "level": "2",
  "url": "hkg-cones.html#hkg-rank-one-ample",
  "type": "Corollary",
  "number": "7.5",
  "title": "",
  "body": " If and , then exactly one of is ample.  The projectivity criterion supplies an ample bundle . Write with . A line bundle is ample if a positive tensor power is ample, so is ample when and is ample when . They cannot both be ample, since their classes belong to opposite components of the positive-square locus.  "
},
{
  "id": "hkg-birational-kahler-cone",
  "level": "2",
  "url": "hkg-cones.html#hkg-birational-kahler-cone",
  "type": "Definition",
  "number": "7.6",
  "title": "",
  "body": " The birational Kähler cone is the union where runs through IHS manifolds bimeromorphic to . Its closure is taken in .  "
},
{
  "id": "hkg-def-mbm",
  "level": "2",
  "url": "hkg-cones.html#hkg-def-mbm",
  "type": "Definition",
  "number": "7.7",
  "title": "",
  "body": " Let have . It is monodromy birationally minimal , abbreviated MBM, if there are a monodromy isometry and a birational model such that is of type on and its orthogonal hyperplane contains a wall of . A wall here means that its intersection with contains a nonempty relatively open subset of that hyperplane.  "
},
{
  "id": "hkg-mbm-theorem",
  "level": "2",
  "url": "hkg-cones.html#hkg-mbm-theorem",
  "type": "Theorem",
  "number": "7.8",
  "title": "(Amerik–Verbitsky).",
  "body": " (Amerik–Verbitsky)  The MBM property is invariant under deformation and parallel transport as long as the class remains of type . Let be the primitive integral MBM classes of type on . Then is a connected component of If , every component admits a birational model and a Hodge monodromy isometry such that .  "
},
{
  "id": "hkg-figure-positive-cone-chambers",
  "level": "2",
  "url": "hkg-cones.html#hkg-figure-positive-cone-chambers",
  "type": "Figure",
  "number": "7.9",
  "title": "",
  "body": " A slice of the cone . Three negative-vector orthogonals cut the disk into chambers. The green chamber contains ; the point lies on one of its walls while still having positive square.   A blue unit disk is cut by three straight chords. A central green chamber contains a point alpha. A point eta on its left chord is inside the disk but on the chamber boundary. The circle is the isotropic boundary; the straight chords are orthogonals of negative vectors.   "
},
{
  "id": "hkg-hilbert-plane-curve-class",
  "level": "2",
  "url": "hkg-cones.html#hkg-hilbert-plane-curve-class",
  "type": "Example",
  "number": "7.10",
  "title": "",
  "body": " Let be a smooth rational curve on a projective K3 surface. The closed submanifold of is Lagrangian. On the open set of two distinct points the symplectic form is the sum of the surface forms, both zero on the two curve directions. Its restriction is holomorphic, so it vanishes everywhere on .  Write , let be a line in this plane, and let be half the integral class of the Hilbert–Chow exceptional divisor , as in . A class restricts to . This can be tested on the line of unordered pairs with fixed and varying. The nonreduced pairs form a conic in . The restriction of has multiplicity one: in the local chart of , with , the plane is and is . Thus , so .  Using the orthogonal decomposition , with , the rational BBF dual of the curve functional is therefore Indeed, and . The corresponding primitive integral class is , whose square is . The square describes the rational curve functional; the square describes its primitive integral degree-two representative. They refer to the same orthogonal hyperplane, with different normalizations.  "
},
{
  "id": "hkg-metric-volume-normalization",
  "level": "2",
  "url": "hkg-cones.html#hkg-metric-volume-normalization",
  "type": "Proposition",
  "number": "7.11",
  "title": "",
  "body": " The three Kähler classes are mutually BBF-orthogonal, with a common square , and Thus unit volume fixes . Scaling the metric by multiplies the Kähler forms by , their BBF squares by , and the volume by , while preserving .  Orthogonality and equality of the three squares are . For any induced structure, the Riemannian volume form is . Integrating and applying Fujiki gives the formula. The scaling assertions follow from , the quadratic nature of , and the displayed volume formula.  "
},
{
  "id": "hkg-def-metric-teich",
  "level": "2",
  "url": "hkg-cones.html#hkg-def-metric-teich",
  "type": "Definition",
  "number": "7.12",
  "title": "",
  "body": " Let be the space of unit-volume hyperkähler metrics on with holonomy exactly , modulo pullback by , the identity component of the diffeomorphism group. Its period map is . For a connected component , let be the component of the Grassmannian of oriented positive three-planes containing its periods, and let be the primitive integral MBM classes belonging to its compatible complex deformation component.  "
},
{
  "id": "hkg-metric-period-theorem",
  "level": "2",
  "url": "hkg-cones.html#hkg-metric-period-theorem",
  "type": "Theorem",
  "number": "7.13",
  "title": "(Amerik–Verbitsky; Looijenga).",
  "body": " (Amerik–Verbitsky; Looijenga)  Suppose . On each connected component , the metric period map is a diffeomorphism onto the open subset In particular, it is a local diffeomorphism.  "
},
{
  "id": "hkg-metric-period-dimension",
  "level": "2",
  "url": "hkg-cones.html#hkg-metric-period-dimension",
  "type": "Proposition",
  "number": "7.14",
  "title": "",
  "body": " The space , and hence each component of the unit-volume metric Teichmüller space in the preceding theorem, has real dimension . For a negative class , the locus has real codimension three.  Near a positive three-plane , every nearby plane is the graph of a linear map . Positivity is an open condition on . Consequently If , its orthogonal complement has signature . Its positive-three-plane Grassmannian therefore has dimension , proving the codimension statement.  "
},
{
  "id": "hkg-sheaf-moduli",
  "level": "1",
  "url": "hkg-sheaf-moduli.html",
  "type": "Chapter",
  "number": "8",
  "title": "Moduli spaces of sheaves on symplectic surfaces",
  "body": " Moduli spaces of sheaves on symplectic surfaces   Moduli spaces of sheaves explain both the Hilbert-scheme examples and many of their deformations. Gieseker semistability gives a projective moduli space, and Serre duality gives a symplectic form on its stable locus. For primitive vectors and generic polarizations, the global theorems below determine when this space is nonempty and irreducible holomorphic symplectic.  Throughout the K3 part of this chapter, is a projective K3 surface over and is an ample line bundle. Coherent sheaves, their Chern characters, Serre duality, and Riemann–Roch are assumed. Boundedness and the construction of moduli spaces by geometric invariant theory are taken from . We state the needed conclusions without developing GIT. The symplectic construction follows Mukai, and the global geometry follows Yoshioka; gives a systematic account.    The Mukai vector and pairing  Write for the class with integral one. We identify a class in even cohomology with a triple , meaning . The last entry is a number, not a second Chern class. Since ,    The Mukai lattice of is , with pairing Its weight-two Hodge structure has , , and . Its algebraic part is . The Mukai vector of a coherent sheaf is    We write . The square is even, since the K3 intersection form is even. Thus is integral. The summand has matrix , which is isometric to by changing the sign of one basis vector. Consequently, an even unimodular lattice of signature . The weight-two Hodge structure on even cohomology differs from its ordinary cohomological grading. In particular, the classes of a point and of the constant function have Hodge type in the Mukai Hodge structure. This is why can later carry the Hodge structure of the second cohomology of a moduli space.    For coherent sheaves on , In particular, if , then .    A coherent sheaf on the smooth surface has a finite locally free resolution, so Riemann–Roch applies to its class in the Grothendieck group. If for , the Chern character of the dual class is obtained by this involution. Thus The degree-four part is , proving the formula. Taking , whose vector is , gives .     A line bundle with first Chern class has and square . A skyscraper sheaf has vector and square zero. If has length , the exact sequence gives and square . These examples already account for moduli spaces of dimensions zero, two, and .     Let be a line bundle on with . Tensor product by acts on Mukai vectors by the integral Hodge isometry    The Chern character satisfies , giving the formula. The evenness of gives integrality. If and , then Its inverse is . Since has Hodge type , the map preserves the Mukai Hodge decomposition.    The action on the lattice does not by itself identify moduli spaces for a fixed stability condition. Tensoring by preserves -Gieseker stability because it replaces every Hilbert polynomial by . Tensoring by an arbitrary line bundle requires a separate check: after equality of the slope coefficients, the comparison of constant terms can change by the intersection with . The lattice isometry and preservation of sheaf stability are separate assertions.    Stability and the projective moduli space    A nonzero coherent sheaf is pure of dimension if every nonzero subsheaf has support of dimension . Let , and divide this polynomial by its positive leading coefficient to obtain its reduced Hilbert polynomial  . A pure sheaf is -Gieseker semistable if for all sufficiently large and every proper nonzero subsheaf . It is stable if all these inequalities are strict.    On the smooth integral surface , a positive-rank sheaf is pure of dimension two exactly when it is torsion-free. For , Riemann–Roch gives When and is pure of dimension one, this becomes . Thus its reduced polynomial is . The stability condition depends on even after the Mukai vector is fixed.  For a torsion-free sheaf of positive rank, its slope is . It is slope semistable , respectively slope stable , if , respectively , for every subsheaf with .   For a torsion-free sheaf of positive rank on ,  After division by the leading coefficient in , the linear coefficient is . A strict slope inequality therefore decides the reduced-polynomial inequality for sufficiently large . A proper subsheaf of the same rank has a nonzero quotient of dimension at most one; subtracting that quotient's positive Hilbert polynomial also gives a strict inequality. This proves the first implication. The middle implication is part of the definition. Finally, a subsheaf of larger slope has larger reduced Hilbert polynomial for sufficiently large , contradicting Gieseker semistability.   The Hermitian–Einstein correspondence in uses slope polystability. The projective moduli scheme in this chapter uses Gieseker semistability; when slopes agree, its constant-term condition still has to be checked.  A semistable sheaf has a Jordan–Hölder filtration with stable factors of the same reduced Hilbert polynomial. The direct sum of these factors is independent of the filtration up to isomorphism. Two semistable sheaves are S-equivalent if these direct sums are isomorphic. These assertions, including existence of the filtration in the category of semistable sheaves with fixed reduced polynomial, are part of the standard stability theory in .    For fixed , there is a projective coarse moduli scheme for -Gieseker semistable sheaves of Mukai vector . Its closed points are S-equivalence classes. The stable sheaves form an open subscheme , whose closed points are isomorphism classes of stable sheaves. The scheme may be empty.    Boundedness, construction, and projectivity are proved in .  The projective moduli space includes torsion-free sheaves that are not locally free. Restricting to vector bundles generally gives an open set and loses compactness. Likewise, the stable locus need not be closed when strictly semistable sheaves exist.    Fix . We call  -generic if every stable Jordan–Hölder factor of every -semistable sheaf of vector has Mukai vector in . A vector is primitive if it is not an integer multiple with and integral .    For the positive-rank vectors considered below, a locally finite collection of real hyperplanes in the ample cone contains the nongeneric polarizations; the analogous wall statement holds for the ample rank-zero classes below when . We use this wall theorem from and . The assertion includes local finiteness, which is needed to find ample integral polarizations off the walls. It is not enough to exclude one subsheaf at a time. The definition is phrased in terms of proportional Mukai vectors so that it also applies to nonprimitive . It does not say that all semistable sheaves are stable when is nonprimitive: proportional proper factors can still occur.    If is primitive and is -generic, then every semistable sheaf of vector is stable. In this case write .    Write the vectors of the stable factors as , with and . If is a primitive element of a free abelian group, then is integral for only when : extend to an integral basis, or choose an integral functional taking value one on . Thus every is a positive integer. Their sum can be one only if there is one factor.    For positive rank, the equations that define possible walls can be seen directly from . If has ranks and first Chern classes , equality of the reduced polynomials requires The first equality is a hyperplane equation when its class is nonzero. The boundedness and discriminant estimates in the cited wall theorem show that only locally finitely many such hyperplanes matter. This is where the general theory enters the generic-polarization assertion.    Deformations and the symplectic form    An -stable sheaf is simple: . If are nonisomorphic stable sheaves with the same reduced Hilbert polynomial, then .    Let be nonzero. Its image has the same dimension as and by purity. If the kernel is nonzero, stability of and additivity of the Hilbert polynomial imply : the polynomial of is a positive weighted average of those of its kernel and image. Stability of gives , a contradiction. Thus the kernel is zero, and . Stability of forces , so is an isomorphism.  In particular every nonzero endomorphism of is invertible. The algebra is finite-dimensional over . For any in this algebra, its minimal polynomial has a root ; then cannot be invertible. Hence it is zero, proving simplicity.    We use the following deformation-theoretic statement for sheaves on a smooth projective surface. The tangent space to the stable coarse moduli scheme at is . Obstructions to lifting a deformation across a square-zero extension lie in , and their trace is the corresponding obstruction to deforming . In particular, if the Picard scheme is smooth, the obstruction classes lie in We take this theorem from ; the trace-obstruction statement is also given in . It applies to torsion-free and pure one-dimensional sheaves, not only to vector bundles.    Let be an -stable sheaf on , and let . Then is smooth at , with In particular, a vector with cannot be represented by a stable sheaf.    Choose a nonzero form , identifying with . Serre duality and give . Under Serre duality, the trace map to is dual to the map sending to . This map is an isomorphism, so the trace map is an isomorphism as well. Consequently .  The Picard scheme of is smooth: its tangent space is , and in characteristic zero the Picard scheme of a smooth projective variety is reduced. The cited obstruction theorem therefore gives smoothness. Finally, which gives the dimension formula and the necessary inequality.    The proof does not assert ; that group is one-dimensional. It is the trace-free obstruction space that vanishes. For a positive-rank bundle, one sometimes uses the scalar inclusion and ordinary matrix trace, whose composite is multiplication by the rank. That argument would say nothing for a rank-zero sheaf. The Serre-dual description above works in both cases because the dual map sends to the identity endomorphism.  Normalize the Serre-duality functional by : where is the Serre trace. At a stable sheaf, define with denoting the Yoneda product.   (Mukai)   The pairings define a closed holomorphic nondegenerate two-form on . See and .    At a stable sheaf, graded cyclicity of trace gives , so the pairing is alternating. Serre duality gives a perfect pairing between and ; multiplication by identifies the second space with the first. Thus the displayed form is nondegenerate. Global holomorphic variation, descent from local universal families, and closedness are the additional assertions of Mukai's theorem. Pointwise Serre duality alone does not prove closedness.  When a universal family exists locally on the moduli space, its relative Ext sheaf in degree one is the tangent bundle. On overlaps the families differ by a line bundle from the base. This line bundle cancels from the relative endomorphism complex, so the pairing descends. This also explains why the absence of a global universal sheaf does not obstruct the symplectic form.    Nonemptiness and the global geometry   (Mukai–Yoshioka)   Let be primitive, let be -generic, and assume either , or , is the class of an ample line bundle, and . Then is nonempty if and only if . When it is nonempty, it is smooth and projective of dimension . More precisely:   If , then is a point.  If , then is a K3 surface.  If , then is an irreducible holomorphic symplectic manifold of type.   The positive-rank statement and Mukai isometry are proved in ; the deformation-equivalence statement including ample rank-zero classes is . The isotropic case and the zero-dimensional case are also discussed in .    The inequality is necessary by the tangent-space calculation. Its sufficiency is a substantial existence theorem. Neither the dimension calculation nor the construction of a symplectic form produces a sheaf with prescribed Chern classes. The irreducibility and simple connectedness of the compact moduli space likewise belong to the global theorem.  The zero-dimensional conclusion has a short proof once existence is known. Suppose and are distinct stable sheaves of the same vector with . They have the same reduced Hilbert polynomial, so . Serre duality gives . It follows that , whereas Riemann–Roch gives . This contradiction proves uniqueness; smoothness of dimension zero makes the moduli scheme a reduced point.  The rank-zero hypothesis in is a sufficient hypothesis, not a definition of all possible support classes. Sheaves can also have reducible or nonample support. Their existence and chamber behaviour require the appropriate rank-zero versions of the theorem. The condition also has a role: when , every pure sheaf of Euler characteristic zero has reduced Hilbert polynomial , regardless of its support class. If and there are stable pure sheaves of vectors and , their direct sum is strictly semistable for every . Primitivity of the total vector does not eliminate this phenomenon. Additional support assumptions or a change of stability are needed to treat such cases. The adjective positive for a Mukai vector is used with several conventions in this literature. It records rank or effectivity conditions and must not be read as . The statements here give their rank and divisor hypotheses explicitly.   Take . Every torsion-free rank-one sheaf has a line-bundle double dual , and is supported in dimension zero. Since and , the line bundle is . Thus for a length- subscheme .  Every torsion-free rank-one sheaf is Gieseker stable. Indeed, a proper rank-one subsheaf has a nonzero quotient of dimension at most one; subtracting its positive Hilbert polynomial makes the reduced polynomial strictly smaller. There are no nonzero lower-dimensional subsheaves. Consequently, This is an isomorphism of moduli spaces, not just a bijection of closed points: an ideal sheaf gives a flat family of finite subschemes, and a family of the rank-one sheaves above becomes a family of ideals after tensoring by a line bundle from the base. The relative statement is proved in .     Universal families and the Mukai isometry  A coarse moduli space records the isomorphism class of each stable sheaf but need not carry a sheaf whose restriction to every point is that sheaf. A universal sheaf is such a family on , with the usual universal property for families up to tensoring by line bundles from the parameter scheme. When it exists, the moduli space is called fine in the sheaf-moduli sense.  Scalar automorphisms of a stable sheaf explain the possible failure of descent. Local universal families can be chosen on an étale cover of the stable moduli space. On pairwise overlaps they differ by line bundles from the base; on triple overlaps their identifications can fail the cocycle condition by invertible scalars. These scalars define a Brauer obstruction. A twisted universal sheaf keeps track of this obstruction; its endomorphism complex is untwisted, as used in the symplectic construction. We use this description from .    A sufficient condition for a universal sheaf on the stable moduli space is the existence of with . In particular, is sufficient. See and .    The numerical condition trivializes the scalar descent obstruction by a determinant-of-cohomology line bundle of weight one. We cite that construction rather than developing descent theory here. Primitivity of in the full integral Mukai lattice is a different condition from pairing to one with an algebraic vector, so it should not silently be used as a fine-moduli hypothesis.  A quasi-universal sheaf of similitude is a family whose fibre at is . Such families exist on the stable moduli spaces under consideration; see . A quasi-universal sheaf is not universal when , but its normalized Chern character defines the required map on cohomology.  Let be as in , let be the projections from , and choose a quasi-universal sheaf of similitude . For , define The subscript two means the component of cohomological degree two on . The involution is the one used in Riemann–Roch.  The orthogonality condition explains independence from a basic ambiguity in the family. Tensoring by changes the degree-two component by times the degree-zero component. The latter equals Full independence of the quasi-universal choice, and integrality despite the factor , are included in the theorem below.   (Mukai–Yoshioka)   Under the hypotheses of , the map is integral and preserves Hodge structures. If , it is an isometry If , it annihilates and induces an isometry The orthogonal complement is taken in the full Mukai lattice, not merely its algebraic part. See for positive rank and positive square, and for the isotropic case. The statement including ample rank-zero vectors is recorded in , which refers to for the sheaf case.    When , the vector lies in and spans the radical of its pairing. Passing to the quotient is therefore necessary. The ranks also distinguish the two cases: has rank twenty-three; the quotient in the isotropic case has rank twenty-two, the rank of a K3 surface's second cohomology.   Let with . For , the equation is . Thus The summands are orthogonal. The Mukai isometry recovers exactly the lattice in . Under that identification the final generator maps to one of the two signs of the half-exceptional class. Its sign depends on the chosen convention for the Mukai homomorphism and does not change the lattice.  For , the vector is . Its orthogonal complement consists of , and quotienting by leaves . This recovers with its original intersection lattice.     Sheaves supported on curves  Let be a smooth connected curve of genus , let be its inclusion, and let be a line bundle of degree on . The sheaf is pure of dimension one, has first Chern class , and satisfies . Hence The last equality is adjunction on the K3 surface.    The sheaf is -stable for every ample .    A nonzero subsheaf has generic rank one on the integral curve ; its quotient is supported in dimension zero. If the subsheaf is proper, that quotient has positive length. The leading coefficient of the Hilbert polynomial does not change, while its constant term decreases by this length. Its reduced Hilbert polynomial is therefore strictly smaller.    The same proof applies to when is an integral, possibly singular curve and is a torsion-free rank-one sheaf on . This is the compactified Jacobian interpretation over integral singular members of the linear system. The degree of such a sheaf is defined by , where is the arithmetic genus. For reducible or nonreduced support, stability also compares subsheaves on proper subcurves and can depend on the polarization.  Suppose now that the class is ample, that , and that is primitive. Choose a -generic and let . The global theorem gives a projective irreducible holomorphic symplectic manifold of dimension . Sending a pure one-dimensional sheaf to its support divisor gives the support morphism The divisor is defined by the zeroth Fitting ideal, or equivalently by the determinant section of a local resolution. Its multiplicities are the generic lengths of the sheaf along the support components. The construction in families gives the displayed morphism; see .  The base has dimension . Indeed, the exact sequence and give . Thus .  Every smooth member has genus , and its fibre is . Indeed, a pure sheaf whose support cycle is the smooth divisor with multiplicity one is annihilated by its ideal: the image of that ideal would have zero-dimensional support and purity forces it to vanish. It is therefore a torsion-free rank-one sheaf on , hence a line bundle. Conversely every such line bundle is stable by . Since the support morphism is proper and its image contains the dense open set of smooth curves, it is surjective.    For a smooth , the fibre is a Lagrangian submanifold of .    At a line bundle on , the tangent space of the fibre is . Pushing forward extensions gives its injection into , the tangent space of the moduli space. This injection can also be read from the local-to-global Ext sequence Here by adjunction. The sequence is the usual local Ext computation for a Cartier divisor, together with .  Two tangent vectors to are extensions formed on . Their Yoneda product on lies in . Exact pushforward preserves composition of extensions, so their product is also zero in . The Mukai symplectic pairing therefore vanishes on the fibre tangent space. Finally, its dimension is , half the dimension of the moduli space. Thus the fibre is Lagrangian.    This is the geometric reason that moduli of curve-supported sheaves produce integrable systems: the smooth fibres are Jacobians, and the symplectic pairing identifies their tangent directions with the dual directions in the linear system. Singular curves are accommodated by pure sheaves rather than line bundles, giving compactified Jacobian fibres. Their detailed geometry is a separate subject; neither smoothness nor irreducibility of each singular fibre is asserted here.    Abelian surfaces and Albanese fibres  Let be an abelian surface and its dual. Its tangent bundle is trivial, so and We use the same pairing on . Its lattice is , since . The correction by the rank in the last entry of the K3 Mukai vector is absent here.  The deformation and symplectic calculations still apply to stable sheaves, because and the Picard scheme is smooth. Thus a stable sheaf of vector has a smooth symplectic moduli space of dimension . However, translations of and tensor products by line bundles in move sheaves in additional directions. The whole moduli space is generally not irreducible holomorphic symplectic.  For a reference sheaf of vector , determinant and the Albanese class of the second Chern cycle give a map to , normalized to send to zero. One can write its components as The second Chern classes here belong to , the group of zero-cycles modulo rational equivalence, defined in . For a degree-zero cycle , its Albanese class is ; rational equivalence does not change this sum. The determinant lies in because the first Chern classes agree. This cycle description is used in . Changes of normalization translate the target, and the Fourier–Mukai determinant convention of may also change coordinates on . The fibres used below are unaffected up to isomorphism by these choices.   (Yoshioka)   Let be primitive with and , and let be -generic. Then is nonempty, smooth, and projective of dimension . Its Albanese variety is , and the map above is an Albanese morphism after the indicated coordinate convention. Its fibres are irreducible holomorphic symplectic manifolds of dimension , deformation equivalent to . The restriction of the Mukai homomorphism gives an integral Hodge isometry See .    The lower bound ensures that the fibre has dimension at least four. For , the fibre is a K3 surface and has twenty-two-dimensional second cohomology; in the rank-eight abelian Mukai lattice has rank seven and cannot be its entire second cohomology. For , the Albanese map is an isomorphism. These small cases are treated separately in .   Let with . A torsion-free rank-one sheaf of this vector is , with of length and . Thus Its determinant is , and its second Chern cycle is the cycle of . After choosing a reference cycle of sum zero and trivial determinant, the Albanese map is . Its zero fibre is exactly . The dimensions agree: for the full moduli space and for the fibre.   This example distinguishes three spaces that are sometimes conflated: the Hilbert scheme , the sheaf moduli space , and its Albanese fibre . Only the last is irreducible holomorphic symplectic in dimension at least four.    Nonprimitive vectors and symplectic resolutions  The primitive hypothesis excludes strictly semistable sheaves for a generic polarization. If and there are stable sheaves of vector , their direct sum is semistable of vector and is not stable. Its automorphism group is larger than the scalar group. The quotient describing its deformation space can therefore be singular, even though the stable locus remains smooth and symplectic.  O'Grady's examples use On a K3 surface the condition means rank two, first Chern class zero, and ; on an abelian surface it means . The same triple does not encode the same second Chern class because the Todd corrections differ.  For the degree-two, Picard-rank-one K3 surface of , the stable locus of has dimension ten and admits Mukai's form. O'Grady constructs a projective resolution on which this form extends nondegenerately, and proves that the resolution is irreducible holomorphic symplectic. On the principally polarized abelian surface in that construction, the full moduli space again has dimension ten. O'Grady's compatible resolution carries a determinant-and-Albanese map; its zero fibre is the six-dimensional irreducible holomorphic symplectic manifold of type . Equivalently, the construction gives a symplectic resolution of the corresponding singular fibre. These assertions are taken from and .  Thus the K3 construction gives a ten-dimensional manifold from the whole moduli space, while the abelian construction gives its six-dimensional manifold from a fibre. The BBF lattices of the two resulting manifolds, computed by Rapagnetta, are given in .   "
},
{
  "id": "hkg-def-mukai",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-def-mukai",
  "type": "Definition",
  "number": "8.1",
  "title": "",
  "body": "  The Mukai lattice of is , with pairing Its weight-two Hodge structure has , , and . Its algebraic part is . The Mukai vector of a coherent sheaf is   "
},
{
  "id": "hkg-mukai-rr",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-mukai-rr",
  "type": "Proposition",
  "number": "8.2",
  "title": "",
  "body": "  For coherent sheaves on , In particular, if , then .    A coherent sheaf on the smooth surface has a finite locally free resolution, so Riemann–Roch applies to its class in the Grothendieck group. If for , the Chern character of the dual class is obtained by this involution. Thus The degree-four part is , proving the formula. Taking , whose vector is , gives .   "
},
{
  "id": "hkg-mukai-basic-examples",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-mukai-basic-examples",
  "type": "Example",
  "number": "8.3",
  "title": "",
  "body": " A line bundle with first Chern class has and square . A skyscraper sheaf has vector and square zero. If has length , the exact sequence gives and square . These examples already account for moduli spaces of dimensions zero, two, and .  "
},
{
  "id": "hkg-mukai-line-twist",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-mukai-line-twist",
  "type": "Proposition",
  "number": "8.4",
  "title": "",
  "body": "  Let be a line bundle on with . Tensor product by acts on Mukai vectors by the integral Hodge isometry    The Chern character satisfies , giving the formula. The evenness of gives integrality. If and , then Its inverse is . Since has Hodge type , the map preserves the Mukai Hodge decomposition.   "
},
{
  "id": "hkg-def-gieseker",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-def-gieseker",
  "type": "Definition",
  "number": "8.5",
  "title": "",
  "body": "  A nonzero coherent sheaf is pure of dimension if every nonzero subsheaf has support of dimension . Let , and divide this polynomial by its positive leading coefficient to obtain its reduced Hilbert polynomial  . A pure sheaf is -Gieseker semistable if for all sufficiently large and every proper nonzero subsheaf . It is stable if all these inequalities are strict.   "
},
{
  "id": "hkg-slope-gieseker-comparison",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-slope-gieseker-comparison",
  "type": "Proposition",
  "number": "8.6",
  "title": "",
  "body": " For a torsion-free sheaf of positive rank on ,  After division by the leading coefficient in , the linear coefficient is . A strict slope inequality therefore decides the reduced-polynomial inequality for sufficiently large . A proper subsheaf of the same rank has a nonzero quotient of dimension at most one; subtracting that quotient's positive Hilbert polynomial also gives a strict inequality. This proves the first implication. The middle implication is part of the definition. Finally, a subsheaf of larger slope has larger reduced Hilbert polynomial for sufficiently large , contradicting Gieseker semistability.  "
},
{
  "id": "hkg-sheaf-git",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-sheaf-git",
  "type": "Theorem",
  "number": "8.7",
  "title": "",
  "body": "  For fixed , there is a projective coarse moduli scheme for -Gieseker semistable sheaves of Mukai vector . Its closed points are S-equivalence classes. The stable sheaves form an open subscheme , whose closed points are isomorphism classes of stable sheaves. The scheme may be empty.   "
},
{
  "id": "hkg-def-v-generic",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-def-v-generic",
  "type": "Definition",
  "number": "8.8",
  "title": "",
  "body": "  Fix . We call  -generic if every stable Jordan–Hölder factor of every -semistable sheaf of vector has Mukai vector in . A vector is primitive if it is not an integer multiple with and integral .   "
},
{
  "id": "hkg-primitive-no-strictly-semistable",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-primitive-no-strictly-semistable",
  "type": "Proposition",
  "number": "8.9",
  "title": "",
  "body": "  If is primitive and is -generic, then every semistable sheaf of vector is stable. In this case write .    Write the vectors of the stable factors as , with and . If is a primitive element of a free abelian group, then is integral for only when : extend to an integral basis, or choose an integral functional taking value one on . Thus every is a positive integer. Their sum can be one only if there is one factor.   "
},
{
  "id": "hkg-stable-simple",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-stable-simple",
  "type": "Lemma",
  "number": "8.10",
  "title": "",
  "body": "  An -stable sheaf is simple: . If are nonisomorphic stable sheaves with the same reduced Hilbert polynomial, then .    Let be nonzero. Its image has the same dimension as and by purity. If the kernel is nonzero, stability of and additivity of the Hilbert polynomial imply : the polynomial of is a positive weighted average of those of its kernel and image. Stability of gives , a contradiction. Thus the kernel is zero, and . Stability of forces , so is an isomorphism.  In particular every nonzero endomorphism of is invertible. The algebra is finite-dimensional over . For any in this algebra, its minimal polynomial has a root ; then cannot be invertible. Hence it is zero, proving simplicity.   "
},
{
  "id": "hkg-stable-smooth-dimension",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-stable-smooth-dimension",
  "type": "Proposition",
  "number": "8.11",
  "title": "",
  "body": "  Let be an -stable sheaf on , and let . Then is smooth at , with In particular, a vector with cannot be represented by a stable sheaf.    Choose a nonzero form , identifying with . Serre duality and give . Under Serre duality, the trace map to is dual to the map sending to . This map is an isomorphism, so the trace map is an isomorphism as well. Consequently .  The Picard scheme of is smooth: its tangent space is , and in characteristic zero the Picard scheme of a smooth projective variety is reduced. The cited obstruction theorem therefore gives smoothness. Finally, which gives the dimension formula and the necessary inequality.   "
},
{
  "id": "hkg-mukai-symplectic-theorem",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-mukai-symplectic-theorem",
  "type": "Theorem",
  "number": "8.12",
  "title": "(Mukai).",
  "body": " (Mukai)   The pairings define a closed holomorphic nondegenerate two-form on . See and .   "
},
{
  "id": "hkg-yoshioka-k3",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-yoshioka-k3",
  "type": "Theorem",
  "number": "8.13",
  "title": "(Mukai–Yoshioka).",
  "body": " (Mukai–Yoshioka)   Let be primitive, let be -generic, and assume either , or , is the class of an ample line bundle, and . Then is nonempty if and only if . When it is nonempty, it is smooth and projective of dimension . More precisely:   If , then is a point.  If , then is a K3 surface.  If , then is an irreducible holomorphic symplectic manifold of type.   The positive-rank statement and Mukai isometry are proved in ; the deformation-equivalence statement including ample rank-zero classes is . The isotropic case and the zero-dimensional case are also discussed in .   "
},
{
  "id": "hkg-moduli-hilbert",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-moduli-hilbert",
  "type": "Example",
  "number": "8.14",
  "title": "",
  "body": " Take . Every torsion-free rank-one sheaf has a line-bundle double dual , and is supported in dimension zero. Since and , the line bundle is . Thus for a length- subscheme .  Every torsion-free rank-one sheaf is Gieseker stable. Indeed, a proper rank-one subsheaf has a nonzero quotient of dimension at most one; subtracting its positive Hilbert polynomial makes the reduced polynomial strictly smaller. There are no nonzero lower-dimensional subsheaves. Consequently, This is an isomorphism of moduli spaces, not just a bijection of closed points: an ideal sheaf gives a flat family of finite subschemes, and a family of the rank-one sheaves above becomes a family of ideals after tensoring by a line bundle from the base. The relative statement is proved in .  "
},
{
  "id": "hkg-universal-sufficient",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-universal-sufficient",
  "type": "Proposition",
  "number": "8.15",
  "title": "",
  "body": "  A sufficient condition for a universal sheaf on the stable moduli space is the existence of with . In particular, is sufficient. See and .   "
},
{
  "id": "hkg-mukai-isometry",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-mukai-isometry",
  "type": "Theorem",
  "number": "8.16",
  "title": "(Mukai–Yoshioka).",
  "body": " (Mukai–Yoshioka)   Under the hypotheses of , the map is integral and preserves Hodge structures. If , it is an isometry If , it annihilates and induces an isometry The orthogonal complement is taken in the full Mukai lattice, not merely its algebraic part. See for positive rank and positive square, and for the isotropic case. The statement including ample rank-zero vectors is recorded in , which refers to for the sheaf case.   "
},
{
  "id": "hkg-hilbert-lattice-from-mukai",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-hilbert-lattice-from-mukai",
  "type": "Example",
  "number": "8.17",
  "title": "",
  "body": " Let with . For , the equation is . Thus The summands are orthogonal. The Mukai isometry recovers exactly the lattice in . Under that identification the final generator maps to one of the two signs of the half-exceptional class. Its sign depends on the chosen convention for the Mukai homomorphism and does not change the lattice.  For , the vector is . Its orthogonal complement consists of , and quotienting by leaves . This recovers with its original intersection lattice.  "
},
{
  "id": "hkg-curve-line-stable",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-curve-line-stable",
  "type": "Proposition",
  "number": "8.18",
  "title": "",
  "body": "  The sheaf is -stable for every ample .    A nonzero subsheaf has generic rank one on the integral curve ; its quotient is supported in dimension zero. If the subsheaf is proper, that quotient has positive length. The leading coefficient of the Hilbert polynomial does not change, while its constant term decreases by this length. Its reduced Hilbert polynomial is therefore strictly smaller.   "
},
{
  "id": "hkg-jacobian-fibres-lagrangian",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-jacobian-fibres-lagrangian",
  "type": "Proposition",
  "number": "8.19",
  "title": "",
  "body": "  For a smooth , the fibre is a Lagrangian submanifold of .    At a line bundle on , the tangent space of the fibre is . Pushing forward extensions gives its injection into , the tangent space of the moduli space. This injection can also be read from the local-to-global Ext sequence Here by adjunction. The sequence is the usual local Ext computation for a Cartier divisor, together with .  Two tangent vectors to are extensions formed on . Their Yoneda product on lies in . Exact pushforward preserves composition of extensions, so their product is also zero in . The Mukai symplectic pairing therefore vanishes on the fibre tangent space. Finally, its dimension is , half the dimension of the moduli space. Thus the fibre is Lagrangian.   "
},
{
  "id": "hkg-yoshioka-abelian",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-yoshioka-abelian",
  "type": "Theorem",
  "number": "8.20",
  "title": "(Yoshioka).",
  "body": " (Yoshioka)   Let be primitive with and , and let be -generic. Then is nonempty, smooth, and projective of dimension . Its Albanese variety is , and the map above is an Albanese morphism after the indicated coordinate convention. Its fibres are irreducible holomorphic symplectic manifolds of dimension , deformation equivalent to . The restriction of the Mukai homomorphism gives an integral Hodge isometry See .   "
},
{
  "id": "hkg-abelian-hilbert-moduli",
  "level": "2",
  "url": "hkg-sheaf-moduli.html#hkg-abelian-hilbert-moduli",
  "type": "Example",
  "number": "8.21",
  "title": "",
  "body": " Let with . A torsion-free rank-one sheaf of this vector is , with of length and . Thus Its determinant is , and its second Chern cycle is the cycle of . After choosing a reference cycle of sum zero and trivial determinant, the Albanese map is . Its zero fibre is exactly . The dimensions agree: for the full moduli space and for the fibre.  "
},
{
  "id": "hkg-derived-moduli",
  "level": "1",
  "url": "hkg-derived-moduli.html",
  "type": "Chapter",
  "number": "9",
  "title": "Stable objects and birational moduli spaces",
  "body": " Stable objects and birational moduli spaces   Moduli spaces of sheaves can change when a polarization crosses a wall. Allowing complexes and varying a Bridgeland stability condition describes their birational models and the corresponding divisor cones. The numerical classes lie in the Mukai lattice, while the stability condition determines which objects represent them.  We assume the bounded derived category of coherent sheaves, distinguished triangles, derived tensor product and pushforward, and Serre duality. For the K3-specific background, see . We quote Bridgeland's existence and deformation theorems and the global moduli theorems of Bayer–Macrì, and prove the numerical consequences used here. Unless stated otherwise, is a smooth projective K3 surface over .    Complexes and numerical classes  Write . For objects , let . These groups can occur in negative degrees for complexes. The Euler form is the finite sum .  We retain the Mukai lattice and pairing of . The Mukai vector extends to complexes by It is additive in distinguished triangles. Riemann–Roch becomes , because both sides are additive in each variable and the sheaf formula was proved in .   The Mukai vector identifies the numerical Grothendieck group with . The numerical lattice has signature .  The images of and a skyscraper sheaf generate the two outer summands. If , choose a line bundle of first Chern class . Then ; subtracting an integral multiple of the point vector gives . Thus the Mukai map is surjective. The pairing on is nondegenerate, so the identity for Euler forms identifies its kernel with . Finally, has signature , while the outer summands form a hyperbolic plane. Their orthogonal sum has the asserted signature.   The full lattice is needed for Hodge isometries and the second cohomology of a moduli space. Its algebraic part is the lattice on which numerical stability conditions are defined. These are different roles for two related lattices.   For and a line bundle of first Chern class , In coordinates, , and multiplication by preserves the Mukai pairing.  The shift changes the sign in the alternating sum of cohomology sheaves. The tensor formula follows from . Substitution gives Thus squares, and hence the polarized pairing, are preserved.   For example, when has length . Tensoring by gives with the same square . Shifting gives its negative, which has the same square as well. A negative-rank Mukai vector is therefore allowed for a stable complex, even though it cannot be the rank of a nonzero sheaf.    Stability conditions  A central charge assigns a complex number to a numerical class. A slicing specifies the semistable objects of each phase and the Harder–Narasimhan filtrations of arbitrary objects.   A numerical Bridgeland stability condition on is a pair consisting of a group homomorphism and full additive extension-closed subcategories , for , satisfying the following conditions.   If , then with .  , and when and .  Every nonzero object has a finite filtration by distinguished triangles with nonzero factors lying in , where .  For one, equivalently every, norm on , there is a constant such that for every nonzero and every . This is the support property .   The nonzero objects of are semistable of phase . The category is abelian, and its simple objects are called stable .   We use the support-property formulation in . The abelian property of the slicing categories, their Jordan–Hölder theory, and the deformation theorem for stability conditions are results of the general theory, not extra structures to construct separately here. The support property controls numerical classes of semistable factors and is essential to the wall theorem below.  A semistable object has stable Jordan–Hölder factors of the same phase. Two semistable objects are S-equivalent when the direct sums of their stable factors are isomorphic. The filtration in item three, whose phases strictly decrease, is the Harder–Narasimhan filtration; it is different from a Jordan–Hölder filtration within one phase.  The extension-closed subcategory is the heart of a bounded t-structure. It is an abelian category in which stability is tested by subobjects, but it need not be . Crossing a stability wall can therefore produce stable complexes with nonzero cohomology in two degrees.   An exact triangle is not automatically a short exact sequence in every heart. To interpret a triangle as a destabilizing sequence, its three terms must lie in the chosen heart, with the corresponding phase inequalities.    If is stable for a Bridgeland stability condition, then Its other self-Ext groups vanish. In particular, .  A stable object is simple in its slicing category, so its endomorphisms form a finite-dimensional division algebra over , hence equal . Serre duality on a K3 surface identifies with the dual of this space. If , then has smaller phase than , so . Serre duality gives the corresponding vanishing for . The Euler formula now gives .   The calculation gives a necessary inequality and the tangent dimension of the eventual moduli space. Nonemptiness, properness, and projectivity require the moduli theorem; they do not follow from this numerical calculation.    Geometric stability conditions  Let , with ample. Put For a torsion-free sheaf of positive rank define . Slope Harder–Narasimhan filtrations determine a torsion pair: consists of torsion-free sheaves whose factors have slope at most zero; consists of sheaves whose torsion-free quotients have factors of positive slope, including all torsion sheaves.  The tilted heart is The fact that this is a heart is the tilting theorem used in Bridgeland's construction. Its role is visible in the sign of the imaginary part: in the large-volume region a slope-semistable torsion-free sheaf of slope zero has positive real central charge, and shifting it places it on the allowed negative real ray.   An object is spherical if is for and zero otherwise. Its vector has square . Every line bundle is spherical.   The last assertions follow from the Euler formula and . Conversely, a stable object of square is spherical by . A spherical class , or root , means a lattice vector of square ; the numerical class does not specify a particular spherical object.   (Bridgeland)  If , the central charge and heart define a stability condition . All skyscraper sheaves are stable of phase one.   Existence, including the Harder–Narasimhan and support properties, is proved in . The sufficient bound ensures the positivity condition for spherical sheaves in that lemma. Geometric stability conditions can also exist outside this region.  Let denote the connected component of numerical stability conditions containing the geometric conditions. The space of stability conditions has a complex-manifold structure for which the central-charge map is locally biholomorphic. A more precise global statement is useful here.   (Bridgeland)  Let consist of the vectors whose real and imaginary parts span a positive definite real two-plane. Let be its connected component containing for an ample class . Put The map sending to the vector characterized by is a covering map.   This is . It does not identify a stability condition with its central charge: the slicing is part of the lift. The component used throughout this chapter is the distinguished one specified above.  The root hyperplanes are omitted from the covering target. A wall for a fixed vector instead imposes alignment of with , for a possible factor class . The central charges of nonzero semistable factors are nonzero, and these phase-alignment equations are considered inside the stability manifold.   A root hyperplane in the covering target has complex codimension one. Phase alignment for a fixed pair of numerical classes is a real equation. The two constructions have different purposes even though spherical classes occur in both.   For a positive-rank vector and a -generic ample class , suitable large-volume stability conditions recover the -Gieseker-stable sheaves. One can take proportional to on the appropriate side of the slope of , and with sufficiently large. We use this comparison from . In particular, the Hilbert scheme of points occurs as in a Gieseker chamber. The comparison concerns a region of stability conditions; it does not identify every Bridgeland-stable complex with a sheaf.    The projective moduli theorem  Fix a nonzero primitive vector and a stability condition . When , choose a real lift of its phase and consider objects in with vector . This choice is part of the moduli problem: has the same numerical vector as but a different phase. We suppress the chosen phase from the notation . If , there are no semistable objects of vector , and we put .  For fixed , stability conditions admit a locally finite wall-and-chamber decomposition. The stable and semistable objects of vector do not change within a chamber. For primitive , a stability condition off the walls has no strictly semistable objects of that vector. Such a condition is called -generic . We quote this wall theorem from .   (Mukai–Yoshioka–Toda, Bayer–Macrì)  Let be nonzero and primitive, and let be -generic. The coarse moduli space is nonempty if and only if . When nonempty, it is smooth and projective of dimension . If it is a point; if it is a K3 surface; and if it is IHS of type. In the last case, the Mukai homomorphism gives an integral Hodge isometry The orthogonal complement is taken in the full Mukai lattice.   Projectivity is . Nonemptiness and dimension are recorded in , and the deformation type and Mukai isometry in its Theorem 3.6. We use these global results without proof. The map has the convention of , using a quasi-universal complex in place of a quasi-universal sheaf. For , its domain is replaced by .  The zero-dimensional uniqueness assertion can also be checked directly after existence is known. Two distinct stable objects of the same phase have no morphisms in either direction. Serre duality and phase vanishing eliminate every Ext group between them except possibly . Their Euler characteristic is therefore nonpositive. For the same vector of square it would be , a contradiction.  Primitivity and genericity have distinct roles. The former excludes decompositions into proportional integral vectors, and the latter excludes stable factors of other numerical directions at the same phase. Nonprimitive vectors can have strictly semistable objects even for generic stability, so the smooth IHS conclusion cannot simply be extended to them.    The positive divisor attached to stability  Let be a proper algebraic space and a family over of -semistable objects of vector and a fixed phase. For an integral projective curve , the family gives an object Define the numerical divisor class by The fact that this prescription defines a numerical Cartier divisor class, including its determinant-of-cohomology realization, belongs to the theorem.   (Bayer–Macrì)  The class is nef. Its degree on an integral curve is zero if and only if the objects corresponding to two general points of are S-equivalent. On the coarse moduli space for a generic stability condition, the resulting class is ample.   This is . For quasi-universal families one divides by their similitude; the class descends even when a universal complex does not exist. The positivity assertion is stronger than formal determinant-line-bundle construction: it identifies exactly the curves that acquire zero degree.   Assume and is generic. With the Mukai-homomorphism convention of this note, put Then , , and .  The pairing of with is the real number one, so its imaginary part is orthogonal to . Dividing a complex vector by a nonzero complex number preserves the positive plane spanned by its real and imaginary parts. They remain independent, and the imaginary part is therefore a nonzero vector of positive square.  For a curve and a universal family, the formula defining gives Indeed, the Mukai pairing is minus the integral of times the Mukai vector. Applying Grothendieck–Riemann–Roch to the curve adds only a multiple of , which disappears on pairing with . Substituting gives exactly . Dividing by the similitude gives the same calculation for a quasi-universal family.   Some references define the Mukai homomorphism by the dual determinant convention, changing its sign. With that convention the vector used to express also changes sign. Formula fixes the geometric class independently of this notation.   In particular, after normalizing , our formula reads . A source writing a plus sign in this normalization may be using the opposite Mukai homomorphism.     Walls and contractions  Assume from now on that is primitive and . A possible destabilizing decomposition requires aligned central charges. One numerical equation is For actual Jordan–Hölder factors one also needs the positive-ray conditions and the existence of semistable objects of classes in the relevant slicing category. The equation alone defines a candidate wall.  Let be a generic point on an actual wall , and let be generic conditions in the adjacent chambers. Their stable objects become semistable at . The positivity construction gives big and nef classes on the two smooth moduli spaces. They induce birational contraction morphisms This is . One may take rational classes defining the same contractions; an arbitrary real nef class is not itself a line bundle to which semiampleness can be applied.   A wall is fake if no curve on either adjacent moduli space consists of objects S-equivalent at ; equivalently its contractions are isomorphisms. It is divisorial if the contractions contract divisors. It is flopping if the contractions are small and the induced birational transformation is a flop over their common target. Separately, it is totally semistable if no object of vector is stable at .   These are the conventions of . Total semistability describes objects on the wall; it is not a fourth mutually exclusive contraction type. A totally semistable wall can be divisorial or fake. A fake wall can change which objects represent a point even though the moduli spaces on the two sides are isomorphic.  More precisely, let be a primitive hyperbolic rank-two sublattice containing . Here hyperbolic means signature . A potential wall associated to it is a connected component of the real codimension-one locus where . Actual walls have such a lattice. Write for the nonzero vectors with and . For the integral vectors in the theorem, this agrees with the positive-class convention of . A spherical class is effective at the wall when . Such a class has a semistable representative of that phase by the existence theorem.   (Bayer–Macrì)  For a potential wall with lattice as above:   It is totally semistable precisely when contains an isotropic class with , or an effective spherical class with .  It gives a divisorial contraction if there is a spherical class with , or an isotropic class with or . These are the Brill–Noether, Hilbert–Chow, and Li–Gieseker–Uhlenbeck cases, respectively.  If none of the divisorial conditions holds, it gives a flopping contraction when for integral , or when there is a spherical class with . In the remaining cases it is fake if totally semistable, and otherwise is not an actual wall.     This is the external classification in . The two requirements on a class in specify the component of the nonnegative cone containing ; dropping the component condition gives incorrect decompositions. The theorem turns the numerical equation into an actual geometric classification, using existence and deformation results for objects.   For the Hilbert-scheme vector , , the isotropic vector satisfies . The associated wall is of Hilbert–Chow type. In the Gieseker model its contraction is , recording the support cycle. The sign of is consistent with a shifted skyscraper sheaf. This wall is also totally semistable. The interpretation follows from the isotropic-wall analysis in . The numerical alternatives for a divisorial wall need not be disjoint. If , its lattice also contains , with and . Thus the same lattice satisfies both the spherical and the isotropic conditions.   Across a totally semistable wall, a comparison can require a derived equivalence even when the birational map is an isomorphism: there is no stable locus of vector on the wall to determine that comparison.    Recovering birational models   (Bayer–Macrì)  For primitive of positive square, all moduli spaces with generic are birational. More precisely, a suitable derived autoequivalence or anti-autoequivalence relates the objects representing corresponding points on common open subsets whose complements have codimension at least two.   We use . An anti-autoequivalence is contravariant; derived duality is an example. The theorem asserts the existence of suitable comparisons, rather than a prescribed autoequivalence working on every object.  Fix one generic and set . Use these birational comparisons to identify divisor spaces of the chamber moduli spaces with . The ample divisor attached to a stability condition in a chamber then gives a chamber map .   (Bayer–Macrì)  The chamber maps glue to a continuous piecewise analytic map Its image is . For each chamber , its image is exactly the ample cone of , viewed in this fixed divisor space. Every smooth projective IHS manifold birational to occurs as for some generic .   This is . denotes the cone of big real divisor classes. The source defines the movable cone by generated divisor classes; inside the big cone it agrees with its closure by the exceptional-chamber description in its Proposition 3.3. This accounts for the closure in our notation. The image includes walls inside the big movable cone and excludes its isotropic boundary. The theorem does not assert that every nef isotropic class is the image of an interior stability condition.  At a divisorial wall, the analytic continuations of the divisor map from the two sides differ by reflection in the contracted divisor. At fake and flopping walls the continuations agree. These are the alternatives in . Thus the global map uses the Mukai homomorphism appropriate to each chamber.  The scope is the birational class of a given moduli space on a fixed K3 surface. This theorem gives a complete moduli interpretation for its birational models. It does not assert that every deformation-equivalent IHS manifold is a moduli space on that surface, or on some K3 surface.    Derived Torelli and transport of stability  An exact equivalence between projective K3 surfaces is of Fourier–Mukai type: for some kernel , Its cohomological transform is Although written with rational characteristic classes, the transform of an equivalence is an integral Hodge isometry of the full Mukai lattices. Representability and this integrality are external theorems.  For a holomorphic two-form and a Kähler class , the ordered vectors orient a positive four-space in . This gives the natural positive orientation, independent of the choices. A Mukai isometry is orientation preserving , also called signed , if it preserves this positive orientation.   (Mukai–Orlov, Huybrechts–Macrì–Stellari)  A Hodge isometry is induced by an exact equivalence if and only if it preserves the natural positive orientation. Given such an isometry, an inducing equivalence can be chosen to send to .   The orientation necessity is . For the lifting statement and the choice preserving the distinguished components, see and . This is a theorem about the Mukai lattices of surfaces and their derived categories; it is different from Torelli for the second cohomology of an IHS manifold.   An exact Fourier–Mukai equivalence transports a stability condition by It gives an isomorphism of the corresponding moduli problems and, when the coarse spaces exist, an isomorphism  Exactness preserves shifts and distinguished triangles, so it preserves the slicing and filtration axioms. Full faithfulness preserves the Hom vanishing. Central charges and phases agree by construction. Pulling back a norm by the lattice isomorphism preserves the support inequality. The equivalence therefore sends stable objects of the selected vector and phase exactly to stable objects of the transformed vector and the same phase. A Fourier–Mukai kernel and its inverse act in families and commute with base change in the moduli problem. They give inverse transformations of these moduli problems, and hence inverse isomorphisms of their coarse spaces.   Tensoring by a line bundle changes the vector by and transports the slicing; the tensor product need not be stable for the original condition. A shift preserves stability for that condition, but has the negative vector and phase increased by one. In the transported stability condition of the proposition, the phase label is retained.  A spherical object gives another exact autoequivalence, its spherical twist . Its construction is the cone of the evaluation map ; the functorial construction and equivalence theorem are used from spherical-twist theory, as presented in . Additivity gives Thus its cohomological action is the reflection in a square- vector. Such reflections explain why spherical objects occur in the analysis of walls. The formula by itself does not establish that a proposed root produces a particular destabilizing wall.   Suppose an orientation-preserving Mukai Hodge isometry sends a primitive positive-square vector on to on . Then the moduli spaces for any generic distinguished stability conditions on these surfaces are birational.  Choose an inducing equivalence preserving distinguished components by . It gives an isomorphism to a moduli space on by . The latter is birational to the moduli space for any other generic distinguished stability condition on , by .   This implication requires an equivalence carrying the chosen vector, not merely an equivalence between the surfaces. It also does not construct an equivalence between the derived categories of the higher-dimensional moduli spaces. Such an assertion is a separate geometric problem.    The extended Mukai lattice and parallel transport  The Torelli theorem requires a Hodge isometry to be a parallel-transport operator. For manifolds of type this condition can be tested integrally. The Mukai lattice also explains why the test involves more than the abstract BBF lattice.  We use the dual lattice and discriminant form of .  Let be of type, with , and let . By , its lattice is where is unimodular. Thus , generated by , and .  By , an orientation-preserving isometry belongs to exactly when its action on this discriminant group is multiplication by or . For or , every orientation-preserving lattice isometry satisfies this condition, since the discriminant group has order two or four. In higher dimensions it can be restrictive.   For , the group has order twelve. Multiplication by five preserves its quadratic form: is divisible by . It is neither nor on this group. Markman's lattice calculation in gives surjectivity . Consequently orientation-preserving isometries with this discriminant action exist, and none is a monodromy operator. This example concerns integral isometries; it does not assert that such an isometry preserves the Hodge structure of a specified .   For transport between two different manifolds, one must compare their distinguished embeddings in a larger lattice. Set where has a basis with and . This is the even unimodular Mukai lattice of signature . An embedding of lattices is primitive if its cokernel is torsion-free.   (Markman)  Every manifold of type, , has a distinguished -orbit of primitive isometric embeddings Its orthogonal complement is generated by a primitive vector of square . For two such manifolds and an integral isometry , the map is parallel transport if and only if it preserves positive orientation and The equality means that, for representatives , there exists with .   The distinguished orbit and the transport criterion are . We quote their geometric construction. The complement and its square follow already from the standard embedding whose orthogonal complement is generated by . The vector is primitive, so this is a primitive embedding. The transitivity statement in shows that every primitive embedding has the same complement type. For , there is only one orbit; the additional choice can matter in higher dimensions.  Choosing a representative gives a weight-two Hodge structure: its line is , and the orthogonal complement is of type . The resulting lattice with Hodge structure is called an extended Mukai lattice of . Its embedding is specified only up to the distinguished orbit, and the sign of is not specified.   In the standard embedding above, an isometry extends to an isometry of if and only if on . An extension acting on the orthogonal vector by , , exists exactly when .  Write , the image of . Inside , Consequently is obtained from by adjoining . The quotient has order . Since is unimodular, the same description gives the entire extension from to .  On the two discriminant groups, the adjoined generator has class . Its multiples form the graph identifying their cyclic generators with opposite signs. The rational isometry preserves the extended integral lattice exactly when it preserves this graph. If multiplies by , graph preservation says . This is the required condition. Conversely any extension must preserve the rank-one orthogonal complement and hence sends to one of these two signs, giving necessity.   For , take . The Mukai isometry of identifies with . The resulting inclusion in represents ; this is the universal-ideal-sheaf case of . Thus the extra lattice used in the transport criterion is visible in the original moduli construction.   Let be of type, . They are bimeromorphic if and only if there is an integral Hodge isometry satisfying . For a specified such , there is a biholomorphism with if and only if sends a Kähler class to a Kähler class.  If reverses positive orientation, replace it by . This preserves the equality of embedding orbits, since . A Hodge isometry either preserves or reverses the positive-three-plane orientation according to the sign on the positive cone: on the oriented plane it preserves orientation. Thus one of the two signs is orientation preserving. The embedding theorem makes that sign a parallel-transport operator, and gives bimeromorphism. Conversely, bimeromorphism induces Hodge parallel transport and therefore preserves the distinguished orbit.  If the specified sends a Kähler class to a Kähler class, its sign on the positive cone is already positive. Hence it is orientation preserving, and gives with . Conversely, a biholomorphism pulls back Kähler classes to Kähler classes.   For a projective , let be the integral part of its extended Mukai lattice.   (Addington)  Let be projective of type, with . The lattice contains an isometric copy of if and only if is birational to a moduli space on a projective K3 surface, for a primitive positive-rank Mukai vector with and a -generic polarization .   This is . The two outer summands of a surface's Mukai lattice give the necessary algebraic hyperbolic plane. Conversely, its orthogonal complement is a K3 lattice with a period determining a projective K3 surface; the global moduli and Torelli theorems then give the birational model. By , itself is a moduli space of stable objects on that surface for a generic distinguished stability condition.    Twisted K3 surfaces  A twisted K3 surface is a pair with . An -twisted sheaf has local transition isomorphisms whose triple products are the prescribed scalar cocycle representing . Their bounded derived category is denoted by . This cocycle condition specifies what is being twisted; an arbitrary change of stability parameter is not a Brauer twist.  Choose a rational B-field lift with . In the convention used here, has the same underlying integral lattice and pairing as , while its Hodge structure is changed by . In particular, One takes the integral algebraic part of this twisted Hodge structure for numerical classes. Twisted Chern characters, Fourier–Mukai kernels, and their integral cohomological transforms are used from the external theory. We do not replace this lattice by the untwisted algebraic lattice when comparing moduli spaces.   (Huybrechts–Stellari, Reinecke)  For two complex projective twisted K3 surfaces with chosen B-field lifts, a Hodge isometry of their twisted Mukai lattices is induced by a twisted Fourier–Mukai equivalence if and only if it preserves the natural positive orientation.   This is . The orientation requirement remains present in the twisted case; it is not removed by choosing a B-field lift. The stability, projectivity, wall-crossing, and movable-cone results used above extend to twisted K3 surfaces with these numerical and Hodge conventions, as formulated throughout . This extension is useful when the obstruction to a universal sheaf is a nontrivial Brauer class.  The B-field lift used for a Brauer class can have a transcendental component. It should be distinguished from the real algebraic parameter used in . In the twisted construction both enter the exponential in the central charge, with separate roles.    Stable objects on abelian surfaces  Let be an abelian surface and . We use the Mukai lattice of : , with algebraic part . For a complex, , interpreted additively in its cohomology sheaves. The slicing and support-property definition in applies with in place of . Riemann–Roch still reads .  The central charge and tilted heart of define a stability condition on for every and ample . No lower bound on is required. These conditions lie in a distinguished component . Every condition in this component is obtained from a geometric one by the action of the universal cover of : this changes the central charge by an orientation-preserving real linear map and relabels phases, without changing the stable objects. These are external results of .  There are no spherical objects on an abelian surface; indeed for every nonzero object, by . For a stable object of any phase, the slicing gives for , and Serre duality gives the same vanishing for . The calculation in therefore gives . The Mukai lattice is even, so this dimension is a positive even integer and . Shifting the object preserves its self-Ext groups and this inequality. Consequently spherical objects do not occur in the abelian wall descriptions.  As before, denotes moduli at a fixed phase with . Genericity means that every semistable object of vector and this phase is stable. The full moduli space has an Albanese morphism, whose four-dimensional target accounts for the difference between its dimension and that of the associated IHS manifold.  Here is a determinant convention that also works for complexes. Fix a normalized Poincaré line bundle on and its Fourier–Mukai functor . Given a reference object , set The first factor uses . Both determinant differences have zero first Chern class, since the numerical vectors agree. Determinants of perfect complexes, descent of this map to the coarse moduli space, and its Albanese property are external results; see . Replacing translates the target. The second-Chern-cycle convention in can differ by a change of coordinates on this target.   (Minamide–Yanagida–Yoshioka)  Let be primitive with , and let be -generic. The moduli space is nonempty, smooth, and projective of dimension . The map is a surjective Albanese morphism and an étale locally trivial fibration. Its fibre is an IHS manifold of dimension , deformation equivalent to . The Mukai homomorphism, followed by restriction to the fibre, is an integral Hodge isometry with the Mukai pairing on the left and on the right.   The projectivity theorem is . For the Albanese morphism, deformation type, and integral Hodge isometry we use . The extension from geometric conditions to their distinguished component uses the phase-relabeling action above. The proof reduces to moduli of stable sheaves through Fourier–Mukai transforms, sometimes on a twisted surface; we quote that reduction and the global moduli theorems. The homomorphism is constructed from a universal or quasi-universal complex as in , with , and then restricted to .  The dimension subtraction is . It uses the smooth surjective Albanese morphism, rather than only a count of deformation parameters. In particular, has nonzero and is not IHS. The isometry describes the fibre's second cohomology; it is not an isometry onto the full moduli space's second cohomology.   Under the hypotheses of , In particular, .  The full Mukai lattice has rank eight, and the orthogonal complement of a vector of nonzero square has rank seven. Its algebraic part has rank . Pairing with is a nonzero rational functional on this space, since . Its kernel therefore has rank . The Hodge isometry identifies this kernel with , proving the assertion.    Take , , and a large-volume chamber in which stability agrees with Gieseker stability. Its existence follows from the large-volume comparison recalled in . The rank-one calculation in gives With the cycle normalization of that example, the Albanese map is . Thus the fibre condition fixes the determinant and the sum of the length- cycle. Tensoring by changes the determinant and preserves the Mukai vector.  The small squares explain the lower bound in the cohomology theorem. For , the same rank-one description gives and a point fibre. For , the fibre is the Kummer K3 surface , whose second Betti number is twenty-two. In both cases still has rank seven, so it cannot be the fibre's full second cohomology. The ranges must therefore be separated from . A stable object of isotropic vector has tangent dimension two; the theorem's four-dimensional Albanese target is then inapplicable.    Suppose with , and keep , . For , the equation is . Hence Let be their images under . They form an integral basis of the fibre's Néron–Severi lattice, with Thus . The two isotropic lines have slopes ; they are rational exactly when is a square. The stability walls cut out the ample cone within the positive cone, as in .   Variation of stability also describes birational models of these fibres. Precisely, every smooth projective manifold with trivial canonical bundle that is birational to is isomorphic to for a generic distinguished stability condition on the same surface and with the same vector; see . This is a theorem about the birational class of the specified moduli fibre. It does not identify all deformations of generalized Kummer type with fibres on abelian surfaces: the Picard-rank calculation already excludes projective deformations of Picard number one.    K3 categories and the meaning of a moduli interpretation  Moduli of stable objects enlarge the sheaf constructions without making every deformation a moduli space on a surface. There is an elementary obstruction already for projective K3 surfaces.   If for a projective K3 surface, a primitive vector of positive square, and a generic distinguished stability condition, then The same equality holds for a moduli space on a projective twisted K3 surface under the corresponding primitive-vector and generic-stability hypotheses. In particular, a projective IHS manifold of Picard number one is not birational to either kind of surface moduli space.  The full Mukai Hodge isometry identifies the integral part of with . Since has rank and pairing with the nonzero positive vector is a nonzero rational linear functional, this kernel has rank .  For a rational B-field lift, multiplication by identifies the untwisted and twisted algebraic Mukai spaces over . It need not preserve their integral lattices, but it preserves their ranks and rational pairings. The twisted algebraic lattice therefore also has rank . The twisted Mukai isometry identifies the Néron–Severi space of the moduli space with its orthogonal complement to , giving the same count. Finally, birational IHS manifolds have Hodge-isometric second cohomology and hence the same Picard number.   A broader construction uses categories having K3-type cohomology and Serre duality without requiring them to be derived categories of surfaces. Let be a smooth cubic fourfold. Its Kuznetsov component is It is an admissible triangulated subcategory with Serre functor . Thus it has the same two-dimensional Serre-duality relation as . These categorical properties and its Mukai lattice are external constructions, not consequences of the definition by orthogonality alone.  The category has an integral Mukai Hodge lattice of signature , constructed from topological K-theory, and an algebraic numerical part. We use this construction and the existence of a distinguished component of stability conditions from and . The phrase K3 category refers here to this geometric example with its additional structure; abstract Calabi–Yau categories do not automatically satisfy every theorem for K3 surfaces.   (Bayer–Lahoz–Macrì–Nuer–Perry–Stellari)  Let be a smooth cubic fourfold, and let be a primitive algebraic class of positive square in . Let be a -generic stability condition in the distinguished component, and fix a phase with . The moduli space of -stable objects of vector and phase is nonempty and is a smooth projective IHS manifold of dimension , of type. Its second cohomology is Hodge isometric to in this Mukai lattice, and the inclusion represents its distinguished extended Mukai embedding.   This is the positive-square case of . The proof uses stability conditions in families and deformation to categories of actual twisted K3 surfaces. The theorem is a moduli construction for every smooth cubic fourfold; it does not require its Kuznetsov component to be equivalent to the derived category of a K3 surface.  Its numerical difference from surface moduli is visible for a very general cubic. The algebraic Mukai lattice is then the positive definite lattice , with basis satisfying Thus . Its orthogonal complement to a nonzero vector inside has rank one, giving Picard-number-one moduli spaces. The positive definite lattice contains no copy of , so gives another obstruction to an untwisted surface-moduli interpretation. The rank calculation in also excludes twisted projective surfaces.  The class has square two and yields the Fano variety of lines on for the appropriate stability condition. The class has square six and yields the Lehn–Lehn–Sorger–van Straten eightfold when contains no plane. These identifications, including the restriction in the eightfold construction, are recorded in . That example also records a twenty-dimensional family of manifolds associated with the nonprimitive vector . Its construction requires resolution of a singular semistable moduli space, as in the surface examples of ; it is not a case of the primitive-vector theorem. The square calculations give the dimensions of the smooth moduli spaces; the identifications themselves are geometric theorems.  A moduli interpretation can therefore mean a moduli space of sheaves on a surface, stable objects on a twisted surface, or stable objects in a K3 category. It may identify the manifold itself or only one of its birational models; a universal family may be replaced by a twisted or quasi-universal one. Each claim must specify which of these data is present. The examples and theorems here give precise instances of this structure. They do not supply a theorem assigning a surface or a category and a stability condition to every IHS manifold.   "
},
{
  "id": "hkg-derived-numerical-group",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-derived-numerical-group",
  "type": "Proposition",
  "number": "9.1",
  "title": "",
  "body": " The Mukai vector identifies the numerical Grothendieck group with . The numerical lattice has signature .  The images of and a skyscraper sheaf generate the two outer summands. If , choose a line bundle of first Chern class . Then ; subtracting an integral multiple of the point vector gives . Thus the Mukai map is surjective. The pairing on is nondegenerate, so the identity for Euler forms identifies its kernel with . Finally, has signature , while the outer summands form a hyperbolic plane. Their orthogonal sum has the asserted signature.  "
},
{
  "id": "hkg-derived-shift-tensor",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-derived-shift-tensor",
  "type": "Proposition",
  "number": "9.2",
  "title": "",
  "body": " For and a line bundle of first Chern class , In coordinates, , and multiplication by preserves the Mukai pairing.  The shift changes the sign in the alternating sum of cohomology sheaves. The tensor formula follows from . Substitution gives Thus squares, and hence the polarized pairing, are preserved.  "
},
{
  "id": "hkg-def-bridgeland-stability",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-def-bridgeland-stability",
  "type": "Definition",
  "number": "9.3",
  "title": "",
  "body": " A numerical Bridgeland stability condition on is a pair consisting of a group homomorphism and full additive extension-closed subcategories , for , satisfying the following conditions.   If , then with .  , and when and .  Every nonzero object has a finite filtration by distinguished triangles with nonzero factors lying in , where .  For one, equivalently every, norm on , there is a constant such that for every nonzero and every . This is the support property .   The nonzero objects of are semistable of phase . The category is abelian, and its simple objects are called stable .  "
},
{
  "id": "hkg-stable-object-dimension",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-stable-object-dimension",
  "type": "Proposition",
  "number": "9.4",
  "title": "",
  "body": " If is stable for a Bridgeland stability condition, then Its other self-Ext groups vanish. In particular, .  A stable object is simple in its slicing category, so its endomorphisms form a finite-dimensional division algebra over , hence equal . Serre duality on a K3 surface identifies with the dual of this space. If , then has smaller phase than , so . Serre duality gives the corresponding vanishing for . The Euler formula now gives .  "
},
{
  "id": "hkg-def-spherical-object",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-def-spherical-object",
  "type": "Definition",
  "number": "9.5",
  "title": "",
  "body": " An object is spherical if is for and zero otherwise. Its vector has square . Every line bundle is spherical.  "
},
{
  "id": "hkg-geometric-stability-existence",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-geometric-stability-existence",
  "type": "Theorem",
  "number": "9.6",
  "title": "(Bridgeland).",
  "body": " (Bridgeland)  If , the central charge and heart define a stability condition . All skyscraper sheaves are stable of phase one.  "
},
{
  "id": "hkg-stability-covering",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-stability-covering",
  "type": "Theorem",
  "number": "9.7",
  "title": "(Bridgeland).",
  "body": " (Bridgeland)  Let consist of the vectors whose real and imaginary parts span a positive definite real two-plane. Let be its connected component containing for an ample class . Put The map sending to the vector characterized by is a covering map.  "
},
{
  "id": "hkg-derived-moduli-theorem",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-derived-moduli-theorem",
  "type": "Theorem",
  "number": "9.8",
  "title": "(Mukai–Yoshioka–Toda, Bayer–Macrì).",
  "body": " (Mukai–Yoshioka–Toda, Bayer–Macrì)  Let be nonzero and primitive, and let be -generic. The coarse moduli space is nonempty if and only if . When nonempty, it is smooth and projective of dimension . If it is a point; if it is a K3 surface; and if it is IHS of type. In the last case, the Mukai homomorphism gives an integral Hodge isometry The orthogonal complement is taken in the full Mukai lattice.  "
},
{
  "id": "hkg-positivity-lemma",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-positivity-lemma",
  "type": "Theorem",
  "number": "9.9",
  "title": "(Bayer–Macrì).",
  "body": " (Bayer–Macrì)  The class is nef. Its degree on an integral curve is zero if and only if the objects corresponding to two general points of are S-equivalent. On the coarse moduli space for a generic stability condition, the resulting class is ample.  "
},
{
  "id": "hkg-positivity-mukai-formula",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-positivity-mukai-formula",
  "type": "Proposition",
  "number": "9.10",
  "title": "",
  "body": " Assume and is generic. With the Mukai-homomorphism convention of this note, put Then , , and .  The pairing of with is the real number one, so its imaginary part is orthogonal to . Dividing a complex vector by a nonzero complex number preserves the positive plane spanned by its real and imaginary parts. They remain independent, and the imaginary part is therefore a nonzero vector of positive square.  For a curve and a universal family, the formula defining gives Indeed, the Mukai pairing is minus the integral of times the Mukai vector. Applying Grothendieck–Riemann–Roch to the curve adds only a multiple of , which disappears on pairing with . Substituting gives exactly . Dividing by the similitude gives the same calculation for a quasi-universal family.  "
},
{
  "id": "hkg-def-wall-types",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-def-wall-types",
  "type": "Definition",
  "number": "9.11",
  "title": "",
  "body": " A wall is fake if no curve on either adjacent moduli space consists of objects S-equivalent at ; equivalently its contractions are isomorphisms. It is divisorial if the contractions contract divisors. It is flopping if the contractions are small and the induced birational transformation is a flop over their common target. Separately, it is totally semistable if no object of vector is stable at .  "
},
{
  "id": "hkg-wall-numerical-classification",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-wall-numerical-classification",
  "type": "Theorem",
  "number": "9.12",
  "title": "(Bayer–Macrì).",
  "body": " (Bayer–Macrì)  For a potential wall with lattice as above:   It is totally semistable precisely when contains an isotropic class with , or an effective spherical class with .  It gives a divisorial contraction if there is a spherical class with , or an isotropic class with or . These are the Brill–Noether, Hilbert–Chow, and Li–Gieseker–Uhlenbeck cases, respectively.  If none of the divisorial conditions holds, it gives a flopping contraction when for integral , or when there is a spherical class with . In the remaining cases it is fake if totally semistable, and otherwise is not an actual wall.    "
},
{
  "id": "hkg-hilbert-chow-wall",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-hilbert-chow-wall",
  "type": "Example",
  "number": "9.13",
  "title": "",
  "body": " For the Hilbert-scheme vector , , the isotropic vector satisfies . The associated wall is of Hilbert–Chow type. In the Gieseker model its contraction is , recording the support cycle. The sign of is consistent with a shifted skyscraper sheaf. This wall is also totally semistable. The interpretation follows from the isotropic-wall analysis in . The numerical alternatives for a divisorial wall need not be disjoint. If , its lattice also contains , with and . Thus the same lattice satisfies both the spherical and the isotropic conditions.  "
},
{
  "id": "hkg-bayer-macri-birationality",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-bayer-macri-birationality",
  "type": "Theorem",
  "number": "9.14",
  "title": "(Bayer–Macrì).",
  "body": " (Bayer–Macrì)  For primitive of positive square, all moduli spaces with generic are birational. More precisely, a suitable derived autoequivalence or anti-autoequivalence relates the objects representing corresponding points on common open subsets whose complements have codimension at least two.  "
},
{
  "id": "hkg-bayer-macri-movable-theorem",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-bayer-macri-movable-theorem",
  "type": "Theorem",
  "number": "9.15",
  "title": "(Bayer–Macrì).",
  "body": " (Bayer–Macrì)  The chamber maps glue to a continuous piecewise analytic map Its image is . For each chamber , its image is exactly the ample cone of , viewed in this fixed divisor space. Every smooth projective IHS manifold birational to occurs as for some generic .  "
},
{
  "id": "hkg-derived-torelli-theorem",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-derived-torelli-theorem",
  "type": "Theorem",
  "number": "9.16",
  "title": "(Mukai–Orlov, Huybrechts–Macrì–Stellari).",
  "body": " (Mukai–Orlov, Huybrechts–Macrì–Stellari)  A Hodge isometry is induced by an exact equivalence if and only if it preserves the natural positive orientation. Given such an isometry, an inducing equivalence can be chosen to send to .  "
},
{
  "id": "hkg-equivalence-stability-moduli",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-equivalence-stability-moduli",
  "type": "Proposition",
  "number": "9.17",
  "title": "",
  "body": " An exact Fourier–Mukai equivalence transports a stability condition by It gives an isomorphism of the corresponding moduli problems and, when the coarse spaces exist, an isomorphism  Exactness preserves shifts and distinguished triangles, so it preserves the slicing and filtration axioms. Full faithfulness preserves the Hom vanishing. Central charges and phases agree by construction. Pulling back a norm by the lattice isomorphism preserves the support inequality. The equivalence therefore sends stable objects of the selected vector and phase exactly to stable objects of the transformed vector and the same phase. A Fourier–Mukai kernel and its inverse act in families and commute with base change in the moduli problem. They give inverse transformations of these moduli problems, and hence inverse isomorphisms of their coarse spaces.  "
},
{
  "id": "hkg-derived-equivalence-birational-moduli",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-derived-equivalence-birational-moduli",
  "type": "Corollary",
  "number": "9.18",
  "title": "",
  "body": " Suppose an orientation-preserving Mukai Hodge isometry sends a primitive positive-square vector on to on . Then the moduli spaces for any generic distinguished stability conditions on these surfaces are birational.  Choose an inducing equivalence preserving distinguished components by . It gives an isomorphism to a moduli space on by . The latter is birational to the moduli space for any other generic distinguished stability condition on , by .  "
},
{
  "id": "hkg-k3n-discriminant-seven",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-k3n-discriminant-seven",
  "type": "Example",
  "number": "9.19",
  "title": "",
  "body": " For , the group has order twelve. Multiplication by five preserves its quadratic form: is divisible by . It is neither nor on this group. Markman's lattice calculation in gives surjectivity . Consequently orientation-preserving isometries with this discriminant action exist, and none is a monodromy operator. This example concerns integral isometries; it does not assert that such an isometry preserves the Hodge structure of a specified .  "
},
{
  "id": "hkg-markman-embedding-orbit",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-markman-embedding-orbit",
  "type": "Theorem",
  "number": "9.20",
  "title": "(Markman).",
  "body": " (Markman)  Every manifold of type, , has a distinguished -orbit of primitive isometric embeddings Its orthogonal complement is generated by a primitive vector of square . For two such manifolds and an integral isometry , the map is parallel transport if and only if it preserves positive orientation and The equality means that, for representatives , there exists with .  "
},
{
  "id": "hkg-unimodular-extension-test",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-unimodular-extension-test",
  "type": "Proposition",
  "number": "9.21",
  "title": "",
  "body": " In the standard embedding above, an isometry extends to an isometry of if and only if on . An extension acting on the orthogonal vector by , , exists exactly when .  Write , the image of . Inside , Consequently is obtained from by adjoining . The quotient has order . Since is unimodular, the same description gives the entire extension from to .  On the two discriminant groups, the adjoined generator has class . Its multiples form the graph identifying their cyclic generators with opposite signs. The rational isometry preserves the extended integral lattice exactly when it preserves this graph. If multiplies by , graph preservation says . This is the required condition. Conversely any extension must preserve the rank-one orthogonal complement and hence sends to one of these two signs, giving necessity.  "
},
{
  "id": "hkg-extended-mukai-torelli",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-extended-mukai-torelli",
  "type": "Corollary",
  "number": "9.22",
  "title": "",
  "body": " Let be of type, . They are bimeromorphic if and only if there is an integral Hodge isometry satisfying . For a specified such , there is a biholomorphism with if and only if sends a Kähler class to a Kähler class.  If reverses positive orientation, replace it by . This preserves the equality of embedding orbits, since . A Hodge isometry either preserves or reverses the positive-three-plane orientation according to the sign on the positive cone: on the oriented plane it preserves orientation. Thus one of the two signs is orientation preserving. The embedding theorem makes that sign a parallel-transport operator, and gives bimeromorphism. Conversely, bimeromorphism induces Hodge parallel transport and therefore preserves the distinguished orbit.  If the specified sends a Kähler class to a Kähler class, its sign on the positive cone is already positive. Hence it is orientation preserving, and gives with . Conversely, a biholomorphism pulls back Kähler classes to Kähler classes.  "
},
{
  "id": "hkg-untwisted-moduli-hyperbolic-plane",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-untwisted-moduli-hyperbolic-plane",
  "type": "Theorem",
  "number": "9.23",
  "title": "(Addington).",
  "body": " (Addington)  Let be projective of type, with . The lattice contains an isometric copy of if and only if is birational to a moduli space on a projective K3 surface, for a primitive positive-rank Mukai vector with and a -generic polarization .  "
},
{
  "id": "hkg-twisted-derived-torelli",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-twisted-derived-torelli",
  "type": "Theorem",
  "number": "9.24",
  "title": "(Huybrechts–Stellari, Reinecke).",
  "body": " (Huybrechts–Stellari, Reinecke)  For two complex projective twisted K3 surfaces with chosen B-field lifts, a Hodge isometry of their twisted Mukai lattices is induced by a twisted Fourier–Mukai equivalence if and only if it preserves the natural positive orientation.  "
},
{
  "id": "hkg-abelian-bridgeland-moduli",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-abelian-bridgeland-moduli",
  "type": "Theorem",
  "number": "9.25",
  "title": "(Minamide–Yanagida–Yoshioka).",
  "body": " (Minamide–Yanagida–Yoshioka)  Let be primitive with , and let be -generic. The moduli space is nonempty, smooth, and projective of dimension . The map is a surjective Albanese morphism and an étale locally trivial fibration. Its fibre is an IHS manifold of dimension , deformation equivalent to . The Mukai homomorphism, followed by restriction to the fibre, is an integral Hodge isometry with the Mukai pairing on the left and on the right.  "
},
{
  "id": "hkg-abelian-derived-picard",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-abelian-derived-picard",
  "type": "Corollary",
  "number": "9.26",
  "title": "",
  "body": " Under the hypotheses of , In particular, .  The full Mukai lattice has rank eight, and the orthogonal complement of a vector of nonzero square has rank seven. Its algebraic part has rank . Pairing with is a nonzero rational functional on this space, since . Its kernel therefore has rank . The Hodge isometry identifies this kernel with , proving the assertion.  "
},
{
  "id": "hkg-abelian-derived-ideal",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-abelian-derived-ideal",
  "type": "Example",
  "number": "9.27",
  "title": "",
  "body": " Take , , and a large-volume chamber in which stability agrees with Gieseker stability. Its existence follows from the large-volume comparison recalled in . The rank-one calculation in gives With the cycle normalization of that example, the Albanese map is . Thus the fibre condition fixes the determinant and the sum of the length- cycle. Tensoring by changes the determinant and preserves the Mukai vector.  The small squares explain the lower bound in the cohomology theorem. For , the same rank-one description gives and a point fibre. For , the fibre is the Kummer K3 surface , whose second Betti number is twenty-two. In both cases still has rank seven, so it cannot be the fibre's full second cohomology. The ranges must therefore be separated from . A stable object of isotropic vector has tangent dimension two; the theorem's four-dimensional Albanese target is then inapplicable.  "
},
{
  "id": "hkg-abelian-derived-rank-two-lattice",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-abelian-derived-rank-two-lattice",
  "type": "Example",
  "number": "9.28",
  "title": "",
  "body": " Suppose with , and keep , . For , the equation is . Hence Let be their images under . They form an integral basis of the fibre's Néron–Severi lattice, with Thus . The two isotropic lines have slopes ; they are rational exactly when is a square. The stability walls cut out the ample cone within the positive cone, as in .  "
},
{
  "id": "hkg-surface-moduli-picard-rank",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-surface-moduli-picard-rank",
  "type": "Proposition",
  "number": "9.29",
  "title": "",
  "body": " If for a projective K3 surface, a primitive vector of positive square, and a generic distinguished stability condition, then The same equality holds for a moduli space on a projective twisted K3 surface under the corresponding primitive-vector and generic-stability hypotheses. In particular, a projective IHS manifold of Picard number one is not birational to either kind of surface moduli space.  The full Mukai Hodge isometry identifies the integral part of with . Since has rank and pairing with the nonzero positive vector is a nonzero rational linear functional, this kernel has rank .  For a rational B-field lift, multiplication by identifies the untwisted and twisted algebraic Mukai spaces over . It need not preserve their integral lattices, but it preserves their ranks and rational pairings. The twisted algebraic lattice therefore also has rank . The twisted Mukai isometry identifies the Néron–Severi space of the moduli space with its orthogonal complement to , giving the same count. Finally, birational IHS manifolds have Hodge-isometric second cohomology and hence the same Picard number.  "
},
{
  "id": "hkg-cubic-category-moduli",
  "level": "2",
  "url": "hkg-derived-moduli.html#hkg-cubic-category-moduli",
  "type": "Theorem",
  "number": "9.30",
  "title": "(Bayer–Lahoz–Macrì–Nuer–Perry–Stellari).",
  "body": " (Bayer–Lahoz–Macrì–Nuer–Perry–Stellari)  Let be a smooth cubic fourfold, and let be a primitive algebraic class of positive square in . Let be a -generic stability condition in the distinguished component, and fix a phase with . The moduli space of -stable objects of vector and phase is nonempty and is a smooth projective IHS manifold of dimension , of type. Its second cohomology is Hodge isometric to in this Mukai lattice, and the inclusion represents its distinguished extended Mukai embedding.  "
},
{
  "id": "hkg-fibrations",
  "level": "1",
  "url": "hkg-fibrations.html",
  "type": "Chapter",
  "number": "10",
  "title": "Lagrangian fibrations and isotropic line bundles",
  "body": " Lagrangian fibrations and isotropic line bundles   A proper fibration from an IHS manifold has fibers of half its dimension, and the symplectic form vanishes on them. On the smooth locus this produces a family of complex tori and commuting Hamiltonian vector fields. The class pulled back from the base is isotropic for the BBF form. We first prove these relationships, then discuss the converse construction from a nef isotropic line bundle.    Fibrations and Lagrangian subvarieties   A submanifold of a holomorphic symplectic -fold is Lagrangian if and . A reduced irreducible subvariety is Lagrangian if it has dimension and this vanishing holds on its smooth locus.  A fibration is a proper surjective holomorphic map onto a normal complex space, with and . A Lagrangian fibration is one for which every irreducible component of every fiber, with its reduced structure, is a Lagrangian subvariety.   The condition gives connected fibers and is obtained by Stein factorization. Some definitions require the Lagrangian condition only for general smooth fibers; the following theorem gives it for every fiber component.   (Matsushita)  Every fibration from an IHS manifold is Lagrangian. Its base is a normal projective variety of dimension , and the map is equidimensional.   We quote the theorem in this Kähler form from , which specifies the underlying results of Matsushita and the passage to a normal Kähler base. The original projective dimension theorem and the smooth-fiber Lagrangian assertion are and . Singular bases and singular fibers are allowed.    The BBF calculation behind the fiber dimension  The half-dimensional conclusion and the vanishing of the symplectic form on smooth fibers can be derived from the intersection identities already established, once projectivity of the base is known. This also identifies the numerical class attached to the fibration.   Let be a fibration from an IHS manifold, and let be an ample line bundle on the projective base. Let . Then is nonzero and nef, , and . Every smooth fiber over a point where is a submersion is Lagrangian.  Replace by a positive power so that it embeds in projective space, and pull back the Fubini–Study form. The resulting representative of a positive multiple of is semipositive and has rank at general points of . Adding for a Kähler form makes it positive, so . Positivity at a general point implies , hence .  Since , we have . The Fujiki relation gives . By , the largest for which is . On the other hand, semipositivity and generic rank show that this largest integer is : the power vanishes and the power has positive integral. Thus .  Suppose . Apply the polarized Fujiki formula to copies of , one copy each of , and copies of . The class pairs to zero with itself and with . Each copy would have to pair with an , but there are only such copies. Every term is therefore zero, and Choose general hyperplanes on whose intersection is a finite set of points in the smooth submersion locus of . Their inverse images represent a positive multiple of and are a disjoint union of smooth fibers. The last integral is a sum of their integrals . Each is nonnegative by the pointwise Hermitian norm identity for a form, and it is zero exactly when .  These fiber integrals are constant on the connected smooth submersion locus: they integrate a closed form along homologous locally transported fibers. Hence the vanishing holds on every smooth fiber there. Its dimension is , so it is Lagrangian. When , a holomorphic two-form restricts to zero on every curve, giving the same conclusion.   The isotropy calculation follows . Equidimensionality and the assertion about singular fiber components are the additional conclusions of .    Torus fibers and Hamiltonian vector fields   (Voisin)  Every compact Lagrangian submanifold of an IHS manifold is projective.  Restriction kills , since these two summands are generated by and . Thus its image lies in . It contains the Kähler class for any Kähler class on . Rational classes are dense in , and the Kähler cone of is open. Consequently some has Kähler. Multiplying by an integer gives an integral Kähler class on ; the Kodaira embedding theorem makes projective.   This argument is recorded in . It uses the one-dimensionality of ; a Lagrangian subtorus of a general holomorphic symplectic torus need not be projective.  Write for the open subset of the smooth locus of over which is a submersion, and set .   Let . The fiber is an abelian variety after choosing an origin.  Since is a submersion along , its normal bundle is trivial. The symplectic form identifies with , because is its own symplectic orthogonal. Hence and are holomorphically trivial.  The fiber is compact Kähler, so its holomorphic one-forms are closed. Choose a global frame of , with dual holomorphic vector fields . The identity shows that the vector fields commute. Compactness makes their real and imaginary parts complete; these commuting flows give global complex-time flows. They define a transitive holomorphic -action: each orbit is open, and connectedness leaves one orbit. The stabilizer is a discrete cocompact subgroup , giving . By , this torus is projective, hence an abelian variety.   Without a section, the smooth fibers are torsors for their associated abelian varieties, with no distinguished origins.  Let be local coordinates on . Define vector fields by They are vertical: the right side vanishes on the Lagrangian vertical tangent bundle, so its symplectic dual is vertical. They form a frame on each smooth fiber. Cartan's formula gives , and then Thus they commute. This is the Hamiltonian description of the integrable system.  On , contraction with gives . Dualizing and pushing forward, using , yields The left side is the bundle of fiberwise holomorphic one-forms. A polarized variation of Hodge structure is obtained when the tori carry a locally constant integral polarization, for example when is projective. Extending these bundles and their geometric structures across the discriminant is an additional problem; the displayed isomorphism is stated only on the smooth locus.    The base   (Hwang; Greb–Lehn)  If the base of a fibration from an IHS -fold is smooth, then .   Hwang proved the projective case in ; Greb and Lehn removed projectivity of in . See also the Hodge-theoretic proof in . These versions assume a smooth base.  When is projective, Matsushita's original theorem also gives , log-terminal singularities of , and ampleness of ; see . For projective IHS fourfolds, Huybrechts and Xu proved without assuming smoothness of ; see .   The September 2026 preprint states in every dimension for a projective morphism  as above, without a smoothness hypothesis on . Here projective means that admits a relatively ample line bundle. Since is projective, this also makes projective. The statement has been checked against that preprint; its proof has not been assessed here.     Higher direct images and cohomology of the fibration class   (Matsushita)  Let be a Lagrangian fibration from a projective IHS manifold, and assume that is smooth. Then and the higher direct images vanish for .   We quote . On the smooth locus a relative polarization identifies with the dual of the bundle of holomorphic one-forms on the fibers, which was identified with in . Exterior powers give the higher degrees there. The theorem extends the isomorphisms across the singular fibers; local freeness on the entire base is part of its conclusion.  For a smooth base, identifies with . These direct images determine every cohomology group of a positive power of . The calculation on projective space is as follows.   Let and . Then and Here for .  Let . Exterior powers of the Euler sequence give an exact complex Every line-bundle twist in this complex is at least . Its higher cohomology therefore vanishes, by the line-bundle cohomology of projective space, Stacks, Tag 01XT . Thus the cohomology of is computed by the complex of global sections of the displayed terms.  Let be a basis of , also regarded as polynomial coordinates. The global-section complex is the truncation of the Koszul complex in total degree , where total degree is polynomial degree plus exterior degree. Its differential is , with contraction of the exterior factor by the dual basis vector. The operator satisfies on total degree : the two terms sum to polynomial degree plus exterior degree. Since , the full complex is exact. Truncation can leave cohomology only at its first term. This proves the higher-cohomology vanishing; it also gives when , since that first term is zero or has zero kernel.  For the dimension, the short exact sequence obtained from the same Euler complex is With and the vanishing just proved, it yields A binomial coefficient for a negative line-bundle degree is read as zero in this recurrence. Substituting the stated formula verifies the recurrence and initial value, proving the formula by induction on .    Let be a Lagrangian fibration with projective IHS, and set . For every ,  The projection formula and identify the Leray spectral sequence as By , only the column is nonzero. Every differential is zero, and each total degree has a single graded piece. Hence the dimensions are exactly those in the preceding lemma.   For , this gives and no higher cohomology. For large , all groups in degrees zero through are nonzero, even though remains constant. For a fourfold and , their dimensions are ; their alternating sum is three.    Restriction of cohomology to a smooth fiber  A smooth fiber is an abelian -fold and has many cohomology classes. Very few are restrictions of classes on . The proof below separates a general fact about fibers from the IHS calculation.   (Voisin)  Let be a proper surjective holomorphic map from a connected compact Kähler manifold onto a normal complex space. Let be a connected smooth fiber over the submersion locus, of codimension , with inclusion . Then, in every degree,  Let , and let be the restriction of a Kähler class on . We use the global invariant cycle theorem in its compact Kähler form: is the monodromy-invariant part of the fiber cohomology. This theorem, and its application to relative Lefschetz decomposition, are quoted from . Over the submersion locus, the class is a flat section, and its relative Lefschetz decomposition commutes with monodromy. Thus is stable under that decomposition and under both Lefschetz operators. It is also a real Hodge substructure, since restriction preserves Hodge type.  Write . The Hodge–Riemann bilinear relations make the Lefschetz pairing nondegenerate on each primitive real Hodge substructure of : the associated Hermitian form is definite on each primitive Hodge component, so its restriction has zero radical. Primitive summands in a fixed degree are orthogonal. Together with the Lefschetz isomorphisms, this proves that is nondegenerate in every degree.  If , the projection formula gives . Conversely, if , nondegeneracy provides with Hence . This proves the reverse inclusion.    (Shen–Yin; Voisin)  Let be a Lagrangian fibration from an IHS -fold. For every smooth fiber over the submersion locus and every Kähler class on , Over , the map has rank one in even degree at most and rank zero in odd degree.  Choose an ample line bundle on the projective base and let . Its square for the BBF form is zero. Intersecting general hyperplanes on the base shows that is a nonzero scalar multiple of . Fibers over the connected submersion locus have the same cohomology class, so this holds for each such . By , the rank of restriction equals the rank of cup product by .  For , the matrix entries of are homogeneous polynomials in . Consequently the condition that its rank in degree is at most a prescribed integer is Zariski closed, being defined by minors. Let be the affine isotropic cone. It is irreducible because is nondegenerate and . Local Torelli gives a nonempty analytic open subset of the projective quadric consisting of period lines . Allowing all nonzero scalar multiples therefore gives a nonempty analytic open subset of . The differentiable trivialization identifies the cup products on the fibers.  Since has Hodge type , cup product by it kills every component with . The remaining component is zero for odd and one-dimensional for even , by . Thus the rank is zero or at most one, respectively; multiplying by does not change it. This analytic open subset is Zariski dense in the irreducible cone . The closed rank condition therefore holds on the entire cone, in particular at . For , restriction vanishes for dimensional reasons.  In degree with , the restriction is nonzero, because its product with has positive integral. Hence restriction has rank exactly one and its image is the displayed line. Extension of scalars preserves the rank of a rational linear map, giving the rational assertion.   This is Voisin's proof in . The invariant cycle theorem is the step that uses the fiber hypothesis. The kernel identity can fail for a smooth subvariety that is not a fiber. The counterexample in is the exceptional divisor of the blowup of along an elliptic curve, in degree three.    Deforming a Lagrangian submanifold  A smooth fiber is a Lagrangian torus. Conversely, a Lagrangian torus in already has a neighborhood fibered by its deformations. We first prove this local assertion, then state the global extension theorems.  For a compact submanifold , let denote the germ at of the Douady space of compact analytic subspaces of the fixed manifold . Its universal family is locally the incidence space of pairs with . In the projective setting this is the analytic germ of the Hilbert scheme. We use the existence of this parameter space and its universal family from analytic deformation theory.   Let be a compact Lagrangian submanifold. The symplectic form gives an isomorphism and Every sufficiently small smooth embedded deformation of is Lagrangian.  The displayed bundle map is well defined because . Its kernel is the image in of the symplectic orthogonal . A Lagrangian subspace is its own symplectic orthogonal, so the kernel is zero. Both bundles have rank , proving the isomorphism.  A first-order embedded deformation is locally the graph of a normal vector field multiplied by , with . Changing its local lift by a tangent vector field changes the parametrization of the graph, rather than its embedded subspace. Compatibility on overlaps is therefore exactly the gluing condition for a section of . This identifies the Zariski tangent space with .  In a small smooth family of embedded submanifolds, differentiable trivialization identifies the inclusions up to homotopy. Thus the classes are the transports of . Each is compact Kähler, since it is a submanifold of . On a compact Kähler manifold, a holomorphic two-form with zero cohomology class vanishes, by Hodge decomposition. Hence . The dimension remains , so is Lagrangian.    (Ran, Voisin)  For a compact Lagrangian submanifold , the germ is smooth. Its dimension is .   We use the unobstructedness theorem without proof. It is the fixed-ambient fiber of the deformation statement in , attributed there to Voisin; see also . Its application to the Douady space is recorded in . The tangent-space calculation gives the dimension: it is zero for a Lagrangian projective space and for a Lagrangian -torus. Unobstructedness here holds even when . For example, when , this obstruction space is , but the embedded deformation germ is a reduced point.  One can also deform the ambient manifold together with the submanifold. Write for the germ parametrizing deformations of the inclusion , with both central fibers identified. Forgetting the inclusion gives a map . Its image germ is denoted by . This differs from , where the ambient complex structure is fixed.   Let be a compact Lagrangian submanifold. The infinitesimal condition for a deformation of to admit a deformation of the inclusion is the kernel of induced by restriction and the normal-bundle quotient. Under contraction with and , this map is Its rank is .  Represent a first-order ambient deformation by a Čech cocycle of holomorphic vector fields. On each local chart, a first-order deformation of is specified by a normal field . The local submanifolds glue precisely when the normal image of equals , with a consistent choice of the gluing sign. Such fields exist exactly when the induced class in vanishes. Thus the image of the tangent map is .  For a local vector field , the one-form on obtained from its normal image is . This is also the restriction of . Hence contraction identifies the normal-quotient map with restriction of one-forms, and the same holds on . Dolbeault theory gives the displayed map on classes.  Restriction kills , since is Lagrangian. Its rank on total degree-two cohomology therefore equals its rank on . Extension of scalars from to preserves the rank, proving the last assertion.    (Voisin)  Let be a smooth compact Lagrangian submanifold of a compact IHS manifold . Trivialize the degree-two cohomology local system over a small representative of , and regard as a class in . Then, as germs at , Both and are smooth, and is a submersion onto . Moreover,   We quote the equality of germs and the smoothness assertions. The smooth-submanifold case of records Voisin's theorem with this period description; the unobstructedness and smooth image and fibers are also in . In , is the fixed cohomology map of the central inclusion, transported by the chosen trivialization. Voisin's theorem realizes this cohomological vanishing as deformations . Since is smooth onto its image, that image has the tangent space calculated above.  The relation to the degree-two Hodge loci of is explicit. Put A marking transfers to a rational subspace of . The period condition is , equivalently orthogonality to . Thus is locally the locus of . The BBF form is nondegenerate, so ; proves the codimension formula. Equality of this period locus with actual deformations of the pair is Voisin's geometric assertion.   Let be a Lagrangian submanifold biholomorphic to a complex torus. There are an open neighborhood of , a small polydisc of dimension , and a proper holomorphic submersion with central fiber . Its fibers are the small embedded deformations of and are Lagrangian tori.  The cotangent bundle of is trivial, and evaluation of holomorphic one-forms at any point is an isomorphism. By the preceding results, a sufficiently small representative of is smooth of dimension . Its universal family is a proper submersion after shrinking; smoothness of the fibers and of the map is open near the compact central fiber. Let be evaluation.  At in the central fiber, the tangent sequence of and the normal sequence of give The right arrow evaluates the normal section corresponding to the first-order deformation. Under , it is evaluation of holomorphic one-forms, hence an isomorphism. Exactness then makes an isomorphism. The holomorphic inverse function theorem shows that is a local biholomorphism along the central fiber. Compactness and properness of let us shrink so that it is a local biholomorphism on all of .  After another shrinking, is injective. Otherwise there would be distinct pairs above base points tending to , with . Properness gives subsequences converging to points of the central fiber. Evaluation embeds that fiber as , so . Both sequences eventually lie in one neighborhood where is injective, a contradiction. Thus identifies with an open neighborhood of . Transporting gives .  The fibers are Lagrangian by . Their normal bundles are trivial, since they are fibers of a submersion. The symplectic identification therefore makes their cotangent bundles trivial. They are connected compact Kähler manifolds, so the commuting-vector-field argument in identifies them with complex tori. They are projective by .   The evaluation argument is from . Unobstructedness gives the family of actual deformations; compactness then turns local invertibility along into a fibration of a whole neighborhood.   A dominant meromorphic map is almost holomorphic if there are dense open subsets and such that is proper and its fibers are general fibers of . A smooth submanifold is a strong fiber if such a neighborhood of complete fibers can be chosen to contain as a fiber. For an almost holomorphic Lagrangian fibration, the general fibers are connected Lagrangian tori and is normal.   Beauville asked whether a Lagrangian torus in a compact IHS manifold is a fiber of a meromorphic Lagrangian fibration. The local proposition constructs such a fibration near the torus; the global question concerns extending its family of leaves across .   (Greb–Lehn–Rollenske; Hwang–Weiss)  Let be a Lagrangian torus in a compact IHS manifold.   If is nonprojective, it admits a holomorphic Lagrangian fibration with fiber .  In general, there is an almost holomorphic Lagrangian fibration onto a normal projective variety with strong fiber . In a neighborhood of this fiber the map is proper and smooth.     The first assertion is ; the second is . Both are quoted. Amerik and Campana give a short alternative proof of the nonprojective case in . Their discussion of the projective case is distinct from Hwang and Weiss's general theorem.   (Greb–Lehn–Rollenske)  Let be projective IHS, and let be an almost holomorphic Lagrangian fibration with normal projective base. There are a projective IHS manifold , birational maps and , and a holomorphic Lagrangian fibration such that as meromorphic maps. The map is an isomorphism near a general fiber of .   This is . A Lagrangian torus therefore gives an almost holomorphic fibration on and a holomorphic fibration on a birational IHS model . Semiampleness of a nef isotropic line bundle concerns a morphism on itself.   For any Lagrangian torus , Consequently, the deformations of admitting a deformation of form a smooth hypersurface in .  If is nonprojective, realizes as a smooth fiber of a holomorphic fibration. The rank assertion is then in degree two.  If is projective, the same theorem gives an almost holomorphic fibration with strong fiber . On a connected smooth proper locus containing this fiber, the restriction maps from give a map to a cohomology local system, so their ranks are constant. We can therefore replace by a general fiber in that locus. By , a birational IHS model has a holomorphic fibration and is isomorphic to near . The natural isometry is compatible with restriction to , since it is induced on this common open set by the isomorphism. Applying on gives rank one on as well. The hypersurface assertion now follows from .     From an isotropic line bundle to a fibration  Recall the definition of semiampleness in . Positive-square nef bundles give birational contractions by . The isotropic case instead gives a morphism of half the dimension.   Let be a nontrivial nef line bundle on an IHS manifold, with . If is semiample, a sufficiently divisible positive power defines a Lagrangian fibration after Stein factorization.  A generated power defines a morphism to projective space. Its Stein factorization is , where is normal and projective, , and for an ample line bundle on . The class is nonzero by . Its numerical dimension is by , while the pullback of an ample class has numerical dimension . Hence . It is a nontrivial fibration, so makes it Lagrangian.   The difficult converse question was traditionally called the hyperkähler SYZ conjecture , the Lagrangian fibration conjecture , or a hyperkähler case of abundance: must every nontrivial nef isotropic line bundle be semiample? Its formulation concerns a holomorphic fibration. The metric SYZ problem concerns special Lagrangian real tori in a degenerating Calabi–Yau metric; the two formulations are related by hyperkähler rotation but are not identical definitions.   (Engel–Mauri, 2026 preprint)  Every nef line bundle on a compact IHS manifold is semiample.   This is Theorem 1.1 of the October 2026 preprint . We use its statement as an external theorem from this preprint; its full proof has not been independently verified here. For positive BBF square, the projectivity criterion and the base-point-free theorem already give semiampleness: the line bundle is nef and big on a projective manifold with trivial canonical bundle. The new case is the nontrivial isotropic one. By , a nontrivial nef isotropic line bundle then defines a Lagrangian fibration.  The proof in connects three theories. A metric SYZ theorem produces special Lagrangian tori in a maximal degeneration. The limiting cohomology identifies their Poincaré duals as nonzero multiples of for an isotropic degree-two class . A rotation result with this cohomological hypothesis makes the tori holomorphic Lagrangian. Existence of a fibration and a semiampleness-in-families theorem then carry the construction to the prescribed nef class.  The metric SYZ theorem, limiting mixed Hodge theory, and semiampleness in families are external theorems in that proof. Its rotation step requires the cohomological condition stated below.  The independent Lagrangian fibrations and hyperkähler SYZ develops the prescribed degeneration, the cohomological rotation criteria, and the return to the original nef pair. It also treats the recent results on singular bases and the affine and semi-flat geometry of the smooth locus. The present chapter supplies the general fibration and deformation results used there.    Holomorphic and special Lagrangian submanifolds  Fix a hyperkähler metric and a quaternionic triple , with and . The volume form is parallel. For an oriented real -dimensional submanifold , special Lagrangian of phase means The last equality includes the orientation and calibration condition.   If is -holomorphic Lagrangian, then with its complex orientation it is special Lagrangian for with phase .  The identity means . Since is -complex, its induced Kähler form is , and its Riemannian volume is . Therefore Multiplication by gives the required real positive volume form.    Let be a compact special Lagrangian submanifold for , with the orientation and constant phase in the preceding definition. Then is -holomorphic Lagrangian if and only if in .  If is -holomorphic Lagrangian, then . Conversely, since is compact and , the binomial expansion of gives The constant-phase calibration condition and Wirtinger's inequality therefore give The absolute value in the last integral denotes the density of the real top-degree form on . Equality in Wirtinger's pointwise inequality holds exactly for an -complex tangent plane. The nonnegative continuous difference between the volume density and that density has integral zero, so it vanishes at every point. Thus is an -complex submanifold. For tangent vectors , the quaternionic identities give . Together with , this proves .   The argument is . Its rotation theorem obtains the cohomological vanishing from a condition on . In dimensions greater than two, special Lagrangianity alone is weaker than being holomorphic Lagrangian after a prescribed hyperkähler rotation. The condition on is what allows equality in Wirtinger's inequality.    Examples and section counts   Let be an elliptic K3 surface. Composing the Hilbert–Chow morphism with the map induced by gives Over a divisor of distinct smooth base points, its fiber is the product of the corresponding elliptic curves. It is connected. Stein factorization therefore has finite part of generic degree one, which is an isomorphism because is normal. Thus the displayed map has connected fibers and is a Lagrangian fibration. Its isotropic line bundle is the pullback of .   A different construction is the support map from the moduli space of curve-supported sheaves on a K3 surface. Its smooth fibers are Jacobians and their Lagrangian property was proved in . The two constructions make the moduli interpretation concrete: an elliptic product or a Jacobian varies over a projective space of divisors.   Suppose is a Lagrangian fibration with connected fibers, and let . The projection formula gives Yet for every integer , by . For an elliptic K3 surface and , Serre duality gives , and therefore .    "
},
{
  "id": "hkg-def-lagrangian-fibration",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-def-lagrangian-fibration",
  "type": "Definition",
  "number": "10.1",
  "title": "",
  "body": " A submanifold of a holomorphic symplectic -fold is Lagrangian if and . A reduced irreducible subvariety is Lagrangian if it has dimension and this vanishing holds on its smooth locus.  A fibration is a proper surjective holomorphic map onto a normal complex space, with and . A Lagrangian fibration is one for which every irreducible component of every fiber, with its reduced structure, is a Lagrangian subvariety.  "
},
{
  "id": "hkg-matsushita-fibration",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-matsushita-fibration",
  "type": "Theorem",
  "number": "10.2",
  "title": "(Matsushita).",
  "body": " (Matsushita)  Every fibration from an IHS manifold is Lagrangian. Its base is a normal projective variety of dimension , and the map is equidimensional.  "
},
{
  "id": "hkg-fibration-isotropic-class",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-fibration-isotropic-class",
  "type": "Proposition",
  "number": "10.3",
  "title": "",
  "body": " Let be a fibration from an IHS manifold, and let be an ample line bundle on the projective base. Let . Then is nonzero and nef, , and . Every smooth fiber over a point where is a submersion is Lagrangian.  Replace by a positive power so that it embeds in projective space, and pull back the Fubini–Study form. The resulting representative of a positive multiple of is semipositive and has rank at general points of . Adding for a Kähler form makes it positive, so . Positivity at a general point implies , hence .  Since , we have . The Fujiki relation gives . By , the largest for which is . On the other hand, semipositivity and generic rank show that this largest integer is : the power vanishes and the power has positive integral. Thus .  Suppose . Apply the polarized Fujiki formula to copies of , one copy each of , and copies of . The class pairs to zero with itself and with . Each copy would have to pair with an , but there are only such copies. Every term is therefore zero, and Choose general hyperplanes on whose intersection is a finite set of points in the smooth submersion locus of . Their inverse images represent a positive multiple of and are a disjoint union of smooth fibers. The last integral is a sum of their integrals . Each is nonnegative by the pointwise Hermitian norm identity for a form, and it is zero exactly when .  These fiber integrals are constant on the connected smooth submersion locus: they integrate a closed form along homologous locally transported fibers. Hence the vanishing holds on every smooth fiber there. Its dimension is , so it is Lagrangian. When , a holomorphic two-form restricts to zero on every curve, giving the same conclusion.  "
},
{
  "id": "hkg-lagrangian-projective",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-lagrangian-projective",
  "type": "Proposition",
  "number": "10.4",
  "title": "(Voisin).",
  "body": " (Voisin)  Every compact Lagrangian submanifold of an IHS manifold is projective.  Restriction kills , since these two summands are generated by and . Thus its image lies in . It contains the Kähler class for any Kähler class on . Rational classes are dense in , and the Kähler cone of is open. Consequently some has Kähler. Multiplying by an integer gives an integral Kähler class on ; the Kodaira embedding theorem makes projective.  "
},
{
  "id": "hkg-smooth-fiber-torus",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-smooth-fiber-torus",
  "type": "Proposition",
  "number": "10.5",
  "title": "",
  "body": " Let . The fiber is an abelian variety after choosing an origin.  Since is a submersion along , its normal bundle is trivial. The symplectic form identifies with , because is its own symplectic orthogonal. Hence and are holomorphically trivial.  The fiber is compact Kähler, so its holomorphic one-forms are closed. Choose a global frame of , with dual holomorphic vector fields . The identity shows that the vector fields commute. Compactness makes their real and imaginary parts complete; these commuting flows give global complex-time flows. They define a transitive holomorphic -action: each orbit is open, and connectedness leaves one orbit. The stabilizer is a discrete cocompact subgroup , giving . By , this torus is projective, hence an abelian variety.  "
},
{
  "id": "hkg-hwang-base",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-hwang-base",
  "type": "Theorem",
  "number": "10.6",
  "title": "(Hwang; Greb–Lehn).",
  "body": " (Hwang; Greb–Lehn)  If the base of a fibration from an IHS -fold is smooth, then .  "
},
{
  "id": "hkg-base-preprint",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-base-preprint",
  "type": "Remark",
  "number": "10.7",
  "title": "",
  "body": " The September 2026 preprint states in every dimension for a projective morphism  as above, without a smoothness hypothesis on . Here projective means that admits a relatively ample line bundle. Since is projective, this also makes projective. The statement has been checked against that preprint; its proof has not been assessed here.  "
},
{
  "id": "hkg-matsushita-direct-images",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-matsushita-direct-images",
  "type": "Theorem",
  "number": "10.8",
  "title": "(Matsushita).",
  "body": " (Matsushita)  Let be a Lagrangian fibration from a projective IHS manifold, and assume that is smooth. Then and the higher direct images vanish for .  "
},
{
  "id": "hkg-positive-twisted-differentials",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-positive-twisted-differentials",
  "type": "Lemma",
  "number": "10.9",
  "title": "",
  "body": " Let and . Then and Here for .  Let . Exterior powers of the Euler sequence give an exact complex Every line-bundle twist in this complex is at least . Its higher cohomology therefore vanishes, by the line-bundle cohomology of projective space, Stacks, Tag 01XT . Thus the cohomology of is computed by the complex of global sections of the displayed terms.  Let be a basis of , also regarded as polynomial coordinates. The global-section complex is the truncation of the Koszul complex in total degree , where total degree is polynomial degree plus exterior degree. Its differential is , with contraction of the exterior factor by the dual basis vector. The operator satisfies on total degree : the two terms sum to polynomial degree plus exterior degree. Since , the full complex is exact. Truncation can leave cohomology only at its first term. This proves the higher-cohomology vanishing; it also gives when , since that first term is zero or has zero kernel.  For the dimension, the short exact sequence obtained from the same Euler complex is With and the vanishing just proved, it yields A binomial coefficient for a negative line-bundle degree is read as zero in this recurrence. Substituting the stated formula verifies the recurrence and initial value, proving the formula by induction on .  "
},
{
  "id": "hkg-fibration-line-cohomology",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-fibration-line-cohomology",
  "type": "Proposition",
  "number": "10.10",
  "title": "",
  "body": " Let be a Lagrangian fibration with projective IHS, and set . For every ,  The projection formula and identify the Leray spectral sequence as By , only the column is nonzero. Every differential is zero, and each total degree has a single graded piece. Hence the dimensions are exactly those in the preceding lemma.  "
},
{
  "id": "hkg-fiber-kernel-lemma",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-fiber-kernel-lemma",
  "type": "Lemma",
  "number": "10.11",
  "title": "(Voisin).",
  "body": " (Voisin)  Let be a proper surjective holomorphic map from a connected compact Kähler manifold onto a normal complex space. Let be a connected smooth fiber over the submersion locus, of codimension , with inclusion . Then, in every degree,  Let , and let be the restriction of a Kähler class on . We use the global invariant cycle theorem in its compact Kähler form: is the monodromy-invariant part of the fiber cohomology. This theorem, and its application to relative Lefschetz decomposition, are quoted from . Over the submersion locus, the class is a flat section, and its relative Lefschetz decomposition commutes with monodromy. Thus is stable under that decomposition and under both Lefschetz operators. It is also a real Hodge substructure, since restriction preserves Hodge type.  Write . The Hodge–Riemann bilinear relations make the Lefschetz pairing nondegenerate on each primitive real Hodge substructure of : the associated Hermitian form is definite on each primitive Hodge component, so its restriction has zero radical. Primitive summands in a fixed degree are orthogonal. Together with the Lefschetz isomorphisms, this proves that is nondegenerate in every degree.  If , the projection formula gives . Conversely, if , nondegeneracy provides with Hence . This proves the reverse inclusion.  "
},
{
  "id": "hkg-fiber-restriction-rank",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-fiber-restriction-rank",
  "type": "Theorem",
  "number": "10.12",
  "title": "(Shen–Yin; Voisin).",
  "body": " (Shen–Yin; Voisin)  Let be a Lagrangian fibration from an IHS -fold. For every smooth fiber over the submersion locus and every Kähler class on , Over , the map has rank one in even degree at most and rank zero in odd degree.  Choose an ample line bundle on the projective base and let . Its square for the BBF form is zero. Intersecting general hyperplanes on the base shows that is a nonzero scalar multiple of . Fibers over the connected submersion locus have the same cohomology class, so this holds for each such . By , the rank of restriction equals the rank of cup product by .  For , the matrix entries of are homogeneous polynomials in . Consequently the condition that its rank in degree is at most a prescribed integer is Zariski closed, being defined by minors. Let be the affine isotropic cone. It is irreducible because is nondegenerate and . Local Torelli gives a nonempty analytic open subset of the projective quadric consisting of period lines . Allowing all nonzero scalar multiples therefore gives a nonempty analytic open subset of . The differentiable trivialization identifies the cup products on the fibers.  Since has Hodge type , cup product by it kills every component with . The remaining component is zero for odd and one-dimensional for even , by . Thus the rank is zero or at most one, respectively; multiplying by does not change it. This analytic open subset is Zariski dense in the irreducible cone . The closed rank condition therefore holds on the entire cone, in particular at . For , restriction vanishes for dimensional reasons.  In degree with , the restriction is nonzero, because its product with has positive integral. Hence restriction has rank exactly one and its image is the displayed line. Extension of scalars preserves the rank of a rational linear map, giving the rational assertion.  "
},
{
  "id": "hkg-lagrangian-normal-tangent",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-lagrangian-normal-tangent",
  "type": "Proposition",
  "number": "10.13",
  "title": "",
  "body": " Let be a compact Lagrangian submanifold. The symplectic form gives an isomorphism and Every sufficiently small smooth embedded deformation of is Lagrangian.  The displayed bundle map is well defined because . Its kernel is the image in of the symplectic orthogonal . A Lagrangian subspace is its own symplectic orthogonal, so the kernel is zero. Both bundles have rank , proving the isomorphism.  A first-order embedded deformation is locally the graph of a normal vector field multiplied by , with . Changing its local lift by a tangent vector field changes the parametrization of the graph, rather than its embedded subspace. Compatibility on overlaps is therefore exactly the gluing condition for a section of . This identifies the Zariski tangent space with .  In a small smooth family of embedded submanifolds, differentiable trivialization identifies the inclusions up to homotopy. Thus the classes are the transports of . Each is compact Kähler, since it is a submanifold of . On a compact Kähler manifold, a holomorphic two-form with zero cohomology class vanishes, by Hodge decomposition. Hence . The dimension remains , so is Lagrangian.  "
},
{
  "id": "hkg-ran-voisin-unobstructed",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-ran-voisin-unobstructed",
  "type": "Theorem",
  "number": "10.14",
  "title": "(Ran, Voisin).",
  "body": " (Ran, Voisin)  For a compact Lagrangian submanifold , the germ is smooth. Its dimension is .  "
},
{
  "id": "hkg-lagrangian-pair-tangent",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-lagrangian-pair-tangent",
  "type": "Proposition",
  "number": "10.15",
  "title": "",
  "body": " Let be a compact Lagrangian submanifold. The infinitesimal condition for a deformation of to admit a deformation of the inclusion is the kernel of induced by restriction and the normal-bundle quotient. Under contraction with and , this map is Its rank is .  Represent a first-order ambient deformation by a Čech cocycle of holomorphic vector fields. On each local chart, a first-order deformation of is specified by a normal field . The local submanifolds glue precisely when the normal image of equals , with a consistent choice of the gluing sign. Such fields exist exactly when the induced class in vanishes. Thus the image of the tangent map is .  For a local vector field , the one-form on obtained from its normal image is . This is also the restriction of . Hence contraction identifies the normal-quotient map with restriction of one-forms, and the same holds on . Dolbeault theory gives the displayed map on classes.  Restriction kills , since is Lagrangian. Its rank on total degree-two cohomology therefore equals its rank on . Extension of scalars from to preserves the rank, proving the last assertion.  "
},
{
  "id": "hkg-lagrangian-pair-period-locus",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-lagrangian-pair-period-locus",
  "type": "Theorem",
  "number": "10.16",
  "title": "(Voisin).",
  "body": " (Voisin)  Let be a smooth compact Lagrangian submanifold of a compact IHS manifold . Trivialize the degree-two cohomology local system over a small representative of , and regard as a class in . Then, as germs at , Both and are smooth, and is a submersion onto . Moreover,  "
},
{
  "id": "hkg-lagrangian-torus-local-fibration",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-lagrangian-torus-local-fibration",
  "type": "Proposition",
  "number": "10.17",
  "title": "",
  "body": " Let be a Lagrangian submanifold biholomorphic to a complex torus. There are an open neighborhood of , a small polydisc of dimension , and a proper holomorphic submersion with central fiber . Its fibers are the small embedded deformations of and are Lagrangian tori.  The cotangent bundle of is trivial, and evaluation of holomorphic one-forms at any point is an isomorphism. By the preceding results, a sufficiently small representative of is smooth of dimension . Its universal family is a proper submersion after shrinking; smoothness of the fibers and of the map is open near the compact central fiber. Let be evaluation.  At in the central fiber, the tangent sequence of and the normal sequence of give The right arrow evaluates the normal section corresponding to the first-order deformation. Under , it is evaluation of holomorphic one-forms, hence an isomorphism. Exactness then makes an isomorphism. The holomorphic inverse function theorem shows that is a local biholomorphism along the central fiber. Compactness and properness of let us shrink so that it is a local biholomorphism on all of .  After another shrinking, is injective. Otherwise there would be distinct pairs above base points tending to , with . Properness gives subsequences converging to points of the central fiber. Evaluation embeds that fiber as , so . Both sequences eventually lie in one neighborhood where is injective, a contradiction. Thus identifies with an open neighborhood of . Transporting gives .  The fibers are Lagrangian by . Their normal bundles are trivial, since they are fibers of a submersion. The symplectic identification therefore makes their cotangent bundles trivial. They are connected compact Kähler manifolds, so the commuting-vector-field argument in identifies them with complex tori. They are projective by .  "
},
{
  "id": "hkg-almost-holomorphic-fibration",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-almost-holomorphic-fibration",
  "type": "Definition",
  "number": "10.18",
  "title": "",
  "body": " A dominant meromorphic map is almost holomorphic if there are dense open subsets and such that is proper and its fibers are general fibers of . A smooth submanifold is a strong fiber if such a neighborhood of complete fibers can be chosen to contain as a fiber. For an almost holomorphic Lagrangian fibration, the general fibers are connected Lagrangian tori and is normal.  "
},
{
  "id": "hkg-beauville-torus-fibration",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-beauville-torus-fibration",
  "type": "Theorem",
  "number": "10.19",
  "title": "(Greb–Lehn–Rollenske; Hwang–Weiss).",
  "body": " (Greb–Lehn–Rollenske; Hwang–Weiss)  Let be a Lagrangian torus in a compact IHS manifold.   If is nonprojective, it admits a holomorphic Lagrangian fibration with fiber .  In general, there is an almost holomorphic Lagrangian fibration onto a normal projective variety with strong fiber . In a neighborhood of this fiber the map is proper and smooth.    "
},
{
  "id": "hkg-almost-holomorphic-model",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-almost-holomorphic-model",
  "type": "Theorem",
  "number": "10.20",
  "title": "(Greb–Lehn–Rollenske).",
  "body": " (Greb–Lehn–Rollenske)  Let be projective IHS, and let be an almost holomorphic Lagrangian fibration with normal projective base. There are a projective IHS manifold , birational maps and , and a holomorphic Lagrangian fibration such that as meromorphic maps. The map is an isomorphism near a general fiber of .  "
},
{
  "id": "hkg-lagrangian-torus-pair-hypersurface",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-lagrangian-torus-pair-hypersurface",
  "type": "Corollary",
  "number": "10.21",
  "title": "",
  "body": " For any Lagrangian torus , Consequently, the deformations of admitting a deformation of form a smooth hypersurface in .  If is nonprojective, realizes as a smooth fiber of a holomorphic fibration. The rank assertion is then in degree two.  If is projective, the same theorem gives an almost holomorphic fibration with strong fiber . On a connected smooth proper locus containing this fiber, the restriction maps from give a map to a cohomology local system, so their ranks are constant. We can therefore replace by a general fiber in that locus. By , a birational IHS model has a holomorphic fibration and is isomorphic to near . The natural isometry is compatible with restriction to , since it is induced on this common open set by the isomorphism. Applying on gives rank one on as well. The hypersurface assertion now follows from .  "
},
{
  "id": "hkg-isotropic-semiample-fibration",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-isotropic-semiample-fibration",
  "type": "Proposition",
  "number": "10.22",
  "title": "",
  "body": " Let be a nontrivial nef line bundle on an IHS manifold, with . If is semiample, a sufficiently divisible positive power defines a Lagrangian fibration after Stein factorization.  A generated power defines a morphism to projective space. Its Stein factorization is , where is normal and projective, , and for an ample line bundle on . The class is nonzero by . Its numerical dimension is by , while the pullback of an ample class has numerical dimension . Hence . It is a nontrivial fibration, so makes it Lagrangian.  "
},
{
  "id": "hkg-engel-mauri-semiampleness",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-engel-mauri-semiampleness",
  "type": "Theorem",
  "number": "10.23",
  "title": "(Engel–Mauri, 2026 preprint).",
  "body": " (Engel–Mauri, 2026 preprint)  Every nef line bundle on a compact IHS manifold is semiample.  "
},
{
  "id": "hkg-holomorphic-to-special",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-holomorphic-to-special",
  "type": "Proposition",
  "number": "10.24",
  "title": "",
  "body": " If is -holomorphic Lagrangian, then with its complex orientation it is special Lagrangian for with phase .  The identity means . Since is -complex, its induced Kähler form is , and its Riemannian volume is . Therefore Multiplication by gives the required real positive volume form.  "
},
{
  "id": "hkg-special-to-holomorphic",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-special-to-holomorphic",
  "type": "Proposition",
  "number": "10.25",
  "title": "",
  "body": " Let be a compact special Lagrangian submanifold for , with the orientation and constant phase in the preceding definition. Then is -holomorphic Lagrangian if and only if in .  If is -holomorphic Lagrangian, then . Conversely, since is compact and , the binomial expansion of gives The constant-phase calibration condition and Wirtinger's inequality therefore give The absolute value in the last integral denotes the density of the real top-degree form on . Equality in Wirtinger's pointwise inequality holds exactly for an -complex tangent plane. The nonnegative continuous difference between the volume density and that density has integral zero, so it vanishes at every point. Thus is an -complex submanifold. For tangent vectors , the quaternionic identities give . Together with , this proves .  "
},
{
  "id": "hkg-elliptic-hilbert-fibration",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-elliptic-hilbert-fibration",
  "type": "Example",
  "number": "10.26",
  "title": "",
  "body": " Let be an elliptic K3 surface. Composing the Hilbert–Chow morphism with the map induced by gives Over a divisor of distinct smooth base points, its fiber is the product of the corresponding elliptic curves. It is connected. Stein factorization therefore has finite part of generic degree one, which is an isomorphism because is normal. Thus the displayed map has connected fibers and is a Lagrangian fibration. Its isotropic line bundle is the pullback of .  "
},
{
  "id": "hkg-fibration-euler-versus-sections",
  "level": "2",
  "url": "hkg-fibrations.html#hkg-fibration-euler-versus-sections",
  "type": "Example",
  "number": "10.27",
  "title": "",
  "body": " Suppose is a Lagrangian fibration with connected fibers, and let . The projection formula gives Yet for every integer , by . For an elliptic K3 surface and , Serre duality gives , and therefore .  "
},
{
  "id": "hkg-cohomology",
  "level": "1",
  "url": "hkg-cohomology.html",
  "type": "Chapter",
  "number": "11",
  "title": "Cohomology and the LLV algebra",
  "body": " Cohomology and the LLV algebra   Hard Lefschetz associates a representation of to each Kähler class. Allowing all degree-two classes with the Lefschetz property gives a larger Lie algebra acting on the same total cohomology. For an IHS manifold this algebra is an orthogonal Lie algebra determined by the BBF form. It contains the degree and Hodge operators, so its representations organize both Betti and Hodge numbers.  Let be IHS of dimension , and let . We use the BBF normalization of . The principal reference is .    Lefschetz operators and the LLV algebra  For , let be cup product by . Let be the degree operator on total cohomology, defined by Thus . Throughout this chapter the bracket of endomorphisms is the commutator .    A class is a Lefschetz class if For such a class, its lowering operator is the unique degree-minus-two operator satisfying    The existence and uniqueness of are the linear-algebra form of the Lefschetz decomposition. More explicitly, let . The decomposition expresses cohomology as the sum of strings with . On such a string, and The commutator acts on by , the eigenvalue of . This verifies the sign convention in .    For a Lefschetz class and , let . Then where groups of negative degree are zero.    For the assertion follows from degree bounds. For , hard Lefschetz identifies . Given , there is therefore a unique with . Then . If also belongs to , the same isomorphism forces . This proves the direct sum. The map is injective, since any vector it kills is also killed by the indicated isomorphism. Taking dimensions gives the formula.    Iterating this decomposition below the middle degree and applying hard Lefschetz above it gives the strings defining . These formulas recover the lowering operator from the graded ring and .  For a Kähler class , this notion of primitive cohomology depends on . For example, Indeed, its defining condition is , which is equivalent to BBF orthogonality by and . This codimension-one subspace lies inside the subalgebra generated by . Lefschetz-primitive classes are therefore not the same as classes outside that subalgebra.  Every Kähler class is a Lefschetz class. More generally, the Lefschetz property defines a nonempty Zariski open subset of , by nonvanishing of finitely many cup-product determinants; its classes need not have Hodge type .    The Looijenga–Lunts–Verbitsky algebra is the complex Lie subalgebra generated by for all Lefschetz classes . Its degree-zero subalgebra and its reduced LLV algebra are The second expression means the linear span of the commutators of pairs of elements of .    Elements of preserve cohomological degree because they commute with . Rational Lefschetz classes give a rational form , with ; see and . Looijenga and Lunts call this the total Lie algebra . Their Néron–Severi Lie algebra uses only divisor classes. The total LLV algebra uses all of , including for nonprojective .  A representation of a Lie algebra on a vector space means a linear map satisfying . The inclusion defining is the LLV action on cohomology. Its Lie bracket is the commutator; closure under composition is not required.    Let and , where are basis vectors of an auxiliary two-dimensional space. Define a symmetric bilinear form on by Thus is the orthogonal sum of and a hyperbolic plane.    For a quadratic space , the orthogonal Lie algebra is The space is the standard orthogonal representation; is the cohomology representation. The copy of in has -weight zero, whereas in cohomology has weight . Only for a K3 surface does coincide with the cohomology in degrees zero, two, and four.   (Looijenga–Lunts–Verbitsky)   The LLV algebra of has only degrees for the adjoint action of : Restriction to identifies with . There is an isomorphism under which annihilates , and acts on with eigenvalues on , respectively. The space consists of all cup-product operators , . The corresponding real forms are and . See .  Every acts as a derivation of the cup-product algebra: Here ; see .    The full LLV action includes operators that are not derivations: for , , while every derivation kills the unit.  Semisimplicity of gives the LLV decomposition : Here are pairwise nonisomorphic irreducible -modules, and are their multiplicity spaces, with trivial -action. The summands are stable under the Lie algebra, but need not be ideals for cup product.    The cup-product maps are equivariant for the reduced LLV algebra. The Poincaré pairings satisfy    On the tensor product, acts by . Equivariance of cup product is therefore exactly the derivation identity . Elements of act on the one-dimensional space by scalars. Their commutators act by zero there, so the derived algebra acts trivially on the top cohomology. Applying integration to proves the pairing identity.    If the reduced LLV algebra annihilates two classes, it also annihilates their product. The irreducible components of a product are restricted by the tensor product of the two reduced representations. An equivariant projection to a chosen summand therefore gives an equivariant product map; determining that map requires further information.    The subalgebra generated by degree two    The subalgebra generated by is the image of the cup-product map from its symmetric algebra. We retain ordinary cohomological grading: In particular, and .    Write . GKLR write for the whole subalgebra: their superscript specifies the generating degree. Our is its degree-four part, the image of .    If has , then .    Trivialize the cohomology local systems over a small deformation space of . For every nearby fibre, its symplectic form satisfies , since its Hodge type would be . By local Torelli, , the period lines fill a nonempty analytic open subset of the projective quadric . The map is a homogeneous polynomial map defined by the fixed cup product. Each of its coordinate polynomials therefore vanishes on the cone over that analytic open subset. The nondegenerate complex quadric is irreducible because ; such an analytic open subset is Zariski dense in it. The polynomial map consequently vanishes on the entire isotropic cone, proving the assertion.     (Verbitsky–Bogomolov)   The subalgebra is an irreducible -module. In the orthogonal highest-weight coordinates specified below its highest weight is ; it occurs with multiplicity one in total cohomology. For , the map is injective. Over , the relations in the subalgebra are precisely the ideal generated by for with : Each element of has degree two. The irreducibility and injection statements are due to Verbitsky; the ideal presentation in this form is due to Bogomolov. See and .    The presentation is stated over so that the generators range over the full complex isotropic quadric. Replacing that set by rational isotropic vectors without checking the rational quadratic space is an additional assertion. The rational injectivity statement follows from its complex version by extension of scalars.  The subalgebra is stable under by definition, under by its grading, and under by the derivation property. For , one has for degree reasons. Inductively, The first term belongs to by induction, and the second does because . Thus is a -submodule. Irreducibility and the precise relations are the further content of Verbitsky's theorem.    For , let . Then In particular, for .    For , injectivity identifies the degree- part with , whose dimension is . Choose a Kähler class . The subspace is stable under the associated Lefschetz triple, so hard Lefschetz on each of its finite-dimensional -summands identifies its degree- and degree- parts. This gives the formula above the middle degree as well. The inequality follows from inclusion in total cohomology.    We call this irreducible submodule the Verbitsky component and denote it by . Complete reducibility gives a decomposition The complement collects the other irreducible types. The ring structure is specified by on ; products involving require further information. In particular, a product of two classes in may have a nonzero component in .   For a K3 surface, and . The dimension formula gives graded dimensions in degrees zero, two, and four. These are all the Betti numbers, so . Its LLV representation is the standard representation of . In this case the auxiliary space has the same dimension as total cohomology; in higher dimensions is generally much smaller than .     Hodge bidegrees and representation weights  The Hodge decomposition supplies a second semisimple operator Complex conjugation exchanges and sends to , so this operator is defined over . The LLV theorem includes ; see . The operators and commute. Thus the degree and Hodge decompositions are both eigenspace decompositions of operators in the same Lie algebra.  Let and . Choose a Cartan subalgebra of containing and . We use orthogonal weight coordinates , in which the standard representation has weights , together with zero when is odd. A weight is written . A weight space means the simultaneous eigenspace for the Cartan subalgebra with these eigenvalues. The coordinates here are not coefficients in the basis of fundamental weights.    The Cartan subalgebra, orthogonal coordinates, and positive chamber can be chosen so that the weight contributes to In particular, its cohomological degree is . See .    Indeed, in these coordinates acts with eigenvalue , and with eigenvalue . Solving and gives the displayed bidegrees. To recover a Hodge number, sum the dimensions of all weight spaces that give that bidegree, including multiplicities from in .  This prescription can be written as a substitution in a character. If is the formal character and , then the Hodge polynomial with positive coefficients is The exponents become integers for the representations occurring in cohomology, including the half-integral case, because they are precisely the Hodge indices in . See for this expression in terms of characters.   For a K3 surface the standard module has dimension twenty-four. The weights contribute to , while contribute to . Its remaining twenty weights have and contribute to . Thus the standard LLV representation recovers the K3 Hodge diamond, not just its total dimension.   An irreducible representation of has highest weight with coordinates either all integral or all strict half-integers. When is odd, dominance is . When is even, it is . We quote the highest-weight classification for types and from finite-dimensional representation theory.  Integral highest weights occur in even cohomology and strict half-integral highest weights in odd cohomology; see . Hodge symmetry also makes every odd Betti number even: when is odd, , so the terms occur in conjugate pairs.    The Verbitsky component contains every Hodge component on the boundary of the Hodge diamond, meaning or . Every other highest weight in the LLV decomposition satisfies    By , the holomorphic forms are , so they all belong to . Complex conjugation gives the assertion on . Multiplication by the nowhere-zero volume form identifies with . Thus the boundary with is represented by products of and antiholomorphic forms, also in . Conjugation gives the remaining boundary.  The highest-weight vector of a remaining summand has . A Hodge component has , so . Equality would put a nonzero vector in , where the Verbitsky component already supplies the full Hodge component. The direct-sum decomposition has no room for an additional vector there. Therefore . The sum is an integer in both the integral and half-integral cases, proving the bound. This is .    The algebra and are determined by ; the remaining multiplicities are further cohomological data.    Deformation-invariant Hodge classes  A class  remains of type if its parallel transport has that type on every fibre of a sufficiently small full deformation of . Parallel transport preserves the graded cup product and the degree operator . It therefore identifies the Lefschetz classes and their uniquely determined lowering operators from , and hence the LLV algebra and its reduced subalgebra.    A class remains of type on all small deformations if and only if for every . In particular, the reduced LLV algebra annihilates every Chern class .    If the reduced algebra annihilates , the Hodge operator of every nearby complex structure annihilates its parallel transport, since belongs to that reduced algebra. On cohomological degree , the zero eigenspace of is exactly type .  Conversely, suppose remains of type . Let . By and local Torelli, the periods of small deformations range over an open set of oriented positive two-planes in . For an oriented -orthonormal basis of such a plane, the period line is . The Hodge operator on is Indeed, it sends to , its conjugate to , and annihilates the orthogonal complement, which is the real subspace. Since has type , every corresponding operator in annihilates it.  These operators span . To see this, identify that algebra with by If a linear functional on vanished on the wedges from the indicated open set of positive planes, its value on would vanish for an open set of pairs : orthonormalizing a positively oriented basis only multiplies its wedge by a nonzero scalar. This value is a bilinear polynomial in ; vanishing on an open set makes it identically zero. Decomposable wedges span the exterior square, so the functional is zero. Restriction to identifies the reduced LLV algebra with this orthogonal algebra. Hence the Hodge operators span the reduced algebra itself, which therefore annihilates .  In a smooth holomorphic deformation, the relative tangent bundle restricts to the tangent bundle of each fibre. Its Chern classes form flat sections of the cohomology local systems and have type on each fibre. They satisfy the stated condition.    The proof applies for every , including . It uses the full local period domain. On a polarized deformation space, the polarization remains of type although the full reduced algebra does not annihilate it. The relation with generic Mumford–Tate algebras is discussed in .   Let , and let remain of type on all small deformations. If is odd, then If , its intersection polynomial is a constant multiple of , as in . The constant is rational for rational and real for real .  Let and . If , the polynomial is constant and the assertion follows. Assume . By , every reduced LLV element annihilates . It also acts trivially on : that space is one-dimensional, and a semisimple Lie algebra has no nontrivial one-dimensional representation. Because its elements are derivations, This proves infinitesimal invariance of the polynomial under , and hence invariance under the connected complex group , acting on its variables in .  Here is the elementary invariant-polynomial calculation when . Choose with . The special orthogonal group is transitive on the vectors of square one. Indeed, extend two such vectors to orthonormal bases to obtain an orthogonal transformation between them. If its determinant is , compose with reflection in another vector of the target orthonormal basis. This reflection fixes the target vector and changes the determinant to one. Here , so another basis vector exists. In particular, and are in the same orbit.  If is odd, homogeneity gives , so both values vanish. Every vector with is a nonzero scalar multiple of a square-one vector; hence vanishes on that dense open set and therefore everywhere. If is even, the same argument gives on the nonisotropic locus and hence everywhere by polynomial identity. Since has the parity of , these are precisely the two assertions.  In the even case, for rational , evaluate at any rational of nonzero square. Both and the nonzero value are rational, so their ratio is rational. The same evaluation with real classes proves the real assertion.   This proves the generalized Fujiki relation from the LLV structure and local Torelli. It does not require to belong to the subalgebra generated by degree two. The vanishing in odd concerns this intersection polynomial; it does not by itself assert that .    Assume . The subspace of annihilated by the reduced LLV algebra is the line generated by the inverse quadratic class of . Consequently,    Verbitsky's injection identifies with . Through , a symmetric tensor in this space determines a self-adjoint endomorphism of . It is invariant under precisely when this endomorphism commutes with the standard orthogonal representation. That representation is irreducible for , so Schur's lemma makes the endomorphism scalar. The corresponding symmetric tensor is a multiple of , whose cup-product image is . The second Chern class is invariant by . If it lies in the subalgebra, it therefore lies on this line; the coefficient is rational because both classes are rational and . The reverse implication follows from the definition of .    Reduced invariance does not imply membership in the Verbitsky component. For example, for a K3 surface . This is recorded in , with its source in Markman's computation of the Beauville–Bogomolov class. Thus a characteristic class annihilated by the reduced LLV algebra can have a nonzero component outside . The generalized Fujiki relations in apply to these classes without requiring them to be polynomials in degree-two classes.    Salamon's relation  For a compact manifold , write , , and . This topological Euler characteristic differs from for an IHS -fold. The latter was computed from holomorphic forms in .   (Salamon)   For a compact hyperkähler manifold of dimension , Equivalently, See .    Salamon proves the theorem using index theory and Hodge symmetries. It applies to hyperkähler products and tori as well as IHS manifolds. Salamon writes the real dimension as and gives the identity .    Under Poincaré duality in real dimension , Salamon's derivative formula, , and are equivalent.    Poincaré duality gives . Therefore Since , substituting Salamon's derivative identity gives This is .  Pair the terms of degrees and . The middle term in the weighted square sum is zero, and Substituting these two equalities into and isolating gives . The rearrangement is reversible.     In dimension two, the relation is . It gives for a K3 surface and for a two-dimensional torus with . In dimension four it gives For IHS fourfolds , so the relation becomes . The coefficient of remains present even though odd Betti numbers vanish for the K3 Hilbert-square example.   Salamon's relation is linear in the graded dimensions. After substituting an LLV decomposition, it becomes a linear relation between the nonnegative representation multiplicities.    Betti numbers of K3 Hilbert schemes  For a smooth projective surface, Göttsche's formula computes the Betti numbers of all its Hilbert schemes at once. Let , with positive Betti coefficients as above, and let be a second formal variable. We set .   (Göttsche)   For a smooth connected projective surface over , The identity is in ; each coefficient uses only finitely many factors. See and the author's exposition .    The signs in the numerator depend on the convention for the Poincaré polynomial. Göttsche's survey writes . Substituting in that convention gives .  For a K3 surface, , , and . Hence Every exponent of is even, so for every . The same Betti numbers hold on every deformation of , including nonprojective members, by invariance of singular cohomology in smooth proper families.    For a K3 surface , In particular, .    Only the factors with can contribute to the coefficient of . For , the factor is . Its coefficient of is The term consists of from two degree-two factors and one further from the degree-zero and degree-four factors. The factor contributes at its first nonconstant term. Adding gives the stated polynomial.  Here and . Formula gives dimensions , with , for the subalgebra generated by degree two. These equal the full Betti numbers in every degree. Inclusion is therefore equality.    The Hilbert cube already has additional cohomology. Extracting the coefficient of gives The coefficient of can be checked without expanding the full product. Three contributions correspond to the partitions , , and of the length. They are respectively , , and , giving . But . Thus the quotient has dimension twenty-three.   The extra classes in the Hilbert cube form a single further irreducible LLV module. For of type, one has by . The exterior square of the standard orthogonal representation has highest weight . We cite the decomposition; its cohomological grading can be checked directly.  On , the degree operator has weights . Its action on the exterior square therefore gives Since , these eigenspaces lie in cohomological degrees four, six, and eight. They account for the differences and between the full Betti numbers and the Verbitsky dimensions.  The additional cohomology in degrees four, six, and eight forms one 300-dimensional LLV module.    The generalized Kummer fourfold has different behaviour: See . In particular its third cohomology is nonzero. The subalgebra generated by has degree-four dimension , leaving eighty further degree-four classes, as well as all the odd cohomology. Salamon's fourfold formula is satisfied: . In particular, odd cohomology need not vanish for IHS manifolds.   Setting gives Euler characteristics: For the Hilbert square the sum of its Betti numbers is ; for the Hilbert cube it is 3200. Since odd cohomology vanishes, these sums equal the Euler characteristics.    Riemann–Roch and Chern numbers of Hilbert schemes  The Riemann–Roch polynomial of can be computed for the Hilbert-scheme deformation types using line bundles induced from the surface. The calculation also gives characteristic numbers without computing the full cohomology ring.   For an IHS manifold of type, The binomial expression denotes the polynomial . Thus for every line bundle .  By deformation invariance it suffices to compute on for a projective K3 surface. Fix an ample bundle on , let , and let be the pullback to the Hilbert scheme of the descent of to . The descended bundle is ample, since its pullback by the finite quotient map is ample. Consequently is nef. Moreover , so it is big by .  We use Kawamata–Viehweg vanishing in the following form: if is smooth projective and is nef and big, then for ; see . Since , it gives for every .  The symmetric product is normal, so the proper birational Hilbert–Chow map has . Descent and the projection formula identify sections with the -invariant sections on . The Künneth isomorphism in degree zero gives On the K3 surface, Riemann–Roch and Kodaira vanishing give . Consequently, The two degree- polynomials agree at the infinitely many distinct numbers . They are equal.   For a K3 surface the formula is . For type it is Its leading coefficient is , as required by .   For of type, For every , one has .  On a symplectic fourfold, . The coefficient of in Riemann–Roch is therefore . Comparing with the polynomial above gives , hence the last identity by generalized Fujiki.  By , all of is . The line annihilated by the reduced LLV algebra in this space is , by , and belongs to that line. The inverse-class contraction formula gives , since and . Comparing the two constants gives .  Polarization yields . In a basis with inverse BBF matrix , contraction gives Thus . Finally Chern–Gauss–Bonnet and give .   As a check, the fourfold Todd formula gives     Riemann–Roch for the other known deformation types  The same polynomial invariant is explicit for generalized Kummer manifolds and the two O'Grady types. We retain the primitive integral BBF form of , with and . In particular, denotes the coefficient in , rather than the small Fujiki constant.   For each deformation type in the table, the Riemann–Roch polynomial and Fujiki constant have the following values. The Riemann–Roch identity holds for every line bundle, including on nonprojective members.   Riemann–Roch polynomials in the primitive integral normalization.   Type Dimension  Generalized Kummer,        Here is a polynomial. We quote the formulas from : the Kummer formula is attributed there to Nieper, and the exceptional cases are proved in its Propositions 2 and 3. The displayed constants follow by multiplying the leading coefficient by . They agree with .  The restriction in the Kummer row is essential for this normalization. The surface is a K3 surface, so its polynomial is . Substitution of into the Kummer expression would instead give ; it does not use the primitive K3 intersection form on its full second cohomology.   The second Chern class has generalized Fujiki constant For the exceptional types, Thus, for example, every class on an manifold satisfies .  Since , the coefficient of in is Write for its two highest coefficients. As , their ratio gives The Hilbert-scheme polynomial is , whose coefficient ratio is . For the Kummer polynomial , it is . Substituting these ratios proves both formulas.  The polynomial is the Kummer polynomial with , so . The polynomial is the Hilbert-scheme polynomial with , so . The intersection statement is generalized Fujiki with this constant.    The Riemann–Roch polynomial does not determine the deformation type, even among the known IHS manifolds of a fixed dimension.  The types and have identical polynomials, but their second Betti numbers are respectively eight and seven. Likewise and have identical polynomials, but their second Betti numbers are twenty-four and twenty-three. These Betti numbers are recorded in and are constant under deformation. The respective types are therefore distinct.   For an ample line bundle , Kodaira vanishing and identify these Euler characteristics with . In particular, if an ample bundle has BBF square two, its space of sections has dimension for generalized Kummer type, sixteen for , and twenty-one for . These numbers follow by substituting in the table; the assertion is conditional on the existence of the stated polarization.   "
},
{
  "id": "hkg-def-lefschetz-class",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-def-lefschetz-class",
  "type": "Definition",
  "number": "11.1",
  "title": "",
  "body": "  A class is a Lefschetz class if For such a class, its lowering operator is the unique degree-minus-two operator satisfying   "
},
{
  "id": "hkg-lefschetz-primitive-decomposition",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-lefschetz-primitive-decomposition",
  "type": "Lemma",
  "number": "11.2",
  "title": "",
  "body": "  For a Lefschetz class and , let . Then where groups of negative degree are zero.    For the assertion follows from degree bounds. For , hard Lefschetz identifies . Given , there is therefore a unique with . Then . If also belongs to , the same isomorphism forces . This proves the direct sum. The map is injective, since any vector it kills is also killed by the indicated isomorphism. Taking dimensions gives the formula.   "
},
{
  "id": "hkg-def-llv-algebra",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-def-llv-algebra",
  "type": "Definition",
  "number": "11.3",
  "title": "",
  "body": "  The Looijenga–Lunts–Verbitsky algebra is the complex Lie subalgebra generated by for all Lefschetz classes . Its degree-zero subalgebra and its reduced LLV algebra are The second expression means the linear span of the commutators of pairs of elements of .   "
},
{
  "id": "hkg-def-llv-quadratic-space",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-def-llv-quadratic-space",
  "type": "Definition",
  "number": "11.4",
  "title": "",
  "body": "  Let and , where are basis vectors of an auxiliary two-dimensional space. Define a symmetric bilinear form on by Thus is the orthogonal sum of and a hyperbolic plane.   "
},
{
  "id": "hkg-llv-structure",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-llv-structure",
  "type": "Theorem",
  "number": "11.5",
  "title": "(Looijenga–Lunts–Verbitsky).",
  "body": " (Looijenga–Lunts–Verbitsky)   The LLV algebra of has only degrees for the adjoint action of : Restriction to identifies with . There is an isomorphism under which annihilates , and acts on with eigenvalues on , respectively. The space consists of all cup-product operators , . The corresponding real forms are and . See .  Every acts as a derivation of the cup-product algebra: Here ; see .   "
},
{
  "id": "hkg-reduced-cup-equivariance",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-reduced-cup-equivariance",
  "type": "Proposition",
  "number": "11.6",
  "title": "",
  "body": "  The cup-product maps are equivariant for the reduced LLV algebra. The Poincaré pairings satisfy    On the tensor product, acts by . Equivariance of cup product is therefore exactly the derivation identity . Elements of act on the one-dimensional space by scalars. Their commutators act by zero there, so the derived algebra acts trivially on the top cohomology. Applying integration to proves the pairing identity.   "
},
{
  "id": "hkg-def-verbitsky-subalgebra",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-def-verbitsky-subalgebra",
  "type": "Definition",
  "number": "11.7",
  "title": "",
  "body": "  The subalgebra generated by is the image of the cup-product map from its symmetric algebra. We retain ordinary cohomological grading: In particular, and .   "
},
{
  "id": "hkg-isotropic-cup-power",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-isotropic-cup-power",
  "type": "Lemma",
  "number": "11.8",
  "title": "",
  "body": "  If has , then .    Trivialize the cohomology local systems over a small deformation space of . For every nearby fibre, its symplectic form satisfies , since its Hodge type would be . By local Torelli, , the period lines fill a nonempty analytic open subset of the projective quadric . The map is a homogeneous polynomial map defined by the fixed cup product. Each of its coordinate polynomials therefore vanishes on the cone over that analytic open subset. The nondegenerate complex quadric is irreducible because ; such an analytic open subset is Zariski dense in it. The polynomial map consequently vanishes on the entire isotropic cone, proving the assertion.   "
},
{
  "id": "hkg-verbitsky-theorem",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-verbitsky-theorem",
  "type": "Theorem",
  "number": "11.9",
  "title": "(Verbitsky–Bogomolov).",
  "body": " (Verbitsky–Bogomolov)   The subalgebra is an irreducible -module. In the orthogonal highest-weight coordinates specified below its highest weight is ; it occurs with multiplicity one in total cohomology. For , the map is injective. Over , the relations in the subalgebra are precisely the ideal generated by for with : Each element of has degree two. The irreducibility and injection statements are due to Verbitsky; the ideal presentation in this form is due to Bogomolov. See and .   "
},
{
  "id": "hkg-verbitsky-dimensions",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-verbitsky-dimensions",
  "type": "Corollary",
  "number": "11.10",
  "title": "",
  "body": "  For , let . Then In particular, for .    For , injectivity identifies the degree- part with , whose dimension is . Choose a Kähler class . The subspace is stable under the associated Lefschetz triple, so hard Lefschetz on each of its finite-dimensional -summands identifies its degree- and degree- parts. This gives the formula above the middle degree as well. The inequality follows from inclusion in total cohomology.   "
},
{
  "id": "hkg-verbitsky-k3",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-verbitsky-k3",
  "type": "Example",
  "number": "11.11",
  "title": "",
  "body": " For a K3 surface, and . The dimension formula gives graded dimensions in degrees zero, two, and four. These are all the Betti numbers, so . Its LLV representation is the standard representation of . In this case the auxiliary space has the same dimension as total cohomology; in higher dimensions is generally much smaller than .  "
},
{
  "id": "hkg-llv-weight-hodge",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-llv-weight-hodge",
  "type": "Theorem",
  "number": "11.12",
  "title": "",
  "body": "  The Cartan subalgebra, orthogonal coordinates, and positive chamber can be chosen so that the weight contributes to In particular, its cohomological degree is . See .   "
},
{
  "id": "hkg-k3-standard-hodge-weights",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-k3-standard-hodge-weights",
  "type": "Example",
  "number": "11.13",
  "title": "",
  "body": " For a K3 surface the standard module has dimension twenty-four. The weights contribute to , while contribute to . Its remaining twenty weights have and contribute to . Thus the standard LLV representation recovers the K3 Hodge diamond, not just its total dimension.  "
},
{
  "id": "hkg-hodge-boundary-llv",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-hodge-boundary-llv",
  "type": "Proposition",
  "number": "11.14",
  "title": "",
  "body": "  The Verbitsky component contains every Hodge component on the boundary of the Hodge diamond, meaning or . Every other highest weight in the LLV decomposition satisfies    By , the holomorphic forms are , so they all belong to . Complex conjugation gives the assertion on . Multiplication by the nowhere-zero volume form identifies with . Thus the boundary with is represented by products of and antiholomorphic forms, also in . Conjugation gives the remaining boundary.  The highest-weight vector of a remaining summand has . A Hodge component has , so . Equality would put a nonzero vector in , where the Verbitsky component already supplies the full Hodge component. The direct-sum decomposition has no room for an additional vector there. Therefore . The sum is an integer in both the integral and half-integral cases, proving the bound. This is .   "
},
{
  "id": "hkg-persistent-hodge-invariants",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-persistent-hodge-invariants",
  "type": "Proposition",
  "number": "11.15",
  "title": "",
  "body": "  A class remains of type on all small deformations if and only if for every . In particular, the reduced LLV algebra annihilates every Chern class .    If the reduced algebra annihilates , the Hodge operator of every nearby complex structure annihilates its parallel transport, since belongs to that reduced algebra. On cohomological degree , the zero eigenspace of is exactly type .  Conversely, suppose remains of type . Let . By and local Torelli, the periods of small deformations range over an open set of oriented positive two-planes in . For an oriented -orthonormal basis of such a plane, the period line is . The Hodge operator on is Indeed, it sends to , its conjugate to , and annihilates the orthogonal complement, which is the real subspace. Since has type , every corresponding operator in annihilates it.  These operators span . To see this, identify that algebra with by If a linear functional on vanished on the wedges from the indicated open set of positive planes, its value on would vanish for an open set of pairs : orthonormalizing a positively oriented basis only multiplies its wedge by a nonzero scalar. This value is a bilinear polynomial in ; vanishing on an open set makes it identically zero. Decomposable wedges span the exterior square, so the functional is zero. Restriction to identifies the reduced LLV algebra with this orthogonal algebra. Hence the Hodge operators span the reduced algebra itself, which therefore annihilates .  In a smooth holomorphic deformation, the relative tangent bundle restricts to the tangent bundle of each fibre. Its Chern classes form flat sections of the cohomology local systems and have type on each fibre. They satisfy the stated condition.   "
},
{
  "id": "hkg-invariant-intersection-polynomial",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-invariant-intersection-polynomial",
  "type": "Proposition",
  "number": "11.16",
  "title": "",
  "body": " Let , and let remain of type on all small deformations. If is odd, then If , its intersection polynomial is a constant multiple of , as in . The constant is rational for rational and real for real .  Let and . If , the polynomial is constant and the assertion follows. Assume . By , every reduced LLV element annihilates . It also acts trivially on : that space is one-dimensional, and a semisimple Lie algebra has no nontrivial one-dimensional representation. Because its elements are derivations, This proves infinitesimal invariance of the polynomial under , and hence invariance under the connected complex group , acting on its variables in .  Here is the elementary invariant-polynomial calculation when . Choose with . The special orthogonal group is transitive on the vectors of square one. Indeed, extend two such vectors to orthonormal bases to obtain an orthogonal transformation between them. If its determinant is , compose with reflection in another vector of the target orthonormal basis. This reflection fixes the target vector and changes the determinant to one. Here , so another basis vector exists. In particular, and are in the same orbit.  If is odd, homogeneity gives , so both values vanish. Every vector with is a nonzero scalar multiple of a square-one vector; hence vanishes on that dense open set and therefore everywhere. If is even, the same argument gives on the nonisotropic locus and hence everywhere by polynomial identity. Since has the parity of , these are precisely the two assertions.  In the even case, for rational , evaluate at any rational of nonzero square. Both and the nonzero value are rational, so their ratio is rational. The same evaluation with real classes proves the real assertion.  "
},
{
  "id": "hkg-characteristic-class-sh-four",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-characteristic-class-sh-four",
  "type": "Corollary",
  "number": "11.17",
  "title": "",
  "body": "  Assume . The subspace of annihilated by the reduced LLV algebra is the line generated by the inverse quadratic class of . Consequently,    Verbitsky's injection identifies with . Through , a symmetric tensor in this space determines a self-adjoint endomorphism of . It is invariant under precisely when this endomorphism commutes with the standard orthogonal representation. That representation is irreducible for , so Schur's lemma makes the endomorphism scalar. The corresponding symmetric tensor is a multiple of , whose cup-product image is . The second Chern class is invariant by . If it lies in the subalgebra, it therefore lies on this line; the coefficient is rational because both classes are rational and . The reverse implication follows from the definition of .   "
},
{
  "id": "hkg-salamon-theorem",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-salamon-theorem",
  "type": "Theorem",
  "number": "11.18",
  "title": "(Salamon).",
  "body": " (Salamon)   For a compact hyperkähler manifold of dimension , Equivalently, See .   "
},
{
  "id": "hkg-salamon-equivalent-forms",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-salamon-equivalent-forms",
  "type": "Lemma",
  "number": "11.19",
  "title": "",
  "body": "  Under Poincaré duality in real dimension , Salamon's derivative formula, , and are equivalent.    Poincaré duality gives . Therefore Since , substituting Salamon's derivative identity gives This is .  Pair the terms of degrees and . The middle term in the weighted square sum is zero, and Substituting these two equalities into and isolating gives . The rearrangement is reversible.   "
},
{
  "id": "hkg-salamon-low-dimensions",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-salamon-low-dimensions",
  "type": "Example",
  "number": "11.20",
  "title": "",
  "body": " In dimension two, the relation is . It gives for a K3 surface and for a two-dimensional torus with . In dimension four it gives For IHS fourfolds , so the relation becomes . The coefficient of remains present even though odd Betti numbers vanish for the K3 Hilbert-square example.  "
},
{
  "id": "hkg-goettsche-theorem",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-goettsche-theorem",
  "type": "Theorem",
  "number": "11.21",
  "title": "(Göttsche).",
  "body": " (Göttsche)   For a smooth connected projective surface over , The identity is in ; each coefficient uses only finitely many factors. See and the author's exposition .   "
},
{
  "id": "hkg-hilbert-square-betti",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-hilbert-square-betti",
  "type": "Proposition",
  "number": "11.22",
  "title": "",
  "body": "  For a K3 surface , In particular, .    Only the factors with can contribute to the coefficient of . For , the factor is . Its coefficient of is The term consists of from two degree-two factors and one further from the degree-zero and degree-four factors. The factor contributes at its first nonconstant term. Adding gives the stated polynomial.  Here and . Formula gives dimensions , with , for the subalgebra generated by degree two. These equal the full Betti numbers in every degree. Inclusion is therefore equality.   "
},
{
  "id": "hkg-hilbert-cube-llv",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-hilbert-cube-llv",
  "type": "Example",
  "number": "11.23",
  "title": "",
  "body": " The extra classes in the Hilbert cube form a single further irreducible LLV module. For of type, one has by . The exterior square of the standard orthogonal representation has highest weight . We cite the decomposition; its cohomological grading can be checked directly.  On , the degree operator has weights . Its action on the exterior square therefore gives Since , these eigenspaces lie in cohomological degrees four, six, and eight. They account for the differences and between the full Betti numbers and the Verbitsky dimensions.  The additional cohomology in degrees four, six, and eight forms one 300-dimensional LLV module.  "
},
{
  "id": "hkg-kummer-fourfold-odd-cohomology",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-kummer-fourfold-odd-cohomology",
  "type": "Example",
  "number": "11.24",
  "title": "",
  "body": " The generalized Kummer fourfold has different behaviour: See . In particular its third cohomology is nonzero. The subalgebra generated by has degree-four dimension , leaving eighty further degree-four classes, as well as all the odd cohomology. Salamon's fourfold formula is satisfied: . In particular, odd cohomology need not vanish for IHS manifolds.  "
},
{
  "id": "hkg-hilbert-rr-polynomial",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-hilbert-rr-polynomial",
  "type": "Proposition",
  "number": "11.25",
  "title": "",
  "body": " For an IHS manifold of type, The binomial expression denotes the polynomial . Thus for every line bundle .  By deformation invariance it suffices to compute on for a projective K3 surface. Fix an ample bundle on , let , and let be the pullback to the Hilbert scheme of the descent of to . The descended bundle is ample, since its pullback by the finite quotient map is ample. Consequently is nef. Moreover , so it is big by .  We use Kawamata–Viehweg vanishing in the following form: if is smooth projective and is nef and big, then for ; see . Since , it gives for every .  The symmetric product is normal, so the proper birational Hilbert–Chow map has . Descent and the projection formula identify sections with the -invariant sections on . The Künneth isomorphism in degree zero gives On the K3 surface, Riemann–Roch and Kodaira vanishing give . Consequently, The two degree- polynomials agree at the infinitely many distinct numbers . They are equal.  "
},
{
  "id": "hkg-hilbert-square-chern-numbers",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-hilbert-square-chern-numbers",
  "type": "Proposition",
  "number": "11.26",
  "title": "",
  "body": " For of type, For every , one has .  On a symplectic fourfold, . The coefficient of in Riemann–Roch is therefore . Comparing with the polynomial above gives , hence the last identity by generalized Fujiki.  By , all of is . The line annihilated by the reduced LLV algebra in this space is , by , and belongs to that line. The inverse-class contraction formula gives , since and . Comparing the two constants gives .  Polarization yields . In a basis with inverse BBF matrix , contraction gives Thus . Finally Chern–Gauss–Bonnet and give .  "
},
{
  "id": "hkg-kummer-ogrady-rr",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-kummer-ogrady-rr",
  "type": "Theorem",
  "number": "11.27",
  "title": "",
  "body": " For each deformation type in the table, the Riemann–Roch polynomial and Fujiki constant have the following values. The Riemann–Roch identity holds for every line bundle, including on nonprojective members.   Riemann–Roch polynomials in the primitive integral normalization.   Type Dimension  Generalized Kummer,       "
},
{
  "id": "hkg-known-types-second-chern-fujiki",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-known-types-second-chern-fujiki",
  "type": "Proposition",
  "number": "11.29",
  "title": "",
  "body": " The second Chern class has generalized Fujiki constant For the exceptional types, Thus, for example, every class on an manifold satisfies .  Since , the coefficient of in is Write for its two highest coefficients. As , their ratio gives The Hilbert-scheme polynomial is , whose coefficient ratio is . For the Kummer polynomial , it is . Substituting these ratios proves both formulas.  The polynomial is the Kummer polynomial with , so . The polynomial is the Hilbert-scheme polynomial with , so . The intersection statement is generalized Fujiki with this constant.  "
},
{
  "id": "hkg-rr-not-deformation-classifier",
  "level": "2",
  "url": "hkg-cohomology.html#hkg-rr-not-deformation-classifier",
  "type": "Corollary",
  "number": "11.30",
  "title": "",
  "body": " The Riemann–Roch polynomial does not determine the deformation type, even among the known IHS manifolds of a fixed dimension.  The types and have identical polynomials, but their second Betti numbers are respectively eight and seven. Likewise and have identical polynomials, but their second Betti numbers are twenty-four and twenty-three. These Betti numbers are recorded in and are constant under deformation. The respective types are therefore distinct.  "
},
{
  "id": "hkg-hyperholomorphic",
  "level": "1",
  "url": "hkg-hyperholomorphic.html",
  "type": "Chapter",
  "number": "12",
  "title": "Hyperholomorphic bundles and trianalytic subvarieties",
  "body": " Hyperholomorphic bundles and trianalytic subvarieties   Fix a hyperkähler structure , of real dimension . A connection is hyperholomorphic when it defines a holomorphic bundle for every induced complex structure. A subvariety is trianalytic when it is analytic for every induced complex structure. On compact , both have invariance criteria under the fiberwise -action, applied respectively to curvature forms and cycle classes.  The main references are , , and .    The action on forms and Hodge types  The unit quaternions form . They act on each tangent space through , and on differential forms by the dual action This is an action on the fibers of the exterior algebra bundle. It does not require an action of on the points of . For forms valued in a complex vector bundle, the group acts on the exterior-form factor and acts trivially on the coefficient bundle.   A complex differential form of degree is -invariant if and only if it has type for every induced complex structure. In particular, an endomorphism-valued two-form is invariant if and only if it has type for every induced complex structure.   For an induced complex structure , consider the circle of unit quaternions. On forms of type , its action is multiplication by . Its fixed subspace in degree is therefore exactly type . Every element of lies in one of these circles. A form is fixed by all circles exactly when it is fixed by the group. The same calculation applies coefficient by coefficient to a bundle-valued form.    For compact , the action commutes with the Riemannian Laplacian and hence acts on cohomology through harmonic representatives; see . The fiberwise action need not commute with the de Rham differential. It fixes functions, but need not equal .  The circle for acts on cohomology through the Hodge decomposition of , with the same weights. Thus the preceding lemma holds for cohomology classes as well. The cohomological action preserves cup product: the Hodge decomposition is multiplicative, so each Hodge circle preserves cup product, and the circles generate . It also preserves integration on top cohomology.   Let be an -invariant two-form, possibly with vector-bundle coefficients. For every induced complex structure , where is the pointwise adjoint of multiplication by the Kähler form .   It suffices to treat after rotating the quaternionic triple. The unit quaternion fixes and sends to . Its action on forms is orthogonal. Consequently, On two-forms, contraction is this inner product with . For a bundle-valued form, apply the argument to each coefficient.    Invariance refers to the chosen metric and quaternionic structure. On an IHS manifold, the nonzero classes in from remain of type on that metric's twistor sphere. Their Hodge loci in the full local period domain are proper hyperplanes, by local Torelli.    Hyperholomorphic connections  Let be a smooth complex vector bundle with a Hermitian metric . A unitary connection  is a complex-linear connection preserving ; its curvature is . Relative to a complex structure on the base, write . Then The integrability theorem for bundle-valued -operators says that square zero gives a unique holomorphic structure with this operator. For a unitary connection, vanishing of the part also gives vanishing of the part by conjugate transpose. Thus the curvature has type . See .   A unitary connection on is hyperholomorphic if is integrable for every induced complex structure . A holomorphic vector bundle on is hyperholomorphic if it admits a Hermitian metric and a hyperholomorphic connection whose part is its given holomorphic structure operator.    For a unitary connection , the following conditions are equivalent: it is hyperholomorphic; its curvature has type for every induced complex structure; its curvature is -invariant. Each implies for every induced .  The integrability identity and its unitary conjugate give the first equivalence. The second is , applied to the endomorphism-valued curvature. The contraction vanishes by .   Write for the induced holomorphic bundles. Some sources allow complex connections preserving no Hermitian metric and call the invariant-curvature condition autodual . The complex twistor correspondence below includes these connections; our unqualified hyperholomorphic connection is unitary.   If is compact, every Chern class of a hyperholomorphic bundle is -invariant in real cohomology. Direct sums, tensor products, duals, and exterior powers of hyperholomorphic connections are hyperholomorphic, without a compactness assumption.   The Chern–Weil representatives are the coefficients of Exterior multiplication and invariant polynomials in the endomorphism coefficients preserve invariance of the curvature form. The resulting closed forms are invariant. When is compact, their harmonic projections are invariant because the Laplacian commutes with , giving the cohomological assertion.  The curvature of a tensor product is , and that of a dual is . Direct sums and exterior powers have the corresponding induced curvature formulas. Each preserves the invariance condition and the induced Hermitian metric.     The Levi-Civita connection gives a hyperholomorphic connection on . It commutes with and preserves the induced Hermitian metric. For every parallel induced complex structure , the Kähler curvature identity is . Therefore its two-form indices have type for every , even though the coefficient bundle has been fixed using . Tensor constructions from the tangent bundle give further examples. Hyperholomorphicity does not mean flatness: on a K3 surface this connection has nontrivial holonomy .     Stability and the Hermitian–Einstein correspondence  Let be compact Kähler of dimension . For a torsion-free coherent sheaf of positive rank, set It is slope stable if every coherent subsheaf of rank strictly between zero and its rank has strictly smaller slope. A vector bundle is slope polystable if it is a direct sum of slope stable bundles of the same slope. These are slope conditions for the Kähler class; no projective embedding or integral polarization is assumed. The factor changes all slopes by the same positive number and does not change stability. With a real Kähler class the slope is a real number, and need not be rational.   A Hermitian metric on a holomorphic vector bundle is Hermitian–Einstein if the curvature of its Chern connection satisfies for a real constant .   Our Chern class convention is . Let . Taking the trace of the equation and using the pointwise identity gives . In particular, zero slope is exactly the equation . Older sources often call this the Hermitian Yang–Mills equation; the curvature condition here is stronger than the general Yang–Mills equation .   (Donaldson–Uhlenbeck–Yau)  A holomorphic vector bundle on a compact Kähler manifold admits a Hermitian–Einstein metric if and only if it is slope polystable. For such a metric it admits an orthogonal parallel decomposition into stable bundles of the same slope. The bundle is stable if and only if that connection has no nonzero proper parallel complex subbundle. A stable bundle's Hermitian–Einstein metric is unique up to a positive constant. In general, any two Hermitian–Einstein metrics are related by a holomorphic bundle automorphism, which intertwines their Chern connections.   See for existence and for the parallel stable decomposition.   On a compact hyperkähler manifold, every hyperholomorphic bundle is slope polystable of slope zero for . If its connection is irreducible, it is stable for every induced complex structure.  Its curvature has type and satisfies , so it is Hermitian–Einstein with . The trace calculation gives zero slope, and gives polystability. Irreducibility is a property of the fixed connection, so the stable conclusion applies for every .     Chern classes and the curvature norm  The Hermitian–Einstein equation also gives a useful positivity statement. We fix the normalization of the curvature norm so that the constants in this statement are unambiguous.   Let be a unitary connection on a Hermitian vector bundle over a compact Kähler manifold of dimension . Decompose its curvature orthogonally as where is primitive of type . Give the skew-Hermitian endomorphisms the inner product , and use the resulting norm on forms. Then In particular, the left side is at most , with equality exactly when is primitive of type .  For a real two-form , the Kähler Hodge-star identities on the three orthogonal summands are These are pointwise identities in a unitary real coframe with . The primitive identity is checked explicitly in the next proof. For the second identity, let . On the four-plane indexed by , the Hodge star fixes both For either form , the full Hodge star is . These real and imaginary parts of span the required summand. Expanding proves the third identity.  Apply these identities coefficientwise to skew-Hermitian endomorphism-valued forms. The three summands have no mixed terms in the integral: the operator preserves the orthogonal decomposition. With the negative trace in the norm, their contributions are respectively For the last coefficient, use and . Adding the three contributions and using orthogonality proves the formula. Both subtracted terms are nonnegative, and their vanishing is the stated curvature condition.    (Lübke)  Let be a holomorphic vector bundle of rank on a compact Kähler manifold of dimension . Suppose its Hermitian metric is Hermitian–Einstein, with curvature , and put Use the inner product on skew-Hermitian endomorphisms, and set Then Equality holds if and only if the connection is projectively flat, meaning .  The curvature has type . Taking its trace-free part in the Hermitian–Einstein equation gives , so it is primitive. For a primitive real -form , the Hodge-star identity is To check the sign and factorial, diagonalize in a unitary real coframe: write and , with and . The coefficient of in is , whereas . This proves the identity. It applies coefficientwise to in an orthonormal basis of skew-Hermitian endomorphisms.  Expanding the Chern–Weil determinant gives representatives Consequently the discriminant is represented by Wedge with , use the star identity, and integrate. The left side depends only on the Chern classes, while the right side is the stated squared norm. It vanishes exactly when vanishes everywhere.   This is the curvature calculation underlying Lübke's inequality; see . Together with , it proves the discriminant inequality for slope polystable vector bundles. The equality concerns their Hermitian–Einstein connection; it does not require its scalar curvature component to vanish.   For an IHS -fold and any Kähler class , More precisely, if is the curvature of the Ricci-flat metric in this class, with the norm above, then  The Levi-Civita connection on is its Chern connection. The Kähler curvature identities and Ricci-flatness give and . Thus and . Apply with and divide by . The curvature cannot vanish identically: its restricted holonomy is by , whereas a flat connection has trivial restricted holonomy. This proves strict positivity. Finally, by . Since , the generalized Fujiki constant is positive.   The coefficient of in is therefore This follows from in . Thus the first two coefficients of the Riemann–Roch polynomial have a geometric positivity explanation, even though the full polynomial can depend on the deformation type.    The Chern-class criterion   (Verbitsky)  Let be compact hyperkähler, and let be a slope polystable holomorphic vector bundle on , for the metric Kähler form . Then admits a hyperholomorphic connection if and only if and are -invariant in real cohomology. In that case its Hermitian–Einstein connection is hyperholomorphic, and its slope is zero.  Necessity is . Conversely, an invariant class has an invariant harmonic representative, which is primitive by . Its degree against is therefore zero. By , polystability gives a Hermitian–Einstein connection . Its curvature has type for and satisfies , since the slope is zero.  For each induced complex structure , put The Chern–Weil class of is This class is -invariant by hypothesis. The cohomological action preserves cup product and integration, and takes to . Hence . The energy identity at gives . The Riemannian metric and complex orientation are the same for every induced structure, so this norm is independent of . Applying at now gives Both terms vanish. Thus is primitive of type for every induced structure, and proves hyperholomorphicity.   The stable case is ; the polystable formulation is .  The higher Chern classes are invariant by . Polystability cannot be omitted from the converse, as the following example shows.   Let be a complex torus of dimension two with a flat hyperkähler metric. A nonzero class in defines a nonsplit extension The Whitney formula gives . The subbundle has the same slope as , so is not stable. If it were polystable, it would be a sum of two line bundles of degree zero. A nonzero section of either summand has no zeros: an effective divisor of degree zero on a compact Kähler manifold is zero. Thus that summand is trivial, and makes the other summand trivial as well. But the cohomology sequence of the nonsplit extension gives , whereas . Hence is not polystable and, by , is not hyperholomorphic despite the invariance of all its Chern classes.     Line bundles, surfaces, and the projective variant   A holomorphic line bundle on , for compact hyperkähler , is hyperholomorphic if and only if its first Chern class is -invariant. Such a line bundle has degree zero for every induced complex structure. For IHS fibers, the possible first Chern classes are exactly .  A line bundle is slope stable and has , so the assertion follows from . The last group is the set of degree-two integral classes of type for every induced complex structure by . The degree-zero statement follows from .   On an IHS manifold, a nonzero first Chern class of a hyperholomorphic line bundle has negative BBF square because is negative definite. Such bundles can exist on very general twistor fibers with no effective divisors. An ample bundle has positive degree and is never hyperholomorphic for the chosen metric.   On a hyperkähler surface with its complex orientation, a unitary connection is hyperholomorphic if and only if its curvature is anti-self-dual. Every slope stable degree-zero bundle on a compact hyperkähler surface is therefore hyperholomorphic.   In real dimension four, the three metric Kähler forms are self-dual and span . For any one induced complex structure, its real primitive forms of type are precisely . This follows in a unitary real coframe by applying the Hodge star to the six basis wedge products: and the real and imaginary parts of have star , and their orthogonal complement has star .  Hyperholomorphic curvature is primitive of type , so it is anti-self-dual. Conversely, anti-self-dual curvature lies in the primitive subspace for every induced complex structure, since the self-dual three-plane is the same throughout the sphere. It is therefore hyperholomorphic. For a stable degree-zero bundle, its Hermitian–Einstein connection is primitive of type , giving the second assertion.    The surface argument explains why degree zero alone suffices there. In higher dimension, being primitive of type for one complex structure does not imply invariance under , and the second Chern class condition in Verbitsky's theorem has content.   A unitary connection on a rank bundle is projectively hyperholomorphic if its trace-free curvature is -invariant.   The induced connection on has curvature . The adjoint representation is injective on trace-free endomorphisms, so projective hyperholomorphicity is equivalent to hyperholomorphicity of this endomorphism connection. It allows a noninvariant scalar part of curvature and a nonzero slope. Every Hermitian–Einstein connection on a hyperkähler surface is projectively hyperholomorphic, because its trace-free curvature is primitive of type . For rank one the projective condition imposes no restriction. These distinctions are discussed in .   Let be a holomorphic vector bundle of rank on a compact hyperkähler manifold. Suppose is slope polystable with respect to . Its Hermitian–Einstein connection is projectively hyperholomorphic if and only if is -invariant in real cohomology.  The induced connection on is Hermitian–Einstein of slope zero: its contracted curvature sends to . Thus is slope polystable by . Multiplying and in degrees at most four gives Apply to this Hermitian–Einstein connection. It is hyperholomorphic exactly when is invariant. By the injectivity of the adjoint representation on trace-free endomorphisms, this is equivalent to invariance of .   For a line bundle , the isomorphism gives . Tensoring preserves slope polystability because it adds to every slope. Thus the criterion depends on the projective bundle and not on a choice of its vector-bundle lift. This is the same reason that endomorphisms of local universal families can descend even when the families themselves differ by line bundles. Gieseker stability behaves differently under tensor product by an arbitrary line bundle; see and the paragraph following it.    The twistor transform  Let be the twistor space, with holomorphic projection and smooth projection . The latter is not holomorphic for a fixed complex structure on . Let denote the real twistor sections.   Let be a complex connection on with -invariant curvature. Then is a holomorphic vector bundle on . Its restriction to every real twistor section is holomorphically trivial, and its restriction to is .   The curvature of is . It vanishes whenever one argument is tangent to . On two vertical arguments at , its component is , since invariance implies type for . Thus , which gives the holomorphic structure.  On , the pulled-back connection is the ordinary constant connection on the fixed vector space . Its holomorphic bundle is . Restricting to a fiber instead restricts the operator to .     (Kaledin–Verbitsky)  The direct twistor transform gives an equivalence between complex vector bundles on with a connection of -invariant curvature, with parallel bundle morphisms, and holomorphic vector bundles on whose restriction to every real twistor section is holomorphically trivial, with holomorphic bundle morphisms.   This is , also stated as . The inverse recovers the fiber at as the space of holomorphic sections of the restriction to ; evaluation identifies this space with any fiber on that section. Recovering the connection from the holomorphic structure uses the first-order variation of these identifications in .  The theorem concerns complex connections and does not by itself produce a unitary connection. Write and . If preserves a positive Hermitian metric , linear in its first argument, there is a holomorphic pairing Here is the conjugate holomorphic bundle on the conjugate complex manifold , and is holomorphic. The two factors are twistor transforms of the connection and its conjugate; their pairing is holomorphic because . It satisfies On a real twistor section, constant holomorphic sections identify both antipodal fibers with , and gives the positive Hermitian form . These are additional Hermitian reality and positivity conditions, rather than a quaternionic endomorphism of with square .  Tensoring a twistor transform by preserves its restriction to each fiber up to isomorphism, but changes its restriction to each real section from to . Thus an extension to must still satisfy the theorem's triviality condition on real sections.    Trianalytic subvarieties and calibration   A closed reduced subset is trianalytic if it is a complex analytic subset of for every induced complex structure . For a compact analytic subvariety of pure dimension , write for the Poincaré dual of its fundamental cycle.    A smooth trianalytic submanifold has even dimension, inherits the ambient hyperkähler structure, and is totally geodesic.   Its real tangent bundle is preserved by , so each tangent space is quaternionic and has real dimension divisible by four. Its orthogonal normal bundle is also preserved. Orthogonal projection of the ambient Levi-Civita connection to the tangent bundle is the induced Levi-Civita connection and commutes with . The induced metric and the restricted triple are therefore hyperkähler.  Let be the second fundamental form. Symmetry of , parallelness of the ambient structures, and preservation of the normal bundle give for . Hence Thus , which is total geodesy.     (Verbitsky)  Let be compact hyperkähler, and let be a closed reduced analytic subvariety of pure dimension. Then is trianalytic if and only if is -invariant.   The implication from invariant cycle class to trianalyticity, including singular subvarieties, is . For the reverse implication, the fundamental cycle has type for every induced structure, so invariance follows from the cohomological form of . The geometric reason for the forward implication is equality in the Kähler volume inequality, which we now prove for a smooth subvariety.   Let be a Hermitian real vector space, and an oriented real subspace of dimension . Then Equality holds exactly when is -invariant. Equality without the absolute value uses its complex orientation.   The restriction of is represented by the skew-adjoint operator . In an orthonormal basis of , its skew-normal form has two-dimensional blocks with parameters , all of absolute value at most , because orthogonal projection does not increase length. The coefficient of relative to the oriented volume is, up to the orientation sign, . This proves the inequality.  Equality requires every singular value of to be , so for every . The component of perpendicular to then vanishes, proving . Conversely an -complex subspace has its Kähler volume form , positive for its complex orientation.     Let be a smooth closed complex submanifold of a compact hyperkähler manifold. If is -invariant, then is trianalytic.   Let . The group rotates the metric Kähler forms transitively. Since it preserves cup product and integration and fixes the cycle class, the number is independent of the induced . For , this equals the Riemannian volume of .  For any , gives pointwise with the fixed -orientation. Their integrals are equal, so their continuous nonnegative difference is identically zero. Equality in the lemma makes every tangent space of invariant under , with the induced complex orientation. The restricted structure is integrable and the inclusion is holomorphic. Thus is an analytic submanifold for every .    For singular subvarieties the same calculation applies on the regular locus, whose complement has zero volume in its fundamental cycle. Extending the analytic conclusion across the singular set is part of the full theorem cited above. The closure of an arbitrary analytic subset of an open set need not be analytic, so that extension cannot be replaced by a bare closure assertion.   In the product of a hyperkähler manifold with itself, with the componentwise triple, the diagonal is trianalytic. Its tangent space is the diagonal quaternionic subspace and its induced metric is twice the original metric. A factor in a product is another example. By contrast, a positive-dimensional holomorphic Lagrangian submanifold cannot be trianalytic: the ambient holomorphic symplectic form vanishes on it, whereas its restriction to a trianalytic tangent space is nondegenerate.     Normalization and very general induced structures   (Verbitsky)  The normalization of a reduced trianalytic subvariety is smooth and carries an induced hypercomplex structure, independent of the induced complex structure used to take the normalization. Locally it separates the smooth analytic branches. The normalization map is a triholomorphic immersion into the ambient manifold.   For smoothness and the hypercomplex structure, see . Its proof describes the normalization locally as the disjoint union of smooth branches, each embedded in the original analytic subvariety; composing with the ambient embedding gives the immersion assertion. Pulling back the metric therefore gives a positive definite metric. The connection argument of proves that this metric is hyperkähler and that the immersion is totally geodesic. For a compact subvariety its normalization is compact, so every connected component admits the decomposition of . It need not be IHS.   For a compact hyperkähler manifold with fixed metric, there is a countable set of parameters in its induced sphere such that every closed analytic subvariety of every remaining fiber is trianalytic. Consequently, such a fiber has no odd-dimensional analytic subvarieties.   Let be a noninvariant class. If it were of type for two nonantipodal induced structures , both Hodge circles would fix it. The corresponding two independent elements of annihilate ; their bracket also annihilates it. Those three elements span , forcing invariance under the connected group , a contradiction. Thus a noninvariant class is Hodge at at most two antipodal parameters.  Rational cohomology in all degrees is countable. Remove these exceptional points for every noninvariant rational class. On every remaining fiber, all rational classes of type are invariant. The cycle class of an analytic subvariety has this type in its codimension, so makes every reduced irreducible component trianalytic. At a smooth point its tangent space is quaternionic, so its complex dimension is even.    See . Even-dimensional trianalytic subvarieties can remain on these fibers.  A class that remains Hodge under every sufficiently small IHS deformation satisfies a stronger condition. Every chosen metric gives a local twistor deformation through the original point, so persistence in the full deformation germ makes the class Hodge at two nonantipodal nearby induced structures and therefore invariant for that metric. This implication applies to the Chern classes of the tangent bundle, which come from the relative tangent bundle of every smooth deformation. For the Chern classes of an arbitrary hyperholomorphic bundle, the fixed-metric criterion alone makes no assertion that the bundle or its classes extend across all small IHS deformations.    Deformations of bundles  Let be a stable hyperholomorphic bundle on a compact hyperkähler manifold. The tangent space to its local moduli problem is . The primary obstruction is the Yoneda square . The general deformation-theoretic definitions and the K3 surface case belong to ; the additional hyperholomorphic statement is the following.   (Verbitsky)  The reduced analytic germ of the local moduli space at a stable hyperholomorphic bundle is isomorphic to the reduced germ at zero of Its smooth locus carries the hyperkähler structure induced by the bundle's hyperholomorphic connection.   The quadratic description is ; the hyperkähler statement is its Theorem 6.3. These statements describe the reduced analytic germ, without determining the possible nonreduced structure.  A stable hyperholomorphic connection remains stable and hyperholomorphic on every induced fiber, so the induced complex structures on its local moduli space vary with those of the base. The moduli space need not be compact or IHS. A compactification can contain torsion-free sheaves that are not locally free; the corresponding curvature and twistor statements require the analytic extension theorems and singularity hypotheses in .   "
},
{
  "id": "hkg-lemma-su2-hodge-types",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-lemma-su2-hodge-types",
  "type": "Lemma",
  "number": "12.1",
  "title": "",
  "body": " A complex differential form of degree is -invariant if and only if it has type for every induced complex structure. In particular, an endomorphism-valued two-form is invariant if and only if it has type for every induced complex structure.   For an induced complex structure , consider the circle of unit quaternions. On forms of type , its action is multiplication by . Its fixed subspace in degree is therefore exactly type . Every element of lies in one of these circles. A form is fixed by all circles exactly when it is fixed by the group. The same calculation applies coefficient by coefficient to a bundle-valued form.   "
},
{
  "id": "hkg-lemma-invariant-two-form-primitive",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-lemma-invariant-two-form-primitive",
  "type": "Lemma",
  "number": "12.2",
  "title": "",
  "body": " Let be an -invariant two-form, possibly with vector-bundle coefficients. For every induced complex structure , where is the pointwise adjoint of multiplication by the Kähler form .   It suffices to treat after rotating the quaternionic triple. The unit quaternion fixes and sends to . Its action on forms is orthogonal. Consequently, On two-forms, contraction is this inner product with . For a bundle-valued form, apply the argument to each coefficient.   "
},
{
  "id": "hkg-def-hyperholomorphic-connection",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-def-hyperholomorphic-connection",
  "type": "Definition",
  "number": "12.3",
  "title": "",
  "body": " A unitary connection on is hyperholomorphic if is integrable for every induced complex structure . A holomorphic vector bundle on is hyperholomorphic if it admits a Hermitian metric and a hyperholomorphic connection whose part is its given holomorphic structure operator.  "
},
{
  "id": "hkg-prop-hyperholomorphic-curvature",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-prop-hyperholomorphic-curvature",
  "type": "Proposition",
  "number": "12.4",
  "title": "",
  "body": " For a unitary connection , the following conditions are equivalent: it is hyperholomorphic; its curvature has type for every induced complex structure; its curvature is -invariant. Each implies for every induced .  The integrability identity and its unitary conjugate give the first equivalence. The second is , applied to the endomorphism-valued curvature. The contraction vanishes by .  "
},
{
  "id": "hkg-prop-hyperholomorphic-chern-operations",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-prop-hyperholomorphic-chern-operations",
  "type": "Proposition",
  "number": "12.5",
  "title": "",
  "body": " If is compact, every Chern class of a hyperholomorphic bundle is -invariant in real cohomology. Direct sums, tensor products, duals, and exterior powers of hyperholomorphic connections are hyperholomorphic, without a compactness assumption.   The Chern–Weil representatives are the coefficients of Exterior multiplication and invariant polynomials in the endomorphism coefficients preserve invariance of the curvature form. The resulting closed forms are invariant. When is compact, their harmonic projections are invariant because the Laplacian commutes with , giving the cohomological assertion.  The curvature of a tensor product is , and that of a dual is . Direct sums and exterior powers have the corresponding induced curvature formulas. Each preserves the invariance condition and the induced Hermitian metric.   "
},
{
  "id": "hkg-example-hyperholomorphic-tangent",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-example-hyperholomorphic-tangent",
  "type": "Example",
  "number": "12.6",
  "title": "",
  "body": " The Levi-Civita connection gives a hyperholomorphic connection on . It commutes with and preserves the induced Hermitian metric. For every parallel induced complex structure , the Kähler curvature identity is . Therefore its two-form indices have type for every , even though the coefficient bundle has been fixed using . Tensor constructions from the tangent bundle give further examples. Hyperholomorphicity does not mean flatness: on a K3 surface this connection has nontrivial holonomy .  "
},
{
  "id": "hkg-def-hermitian-einstein",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-def-hermitian-einstein",
  "type": "Definition",
  "number": "12.7",
  "title": "",
  "body": " A Hermitian metric on a holomorphic vector bundle is Hermitian–Einstein if the curvature of its Chern connection satisfies for a real constant .  "
},
{
  "id": "hkg-thm-duy",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-thm-duy",
  "type": "Theorem",
  "number": "12.8",
  "title": "(Donaldson–Uhlenbeck–Yau).",
  "body": " (Donaldson–Uhlenbeck–Yau)  A holomorphic vector bundle on a compact Kähler manifold admits a Hermitian–Einstein metric if and only if it is slope polystable. For such a metric it admits an orthogonal parallel decomposition into stable bundles of the same slope. The bundle is stable if and only if that connection has no nonzero proper parallel complex subbundle. A stable bundle's Hermitian–Einstein metric is unique up to a positive constant. In general, any two Hermitian–Einstein metrics are related by a holomorphic bundle automorphism, which intertwines their Chern connections.  "
},
{
  "id": "hkg-cor-hyperholomorphic-polystable",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-cor-hyperholomorphic-polystable",
  "type": "Corollary",
  "number": "12.9",
  "title": "",
  "body": " On a compact hyperkähler manifold, every hyperholomorphic bundle is slope polystable of slope zero for . If its connection is irreducible, it is stable for every induced complex structure.  Its curvature has type and satisfies , so it is Hermitian–Einstein with . The trace calculation gives zero slope, and gives polystability. Irreducibility is a property of the fixed connection, so the stable conclusion applies for every .  "
},
{
  "id": "hkg-curvature-energy-decomposition",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-curvature-energy-decomposition",
  "type": "Proposition",
  "number": "12.10",
  "title": "",
  "body": " Let be a unitary connection on a Hermitian vector bundle over a compact Kähler manifold of dimension . Decompose its curvature orthogonally as where is primitive of type . Give the skew-Hermitian endomorphisms the inner product , and use the resulting norm on forms. Then In particular, the left side is at most , with equality exactly when is primitive of type .  For a real two-form , the Kähler Hodge-star identities on the three orthogonal summands are These are pointwise identities in a unitary real coframe with . The primitive identity is checked explicitly in the next proof. For the second identity, let . On the four-plane indexed by , the Hodge star fixes both For either form , the full Hodge star is . These real and imaginary parts of span the required summand. Expanding proves the third identity.  Apply these identities coefficientwise to skew-Hermitian endomorphism-valued forms. The three summands have no mixed terms in the integral: the operator preserves the orthogonal decomposition. With the negative trace in the norm, their contributions are respectively For the last coefficient, use and . Adding the three contributions and using orthogonality proves the formula. Both subtracted terms are nonnegative, and their vanishing is the stated curvature condition.  "
},
{
  "id": "hkg-lubke-norm-identity",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-lubke-norm-identity",
  "type": "Proposition",
  "number": "12.11",
  "title": "(Lübke).",
  "body": " (Lübke)  Let be a holomorphic vector bundle of rank on a compact Kähler manifold of dimension . Suppose its Hermitian metric is Hermitian–Einstein, with curvature , and put Use the inner product on skew-Hermitian endomorphisms, and set Then Equality holds if and only if the connection is projectively flat, meaning .  The curvature has type . Taking its trace-free part in the Hermitian–Einstein equation gives , so it is primitive. For a primitive real -form , the Hodge-star identity is To check the sign and factorial, diagonalize in a unitary real coframe: write and , with and . The coefficient of in is , whereas . This proves the identity. It applies coefficientwise to in an orthonormal basis of skew-Hermitian endomorphisms.  Expanding the Chern–Weil determinant gives representatives Consequently the discriminant is represented by Wedge with , use the star identity, and integrate. The left side depends only on the Chern classes, while the right side is the stated squared norm. It vanishes exactly when vanishes everywhere.  "
},
{
  "id": "hkg-positive-second-chern",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-positive-second-chern",
  "type": "Corollary",
  "number": "12.12",
  "title": "",
  "body": " For an IHS -fold and any Kähler class , More precisely, if is the curvature of the Ricci-flat metric in this class, with the norm above, then  The Levi-Civita connection on is its Chern connection. The Kähler curvature identities and Ricci-flatness give and . Thus and . Apply with and divide by . The curvature cannot vanish identically: its restricted holonomy is by , whereas a flat connection has trivial restricted holonomy. This proves strict positivity. Finally, by . Since , the generalized Fujiki constant is positive.  "
},
{
  "id": "hkg-thm-verbitsky-chern-criterion",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-thm-verbitsky-chern-criterion",
  "type": "Theorem",
  "number": "12.13",
  "title": "(Verbitsky).",
  "body": " (Verbitsky)  Let be compact hyperkähler, and let be a slope polystable holomorphic vector bundle on , for the metric Kähler form . Then admits a hyperholomorphic connection if and only if and are -invariant in real cohomology. In that case its Hermitian–Einstein connection is hyperholomorphic, and its slope is zero.  Necessity is . Conversely, an invariant class has an invariant harmonic representative, which is primitive by . Its degree against is therefore zero. By , polystability gives a Hermitian–Einstein connection . Its curvature has type for and satisfies , since the slope is zero.  For each induced complex structure , put The Chern–Weil class of is This class is -invariant by hypothesis. The cohomological action preserves cup product and integration, and takes to . Hence . The energy identity at gives . The Riemannian metric and complex orientation are the same for every induced structure, so this norm is independent of . Applying at now gives Both terms vanish. Thus is primitive of type for every induced structure, and proves hyperholomorphicity.  "
},
{
  "id": "hkg-hyperholomorphic-nonpolystable-extension",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-hyperholomorphic-nonpolystable-extension",
  "type": "Example",
  "number": "12.14",
  "title": "",
  "body": " Let be a complex torus of dimension two with a flat hyperkähler metric. A nonzero class in defines a nonsplit extension The Whitney formula gives . The subbundle has the same slope as , so is not stable. If it were polystable, it would be a sum of two line bundles of degree zero. A nonzero section of either summand has no zeros: an effective divisor of degree zero on a compact Kähler manifold is zero. Thus that summand is trivial, and makes the other summand trivial as well. But the cohomology sequence of the nonsplit extension gives , whereas . Hence is not polystable and, by , is not hyperholomorphic despite the invariance of all its Chern classes.  "
},
{
  "id": "hkg-prop-hyperholomorphic-line-bundles",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-prop-hyperholomorphic-line-bundles",
  "type": "Proposition",
  "number": "12.15",
  "title": "",
  "body": " A holomorphic line bundle on , for compact hyperkähler , is hyperholomorphic if and only if its first Chern class is -invariant. Such a line bundle has degree zero for every induced complex structure. For IHS fibers, the possible first Chern classes are exactly .  A line bundle is slope stable and has , so the assertion follows from . The last group is the set of degree-two integral classes of type for every induced complex structure by . The degree-zero statement follows from .  "
},
{
  "id": "hkg-prop-hyperholomorphic-surface",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-prop-hyperholomorphic-surface",
  "type": "Proposition",
  "number": "12.16",
  "title": "",
  "body": " On a hyperkähler surface with its complex orientation, a unitary connection is hyperholomorphic if and only if its curvature is anti-self-dual. Every slope stable degree-zero bundle on a compact hyperkähler surface is therefore hyperholomorphic.   In real dimension four, the three metric Kähler forms are self-dual and span . For any one induced complex structure, its real primitive forms of type are precisely . This follows in a unitary real coframe by applying the Hodge star to the six basis wedge products: and the real and imaginary parts of have star , and their orthogonal complement has star .  Hyperholomorphic curvature is primitive of type , so it is anti-self-dual. Conversely, anti-self-dual curvature lies in the primitive subspace for every induced complex structure, since the self-dual three-plane is the same throughout the sphere. It is therefore hyperholomorphic. For a stable degree-zero bundle, its Hermitian–Einstein connection is primitive of type , giving the second assertion.   "
},
{
  "id": "hkg-def-projectively-hyperholomorphic",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-def-projectively-hyperholomorphic",
  "type": "Definition",
  "number": "12.17",
  "title": "",
  "body": " A unitary connection on a rank bundle is projectively hyperholomorphic if its trace-free curvature is -invariant.  "
},
{
  "id": "hkg-projective-hyperholomorphic-discriminant",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-projective-hyperholomorphic-discriminant",
  "type": "Proposition",
  "number": "12.18",
  "title": "",
  "body": " Let be a holomorphic vector bundle of rank on a compact hyperkähler manifold. Suppose is slope polystable with respect to . Its Hermitian–Einstein connection is projectively hyperholomorphic if and only if is -invariant in real cohomology.  The induced connection on is Hermitian–Einstein of slope zero: its contracted curvature sends to . Thus is slope polystable by . Multiplying and in degrees at most four gives Apply to this Hermitian–Einstein connection. It is hyperholomorphic exactly when is invariant. By the injectivity of the adjoint representation on trace-free endomorphisms, this is equivalent to invariance of .  "
},
{
  "id": "hkg-prop-direct-twistor-transform",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-prop-direct-twistor-transform",
  "type": "Proposition",
  "number": "12.19",
  "title": "",
  "body": " Let be a complex connection on with -invariant curvature. Then is a holomorphic vector bundle on . Its restriction to every real twistor section is holomorphically trivial, and its restriction to is .   The curvature of is . It vanishes whenever one argument is tangent to . On two vertical arguments at , its component is , since invariance implies type for . Thus , which gives the holomorphic structure.  On , the pulled-back connection is the ordinary constant connection on the fixed vector space . Its holomorphic bundle is . Restricting to a fiber instead restricts the operator to .   "
},
{
  "id": "hkg-thm-inverse-twistor-transform",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-thm-inverse-twistor-transform",
  "type": "Theorem",
  "number": "12.20",
  "title": "(Kaledin–Verbitsky).",
  "body": " (Kaledin–Verbitsky)  The direct twistor transform gives an equivalence between complex vector bundles on with a connection of -invariant curvature, with parallel bundle morphisms, and holomorphic vector bundles on whose restriction to every real twistor section is holomorphically trivial, with holomorphic bundle morphisms.  "
},
{
  "id": "hkg-def-trianalytic",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-def-trianalytic",
  "type": "Definition",
  "number": "12.21",
  "title": "",
  "body": " A closed reduced subset is trianalytic if it is a complex analytic subset of for every induced complex structure . For a compact analytic subvariety of pure dimension , write for the Poincaré dual of its fundamental cycle.  "
},
{
  "id": "hkg-lemma-trianalytic-totally-geodesic",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-lemma-trianalytic-totally-geodesic",
  "type": "Lemma",
  "number": "12.22",
  "title": "",
  "body": " A smooth trianalytic submanifold has even dimension, inherits the ambient hyperkähler structure, and is totally geodesic.   Its real tangent bundle is preserved by , so each tangent space is quaternionic and has real dimension divisible by four. Its orthogonal normal bundle is also preserved. Orthogonal projection of the ambient Levi-Civita connection to the tangent bundle is the induced Levi-Civita connection and commutes with . The induced metric and the restricted triple are therefore hyperkähler.  Let be the second fundamental form. Symmetry of , parallelness of the ambient structures, and preservation of the normal bundle give for . Hence Thus , which is total geodesy.   "
},
{
  "id": "hkg-thm-trianalytic-class-criterion",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-thm-trianalytic-class-criterion",
  "type": "Theorem",
  "number": "12.23",
  "title": "(Verbitsky).",
  "body": " (Verbitsky)  Let be compact hyperkähler, and let be a closed reduced analytic subvariety of pure dimension. Then is trianalytic if and only if is -invariant.  "
},
{
  "id": "hkg-lemma-wirtinger",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-lemma-wirtinger",
  "type": "Lemma",
  "number": "12.24",
  "title": "",
  "body": " Let be a Hermitian real vector space, and an oriented real subspace of dimension . Then Equality holds exactly when is -invariant. Equality without the absolute value uses its complex orientation.   The restriction of is represented by the skew-adjoint operator . In an orthonormal basis of , its skew-normal form has two-dimensional blocks with parameters , all of absolute value at most , because orthogonal projection does not increase length. The coefficient of relative to the oriented volume is, up to the orientation sign, . This proves the inequality.  Equality requires every singular value of to be , so for every . The component of perpendicular to then vanishes, proving . Conversely an -complex subspace has its Kähler volume form , positive for its complex orientation.   "
},
{
  "id": "hkg-prop-smooth-trianalytic-calibration",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-prop-smooth-trianalytic-calibration",
  "type": "Proposition",
  "number": "12.25",
  "title": "",
  "body": " Let be a smooth closed complex submanifold of a compact hyperkähler manifold. If is -invariant, then is trianalytic.   Let . The group rotates the metric Kähler forms transitively. Since it preserves cup product and integration and fixes the cycle class, the number is independent of the induced . For , this equals the Riemannian volume of .  For any , gives pointwise with the fixed -orientation. Their integrals are equal, so their continuous nonnegative difference is identically zero. Equality in the lemma makes every tangent space of invariant under , with the induced complex orientation. The restricted structure is integrable and the inclusion is holomorphic. Thus is an analytic submanifold for every .   "
},
{
  "id": "hkg-example-trianalytic-diagonal",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-example-trianalytic-diagonal",
  "type": "Example",
  "number": "12.26",
  "title": "",
  "body": " In the product of a hyperkähler manifold with itself, with the componentwise triple, the diagonal is trianalytic. Its tangent space is the diagonal quaternionic subspace and its induced metric is twice the original metric. A factor in a product is another example. By contrast, a positive-dimensional holomorphic Lagrangian submanifold cannot be trianalytic: the ambient holomorphic symplectic form vanishes on it, whereas its restriction to a trianalytic tangent space is nondegenerate.  "
},
{
  "id": "hkg-thm-trianalytic-normalization",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-thm-trianalytic-normalization",
  "type": "Theorem",
  "number": "12.27",
  "title": "(Verbitsky).",
  "body": " (Verbitsky)  The normalization of a reduced trianalytic subvariety is smooth and carries an induced hypercomplex structure, independent of the induced complex structure used to take the normalization. Locally it separates the smooth analytic branches. The normalization map is a triholomorphic immersion into the ambient manifold.  "
},
{
  "id": "hkg-prop-generic-twistor-trianalytic",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-prop-generic-twistor-trianalytic",
  "type": "Proposition",
  "number": "12.28",
  "title": "",
  "body": " For a compact hyperkähler manifold with fixed metric, there is a countable set of parameters in its induced sphere such that every closed analytic subvariety of every remaining fiber is trianalytic. Consequently, such a fiber has no odd-dimensional analytic subvarieties.   Let be a noninvariant class. If it were of type for two nonantipodal induced structures , both Hodge circles would fix it. The corresponding two independent elements of annihilate ; their bracket also annihilates it. Those three elements span , forcing invariance under the connected group , a contradiction. Thus a noninvariant class is Hodge at at most two antipodal parameters.  Rational cohomology in all degrees is countable. Remove these exceptional points for every noninvariant rational class. On every remaining fiber, all rational classes of type are invariant. The cycle class of an analytic subvariety has this type in its codimension, so makes every reduced irreducible component trianalytic. At a smooth point its tangent space is quaternionic, so its complex dimension is even.   "
},
{
  "id": "hkg-thm-hyperholomorphic-quadratic-germ",
  "level": "2",
  "url": "hkg-hyperholomorphic.html#hkg-thm-hyperholomorphic-quadratic-germ",
  "type": "Theorem",
  "number": "12.29",
  "title": "(Verbitsky).",
  "body": " (Verbitsky)  The reduced analytic germ of the local moduli space at a stable hyperholomorphic bundle is isomorphic to the reduced germ at zero of Its smooth locus carries the hyperkähler structure induced by the bundle's hyperholomorphic connection.  "
},
{
  "id": "hkg-cycles",
  "level": "1",
  "url": "hkg-cycles.html",
  "type": "Chapter",
  "number": "13",
  "title": "Algebraic cycles and canonical classes",
  "body": " Algebraic cycles and canonical classes   Cohomology records the class of an algebraic cycle but usually loses much of its geometry. Two points on a connected smooth projective variety have the same cohomology class; they need not be rationally equivalent. For a K3 surface this distinction is already substantial. The Beauville–Voisin theorem identifies a small, geometrically defined part of its Chow ring on which cohomology does determine rational equivalence.  Throughout this chapter varieties are projective over . We define Chow groups and correspondences, and assume the intersection product, refined pullback, specialization, and Grothendieck–Riemann–Roch as developed in .    Rational equivalence and the cycle class map    Let be a smooth projective variety of dimension . The group of codimension- cycles is the free abelian group on its integral codimension- subvarieties. The Chow group is where rational equivalence is generated by the cycles , for integral codimension- subvarieties and nonzero rational functions . For singular , the divisor can be computed on its normalization and pushed forward.  We write and . Unless integral coefficients are specified, formulas below use rational Chow groups.    For example, on a curve the divisor of a rational function gives a relation between its zeros and poles, with their multiplicities. On a variety, the same relation is imposed along every integral curve to define rational equivalence of zero-cycles. A curve need not be rational for its principal divisors to give relations. If the curve is rational, all of its points become rationally equivalent after pushforward from its normalization.  Intersection theory equips with a commutative graded ring structure. A divisor acts by intersection, and vector bundles have Chern classes in this ring. We distinguish a Chern cycle from its cohomology class when both occur. External products are written .    The cycle class map sends a codimension- subvariety to its Poincaré-dual cohomology class: It respects products, Chern classes, and proper pushforward. Its kernel is denoted . A cycle is numerically trivial if for every .    Rational equivalence implies homological equivalence, which implies numerical equivalence. The converse from numerical to homological equivalence is not a general formal property of the cycle class map. In particular, we specify below when a theorem proves injectivity modulo numerical equivalence, a stronger assertion than injectivity into cohomology.  The degree homomorphism on zero-cycles is Here the closed points are complex points. Principal divisors on projective curves have degree zero, so the map is well defined. If is connected, its top cohomology is one-dimensional and Thus is exactly the kernel of degree.   If is a projective IHS manifold, the cycle class map is injective on .  For a smooth variety, Cartier divisors modulo rational equivalence identify with . The exponential sequence shows that the kernel of is the image of . This group vanishes for an IHS manifold. Passing to rational coefficients preserves injectivity, since is flat over .   The difficulty begins with products of divisors and higher-codimension cycles. A cohomological relation between such classes can hold while the corresponding Chow cycle is nonzero. The LLV representation and the relations in from describe cohomology; by themselves they give no implication in this reverse direction.    The Beauville–Voisin class of a K3 surface  Let be a projective K3 surface. Its second Chern number is , but that numerical statement does not determine its second Chern cycle. The following result determines it as an element of the Chow group.   (Beauville–Voisin)   There is a degree-one class , represented by any point on any rational curve on , with the following properties. For divisors on , These identities hold with integral coefficients.    This is . The existence of rational curves and the independence of the chosen curve are part of the theorem's geometric content. They are not consequences of the equality of the cohomology classes of points. We use the name Beauville–Voisin class for .  If parametrizes a rational curve and , a rational function with divisor gives in . The theorem shows that these classes also agree for points on different rational curves.   The Beauville–Voisin subring of is    The displayed subspace is a subring. It is the subring generated by divisor classes, and also the subring generated by divisor classes and the Chern classes of . The cycle class map is injective on it.  The only nontrivial product of positive-codimension terms is the product of two divisor classes, which belongs to by . For an ample divisor , the number is nonzero, and . Thus divisors generate the whole displayed ring. The Chern classes add no generators, since and .  In codimension zero, the class of is nonzero. In codimension one, injectivity follows from . In codimension two, the degree of is , so its cohomology class vanishes only if . These three graded pieces prove injectivity.   For instance, if , then in the Chow ring. Any polynomial relation between divisor classes and the tangent Chern classes that is true in cohomology therefore holds in the Chow ring. The assertion concerns this subring.   (Mumford)  For a smooth projective surface with , the group of degree-zero zero-cycles is not parametrized by differences of effective cycles of any fixed degree: there is no integer such that every class in has the form for effective zero-cycles of degree .   This is the meaning of the infinite-dimensionality of in Mumford's theorem; it concerns algebraic parameter spaces. See . The generalized form in says that if were supported on a fixed curve , meaning that is surjective, then . In particular, for a K3 surface, There are therefore points for which is a nonzero homologically trivial cycle.    The small diagonal  The product of two classes can be written as a correspondence using the small diagonal. A cycle relation on can therefore imply relations between products on .  On , write and for the projections. Put The cycles and have codimension two, while has codimension four. A product such as is the class of the diagonal in the first two factors times the canonical point in the third.   (Beauville–Voisin)  For a projective K3 surface,   We cite for the relation and its proof. Its equality in Chow is essential. The equality of its cohomology classes is much weaker. We spell out several consequences using the intersection-theoretic operations already specified.   The small-diagonal relation implies with rational coefficients.  Intersect with and push forward by . The small diagonal gives . The term gives . Each other term contains, on at least one factor, the product of a divisor with a zero-cycle. Such a product has codimension three on the surface and vanishes. This leaves exactly the asserted equality.    The small-diagonal relation implies with rational coefficients.  Let be , and let be the diagonal inclusion. Let . Pull back the relation by . The normal bundle of the diagonal is . The excess-intersection and self-intersection formulas therefore give The two remaining diagonal terms each pull back to . The terms and pull back to , while , since on . Hence Choose a point representing . Then , so the last two terms cancel. Push the remaining equality forward by the second projection . Its left side is ; its right side is .   The excess-intersection formula is needed precisely because already contains the small diagonal. Treating this pullback as a transverse set-theoretic intersection would miss the class .   For any ,  Intersect with and push forward by . The left side gives . The terms and give and . The term gives . All other terms contain the product of two zero-cycles on the first surface factor and vanish.   Thus the small diagonal controls products and operations on zero-cycles simultaneously. Even when , the terms and can be nonzero in Chow, although all of their cohomology classes vanish.    Divisors, Chern classes, and splitting conjectures  Let be a projective IHS manifold. The K3 theorem suggests looking for a naturally specified subring of on which the cycle class map is injective.   Define Both rings include the identity. For a K3 surface, they agree with .    (Beauville)  For every projective IHS manifold , the restriction is injective.    (Voisin)  For every projective IHS manifold , the restriction is injective.   The first formulation is the weak splitting property in . The second is the strengthening in . Equivalently, a polynomial cohomological relation between the specified generators should already hold as a rational equivalence of cycles. The word weak refers to a consequence of a proposed splitting of the Bloch–Beilinson filtration.  The two conjectures are also different from the assertion that Chern cohomology classes lie in . The latter can fail, as explained in , whereas the definition of simply includes the tangent Chern cycles as generators.   Suppose has dimension and satisfies weak splitting. For an ample divisor , the class is independent of . Every product of divisor classes equals its degree times . If the cycle class map is injective on , then every class in has the same property; in particular,  The denominator is nonzero because is ample, and has degree one. For any product , the class belongs to and has degree zero, hence zero cohomology class. Weak splitting makes it zero in Chow. Taking to be a power of another ample divisor proves independence. The same argument works for every under the stronger injectivity assumption. The top Chern number is , which proves the final identity.   The class is a canonical rational zero-cycle under the stated hypothesis. A degree-one rational zero-cycle need not be represented by a point. For a K3 surface, the Beauville–Voisin theorem gives such a representative on a rational curve. For K3 surfaces, .   Assuming the semiampleness theorem quoted in , let be a nontrivial nef line bundle on a projective IHS manifold of dimension , with . Then  By , a positive power is the pullback of an ample line bundle on the base of a Lagrangian fibration . Replace and by further powers so that is very ample. Since , we can choose hyperplane sections of with empty common intersection. Their pullback sections of also have empty common zero locus. The product of their Cartier-divisor classes on the smooth variety is therefore zero: Division by gives the rational Chow relation. This argument uses line bundles and their sections, and requires no pullback homomorphism for arbitrary Chow cycles on the possibly singular base.   A further theorem relates these isotropic relations to weak splitting. We use Rieß's reduction in the formulation of : if contains a nonzero isotropic class and the IHS manifolds in its deformation class satisfy the hyperkähler SYZ statement, then satisfies weak splitting. This reduction is an external theorem. Rieß's original criterion in assumes the rational Lagrangian fibration property: every nonzero isotropic line bundle in the closure of the birational Kähler cone induces a Lagrangian fibration after passing to a birational model and taking a positive power. The reduction uses correspondences acting on Chow rings; it does not identify an arbitrary isotropic class with a nef class by the pullback of a birational map. Voisin's formulation assumes SYZ for the whole deformation class, rather than semiampleness of one line bundle on .   Assume the semiampleness theorem quoted in . If a projective IHS manifold has a nonzero class with , then satisfies weak splitting.  The quoted semiampleness theorem applies to nef line bundles on every compact IHS manifold. By , it gives the SYZ statement on every member of the deformation class of . The preceding reduction therefore applies.    (Voisin; Fu)  The cycle class map is injective on in the following cases:   , where is a projective K3 surface and , with ;  , the variety of lines on any smooth cubic fourfold ;  , the generalized Kummer variety of an abelian surface , with the convention .   In the third case, a cycle in that is numerically trivial is already zero in Chow. For with arbitrary , injectivity on holds in the three codimensions .   The first two cases are , and the arbitrary- assertion in the last three codimensions is its Theorem 1.5; the third case is . These are statements about the indicated varieties. Applying them to every deformation of the same deformation type requires a further argument; a Chow relation does not transport through an arbitrary smooth deformation as a cohomology class does.  For every , the divisor-only conjecture for follows from a theorem about the following tautological classes.  Let be the universal subscheme, with projections and . A small tautological class is a class The word small specifies a single Chern-character component before pushforward. Let be the subring generated by these classes.   (Maulik–Neguţ)  For every projective K3 surface and every , the cycle class map is injective on . This ring contains all divisor classes, so satisfies weak splitting for every .   See . The proof lifts Hilbert-scheme operator identities from cohomology to Chow. It is an external theorem here.   The small tautological ring is different from the ring allowing for an arbitrary polynomial . Maulik–Neguţ's formula for the tangent Chern character involves products before pushforward. Their small-ring theorem therefore does not, by itself, assert the divisors-and-tangent-Chern conjecture for every . The two statements must be distinguished even when both are called Beauville–Voisin conjectures.   The stronger conjecture also leads to rings generated by divisors, tangent Chern classes, and Lagrangian constant-cycle subvarieties. A subvariety is constant-cycle if all its closed points have the same class in the ambient variety's group of zero-cycles. For Hilbert squares of K3 surfaces, varieties of lines on smooth cubic fourfolds, and smooth double EPW sextics, the 2026 preprint states that these rings inject into cohomology in codimensions three and four.    Cycles from moduli spaces  Universal families on moduli spaces define Chow classes. On a Hilbert scheme, the universal subscheme gives tautological bundles and sends points of the Hilbert scheme to zero-cycles on the surface.   Let be a vector bundle on a projective K3 surface , and suppose its Chow Chern character belongs to . The tautological bundle on has rank , and all its Chern classes belong to . The cycle class map is injective on the subring generated by these Chern classes and divisor classes.  The universal subscheme is finite flat of degree over . Its pushforward of the restriction of is locally free of the stated rank, and there are no higher direct images. Grothendieck–Riemann–Roch for the smooth projection gives Since and , we have . The class belongs to . Each homogeneous component on the right is consequently a sum of small tautological classes. Over , the Chern classes are universal polynomials in the components of the Chern character. They lie in the small tautological ring, and proves the final assertion.   Every line bundle on satisfies the hypothesis: if , then . An arbitrary vector bundle need not satisfy it, because its second Chern cycle need not be a multiple of . Equality of its second Chern number with some integer is not enough.  For a general moduli space of stable objects, rational equivalence of points has a particularly precise description. We use the Mukai-vector and stability conventions of .   (Marian–Zhao)  Let be a projective K3 surface, a primitive Mukai vector, and a -generic stability condition in the distinguished component. Suppose is a nonempty smooth projective moduli space of stable objects of one fixed phase. For two points represented by objects , The Chern classes on the right are Chow Chern classes of the corresponding complexes.   This is the main theorem of . Both equalities have integral coefficients. Grothendieck–Riemann–Roch first yields rational equalities. Roitman's theorem identifies torsion in the degree-zero Chow group of a smooth projective complex variety with torsion in its Albanese variety. Here , so both Albanese varieties vanish and the possible torsion disappears. A universal family on the coarse moduli space is not required: the proof also treats quasi-universal families and the descent obstruction.   If are zero-dimensional subschemes of the same length , their points on the Hilbert scheme satisfy where is the zero-cycle on with the local lengths of as multiplicities.  The Hilbert scheme is the moduli space of ideal sheaves with Mukai vector , a primitive vector. It is also obtained in the large-volume chamber of stability conditions. The exact sequence gives For the last identity, the integral top Chern class of a finite-colength ideal on a smooth surface is its associated zero-cycle; equivalently this follows from the zero-dimensional sheaf calculation in intersection theory. Apply to the two ideal sheaves.   For example, any two length- subschemes whose associated cycles equal give rationally equivalent points on . This produces distinguished zero-cycle classes on a higher-dimensional IHS variety by using the canonical class on the surface. It also shows why fixing a Mukai vector in cohomology is insufficient: all objects in the moduli space have that vector, while their second Chern cycles can differ in .  For moduli spaces in a Kuznetsov component, gives the cohomological and stability-theoretic construction. The surface theorem above cannot be transferred by replacing with the component: its conclusion uses an actual surface Chow group and actual Chern cycles. The cubic-fourfold Fano variety already provides a proved divisors-and-Chern case in . Further cycle statements for other moduli spaces require their own correspondences and theorems.    Birational invariance of the Chow ring  Birational IHS manifolds have isomorphic cohomology rings through a suitable parallel-transport correspondence. The analogous statement for Chow rings requires a construction at the level of cycles. Injectivity of the cycle class map on the whole Chow ring is unavailable, so a cohomological isomorphism alone cannot prove it.  For smooth projective varieties , with , a degree-  correspondence from to is a class . It acts by Its transpose is obtained by exchanging the factors; its degree is . For a degree- correspondence from to , composition is The projections are from . The diagonal acts as the identity, and composition agrees with composition of the induced maps. In particular, for varieties of the same dimension , degree-zero correspondences have codimension and preserve codimension.   (Rieß)  Let and be birational projective IHS manifolds of dimension . There is a cycle whose action is an isomorphism of graded Chow rings, Its inverse is , and for all . The theorem holds with integral coefficients.   See . We explain the construction and the multiplicativity argument, keeping its deformation theorem external.  Rieß constructs smooth proper families over a smooth curve with a distinguished point , with central fibres , and an isomorphism over . One family may have an algebraic-space total space; the intersection and specialization formalism is applied in that setting. Let be the generic point of , and the graph of the generic-fibre isomorphism. The class is its specialization: Equivalently it is the cycle of the special fibre of the closure of that graph. The existence of these families is .   For these families, the correspondence acts as an isomorphism of graded Chow rings with inverse , and satisfies .  On the generic fibres, the graph of an isomorphism and its transpose satisfy the correspondence identities Composition uses only intersection and proper pushforward. Specialization therefore gives Their actions are mutually inverse.  For multiplicativity, let be the small diagonal regarded as a degree-zero correspondence from to ; its action sends to . Define similarly. The generic-fibre isomorphism has graph satisfying the cycle identity Both sides are the class of in ; the factors in the product of graph correspondences are ordered as source followed by target. Specializing this identity yields Applying the correspondence to gives . This proves multiplicativity for arbitrary central-fibre Chow classes, without assuming that those classes extend over .  Finally, the generic-fibre isomorphism identifies the tangent bundles, so . The relative tangent bundles specialize to and . Specializing the equality gives the asserted compatibility with Chern classes.    The class is a specialized graph of nearby isomorphisms. It can have additional components over exceptional loci. The closure of the graph of a chosen birational map need not itself induce a ring homomorphism; see . Those two graph constructions should not be identified.    Weak splitting and the divisors-and-tangent-Chern property are birational invariants of projective IHS manifolds.  The graded ring isomorphism identifies codimension-one Chow groups and hence the subrings and . Its compatibility with tangent Chern classes identifies and . The cycle class map commutes with correspondences. If a class in one of these subrings has zero cohomology class, its inverse image under also has zero cohomology class. Injectivity for one variety therefore implies injectivity for the other, and the converse follows by transposing .   The established statements above therefore apply to every projective birational model of the stated examples. In particular, a birational wall crossing from transfers these Chow-ring properties between its two moduli spaces.   "
},
{
  "id": "hkg-def-chow",
  "level": "2",
  "url": "hkg-cycles.html#hkg-def-chow",
  "type": "Definition",
  "number": "13.1",
  "title": "",
  "body": "  Let be a smooth projective variety of dimension . The group of codimension- cycles is the free abelian group on its integral codimension- subvarieties. The Chow group is where rational equivalence is generated by the cycles , for integral codimension- subvarieties and nonzero rational functions . For singular , the divisor can be computed on its normalization and pushed forward.  We write and . Unless integral coefficients are specified, formulas below use rational Chow groups.   "
},
{
  "id": "hkg-def-cycle-class",
  "level": "2",
  "url": "hkg-cycles.html#hkg-def-cycle-class",
  "type": "Definition",
  "number": "13.2",
  "title": "",
  "body": "  The cycle class map sends a codimension- subvariety to its Poincaré-dual cohomology class: It respects products, Chern classes, and proper pushforward. Its kernel is denoted . A cycle is numerically trivial if for every .   "
},
{
  "id": "hkg-chow-divisors-ihs",
  "level": "2",
  "url": "hkg-cycles.html#hkg-chow-divisors-ihs",
  "type": "Proposition",
  "number": "13.3",
  "title": "",
  "body": " If is a projective IHS manifold, the cycle class map is injective on .  For a smooth variety, Cartier divisors modulo rational equivalence identify with . The exponential sequence shows that the kernel of is the image of . This group vanishes for an IHS manifold. Passing to rational coefficients preserves injectivity, since is flat over .  "
},
{
  "id": "hkg-beauville-voisin-k3",
  "level": "2",
  "url": "hkg-cycles.html#hkg-beauville-voisin-k3",
  "type": "Theorem",
  "number": "13.4",
  "title": "(Beauville–Voisin).",
  "body": " (Beauville–Voisin)   There is a degree-one class , represented by any point on any rational curve on , with the following properties. For divisors on , These identities hold with integral coefficients.   "
},
{
  "id": "hkg-def-bv-ring-k3",
  "level": "2",
  "url": "hkg-cycles.html#hkg-def-bv-ring-k3",
  "type": "Definition",
  "number": "13.5",
  "title": "",
  "body": " The Beauville–Voisin subring of is  "
},
{
  "id": "hkg-k3-canonical-injectivity",
  "level": "2",
  "url": "hkg-cycles.html#hkg-k3-canonical-injectivity",
  "type": "Proposition",
  "number": "13.6",
  "title": "",
  "body": " The displayed subspace is a subring. It is the subring generated by divisor classes, and also the subring generated by divisor classes and the Chern classes of . The cycle class map is injective on it.  The only nontrivial product of positive-codimension terms is the product of two divisor classes, which belongs to by . For an ample divisor , the number is nonzero, and . Thus divisors generate the whole displayed ring. The Chern classes add no generators, since and .  In codimension zero, the class of is nonzero. In codimension one, injectivity follows from . In codimension two, the degree of is , so its cohomology class vanishes only if . These three graded pieces prove injectivity.  "
},
{
  "id": "hkg-mumford-zero-cycles",
  "level": "2",
  "url": "hkg-cycles.html#hkg-mumford-zero-cycles",
  "type": "Theorem",
  "number": "13.7",
  "title": "(Mumford).",
  "body": " (Mumford)  For a smooth projective surface with , the group of degree-zero zero-cycles is not parametrized by differences of effective cycles of any fixed degree: there is no integer such that every class in has the form for effective zero-cycles of degree .  "
},
{
  "id": "hkg-k3-small-diagonal",
  "level": "2",
  "url": "hkg-cycles.html#hkg-k3-small-diagonal",
  "type": "Theorem",
  "number": "13.8",
  "title": "(Beauville–Voisin).",
  "body": " (Beauville–Voisin)  For a projective K3 surface,  "
},
{
  "id": "hkg-small-diagonal-divisors",
  "level": "2",
  "url": "hkg-cycles.html#hkg-small-diagonal-divisors",
  "type": "Proposition",
  "number": "13.9",
  "title": "",
  "body": " The small-diagonal relation implies with rational coefficients.  Intersect with and push forward by . The small diagonal gives . The term gives . Each other term contains, on at least one factor, the product of a divisor with a zero-cycle. Such a product has codimension three on the surface and vanishes. This leaves exactly the asserted equality.  "
},
{
  "id": "hkg-small-diagonal-chern",
  "level": "2",
  "url": "hkg-cycles.html#hkg-small-diagonal-chern",
  "type": "Proposition",
  "number": "13.10",
  "title": "",
  "body": " The small-diagonal relation implies with rational coefficients.  Let be , and let be the diagonal inclusion. Let . Pull back the relation by . The normal bundle of the diagonal is . The excess-intersection and self-intersection formulas therefore give The two remaining diagonal terms each pull back to . The terms and pull back to , while , since on . Hence Choose a point representing . Then , so the last two terms cancel. Push the remaining equality forward by the second projection . Its left side is ; its right side is .  "
},
{
  "id": "hkg-zero-cycle-diagonal",
  "level": "2",
  "url": "hkg-cycles.html#hkg-zero-cycle-diagonal",
  "type": "Proposition",
  "number": "13.11",
  "title": "",
  "body": " For any ,  Intersect with and push forward by . The left side gives . The terms and give and . The term gives . All other terms contain the product of two zero-cycles on the first surface factor and vanish.  "
},
{
  "id": "hkg-def-distinguished-chow-rings",
  "level": "2",
  "url": "hkg-cycles.html#hkg-def-distinguished-chow-rings",
  "type": "Definition",
  "number": "13.12",
  "title": "",
  "body": " Define Both rings include the identity. For a K3 surface, they agree with .  "
},
{
  "id": "hkg-beauville-weak-splitting",
  "level": "2",
  "url": "hkg-cycles.html#hkg-beauville-weak-splitting",
  "type": "Conjecture",
  "number": "13.13",
  "title": "(Beauville).",
  "body": " (Beauville)  For every projective IHS manifold , the restriction is injective.  "
},
{
  "id": "hkg-voisin-chow-conjecture",
  "level": "2",
  "url": "hkg-cycles.html#hkg-voisin-chow-conjecture",
  "type": "Conjecture",
  "number": "13.14",
  "title": "(Voisin).",
  "body": " (Voisin)  For every projective IHS manifold , the restriction is injective.  "
},
{
  "id": "hkg-canonical-top-cycle-conditional",
  "level": "2",
  "url": "hkg-cycles.html#hkg-canonical-top-cycle-conditional",
  "type": "Proposition",
  "number": "13.15",
  "title": "",
  "body": " Suppose has dimension and satisfies weak splitting. For an ample divisor , the class is independent of . Every product of divisor classes equals its degree times . If the cycle class map is injective on , then every class in has the same property; in particular,  The denominator is nonzero because is ample, and has degree one. For any product , the class belongs to and has degree zero, hence zero cohomology class. Weak splitting makes it zero in Chow. Taking to be a power of another ample divisor proves independence. The same argument works for every under the stronger injectivity assumption. The top Chern number is , which proves the final identity.  "
},
{
  "id": "hkg-nef-isotropic-chow-power",
  "level": "2",
  "url": "hkg-cycles.html#hkg-nef-isotropic-chow-power",
  "type": "Proposition",
  "number": "13.16",
  "title": "",
  "body": " Assuming the semiampleness theorem quoted in , let be a nontrivial nef line bundle on a projective IHS manifold of dimension , with . Then  By , a positive power is the pullback of an ample line bundle on the base of a Lagrangian fibration . Replace and by further powers so that is very ample. Since , we can choose hyperplane sections of with empty common intersection. Their pullback sections of also have empty common zero locus. The product of their Cartier-divisor classes on the smooth variety is therefore zero: Division by gives the rational Chow relation. This argument uses line bundles and their sections, and requires no pullback homomorphism for arbitrary Chow cycles on the possibly singular base.  "
},
{
  "id": "hkg-isotropic-ns-weak-splitting",
  "level": "2",
  "url": "hkg-cycles.html#hkg-isotropic-ns-weak-splitting",
  "type": "Corollary",
  "number": "13.17",
  "title": "",
  "body": " Assume the semiampleness theorem quoted in . If a projective IHS manifold has a nonzero class with , then satisfies weak splitting.  The quoted semiampleness theorem applies to nef line bundles on every compact IHS manifold. By , it gives the SYZ statement on every member of the deformation class of . The preceding reduction therefore applies.  "
},
{
  "id": "hkg-voisin-fu-known-cases",
  "level": "2",
  "url": "hkg-cycles.html#hkg-voisin-fu-known-cases",
  "type": "Theorem",
  "number": "13.18",
  "title": "(Voisin; Fu).",
  "body": " (Voisin; Fu)  The cycle class map is injective on in the following cases:   , where is a projective K3 surface and , with ;  , the variety of lines on any smooth cubic fourfold ;  , the generalized Kummer variety of an abelian surface , with the convention .   In the third case, a cycle in that is numerically trivial is already zero in Chow. For with arbitrary , injectivity on holds in the three codimensions .  "
},
{
  "id": "hkg-maulik-negut-tautological",
  "level": "2",
  "url": "hkg-cycles.html#hkg-maulik-negut-tautological",
  "type": "Theorem",
  "number": "13.19",
  "title": "(Maulik–Neguţ).",
  "body": " (Maulik–Neguţ)  For every projective K3 surface and every , the cycle class map is injective on . This ring contains all divisor classes, so satisfies weak splitting for every .  "
},
{
  "id": "hkg-hilbert-tautological-bundles",
  "level": "2",
  "url": "hkg-cycles.html#hkg-hilbert-tautological-bundles",
  "type": "Proposition",
  "number": "13.20",
  "title": "",
  "body": " Let be a vector bundle on a projective K3 surface , and suppose its Chow Chern character belongs to . The tautological bundle on has rank , and all its Chern classes belong to . The cycle class map is injective on the subring generated by these Chern classes and divisor classes.  The universal subscheme is finite flat of degree over . Its pushforward of the restriction of is locally free of the stated rank, and there are no higher direct images. Grothendieck–Riemann–Roch for the smooth projection gives Since and , we have . The class belongs to . Each homogeneous component on the right is consequently a sum of small tautological classes. Over , the Chern classes are universal polynomials in the components of the Chern character. They lie in the small tautological ring, and proves the final assertion.  "
},
{
  "id": "hkg-marian-zhao",
  "level": "2",
  "url": "hkg-cycles.html#hkg-marian-zhao",
  "type": "Theorem",
  "number": "13.21",
  "title": "(Marian–Zhao).",
  "body": " (Marian–Zhao)  Let be a projective K3 surface, a primitive Mukai vector, and a -generic stability condition in the distinguished component. Suppose is a nonempty smooth projective moduli space of stable objects of one fixed phase. For two points represented by objects , The Chern classes on the right are Chow Chern classes of the corresponding complexes.  "
},
{
  "id": "hkg-hilbert-point-equivalence",
  "level": "2",
  "url": "hkg-cycles.html#hkg-hilbert-point-equivalence",
  "type": "Corollary",
  "number": "13.22",
  "title": "",
  "body": " If are zero-dimensional subschemes of the same length , their points on the Hilbert scheme satisfy where is the zero-cycle on with the local lengths of as multiplicities.  The Hilbert scheme is the moduli space of ideal sheaves with Mukai vector , a primitive vector. It is also obtained in the large-volume chamber of stability conditions. The exact sequence gives For the last identity, the integral top Chern class of a finite-colength ideal on a smooth surface is its associated zero-cycle; equivalently this follows from the zero-dimensional sheaf calculation in intersection theory. Apply to the two ideal sheaves.  "
},
{
  "id": "hkg-riess-chow-isomorphism",
  "level": "2",
  "url": "hkg-cycles.html#hkg-riess-chow-isomorphism",
  "type": "Theorem",
  "number": "13.23",
  "title": "(Rieß).",
  "body": " (Rieß)  Let and be birational projective IHS manifolds of dimension . There is a cycle whose action is an isomorphism of graded Chow rings, Its inverse is , and for all . The theorem holds with integral coefficients.  "
},
{
  "id": "hkg-specialization-ring-argument",
  "level": "2",
  "url": "hkg-cycles.html#hkg-specialization-ring-argument",
  "type": "Proposition",
  "number": "13.24",
  "title": "",
  "body": " For these families, the correspondence acts as an isomorphism of graded Chow rings with inverse , and satisfies .  On the generic fibres, the graph of an isomorphism and its transpose satisfy the correspondence identities Composition uses only intersection and proper pushforward. Specialization therefore gives Their actions are mutually inverse.  For multiplicativity, let be the small diagonal regarded as a degree-zero correspondence from to ; its action sends to . Define similarly. The generic-fibre isomorphism has graph satisfying the cycle identity Both sides are the class of in ; the factors in the product of graph correspondences are ordered as source followed by target. Specializing this identity yields Applying the correspondence to gives . This proves multiplicativity for arbitrary central-fibre Chow classes, without assuming that those classes extend over .  Finally, the generic-fibre isomorphism identifies the tangent bundles, so . The relative tangent bundles specialize to and . Specializing the equality gives the asserted compatibility with Chern classes.  "
},
{
  "id": "hkg-birational-splitting-invariance",
  "level": "2",
  "url": "hkg-cycles.html#hkg-birational-splitting-invariance",
  "type": "Corollary",
  "number": "13.25",
  "title": "",
  "body": " Weak splitting and the divisors-and-tangent-Chern property are birational invariants of projective IHS manifolds.  The graded ring isomorphism identifies codimension-one Chow groups and hence the subrings and . Its compatibility with tangent Chern classes identifies and . The cycle class map commutes with correspondences. If a class in one of these subrings has zero cohomology class, its inverse image under also has zero cohomology class. Injectivity for one variety therefore implies injectivity for the other, and the converse follows by transposing .  "
},
{
  "id": "hkg-automorphisms",
  "level": "1",
  "url": "hkg-automorphisms.html",
  "type": "Chapter",
  "number": "14",
  "title": "Automorphisms, cones, and dynamics",
  "body": " Automorphisms, cones, and dynamics   Throughout this chapter, is an IHS manifold of dimension . An automorphism preserves its integral BBF form, its Hodge decomposition, and its Kähler cone. These three conditions explain both the rigidity of polarized automorphisms and the possibility of infinite groups when the cone has an infinite symmetry group. We first relate automorphisms to cohomology, then study the cone action and the growth of iterates.    The action on second cohomology  For a complex manifold , write for its biholomorphic automorphisms and for its bimeromorphic self-maps. The latter are holomorphic on dense open subsets and need not be holomorphic everywhere. For IHS manifolds their action on was described in .  Pullback reverses composition: . Thus the homomorphism associated to the left action of is We also use when studying an individual automorphism. The image subgroup is the same with either convention. We use the same inverse-pullback convention for the action of on and on .   Let . The group is finite. In particular, is finite.  The Calabi–Yau theorem gives a unique Ricci-flat Kähler metric in the class . For , its pullback is another such metric, so . The group in question is therefore the group of isometries of preserving the complex structure. It is a closed subgroup of the compact Lie group of isometries of a compact Riemannian manifold.  Contraction with gives , and . Hence . The Lie algebra of the closed subgroup is zero: its elements are real holomorphic Killing fields, whose parts are holomorphic vector fields. A compact Lie group of dimension zero is finite. The kernel of fixes , so it is a subgroup of this finite group.   The differential-geometric facts about isometry groups used here are the Myers–Steenrod theorem and compactness of the isometry group for a compact manifold. The uniqueness of the Ricci-flat metric is the geometric reason a fixed Kähler class gives a finite group.   If is projective with , then is finite.  The primitive integral generator of the ample ray is fixed by every automorphism. Apply to its Kähler class.    Assume . The image of consists of the Hodge monodromy isometries preserving . Equivalently, a Hodge monodromy isometry is induced by an automorphism if it takes some Kähler class to a Kähler class.  An automorphism acts by a Hodge isometry and preserves the Kähler cone. Its action is also a monodromy operator: for , the quotient of by is a proper, locally trivial holomorphic family over . Along the loop lifted by , , cohomological parallel transport is . Thus .  Conversely, apply with source and target both equal to . A Hodge monodromy isometry taking a Kähler class to a Kähler class has the form for an automorphism . Thus , proving the asserted description of the image.    Let , let , and consider . Translation by preserves the zero-sum fiber, since the sum changes by . It acts trivially on the summand of and fixes the exceptional class ; see . Thus it acts trivially on .  A nonzero translation acts nontrivially on : choose a reduced zero-sum configuration of points that is not invariant under it. Such configurations exist, since translation-invariant configurations are unions of orbits of the nonzero torsion point and form a proper subset of the zero-sum configuration space. This gives concrete nonidentity elements of . They are symplectic, because translation preserves the surface symplectic form and its induced form on the Hilbert scheme.     Finite-order automorphisms   An automorphism is symplectic if , and non-symplectic otherwise. Every automorphism acts on by a scalar. For a finite-order automorphism this scalar is a root of unity. A finite-order automorphism is called purely non-symplectic when the order of its scalar on equals the order of the automorphism. Non-symplecticity alone does not require equality of these orders.    The fixed locus of a finite-order symplectic automorphism is a disjoint union of smooth holomorphic symplectic submanifolds. Its components have even dimension. A nonidentity symplectic automorphism of finite order has no fixed divisor.  Let be fixed, let the automorphism have order , and write . Start with local coordinates centered at and shrink to a neighborhood on which all iterates are defined. The averaged coordinates have derivative the identity at and satisfy . The inverse-function theorem gives local coordinates in which the fixed locus is the linear subspace . It is therefore smooth.  For a nonzero fixed vector , choose with . Averaging under gives a fixed vector with the same pairing, since preserves and fixes . Thus the restriction of to the fixed tangent space is nondegenerate. Every component has even dimension and hence even codimension. A divisor would have odd codimension. A component of codimension zero would imply that is the identity on an open set and hence on .   For a finite group of symplectic automorphisms, the same averaging argument works with the whole group. Averaging a Kähler class also gives a group-invariant Kähler class; its Ricci-flat metric is invariant. Thus a finite symplectic action can be studied using a single invariant hyperkähler metric. Its fixed submanifolds need not be IHS: simple connectedness and the dimension of their spaces of two-forms require separate arguments.   Every component of the fixed locus of a finite-order non-symplectic automorphism is a smooth isotropic submanifold. Its dimension is at most ; a component of dimension is Lagrangian.  The averaged-coordinate proof in proves smoothness for any finite-order automorphism. Write with , and let be a fixed component. Restricting to , where is the identity, gives , so . An isotropic subspace of a symplectic vector space of dimension has dimension at most , with equality exactly for Lagrangian subspaces.     Fundamental domains for the cone action  Assume in this section that is projective, and let . The BBF form on has signature . In the notation of , the nef and closed movable cones are cones in this real vector space.   Define Here means the set of finite nonnegative real linear combinations of elements of . These cones contain the respective interiors and the rationally generated part of their boundary; they need not be closed.  A rational polyhedral cone is generated by finitely many vectors of . For a group acting on a cone , a cone is a fundamental domain if its translates cover and the interiors of two translates are disjoint unless the translates are equal. We use the image group on , so a kernel acting trivially does not affect this definition.    (Amerik–Verbitsky)  If , there is a constant , depending only on the deformation type, such that every primitive integral MBM class satisfies . There are finitely many monodromy orbits of these classes.   This is . Its proof uses homogeneous dynamics and is quoted here. The lower bound on belongs to this boundedness theorem; it was not required in the definition or basic chamber description of MBM classes.   Let be a lattice of signature , fix a component of its positive cone, and let . The hyperplanes , for with , form a locally finite collection in .  The case is vacuous, since there are no negative vectors. Assume , and fix a nonempty compact subset and a Euclidean norm on . For every , the form is positive definite on . Compactness gives a uniform number with Indeed, the minimum of on the compact set of pairs with , , and is positive. If meets , the inequality gives . A lattice has finitely many points in a bounded ball. Only finitely many of the hyperplanes can therefore meet .   The conclusion concerns compact sets inside the positive cone. Infinitely many walls may still accumulate toward its isotropic boundary. Local finiteness by itself does not produce a finite fundamental domain for the automorphism action.   (Markman; Amerik–Verbitsky)  Let be projective IHS with . The image of has a rational polyhedral fundamental domain on , and the image of has one on . There are finitely many isomorphism classes of IHS manifolds bimeromorphic to .   For the movable cone see . For the nef cone see , together with the improved MBM bound above, which includes . Finiteness of birational models follows from the boundedness argument in that paper's Theorem 1.9 and its proof, which applies Markman–Yoshioka's finiteness criterion. The later bound above supplies its boundedness hypothesis also for . A geometric description is given in . The fundamental domains here lie in the rational hulls in .   For a projective IHS manifold, a rational polyhedral nef cone implies that is finite. If , the converse also holds.  In the first direction, an automorphism permutes the finitely many extremal rays of the nef cone. A subgroup of finite index fixes all these rays. It fixes their primitive integral generators, hence acts trivially on , since the nef cone has nonempty interior and spans . This subgroup fixes an ample class, so it is finite by . The entire automorphism group is finite.  For the converse, let be the fundamental domain in . If the image group is finite, its translates form a finite union equal to . This union is convex and equals the cone generated by the finitely many rational generators of the translates. It is therefore rational polyhedral and closed. Since it contains the ample cone, its closure is the full nef cone. Hence it is already the full nef cone.     Dynamical degrees   For an automorphism of a compact Kähler manifold of dimension , its -th dynamical degree is where denotes spectral radius. This use of the letter is separate from the Picard number .   We use three general theorems of compact Kähler dynamics: the same spectral radius is obtained on ; the numbers are concave in ; and the topological entropy satisfies The last identity is the Gromov–Yomdin theorem. Concavity, duality, and entropy are recalled with their sources in . The equality with the spectral radius on all of , together with the intersection-growth definition of , is stated explicitly in . We use these results from compact Kähler dynamics.   (Oguiso)  For an automorphism of an IHS -fold,  By Verbitsky's injection, is an -stable subspace of for . After triangularizing over , the eigenvalues on its symmetric power are the products of eigenvalues, with repetition allowed. Its spectral radius is therefore , giving a lower bound for . Concavity and give the reverse bound .  The BBF form makes similar to its inverse transpose, so . Poincaré duality gives . Apply the first part to , and then the entropy theorem. This is the proof of .   Thus all dynamical degrees equal one when . If , they increase strictly up to degree and then decrease strictly. The proof uses the subalgebra generated by .   Let satisfy with . If , then . If the ray is rational, then .  The isometry identity gives , proving isotropy. For a rational ray, choose its primitive integral generator . An integral lattice automorphism takes primitive vectors to primitive vectors. The equality therefore forces when .    If , there are nonzero classes such that Their rays are irrational, both classes are isotropic, and .  The cone is closed and convex with nonempty interior, contains no line, and is preserved by and its inverse. The Perron–Frobenius theorem for cones gives a nonzero eigenvector in this cone with eigenvalue the spectral radius; we use the version recalled in . Apply it to and . As proved in , their spectral radii on are both . This gives the two asserted eigenvectors.  Isotropy and irrationality follow from . Both classes lie in the closure of the same positive-cone component and belong to distinct rays, since their eigenvalues differ. For a form of signature , two nonzero isotropic vectors in that closure have nonnegative pairing, with equality only if they are proportional. Thus their pairing is strictly positive.   Let be a nontrivial nef line bundle with . If and is semiample, an isomorphism gives a linear action on the sections of a generated power, well-defined up to scalar. Its projectivization makes the resulting morphism equivariant. Passing to Stein factorization gives an automorphism of the base and an equivariant Lagrangian fibration by . The automorphism need not fix each fiber individually.    An explicit positive-entropy example  Let be an elliptic curve and . The matrix defines an automorphism of . Its eigenvalues are It commutes with inversion and therefore induces an automorphism of the Kummer K3 surface resolving . To see the lift directly, blow up the sixteen two-torsion points equivariantly before taking the quotient. The automorphism permutes these centers and lifts to the blowup; the resulting quotient is the smooth Kummer resolution.   For this Kummer K3 automorphism, . For its induced automorphism on the Hilbert scheme,  On the eigenvalues are , and the same eigenvalues occur on , since they are real. On the largest absolute value is therefore ; it occurs in type . The second rational cohomology of the Kummer resolution is the direct sum of the correspondence image of and the sixteen exceptional classes. On the latter is a permutation. It contributes only roots of unity, so the spectral radius on is .  For , the Hilbert-scheme decomposition is equivariant, and fixes . Its first dynamical degree is again . Apply . The case is the K3 computation itself.   The determinant of is one, so preserves the translation-invariant holomorphic two-form on . The induced automorphisms and are symplectic as well. They have infinite order and positive entropy. Symplecticity alone therefore does not imply finiteness; a preserved Kähler class, as in , is an additional condition.   "
},
{
  "id": "hkg-polarized-automorphisms-finite",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-polarized-automorphisms-finite",
  "type": "Proposition",
  "number": "14.1",
  "title": "",
  "body": " Let . The group is finite. In particular, is finite.  The Calabi–Yau theorem gives a unique Ricci-flat Kähler metric in the class . For , its pullback is another such metric, so . The group in question is therefore the group of isometries of preserving the complex structure. It is a closed subgroup of the compact Lie group of isometries of a compact Riemannian manifold.  Contraction with gives , and . Hence . The Lie algebra of the closed subgroup is zero: its elements are real holomorphic Killing fields, whose parts are holomorphic vector fields. A compact Lie group of dimension zero is finite. The kernel of fixes , so it is a subgroup of this finite group.  "
},
{
  "id": "hkg-picard-one-automorphisms",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-picard-one-automorphisms",
  "type": "Corollary",
  "number": "14.2",
  "title": "",
  "body": " If is projective with , then is finite.  The primitive integral generator of the ample ray is fixed by every automorphism. Apply to its Kähler class.  "
},
{
  "id": "hkg-automorphism-torelli-image",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-automorphism-torelli-image",
  "type": "Corollary",
  "number": "14.3",
  "title": "",
  "body": " Assume . The image of consists of the Hodge monodromy isometries preserving . Equivalently, a Hodge monodromy isometry is induced by an automorphism if it takes some Kähler class to a Kähler class.  An automorphism acts by a Hodge isometry and preserves the Kähler cone. Its action is also a monodromy operator: for , the quotient of by is a proper, locally trivial holomorphic family over . Along the loop lifted by , , cohomological parallel transport is . Thus .  Conversely, apply with source and target both equal to . A Hodge monodromy isometry taking a Kähler class to a Kähler class has the form for an automorphism . Thus , proving the asserted description of the image.  "
},
{
  "id": "hkg-kummer-trivial-second-action",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-kummer-trivial-second-action",
  "type": "Example",
  "number": "14.4",
  "title": "",
  "body": " Let , let , and consider . Translation by preserves the zero-sum fiber, since the sum changes by . It acts trivially on the summand of and fixes the exceptional class ; see . Thus it acts trivially on .  A nonzero translation acts nontrivially on : choose a reduced zero-sum configuration of points that is not invariant under it. Such configurations exist, since translation-invariant configurations are unions of orbits of the nonzero torsion point and form a proper subset of the zero-sum configuration space. This gives concrete nonidentity elements of . They are symplectic, because translation preserves the surface symplectic form and its induced form on the Hilbert scheme.  "
},
{
  "id": "hkg-def-symplectic-automorphism",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-def-symplectic-automorphism",
  "type": "Definition",
  "number": "14.5",
  "title": "",
  "body": " An automorphism is symplectic if , and non-symplectic otherwise. Every automorphism acts on by a scalar. For a finite-order automorphism this scalar is a root of unity. A finite-order automorphism is called purely non-symplectic when the order of its scalar on equals the order of the automorphism. Non-symplecticity alone does not require equality of these orders.  "
},
{
  "id": "hkg-finite-symplectic-fixed-locus",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-finite-symplectic-fixed-locus",
  "type": "Proposition",
  "number": "14.6",
  "title": "",
  "body": " The fixed locus of a finite-order symplectic automorphism is a disjoint union of smooth holomorphic symplectic submanifolds. Its components have even dimension. A nonidentity symplectic automorphism of finite order has no fixed divisor.  Let be fixed, let the automorphism have order , and write . Start with local coordinates centered at and shrink to a neighborhood on which all iterates are defined. The averaged coordinates have derivative the identity at and satisfy . The inverse-function theorem gives local coordinates in which the fixed locus is the linear subspace . It is therefore smooth.  For a nonzero fixed vector , choose with . Averaging under gives a fixed vector with the same pairing, since preserves and fixes . Thus the restriction of to the fixed tangent space is nondegenerate. Every component has even dimension and hence even codimension. A divisor would have odd codimension. A component of codimension zero would imply that is the identity on an open set and hence on .  "
},
{
  "id": "hkg-nonsymplectic-fixed-locus",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-nonsymplectic-fixed-locus",
  "type": "Corollary",
  "number": "14.7",
  "title": "",
  "body": " Every component of the fixed locus of a finite-order non-symplectic automorphism is a smooth isotropic submanifold. Its dimension is at most ; a component of dimension is Lagrangian.  The averaged-coordinate proof in proves smoothness for any finite-order automorphism. Write with , and let be a fixed component. Restricting to , where is the identity, gives , so . An isotropic subspace of a symplectic vector space of dimension has dimension at most , with equality exactly for Lagrangian subspaces.  "
},
{
  "id": "hkg-def-rational-hull-cones",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-def-rational-hull-cones",
  "type": "Definition",
  "number": "14.8",
  "title": "",
  "body": " Define Here means the set of finite nonnegative real linear combinations of elements of . These cones contain the respective interiors and the rationally generated part of their boundary; they need not be closed.  A rational polyhedral cone is generated by finitely many vectors of . For a group acting on a cone , a cone is a fundamental domain if its translates cover and the interiors of two translates are disjoint unless the translates are equal. We use the image group on , so a kernel acting trivially does not affect this definition.  "
},
{
  "id": "hkg-mbm-boundedness",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-mbm-boundedness",
  "type": "Theorem",
  "number": "14.9",
  "title": "(Amerik–Verbitsky).",
  "body": " (Amerik–Verbitsky)  If , there is a constant , depending only on the deformation type, such that every primitive integral MBM class satisfies . There are finitely many monodromy orbits of these classes.  "
},
{
  "id": "hkg-bounded-hyperplanes-locally-finite",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-bounded-hyperplanes-locally-finite",
  "type": "Proposition",
  "number": "14.10",
  "title": "",
  "body": " Let be a lattice of signature , fix a component of its positive cone, and let . The hyperplanes , for with , form a locally finite collection in .  The case is vacuous, since there are no negative vectors. Assume , and fix a nonempty compact subset and a Euclidean norm on . For every , the form is positive definite on . Compactness gives a uniform number with Indeed, the minimum of on the compact set of pairs with , , and is positive. If meets , the inequality gives . A lattice has finitely many points in a bounded ball. Only finitely many of the hyperplanes can therefore meet .  "
},
{
  "id": "hkg-cone-fundamental-domains",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-cone-fundamental-domains",
  "type": "Theorem",
  "number": "14.11",
  "title": "(Markman; Amerik–Verbitsky).",
  "body": " (Markman; Amerik–Verbitsky)  Let be projective IHS with . The image of has a rational polyhedral fundamental domain on , and the image of has one on . There are finitely many isomorphism classes of IHS manifolds bimeromorphic to .  "
},
{
  "id": "hkg-polyhedral-nef-finite-aut",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-polyhedral-nef-finite-aut",
  "type": "Corollary",
  "number": "14.12",
  "title": "",
  "body": " For a projective IHS manifold, a rational polyhedral nef cone implies that is finite. If , the converse also holds.  In the first direction, an automorphism permutes the finitely many extremal rays of the nef cone. A subgroup of finite index fixes all these rays. It fixes their primitive integral generators, hence acts trivially on , since the nef cone has nonempty interior and spans . This subgroup fixes an ample class, so it is finite by . The entire automorphism group is finite.  For the converse, let be the fundamental domain in . If the image group is finite, its translates form a finite union equal to . This union is convex and equals the cone generated by the finitely many rational generators of the translates. It is therefore rational polyhedral and closed. Since it contains the ample cone, its closure is the full nef cone. Hence it is already the full nef cone.  "
},
{
  "id": "hkg-def-dynamical-degrees",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-def-dynamical-degrees",
  "type": "Definition",
  "number": "14.13",
  "title": "",
  "body": " For an automorphism of a compact Kähler manifold of dimension , its -th dynamical degree is where denotes spectral radius. This use of the letter is separate from the Picard number .  "
},
{
  "id": "hkg-oguiso-dynamical-degrees",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-oguiso-dynamical-degrees",
  "type": "Theorem",
  "number": "14.14",
  "title": "(Oguiso).",
  "body": " (Oguiso)  For an automorphism of an IHS -fold,  By Verbitsky's injection, is an -stable subspace of for . After triangularizing over , the eigenvalues on its symmetric power are the products of eigenvalues, with repetition allowed. Its spectral radius is therefore , giving a lower bound for . Concavity and give the reverse bound .  The BBF form makes similar to its inverse transpose, so . Poincaré duality gives . Apply the first part to , and then the entropy theorem. This is the proof of .  "
},
{
  "id": "hkg-expanding-eigenclasses",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-expanding-eigenclasses",
  "type": "Proposition",
  "number": "14.15",
  "title": "",
  "body": " Let satisfy with . If , then . If the ray is rational, then .  The isometry identity gives , proving isotropy. For a rational ray, choose its primitive integral generator . An integral lattice automorphism takes primitive vectors to primitive vectors. The equality therefore forces when .  "
},
{
  "id": "hkg-nef-dynamical-eigenclasses",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-nef-dynamical-eigenclasses",
  "type": "Proposition",
  "number": "14.16",
  "title": "",
  "body": " If , there are nonzero classes such that Their rays are irrational, both classes are isotropic, and .  The cone is closed and convex with nonempty interior, contains no line, and is preserved by and its inverse. The Perron–Frobenius theorem for cones gives a nonzero eigenvector in this cone with eigenvalue the spectral radius; we use the version recalled in . Apply it to and . As proved in , their spectral radii on are both . This gives the two asserted eigenvectors.  Isotropy and irrationality follow from . Both classes lie in the closure of the same positive-cone component and belong to distinct rays, since their eigenvalues differ. For a form of signature , two nonzero isotropic vectors in that closure have nonnegative pairing, with equality only if they are proportional. Thus their pairing is strictly positive.  "
},
{
  "id": "hkg-kummer-salem-example",
  "level": "2",
  "url": "hkg-automorphisms.html#hkg-kummer-salem-example",
  "type": "Proposition",
  "number": "14.17",
  "title": "",
  "body": " For this Kummer K3 automorphism, . For its induced automorphism on the Hilbert scheme,  On the eigenvalues are , and the same eigenvalues occur on , since they are real. On the largest absolute value is therefore ; it occurs in type . The second rational cohomology of the Kummer resolution is the direct sum of the correspondence image of and the sixteen exceptional classes. On the latter is a permutation. It contributes only roots of unity, so the spectral radius on is .  For , the Hilbert-scheme decomposition is equivariant, and fixes . Its first dynamical degree is again . Apply . The case is the K3 computation itself.  "
},
{
  "id": "hkg-degenerations",
  "level": "1",
  "url": "hkg-degenerations.html",
  "type": "Chapter",
  "number": "15",
  "title": "Degenerations and monodromy",
  "body": " Degenerations and monodromy   When a family acquires a singular fiber, transport around that fiber acts on the cohomology of a nearby smooth member. The logarithm of this action is a nilpotent derivation. Its action on degree two has only three possibilities, whereas higher cohomology can contain much longer Jordan blocks. Nagai's conjecture predicts their lengths. The same linear algebra also relates degenerations to the topology of Lagrangian fibrations through compact .  We use the BBF form, , and the reduced LLV representation of . The main references are , , , and .    The family and its logarithmic monodromy   Let and . A projective degeneration of IHS manifolds is a flat projective holomorphic map , smooth over , whose fibers for are IHS of dimension . Projectivity means that admits a relatively ample line bundle. The central fiber and the total space may be singular.   Fix and write . The cohomology groups of the smooth fibers form local systems . Transport around a positively oriented generator of gives Choosing another marking conjugates these operators. They preserve degree and cup product. The relatively ample class is fixed by .   Monodromy theorem  Each is quasi-unipotent: some positive power is unipotent. After one finite base change , all the are unipotent. Their logarithms satisfy In particular, .   See . Finitely many cohomological degrees require only one common base change, which we make once, retaining the notation .   For a unipotent operator , set The sum is finite. We use . For a nonzero nilpotent operator , its nilpotency index is Thus a largest Jordan block of length gives . Write .   The finite power-series identities give . Moreover, for a polynomial with . The operator is invertible and commutes with , so and have the same kernels of powers and the same index. A further base change of degree replaces by and by . It changes neither the index nor the weight filtration defined below. Another common convention calls the nilpotency index when and . In particular, the convention in is one larger than ours. The operator here is the rational logarithm ; factors such as in comparison formulas do not change its index.   The logarithmic monodromy is a degree-zero derivation of the cohomology ring: On degree two,  The endomorphism is polynomial in . For every nonnegative integer it equals , which preserves cup product. Therefore is an identity of vector-valued polynomials: it holds for infinitely many integers. Differentiating at proves the derivation formula. Its degree is zero because every term of preserves degree.  Parallel transport preserves the BBF form. Apply the same polynomial argument to and differentiate. Finally, makes every term in vanish. This proof follows .    For , one has . Consequently,  Monodromy acts trivially on top cohomology and preserves integration. Differentiating the Poincaré pairing gives . The two operators are therefore negative transposes under a perfect pairing, and their powers have the same ranks. The bound follows from the monodromy theorem in degrees at most and this equality.     The three types and the degree-two lower bound   The degeneration is of type I, II, or III according to the following conditions: Type III is also called maximally unipotent in this setting.    Type I does not require the given central fiber to be smooth. Start with for a projective IHS manifold , and blow up a point of . The new map is still projective and flat, and it agrees with the product over . Its monodromy is the identity. Its central fiber is the union of and the exceptional , meeting along . The monodromy type records the punctured family, rather than the smoothness of one chosen model.    Let be nilpotent on a nonzero vector space over a field of characteristic zero. Its induced derivation on satisfies  Let . If , the assertion is immediate. Otherwise choose with . Repeated use of the product rule gives If , one exponent exceeds , so every summand vanishes. For and all , the only nonzero summand has and gives A nonzero vector has nonzero powers in its symmetric algebra. This proves both bounds.    For , the restriction of to has index . In particular,  Monodromy preserves the subalgebra generated by degree two. By , the map intertwines the derivation induced by with . For it is injective by . The preceding lemma computes the index on its image. The upper bound is the monodromy theorem; gives the fixed unit.    For a type III degeneration,  When , the two bounds in coincide. The remaining degrees follow from Poincaré duality.   The lower bound is already forced by products of degree-two classes. A possible obstruction to equality in type II lies in the additional cohomology outside . Computing the index on that subalgebra alone does not bound the index on its complement.    Nagai's conjecture and type II estimates   (Nagai)  For a projective degeneration of IHS -folds,   See . The equality concerns even cohomology; odd-degree monodromy has separate estimates.   (Soldatenkov)  Let be the reduced LLV representation. The logarithm of unipotent monodromy satisfies   See and . This identification is needed because degree two need not generate the cohomology ring.   For a type I degeneration, in every degree. In particular, Nagai's equality holds.  The reduced representation sends to zero. Alternatively, gives finite monodromy on total cohomology when it is finite on degree two; finite-order unipotent operators in characteristic zero are the identity.    In a projective type II degeneration, is a totally isotropic rational plane in . In particular, .  Skew-symmetry gives . Also . Since , the real form on has signature . Its totally isotropic subspaces have dimension at most two. The rank of is even: through the nondegenerate form, it is the rank of the alternating bilinear form . It is nonzero, so its rank is exactly two. A totally isotropic plane requires both indices of the restricted form to be at least two, giving .   We now use the Hodge structure on one smooth fiber to calculate the type II index. Choose a nonzero complex class with , and a holomorphic symplectic form . Such exists because the nondegenerate complex space has dimension . Let be the reduced LLV element whose restriction to degree two is This formula is skew for , so defines a unique such element. It is a derivation. Moreover, Nondegeneracy of gives a class with , so . Since , it follows that    The operator has Hodge bidegree . The actual monodromy is conjugate, by a graded complex algebra automorphism of cohomology, to a nonzero scalar multiple of .  Let be the Hodge operator, acting on by ; it belongs to the reduced algebra by . Formula sends degree-two Hodge types successively from to to . Thus on degree two. Restriction there is faithful on the reduced algebra, so the same identity holds on all cohomology. Since preserves total degree, it has the asserted bidegree.  The conjugacy is the external result , together with its equations (2.5)–(2.6). The operator used there has the degree-two action in up to a nonzero scalar. It belongs to the reduced LLV algebra, so its full action is determined by that restriction. The preceding lemma proves for the projective type II degenerations considered here.   The conjugacy is graded and multiplicative; it need not preserve the chosen Hodge decomposition or the integral lattice.   (Huybrechts–Mauri)  For a type II degeneration, For , one has the sharper combined estimate  It suffices to calculate with . First we prove in degrees at most . On with , this follows from its bidegree. If , let . Symplectic linear algebra gives an isomorphism of holomorphic bundles Applying cohomology expresses any as , with . Since , the product rule gives for . Bidegree gives for . In the expansion every term therefore vanishes. Thus , and the lower bound gives equality.  For with , we prove the stronger . It already holds if . Otherwise use the same factorization with ; here . Only the term can survive, so for some scalar : the remaining factor has type , whose space is generated by the indicated power of . For the class chosen above, and . Since has degree at most , the bound just proved yields The last displayed product without its scalar is nonzero. Indeed, by Verbitsky's injection, and multiplication by is an isomorphism from to . Consequently multiplication by is injective on for . Here . It follows that .  For the remaining upper bound, choose an LLV-module complement to the Verbitsky component. It is preserved by and by the Hodge operator. In degree , the spaces of types and are already contained in , since they are generated by and . Thus has Hodge types only with . Bidegree now gives on . On its index is . For , the full index is therefore at most . Combining with the first bound and the degree-two lower bound proves the assertion.   The calculation follows . The bound also appears, with the other index convention, in .   Nagai's equality holds for every projective degeneration with .  Types I and III have been settled. In type II, is the definition, is the middle-degree theorem, and follows from . For , the estimate gives the remaining equality. These cover every when . Compare the independent LLV argument in .    (Green–Kim–Laza–Robles)  Nagai's equality holds for every projective degeneration whose smooth fibers are of , generalized Kummer, , or type.   This is . Its Theorem 5.2 gives a representation criterion: for , it suffices that every highest weight in the even LLV decomposition satisfy , in the coordinates of . Conversely, Nagai's equality for a single type II degeneration forces this inequality.  The results quoted here leave the type II equalities in the remaining degrees open for arbitrary deformation types; see also .    Families induced from K3 surfaces  Let be a projective family smooth with K3 fibers over . Its relative Hilbert scheme over is a smooth projective family with fibers . For , the Hilbert-scheme decomposition is an identity of local systems: Here is the Hilbert–Chow exceptional divisor, defined in the relative family. Thus , and the Hilbert-scheme family has the same type as the K3 family. For , the extra summand is absent.  Taking the flat closure of the smooth-family component in the relative Hilbert scheme over the full disc gives a projective degeneration. The monodromy computation uses only its restriction over ; see .   For the Hilbert square, all cohomology belongs to the subalgebra generated by degree two, by . If , the indices in degrees zero, two, four, six, and eight are The middle value follows from , and degree six follows by duality. For larger Hilbert schemes, symmetric powers compute the Verbitsky component; controls the additional summands.     The weight filtration   Let be nilpotent on a finite-dimensional rational vector space, and let . Its weight filtration centered at is the unique finite increasing filtration , with for sufficiently negative and for sufficiently positive , such that Here . The center is part of the notation: changing it from to replaces by .    For a Jordan chain with and , assign weight . Taking spans of vectors of weight at most gives . A basis-independent formula is Only finitely many summands are nonzero.  On the displayed chain, the kernel in a summand is spanned by vectors with index at most , and the image by those with index at most . Summing over therefore gives exactly the vectors with , as asserted. This verifies the formula on every Jordan block. It is basis-independent and satisfies both defining conditions, so it constructs the weight filtration.  For uniqueness, let . The defining isomorphisms force the filtration to have no jumps outside , and force and . The induced nilpotent operator on has smaller index. Induction on that quotient determines the remaining steps. For , the only jump is at . Compare .    On the monodromy weight filtration is centered at two. A block has weights , and A length-two block instead has weights one and three: , , and . A length-one block has weight two. Thus the equalities are a substantive assertion; they do not hold for every nilpotent operator.   For a degeneration, set The center on is . When , the extreme nonzero graded indices are and .   (Schmid)  There is a limiting Hodge filtration for which is a mixed Hodge structure. This means that the induced Hodge filtration on defines a pure rational Hodge structure of weight . The operator lowers both Hodge indices by one and lowers weight by two.   See . Write on the universal cover and transport the Hodge filtration to a fixed vector space, denoting it by . With the convention , The Hodge filtration is decreasing: on a smooth fiber. Its limiting dimensions agree with those on the smooth fibers. A change of coordinate changes by ; the weight filtration does not change. Reversing the convention for the monodromy operator replaces by , preserving all indices and weight filtrations.  The group is nearby cohomology equipped with the limiting filtrations. Its comparison with uses specialization and the Clemens–Schmid theorem.   The monodromy weight filtration respects products:  For nilpotent operators on two vector spaces, the weight filtration of centered at the sum of the centers is the convolution of the two weight filtrations. One can check this by extending each Jordan string to an -representation: tensor products add the weight eigenvalues, and their decomposition into strings satisfies the defining weight-filtration isomorphisms. The filtration is functorial for maps commuting with the nilpotent operators, as is also immediate from .  Cup product intertwines with by the derivation formula. The centers are , respectively. Functoriality and convolution give the displayed inclusion.    (Soldatenkov)  For a projective type III degeneration, every limiting mixed Hodge structure is Hodge–Tate: its odd weight graded pieces vanish, and has Hodge type . In particular,   See .    Lagrangian fibrations and compact  Let be a Lagrangian fibration with projective IHS. The base is normal and projective of dimension . Choose an ample rational class on , let , and write for cup product on total cohomology. Its index is : , whereas . Denote its weight filtration, with the single center on total cohomology, by This filtration is graded because kernels and images of powers of are graded subspaces.   The perverse filtration of , normalized to range from zero to , is characterized by It is independent of the chosen ample class on the base. Thus for and for .   This description follows from the decomposition theorem and perverse hard Lefschetz; see and . The normalization is . Here is middle perverse truncation. With the shift , the hypercohomology degree is and the truncation index is .   For an elliptic K3 surface , let be the fiber class. Choose a rational class with and . Such a class is obtained by first choosing a class pairing to one with and then subtracting half its square times . The operator has the two length-two strings and annihilates the twenty-dimensional complement . The center on total cohomology is one. Its weight-zero subspace is generated by , its weight-one step adds that complement, and its weight-two step is all cohomology.  Using the degree shift in gives The graded dimensions are . Also , whereas first occurs at .    (Harder–Li–Shen–Yin)  For every Lagrangian fibration with projective IHS, there exist a projective type III degeneration with smooth fibers deformation equivalent to and an isomorphism of graded rational cohomology rings such that, in every degree,   See and . The equality compares the perverse filtration of with the weight filtration of the particular degeneration constructed in this theorem. Here concerns a degeneration of a compact IHS manifold. In the nonabelian Hodge correspondence, the same notation compares a Hitchin fibration with the mixed Hodge structure of a character variety. These are different comparisons.  Choose an ample rational class on , and set The denominator is positive by . Then , and remains relatively ample because its difference from is pulled back from the base. The plane spanned by is hyperbolic. Choose a rational positive-square class orthogonal to this plane, and define Then , , and Thus it has type III. The orthogonal complement of has signature , so its positive-square locus contains rational vectors . Realization of a multiple of as logarithmic monodromy and the comparison of filtrations are the external steps in , adapting using the isotropic class .   The perverse filtration of a projective IHS Lagrangian fibration is multiplicative:  Use the ring isomorphism from and the product compatibility of the monodromy weight filtration. A product of weights at most and has weight at most , which is .    (Shen–Yin)  For the same fibration,   See . The equality also follows from compact , the type III Hodge–Tate theorem, and constancy of the ranks of the limiting Hodge filtration.  For the possibly singular base, let be the intersection complex, normalized by , and let . Ordinary cohomology acts on these groups; powers of the ample class below mean its repeated action on .   (Shen–Yin)  For the same fibration, Thus as graded rational vector spaces.  We use the decomposition theorem and hard Lefschetz for intersection cohomology as external results. Since the smooth fibers are connected, the degree-zero perverse cohomology of restricts to the shifted constant sheaf on the smooth-fibration locus. Semisimplicity therefore makes a direct summand. Taking hypercohomology and using gives This is zero for odd and one for even . Hard Lefschetz makes an isomorphism, so every intermediate is nonzero. These classes attain the bounds.   See .   "
},
{
  "id": "hkg-def-projective-degeneration",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-def-projective-degeneration",
  "type": "Definition",
  "number": "15.1",
  "title": "",
  "body": " Let and . A projective degeneration of IHS manifolds is a flat projective holomorphic map , smooth over , whose fibers for are IHS of dimension . Projectivity means that admits a relatively ample line bundle. The central fiber and the total space may be singular.  "
},
{
  "id": "hkg-local-monodromy-theorem",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-local-monodromy-theorem",
  "type": "Theorem",
  "number": "15.2",
  "title": "Monodromy theorem.",
  "body": " Monodromy theorem  Each is quasi-unipotent: some positive power is unipotent. After one finite base change , all the are unipotent. Their logarithms satisfy In particular, .  "
},
{
  "id": "hkg-def-log-monodromy",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-def-log-monodromy",
  "type": "Definition",
  "number": "15.3",
  "title": "",
  "body": " For a unipotent operator , set The sum is finite. We use . For a nonzero nilpotent operator , its nilpotency index is Thus a largest Jordan block of length gives . Write .  "
},
{
  "id": "hkg-log-derivation",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-log-derivation",
  "type": "Proposition",
  "number": "15.4",
  "title": "",
  "body": " The logarithmic monodromy is a degree-zero derivation of the cohomology ring: On degree two,  The endomorphism is polynomial in . For every nonnegative integer it equals , which preserves cup product. Therefore is an identity of vector-valued polynomials: it holds for infinitely many integers. Differentiating at proves the derivation formula. Its degree is zero because every term of preserves degree.  Parallel transport preserves the BBF form. Apply the same polynomial argument to and differentiate. Finally, makes every term in vanish. This proof follows .  "
},
{
  "id": "hkg-monodromy-duality",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-monodromy-duality",
  "type": "Proposition",
  "number": "15.5",
  "title": "",
  "body": " For , one has . Consequently,  Monodromy acts trivially on top cohomology and preserves integration. Differentiating the Poincaré pairing gives . The two operators are therefore negative transposes under a perfect pairing, and their powers have the same ranks. The bound follows from the monodromy theorem in degrees at most and this equality.  "
},
{
  "id": "hkg-def-degeneration-types",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-def-degeneration-types",
  "type": "Definition",
  "number": "15.6",
  "title": "",
  "body": " The degeneration is of type I, II, or III according to the following conditions: Type III is also called maximally unipotent in this setting.  "
},
{
  "id": "hkg-type-one-singular-model",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-type-one-singular-model",
  "type": "Example",
  "number": "15.7",
  "title": "",
  "body": " Type I does not require the given central fiber to be smooth. Start with for a projective IHS manifold , and blow up a point of . The new map is still projective and flat, and it agrees with the product over . Its monodromy is the identity. Its central fiber is the union of and the exceptional , meeting along . The monodromy type records the punctured family, rather than the smoothness of one chosen model.  "
},
{
  "id": "hkg-symmetric-nilpotency",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-symmetric-nilpotency",
  "type": "Lemma",
  "number": "15.8",
  "title": "",
  "body": " Let be nilpotent on a nonzero vector space over a field of characteristic zero. Its induced derivation on satisfies  Let . If , the assertion is immediate. Otherwise choose with . Repeated use of the product rule gives If , one exponent exceeds , so every summand vanishes. For and all , the only nonzero summand has and gives A nonzero vector has nonzero powers in its symmetric algebra. This proves both bounds.  "
},
{
  "id": "hkg-verbitsky-monodromy-bound",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-verbitsky-monodromy-bound",
  "type": "Proposition",
  "number": "15.9",
  "title": "",
  "body": " For , the restriction of to has index . In particular,  Monodromy preserves the subalgebra generated by degree two. By , the map intertwines the derivation induced by with . For it is injective by . The preceding lemma computes the index on its image. The upper bound is the monodromy theorem; gives the fixed unit.  "
},
{
  "id": "hkg-type-three-nagai",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-type-three-nagai",
  "type": "Corollary",
  "number": "15.10",
  "title": "",
  "body": " For a type III degeneration,  When , the two bounds in coincide. The remaining degrees follow from Poincaré duality.  "
},
{
  "id": "hkg-nagai-conjecture",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-nagai-conjecture",
  "type": "Conjecture",
  "number": "15.11",
  "title": "(Nagai).",
  "body": " (Nagai)  For a projective degeneration of IHS -folds,  "
},
{
  "id": "hkg-monodromy-reduced-llv",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-monodromy-reduced-llv",
  "type": "Theorem",
  "number": "15.12",
  "title": "(Soldatenkov).",
  "body": " (Soldatenkov)  Let be the reduced LLV representation. The logarithm of unipotent monodromy satisfies  "
},
{
  "id": "hkg-type-one-nagai",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-type-one-nagai",
  "type": "Corollary",
  "number": "15.13",
  "title": "",
  "body": " For a type I degeneration, in every degree. In particular, Nagai's equality holds.  The reduced representation sends to zero. Alternatively, gives finite monodromy on total cohomology when it is finite on degree two; finite-order unipotent operators in characteristic zero are the identity.  "
},
{
  "id": "hkg-type-two-isotropic-plane",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-type-two-isotropic-plane",
  "type": "Lemma",
  "number": "15.14",
  "title": "",
  "body": " In a projective type II degeneration, is a totally isotropic rational plane in . In particular, .  Skew-symmetry gives . Also . Since , the real form on has signature . Its totally isotropic subspaces have dimension at most two. The rank of is even: through the nondegenerate form, it is the rank of the alternating bilinear form . It is nonzero, so its rank is exactly two. A totally isotropic plane requires both indices of the restricted form to be at least two, giving .  "
},
{
  "id": "hkg-type-two-model-hodge",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-type-two-model-hodge",
  "type": "Lemma",
  "number": "15.15",
  "title": "",
  "body": " The operator has Hodge bidegree . The actual monodromy is conjugate, by a graded complex algebra automorphism of cohomology, to a nonzero scalar multiple of .  Let be the Hodge operator, acting on by ; it belongs to the reduced algebra by . Formula sends degree-two Hodge types successively from to to . Thus on degree two. Restriction there is faithful on the reduced algebra, so the same identity holds on all cohomology. Since preserves total degree, it has the asserted bidegree.  The conjugacy is the external result , together with its equations (2.5)–(2.6). The operator used there has the degree-two action in up to a nonzero scalar. It belongs to the reduced LLV algebra, so its full action is determined by that restriction. The preceding lemma proves for the projective type II degenerations considered here.  "
},
{
  "id": "hkg-type-two-middle-estimates",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-type-two-middle-estimates",
  "type": "Proposition",
  "number": "15.16",
  "title": "(Huybrechts–Mauri).",
  "body": " (Huybrechts–Mauri)  For a type II degeneration, For , one has the sharper combined estimate  It suffices to calculate with . First we prove in degrees at most . On with , this follows from its bidegree. If , let . Symplectic linear algebra gives an isomorphism of holomorphic bundles Applying cohomology expresses any as , with . Since , the product rule gives for . Bidegree gives for . In the expansion every term therefore vanishes. Thus , and the lower bound gives equality.  For with , we prove the stronger . It already holds if . Otherwise use the same factorization with ; here . Only the term can survive, so for some scalar : the remaining factor has type , whose space is generated by the indicated power of . For the class chosen above, and . Since has degree at most , the bound just proved yields The last displayed product without its scalar is nonzero. Indeed, by Verbitsky's injection, and multiplication by is an isomorphism from to . Consequently multiplication by is injective on for . Here . It follows that .  For the remaining upper bound, choose an LLV-module complement to the Verbitsky component. It is preserved by and by the Hodge operator. In degree , the spaces of types and are already contained in , since they are generated by and . Thus has Hodge types only with . Bidegree now gives on . On its index is . For , the full index is therefore at most . Combining with the first bound and the degree-two lower bound proves the assertion.  "
},
{
  "id": "hkg-nagai-low-dimensions",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-nagai-low-dimensions",
  "type": "Corollary",
  "number": "15.17",
  "title": "",
  "body": " Nagai's equality holds for every projective degeneration with .  Types I and III have been settled. In type II, is the definition, is the middle-degree theorem, and follows from . For , the estimate gives the remaining equality. These cover every when . Compare the independent LLV argument in .  "
},
{
  "id": "hkg-nagai-known-types",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-nagai-known-types",
  "type": "Theorem",
  "number": "15.18",
  "title": "(Green–Kim–Laza–Robles).",
  "body": " (Green–Kim–Laza–Robles)  Nagai's equality holds for every projective degeneration whose smooth fibers are of , generalized Kummer, , or type.  "
},
{
  "id": "hkg-hilbert-square-nilpotency",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-hilbert-square-nilpotency",
  "type": "Example",
  "number": "15.19",
  "title": "",
  "body": " For the Hilbert square, all cohomology belongs to the subalgebra generated by degree two, by . If , the indices in degrees zero, two, four, six, and eight are The middle value follows from , and degree six follows by duality. For larger Hilbert schemes, symmetric powers compute the Verbitsky component; controls the additional summands.  "
},
{
  "id": "hkg-def-nilpotent-weight-filtration",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-def-nilpotent-weight-filtration",
  "type": "Definition",
  "number": "15.20",
  "title": "",
  "body": " Let be nilpotent on a finite-dimensional rational vector space, and let . Its weight filtration centered at is the unique finite increasing filtration , with for sufficiently negative and for sufficiently positive , such that Here . The center is part of the notation: changing it from to replaces by .  "
},
{
  "id": "hkg-weight-jordan-formula",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-weight-jordan-formula",
  "type": "Proposition",
  "number": "15.21",
  "title": "",
  "body": " For a Jordan chain with and , assign weight . Taking spans of vectors of weight at most gives . A basis-independent formula is Only finitely many summands are nonzero.  On the displayed chain, the kernel in a summand is spanned by vectors with index at most , and the image by those with index at most . Summing over therefore gives exactly the vectors with , as asserted. This verifies the formula on every Jordan block. It is basis-independent and satisfies both defining conditions, so it constructs the weight filtration.  For uniqueness, let . The defining isomorphisms force the filtration to have no jumps outside , and force and . The induced nilpotent operator on has smaller index. Induction on that quotient determines the remaining steps. For , the only jump is at . Compare .  "
},
{
  "id": "hkg-weight-two-jordan-blocks",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-weight-two-jordan-blocks",
  "type": "Example",
  "number": "15.22",
  "title": "",
  "body": " On the monodromy weight filtration is centered at two. A block has weights , and A length-two block instead has weights one and three: , , and . A length-one block has weight two. Thus the equalities are a substantive assertion; they do not hold for every nilpotent operator.  "
},
{
  "id": "hkg-limiting-mixed-hodge",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-limiting-mixed-hodge",
  "type": "Theorem",
  "number": "15.23",
  "title": "(Schmid).",
  "body": " (Schmid)  There is a limiting Hodge filtration for which is a mixed Hodge structure. This means that the induced Hodge filtration on defines a pure rational Hodge structure of weight . The operator lowers both Hodge indices by one and lowers weight by two.  "
},
{
  "id": "hkg-weight-filtration-product",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-weight-filtration-product",
  "type": "Proposition",
  "number": "15.24",
  "title": "",
  "body": " The monodromy weight filtration respects products:  For nilpotent operators on two vector spaces, the weight filtration of centered at the sum of the centers is the convolution of the two weight filtrations. One can check this by extending each Jordan string to an -representation: tensor products add the weight eigenvalues, and their decomposition into strings satisfies the defining weight-filtration isomorphisms. The filtration is functorial for maps commuting with the nilpotent operators, as is also immediate from .  Cup product intertwines with by the derivation formula. The centers are , respectively. Functoriality and convolution give the displayed inclusion.  "
},
{
  "id": "hkg-type-three-hodge-tate",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-type-three-hodge-tate",
  "type": "Theorem",
  "number": "15.25",
  "title": "(Soldatenkov).",
  "body": " (Soldatenkov)  For a projective type III degeneration, every limiting mixed Hodge structure is Hodge–Tate: its odd weight graded pieces vanish, and has Hodge type . In particular,  "
},
{
  "id": "hkg-perverse-cup-description",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-perverse-cup-description",
  "type": "Theorem",
  "number": "15.26",
  "title": "",
  "body": " The perverse filtration of , normalized to range from zero to , is characterized by It is independent of the chosen ample class on the base. Thus for and for .  "
},
{
  "id": "hkg-elliptic-k3-perverse-filtration",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-elliptic-k3-perverse-filtration",
  "type": "Example",
  "number": "15.27",
  "title": "",
  "body": " For an elliptic K3 surface , let be the fiber class. Choose a rational class with and . Such a class is obtained by first choosing a class pairing to one with and then subtracting half its square times . The operator has the two length-two strings and annihilates the twenty-dimensional complement . The center on total cohomology is one. Its weight-zero subspace is generated by , its weight-one step adds that complement, and its weight-two step is all cohomology.  Using the degree shift in gives The graded dimensions are . Also , whereas first occurs at .  "
},
{
  "id": "hkg-compact-p-equals-w",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-compact-p-equals-w",
  "type": "Theorem",
  "number": "15.28",
  "title": "(Harder–Li–Shen–Yin).",
  "body": " (Harder–Li–Shen–Yin)  For every Lagrangian fibration with projective IHS, there exist a projective type III degeneration with smooth fibers deformation equivalent to and an isomorphism of graded rational cohomology rings such that, in every degree,  "
},
{
  "id": "hkg-perverse-multiplicativity",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-perverse-multiplicativity",
  "type": "Corollary",
  "number": "15.29",
  "title": "",
  "body": " The perverse filtration of a projective IHS Lagrangian fibration is multiplicative:  Use the ring isomorphism from and the product compatibility of the monodromy weight filtration. A product of weights at most and has weight at most , which is .  "
},
{
  "id": "hkg-perverse-hodge-numbers",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-perverse-hodge-numbers",
  "type": "Theorem",
  "number": "15.30",
  "title": "(Shen–Yin).",
  "body": " (Shen–Yin)  For the same fibration,  "
},
{
  "id": "hkg-base-intersection-cohomology",
  "level": "2",
  "url": "hkg-degenerations.html#hkg-base-intersection-cohomology",
  "type": "Theorem",
  "number": "15.31",
  "title": "(Shen–Yin).",
  "body": " (Shen–Yin)  For the same fibration, Thus as graded rational vector spaces.  We use the decomposition theorem and hard Lefschetz for intersection cohomology as external results. Since the smooth fibers are connected, the degree-zero perverse cohomology of restricts to the shifted constant sheaf on the smooth-fibration locus. Semisimplicity therefore makes a direct summand. Taking hypercohomology and using gives This is zero for odd and one for even . Hard Lefschetz makes an isomorphism, so every intermediate is nonzero. These classes attain the bounds.  "
},
{
  "id": "hkg-singularities",
  "level": "1",
  "url": "hkg-singularities.html",
  "type": "Chapter",
  "number": "16",
  "title": "Symplectic singularities and resolutions",
  "body": " Symplectic singularities and resolutions   Contractions and moduli spaces naturally produce singular varieties. The symplectic form on the smooth part can still extend to a resolution, but it may become degenerate there. Beauville's notion of symplectic singularities records the extension property; a symplectic resolution requires the stronger nondegeneracy property. This distinction explains both the success of O'Grady's construction and the obstructions to repeating it for other Mukai vectors.  We work with normal algebraic varieties over , without assuming projectivity except where stated. A symplectic variety has dimension . Resolutions of singularities and the basic properties of proper birational morphisms and reflexive sheaves are assumed.    Forms on the smooth locus  A variety is normal if its local rings are integrally closed domains. Write for its smooth locus and for the inclusion. Normality implies that has codimension at least two. Regular functions, and more generally sections of a reflexive sheaf, are determined across such a subset by their restrictions to its complement.   For a coherent sheaf , let . It is reflexive if its natural map to is an isomorphism. The sheaf of reflexive -forms on a normal variety is In particular, .   The double dual replaces Kähler differentials by the reflexive extension of their restriction to . The last isomorphism is the extension property of reflexive sheaves on a normal variety; see . A reflexive form is an ordinary differential form on . It need not be represented by a section of , and its definition alone does not assert extension to a resolution.   (Beauville)  A symplectic variety is a pair such that is normal, is closed and everywhere nondegenerate on , and for a resolution the form extends to a regular two-form on . Here a resolution is a proper birational morphism from a smooth variety, chosen to be an isomorphism over . We also say that has symplectic singularities .   This is a local condition on . It allows noncompact varieties and spaces with several independent global two-forms. The extension may degenerate on the exceptional locus; a symplectic resolution requires nondegeneracy there as well.   The extension condition can be checked on one resolution. If it holds there, it holds on every resolution. Each extension is unique and closed.  Let be two resolutions, and take a smooth common resolution of the component of dominating . Write for its two morphisms. An extension on pulls back to a regular form on . Regard the form from as a rational two-form on . A proper birational morphism to a smooth variety is an isomorphism over an open set containing every codimension-one point of the target. Thus this rational form is regular in codimension one on , because its pullback to is regular. Since is locally free and hence reflexive, it extends regularly over the remaining subset of codimension at least two.  Two extensions agree on the dense open set above and therefore agree everywhere. The exterior derivative of an extension vanishes on that dense open set, so it vanishes on the smooth variety .   This is the resolution-independence argument in . We used the existence of a common resolution in characteristic zero; no nondegeneracy assertion follows from that argument.    Symplectic and crepant resolutions   A symplectic resolution of is a resolution such that the extension is everywhere nondegenerate on . A projective symplectic resolution additionally requires the morphism to be projective. The target and source need not be projective over .    The surface has a symplectic minimal resolution, as in . Blow up a point on its exceptional curve. This is still a resolution of the same singular surface, and the form still extends. In local symplectic coordinates around the point being blown up, one blowup chart has , , and The extension degenerates along the new exceptional curve . A symplectic singularity therefore need not have a symplectic form on every resolution, even when it has one symplectic resolution.    (Beauville)  A symplectic variety has rational Gorenstein singularities. Its dualizing sheaf is a line bundle, and extends as a nowhere-vanishing generator of . In particular is Cartier and can be chosen to be the zero divisor.   See . Here rational singularities means that for on a resolution and ; Gorenstein includes the Cohen–Macaulay property and invertibility of the dualizing sheaf. These are consequences of the theorem, not additional hypotheses in . The top form trivializes the reflexive canonical sheaf because it already does so on ; the theorem identifies that sheaf with the invertible dualizing sheaf.  For a normal variety whose canonical divisor is -Cartier, a resolution is crepant if as canonical divisors identified by a rational top form on the common function field. This keeps track of the natural identification over the smooth locus. It is stronger than merely comparing two unspecified numerical canonical classes.   A resolution of a symplectic variety is symplectic if and only if it is crepant.  The extension exists by definition. The rational top form determining is , and the corresponding form on is . Its divisor is supported on the exceptional locus, since it is nonvanishing above . Thus A two-form on a -dimensional vector space is nondegenerate exactly when its -th exterior power is nonzero. Therefore is everywhere nondegenerate exactly when the displayed divisor is zero. Indeed a nonzero section of a line bundle on a smooth variety has a divisor of zeros; it cannot vanish only in codimension at least two. This is exactly crepancy.    For a resolution of a symplectic variety, the following are equivalent: is symplectic; is crepant; and .  A symplectic form trivializes , and the previous proposition gives the first equivalence. Conversely, choose a nowhere-vanishing top form trivializing . Write for a regular function on . Properness, birationality, and normality give , so for a regular function on . It has no zeros on . Normality extends the regular function from across its complement of codimension at least two. Hence and are units, and is nowhere zero.   The two cotangent resolutions of the rank-one nilpotent cone described in are local models of this situation. Their source has its canonical symplectic form; the zero section is contracted to the vertex. The two resolutions can differ by a Mukai flop. The symplectic form and the two contractions are given explicitly in that example.    Finite quotients and symplectic reflections  Let be a symplectic vector space of dimension , and let be finite. Its affine quotient is Finite-group invariant theory gives a finite quotient morphism .   The variety is normal. Every nonidentity element of has fixed subspace of even codimension at least two. The form descends over the free locus and determines a unique reflexive two-form on .  Set and . If is integral over , its monic equation also makes it integral over . The polynomial ring is integrally closed, so . Since it is invariant, it belongs to . Thus is integrally closed.  A finite-order linear transformation is diagonalizable. Its eigenspaces of eigenvalues are symplectically orthogonal unless . In particular its eigenvalue-one subspace is nondegenerate: a vector in that subspace orthogonal to it is orthogonal to every eigenspace, hence is zero. The fixed space and its symplectic orthogonal therefore both have even dimension. For a nonidentity element the latter is nonzero.  The union of the nontrivial fixed spaces has codimension at least two. On its complement , the quotient is finite étale, so the invariant form descends to . Its complement in also has codimension at least two. The characterization extends that form uniquely as a reflexive form. On the smooth locus its top exterior power has no zeros: any zero divisor would have to be supported on the omitted subset of codimension at least two. Closedness extends by density as well. Thus it is symplectic on the whole smooth locus.    (Beauville)  The quotient of a symplectic variety by a finite group preserving its symplectic form has symplectic singularities. In particular, above is a symplectic variety.   This is . The extension to a resolution is the additional content beyond the normality and descent calculation just given. A finite symplectic quotient need not admit a symplectic resolution.   An element is a symplectic reflection if    (Verbitsky)  If admits a symplectic resolution, then is generated by symplectic reflections.   We cite . Projectivity of the resolution is not needed for this necessary condition.   The quotient admits a symplectic resolution, whereas has none when .  In dimension two, the quotient is the surface , and the two charts of its minimal resolution carry the nondegenerate extended form calculated in . In dimension , the only nonidentity element is , whose fixed space is zero and whose rank difference from the identity is . There are no symplectic reflections in the group, so excludes a symplectic resolution.   Being generated by symplectic reflections is not sufficient for existence of a projective symplectic resolution. For example, let be the Weyl group of type on its reflection representation . On , each ordinary reflection has a codimension-two fixed space, so is generated by symplectic reflections. Nevertheless has no projective symplectic resolution, by .    Fibre dimensions and terminal singularities   A proper surjective morphism between varieties of the same dimension is semismall if, for every integer , the closed subset satisfies . The codimension of an empty set is understood to be infinite. Equivalently, .   For a stratum of codimension on which the fibre dimension is , the inequality is . It concerns the codimension of the locus where fibres of that size occur, not only the dimension of a single fibre.   (Kaledin)  Every projective symplectic resolution is semismall.   The projective version used here is . It applies to a projective morphism over an affine or nonprojective target as well.   Let be a projective symplectic resolution. Every exceptional prime divisor has image of codimension two. In particular, if , the resolution has no exceptional divisors.  Let be an exceptional prime divisor and let , of codimension . A birational morphism to a normal variety is an isomorphism at the generic points of divisors on the target, so . Since , the generic fibre of has dimension . Semismallness gives , hence . Thus . A resolution chosen to be an isomorphism over maps every exceptional divisor into the singular locus; the final assertion follows.   For comparison, the cotangent resolution of has a fibre over the vertex, whose codimension is . It attains equality in the semismall inequality. For its exceptional locus has codimension , so semismallness permits a resolution without exceptional divisors.  We recall only the singularity terminology needed for the next obstruction. A normal variety is -factorial if every Weil divisor has a positive multiple that is Cartier locally; it is locally factorial if every Weil divisor is Cartier locally. For  -Cartier, write on a resolution The coefficients are discrepancies. The singularities are canonical if all exceptional divisorial discrepancies on all resolutions are nonnegative, and terminal if they are strictly positive. These are definitions from birational geometry; we use their basic invariance properties as external facts.   (Namikawa)  A symplectic variety has terminal singularities if and only if its singular locus has codimension at least four.   This is . The criterion applies without a -factoriality hypothesis. That additional condition is used in to exclude small projective resolutions. In particular, a terminal symplectic singularity has no exceptional divisor of discrepancy zero on a crepant resolution. A resolution could still be small, meaning that its exceptional locus has codimension at least two in its source. The following argument explains where -factoriality obstructs that possibility.   A singular -factorial terminal symplectic variety admits no projective symplectic resolution.  Suppose were such a resolution. It is crepant by . Terminality excludes every exceptional divisor, so is small. Choose an -ample Cartier divisor on , and let be its pushforward Weil divisor. Since is -factorial, after restricting to a neighbourhood and taking a positive multiple, is Cartier. The divisors and agree away from the exceptional locus. A difference of divisors is supported in codimension one; there is no exceptional divisor on which it could be supported. They are therefore equal.  A nonisomorphic proper birational morphism to a normal variety has a positive-dimensional fibre: otherwise it would be finite and hence an isomorphism. Projectivity gives a complete curve in such a fibre. The equality of divisors gives , whereas relative ampleness gives . This contradiction proves the assertion.   Projectivity of the morphism is used to obtain a relatively ample divisor and a curve to test it on. We retain that hypothesis in applications. Terminality alone would not exclude the cotangent examples with small resolutions; their targets need not be -factorial.    Nonprimitive Mukai vectors  Let be a projective K3 or abelian surface. Retain the Mukai pairing of and the corresponding abelian-surface convention of . Write Thus is a positive even integer. Let be the coarse moduli space of Gieseker-semistable sheaves.  For the theorems below, impose the following hypotheses. The vector is algebraic; either , or , is effective, and . The polarization is -general in the wall sense: it lies outside the walls for , so every stable summand of a polystable sheaf of vector has Mukai vector in . Finally, assume is nonempty. These are the hypotheses , , and §2.4 of . They imply that a stable factor has vector for a positive integer .   For rank zero, . The condition is part of the cited theorem's range. Genericity of a polarization cannot simply be used to eliminate persistent decompositions when . The nonemptiness assumption is also kept explicit; for ample it is covered by the existence theorems of .   A -general polarization does not make all semistable sheaves of vector stable when . If is stable with vector , the sheaf remains strictly semistable for that polarization. Genericity controls the vectors of the factors; it does not remove factors forced by divisibility.   (Kaledin–Lehn–Sorger; Lehn–Sorger)  Under the hypotheses just stated, is a normal irreducible projective variety of dimension , with symplectic singularities. There are two cases:   If and , the blowup of the reduced singular locus is a projective symplectic resolution.  If , or and , the variety is singular and locally factorial, and its singular locus has codimension at least four. No Zariski open neighbourhood of a singular point admits a projective symplectic resolution.     Normality and irreducibility are ; the nonexistence assertion and local factoriality are its Theorems 5.3 and 6.2. The exceptional blowup construction is . The Zariski qualification matters. Local factoriality here concerns algebraic local rings, and it can fail after completion; exhibits precisely this phenomenon in these moduli spaces. The stated obstruction does not exclude a resolution of every sufficiently small analytic neighbourhood.   In this setting, the strictly semistable locus has codimension at least For it has codimension two. In all other cases in the theorem, the displayed lower bound is at least six.  A polystable sheaf is a direct sum of stable factors. Counting a repeated factor with its multiplicity, their vectors are , where , , and . A moduli space of stable factors of vector is smooth of dimension , by the Ext-and-trace calculation of . The same calculation applies to an abelian surface, whose Picard scheme is smooth. The locus of direct sums therefore has dimension at most Permuting factors gives a finite identification; imposing coincidences among factors can only decrease the dimension.  Merging two positive parts increases this upper bound by . Among partitions with at least two parts, its maximum is consequently attained with two parts. For , the sum is largest at . Thus the boundary has dimension at most . Subtracting from gives the claimed lower bound.  When , the stable moduli space has dimension four. Direct sums of two distinct such sheaves form an eight-dimensional locus, parametrized generically finitely by unordered pairs. Since , the codimension is exactly two. Otherwise .   The stable locus is smooth, so the singular locus lies in this boundary. For the nonexceptional cases, the dimension estimate explains the large codimension needed in the obstruction. Kaledin–Lehn–Sorger prove normality, extension of the form, nonemptiness of the singular locus, and local factoriality. Namikawa's criterion then makes the singularities terminal, and proves the obstruction to a projective symplectic resolution.  In the exceptional case , the dimension is ten for both kinds of surface. For a K3 surface, O'Grady's original choice gives the ten-dimensional IHS resolution of . On an abelian surface the full moduli space also has dimension ten; the six-dimensional IHS example comes from the appropriate fibre of its determinant-and-Albanese map. The full moduli space and that fibre must be distinguished. The theorem above is stated for the full moduli space.  The assumption excludes another source of symplectic resolutions. For instance, zero-dimensional sheaves of length have coarse moduli space , and the Hilbert–Chow map is a symplectic resolution. The positive-square assumption distinguishes this example from the nonexistence cases above.    Primitive and irreducible symplectic varieties  For a global counterpart of an IHS manifold, we distinguish two definitions. The first also applies to compact normal Kähler spaces.   A primitive symplectic variety is a compact normal Kähler symplectic variety satisfying   This is the convention of . In particular it applies to projective varieties. For the next definition we restrict to the projective setting of the original reference.   Let be a normal projective variety of dimension with canonical singularities and . It is an irreducible symplectic variety if it has a reflexive two-form nondegenerate on , and for every finite surjective morphism from a normal connected variety that is étale in codimension one, as an algebra under exterior product. Such a finite morphism is called quasi-étale . The reflexive pullback is ordinary pullback on the smooth étale locus above , extended as a reflexive form across its complement, which has codimension at least two in .   This is . Generation by one two-form means that every global form of even degree is a scalar multiple of its appropriate exterior power and every odd-degree form vanishes, on every such cover. The condition controls forms on covers as well as forms on itself.   For a projective K3 surface , its symmetric square is primitive symplectic but is not irreducible symplectic in the preceding sense. Indeed, it is a symplectic quotient of . The finite quotient map is étale off the diagonal, whose codimension is two. It is therefore quasi-étale.  Let . The invariant subspace of under exchange of factors is . Descent on the free locus and extension of reflexive forms identify it with . Also : finite pushforward is exact, taking invariants is exact in characteristic zero, and the Künneth formula gives the vanishing. These facts prove primitivity.  On the quasi-étale cover , the two independent forms are not both generated in degree two by . Hence the condition for irreducible symplectic varieties fails. Its Hilbert–Chow resolution is an IHS manifold. Having an IHS resolution, being primitive symplectic, and satisfying the condition on forms on all quasi-étale covers are distinct assertions.   The quasi-étale-cover condition is the additional requirement that distinguishes irreducible symplectic varieties from primitive symplectic varieties. The symmetric-square example shows why it is necessary even for varieties admitting an IHS resolution.   "
},
{
  "id": "hkg-def-reflexive-forms",
  "level": "2",
  "url": "hkg-singularities.html#hkg-def-reflexive-forms",
  "type": "Definition",
  "number": "16.1",
  "title": "",
  "body": " For a coherent sheaf , let . It is reflexive if its natural map to is an isomorphism. The sheaf of reflexive -forms on a normal variety is In particular, .  "
},
{
  "id": "hkg-def-symplectic-singularity",
  "level": "2",
  "url": "hkg-singularities.html#hkg-def-symplectic-singularity",
  "type": "Definition",
  "number": "16.2",
  "title": "(Beauville).",
  "body": " (Beauville)  A symplectic variety is a pair such that is normal, is closed and everywhere nondegenerate on , and for a resolution the form extends to a regular two-form on . Here a resolution is a proper birational morphism from a smooth variety, chosen to be an isomorphism over . We also say that has symplectic singularities .  "
},
{
  "id": "hkg-resolution-extension-independent",
  "level": "2",
  "url": "hkg-singularities.html#hkg-resolution-extension-independent",
  "type": "Proposition",
  "number": "16.3",
  "title": "",
  "body": " The extension condition can be checked on one resolution. If it holds there, it holds on every resolution. Each extension is unique and closed.  Let be two resolutions, and take a smooth common resolution of the component of dominating . Write for its two morphisms. An extension on pulls back to a regular form on . Regard the form from as a rational two-form on . A proper birational morphism to a smooth variety is an isomorphism over an open set containing every codimension-one point of the target. Thus this rational form is regular in codimension one on , because its pullback to is regular. Since is locally free and hence reflexive, it extends regularly over the remaining subset of codimension at least two.  Two extensions agree on the dense open set above and therefore agree everywhere. The exterior derivative of an extension vanishes on that dense open set, so it vanishes on the smooth variety .  "
},
{
  "id": "hkg-def-symplectic-resolution",
  "level": "2",
  "url": "hkg-singularities.html#hkg-def-symplectic-resolution",
  "type": "Definition",
  "number": "16.4",
  "title": "",
  "body": " A symplectic resolution of is a resolution such that the extension is everywhere nondegenerate on . A projective symplectic resolution additionally requires the morphism to be projective. The target and source need not be projective over .  "
},
{
  "id": "hkg-blowup-degenerate-extension",
  "level": "2",
  "url": "hkg-singularities.html#hkg-blowup-degenerate-extension",
  "type": "Example",
  "number": "16.5",
  "title": "",
  "body": " The surface has a symplectic minimal resolution, as in . Blow up a point on its exceptional curve. This is still a resolution of the same singular surface, and the form still extends. In local symplectic coordinates around the point being blown up, one blowup chart has , , and The extension degenerates along the new exceptional curve . A symplectic singularity therefore need not have a symplectic form on every resolution, even when it has one symplectic resolution.  "
},
{
  "id": "hkg-symplectic-rational-gorenstein",
  "level": "2",
  "url": "hkg-singularities.html#hkg-symplectic-rational-gorenstein",
  "type": "Theorem",
  "number": "16.6",
  "title": "(Beauville).",
  "body": " (Beauville)  A symplectic variety has rational Gorenstein singularities. Its dualizing sheaf is a line bundle, and extends as a nowhere-vanishing generator of . In particular is Cartier and can be chosen to be the zero divisor.  "
},
{
  "id": "hkg-crepant-iff-symplectic",
  "level": "2",
  "url": "hkg-singularities.html#hkg-crepant-iff-symplectic",
  "type": "Proposition",
  "number": "16.7",
  "title": "",
  "body": " A resolution of a symplectic variety is symplectic if and only if it is crepant.  The extension exists by definition. The rational top form determining is , and the corresponding form on is . Its divisor is supported on the exceptional locus, since it is nonvanishing above . Thus A two-form on a -dimensional vector space is nondegenerate exactly when its -th exterior power is nonzero. Therefore is everywhere nondegenerate exactly when the displayed divisor is zero. Indeed a nonzero section of a line bundle on a smooth variety has a divisor of zeros; it cannot vanish only in codimension at least two. This is exactly crepancy.  "
},
{
  "id": "hkg-trivial-canonical-resolution",
  "level": "2",
  "url": "hkg-singularities.html#hkg-trivial-canonical-resolution",
  "type": "Corollary",
  "number": "16.8",
  "title": "",
  "body": " For a resolution of a symplectic variety, the following are equivalent: is symplectic; is crepant; and .  A symplectic form trivializes , and the previous proposition gives the first equivalence. Conversely, choose a nowhere-vanishing top form trivializing . Write for a regular function on . Properness, birationality, and normality give , so for a regular function on . It has no zeros on . Normality extends the regular function from across its complement of codimension at least two. Hence and are units, and is nowhere zero.  "
},
{
  "id": "hkg-finite-quotient-normal-form",
  "level": "2",
  "url": "hkg-singularities.html#hkg-finite-quotient-normal-form",
  "type": "Proposition",
  "number": "16.9",
  "title": "",
  "body": " The variety is normal. Every nonidentity element of has fixed subspace of even codimension at least two. The form descends over the free locus and determines a unique reflexive two-form on .  Set and . If is integral over , its monic equation also makes it integral over . The polynomial ring is integrally closed, so . Since it is invariant, it belongs to . Thus is integrally closed.  A finite-order linear transformation is diagonalizable. Its eigenspaces of eigenvalues are symplectically orthogonal unless . In particular its eigenvalue-one subspace is nondegenerate: a vector in that subspace orthogonal to it is orthogonal to every eigenspace, hence is zero. The fixed space and its symplectic orthogonal therefore both have even dimension. For a nonidentity element the latter is nonzero.  The union of the nontrivial fixed spaces has codimension at least two. On its complement , the quotient is finite étale, so the invariant form descends to . Its complement in also has codimension at least two. The characterization extends that form uniquely as a reflexive form. On the smooth locus its top exterior power has no zeros: any zero divisor would have to be supported on the omitted subset of codimension at least two. Closedness extends by density as well. Thus it is symplectic on the whole smooth locus.  "
},
{
  "id": "hkg-beauville-quotient-singularities",
  "level": "2",
  "url": "hkg-singularities.html#hkg-beauville-quotient-singularities",
  "type": "Theorem",
  "number": "16.10",
  "title": "(Beauville).",
  "body": " (Beauville)  The quotient of a symplectic variety by a finite group preserving its symplectic form has symplectic singularities. In particular, above is a symplectic variety.  "
},
{
  "id": "hkg-def-symplectic-reflection",
  "level": "2",
  "url": "hkg-singularities.html#hkg-def-symplectic-reflection",
  "type": "Definition",
  "number": "16.11",
  "title": "",
  "body": " An element is a symplectic reflection if  "
},
{
  "id": "hkg-verbitsky-reflection-obstruction",
  "level": "2",
  "url": "hkg-singularities.html#hkg-verbitsky-reflection-obstruction",
  "type": "Theorem",
  "number": "16.12",
  "title": "(Verbitsky).",
  "body": " (Verbitsky)  If admits a symplectic resolution, then is generated by symplectic reflections.  "
},
{
  "id": "hkg-sign-quotient-obstruction",
  "level": "2",
  "url": "hkg-singularities.html#hkg-sign-quotient-obstruction",
  "type": "Corollary",
  "number": "16.13",
  "title": "",
  "body": " The quotient admits a symplectic resolution, whereas has none when .  In dimension two, the quotient is the surface , and the two charts of its minimal resolution carry the nondegenerate extended form calculated in . In dimension , the only nonidentity element is , whose fixed space is zero and whose rank difference from the identity is . There are no symplectic reflections in the group, so excludes a symplectic resolution.  "
},
{
  "id": "hkg-def-semismall",
  "level": "2",
  "url": "hkg-singularities.html#hkg-def-semismall",
  "type": "Definition",
  "number": "16.14",
  "title": "",
  "body": " A proper surjective morphism between varieties of the same dimension is semismall if, for every integer , the closed subset satisfies . The codimension of an empty set is understood to be infinite. Equivalently, .  "
},
{
  "id": "hkg-kaledin-semismall",
  "level": "2",
  "url": "hkg-singularities.html#hkg-kaledin-semismall",
  "type": "Theorem",
  "number": "16.15",
  "title": "(Kaledin).",
  "body": " (Kaledin)  Every projective symplectic resolution is semismall.  "
},
{
  "id": "hkg-semismall-exceptional-divisors",
  "level": "2",
  "url": "hkg-singularities.html#hkg-semismall-exceptional-divisors",
  "type": "Proposition",
  "number": "16.16",
  "title": "",
  "body": " Let be a projective symplectic resolution. Every exceptional prime divisor has image of codimension two. In particular, if , the resolution has no exceptional divisors.  Let be an exceptional prime divisor and let , of codimension . A birational morphism to a normal variety is an isomorphism at the generic points of divisors on the target, so . Since , the generic fibre of has dimension . Semismallness gives , hence . Thus . A resolution chosen to be an isomorphism over maps every exceptional divisor into the singular locus; the final assertion follows.  "
},
{
  "id": "hkg-namikawa-terminal-criterion",
  "level": "2",
  "url": "hkg-singularities.html#hkg-namikawa-terminal-criterion",
  "type": "Theorem",
  "number": "16.17",
  "title": "(Namikawa).",
  "body": " (Namikawa)  A symplectic variety has terminal singularities if and only if its singular locus has codimension at least four.  "
},
{
  "id": "hkg-qfactorial-terminal-no-resolution",
  "level": "2",
  "url": "hkg-singularities.html#hkg-qfactorial-terminal-no-resolution",
  "type": "Proposition",
  "number": "16.18",
  "title": "",
  "body": " A singular -factorial terminal symplectic variety admits no projective symplectic resolution.  Suppose were such a resolution. It is crepant by . Terminality excludes every exceptional divisor, so is small. Choose an -ample Cartier divisor on , and let be its pushforward Weil divisor. Since is -factorial, after restricting to a neighbourhood and taking a positive multiple, is Cartier. The divisors and agree away from the exceptional locus. A difference of divisors is supported in codimension one; there is no exceptional divisor on which it could be supported. They are therefore equal.  A nonisomorphic proper birational morphism to a normal variety has a positive-dimensional fibre: otherwise it would be finite and hence an isomorphism. Projectivity gives a complete curve in such a fibre. The equality of divisors gives , whereas relative ampleness gives . This contradiction proves the assertion.  "
},
{
  "id": "hkg-kls-singular-moduli",
  "level": "2",
  "url": "hkg-singularities.html#hkg-kls-singular-moduli",
  "type": "Theorem",
  "number": "16.19",
  "title": "(Kaledin–Lehn–Sorger; Lehn–Sorger).",
  "body": " (Kaledin–Lehn–Sorger; Lehn–Sorger)  Under the hypotheses just stated, is a normal irreducible projective variety of dimension , with symplectic singularities. There are two cases:   If and , the blowup of the reduced singular locus is a projective symplectic resolution.  If , or and , the variety is singular and locally factorial, and its singular locus has codimension at least four. No Zariski open neighbourhood of a singular point admits a projective symplectic resolution.    "
},
{
  "id": "hkg-semistable-boundary-codimension",
  "level": "2",
  "url": "hkg-singularities.html#hkg-semistable-boundary-codimension",
  "type": "Proposition",
  "number": "16.20",
  "title": "",
  "body": " In this setting, the strictly semistable locus has codimension at least For it has codimension two. In all other cases in the theorem, the displayed lower bound is at least six.  A polystable sheaf is a direct sum of stable factors. Counting a repeated factor with its multiplicity, their vectors are , where , , and . A moduli space of stable factors of vector is smooth of dimension , by the Ext-and-trace calculation of . The same calculation applies to an abelian surface, whose Picard scheme is smooth. The locus of direct sums therefore has dimension at most Permuting factors gives a finite identification; imposing coincidences among factors can only decrease the dimension.  Merging two positive parts increases this upper bound by . Among partitions with at least two parts, its maximum is consequently attained with two parts. For , the sum is largest at . Thus the boundary has dimension at most . Subtracting from gives the claimed lower bound.  When , the stable moduli space has dimension four. Direct sums of two distinct such sheaves form an eight-dimensional locus, parametrized generically finitely by unordered pairs. Since , the codimension is exactly two. Otherwise .  "
},
{
  "id": "hkg-def-primitive-symplectic",
  "level": "2",
  "url": "hkg-singularities.html#hkg-def-primitive-symplectic",
  "type": "Definition",
  "number": "16.21",
  "title": "",
  "body": " A primitive symplectic variety is a compact normal Kähler symplectic variety satisfying  "
},
{
  "id": "hkg-def-singular-irreducible-symplectic",
  "level": "2",
  "url": "hkg-singularities.html#hkg-def-singular-irreducible-symplectic",
  "type": "Definition",
  "number": "16.22",
  "title": "",
  "body": " Let be a normal projective variety of dimension with canonical singularities and . It is an irreducible symplectic variety if it has a reflexive two-form nondegenerate on , and for every finite surjective morphism from a normal connected variety that is étale in codimension one, as an algebra under exterior product. Such a finite morphism is called quasi-étale . The reflexive pullback is ordinary pullback on the smooth étale locus above , extended as a reflexive form across its complement, which has codimension at least two in .  "
},
{
  "id": "hkg-symmetric-square-primitive-not-irreducible",
  "level": "2",
  "url": "hkg-singularities.html#hkg-symmetric-square-primitive-not-irreducible",
  "type": "Example",
  "number": "16.23",
  "title": "",
  "body": " For a projective K3 surface , its symmetric square is primitive symplectic but is not irreducible symplectic in the preceding sense. Indeed, it is a symplectic quotient of . The finite quotient map is étale off the diagonal, whose codimension is two. It is therefore quasi-étale.  Let . The invariant subspace of under exchange of factors is . Descent on the free locus and extension of reflexive forms identify it with . Also : finite pushforward is exact, taking invariants is exact in characteristic zero, and the Künneth formula gives the vanishing. These facts prove primitivity.  On the quasi-étale cover , the two independent forms are not both generated in degree two by . Hence the condition for irreducible symplectic varieties fails. Its Hilbert–Chow resolution is an IHS manifold. Having an IHS resolution, being primitive symplectic, and satisfying the condition on forms on all quasi-étale covers are distinct assertions.  "
},
{
  "id": "hkg-rational-curves",
  "level": "1",
  "url": "hkg-rational-curves.html",
  "type": "Chapter",
  "number": "17",
  "title": "Rational curves and coisotropic subvarieties",
  "body": " Rational curves and coisotropic subvarieties   Rational curves on an IHS manifold move in unexpectedly large families. The symplectic form constrains the locus swept out by such a family: its characteristic directions are precisely the directions of a rational quotient. We begin with the deformation estimate, calculate the family of lines in a Lagrangian projective space, and then establish the linear algebra and foliation behind this relationship.    Deformations of rational curves  Let be an IHS manifold of dimension . A rational curve is reduced and irreducible, with normalization . We write for its normalization map followed by the inclusion. Thus is birational onto its image; multiple covers are not part of this convention.  There are two local deformation spaces to distinguish. The space of maps with source fixed remembers a parametrization. Dividing by removes three dimensions. Near a map birational onto its image the stabilizer is trivial, and this quotient describes the local family of rational curves. If is smooth, its embedded deformation space is the corresponding open part of the Douady space, or of the Hilbert scheme when is projective.   Let be a complex manifold and a holomorphic map. The tangent space to the local space of maps is , and every irreducible component through has dimension at least If is a smooth embedded compact curve, the embedded deformation space has tangent space , with obstructions in .   These are external deformation-theoretic facts: locally the map space has at most equations in a smooth space of dimension . See and the discussion preceding . The equality for the Euler characteristic is Riemann–Roch on .  Since , this estimate applied directly to gives only dimensions after removing parametrizations. Deforming the map into the twistor space increases this Euler-characteristic bound by one.   (Ran)  Every irreducible component of the local deformation space of a rational curve in an IHS manifold of dimension has dimension at least .  Choose a hyperkähler metric on , with Kähler form , and consider its twistor space . Take the coordinate centered at the original complex structure. The holomorphic symplectic form on the fiber is, by , Put . The integral of a holomorphic or antiholomorphic two-form over vanishes, whereas . Therefore In a sufficiently small neighborhood of , the class can consequently be represented by a holomorphic curve in a twistor fiber only over .  Now deform as a map into . The degree of its composition with is locally constant and initially zero. A holomorphic map of degree zero is constant, so every nearby map lies in one fiber. Its homology class, identified using the smooth product underlying the twistor family, remains . The preceding integral forces that fiber to be . Thus the reduced map germs into and into have the same underlying local space and the same dimensions.  On the original fiber, the tangent sequence of the twistor projection gives The middle bundle has rank and degree zero, hence Euler characteristic . The map deformation estimate gives this lower bound for every component of its map germ. Removing the three-dimensional parametrization group proves the assertion.   The theorem is . The twistor argument is also presented in . The conclusion concerns curves through the normalization map. For an arbitrary multiple cover, subtracting the parametrization group gives a bound for a space of maps and does not by itself give the same bound for their image curves. Also, equality of the reduced germs in the proof does not assert equality of their infinitesimal deformation functors.    Lines in a Lagrangian projective space   Let be a Lagrangian submanifold of an IHS manifold , and let be a line. Then In particular, and . The local embedded deformation space of in is smooth, and all sufficiently small deformations are lines in .  By , the symplectic form identifies with .  A line in projective space has . For instance, its ideal is generated by independent linear equations, so its conormal bundle is . The tangent sequence splits because . Dualizing gives  The normal sequence for is therefore Its extension class belongs to This proves the splitting. The elementary formulas , , , and give the stated dimensions.  The lines in form the Grassmannian , of dimension . Their universal family gives a map from to the embedded deformation space in . Its tangent map at is which is an isomorphism by the normal sequence and . Distinct lines give distinct embedded curves, so the local deformation space has dimension at least . Its tangent space has exactly that dimension. Its local ring is consequently regular, and the map from is a local isomorphism. This proves smoothness and the final assertion. Since is compact, its image is also a whole irreducible component of the embedded deformation space; its swept locus is .   The nonzero obstruction space does not imply that there are actual obstructions. Here the explicit family realizes the whole tangent space. Its dimension is the lower bound of , while the ordinary normal-bundle Euler characteristic is only .   For , the projective space is the curve itself, , and the curve is rigid on the K3 surface. For , a Lagrangian plane contains a two-dimensional family of lines, parametrized by the dual plane. Blowing up the plane and contracting along the other ruling gives the local Mukai transformation of . The normal calculation identifies its curve family without asserting that an arbitrary normal bundle determines a whole analytic neighborhood.     Coisotropic subvarieties and characteristic foliations  For this section can be any holomorphic symplectic manifold of dimension . Compactness and irreducibility are unnecessary.   In a symplectic vector space , let . A subspace is isotropic if , and coisotropic if . An irreducible reduced subvariety is coisotropic if its tangent spaces on are coisotropic. For such a subvariety its characteristic distribution is    Let have codimension , where . Then Coisotropy is equivalent to , and implies . In that case the rank of the restricted alternating form is . Every hyperplane is coisotropic, and an -dimensional subspace is coisotropic precisely when it is Lagrangian.  The first kernel equality is the definition of orthogonality. The symplectic isomorphism takes to the annihilator of , which has dimension . Thus the kernel has dimension at most , with equality exactly when . This inclusion requires . The rank formula follows by subtracting the kernel dimension from .  For a hyperplane the restriction is an alternating form on an odd-dimensional space. Its kernel is nonzero and has dimension at most one, so it has dimension one. Finally, when , equality is precisely the Lagrangian condition.   More generally the kernel dimension is at most , so the restricted form has rank at least . Throughout this chapter, rank means the rank of the map to the dual vector space. Some symplectic-geometry references use half this rank for a two-form; in that convention a coisotropic codimension- subspace has restricted rank .   For a coisotropic of codimension , the distribution is a holomorphic subbundle of rank and is closed under Lie brackets. Locally on there is a holomorphic submersion whose fibers are its leaves, and a holomorphic symplectic form with .  Constant rank makes the kernel a holomorphic subbundle. Write ; it is closed. If are local sections of the kernel, Cartan's formula gives Thus their bracket remains in the kernel.  The local holomorphic Frobenius argument is as follows. A nonvanishing section can be made a coordinate vector field by its holomorphic local flow. Involutivity makes that flow preserve the distribution. Choose a transverse slice, apply the same construction to the induced distribution of rank one less on the slice, and transport its coordinates by the first flow. Induction produces coordinates in which the distribution is spanned by the . Projection to the coordinates is the required submersion.  The kernel condition says that has no terms. The equations say that its remaining coefficients are independent of the . Hence it is the pullback of a two-form on . This form is closed; it is nondegenerate because the entire kernel of consists of the vertical directions.    Every smooth hypersurface has a characteristic line bundle If a compact characteristic leaf is isomorphic to , then .  The symplectic isomorphism takes the conormal line to the symplectic orthogonal of , which is exactly . This gives the first isomorphism; adjunction and give the second. Along a smooth compact leaf the line distribution is its tangent bundle. Thus , giving the intersection number.   The intersection calculation uses , so it applies to a compact leaf contained in the smooth hypersurface.   A characteristic foliation need not have compact leaves. Let , let , and choose a real irrational number . The translation-invariant form is holomorphic symplectic. On the hypersurface , its kernel is spanned by . A leaf has parametrization . There is no nonzero with both and in . Consequently this immersed complex line cannot be a compact elliptic subtorus and is not closed. This example is a holomorphic symplectic torus; it illustrates the distinction between a local leaf space and an algebraic quotient.     Rational quotients and swept loci  In this section is projective. A variety is uniruled if a family of rational curves covers it. It is rationally chain connected if two general points can be joined by a connected chain of rational curves, and rationally connected if one rational curve suffices. For smooth projective varieties over , these last two conditions are equivalent. Their general theory is an external result here.  We also use the maximal rationally connected quotient: for a smooth projective variety there is an almost holomorphic rational map , unique up to birational equivalence, whose general fibers are rationally connected and whose base is not uniruled. After restricting the base and resolving indeterminacies, it is represented by a smooth proper morphism with connected fibers. The rational quotient and bend-and-break arguments used below are those in ; they are not consequences of local Frobenius theory.   A codimension- coisotropic subvariety is algebraically coisotropic if there is a dominant rational map , with , whose general fibers are the closures of its characteristic leaves. Equivalently, on suitable dense smooth open sets it is a submersion with connected fibers and for a holomorphic symplectic form on that open part of . The form is not required to extend nondegenerately across a compactification of .    Let be a smooth proper morphism of complex manifolds with connected fibers , and suppose for every fiber. Every closed holomorphic two-form on is the pullback of a unique closed holomorphic two-form on .  The restriction of to a fiber is zero by the second vanishing. Fix and . For a vertical tangent vector along , define using any local holomorphic lift of . Two lifts differ by a vertical vector, so the definition is independent of the lift and gives a global holomorphic one-form on . The first vanishing makes it zero. Thus annihilates every vertical tangent vector.  For a vertical local vector field , closedness gives . In local submersion coordinates the form therefore has only base components, with coefficients constant along the fiber directions. Connected fibers make these local descended forms agree; equivalently, properness and connectedness give . They define a unique form on , and its closedness follows by pullback through a submersion.   Smooth projective rationally connected varieties have no nonzero holomorphic forms of positive degree. We use this external consequence of rational connectedness in applying the lemma to general fibers of the rational quotient. It follows that those fibers are isotropic for the restriction of . At a general smooth point of a codimension- subvariety , their tangent space lies in , so their dimension is at most . The opposite inequality for loci swept out by all deformations of a rational curve is the global part of the following theorem.   (Amerik–Verbitsky)  Let be a rational curve on a projective IHS manifold. Let be an irreducible component of the locus swept out by the full deformations of in , and let . Then is coisotropic. The general fibers of the maximal rationally connected quotient of a desingularization of have dimension . On a dense smooth open set they are its characteristic leaves. In particular is algebraically coisotropic.   We quote , in its projective specialization. The lower bound on the rational-quotient fibers uses and bend-and-break. The descent argument above gives their inclusion in the characteristic distribution; equality follows from the dimension statement. Choosing an arbitrary smaller subfamily of curves does not give the same theorem.   Every uniruled prime divisor on a projective IHS manifold is algebraically coisotropic. The closure of a general characteristic leaf is a rational curve, and the base of its rational quotient has dimension .  First, is not uniruled. Indeed, a covering family would, after slicing its parameter space and making a generically finite base change, give a smooth family of rational curves with and a dominant generically finite evaluation map to . Pullback would give a nonzero holomorphic top form on . But on every fiber of , the canonical bundle of restricts to . Any holomorphic top form vanishes along every such fiber and hence vanishes, a contradiction.  Let be the uniruled divisor, and choose a covering family of rational curves on it. Complete this family to an irreducible component of the rational-curve deformation space in . Its swept locus contains ; it cannot be all of by the preceding argument. Its irreducible closure is therefore . Apply with . The general rational-quotient fiber on a resolution is a smooth rationally connected curve, hence . Its image is the closure of a characteristic leaf on ; the leaf itself can omit points in the singular locus of .    If two points of can be joined by a chain of rational curves, they have the same class in . In particular, the image in of a proper rationally chain connected fiber is a constant-cycle subvariety: all of its points determine the same zero-cycle class.  On , the difference of any two points is the divisor of a rational function. Push this relation forward along the normalization map of a rational curve. Its points consequently have the same class in . Applying this successively along a connected chain proves the assertion. For a proper rationally chain connected variety over , any two points can be joined by such a chain; this extension from general points is part of the standard rational-connectedness theory.   This is a geometric source of the constant-cycle loci considered in . For the Lagrangian in , no rational quotient theorem is needed: lines join any two points, so the whole projective space has one zero-cycle class in .    Curve classes under deformations  We return to an arbitrary compact IHS manifold . Let be the class of a rational curve, and define its BBF-dual class by This is the convention of . The class is nonzero by Kähler positivity. It has type because integration over annihilates and the BBF form has Hodge orthogonality.  Transport and through a small deformation. The Poincaré dual of has type exactly when has type . In period coordinates this locus is It is a smooth hypersurface through the original point by . This is the necessary Hodge condition for the curve to deform. A sufficient condition concerns the dimension of its own deformation space.   (Amerik–Verbitsky)  Let be a rational curve, and let be an irreducible component of the locus swept out by its full deformations. Suppose is minimal: with respect to a fixed Kähler form, it has the smallest degree among rational curves in through a general point of . Then its deformation family has dimension , and deforms over every sufficiently small deformation of in .   This is . Minimality concerns the Kähler degree of curves in the swept locus. A line in a Lagrangian projective space satisfies it: every effective curve class on is a positive integral multiple of the line class, and computes the full local family.  There is also a dimension criterion for projective families that does not require choosing a minimal curve. To state it precisely, write for the moduli stack of genus-zero stable maps of class : the source is a connected nodal curve of arithmetic genus zero, and the map has only finitely many automorphisms. Near the normalization map of an irreducible rational curve, smooth domains form an open subset and this is the unparametrized map space considered earlier. Existence and properness of the relative stable-map space are external results in the following theorem; no assertion of smoothness is implicit in this notation.   (Charles–Mongardi–Pacienza)  Let be a smooth projective morphism over a smooth connected quasiprojective complex variety, with IHS fibers of dimension . Fix , and a global flat integral class of type on every fiber. Let be the normalization map of a rational curve with Poincaré-dual class . If is an irreducible component through of dimension , every irreducible component of the relative stable-map space that contains dominates . In particular, lies in a component that dominates .   We quote . Its more general statement allows a nodal genus-zero source, provided the map is generically unramified on every irreducible component. Our normalization map satisfies that hypothesis. The dimensions are dimensions of stable-map stacks; at this birational map there are no stabilizer dimensions to subtract. A dominating relative component is proper over , so its image is also closed and is therefore all of . After a suitable generically finite base change it gives a family of stable maps; special domains may be reducible.  For a line in a Lagrangian projective space the dimension hypothesis follows from . The first persistence theorem applies to its full small analytic Hodge locus. The second applies to projective families carrying its flat Hodge class and also controls stable limits. The minimality or dimension hypothesis is what proves persistence along the Hodge locus. These are the persistence results for curve classes used in .   "
},
{
  "id": "hkg-map-deformation-estimate",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-map-deformation-estimate",
  "type": "Proposition",
  "number": "17.1",
  "title": "",
  "body": " Let be a complex manifold and a holomorphic map. The tangent space to the local space of maps is , and every irreducible component through has dimension at least If is a smooth embedded compact curve, the embedded deformation space has tangent space , with obstructions in .  "
},
{
  "id": "hkg-ran-rational-bound",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-ran-rational-bound",
  "type": "Theorem",
  "number": "17.2",
  "title": "(Ran).",
  "body": " (Ran)  Every irreducible component of the local deformation space of a rational curve in an IHS manifold of dimension has dimension at least .  Choose a hyperkähler metric on , with Kähler form , and consider its twistor space . Take the coordinate centered at the original complex structure. The holomorphic symplectic form on the fiber is, by , Put . The integral of a holomorphic or antiholomorphic two-form over vanishes, whereas . Therefore In a sufficiently small neighborhood of , the class can consequently be represented by a holomorphic curve in a twistor fiber only over .  Now deform as a map into . The degree of its composition with is locally constant and initially zero. A holomorphic map of degree zero is constant, so every nearby map lies in one fiber. Its homology class, identified using the smooth product underlying the twistor family, remains . The preceding integral forces that fiber to be . Thus the reduced map germs into and into have the same underlying local space and the same dimensions.  On the original fiber, the tangent sequence of the twistor projection gives The middle bundle has rank and degree zero, hence Euler characteristic . The map deformation estimate gives this lower bound for every component of its map germ. Removing the three-dimensional parametrization group proves the assertion.  "
},
{
  "id": "hkg-line-normal-splitting",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-line-normal-splitting",
  "type": "Proposition",
  "number": "17.3",
  "title": "",
  "body": " Let be a Lagrangian submanifold of an IHS manifold , and let be a line. Then In particular, and . The local embedded deformation space of in is smooth, and all sufficiently small deformations are lines in .  By , the symplectic form identifies with .  A line in projective space has . For instance, its ideal is generated by independent linear equations, so its conormal bundle is . The tangent sequence splits because . Dualizing gives  The normal sequence for is therefore Its extension class belongs to This proves the splitting. The elementary formulas , , , and give the stated dimensions.  The lines in form the Grassmannian , of dimension . Their universal family gives a map from to the embedded deformation space in . Its tangent map at is which is an isomorphism by the normal sequence and . Distinct lines give distinct embedded curves, so the local deformation space has dimension at least . Its tangent space has exactly that dimension. Its local ring is consequently regular, and the map from is a local isomorphism. This proves smoothness and the final assertion. Since is compact, its image is also a whole irreducible component of the embedded deformation space; its swept locus is .  "
},
{
  "id": "hkg-lines-small-dimensions",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-lines-small-dimensions",
  "type": "Example",
  "number": "17.4",
  "title": "",
  "body": " For , the projective space is the curve itself, , and the curve is rigid on the K3 surface. For , a Lagrangian plane contains a two-dimensional family of lines, parametrized by the dual plane. Blowing up the plane and contracting along the other ruling gives the local Mukai transformation of . The normal calculation identifies its curve family without asserting that an arbitrary normal bundle determines a whole analytic neighborhood.  "
},
{
  "id": "hkg-def-coisotropic",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-def-coisotropic",
  "type": "Definition",
  "number": "17.5",
  "title": "",
  "body": " In a symplectic vector space , let . A subspace is isotropic if , and coisotropic if . An irreducible reduced subvariety is coisotropic if its tangent spaces on are coisotropic. For such a subvariety its characteristic distribution is  "
},
{
  "id": "hkg-coisotropic-linear-algebra",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-coisotropic-linear-algebra",
  "type": "Proposition",
  "number": "17.6",
  "title": "",
  "body": " Let have codimension , where . Then Coisotropy is equivalent to , and implies . In that case the rank of the restricted alternating form is . Every hyperplane is coisotropic, and an -dimensional subspace is coisotropic precisely when it is Lagrangian.  The first kernel equality is the definition of orthogonality. The symplectic isomorphism takes to the annihilator of , which has dimension . Thus the kernel has dimension at most , with equality exactly when . This inclusion requires . The rank formula follows by subtracting the kernel dimension from .  For a hyperplane the restriction is an alternating form on an odd-dimensional space. Its kernel is nonzero and has dimension at most one, so it has dimension one. Finally, when , equality is precisely the Lagrangian condition.  "
},
{
  "id": "hkg-characteristic-frobenius",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-characteristic-frobenius",
  "type": "Proposition",
  "number": "17.7",
  "title": "",
  "body": " For a coisotropic of codimension , the distribution is a holomorphic subbundle of rank and is closed under Lie brackets. Locally on there is a holomorphic submersion whose fibers are its leaves, and a holomorphic symplectic form with .  Constant rank makes the kernel a holomorphic subbundle. Write ; it is closed. If are local sections of the kernel, Cartan's formula gives Thus their bracket remains in the kernel.  The local holomorphic Frobenius argument is as follows. A nonvanishing section can be made a coordinate vector field by its holomorphic local flow. Involutivity makes that flow preserve the distribution. Choose a transverse slice, apply the same construction to the induced distribution of rank one less on the slice, and transport its coordinates by the first flow. Induction produces coordinates in which the distribution is spanned by the . Projection to the coordinates is the required submersion.  The kernel condition says that has no terms. The equations say that its remaining coefficients are independent of the . Hence it is the pullback of a two-form on . This form is closed; it is nondegenerate because the entire kernel of consists of the vertical directions.  "
},
{
  "id": "hkg-divisor-characteristic-line",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-divisor-characteristic-line",
  "type": "Corollary",
  "number": "17.8",
  "title": "",
  "body": " Every smooth hypersurface has a characteristic line bundle If a compact characteristic leaf is isomorphic to , then .  The symplectic isomorphism takes the conormal line to the symplectic orthogonal of , which is exactly . This gives the first isomorphism; adjunction and give the second. Along a smooth compact leaf the line distribution is its tangent bundle. Thus , giving the intersection number.  "
},
{
  "id": "hkg-characteristic-nonalgebraic-leaves",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-characteristic-nonalgebraic-leaves",
  "type": "Example",
  "number": "17.9",
  "title": "",
  "body": " A characteristic foliation need not have compact leaves. Let , let , and choose a real irrational number . The translation-invariant form is holomorphic symplectic. On the hypersurface , its kernel is spanned by . A leaf has parametrization . There is no nonzero with both and in . Consequently this immersed complex line cannot be a compact elliptic subtorus and is not closed. This example is a holomorphic symplectic torus; it illustrates the distinction between a local leaf space and an algebraic quotient.  "
},
{
  "id": "hkg-def-algebraically-coisotropic",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-def-algebraically-coisotropic",
  "type": "Definition",
  "number": "17.10",
  "title": "",
  "body": " A codimension- coisotropic subvariety is algebraically coisotropic if there is a dominant rational map , with , whose general fibers are the closures of its characteristic leaves. Equivalently, on suitable dense smooth open sets it is a submersion with connected fibers and for a holomorphic symplectic form on that open part of . The form is not required to extend nondegenerately across a compactification of .  "
},
{
  "id": "hkg-two-form-rational-fibers",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-two-form-rational-fibers",
  "type": "Lemma",
  "number": "17.11",
  "title": "",
  "body": " Let be a smooth proper morphism of complex manifolds with connected fibers , and suppose for every fiber. Every closed holomorphic two-form on is the pullback of a unique closed holomorphic two-form on .  The restriction of to a fiber is zero by the second vanishing. Fix and . For a vertical tangent vector along , define using any local holomorphic lift of . Two lifts differ by a vertical vector, so the definition is independent of the lift and gives a global holomorphic one-form on . The first vanishing makes it zero. Thus annihilates every vertical tangent vector.  For a vertical local vector field , closedness gives . In local submersion coordinates the form therefore has only base components, with coefficients constant along the fiber directions. Connected fibers make these local descended forms agree; equivalently, properness and connectedness give . They define a unique form on , and its closedness follows by pullback through a submersion.  "
},
{
  "id": "hkg-av-swept-coisotropic",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-av-swept-coisotropic",
  "type": "Theorem",
  "number": "17.12",
  "title": "(Amerik–Verbitsky).",
  "body": " (Amerik–Verbitsky)  Let be a rational curve on a projective IHS manifold. Let be an irreducible component of the locus swept out by the full deformations of in , and let . Then is coisotropic. The general fibers of the maximal rationally connected quotient of a desingularization of have dimension . On a dense smooth open set they are its characteristic leaves. In particular is algebraically coisotropic.  "
},
{
  "id": "hkg-uniruled-divisor-leaves",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-uniruled-divisor-leaves",
  "type": "Corollary",
  "number": "17.13",
  "title": "",
  "body": " Every uniruled prime divisor on a projective IHS manifold is algebraically coisotropic. The closure of a general characteristic leaf is a rational curve, and the base of its rational quotient has dimension .  First, is not uniruled. Indeed, a covering family would, after slicing its parameter space and making a generically finite base change, give a smooth family of rational curves with and a dominant generically finite evaluation map to . Pullback would give a nonzero holomorphic top form on . But on every fiber of , the canonical bundle of restricts to . Any holomorphic top form vanishes along every such fiber and hence vanishes, a contradiction.  Let be the uniruled divisor, and choose a covering family of rational curves on it. Complete this family to an irreducible component of the rational-curve deformation space in . Its swept locus contains ; it cannot be all of by the preceding argument. Its irreducible closure is therefore . Apply with . The general rational-quotient fiber on a resolution is a smooth rationally connected curve, hence . Its image is the closure of a characteristic leaf on ; the leaf itself can omit points in the singular locus of .  "
},
{
  "id": "hkg-rational-chains-constant-cycle",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-rational-chains-constant-cycle",
  "type": "Proposition",
  "number": "17.14",
  "title": "",
  "body": " If two points of can be joined by a chain of rational curves, they have the same class in . In particular, the image in of a proper rationally chain connected fiber is a constant-cycle subvariety: all of its points determine the same zero-cycle class.  On , the difference of any two points is the divisor of a rational function. Push this relation forward along the normalization map of a rational curve. Its points consequently have the same class in . Applying this successively along a connected chain proves the assertion. For a proper rationally chain connected variety over , any two points can be joined by such a chain; this extension from general points is part of the standard rational-connectedness theory.  "
},
{
  "id": "hkg-minimal-curve-hodge-persistence",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-minimal-curve-hodge-persistence",
  "type": "Theorem",
  "number": "17.15",
  "title": "(Amerik–Verbitsky).",
  "body": " (Amerik–Verbitsky)  Let be a rational curve, and let be an irreducible component of the locus swept out by its full deformations. Suppose is minimal: with respect to a fixed Kähler form, it has the smallest degree among rational curves in through a general point of . Then its deformation family has dimension , and deforms over every sufficiently small deformation of in .  "
},
{
  "id": "hkg-cmp-minimal-dimension-persistence",
  "level": "2",
  "url": "hkg-rational-curves.html#hkg-cmp-minimal-dimension-persistence",
  "type": "Theorem",
  "number": "17.16",
  "title": "(Charles–Mongardi–Pacienza).",
  "body": " (Charles–Mongardi–Pacienza)  Let be a smooth projective morphism over a smooth connected quasiprojective complex variety, with IHS fibers of dimension . Fix , and a global flat integral class of type on every fiber. Let be the normalization map of a rational curve with Poincaré-dual class . If is an irreducible component through of dimension , every irreducible component of the relative stable-map space that contains dominates . In particular, lies in a component that dominates .  "
},
{
  "id": "hkg-notation-index",
  "level": "1",
  "url": "hkg-notation-index.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   Metrics and periods   An IHS manifold, its underlying smooth manifold, and its dimension; . , .  A hyperkähler metric and parallel quaternionic triple; for an induced complex structure . , .  A holomorphic symplectic two-form in the geometric chapters. In stable-object moduli, is instead a stability condition. , .  The induced complex structure, the fibre , and the twistor space . , .  For a compact hyperkähler metric of holonomy , the oriented positive real three-plane spanned by . .  The oriented period two-plane inside . .  The Kuranishi germ of deformations of with identified central fibre. .  A marking and its fixed target lattice. .  The period domain and the period map, which sends a marked manifold to . , .     Lattices and moduli   The primitive integral BBF bilinear form; . .  The dual lattice, the finite group , and its quadratic form with values in when is even. .  Degree-two parallel-transport operators from to itself, and the group preserving the positive orientation. The first is a subgroup of the second. , positive orientation .  For type, , the distinguished -orbit of primitive isometric embeddings of into the Mukai lattice. .  On , , half the reduced Hilbert–Chow exceptional divisor class: , . .  The Hilbert scheme of length- subschemes and the sum-zero fibre in , respectively. Both have dimension . , .  For objects on a surface, the Mukai vector and its Mukai square . On an abelian surface, . , .  The algebraic Mukai lattices of a projective K3 or abelian surface. , .  Stable-object moduli with a fixed vector and a fixed lift of its phase. In the nonempty cases of the moduli theorems, its dimension is . , .  The Albanese fibre for objects on an abelian surface. Under the primitive-vector and genericity hypotheses of , with , its dimension is and its second cohomology is Mukai-isometric to .     Cohomology and characteristic classes   Singular cohomology, Betti numbers, and Hodge numbers. The superscript is ordinary degree; omitted coefficients mean , and . , .  Line bundles, , and the rank of this quotient. For IHS manifolds, . , .  The constants in and . The second requires , , whose parallel transport has type on all small deformations; . , .  The degree-four cup-product image of the inverse BBF tensor: , with no factor . .  Chern classes have degree , with ; the indicated Todd component has degree . In the Chow chapter, Chern classes also denote the specified Chow classes. , , .  The discriminant of a rank- bundle. Its -invariance characterizes projective hyperholomorphicity under the polystability hypothesis. , .  The Riemann–Roch polynomial, satisfying . .  The degree- part of the subalgebra generated by , with ordinary cohomological grading; is the image of . .  Cup product by , its Lefschetz lowering operator when defined, and . , .  The Lie subalgebra of generated by the Lefschetz triples, and its subalgebra . .  The reduced LLV subalgebra , identified by restriction with . , .  The auxiliary orthogonal space , with and . The respective -weights are . , .     Cones, cycles, and degenerations   The positive cone, Kähler cone, and union of pullbacks of Kähler cones of birational IHS models. , .  Divisor nef classes and the cone generated by movable integral divisors; denotes its closure. , .  The cones generated by rational points of the nef cone and of the closed movable cone, respectively. .  The rational BBF dual of a curve: . .  Codimension- cycles and zero-cycles modulo rational equivalence, and the cycle class map to degree- cohomology. A subscript means rational coefficients. , .  The rational Chow subrings generated by divisors, and by divisors together with the Chern classes of , respectively. .  In bundle theory, is curvature, also abbreviated . In fibration arguments, is a fibre. , , .  Monodromy on , its logarithm after unipotent base change, and when , with . A block of length has index . , .  The nilpotent weight filtration centered at . For limiting cohomology in degree , the center of is . , .  For a projective Lagrangian fibration and an ample rational base class , let . Then has center on total cohomology. The perverse normalization is , with indices . , .    "
},
{
  "id": "hkg-references",
  "level": "1",
  "url": "hkg-references.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Nicolas Addington. On two rationality conjectures for cubic fourfolds. Mathematical Research Letters 23 (2016), 1–13. Numbered references use arXiv:1405.4902v4 . Published article .  Ekaterina Amerik and Frédéric Campana. On families of lagrangian tori on hyperkähler manifolds. Journal of Geometry and Physics 71 (2013), 53–57. Numbered references use arXiv:1303.0613v1 . Published article .  Ekaterina Amerik and Misha Verbitsky. Collections of parabolic orbits in homogeneous spaces, homogeneous dynamics and hyperkähler geometry. Numbered references use arXiv:1604.03927v1 , especially Theorem 3.17.  Ekaterina Amerik and Misha Verbitsky. Morrison–Kawamata cone conjecture for hyperkähler manifolds. Annales scientifiques de l'École Normale Supérieure 50 (2017), 973–993. Published article ; numbered references use the author's revised version, 7 September 2015 . The later boundedness theorem in includes .  Ekaterina Amerik and Misha Verbitsky. Rational curves on hyperkähler manifolds. International Mathematics Research Notices 2015, 10385–10404. Citations to numbered statements use arXiv:1401.0479v1 .  Ekaterina Amerik and Misha Verbitsky. Hyperbolic geometry of the ample cone of a hyperkähler manifold. Numbered references use arXiv:1511.02403v1 .  Ekaterina Amerik and Misha Verbitsky. Teichmüller space for hyperkähler and symplectic structures. Journal of Geometry and Physics 97 (2015), 44–50. Numbered references use the published version , especially Definitions 4.5 and 4.8 and Theorem 4.9. DOI .  Ekaterina Amerik and Misha Verbitsky. Rational curves and MBM classes on hyperkähler manifolds: a survey. In Rationality of varieties , 75–96, Birkhäuser, 2021. arXiv:2011.08727v1 .  Benjamin Bakker and Christian Lehn. The global moduli theory of symplectic varieties. Journal für die reine und angewandte Mathematik 790 (2022), 223–265. Numbered references use arXiv:1812.09748v4 ; published article .  Benjamin Bakker and Christian Schnell. A Hodge-theoretic proof of Hwang's theorem on base manifolds of Lagrangian fibrations.  arXiv:2311.08977v1 , 2023.  Arend Bayer and Emanuele Macrì. MMP for moduli of sheaves on K3s via wall-crossing: nef and movable cones, Lagrangian fibrations. Inventiones Mathematicae 198 (2014), 505–590. Numbered references use the revised arXiv:1301.6968v4 .  Arend Bayer and Emanuele Macrì. Projectivity and birational geometry of Bridgeland moduli spaces.  arXiv:1203.4613v2 . Numbered references use this version.  Arend Bayer, Martí Lahoz, Emanuele Macrì, Howard Nuer, Alexander Perry, and Paolo Stellari. Stability conditions in families. Publications Mathématiques de l'IHÉS 133 (2021), 157–325. arXiv:1902.08184v4 ; author's version .  Arend Bayer, Martí Lahoz, Emanuele Macrì, and Paolo Stellari. Stability conditions on Kuznetsov components.  arXiv:1703.10839v5 .  Arnaud Beauville. Variétés kählériennes dont la première classe de Chern est nulle. Journal of Differential Geometry 18 (1983), 755–782. Published article .  Arnaud Beauville and Ron Donagi. La variété des droites d'une hypersurface cubique de dimension 4. Comptes Rendus de l'Académie des Sciences de Paris, Série I, 301 (1985), 703–706.  Arnaud Beauville. Symplectic singularities. Inventiones Mathematicae 139 (2000), 541–549. Numbered references use arXiv:math\/9903070v1 ; published article .  Arnaud Beauville. On the splitting of the Bloch–Beilinson filtration. In Algebraic cycles and motives , volume 2, London Mathematical Society Lecture Note Series 344, Cambridge University Press, 2007, 38–53. arXiv:math\/0403356 .  Arnaud Beauville. Variétés kählériennes compactes avec . In Géométrie des surfaces K3: modules et périodes — Séminaire Palaiseau , Astérisque 126 (1985), 181–192. Published article .  Arnaud Beauville and Claire Voisin. On the Chow ring of a K3 surface. Journal of Algebraic Geometry 13 (2004), 417–426. Author's final version .  Thorsten Beckmann and Jieao Song. Second Chern class and Fujiki constants of hyperkähler manifolds.  arXiv:2201.07767v2 , 2022. Numbered references are to this version.  Gwyn Bellamy. On singular Calogero–Moser spaces. Bulletin of the London Mathematical Society 41 (2009), 315–326. Numbered references use arXiv:0707.3694v3 ; published article .  Tom Bridgeland. Stability conditions on K3 surfaces. Duke Mathematical Journal 141 (2008), 241–291. Numbered references use arXiv:math\/0307164v2 .  François Charles, Giovanni Mongardi, and Gianluca Pacienza. Families of rational curves on holomorphic symplectic varieties and applications to 0-cycles. Compositio Mathematica 160 (2024), 288–316. Numbered references use the authors' final manuscript ; arXiv:1907.10970 .  Olivier Debarre and Claire Voisin. Hyper-Kähler fourfolds and Grassmann geometry. Journal für die reine und angewandte Mathematik 649 (2010), 63–87. arXiv:0904.3974 .  Jean-Pierre Demailly and Mihai Păun. Numerical characterization of the Kähler cone of a compact Kähler manifold. Annals of Mathematics 159 (2004), 1247–1274. arXiv:math\/0105176 .  Tien-Cuong Dinh and Nessim Sibony. Super-potentials for currents on compact Kähler manifolds and dynamics of automorphisms. Journal of Algebraic Geometry 19 (2010), 473–529. arXiv:0804.0860v1 . Numbered references use this version.  Philip Engel and Mirko Mauri. Hyperkähler SYZ conjecture.  arXiv:2610.12277v1 , submitted 8 October 2026. Statements in these notes refer to this preprint version.  John Fogarty. Algebraic families on an algebraic surface. American Journal of Mathematics 90 (1968), 511–521.  Lie Fu. Beauville–Voisin conjecture for generalized Kummer varieties. International Mathematics Research Notices 2015, 3878–3898. Numbered references use arXiv:1309.4977v3 .  William Fulton. Intersection theory. Second edition, Ergebnisse der Mathematik und ihrer Grenzgebiete 2, Springer, 1998. Publisher's edition .  Kieran G. O'Grady. Desingularized moduli spaces of sheaves on a K3. Journal für die reine und angewandte Mathematik 512 (1999), 49–117. Construction ; irreducibility and deformation type .  Kieran G. O'Grady. A new six-dimensional irreducible symplectic variety. Journal of Algebraic Geometry 12 (2003), 435–505. arXiv:math\/0010187 .  Rebecca Glover and Justin Sawon. Generalized twistor spaces for hyperkähler manifolds.  arXiv:1309.4759v1 , 2013.  Lothar Göttsche. The Betti numbers of the Hilbert scheme of points on a smooth projective surface. Mathematische Annalen 286 (1990), 193–207. Published article .  Lothar Göttsche. Hilbert schemes of points on surfaces. Proceedings of the International Congress of Mathematicians, Beijing 2002, volume II, 483–494. Numbered references use arXiv:math\/0304302v1 .  Daniel Greb, Stefan Kebekus, and Thomas Peternell. Singular spaces with trivial canonical class. In Minimal models and extremal rays , Advanced Studies in Pure Mathematics 70, Mathematical Society of Japan, 2016, 67–114. Numbered references use arXiv:1110.5250v3 .  Daniel Greb, Christian Lehn, and Sönke Rollenske. Lagrangian fibrations on hyperkähler manifolds—On a question of Beauville. Annales scientifiques de l'École Normale Supérieure (4) 46 (2013), 375–403. Numbered references use arXiv:1105.3410v3 . Published article .  Daniel Greb and Christian Lehn. Base manifolds for Lagrangian fibrations on hyperkähler manifolds.  arXiv:1303.3919v2 , 2013.  Mark Green, Yoon-Joo Kim, Radu Laza, and Colleen Robles. The LLV decomposition of hyper-Kähler cohomology. Mathematische Annalen 382 (2022), 1517–1590. Numbered references use arXiv:1906.03432v4 .  Andrew Harder, Zhiyuan Li, Junliang Shen, and Qizheng Yin. for Lagrangian fibrations and degenerations of hyper-Kähler manifolds. Numbered references use arXiv:1908.07510v1 , 2019.  Daniel Huybrechts, Emanuele Macrì, and Paolo Stellari. Derived equivalences of K3 surfaces and orientation. Duke Mathematical Journal 149 (2009), 461–507. arXiv:0710.1645v4 .  Daniel Huybrechts. Compact hyperkähler manifolds: basic results. Inventiones Mathematicae 135 (1999), 63–113. Subsection references use arXiv:alg-geom\/9705025v1 . The corrected projectivity proof is in .  Daniel Huybrechts. Erratum: Compact hyperkähler manifolds: basic results. Inventiones Mathematicae 152 (2003), 209–212. arXiv:math\/0106014v1 .  Daniel Huybrechts. Lectures on K3 surfaces. Cambridge Studies in Advanced Mathematics 158, Cambridge University Press, 2016. Author's manuscript .  Daniel Huybrechts and Manfred Lehn. The geometry of moduli spaces of sheaves. Second edition, Cambridge Mathematical Library, Cambridge University Press, 2010.  Daniel Huybrechts and Mirko Mauri. Lagrangian fibrations. Milan Journal of Mathematics 90 (2022), 459–483. arXiv:2108.10193v2 .  Daniel Huybrechts and Mirko Mauri. On type II degenerations of hyperkähler manifolds. Numbered references use arXiv:2108.01587v2 , revised 31 January 2022.  Daniel Huybrechts. A global Torelli theorem for hyperkähler manifolds (after M. Verbitsky). Séminaire Bourbaki, exposé 1040, Astérisque 348 (2012), 375–403. Published exposition .  Daniel Huybrechts and Chenyang Xu. Lagrangian fibrations of hyperkähler fourfolds.  arXiv:1902.10440v2 ; published article . Numbered references use the preprint version.  Jun-Muk Hwang. Base manifolds for fibrations of projective irreducible symplectic manifolds. Inventiones Mathematicae 174 (2008), 625–644. arXiv:0711.3224 .  Jun-Muk Hwang and Richard M. Weiss. Webs of Lagrangian tori in projective symplectic manifolds. Inventiones Mathematicae 192 (2013), 83–109. Numbered references use arXiv:1201.2369v2 . Published article .  Kazuhiro Ito, Tetsushi Ito, Teruhisa Koshikawa, Teppei Takamatsu, and Haitao Zou. Arithmetic monodromy of hyper-Kähler varieties over -adic fields.  arXiv:2507.13713v1 , 2025. Cited for its account of the status of the geometric Nagai conjecture.  Nigel J. Hitchin, Anders Karlhede, Ulf Lindström, and Martin Roček. Hyperkähler metrics and supersymmetry. Communications in Mathematical Physics 108 (1987), 535–589. Published article .  Dmitry Kaledin. Symplectic singularities from the Poisson point of view. Journal für die reine und angewandte Mathematik 600 (2006), 135–156. Numbered references use arXiv:math\/0310186v4 ; published article .  Dmitry Kaledin and Misha Verbitsky. Non-Hermitian Yang–Mills connections. Selecta Mathematica 4 (1998), 279–320. arXiv:alg-geom\/9606019v1 .  Dmitry Kaledin, Manfred Lehn, and Christoph Sorger. Singular symplectic moduli spaces. Inventiones Mathematicae 164 (2006), 591–614. Numbered references use arXiv:math\/0504202v1 ; published article .  Shoshichi Kobayashi. Differential geometry of complex vector bundles. Publications of the Mathematical Society of Japan 15, 1987. Numbered references use the 2013 re-typeset edition .  Shoshichi Kobayashi. First Chern class and holomorphic tensor fields. Nagoya Mathematical Journal 77 (1980), 5–11. Published article .  János Kollár, Radu Laza, Giulia Saccà, and Claire Voisin. Remarks on degenerations of hyper-Kähler manifolds. Annales de l'Institut Fourier 68 (2018), 2837–2882. Numbered references use arXiv:1704.02731v2 .  János Kollár and Shigefumi Mori. Birational geometry of algebraic varieties. Cambridge Tracts in Mathematics 134, Cambridge University Press, 1998. Publisher's edition .  Robert Laterveer. A strong version of the Beauville–Voisin conjecture for certain hyper-Kähler fourfolds. June 2026 preprint, arXiv:2606.21969v1 .  Robert Lazarsfeld. Positivity in algebraic geometry I: Classical setting: line bundles and linear series. Ergebnisse der Mathematik und ihrer Grenzgebiete 48, Springer, 2004. Publisher's edition .  Christian Lehn. Deformations of Lagrangian subvarieties of holomorphic symplectic manifolds. Mathematical Research Letters 23 (2016), 473–497. Numbered references use arXiv:1112.1887v3 , revised 24 April 2015. Published article .  Manfred Lehn and Christoph Sorger. La singularité de O'Grady. Journal of Algebraic Geometry 15 (2006), 753–770. Numbered references use arXiv:math\/0504182v2 .  Eduard Looijenga and Valery A. Lunts. A Lie algebra attached to a projective variety. Inventiones Mathematicae 129 (1997), 361–412. arXiv:alg-geom\/9604014v1 .  Eduard Looijenga. Teichmüller spaces and Torelli theorems for hyperkähler manifolds. Mathematische Zeitschrift 298 (2021), 261–279; first published online in 2020. Numbered references use the published article , especially §3.4 and Corollary 5.4.  Simon M. Salamon. Cohomology of Kähler manifolds with .  arXiv:dg-ga\/9502005v1 . Numbered references use this version.  Alina Marian and Xiaolei Zhao. On the group of zero-cycles of holomorphic symplectic varieties. Épijournal de Géométrie Algébrique 4 (2020), article 3, 5 pp. Numbered references use arXiv:1711.10045v3 ; published article .  Eyal Markman. A survey of Torelli and monodromy results for holomorphic-symplectic varieties.  arXiv:1101.4606v3 , 2011. Numbered references are to this version.  Daisuke Matsushita. Addendum to: On fibre space structures of a projective irreducible symplectic manifold. Topology 40 (2001), 431–432. arXiv:math\/9903045v1 .  Daisuke Matsushita. Higher direct images of dualizing sheaves of Lagrangian fibrations. American Journal of Mathematics 127 (2005), 243–259. Numbered references use arXiv:math\/0010283v1 . Published article .  Daisuke Matsushita. On fibre space structures of a projective irreducible symplectic manifold. Topology 38 (1999), 79–83. arXiv:alg-geom\/9709033v1 .  Davesh Maulik and Andrei Neguţ. Lehn's formula in Chow and conjectures of Beauville and Voisin. Journal of the Institute of Mathematics of Jussieu 21 (2022), 933–971. Numbered references use arXiv:1904.05262v2 ; published article .  Hiroki Minamide, Shintarou Yanagida, and Kōta Yoshioka. Some moduli spaces of Bridgeland's stability conditions. International Mathematics Research Notices 2014 (19), 5264–5327. Numbered references use arXiv:1111.6187v3 . Published article .  Shigeru Mukai. Symplectic structure of the moduli space of sheaves on an abelian or K3 surface. Inventiones Mathematicae 77 (1984), 101–116.  David Mumford. Rational equivalence of 0-cycles on surfaces. Journal of Mathematics of Kyoto University 9 (1969), 195–204. Published article . The printed volume is dated 1969; some bibliographies use 1968.  Yasunari Nagai. On monodromies of a degeneration of irreducible symplectic Kähler manifolds. Mathematische Zeitschrift 258 (2008), 407–426. Numbered references use arXiv:math\/0605223v3 .  Yoshinori Namikawa. A note on symplectic singularities.  arXiv:math\/0101028v1 , 2001.  Marc A. Nieper-Wißkirchen. Calculation of Rozansky–Witten invariants on the Hilbert schemes of points on a K3 surface and the generalised Kummer varieties. Documenta Mathematica 8 (2003), 591–623. Published article .  August Newlander and Louis Nirenberg. Complex analytic coordinates in almost complex manifolds. Annals of Mathematics 65 (1957), 391–404. Published article .  Keiji Oguiso. A remark on dynamical degrees of automorphisms of hyperkähler manifolds. Numbered references use arXiv:0901.4827v3 .  OpenAI. Projective-space bases of Lagrangian fibrations. Preprint, 23 September 2026. Repository PDF . The cited statement is Theorem 1.1 of the 98-page version inspected on 21 October 2026.  Ángel David Ríos Ortiz, with an appendix by Yalong Cao and Chen Jiang. Riemann–Roch polynomials of the known hyperkähler manifolds. Bulletin de la Société Mathématique de France 152 (2024), 169–184. Numbered references use arXiv:2006.09307v2 . Published article .  Ziv Ran. Hodge theory and deformations of maps. Compositio Mathematica 97 (1995), 309–328. Published article .  Ziv Ran. Lifting of cohomology and unobstructedness of certain holomorphic maps. Bulletin of the American Mathematical Society (N.S.) 26 (1992), 113–117. Numbered references use arXiv:math\/9201267v1 . Published article .  Antonio Rapagnetta. On the Beauville form of the known irreducible symplectic varieties. Mathematische Annalen 340 (2008), 77–95. arXiv:math\/0606409 .  Antonio Rapagnetta. Topological invariants of O'Grady's six dimensional irreducible symplectic variety. Mathematische Zeitschrift 256 (2007), 1–34. arXiv:math\/0406026 .  Emanuel Reinecke. Autoequivalences of twisted K3 surfaces.  arXiv:1711.00846v2 .  Ulrike Rieß. On the Chow ring of birational irreducible symplectic varieties. Manuscripta Mathematica 145 (2014), 473–501. Numbered references use arXiv:1304.4404v2 ; published article .  Ulrike Rieß. On Beauville's conjectural weak splitting property. International Mathematics Research Notices 2016, 6133–6150. Numbered references use arXiv:1409.3484v2 , titled On the Beauville conjecture ; published article .  Wilfried Schmid. Variation of Hodge structure: the singularities of the period mapping. Inventiones Mathematicae 22 (1973), 211–319. Article PDF .  Junliang Shen and Qizheng Yin, with an appendix by Claire Voisin. Topology of Lagrangian fibrations and Hodge theory of hyper-Kähler manifolds. Numbered references use arXiv:1812.10673v5 , revised 23 January 2021.  Andrey Soldatenkov. Limit mixed Hodge structures of hyperkähler manifolds. Moscow Mathematical Journal 20 (2020), 423–436. arXiv:1807.04030v3 .  Karen Uhlenbeck and Shing-Tung Yau. On the existence of Hermitian–Yang–Mills connections in stable vector bundles. Communications on Pure and Applied Mathematics 39, Supplement 1 (1986), S257–S293. Published article .  Misha Verbitsky. Cohomology of compact hyperkaehler manifolds and its applications. Geometric and Functional Analysis 6 (1996), 601–612. arXiv:alg-geom\/9511009v1 .  Misha Verbitsky. Coherent sheaves on general K3 surfaces and tori.  arXiv:math\/0205210v1 , 2002.  Misha Verbitsky. Hypercomplex varieties. Communications in Analysis and Geometry 7 (1999), 355–396. Numbered references use arXiv:alg-geom\/9703016v1 .  Misha Verbitsky. Hyperholomorphic bundles over a hyper-Kähler manifold. Journal of Algebraic Geometry 5 (1996), 633–669. Numbered references use arXiv:alg-geom\/9307008v1 .  Misha Verbitsky. Holomorphic symplectic geometry and orbifold singularities. Asian Journal of Mathematics 4 (2000), 553–563. Numbered references use arXiv:math\/9903175v3 , which corrects Claim 4.3.  Misha Verbitsky. Mapping class group and a global Torelli theorem for hyperkähler manifolds. Duke Mathematical Journal 162 (2013), 2929–2986. arXiv:0908.4121 . Read with the erratum .  Misha Verbitsky. Erratum to: Mapping class group and a global Torelli theorem for hyperkähler manifolds.  arXiv:1908.11772 , 2019.  Misha Verbitsky. Hyperkähler embeddings and holomorphic symplectic geometry II.  arXiv:alg-geom\/9403006v1 . Published as Tri-analytic subvarieties of hyper-Kähler manifolds , Geometric and Functional Analysis 5 (1995), 92–104. Numbered references use the preprint.  Claire Voisin. On the Chow ring of certain algebraic hyper-Kähler manifolds. Pure and Applied Mathematics Quarterly 4 (2008), 613–649. Author's final version .  Claire Voisin. Chow rings, decomposition of the diagonal, and the topology of families. Annals of Mathematics Studies 187, Princeton University Press, 2014. Numbered references here use the 156-page lecture version , whose chapter and theorem numbering differs from the published book.  Claire Voisin. Sur la stabilité des sous-variétés lagrangiennes des variétés symplectiques holomorphes. In Complex projective geometry , London Mathematical Society Lecture Note Series 179, Cambridge University Press, 1992, 294–303. Published chapter .  Claire Voisin. On Chern classes of Lagrangian fibered hyper-Kähler manifolds. Pure and Applied Mathematics Quarterly 21 (2025), 1393–1435. Numbered references use the author's published version ; arXiv:2305.09396 .  Shing-Tung Yau. On the Ricci curvature of a compact Kähler manifold and the complex Monge–Ampère equation, I. Communications on Pure and Applied Mathematics 31 (1978), 339–411.  Kōta Yoshioka. Moduli spaces of stable sheaves on abelian surfaces. Mathematische Annalen 321 (2001), 817–884. arXiv:math\/0009001 .  Kōta Yoshioka. Irreducibility of moduli spaces of vector bundles on K3 surfaces.  arXiv:math\/9907001v2 , 2000.  Kōta Yoshioka. Bridgeland's stability and the positive cone of the moduli spaces of stable objects on an abelian surface. Advanced Studies in Pure Mathematics 69 (2016), 473–537. Numbered references use arXiv:1206.4838v2 .  "
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
