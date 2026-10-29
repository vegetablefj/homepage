# 层论系列：四份笔记的目录与参考分工

本规划遵循 [经典数学内容笔记的构建框架](../classical-notes-framework.md) 与 [笔记撰写与维护](../../docs/note-authoring.md)。规划使用中文，数学正文使用英文，英文标题采用 sentence case。四份笔记按以下范围分工。第一份已于 2026-10-26 完成第 0–11 章、术语与假设附录及参考文献的首轮正文，保存为本地 PreTeXt 项目并完成本地构建与核查；第二份已于同日完成第 0–13 章、术语附录及参考文献的首轮正文，并完成本地构建与核查；第三、四份仍为规划。本轮不推送或部署。

## 1. 四份笔记的分工

| 编号 | 暂定英文标题 | 主要问题 | 主要背景 |
| --- | --- | --- | --- |
| I | Sheaves on topological spaces and cohomology | 局部数据怎样形成层，怎样用上同调研究整体障碍与计算？ | 任意拓扑空间；集合、Abel 群或固定交换环系数 |
| II | Sites, topoi, and ringed structures | 怎样推广“局部性”，并在一般赋环背景中组织模层、凝聚性及其操作？ | Grothendieck sites/topoi；赋环空间及凝聚模层的基础 |
| III | Support, six functors, and duality | 支集、proper-support 推前、非常逆像及对偶怎样在拓扑中实现？ | 以局部紧 Hausdorff 空间为主；流形是进一步的特例 |
| IV | Constructible and perverse sheaves | 分层有限性怎样与六函子、perverse 结构和奇点几何相互作用？ | 一般分层与粘合为共同基础；分开处理几何实现、栈及受控的 ind-scheme 扩展 |

**本轮不处理 étale cohomology。** Étale 拓扑只在 II 中作为一般 site 理论的一个主要例子，介绍覆盖、small/big sites、几何点与拓扑之间的关系。不安排 étale 上同调计算、étale 基变换与有限性定理、算术六函子、\(\ell\)-adic 范畴或权理论。

暂不纳入微局部层论、特征循环、\(\mathcal D\)-模及几何表示论。一般赋环结构与凝聚模层的基础归 II；拟凝聚层、凝聚层的完整代数或解析几何理论另有自己的背景与主线，几何上同调大定理留给相应笔记。IV 纳入必要的等变／商栈和有限阶段 ind-scheme 基础，不承诺任意 ind-stack 的完整理论。

这里采用“共享基础集中建立，依赖几何的结论分开处理”的方式。拓扑空间、site、赋环结构、流形与复代数簇不是彼此排斥的五类对象：赋环结构是一项额外结构，流形与复代数簇又有底层拓扑空间。四份笔记按新增的问题和假设分工，不按对象名称机械分割。

## 2. 共同约定与既有先修

### 2.1 统一的记号

- \(\Lambda\) 表示固定交换系数环；\(\Bbbk\) 表示系数域；几何底域记作 \(k\)。仅在复几何实现中设 \(k=\mathbf C\)，不与系数混用。
- \(\operatorname{Sh}(X)\) 表示集合层范畴，\(\operatorname{Sh}(X;\Lambda)\) 表示 \(\Lambda_X\)-模层范畴；一般结构层采用 \(\mathcal O_X\) 或 \(\mathcal O\)，模层范畴写作 \(\operatorname{Mod}(\mathcal O)\)。
- \(f^{-1}\) 表示层的逆像；赋环情形的 \(f^*\) 包含结构层的标量扩张。固定系数的拓扑情形中两者有典范识别，但仍说明识别的来源。
- \(\mathcal Hom\)、\(R\mathcal Hom\) 为内部 Hom；\(\operatorname{Hom}\)、\(R\operatorname{Hom}\) 为整体 Hom 及其导出版本。\(R\operatorname{Hom}\) 的具体目标范畴在使用处说明。
- \(D(X;\Lambda)\) 表示层的导出范畴，\(D^+(X;\Lambda)\)、\(D^b(X;\Lambda)\) 分别表示下有界及有界版本。采用上同调指标与既有同调代数笔记的移位、符号约定。
- \(Rf_!\dashv f^!\) 采用 III 的统一写法；这里 \(f^!\) 已表示导出层面的非常逆像。说明文献中的 \(Rf^!\)、\(f^{!}\) 等写法差别，不暗示它总是某个 Abel 范畴函子的右导出。
- 令 \(a_X:X\to\mathrm{pt}\)，记 \(\omega_X=a_X^!\Lambda\)，\(\mathbb D_X=R\mathcal Hom(-,\omega_X)\)。先定义对偶与比较映射，再说明在哪些对象上得到对偶等价。
- IV 的一般部分固定分层及 perversity，分别说明实维数、复维数与维数函数的使用。复几何的中间 perversity 采用复维数，光滑纯 \(d\) 维复簇上的局部系统 \(L\) 以 \(L[d]\) 归一化为 perverse；\(IC_X(L)\) 采用 perverse 归一化。栈与无限维背景的正规化另列约定。

### 2.2 先修的调用方式

范畴论笔记提供伴随、极限与余极限、Kan 延拓及必要的大小约定。同调代数笔记提供 Abel/Grothendieck 范畴、解消、谱序列、导出范畴、导出 tensor/Hom、\(t\)-结构、Brown 可表性、recollement 及抽象六函子。

层论系列须验证这些结果的适用条件，并给出具体几何构造；不重写一般同调代数的证明。现有同调代数笔记第 13–18 章尤其承担形式框架；对应目录见 [同调代数规划](../homological-algebra/README.md)。

