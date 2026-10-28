# 《3264 and All That》内容归属与拆分方案

[返回笔记分配与目录](../../ENUMERATIVE_GEOMETRY_PLAN.md)。

核查日期：2026-10-25。对象是 David Eisenbud、Joe Harris，*3264 and All That: A Second Course in Algebraic Geometry*，Cambridge University Press，2016。下列章号、节号和正文页码按正式版出版社目录；不同年份的公开草稿不宜混用页码。[正式书目与 DOI](https://doi.org/10.1017/CBO9781139062046)；[出版社完整目录](https://assets.cambridge.org/97811070/17085/toc/9781107017085_toc.pdf)。

本文件是笔记规划与归属判断，所列主题采用中文概括，并非全书目录的翻译。分类是为本项目作的编辑判断，不声称数学领域存在唯一边界。

## 1. 首先应当怎样理解这本书

这本书有意把枚举问题当作代数几何第二课程的入口。因此，它同时承担：交叉理论的几何解释、具体枚举问题的解答、以及 Hilbert scheme、形变、上同调基变换等一般工具的教学。用户希望减少计数几何正文中的一般代数几何重复，意味着需要拆解它的教学组织，而不宜把整本书逐章搬进一份“枚举几何”笔记。

另一个重要限制是严格性的归宿。正式版导言 pp. 4、7 明确将交乘及拉回存在性的完整证明交给 Fulton。导言把移动引理分成两部分：可以选到一般横截的代表，以及这些代表的交所给类与选择无关；附录 A 证明前一部分，后一部分借助外部的交乘存在结果。这不是说附录 A 没有证明移动引理的任何内容。故本书是极好的问题与算例主参考，却不能单独承担本项目全部交叉理论基础，更不能独立承担虚基本类、一般稳定映射栈或 DT 理论的构造。[出版社导言，尤其 pp. 4–7](https://assets.cambridge.org/97811070/17085/excerpt/9781107017085_excerpt.pdf)。

归属标签：

- **AG**：一般代数几何及其第二课程工具。它们可以很深，并不意味着“初等”。
- **IT**：交叉理论本体，包括循环、交乘、特征类、Gysin、正规锥、超额相交及环计算。
- **SCH**：Schubert calculus 与齐性空间几何。它是核心枚举方向，也与组合、表示论交会。
- **EG**：具体枚举问题及其严谨性，包括一般位置、边界、重数和真性。
- **CUR/MOD**：曲线、线性系、曲线或层的模空间等专门代数几何方向。
- **CX/TOP**：复代数几何、Hodge 理论及拓扑接口。
- **K/RR**：K 理论与 Riemann–Roch 接口；属于一般工具，不能据此把本书视为 quantum K-theory 教材。

“归属”指完整定义与证明放在哪里；计数几何应用处仍应重述所需对象、假设和结论，并给出明确引用。

## 2. 逐章内容地图

| 部分与正文页码 | 主要层次及混合边界 | 本项目建议归宿 |
|---|---|---|
| **0，pp. 1–12** | 计数恒定性、参数空间和紧化的动机，以及全书采用的约定；不是一套独立理论。[导言](https://www.cambridge.org/core/books/abs/3264-and-all-that/introduction/3E6BE88B6F99AF766AD9D97A1E48AC89) | 总导航可借用其问题意识。全局概形、基域及射影化约定应在 AG 中统一。 |
| **1，pp. 13–42** | 以 **IT** 为主：循环、有理等价、Chow 群和环、推拉、重数。§1.4.1–1.4.3 的典范类与伴随则连接 **AG/曲面几何**。[第 1 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/introducing-the-chow-ring/18362466E4E42BD11E6DA81971573DF8) | Chow 理论放 IT；线丛与除子一般理论、典范层与伴随的一般构造由 AG 承担。保留它们在 Chow 群中的解释。 |
| **2，pp. 43–84** | **IT+EG**：熟悉空间的 Chow 环、次数和特殊轨迹。§2.4 的曲线自交、亏格、吹起、奇点修正，跨入 **曲线/曲面 AG**；§2.5 暴露奇异空间不能直接照搬光滑 Chow 环的问题。[第 2 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/first-examples/05286BFA9A875BD5A800DDDA77D15A02) | IT 保存代表性环计算及重数反例；吹起构造与曲面的一般理论归 AG。三次曲线、Apollonius 等问题按机制精选。 |
| **3，pp. 85–130** | §3.1 是 **EG** 的正确表述；§3.2 是 Grassmannian 的 **AG** 几何；§3.3–3.6 是 **SCH+EG**，包括相交环、直线关联条件和特化法。[第 3 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/introduction-to-grassmannians-and-lines-in-3/239EDBE4ADD61E24BF7550FB60FF0B59) | AG 提供 Grassmannian 的表示性质、坐标、普遍丛及切丛。SCH 保存 Schubert 类、相乘和特化证明；枚举解释就地完成。 |
| **4，pp. 131–164** | 主要是 **SCH**：胞腔分层、Schubert 循环、Pieri/Giambelli、Young 图及其他齐性空间的入口。Schubert 子簇的方程和几何性质又属于专门 AG。[第 4 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/grassmannians-in-general/962F10C7BDCDE193DE2856E46E4FFC75) | SCH 应完整发展，不能仅缩成 IT 的几个例子。旗簇、各 Lie 类型、等变及量子版本从这里继续；一般群概形/商空间构造由 AG/表示论承担。 |
| **5，pp. 165–192** | **IT** 核心：Chern 类、分裂原理、Whitney 公式、普遍丛的特征类。§5.7.3 连接 **TOP**，§5.8 返回 Grassmannian 环。[第 5 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/chern-classes/4F3ED9EC8F5C2EBBA9BBC0227AB238B4) | 代数 Chern 类的定义与完整性质归 IT；向量丛本身归 AG。拓扑 Euler 特征的比较明确调用 cycle class/Gauss–Bonnet。 |
| **6，pp. 193–243** | 最典型的混合章。§6.1–6.2 是 Fano scheme 与 **IT/EG**；§6.3 是 Hilbert scheme 的一般 **AG/MOD**；§6.4 是嵌入形变、正规丛及切空间；后段研究直线族、特殊超曲面和几何问题。[第 6 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/lines-on-hypersurfaces/DFCF2E7102B75F35ECE504E0FD4C3AEB) | Hilbert 表示定理及一般形变留给 AG/MOD；计数笔记具体构造 Fano 零点概形、核查正则性，再计算顶 Chern 类。直线计数与一般 GW 不变量须区分。 |
| **7，pp. 244–288** | **jet/principal parts+奇点与判别轨迹+EG**。§7.2 的 principal parts 是一般 AG 工具，后面的 Chern 计算是 IT；拐点、消失序列属曲线线性系；§7.7 引入拓扑 Hurwitz 思路。[第 7 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/singular-elements-of-linear-series/919AFE324456C1FF3E2F210A5A6A81BC) | principal parts/对角线无穷小邻域的构造归 AG；判别、奇点和拐点计数归 EG 专题。§7.7 不是 Hurwitz numbers 的完整理论。 |
| **8，pp. 289–322** | **紧化+EG/MOD**。§8.1–8.3 的 complete conics/quadrics 是具体紧化；§8.4 比较 Hilbert 与 Kontsevich 参数空间；§8.5 进入稳定映射的平面有理曲线计数。[第 8 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/compactifying-parameter-spaces/51EEAF10179DAD99BD6AD9EB61016274) | 五圆锥曲线问题归 EG；稳定映射的实际模问题、边界和递推归 GW。一般真性与模空间技术引用 AG/MOD。此章是 GW 接口，不能替代 GW 全套基础。 |
| **9，pp. 323–361** | §9.1–9.2 是射影丛的 **AG** 构造；§9.3、§9.4 的交叉公式及 §9.6 是 **IT**；§9.5 接触 Brauer–Severi 的下降/算术问题；§9.7 是 **EG**。[第 9 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/projective-bundles-and-their-chow-rings/F8DFA1F0F278808D037CF49A083AD6F3) | 射影丛与普遍性质归 AG；projective bundle formula、Grassmannian bundle 环及推前归 IT。Brauer–Severi 在当前主线只作延伸接口。 |
| **10，pp. 362–388** | §10.1 为 **IT** 的 Segre 类。其后主要是 **射影几何+EG**：直纹、割线、对称积、二元形式幂和、对偶与余法簇。[第 10 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/segre-classes-and-varieties-of-linear-spaces/0FEB3933E899C85C8E1C2B522628C537) | Segre 类归 IT；对称积的一般构造归 AG；secant/Waring、对偶几何分别归专门 AG/EG。不要把所有射影几何都纳入 GW/DT 前置。 |
| **11，pp. 389–425** | **接触/奇点计数** 为主；相对 principal parts 与相对切丛是 **AG** 工具，Chern 计算为 **IT**。涉及负期望维数、拐线、尖点和局部奇点分类。[第 11 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/contact-problems/4D89B929C3E5807A673E90262E1D6AF3) | EG 保存具体问题的闭条件、坏边界和重数分析；AG 提供相对 jets。这里“contact”指接触阶，不能等同于接触几何或现成的相对/对数 GW 理论。 |
| **12，pp. 426–444** | **IT** 的退化轨迹公式与 Grassmannian 消解/推前；应用跨入行列式簇、投影奇点和割线几何。[第 12 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/porteous-formula/FA9CB0511C1A6B34F8C12C2CD3509BF0) | Porteous 及适用的维数假设完整放 IT；一般行列式理想的交换代数性质归 AG/交换代数；应用放相关几何专题。 |
| **13，pp. 445–480** | 主要是 **IT** 本体：嵌入的 Segre 类、超额相交、向正规锥特化、拉回及吹起的 Chow 环。吹起本身的构造仍是 **AG**。[第 13 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/excess-intersections-and-the-chow-ring-of-a-blowup/A09E6120D39CD6EC8715F8E49F6F2353) | 保留为 IT 的骨架，并向一般 refined Gysin/正规锥技术深化。它是虚类的重要前置，但尚不等于 perfect obstruction theory。 |
| **14，pp. 481–510** | **K/RR+IT**：Chern character、Todd 类、HRR/GRR，以及族上的计算。后半部涉及向量丛跳跃直线、曲线族和 Mumford 关系，已经跨入专门模空间几何。[第 14 章](https://www.cambridge.org/core/books/abs/3264-and-all-that/grothendieck-riemannroch-theorem/1F59597EC59135F95C1A293B1C2EBDD6) | K 群、导出推前、RR 的一般定理放共享 AG/K/IT 基础；曲线族 tautological 应用就地详算。后续 virtual RR 需要另补，不能由普通 GRR 自动得到。 |
| **A，pp. 511–519** | **IT** 基础的几何移动技术，使用投影、一般位置和横截等 **AG** 方法。[附录 A](https://www.cambridge.org/core/books/abs/3264-and-all-that/moving-lemma/3D892EC501908CFF9AE4B5F25EAC0DAB) | 归 IT；若重构现代交乘基础，可把本附录作为几何补充，而不令其承担交乘良定义的全部证明。 |
| **B，pp. 520–542** | 全部属于一般 **AG**：推前、高阶推前、推前复形、上同调与基变换；用于证明“由纤维描述的丛”确实存在且可基变换。[附录 B](https://www.cambridge.org/core/books/abs/3264-and-all-that/direct-images-cohomology-and-base-change/76A3B57F90516391116FD7CF800435F0) | 从计数几何主体抽离，给 AG 上同调章节。应用处写清真性、平坦性及纤维上同调假设，不能只说每个纤维维数相同。 |
| **C，pp. 543–563** | **CX/TOP**：GAGA、循环类、Hodge、等价关系、Lefschetz 与拓扑/曲率的 Chern 类。[附录 C](https://www.cambridge.org/core/books/abs/3264-and-all-that/topology-of-algebraic-varieties/1F99CBB0CBD5B5783BE2AE84B8DF672A) | 由复 AG/Hodge/拓扑笔记承担完整理论；IT 只建立所用比较映射。这不是为 GW 解析构造所需的辛几何教材。 |
| **D，pp. 564–593** | **CUR/MOD** 为主：线性系、Jacobian、Abel、Brill–Noether；退化轨迹与类计算使用 **IT+TOP**。[附录 D](https://www.cambridge.org/core/books/abs/3264-and-all-that/maps-from-curves-to-projective-space/9A426B6FCBE914801B56BDA94C3CC120) | 曲线与 Picard 理论独立归宿；IT 可保留一个 Brill–Noether 算例。重点证明 Kempf/Kleiman–Laksov 的存在性部分，§D.3.2 另介绍另一半的证明思路；不能把附录视为整个定理的完整证明。 |

## 3. 应当按“构造—类—计数”拆开的五个边界

### 3.1 Grassmannian

表示子丛/商丛函子、Plücker 嵌入、普遍序列以及切丛都属于 AG；Schubert 分层、Schubert 子簇、乘法与组合公式属于 SCH；对这些类积分并验证对应的关联问题为一般位置的有限横截交，是 EG。三者共享一个空间，却需要不同的完整归宿。经典 Schubert 内容应当留在计数研究计划内，而 Grassmannian 的一般表示理论不用再从头重写。

### 3.2 Hilbert/Fano 参数空间

§6.3（p. 201 起）的 Hilbert scheme 表示与构造属于一般 AG/MOD；§6.4（p. 208 起）的切空间和正规丛属于形变理论。计数几何应负责具体空间的辨识：例如给定超曲面，构造普遍丛的截面，证明其零点概形就是 Fano scheme，分析其是否达到预期维数、是否约化，最后解释顶 Chern 类的次数。一般 Hilbert 定理外置，不会妨碍计数部分真正回答“这个模空间怎么构造”。

要继续到现代研究，必须另补任意阶形变、余切复形、阻碍理论和导出零点空间等内容。这些不能用一次切空间计算代替。作为基础的完整理论可以由 AG/形变/导出几何笔记承担；计数中完整展示具体 obstruction theory 从何而来。

### 3.3 紧化

一般的真性、赋值判别、吹起与下降属于 AG；“为这个计数问题选择何种紧化”“额外出现哪些对象”“关联条件怎样延拓”“边界贡献是否需扣除”属于 EG/MOD。第 8 章最适合作为紧化选择的比较案例，而非要求计数笔记独自建立全部模空间存在理论。

§8.4.3（p. 312 起）和 §8.5（p. 317 起）可以接入 GW；但正式规划还须从模函子/纤维群胚说明稳定映射、自同构、栈、粗模空间及普遍族，再构造虚类。不能以“Kontsevich space”一个名称掩盖 scheme 与 stack 的区别。

### 3.4 Principal parts、jets 与退化轨迹

§7.2（p. 247 起）、§11.1.1（p. 391 起）的 sheaf/bundle 构造归 AG；其短正合列和 Chern 类计算属于 IT 的应用；判别和奇点条件如何变成这些截面/退化轨迹、为什么没有算入错误的边界，属于 EG/奇点几何。Porteous 必须保留维数、纯维及正则性条件，不能见到秩降条件就直接套一个行列式。

### 3.5 吹起、正规锥与虚类

一般 Rees 代数与 blow-up 构造可以放 AG；正规锥如何进入交叉操作、向正规锥变形、精细 Gysin 与超额公式属于 IT。故“不重复 AG 基础”不应把第 13 章整体移走，否则虚类构造将失去最直接的几何前置。往 perfect obstruction theory 前进时，新的内容是把内禀正规锥放进合适的向量丛栈，并用零截面 Gysin 得到指定维数的类；这需要新增严格理论，不能只把“超额交”改名为“虚类”。

## 4. 可直接抽离的 AG 支撑包

以下支撑包按主题组织，不要求跟随原书顺序。它们是 AG 侧的建设任务，不应各自成为计数几何的长篇预备章。

| AG 支撑包 | 从本书抽离的主要来源 | 计数几何保留的应用接口 |
|---|---|---|
| 线丛、除子、典范层与伴随 | §§1.4.1–1.4.3，§2.4 的一般构造 | 除子类、(c_1)、自交和计数所用伴随公式 |
| Proj、射影丛与 Grassmannian 的表示性质 | §3.2，§§9.1–9.2 | 普遍序列、约定转换及具体参数空间识别 |
| 吹起、正规丛与基本嵌入几何 | §2.1.9、§§2.4.4–2.4.5 及第 13 章所需一般构造 | Chow 环、正规锥、超额相交与变形 |
| 平坦族、Hilbert/Quot 与嵌入形变 | §§6.3–6.4，§8.4 的一般 Hilbert 背景 | 具体 Fano/Hilbert 分量、零点空间、计数意义 |
| 推前、上同调与基变换 | 附录 B | 逐个验证应用中所需的局部自由及基变换 |
| 对角线邻域与 principal parts | §7.2，§11.1.1 | 判别、拐点、尖点、接触条件的建模 |
| 对称积、Picard/Jacobian 与线性系 | §10.3.1、附录 D | Brill–Noether/割线的选定类计算 |
| K 群与 RR 的一般形式 | §§14.1–14.3 的一般工具 | tautological 推前、虚 RR 与 quantum K 的具体应用，后两项须另建基础 |

基础 AG 不应接管 Chern/Segre 类的全部循环理论，也不应吞掉 refined Gysin、excess 或局部化；它们在 IT 中有最清楚的主线。反过来，IT 也无需完整讲一遍 Picard functor、Hilbert 可表性或 Hodge 理论。

## 5. 从《3264》继续到现代计数几何，应增加什么

下面是本项目的扩展判断，不是本书内容摘要。

1. **交叉理论的现代骨架**：在一般概形上定义 Chow 群、proper pushforward、flat pullback、Chern 操作、refined Gysin 与 bivariant/operational 视角；然后进入栈的相交、等变理论和局部化。第 1、5、9、12、13 章提供几何素材，完整严格性另有来源。
2. **模对象的类型审计**：每个模问题分别标明 scheme、algebraic space、DM/Artin stack、粗模空间、稳定化/rigidification 及是否有普遍族；把“对象集合”升级成“对所有基底的族”。一般栈理论外置，具体模问题中的结论在计数正文证明或精确引用。
3. **虚理论**：从经典 excess 的算例进入 perfect obstruction theory、intrinsic normal cone、虚结构层、virtual pullback/localization；更现代的 derived/quasi-smooth 解释要有清楚接口。泛化工具的主人是基础笔记，各计数理论负责实际构造其所需虚对象。
4. **Schubert 的现代延伸**：普通/等变 Chow 与 K 理论、量子 Schubert 及 quantum K、相关有限性与正性。旗簇及其他 Lie 类型可分层扩展；无须借助镜像对称组织主线。
5. **具体计数理论**：稳定映射、相对/对数退化、DT/PT、墙穿越、K 理论计数分别建设。仅有书中的 Kontsevich space 接口和 Hilbert 例子不足以定义它们。
6. **量子结构的严格系数基础**：完备幺半群代数、Novikov 赋值、形式空间、Frobenius/Euler 数据、量子联络与解析条件均需新建。Gamma 问题和非阿基米德解析化不属于《3264》的覆盖范围。

适合保留的贯穿算例不应只有“答案是多少”。每个算例应记录参数空间、普遍族/截面、期望维数、重数、边界、真性以及与虚计数是否一致。例如四线公共截线、三次曲面的 27 条直线、五圆锥曲线、奇异曲线判别、平面有理曲线，可分别检验不同机制。经典问题承担构造验算；现代专题承担新的结构、适用范围与研究问题。

## 6. 版本、约定与勘误核查

- 正式副标题是 *A Second Course in Algebraic Geometry*。作者主页及早期材料仍可见 *Intersection Theory in Algebraic Geometry*；这是识别书的别名，不应以此误认为有另一部同内容正式版本。[作者主页](https://eisenbud.github.io/)。
- 正式版 p. 9 使用参数化一维子空间的射影化约定，与 Hartshorne 的一维商约定相反。PreTeXt 正文应固定自己的约定，并在射影丛公式与引用处转换。基域、准射影、光滑/奇异等条件也应在具体结果中保留。[出版社导言 pp. 8–9](https://assets.cambridge.org/97811070/17085/excerpt/9781107017085_excerpt.pdf)。
- 作者主页提供[习题解答 PDF](https://eisenbud.github.io/3264%20solutions.pdf)，实际读取可见早期标题与未解析交叉引用；使用时应以题目内容匹配正式版，不能只凭页码/编号。
- 本次没有找到作者或出版社公开发布、明确针对《3264》正式版的独立勘误表。这不是“本书没有错误”的断言。作者主页当前的 [Errata-curvebook.pdf](https://eisenbud.github.io/Errata-curvebook.pdf) 对应 *The Practice of Algebraic Curves*，应避免误引为《3264》的勘误。
- [Harvard DASH 记录](https://dash.harvard.edu/entities/publication/73120379-47fa-6bd4-e053-0100007fdf3b)提供作者/机构的公开书稿入口。旧作者稿链接本次抓取超时，故本文的精确节号/页码以成功读取的出版社正式目录为准；没有宣称对整本正文作了逐页勘误审查。
- 逐章出版社页面主要支持章名、页码及可公开读取的摘要；完整节号由正式目录支持。本文将某项内容移交 AG、IT 或独立专题的建议是编辑判断，逐章链接并不表示出版社为该分类背书。关于交乘证明范围和 Brill–Noether 证明范围的判断，另有成功读取的正式导言明确支持。

## 7. 用于 PreTeXt 的导入原则

本表不意味着把一本书拆成几个同名章节。每个未来章节应从自己的数学问题出发，以“定义对象—构造—定理—证明—几何解释—反例/算例”完成一个单元，并标明共有基础的唯一完整归宿。来自《3264》的例子可在不同笔记重复出现，但每次应承担新的论证任务，而不是重复全文。

建议为具体例子建立稳定 ID，使同一算例的 AG 构造、IT 类计算、EG 枚举解释、GW/DT 比较可以互相链接。章节引用应区分“本书提供几何解释”“本书给出证明”“这里使用更一般结果”；尤其不得以第 8 章为一般 GW 虚类基础、以第 14 章为 quantum K 基础、以附录 D 为完整曲线模理论的替代。