每个重要结论均分开交代：空间或 topos 的条件、态射的条件、系数条件、导出范畴及有界性，以及额外的有限性或构造性条件。分别回答“构造存在”“比较映射是同构”“保持所选子范畴”，不把三者合并成一句没有条件的“六函子形式体系成立”。

## 3. 文献及其分工

以下缩写用于各章目录；具体写作时再把引用定位到命题、定理或稳定 tag。这里的章节分配是本规划对文献的取舍，并不表示整章照搬。

| 缩写 | 文献与入口 | 在本系列中的主要作用 |
| --- | --- | --- |
| KS90 | Kashiwara–Schapira, [Sheaves on Manifolds](https://link.springer.com/book/10.1007/978-3-662-02661-8) | II–III 章的拓扑层、支集、对偶与核；VIII、X 章的构造层及 perverse 理论。略过微局部主线 |
| KS06 | Kashiwara–Schapira, [Categories and Sheaves](https://link.springer.com/book/10.1007/3-540-27950-4) | 第 16–18 章的一般 site 与 Abel 层；前面的范畴论、同调代数通过既有笔记调用 |
| Schapira | Pierre Schapira, [An Introduction to Sheaves on Grothendieck Topologies](https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/SHV.pdf)，核查版本 2026-10-15 | sites、导出层、局部紧空间及流形的紧凑主线。该稿标注 work in progress；关键陈述与成熟文献交叉核查 |
| Iv | Iversen, [Cohomology of Sheaves](https://link.springer.com/book/10.1007/978-3-642-82783-9) | II–III 章的层论与紧支集；IV–VII 章的分析、对偶及 proper-support 推前；IX 章的 Borel–Moore 同调 |
| Br | Bredon, [Sheaf Theory, second edition](https://link.springer.com/book/10.1007/978-1-4612-0647-7) | I–III 章的拓扑层论、支集族、上同调比较；V 章的 Borel–Moore 理论，择要吸收 |
| ML–M | Mac Lane–Moerdijk, [Sheaves in Geometry and Logic](https://link.springer.com/book/10.1007/978-1-4612-0927-0) | sites、Grothendieck topoi、点及几何态射的解释与例子；逻辑部分不列入主线 |
| SGA4 | Artin–Grothendieck–Verdier, [Théorie des topos et cohomologie étale des schémas](https://fabrice.orgogozo.perso.math.cnrs.fr/SGA4/index.html) | 只选 II–V、V bis 等一般 sites/topoi、上同调及下降材料；书名含 étale 不表示引入其几何上同调部分 |
| St | [The Stacks project](https://stacks.math.columbia.edu/) | 用稳定 tag 核查精确条件、一般环化版本、反例与覆盖范围；不以“收完 Stacks”作为目标 |
| Achar | Pramod N. Achar, [Perverse Sheaves and Applications to Representation Theory](https://repository.lsu.edu/facultybooks/301/) | IV 的主要组织参考，重点选第 2–4 章；一般同调代数与六函子改引本系列先修 |
| BBD | Beilinson–Bernstein–Deligne, [Faisceaux pervers](https://publications.ias.edu/node/396) | \(t\)-结构的几何实现、粘合、perverse 范畴及深定理的精确来源；不据此转入算术权理论 |
| dCM | de Cataldo–Migliorini, [The Decomposition Theorem and the topology of algebraic maps](https://arxiv.org/abs/0712.0349) | 几何动机、例子、分解定理与交叉上同调的整体组织；被省略的证明另找准确来源 |
| SS | Schnürer–Soergel, [Proper base change for separated locally proper maps](https://arxiv.org/abs/1404.7630) | III 中超出局部紧 Hausdorff 背景的定向推广，作为补充而非默认先修 |
| BL | Bernstein–Lunts, [Equivariant Sheaves and Functors](https://link.springer.com/book/10.1007/BFb0073549) | 等变导出范畴及其函子；与 Achar 第 6 章共同承担 IV 的等变／商栈模型 |
| MV | Mirković–Vilonen, [Geometric Langlands duality and representations of algebraic groups over commutative rings](https://arxiv.org/abs/math/0401222)，§2 | IV 中严格 ind-scheme 的有限阶段与支集约定；只选这一基础，不展开几何 Satake |
| Sun | Shenghao Sun, [Generic Base Change, Artin’s Comparison Theorem, and the Decomposition Theorem for Complex Artin stacks](https://arxiv.org/abs/1511.01393)，§3、§4.2 | 复代数栈的 lisse-analytic 层与 perverse 结构；几何比较与深定理的证明按范围外引 |
| LO | Laszlo–Olsson, [Perverse sheaves on Artin stacks](https://arxiv.org/abs/math/0606175) | 一般底域上 étale／adic 实现的外部接口，正文不据此展开 étale 上同调 |
| BKV | Bouthier–Kazhdan–Varshavsky, [Perverse sheaves on infinite-dimensional stacks, and affine Springer theory](https://arxiv.org/abs/2003.01428) | 说明无限维理论所需的维数、分层与范畴条件；只作后续接口，不把整篇技术纳入经典基础 |

李文威《代数学方法》第二册继续作为共同同调语言与叙述组织的参考：相关定义集中引入，先明确自然映射与函子性，再列比较同构及其条件。层论特有的拓扑与几何结论以上表文献为主要数学来源。

Stacks 的常用入口：[Sheaves on Spaces](https://stacks.math.columbia.edu/tag/006A)、[Sites and Sheaves](https://stacks.math.columbia.edu/tag/00UZ)、[Modules on Sites](https://stacks.math.columbia.edu/tag/03A4)、[Cohomology on Sites](https://stacks.math.columbia.edu/tag/01FQ)、[Hypercoverings](https://stacks.math.columbia.edu/tag/01FX)。使用时记录核查日期，并以实际引用的稳定 tag 为准。

## 4. I — Sheaves on topological spaces and cohomology

### 背景与范围

默认 \(X\) 是任意拓扑空间，\(f\) 是连续映射。先处理集合层与 Abel 层，再处理固定交换环 \(\Lambda\) 的模层。不开局就假设 Hausdorff、局部紧、旁紧、局部可缩或有限上同调维数；这些条件只在相关定理中加入。

I 应能独立于 site 理论阅读。主要通过茎和层空间说明局部性，通过同调代数笔记组织导出方法；不要求读者先读 II。一般 \(\mathcal O_X\)-模层的完整理论留给 II，但固定系数的 tensor/Hom 须在 I 中具备，保证 III 无需绕道赋环 topoi。

### 暂定目录

| 章 | 英文标题与主要内容 | 主要参考 |
| --- | --- | --- |
| 0 | **Conventions and the local-to-global problem**：系数、层的取值、指标与先修；用几个局部可解而整体有障碍的问题说明主线 | Schapira 引言、§1.1；Iv II；既有 HA |
| 1 | **Presheaves, sheaves, and local data**：预层与层公理、开覆盖、基上的层、基本例子及反例；可表示的局部数据 | St, Sheaves on Spaces；Br I；Iv II |
| 2 | **Stalks, étalé spaces, and sheafification**：茎、germ、层空间、集合层与 étalé spaces 的关系；层化及其泛性质 | St, Sheaves on Spaces；Br I；Iv II |
| 3 | **Categories of sheaves and exactness**：极限、余极限、局部满射、逐茎判别、Abel 与 Grothendieck 性；说明截面函子为何一般不正合 | St, Sheaves on Spaces；KS90 II；HA 的 Grothendieck 范畴部分 |
| 4 | **Inverse images, direct images, and gluing**：\(f^{-1}\dashv f_*\)、茎公式、限制、开覆盖拼接、开嵌入延零与闭嵌入；区分一般逆像与朴素预层公式 | KS90 II；Schapira §§1.7–1.9、3.1–3.2；St |
| 5 | **Constant sheaves and local systems**：常值预层与常值层、局部常值性、单值延拓；在明确的局部路径连通、半局部单连通条件下与 \(\pi_1\)-表示比较；一般空间上的限制 | Iv II；Br I–II；Schapira §1.9 |
| 6 | **Tensor products and internal Hom**：固定 \(\Lambda\) 系数的闭幺半结构、平坦性、逆像相容性；内部 Hom 与整体 Hom 的区别 | KS90 II；Schapira §§2.1–2.3；St 的模层材料取固定系数特例；HA |
| 7 | **Resolutions and derived sheaf operations**：injective、flabby 与 Godement 解消；\(D^+\) 到无界导出范畴的接口；K-injective/K-flat 存在性引用准确结果；建立 \(Rf_*\)、导出 tensor/Hom | KS90 II；KS06 XVIII；Schapira §§2.3–2.4、3.3；St；HA |
| 8 | **Cohomology and hypercohomology**：\(R\Gamma\)、\(Rf_*\)、Leray 与超上同调谱序列、局部到整体 Ext、杯积及函子性；只展开新的层论机制 | Iv II；Br II；KS90 II；St；HA 的谱序列与导出函子部分 |
| 9 | **Čech complexes and comparison**：单个覆盖的 Čech 群、覆盖细化后的版本、到导出上同调的比较；比较谱序列、无上同调覆盖、普通 Mayer–Vietoris | Schapira §2.5；Br II；St, Cohomology on Sites 的相关一般结果作核查 |
| 10 | **Low-degree interpretations and calculations**：全局截面、Abel torsor 的 \(H^1\) 解释、局部系统的例子；区间、圆与简单粘合空间；非 Abel torsor 只说明所需区别 | Br II；Iv II；St 的 first cohomology and torsors |
| 11 | **Comparison with singular cohomology**：局部系数的比较、适当的同伦不变性、代表性计算；主版本采用旁紧且局部可缩等清楚的充分条件，另列有用推广 | Br III；Iv 的上同调比较材料；Schapira §§3.5–3.6 |

### 本篇应澄清的边界

- 层的满态射是局部满射；不必在每个开集的截面上满射。逐茎正合不等于逐开集截面正合。
- “每个茎同构”与“局部常值”、“常值”不同；局部系统与基本群表示的对应有拓扑条件。
- 有一个 Čech 复形不等于它已经计算导出上同调。固定覆盖、覆盖细化与 hypercover 分开；hypercover 理论归 II。
- 普通上同调归 I；支集族、紧支集、soft/c-soft 及 \(f_!\) 的系统理论归 III。I 可以给最初的开嵌入延零，不发展一般 proper-support 推前。
- 同伦不变性须说明系数怎样随映射变化，不能把关于常值或局部系统的结论套在任意层上。

## 5. II — Sites, topoi, and ringed structures

### 背景与范围

从 I 的局部性问题出发，采用固定宇宙内的小 site，或指定小 site 呈示的 Grothendieck topos。以覆盖筛给出一般定义；不默认底层范畴存在所有纤维积，不默认有足够点。用覆盖族或 Čech nerve 作显式公式时，补足所需条件或改用适当的局部表述。

一般赋环结构以交换环对象为主。非交换系数需要区分左右模与双模时作有用说明，不额外发展另一套环论。本篇承担一般 \(\mathcal O\)-模层、\(Lf^*\)、内部 Hom 及其导出操作；不承诺一般 ringed topos 自带 \(f_!\)、\(f^!\)。

### 暂定目录

| 章 | 英文标题与主要内容 | 主要参考 |
| --- | --- | --- |
| 0 | **From open covers to sites**：为何开集不足以表达所有局部性；术语、大小与同 I 的对应表 | KS06 XVI；Schapira §§1.2–1.4；SGA4 II |
| 1 | **Grothendieck topologies and sheaves**：筛、覆盖族、预拓扑、生成拓扑、representable sheaves、canonical/subcanonical topology | KS06 XVI；SGA4 II；St, Sites and Sheaves |
| 2 | **Sheafification without points**：matching families、plus 构造、局部相等与局部可提升；集合层和 Abel 层的一般层化及正合性质 | KS06 XVII–XVIII；Schapira §§1.5–1.6、2.1；St |
| 3 | **Grothendieck topoi and their presentations**：Grothendieck topos、不同 site 呈示的同一层范畴、基本范畴性质；elementary topos 仅给必要区分 | SGA4 IV；ML–M 的 Grothendieck topologies 与 basic constructions；St |
| 4 | **Morphisms of sites and topoi**：continuous/cocontinuous 函子、site 态射、几何态射及其方向；\(f^{-1}\dashv f_*\)；说明哪些条件保证诱导几何态射 | KS06 XVII；Schapira §§1.7–1.8；St §§7.13–7.23；SGA4 IV |
| 5 | **Localization, bases, and comparison**：slice sites、局部化、基与稠密子 site、比较引理；何时改变呈示不改变层范畴，何时改变拓扑会改变它 | SGA4 III–IV；St, Sites and Sheaves；KS06 |
| 6 | **Points and local detection**：topos 的点、逆像纤维函子、足够点与保守性；拓扑空间的茎作为特例，无点检测时怎样论证 | SGA4 IV；St §§7.32–7.39；ML–M 的 geometric morphisms 与 points |
| 7 | **Gluing, torsors, and descent**：一般覆盖下集合层与 Abel 层的下降数据、有效性；torsor 与低次上同调的接口；不据此扩展成 stack 理论 | SGA4 II、IV；St 的 Glueing sheaves、First cohomology and torsors |
| 8 | **Ringed sites, ringed topoi, and module sheaves**：环对象、模层、赋环态射；把上一章的下降用于模层；ringed spaces 与 locally ringed spaces 的关系；\(f^{-1}\) 与 \(f^*\) 的区别 | Schapira §§2.6–2.7；St, Modules on Sites；St 的 ringed spaces 材料 |
| 9 | **Tensor, internal Hom, and flatness**：模层的 Grothendieck 性、tensor/Hom、平坦模层与标量扩张；与固定系数版本的关系 | KS06 XVIII；St, Modules on Sites；HA 的闭幺半部分 |
| 10 | **Finite presentation and coherent modules**：局部有限型、有限表示、关系层、coherent 模层及 coherent 结构层；核、余核与扩张、tensor/Hom、拉回的有限性；局部有限投射与可对偶；仿射及解析例子的接口 | St §§17.9–17.12、[18.23](https://stacks.math.columbia.edu/tag/03DK)–18.29；[Coherent modules](https://stacks.math.columbia.edu/tag/01BU)；FAC 为经典来源；几何特例另核查 |
| 11 | **Derived operations on ringed topoi**：\(Lf^*\dashv Rf_*\)、\(\otimes^{\mathbf L}\)、\(R\mathcal Hom\)；一般 site 上的上同调；\(D^b_{\mathrm{coh}}\)、pseudo-coherent 与 perfect 的区别及所需条件；比较映射与足够条件 | St, Cohomology on Sites；KS06 XVIII；SGA4 V；HA |
| 12 | **Hypercovers and cohomological descent**：必要的单纯对象语言、Čech nerve、hypercover 与经典下有界上同调下降；解释普通覆盖失效后需要增加什么 | SGA4 V bis；St, Hypercoverings；St, Cohomology on Sites |
| 13 | **Geometric sites and the étale topology**：Zariski 与 étale sites，small/big 的区别，étale 覆盖与几何点，结构层和拓扑比较；fppf/fpqc 仅作覆盖概念的对照 | St, [The étale topology](https://stacks.math.columbia.edu/tag/03N4)、[Big and small sites of schemes](https://stacks.math.columbia.edu/tag/03X7) 的定义部分、[Étale coverings](https://stacks.math.columbia.edu/tag/03PF)、[Neighborhoods, stalks and points](https://stacks.math.columbia.edu/tag/03PN)；所需概形论精确外引 |

### 本篇应澄清的边界

Étale 例子所需的概形、étale 态射与必要的局部代数作为外部几何先修；正文只解释它们如何给出 site 与层。可以用域或简单代数方程说明覆盖为何比 Zariski 更细，不继续发展 étale 上同调或 Galois 上同调。

环化结构与凝聚模层的局部基础不是概形或复解析空间专有的理论。第 10 章在一般赋环背景中认真建立基础，再说明几何特例；不把凝聚性压缩成一句定义。完整的拟凝聚层几何、Cartan A/B、Serre 消没、proper 推前凝聚性、GAGA、形式函数与 Grothendieck 对偶仍归各自的几何笔记。

凝聚性部分须明确下列区别与条件：

- 采用“有限型且所有有限局部关系层有限型”的 coherent 定义。任意赋环空间上的 coherent 模层已对核、余核与扩张封闭；不必为了 Abel 性先假设结构层 coherent。结构层 coherent 时，coherent 与局部有限表示才得到通常的等价。见 St [§17.12](https://stacks.math.columbia.edu/tag/01BU)。
- 一般拉回保持局部有限表示，未必保持 coherent；tensor 与内部 Hom 的有限性按输入的有限表示／凝聚条件分别陈述。有限生成、有限表示、coherent、finite locally free 不能混用。
- 一般 ringed topos 的可对偶模层是局部有限自由模层的直和项，等价于平坦且局部有限表示；与有限局部自由的等价需要额外的局部环条件。见 St [§18.29](https://stacks.math.columbia.edu/tag/0FNX)。
- coherent 结构层、coherent topos、locally coherent Grothendieck 范畴是不同概念；层的局部有限表示也不同于它在整个层范畴中是有限表示对象。
- 在仿射概形上说明模与拟凝聚层的对应；在局部 Noetherian 概形上核查 coherent、拟凝聚且有限型、局部有限表示的等价。复解析结构层的 Oka 凝聚性作为明确的外部几何定理，不在此半途发展复分析。
- 到代数栈时须指定所用 site 和模层范畴。在过大的 site 上直接套一般 ringed-topos 的 coherent 定义，可能不等于几何中需要的凝聚层。局部 Noetherian 栈上的几何凝聚性应通过拟凝聚有限表示或合适 atlas 检验，并解释与一般定义的关系。见 St [§103.17](https://stacks.math.columbia.edu/tag/0GR4)。

导出部分区分 \(D^b(\operatorname{Coh})\) 与具有 coherent 上同调的满子范畴，不默认两者等价；有界 coherent 上同调也不自动给出 perfect，导出 tensor 的有界性另列 Tor 条件。这里不将 coherent sheaves 与 IV 的 constructible sheaves 混为一类；perverse-coherent 理论另有自己的背景，本轮只解释名称差别。

一般上同调与拓扑情形共用同调代数机制。这里证明新增的点无关步骤与环化步骤；不再从头证明导出伴随、Leray 或一般谱序列。Hypercover 的上同调下降也不等于“普通三角范畴值的导出范畴自动形成 stack”；不在此引入高阶下降理论。

## 6. III — Support, six functors, and duality

### 背景与范围

主线采用局部紧 Hausdorff 空间及其连续映射，固定交换系数环 \(\Lambda\)。一般支集的初步定义可放在更广的空间上；paracompactifying 支集族、有限上同调维数及系数有限 Tor 维等条件分别加入，不统称为“良好空间”。

本篇主线只依赖 I 与 HA。变动结构层的版本另指 II；不要求先读完 II 的 topoi。\(f^!\) 的存在、有界性与各类公式按采用的存在定理写清楚；无界版本给准确来源，不以一句 Brown 可表性省掉全部适用条件。

流形部分采用有限维、Hausdorff、第二可数的流形作为便于使用的主版本，分别说明拓扑、光滑与复结构新增的作用。SS 的 separated locally proper 推广作补充，保留较广定义的入口，不使正文陷入一般拓扑的技术旁支。

### 暂定目录

| 章 | 英文标题与主要内容 | 主要参考 |
| --- | --- | --- |
| 0 | **Background and the six functors**：条件表、四个既有函子与两个新增函子、支集为何改变伴随；与抽象六函子笔记衔接 | KS90 II–III；Schapira Ch.4；HA 17–18 |
| 1 | **Supports and local cohomology**：支集族、\(\Gamma_\Phi\)、\(\Gamma_Z\)、局部闭子集、切除及相对上同调；支持集与普通截面的联系 | Br II；Iv III；KS90 II |
| 2 | **Softness, acyclicity, and cohomological dimension**：soft/c-soft、fine 的条件与作用、支集无上同调性、空间与态射的维数界；与 flabby 比较 | Br II；Iv III–IV；KS90 II；Schapira §4.3 |
| 3 | **Direct images with proper support**：\(f_!\)、自然映射 \(f_!\to f_*\)、复合、开闭嵌入及 proper 映射；\(Rf_!\)、纤维上的紧支集上同调 | KS90 II；Iv VII；Schapira §§4.1–4.3 |
| 4 | **Base change and projection formulas**：比较映射的构造、proper-support 基变换、proper 基变换、投影公式、外积与 Künneth；区分空间、次数及 Tor 条件 | KS90 II；Iv III、VII；Schapira §§4.4–4.5；SS 作推广 |
| 5 | **Extraordinary inverse image**：\(Rf_!\dashv f^!\) 的存在条件、复合与迹；开闭嵌入的计算、相对对偶复形及基本局部模型 | KS90 §3.1；Iv VII；Schapira §4.6；HA 的可表性与形式相容性 |
| 6 | **Verdier duality**：\(\omega_X\)、\(\mathbb D_X\)、局部及整体对偶、双对偶比较、适用对象与六函子相容；完整计算简单有限情形 | KS90 §§3.1、3.4；Iv V–VI；Schapira §§4.7–4.8 |
| 7 | **Localization and open–closed decompositions**：两种局部化三角、拓扑 recollement、\(i^!\) 与支集截面的联系、对偶交换两个三角；调用 HA 的形式理论 | KS90 II–III；Schapira §§3.1–3.2、4.6；Br II；HA 15 |
| 8 | **Orientation and Poincaré duality**：定向局部系统、\(\omega_M\simeq\operatorname{or}_M[n]\)、局部系数、紧与非紧流形；Borel–Moore 同调及所需比较条件 | KS90 §§3.2–3.3；Iv VI、IX；Br V；Schapira §5.1 |
| 9 | **Smooth and complex comparison theorems**：\(\mathbf R/\mathbf C\) 系数的 de Rham 比较、fine 解消与积分；复流形上 \(\mathcal O_X\) 或 \(\Omega_X^p\) 的 Dolbeault 解消作为环化例子；局部分析引理外引，Serre 对偶仅给接口 | Iv IV；Schapira Ch.5 的相关部分；Br 的比较材料；环化例子按需调用 II |
| 10 | **Kernels and worked calculations**：核函子、对角线、核的复合与卷积、properness 条件；区间、球面及非紧例子检验各项约定 | KS90 §3.6；Schapira §4.9；Iv III、VI |

### 本篇应澄清的边界

- 支集 proper over 某个开集与对象全局紧支集不同；\(f_!\) 一般不同于 \(f_*\)，proper 情形才有相应识别。
- soft、c-soft、fine、flabby 的定义、蕴含与无上同调结论均附空间或支集条件。解消的分工是 I 的 injective/flabby/Godement，III 的 soft/c-soft。
- 比较映射存在不保证它可逆。特别区分一般基变换、proper 基变换以及 \(f_!\) 的基变换。
- 定义 \(\mathbb D_X\) 不表示它在全部 \(D^b(X;\Lambda)\) 上是对偶等价。III 处理一般比较及清楚的充分条件，并证明流形上具有有限局部自由或 perfect 茎的局部系统及局部常值复形等基本情形；一般环上有限生成茎本身不足。IV 再验证分层构造对象的双对偶性。
- 不使用 Fourier–Sato、microsupport 或特征循环作为支撑理论。核运算到普通层的复合及卷积为止。

## 7. IV — Constructible and perverse sheaves

### 背景与范围

IV 不把“over \(\mathbf C\)”设为全篇假设。组织为一般构造与粘合、具体几何实现、栈与 ind 扩展三个层次。一般部分在给定分层、perversity 与合适的构造导出范畴后，说明开闭 recollement 及逐层条件如何建立 perverse 结构；所需的限制、余限制、有限性与对偶条件逐项列明。

拓扑实现选取有限维、局部紧 Hausdorff、具有适当局部锥状结构的有限分层空间作为主要模型；链接及局部系数满足什么有限性条件在使用处核查。实解析／subanalytic、复解析、复代数是进一步的实现，不能将它们的构造性保持、消没或对偶定理合并成一个无条件版本。任意连续映射也不自动保持构造性。

\(D^b_c\) 始终指所选层理论的导出范畴中具有指定构造上同调的满子范畴；固定分层与允许细化的版本分开。它不按定义等于 \(D^b(\operatorname{Cons})\)。主系数为域 \(\Bbbk\)，局部系统茎有限维；非域系数的变体另列条件。

复代数实现中的“簇”仍指约化、分离、有限型 \(\mathbf C\)-概形，层取在经典拓扑上；允许奇点。附近循环的经典拓扑模型、Artin 消没及分解定理等章节明确标记自己的背景，不把其假设反推为全篇限制。

对一般底域上的 schemes 或 algebraic stacks，须先说明采用何种层理论。通常的 étale／adic 构造层实现可以作为外部接口，但它需要的不仅是 étale 覆盖的定义，还包括相应导出范畴、有限性、六函子与维数定理。本轮不发展这套 étale 上同调理论，也不声称仅由 II 的 étale 拓扑例子便已完成任意底域上的实现。形式部分按明确的输入条件陈述，几何验证另列来源。

### 暂定目录

| 章 | 英文标题与主要内容 | 主要参考 |
| --- | --- | --- |
| 0 | **Background, normalization, and motivating examples**：区分拓扑、解析、代数及栈背景；系数、perversity 与维数约定；哪些结论只依赖形式输入 | BBD §§1.4、2.1–2.2；KS90 X；Achar §§2.1、2.3；dCM |
| 1 | **Stratifications and constructibility**：一般分层与适配分层、局部系统、局部链接（link）与有限性；再比较 Whitney、subanalytic 及代数分层 | KS90 VIII、X；Achar §2.3；dCM |
| 2 | **Finiteness, duality, and the six functors**：在各几何实现中分别验证构造性、有界性与有限性；外积及双对偶；区分形式论与依赖背景的几何定理 | Achar §§2.2、2.5、2.7–2.9；KS90 VIII；BBD §2.2；III |
| 3 | **Perverse t-structures and perversities**：先由 recollement 与逐层条件建立一般结构，再取复几何的中间 perversity；截断、上同调，在兼容 perversity 与维数约定的适当细化下比较并证明不变性；自对偶性单列条件 | BBD §§1.4、2.1–2.2；KS90 X；Achar §3.1；HA 13 |
| 4 | **Gluing and intermediate extension**：将 recollement 应用于 perverse heart；\({}^p j_!\)、\({}^p j_*\)、\(j_{!*}\)、边界上的子商判据及非正合性 | BBD §1.4；Achar §3.3；dCM §2.7；HA 15 |
| 5 | **Intersection complexes and the perverse heart**：按 perversity 归一化的 \(IC\)、简单对象与有限长度的条件、交叉上同调；标准复几何约定及曲线、锥的计算 | Achar §§3.3–3.4；BBD §4.3；dCM §§2.1–2.2 |
| 6 | **Geometric exactness and affine vanishing**：在相应几何背景中分别处理光滑逆像的移位、有限态射、affine 半正合性、Artin 消没、光滑下降及振幅；不宣称是任意分层空间的结论 | Achar §§2.6、3.2、3.5–3.7；BBD §§4.1–4.2 |
| 7 | **Nearby and vanishing cycles**：先固定未移位约定；复解析或复代数映射到曲线的经典拓扑模型、单值作用、两种三角、can/var 及 proper 推前；\(\psi_f[-1]\)、\(\phi_f[-1]\) 的 perverse 正合性及对偶相容；其他实现另列接口 | Achar §§4.1–4.2；KS90 §8.6；dCM §5.5 |
| 8 | **Unipotent cycles and extension across a hypersurface**：全体附近循环与幺幂部分的区别、Beilinson 粘合、穿孔圆盘与线性代数模型；不默认单值作用 quasi-unipotent，按系数条件使用 \(T-1\) 或 \(\log T\) | Achar §§4.3–4.5；dCM §§5.6–5.7 |
| 9 | **Proper maps and decomposition**：small/semismall 映射、分解定理、相对 hard Lefschetz、非典范分裂及例子；明确特征零系数与对象条件 | Achar §§3.8–3.9；BBD §6.2；dCM §§3.1.5、4.2 |
| 10 | **Equivariance, quotient stacks, and smooth descent**：等变导出模型与商栈；有限型复代数栈的 lisse-analytic 实现、atlas 上检验构造性与 perversity、维数移位；一般底域的所需输入及限制 | BL；Achar Ch.6；Sun §3、§4.2；LO 只作外部实现接口 |
| 11 | **Strict ind-schemes and finite-stage support**：闭嵌入呈示、有限阶段支集的构造范畴与 perverse heart、呈示独立性所需条件；受控态射与函子；不把此范畴误称为完整六函子理论 | MV §2；Achar 的相关等变几何例子；BKV 作超出本章范围的接口 |

### 选读附录与边界

**A. 背景比较。** 列出纯拓扑分层、实解析或 subanalytic、复解析与复代数背景中定义和定理所需的差别。一般 perverse 粘合可以比复代数背景更广；构造性、有限性与自对偶性仍须逐项证明。实奇维分层不能直接套用复维数的中间 perversity。

**B. 非域系数。** 选择少量典型的正则 Noetherian 环或 DVR，解释有限 Tor 维、perfect 茎、torsion 以及 \(p\)/\(p^+\) 的差别。不把域系数下的自对偶、有限长度或半单性照搬到一般环；主线无需先完成一整套整系数理论。

**C. 栈与 ind 扩展的具体边界。** 第 10–11 章发展可独立使用的基础版本；一般 ind-stack、无限维支集的完整范畴及其六函子另留接口。

在栈上不能把层替换成粗模空间上的层，稳定子信息须保留。等变导出范畴也不能直接用朴素等变层的 Abel 范畴取导出来替代。用合适的模型建立复形层面的下降；II 的一般层下降与 hypercover 上同调只提供语言及部分工具，不自动提供全部导出下降。

复数背景可以采用 lisse-analytic 方法而不在正文发展 étale 上同调。若 \(p:U\to\mathcal X\) 是相对复维数为 \(d\) 的光滑 atlas，采用“\(p^*K[d]\) 在 \(U\) 上 perverse”的检验约定，并解释与常用等变归一化的差别。栈的推前不自动保持有界：\(B\mathbf G_m\) 的整体上同调已有无穷多个非零次数。分解定理到栈的推广也需单独列态射、稳定子与对象条件，不能从簇的版本直接移植。

对由有限型阶段及闭嵌入组成的严格 ind-scheme

\[
X=\varinjlim_i X_i,
\]

先在选定实现中定义经闭嵌入推前组成的有限阶段支集范畴 \(\varinjlim_i D^b_c(X_i)\) 及相应 perverse heart，说明支集在某个阶段中的含义。当前具体实现采用复数背景的经典拓扑，其他底域须先提供相应层理论。这适合建立一批经典例子的基础，但不是所有无限维支集对象的范畴，也不自动对任意六函子封闭。例如 \(\mathbf A^\infty\to\mathrm{pt}\) 的逆像把点上的常值系数拉成不在任何有限阶段内支撑的对象。允许哪些态射、怎样限制或扩大范畴，须在使用处处理。

一般 ind-stack 还涉及维数正规化、极限与余极限、完成、支集及下降的相容；有限阶段范畴与有限型栈理论不能无条件拼接成完整答案。BKV 给出有明确分层和几何条件的深层发展，当前只标明其入口。

分解定理先采用 proper 复代数态射作用于 \(IC_X(\mathbf Q)\) 的明确版本；更广的系数或半单对象版本分别核查。不得陈述成“任意 perverse sheaf 的 proper 推前均半单分解”。相对 hard Lefschetz 另外假设 projective 并给定相对 ample 类。

分解定理及所需深消没定理可以精确引用，完整证明其可控的代表性应用。正文不以 étale 上同调、权理论或 Hodge modules 为先修；有关证明方法只作文献说明。因此 IV 不会为了最后一章反向要求另一份算术几何笔记。

## 8. 依赖关系与避免重复的规则

### 8.1 阅读依赖

```text
范畴论与同调代数
        │
        ▼
I. 拓扑空间上的层与上同调
        ├──────────────► II. Sites、topoi 与赋环结构
        │
        ▼
III. 支集、六函子与对偶
        │
        ▼
IV. 构造层与 perverse 层
```

II 与 III 是 I 之后的两条分支。III 的固定系数拓扑主线无需整个 II；IV 的有限维拓扑与复几何主线也无需先学 étale 拓扑。IV 的栈扩展额外调用 II 的 sites 与下降语言，以及所选等变／导出下降模型；这是一条明确的局部先修，不要求读完 II 所有赋环材料。一般底域的实现需要另列层理论的外部输入。

III 的流形应用需要相应的流形与基础分析先修；IV 的各项几何实现分别需要分层局部模型、相应代数或解析几何，以及栈／ind 几何的明确输入。所需背景按章节单列，不用几句含糊的“标准事实”掩盖依赖，也不在层论中途展开不深不浅的支撑理论。

### 8.2 主要内容的归属

| 主题 | 完整展开的位置 | 其他位置怎样处理 |
| --- | --- | --- |
| 一般 Abel 范畴、解消、谱序列、导出伴随 | HA | 验证层论所需假设；给几何解释与计算 |
| 拓扑茎、层空间与拓扑层化 | I | II 把它作为模型；III、IV 直接调用 |
| 筛、一般层化、Grothendieck topos 与比较引理 | II | I 只给可选的一般化提示，不以 II 为先修 |
| 拓扑 \(R\Gamma\)、\(Rf_*\)、Leray 与普通 Čech 比较 | I + HA | II 只处理一般 site 的新增步骤；III、IV 直接调用 |
| 一般赋环模层、凝聚模层的局部基础、\(Lf^*\)、环化 tensor/Hom | II | I 完整处理固定系数特例；几何凝聚性大定理另归相应几何笔记 |
| 一般覆盖下降、hypercover 与上同调下降 | II | I 不展开，IV 不借附近循环重新引入整套下降 |
| 支集族、局部上同调、soft/c-soft、拓扑 \(Rf_!\)、\(f^!\) | III | I 只建立必要的初等嵌入；IV 的有限维拓扑主线调用 III；新背景另核查存在性与模型 |
| 基变换与投影的形式机制、mates 与相容性 | HA | III 证明拓扑比较映射何时为同构；IV 证明有限性及次数估计 |
| 对偶复形、对偶比较与流形定向 | III | IV 检验构造对象的双对偶性，不反向作为 III 的先修 |
| 抽象 \(t\)-结构与 recollement | HA | III 实现拓扑开闭分解；IV 构造并运用 perverse 结构 |
| 分层构造性、六函子保持构造性、IC 与循环函子 | IV | 其他三份只给接口 |
| 等变／商栈、构造层的栈下降、有限阶段 ind-scheme 基础 | IV 的扩展章 | site 语言调用 II；具体模型、正规化及可用函子的条件在 IV 建立；一般 ind-stack 另列接口 |
| Étale 拓扑 | II 的一个例子章 | 不继续到 étale 上同调或算术形式体系 |

**避免重复不等于禁止必要的重述。** I 需要独立可读，II 又要摆脱点的假设，二者可以重述同一性质的特殊版与一般版，但相同的形式证明只展开一次。I 的茎/层空间构造与 II 的筛/plus 构造展示不同机制，值得分别保留；极限的泛性质、导出伴随等共同论证则直接引用。

Mayer–Vietoris 的普通开覆盖版本归 I，支集与紧支集版本归 III。开嵌入延零在 I 初次定义，III 将它识别为一般 \(f_!\) 的特例并建立导出局部化三角。这样既有独立的阅读入口，也不因换一套符号再写同样的证明。

## 9. 写作与核查顺序

先完成 I 的层、茎、基本操作、解消和上同调主线，再分别推进 II 与 III。III 建立对偶和开闭局部化后即可开始 IV；II 的 étale 例子、III 的光滑/复比较及核计算可以稍后补齐，不成为 IV 的全部先修。II 的凝聚模层基础接在普通模层之后；IV 的栈与 ind 扩展接在有限维构造及 perverse 主干之后，新增几何或范畴条件单列。

各章采用相近的叙述次序：问题与例子；集中定义；构造及自然映射；主要命题及条件；代表性证明；反例或边界；文献与约定对照。相邻的定义与基本性质可以合并成一个条目，避免过度切碎编号。

完整保留能解释机制的证明，例如层化与局部判别、Čech 比较的形成、支集切除、proper-support 基变换的关键步骤、局部化与对偶的联系、perverse 粘合及 \(j_{!*}\) 的边界刻画。K-injective 的广泛存在性、繁重几何局部平凡性及分解定理等可精确引用。自己的推广或改动假设须承担新增证明责任。

旁注积极承担术语、记号与文献差异的解释；影响真假的假设仍留在正式陈述中。优先记录：étalé space 与 étale site 的不同、常值与局部常值、\(f^{-1}\) 与 \(f^*\)、内部与整体 Hom、层上同调与 Čech 上同调、\(f_*\) 与 \(f_!\)、支集与 cosupport、构造与 cohomologically constructible、两种构造导出范畴的含义、perverse 移位及域系数与整系数的差别。

每章完成后核查三件事：所选范围是否真正展开；每项重要结论的条件是否足以使用；调用其他笔记时是否有准确入口。目录的章数不作为篇幅或完成度指标，后续可以合并短章、拆分长章，但保持上述内容归属与依赖关系。
