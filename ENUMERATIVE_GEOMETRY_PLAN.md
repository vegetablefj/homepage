# 计数几何笔记：分配、目录与基础理论归属

本文件规划 homepage 中一组长期维护的英文 PreTeXt 笔记；规划与文献辨析使用中文。写作遵循 [经典数学内容笔记构建框架](CLASSICAL_NOTES_FRAMEWORK.md)、[笔记撰写与维护](NOTES.md) 与数学笔记写作指南。目录可以根据完整主题的试写调整，不以预定章数或一次覆盖全部研究方向为完成标准。

配套文件：

- [3264 and All That 的逐章拆分与迁移建议](planning/enumerative-geometry/3264-content-map.md)。
- [参考文献分工与现代研究衔接](planning/enumerative-geometry/sources-and-modern-directions.md)。

## 1. 本次确定的方向

核心问题是：几何模问题怎样表示或代数化；自然对象是 scheme、algebraic space 还是 stack；怎样选择紧化与阻碍理论；怎样得到良定义的交数或虚计数；计数又怎样产生量子乘法、形式 Frobenius 结构、量子联络及解析实现。

以代数几何为主要构造语言，适当解释辛几何中的对应对象和比较定理。不直接发展镜像对称，不以镜像空间、超势、SYZ 或同调镜像作为正文组织方式。Gamma 问题从量子联络及其渐近结构出发；非阿基米德方向指在 Novikov 类型系数上实现形式量子结构，而非构造镜像。

Schubert calculus 是核心论题，包含 Grassmannian、旗流形、经典与等变乘法，并与 quantum Schubert calculus 衔接。Quantum K-theory 有自己的虚结构层、配对与差分结构，单独安排。等变性是贯穿相交、GW、DT/PT 与 K 理论的结构，不因每个等变版本另开一份笔记。

经典文献负责可靠的构造与证明，不把其出版年代当作收录边界。现代工作以明确的输入、输出和适用范围接入；不把所有新语言设为阅读入门例子的先修，也不以更换语言代替已有构造的证明。

## 2. 分成七份长期笔记

此前五份的建议，在完整纳入 quantum K-theory、Gamma 与非阿基米德解析结构后调整为七份。前两份是共享理论，其余围绕具体模对象或量子结构组织。七份是长期归属，不是要求同时建立七份空正文。

| 代号 | 英文标题 | 主要职责 | 不在本篇重建的基础 |
| --- | --- | --- | --- |
| IT | Intersection theory and Schubert calculus | 普通与等变相交、特征类、退化轨迹、Schubert 几何及经典枚举 | scheme 基础、一般层上同调、射影丛和 Grassmannian 的一般可代表性 |
| VI | Virtual intersection theory | 阻碍理论如何产生虚类、虚结构层及局部化；支撑 GW、DT/PT、QK | 一般 algebraic stacks、Hilbert/Quot/GIT、完整余切复形及 derived AG 基础 |
| GW | Gromov–Witten theory | 稳定映射、具体紧化与阻碍理论、虚积分、公理、退化与后裔 | 一般模空间存在性机器、完整模曲线理论、完整辛分析基础 |
| QC | Quantum cohomology and formal Frobenius structures | 势函数、形式系数与底空间、量子乘法、Euler 场、量子 Schubert 计算 | 完备交换代数与形式几何的一般理论 |
| DT | Donaldson–Thomas and stable pair theories | 理想层、stable pairs、三维虚计数、稳定性变化与对应 | 一般稳定层模空间、GIT、完整 Bridgeland 稳定性与 derived-category 基础 |
| QK | Quantum K-theory | K 理论 GW、虚结构层、修正配对、Schubert 计算、差分结构 | 完整代数 K 理论或高阶 K 理论 |
| QA | Quantum connections and analytic structures | 复解析量子联络、Gamma 与整结构；非阿基米德解析实现、F-bundles | 一般亚纯微分方程与 rigid/Berkovich/adic 几何的完整教材 |

IT 的通用相交部分本身属于代数几何基础设施，Schubert 部分则是这里的核心几何内容。VI 是交叉理论的进一步发展。把它们作为共享书籍，不等于在每份计数笔记里重复建设基础。

## 3. 一般代数几何应该承担什么

不能仅凭某个概念首次出现在枚举书里，就把它归为计数几何。同一个对象需要分开处理“它怎样构造”和“在它上面怎样做相交或计数”。

| 内容 | 一般理论的归属 | 计数系列实际保留的工作 |
| --- | --- | --- |
| coherent sheaves、cohomology、base change、Serre duality、flatness | 一般代数几何／几何上同调 | 明示本次对象满足哪些条件，写出实际使用的映射和结论 |
| projective bundles、Grassmannians、flag bundles、universal sub/quotient bundles | 代数几何中的参数空间与向量丛 | IT 中计算其 Chow 环、特征类与 Schubert 类；不重证所有可代表性 |
| blowup、Rees algebra、normal cone、regular immersion、lci | 一般代数几何的构造与局部性质 | IT 完整解释正规锥变形、Gysin 和 excess 如何使用这些对象；必要时回顾构造，不重复一般 blowup 教程 |
| Hilbert/Quot functors、boundedness、GIT、一般模空间存在定理 | 代数模空间理论 | GW/DT 写清具体模函子、稳定性、使用哪条存在定理、为何满足条件及普遍性质 |
| descent、algebraic spaces、DM/Artin stacks、coarse moduli、gerbes、rigidification | 代数栈与模问题 | 对稳定映射、层、理想层和 stable pairs 逐项核查自同构与表示性质 |
| 一般无穷小形变、cotangent complex、Ext 与 derived deformation | 形变理论／导出代数几何 | VI 构造具体 POT 与虚类；GW/DT 核算自己的形变复形和 trace-free 部分 |
| 曲线上的线性系、Picard/Jacobian、Brill–Noether | 代数曲线与线性系 | IT 保留 Porteous/GRR 的应用实例；不把完整曲线理论塞入附录 |
| 形式幂级数、逆极限、完备拓扑、连续导子 | 交换代数／形式几何 | QC 明确选用的完成、允许的无穷和、切模及运算的连续性 |
| affinoid、解析域、层与粘合、形式模型、generic fiber | 非阿基米德解析几何 | QA 构造本题所需的解析底空间、证明具体收敛并延拓量子结构 |
| 微分方程的形式分类、Stokes 与 Riemann–Hilbert | 微分方程／解析几何 | QA 计算并解释量子联络所产生的具体数据 |

### 3.1 当前已有笔记能提供多少

homepage 目前已有范畴论、同调代数、toric、hyperkähler 等正文，但没有覆盖上述全部一般 AG／stacks／moduli 基础的系统笔记。

- 范畴论与同调代数提供函子、伴随、Ext/Tor、导出范畴与形式函子运算的语言。它们不自动提供代数栈、余切复形和模空间的几何存在定理。
- toric 笔记提供 fans、divisors、特定 Chow 环、权重与 toric 例子。第八章作为接口保留，将深入理论链接到这里的笔记。
- hyperkähler 的层模空间章节可以复用几何例子与 Mukai/Serre 对偶的解释，但其中外部调用的 boundedness/GIT 不能反过来当作已完成的一般基础。
- affine-basics 等短示例不能视为完整 AG 先修。

未来可另建“代数模空间与形变理论”“代数栈”“形式与非阿基米德几何”等支持笔记；当前先使用可靠外部来源，并登记准确输入。无需等待支持书全部完成才写计数理论，也不把这些支持书伪装成计数笔记的长附录。

### 3.2 什么程度的回顾应留在正文

一个已知结果在此处如何应用，属于本篇论证。比如：

1. 说明稳定映射的模对象与自同构，引用一般代数化定理，然后核查真性、有限型及粗模空间的版本。
2. 写出理想层或 stable pair 的形变复形，解释固定行列式的 trace-free 条件，并证明所需振幅。
3. 说明为何一个生成函数在指定完备环中存在，系数何以满足有限性，变量替换何时连续。

以上不能仅用“见一般 AG”省略。反之，Hilbert scheme 的一般构造、全部下降理论或任意形式概形的理论不在这里重复证明。

### 3.3 支撑理论的实际来源

外接需要有真实出处，不能只把内容移到一个尚不存在的本地书名下。当前先采用以下来源；逐章调用时定位具体定理、假设和稳定 tag。

| 支撑内容 | 当前来源 | 使用边界 |
| --- | --- | --- |
| scheme、coherent cohomology、base change、cotangent 等通用结果 | [Stacks Project](https://stacks.math.columbia.edu/) | 分别调用实际章节，不把所有内容统称“AG 已知”；记录稳定 tag 与采用版本 |
| Hilbert 与 Quot 的一般构造 | Nitsure, [Construction of Hilbert and Quot Schemes](https://arxiv.org/abs/math/0504590) | GW/DT 负责将特定模问题放入此框架，继续检查稳定性与边界 |
| descent、algebraic spaces/stacks、粗模空间、gerbes | Olsson, [Algebraic Spaces and Stacks](https://doi.org/10.1090/coll/062) | 一般理论外接，具体对象的 stabilizer 与普遍族就在本篇核查 |
| 概形形变的通用构造 | Sernesi, [Deformations of Algebraic Schemes](https://link.springer.com/book/10.1007/978-3-540-30615-3)；Stacks 的 cotangent/形变章节 | 不能把经典切空间计算当成全部 derived deformation；POT 机制由 VI 承担 |
| DM/Artin stacks 的 Chow 与所需推前、Gysin | Kresch, [Cycle groups for Artin stacks](https://arxiv.org/abs/math/9810166)，配合 VI 的 BF 主参考 | 逐条核查空间类别与 morphism 假设，不宣称任意 Artin stack 上无条件具备全部普通交叉操作 |
| refined intersection 与特征类的系统基础 | Fulton, [Intersection Theory](https://link.springer.com/book/10.1007/978-1-4612-1700-8) | 由 IT 吸收本项目的完整主版本；3264 提供问题与几何解释 |
| 形式模型与刚性解析几何的基础入口 | Bosch, [Lectures on Formal and Rigid Geometry](https://link.springer.com/book/10.1007/978-3-319-04417-0) | 使用前核对所选域与赋值条件；一般形式模型定理不能未经核查套到所有 Novikov 域 |

一般稳定层模空间先沿现有 hyperkähler 章节实际调用的 Huybrechts–Lehn 版本外接；导出与解析的后续输入由配套文献分工文件逐项登记。一般理论的“未来本地归宿”与“当前可用来源”始终区分。

## 4. 各份笔记的暂定目录

各篇的第 0 章承担约定、输入结果和阅读路线；每章列明其核心问题和主要文献。下表中的“研究接口”要有精确结果和一个可理解的例子，不以名词列表代替正文。

### IT. Intersection theory and Schubert calculus

目标：建立可用于实际几何问题的相交语言，并将 Schubert 几何作为持续发展的主线。以射影空间、Grassmannian 和旗流形贯穿，不把这篇改写成 3264 的逐章复刻。

| 章 | 英文标题 | 要完成的问题与内容 |
| --- | --- | --- |
| 0 | Conventions, sources, and geometric problems | Chow 的维数／余维记号、基域、光滑与一般空间版本；确定哪些结果引用一般 AG |
| 1 | Cycles and rational equivalence | 循环、divisors of functions、rational equivalence、局部化序列与基本反例 |
| 2 | Pushforward, pullback, and families | proper pushforward、flat pullback、基变换与投影公式；不能把所有态射都当作有普通 pullback |
| 3 | Cartier divisors and intersection multiplicities | Cartier 与 Weil 的区别、局部重数、非横截交点；同一集合可有不同概形长度 |
| 4 | Chern classes, Segre classes, and projective bundles | 特征类的构造、projective bundle formula、约定转换、零点类与 splitting principle |
| 5 | Normal cones and deformation to the normal cone | 从 AG 的 normal cone/blowup 构造导出 specialization；为 refined Gysin 建立几何机制 |
| 6 | Refined Gysin maps and excess intersection | regular embeddings、base change、self-intersection、excess formula 与可计算模型 |
| 7 | Intersection products and operational classes | 光滑空间的环、一般空间的操作性类；bivariant 理论采用明确范围，繁重构造精确引用 |
| 8 | Degeneracy loci and determinantal formulas | 预期余维、Thom–Porteous、失败假设的例子；bundle map 与 degeneracy scheme |
| 9 | Grassmannians and Schubert geometry | 调用 Grassmannian 构造后研究 incidence schemes、Schubert cells/varieties、闭包与基底 |
| 10 | Giambelli, Pieri, and Littlewood–Richardson | 类的表达、乘法、组合规则与几何证明；明确 ordinary type A 的主范围 |
| 11 | Flag varieties and Schubert polynomials | Bruhat 几何、旗丛、Schubert polynomials 与 Grassmannian 情形的关系；其他类型选读 |
| 12 | Equivariant intersection and Schubert calculus | 等变 Chow/cohomology、系数环、固定点限制、局部化与正性；匹配 K 理论接口 |
| 13 | Blowups, residual intersections, and contact problems | blowup Chow 公式、残余相交、接触条件、3264 等问题的紧化与边界贡献 |
| 14 | Riemann–Roch and comparison with K-theory | Chern character、Todd、GRR、适用条件；一般 K 理论与全部 RR 技术外接 |
| 15 | Enumerativity and further Schubert directions | 一般位置／横截性如何给真实计数；等变、量子、K 版本的精确接口与当前问题 |

主参考：Fulton 的 Intersection Theory 负责构造，Eisenbud–Harris 负责问题与部分计算，Fulton 的 Young Tableaux 及专门 Schubert 文献负责 Schubert 主线。现代扩展优先围绕正性、退化与量子／K 结构，不把 representation theory 的完整基础插入正文。

### VI. Virtual intersection theory

目标：说明所选几何模问题的阻碍数据怎样形成可积分的类。一般模空间与栈的存在理论外接；本篇对阻碍理论、锥与虚交叉承担构造责任。

| 章 | 英文标题 | 要完成的问题与内容 |
| --- | --- | --- |
| 0 | Inputs from moduli and deformation theory | 核心先取特征零有限型 DM stacks 与两项 POT，虚类在有理 Chow 群；DM 栈的 Chow/Gysin/proper pushforward 外接；cone/vector-bundle stacks 按所需范围进入 |
| 1 | Zero loci and excess-dimensional families | 截面零点模型、预期维数、非横截与零截面；区分 underlying scheme 与指定阻碍数据 |
| 2 | Deformation and obstruction theories in moduli problems | square-zero extensions、切空间、阻碍和相容性；从一般理论转向具体几何复形 |
| 3 | Perfect obstruction theories | 到 cotangent complex 的态射、cohomology 条件、振幅、相对与绝对版本 |
| 4 | The intrinsic normal cone | 局部嵌入、cone stacks、下降与选择无关；标明需要的栈交叉基础 |
| 5 | Virtual fundamental classes | 锥嵌入与零截面 Gysin；构造、虚维数、局部模型、regular 与 smooth 比较 |
| 6 | Compatibility, virtual pullbacks, and deformation | compatible obstruction theories、基变换、virtual pullback、变形不变；说明兼容性假设 |
| 7 | Equivariant virtual localization | 固定部分 POT、virtual normal bundle、Euler 类、proper 与 fixed-proper 两种推前 |
| 8 | Virtual structure sheaves | coherent K-group 中的类、Tor/Gysin 模型及与虚类的比较；不把类误写成必然实际单层 |
| 9 | Symmetric obstruction theories and weighted Euler characteristics | CY3、Behrend 函数、数值恢复；区分一般 POT 的依赖与对称情形的特殊性质 |
| 10 | Cosections, reduced theories, and localization | cosection localization、reduced obstruction theories 的具体需求与代表性定理；避免把 K3 普通与 reduced 理论混同 |
| 11 | Derived explanations of virtual intersection | quasi-smooth derived 空间与经典 POT 的关系；这是受控比较，完整 derived AG 另有归属 |
| 12 | Comparison across curve-counting moduli | 稳定映射、理想层、stable pairs、QK 各自复形与输出的对照；同一模空间不自动意味着同一虚理论 |

完整保留零点模型、虚类机制与代表性相容性的证明。一般锥栈下降、完整 derived 虚类比较等技术按实际版本精确引用，不能用短略证暗示已经从头建立。

### GW. Gromov–Witten theory

目标：从稳定映射的具体模问题走到不变量、几何关系与现代紧化方法。真正处理模对象、普遍族、evaluation 和阻碍理论，不重复一般 Hilbert/GIT 构造机器。

| 章 | 英文标题 | 要完成的问题与内容 |
| --- | --- | --- |
| 0 | Targets, curve classes, and conventions | 光滑射影靶的主设定、稳定范围、次数与系数；辛比较另列假设 |
| 1 | Stable curves and stabilization | 调用模曲线基础后建立稳定化、forgetful 与 clutching；说明不稳定例外 |
| 2 | Stable maps as a moduli problem | families、isomorphisms、自动同构；为何自然是 DM stack，粗模空间与普遍族分别是什么 |
| 3 | Construction and compactification | 具体构造路线、调用的存在定理、stable reduction、真性、projective coarse space 的范围 |
| 4 | Universal curves, evaluation, and tautological classes | universal curve、sections、evaluation、psi/kappa/Hodge 类；区分祖先与后裔 |
| 5 | Obstruction theory and virtual dimension | 相对形变复形及其对偶约定、与变动源曲线的拼接；虚维数公式的推导 |
| 6 | Invariants and enumerative interpretations | 插入、推前、维数、变形不变；有限稳定子与有理系数，何时虚积分真是曲线数，何时有 covers/contracted components |
| 7 | Boundary geometry and splitting | 纤维积、diagonal、gluing 与 POT 相容；由几何分裂得到公式 |
| 8 | String, divisor, dilaton, and recursion | 相关方程的稳定范围、TRR 与 WDVV 的来源；与 QC 的接口 |
| 9 | Convex targets and Schubert problems | 射影空间、Grassmannians、齐性靶；Kontsevich 递推与 quantum-equals-classical 的实际范围 |
| 10 | Localization and obstructed examples | 固定图、automorphism 因子、Hodge integrals；配上多重覆盖和有阻碍的例子 |
| 11 | Relative and logarithmic stable maps | expanded 与 log 两种路线的对象、接触阶、紧化与比较；一般 log geometry 外接 |
| 12 | Degeneration and gluing formulas | admissible data、contact matching、退化公式及一项完整应用；不由“有退化”直接推出计数相等 |
| 13 | Cohomological field theories and higher genus | 由 GW 类获得 CohFT；高亏格重构的假设与范围，避免把属零等同完整 GW |
| 14 | Alternative compactifications and wall-crossing | quasimaps/stable quotients 的受控入门；至少一个有精确条件的比较结果 |
| 15 | Algebraic and symplectic perspectives | Fredholm、bubbling、compactness、gluing 的对应作用；复射影/Kähler 比较定理；完整分析证明外接 |

现代路线以相对／对数退化、CohFT、quasimaps 等为实际扩展，不要求这些语言全部成为第 2 章的前提。辛背景在对象与机制出现时解释，末章集中比较，不发展 Fukaya 或镜像。

### QC. Quantum cohomology and formal Frobenius structures

目标：从已经定义的 GW 系数严格建立形式代数与几何结构。一般形式几何可以外接，但本题采用哪一种系数环、完成、切模、连续运算和 Euler 约定必须直接写清。

| 章 | 英文标题 | 要完成的问题与内容 |
| --- | --- | --- |
| 0 | Cohomology, parity, and conventions | ordinary even 与完整 super 版本；Poincaré 配对、次数与系数约定 |
| 1 | Effective classes and Novikov completions | monoid、energy filtration、允许的支撑与乘法有限性；不默认有效锥自由或有限生成 |
| 2 | Formal bases and continuous vector fields | 从截断与逆极限解释选用的参数环；相对切模、连续导子、完成后的张量与求导 |
| 3 | Genus-zero potentials | 稳定与不稳定项、经典三次项、形式求和、插入与 divisor 参数；说明函数落在哪个环 |
| 4 | Quantum products and WDVV | 三阶导数、配对、单位、结合律、势的低阶歧义；从 GW 分裂得到结构 |
| 5 | Frobenius structures and flat connections | 形式 Frobenius (super)manifold、平坦度量、potentiality、单位与相关定义差异 |
| 6 | Gradings and Euler vector fields | 上同调分次、虚维数、c1 平移项与齐次公式；明确是否作用于 Novikov 系数及对数坐标 |
| 7 | Divisor variables and reconstruction | small/big、除子方程、指数坐标与 Novikov 参数的冗余；重构的真实假设 |
| 8 | Quantum Schubert calculus | Grassmannian 的 quantum Pieri/Giambelli、三点结构常数、kernel/span 与 quantum-equals-classical |
| 9 | Equivariant quantum Schubert calculus | mixed structure constants、equivariant Chevalley 与计算；正性及普通极限 |
| 10 | Quantum connections | z 方向与参数方向、平坦性、grading operator、fundamental solutions 的形式版本 |
| 11 | Semisimplicity and canonical coordinates | 在适当扩域/局部化下讨论半单与判别式；普通、small、big 半单性不混同 |
| 12 | Frobenius structures and CohFTs | 与 GW/CohFT 的相互输入；半单高亏格重构需要的附加数据和假设 |
| 13 | Complete examples and analytic interfaces | P1 的全部属零结构、一个非平凡 Grassmannian、一个非半单边界；向 QA 输出明确形式数据 |

主参考以 Lee–Pandharipande、Manin 和 GW 原典分工，不以解析 manifold 的图像替代形式定义。QA 负责收敛、解析域和 Stokes；QC 不假定所有形式级数都能任意代入数值。通常 Chow 环没有所需有限维非退化配对，不能把“代数几何视角”误写成把全部 cohomology 机械换成 Chow。

### DT. Donaldson–Thomas and stable pair theories

目标：解释 DT 的具体模对象、三维阻碍机制、能得到的数值及其用途，并以曲线计数贯通 GW。普通三维理论与 CY3 的特殊性质始终区分。

| 章 | 英文标题 | 要完成的问题与内容 |
| --- | --- | --- |
| 0 | Threefolds, sheaves, and numerical data | curve class、Euler characteristic、行列式、稳定性；CY 的实际假设与非 CY 的插入 |
| 1 | Ideal sheaves and Hilbert moduli | I_n(X,beta) 的具体模函子、嵌入子概形与理想层、properness；一般 Hilbert 构造外接 |
| 2 | Trace-free deformation and obstruction theory | universal ideal、Ext1/Ext2、固定行列式、Serre 对偶与振幅；不套用 naive Hilbert normal sheaf 阻碍 |
| 3 | DT virtual classes and invariants | 由 VI 得到虚类、虚维数、插入和变形不变；degree zero 与 reduced series 的归一化 |
| 4 | Stable pairs and their moduli | pure one-dimensional F、截面及零维余核、automorphisms、projective moduli 与普遍对 |
| 5 | Stable pairs as complexes | [O_X to F] 的导出形变、固定 determinant、PT 虚类；与层加截面的朴素形变区别 |
| 6 | Descendents and universal constructions | universal objects、Chern characters、推前与次数约定；DT/PT 同名后裔的转换 |
| 7 | Symmetric theories and weighted Euler characteristics | CY3、Behrend 函数、Hilb1(X)=X 与 -chi(X)；虚计数不是逐点计数 |
| 8 | Equivariant and local threefold calculations | fixed-proper 的局部化、局部曲线、零维子概形；标明参数依赖与非等变极限 |
| 9 | The DT/PT correspondence | degree-zero factor、Hall algebra 机制、数值与生成函数；完整一般 Hall 理论外接 |
| 10 | GW, DT, and stable-pair correspondences | 变量替换、插入、relative/descendent 范围；选一个已证目标类，逐步核查比较链 |
| 11 | Generalized DT invariants and wall-crossing | strictly semistable objects、rational invariants、稳定性变化及一个完整墙穿越模型 |
| 12 | Derived and critical structures | shifted symplectic 与 d-critical 如何解释局部临界模型；具体比较定理而非完整 derived AG |
| 13 | Cohomological and motivic refinements | vanishing cycles、orientation 的角色与适用范围；quiver 示例及到几何三维的接口 |
| 14 | K-theoretic DT/PT and further applications | 虚结构层、可能的对称化/取平方根选择、局部化；区别于稳定映射的 quantum K-ring |

第 1–10 章构成经典数值三维主线，第 11–14 章逐个选择可达专题。orientation 不是普通数值 DT 虚类的一般先决条件；在某些 cohomological/motivic 或对称化 K 理论提升中另行说明。GW/DT/PT 不采用无条件全局“全部已证”表述。

### QK. Quantum K-theory

目标：沿稳定映射与虚结构层建立另一种量子计数，特别重视 Schubert 几何、等变版本和差分结构。与 QC 共享模空间，却保留配对、分裂和自同构贡献的差异。

| 章 | 英文标题 | 要完成的问题与内容 |
| --- | --- | --- |
| 0 | K-groups, G-groups, and Euler pushforward | algebraic K0/G0 与推前；量子环另指定有限状态空间及经典 Euler 配对非退化条件，一般靶采用 $K^0_{\mathrm{top}}(X)\otimes\mathbf Q$ 主版本并解释推前；齐性例的代数实现单独核实 |
| 1 | K-theoretic Gromov–Witten invariants | 引用 VI 的虚结构类构造，给出稳定映射上的 true 不变量；proper stack 上的推前 |
| 2 | Coefficients and generating functions | Novikov 完成、插入参数与有限性；没有普通 cohomological divisor equation，不能照搬 QC 的 t/Q 去冗余；没有相同的次数消失机制 |
| 3 | The quantum metric and quantum product | 两点函数修正配对、逆矩阵、三点函数；不能沿用经典 Euler 配对直接定义乘法 |
| 4 | Splitting, WDVV, and Frobenius-type structures | K 理论 gluing、结合律、单位；Lee 的修正度量平坦，但其单位一般不对该度量平行，区别于 QC 的 flat-unit 定义 |
| 5 | Classical Schubert K-theory | structure sheaves、对偶类、Euler pairing、Grothendieck polynomials；与 IT 的 Chern character 比较 |
| 6 | Quantum K-theory of Grassmannians | quantum Pieri/Giambelli、三点不变量与两步旗流形的经典 K 交叉 |
| 7 | Equivariant quantum K-theory | R(T) 系数、localized Euler characteristics、Schubert constants 与固定点计算 |
| 8 | Finiteness, rationality, and presentations | 哪些目标有有限多项式乘法；分别列出已知定理与一般形式级数 |
| 9 | Quantum difference equations | Novikov shifts、q-difference operators、与参数微分方程的关系；q 与曲线参数 Q 分开 |
| 10 | Reconstruction and convergence | 差分系统重构及条件性收敛；不由 QC 收敛直接推出 QK 收敛 |
| 11 | True, fake, and orbifold contributions | virtual Kawasaki–RR、inertia contributions；普通 RR 的输出为何不等于全部 true 理论 |
| 12 | Permutation-equivariant quantum K-theory | 标记点置换、Adams operations 与 genus-zero formalism；与 target torus equivariance 明确区分 |
| 13 | Flag varieties and current algebraic structures | 选择有限性、环关系或 Toda-type presentation 的一个现代终点；不展开镜像解释 |

以 Lee 的 Foundations 为构造主线，以 Buch–Mihalcea 的 Grassmannian 为几何主线，再进入 Givental–Tonita、Iritani–Milanov–Tonita 及近年的旗簇结果。虚结构层是 K 群中的类，不能假定它总由单个实际层表示。QK 的修正度量与单位性质须按版本核对，不笼统宣称“和 QC 完全相同”或“没有任何 Frobenius 结构”。

不能在任意光滑射影 X 的完整 algebraic K0 上默认取有限基并逆转 Euler 矩阵：该群可能很大，配对可能退化。若使用数值商或其他实现，须证明不变量及乘法确实下降，而不只是形式上商掉配对根基。QK 的 true stack Euler 推前也不同于 cohomology 中带稳定子权重的有理积分；第 11 章解释这种区别的 inertia 来源。

这里的量子环主版本先取偶的 topological K^0 状态空间；不默默把奇 K 群和完整 super 扩展纳入已建立范围。

### QA. Quantum connections and analytic structures

目标：从 QC 已建立的形式量子联络出发，分别发展复解析和非阿基米德解析问题。两部分共享形式输入，但不把 Novikov 参数任意代成复数，也不把两种解析收敛相互替代。

| 章 | 英文标题 | 要完成的问题与内容 |
| --- | --- | --- |
| 0 | Formal inputs and two analytic settings | 参数空间、z/u 方向、极点、分次；分别列复数域与非阿基米德域的输入 |
| 1 | Meromorphic quantum connections and F-bundles | quantum D-module、Frobenius/F-manifold/F-bundle 的数据与关系；没有 metric 的结构不冒称完整 Frobenius manifold |
| 2 | Complex convergence and specialization | small 与 big 区别、明确可用的收敛定理和赋值域；Fano small 理论的有限性 |
| 3 | Irregular singularities and asymptotic solutions | 所需形式分类、扇形解、Stokes 与连接矩阵；一般微分方程定理外接 |
| 4 | Gamma classes and integral structures | Gamma characteristic class、模去 torsion 的 topological K lattice 与平坦截面格、normalizations；一般 algebraic K 的像未必给完整格 |
| 5 | Gamma conjectures and their revisions | I/II 的具体假设与区别、已证族、原始 I 的反例及修改；每个陈述保留版本信息 |
| 6 | Examples in complex quantum connections | projective spaces/Grassmannians 的可计算数据；不把全部证明转入镜像理论 |
| 7 | Valued coefficient fields and analytic domains | 特征零完备、非平凡赋值的非阿基米德域，赋值在 Q 上平凡；可另选平凡赋值的常数域；Novikov 类型域、affinoid/open domains |
| 8 | Non-archimedean convergence of GW potentials | q 赋值位于 ample cone；正偶次数 t 在开单位多圆盘，t0 可沿解析仿射线，奇参数用外代数；证明具体收敛 |
| 9 | Analytic quantum products and F-bundles | potential、配对、乘法与联络解析化；除子参数去冗余、maximal/overmaximal 与对数切模 |
| 10 | Spectral decomposition and framing | Euler action、formal 分解与 analytic 分解、framing 延拓；分清存在与唯一性 |
| 11 | Projective bundles, blowups, and transformations | 选定可用比较定理，计算一个例子并核查形式／解析基底变化 |
| 12 | Research interfaces and limits of the framework | Hodge/nc-Hodge 与双有理问题的入口；按文献状态陈述，不预先收入所有应用大定理 |

Gamma 分支可先从 Fano 小量子乘法与 z 方向有限秩亚纯连接起步，不要求先证明任意 big potential 的复收敛。非阿基米德分支在指定域上可使用原始 GW 系数的平凡赋值性质；不据此推论通常 p-adic 赋值、闭单位球、任意扩大域或任意形式结构均收敛。

## 5. 怎样融会贯通

各书按对象与结构承担完整任务，联系由同一问题的不同构造建立，不靠重复引言或泛泛的“统一观点”。

### 5.1 三条主路线与两条扩展

| 路线 | 跨篇次序 | 必须真正闭合的论证 |
| --- | --- | --- |
| Grassmannian 与 Schubert | 一般 AG 的 Grassmannian/tautological 输入 → IT → GW → QC → QK；等变版本贯穿 | incidence 条件何时给真交数；三点 GW 如何改变乘法；K 类、配对与结构常数为何改变 |
| 形变、阻碍与虚交叉 | AG 的 cotangent/Ext 输入 → VI → GW/DT/QK | 在各具体模空间上构造所需复形，再证明或精确引用与 VI 的兼容，不能只借用虚类符号 |
| 曲线的不同紧化 | Hilbert/稳定映射的 AG 输入 → GW 与 DT/PT → 退化／对应 | map、subscheme、pair 数的对象不同；说明生成函数为何能比较及所需归一化 |
| 形式到解析 | GW → QC → QA 两支 | 同一系数与联络从形式对象进入哪一个解析域；哪些运算可延拓、哪些特化未获许可 |
| 数值到 K／cohomological 提升 | VI → QK 与 DT 后部 | 虚类、虚结构类、加权 Euler、vanishing cycles 的输出与附加数据分别是什么 |

这是一张依赖网络。比如 DT 的数值入门不要求读完 QA；Schubert 基础不要求先学 derived geometry；QK 的基础不要求先证明 Gamma 猜想。

### 5.2 贯穿例子与作用

| 例子 | 首次归属 | 后续使用及局限 |
| --- | --- | --- |
| P1 上 O(2) 截面的两个零点、双零点、零截面 | IT/VI | 同时检查长度、超额维数、POT、虚次数；不能仅凭底层空间自动指定虚类 |
| Gr(2,4) 上四条一般直线的公共截线 | IT | 计数=2 的相交解释；QC/QK 中对比普通、量子、K 与等变结构 |
| P2 中有理曲线的 Kontsevich 递推 | GW/QC | 从边界关系到 WDVV；小量子环的简单关系不能替代全部 big potential |
| f:P1→P1, z↦z^d | GW | stabilizer mu_d、stack 与 coarse 的区别；不能在未隔离的整个模空间上直接把 1/d 当作完整不变量 |
| Hilb1(X)=X，X 为光滑射影 CY3 | DT/VI | 实际维数 3、虚维数 0、点 DT=-chi_top(X)；解释光滑模空间也需要虚理论 |
| local (-1,-1) curve | GW/DT | covers、等变非紧计数与受控的 GW/PT 比较；明确普通、局部与等变设定 |
| K3 曲线的 reduced theory | VI/GW/DT 接口 | 解释额外阻碍方向与 reduced 类；不把 CY3 阻碍复形直接移用于曲面 |
| P1 的形式势与量子联络 | QC/QA | 实际核算配对、单位、Euler、flatness 与非阿基米德收敛；记录 divisor/Novikov 坐标选择 |
| 一个 Grassmannian 的 quantum K-ring | QK | 检查修正配对、有限性与等变 Schubert 常数；与普通 cohomology 交数逐项对照 |

### 5.3 每个具体模空间都回答同一组问题

这组问题放在实际对象的构造处，避免提前形成泛化的模空间百科：

1. 家族与同构怎样定义，是否需要平坦性、稳定性或额外标记？
2. 自然模对象属于哪类空间？粗模空间与 stack 分别表示什么？
3. 自同构、普遍族、普遍层、gerbe 或 rigidification 存在哪些区别？
4. boundedness、有限型、代数化、分离与真性分别从何处获得？
5. 形变与阻碍由哪个复形控制？何种相对基底？振幅与虚维数如何核查？
6. 推前落在 Chow/cohomology、K-group、表示环还是局部化系数中？
7. 插入与维数是否匹配，是否需要 equivariant、reduced 或其他附加结构？
8. 何时得到真实有限几何对象的计数，何时只有虚计数或 Euler 特征？

## 6. 现代研究怎样接入

[参考分工文件](planning/enumerative-geometry/sources-and-modern-directions.md)给出逐组来源。正文采取“成熟主线 + 有范围的扩展”：

| 成熟主线 | 可选的现代终点 | 新基础的处理 |
| --- | --- | --- |
| refined intersections、POT、virtual classes | virtual pullbacks、cosection/reduced、quasi-smooth derived 比较 | 一般 cotangent/derived 建设外接；在 VI 证明具体比较和应用 |
| 稳定映射与 degeneration | logarithmic GW 的分解、quasimap wall-crossing | log structures 与一般 quasimap 基础外接；写清两个模问题及比较定理 |
| 属零结构与 CohFT | 满足假设的半单重构 | 不把每个 Frobenius manifold 都说成决定任意高亏格理论 |
| CY3 DT/PT | generalized wall-crossing、d-critical、vanishing cycles | Hall/stability/orientation 分工明确；不声称所有几何 DT 一律已有同一个 cohomological 提升 |
| Grassmannian QK | 旗簇的有限性、环表示与差分结构 | 用具体目标类与定理进入；不把特殊有限性当成一般定义 |
| 形式量子联络 | non-archimedean F-bundle 的分解/framing、Gamma 结构 | 分清复与非阿基米德的收敛、分解存在与唯一、定义与研究猜想 |

### 6.1 需要保留的版本与范围辨析

- 经典 MNOP 文献含猜想。所有对应都附目标、equivariant/relative/descendent 条件、变量替换和约化因子，不以一个已证特例代表一般理论。
- 原始 Gamma I 已有满足 Property O 的反例。QA 分别陈述历史版本、已证特殊情形、反例与修改，不称为一个未经修订的普遍正确原理。
- 非阿基米德实现不自动推出复解析收敛，也不自动证明 Gamma 问题；在常数域上平凡的赋值与 p-adic 赋值不混用。
- 普通数值 DT、motivic/cohomological DT、K-theoretic DT 与稳定映射的 QK 分别处理。
- 现代预印本的重大应用先作为有版本的研究出口。是否纳入核心结果，取决于后续逐条核查及与本篇目标的相关性，不凭摘要或可获取链接决定。

### 6.2 各书主参考的具体分工

此表确定组织与证明的主来源；完整的现代方向和链接见配套来源文件。正式逐章写作时再定位 theorem/section，不从目录规划中推断尚未核实的命题编号。

| 笔记与章节 | 主来源及任务 |
| --- | --- |
| IT 1–8、13–14 | [Fulton, Intersection Theory](https://link.springer.com/book/10.1007/978-1-4612-1700-8) 承担循环、特征类、refined intersection 与 excess 的系统主线；[3264](https://doi.org/10.1017/CBO9781139062046) 提供问题、几何解释和精选算例 |
| IT 9–12、15 | [Fulton, Young Tableaux](https://www.cambridge.org/core/books/young-tableaux/A7570B10D82AE7233E25E5D6F70A07B6) 与 3264 第 3–5 章负责经典 Schubert；等变来源见配套第 4、14 组 |
| VI 1–7 | [Behrend–Fantechi](https://arxiv.org/abs/alg-geom/9601010) 负责 POT/锥/虚类，[Manolache](https://arxiv.org/abs/0805.2065) 负责 virtual pullbacks，[Graber–Pandharipande](https://arxiv.org/abs/alg-geom/9708001) 负责虚局部化 |
| VI 8–12 | [Lee](https://arxiv.org/abs/math/0105014) 负责虚结构类；[Behrend](https://arxiv.org/abs/math/0507523) 负责加权 Euler；cosection 与 derived 接口见配套第 2、12 组及其补充 |
| GW 1–10 | [Fulton–Pandharipande](https://arxiv.org/abs/alg-geom/9608011) 负责稳定映射的代数路线，[Kock–Vainsencher](https://mat.uab.es/~kock/invitation.html) 负责属零几何闭合例子；一般虚类由 VI 和原始构造补足 |
| GW 11–15 | 配套第 5–7、20 组分别处理 relative/log、CohFT、辛比较；quasimap 的具体来源随第 7 组后的补充进入 |
| QC 1–7、10–13 | [Manin](https://doi.org/10.1090/coll/047)、[Dubrovin](https://arxiv.org/abs/hep-th/9407018) 负责结构定义与分层；[Kontsevich–Manin](https://arxiv.org/abs/hep-th/9402147) 与 GW 输入负责来源；[Lee–Pandharipande 第 2 章](https://people.math.ethz.ch/~rahul/Part1.pdf) 负责具体形式实现和计算对照 |
| QC 8–9 | [Buch–Kresch–Tamvakis](https://arxiv.org/abs/math/0306388) 与 [Mihalcea](https://arxiv.org/abs/math/0501213) 将 Schubert、GW 与量子乘法接通 |
| DT 1–10 | [13/2 ways of counting curves](https://arxiv.org/abs/1111.1552) 组织不同紧化的导览；Thomas、PT、Behrend 和具体对应文献承担构造与证明，见配套第 9–11 组 |
| DT 11–14 | 配套第 11–13 组负责广义 DT、Hall、derived/d-critical 与 cohomological 选读；K-theoretic DT 在选定几何设定后另补精确来源 |
| QK 0–8 | [Lee](https://arxiv.org/abs/math/0105014) 与 [Buch–Mihalcea](https://arxiv.org/abs/0810.0981) 分别负责理论构造和 Grassmannian 几何 |
| QK 9–13 | [Iritani–Milanov–Tonita](https://arxiv.org/abs/1309.3750)、[Givental–Tonita](https://arxiv.org/abs/1106.3136) 分别负责差分/重构与 true/fake；旗簇的现代结果见配套第 16 组 |
| QA 2–6 | [Iritani 综述](https://arxiv.org/abs/2307.15938)、[GGI 原文](https://arxiv.org/abs/1404.6407) 与[反例/修改](https://arxiv.org/abs/2405.16979) 共同承担定义、实例和版本辨析 |
| QA 7–12 | [Hinault–Yu–Zhang–Zhang](https://arxiv.org/abs/2411.02266v2) 负责解析实现、分解/framing；射影丛、blowup 与更远出口见配套第 18–19 组 |

## 7. PreTeXt 落地约定

本轮先保存分配、目录与来源，不创建没有正文的公开 book，也不改现有站点列表或构建目标。目录确定并完成一个可读主题后，再按现行维护指南接入。

| 代号 | 候选源码目录 | 候选 book ID／结果前缀 |
| --- | --- | --- |
| IT | source/notes/intersection-schubert/ | intersection-schubert-notes ／ it- |
| VI | source/notes/virtual-intersection/ | virtual-intersection-notes ／ virt- |
| GW | source/notes/gromov-witten/ | gromov-witten-notes ／ gw- |
| QC | source/notes/quantum-cohomology/ | quantum-cohomology-notes ／ qc- |
| DT | source/notes/donaldson-thomas/ | donaldson-thomas-notes ／ dt- |
| QK | source/notes/quantum-k-theory/ | quantum-k-theory-notes ／ qk- |
| QA | source/notes/quantum-connections/ | quantum-connections-notes ／ qconn- |

每篇使用独立 book 根文件、按章包含的 chapter 文件、references、索引与必要的约定对照。正文英文，标题 sentence case。保留稳定 ID；跨书先使用稳定页面链接并重述实际调用的假设，不假定现有构建器自动支持全部跨书 xref/knowl。

旁注适合术语异同、记号归一、简短机制与精确来源。模空间的存在条件、稳定范围、振幅、系数完成与收敛域等关键假设留在正文。证明按现行模板折叠，但不能把“外部定理”装在本篇 proof 中形成已证明的印象。

### 7.1 先完成哪些主题

1. **IT 的完整试写**：Gr(2,4)、Schubert 基底与四条直线问题，前置相交结果外接并列清单。并行试写 VI 的 O(2) 零点／零截面模型。
2. **GW/QC 的闭合试写**：稳定映射的模问题与自同构、平面曲线或 P1 属零不变量、分裂到量子乘法。检验模空间—虚类—形式结构是否真的衔接。
3. **DT 的闭合试写**：Hilb1(CY3) 的阻碍与虚次数，再进入 pure F 与 stable pair。用它检验共享 VI 是否够用。
4. **QK 的闭合试写**：同一 Grassmannian 的经典 K pairing、虚 Euler、修正 metric 与一个量子乘积；不能直接复制 QC 的定义。
5. **QA 的两条试写**：P1 的复量子联络与 Gamma 整结构；独立核算指定非阿基米德域上的 potential/connection 收敛。两条均从 QC 的同一约定出发。

试写后调整各书边界，再按上述目录扩展。一般 AG 缺口使用外部来源，不因它暂时没有本地笔记而中断整条路线。

### 7.2 一轮写作的完成标准

完成一章或一个主题意味着：所选问题得到回答；对象与假设足以独立阅读；关键构造有真实态射、复形或推前；例子满足假设；代表性证明完整；外部依赖可定位；定义差异与版本已核查；跨篇调用没有循环。之后才做 PreTeXt schema、交叉引用、索引、旁注与渲染检查。构建成功与字数都不能单独代表数学完成。

## 8. 对 3264 的总取舍

详细拆解见[逐章内容地图](planning/enumerative-geometry/3264-content-map.md)。不把 3264 当作一份内容纯粹的 intersection theory 专著，也不把它当作现代 GW/DT 的基础大全。

- 移交一般 AG：向量丛、Grassmannian/flag/projective bundle 的参数空间构造、Hilbert 与切空间的一般理论、上同调基变换、线性系的通用基础。
- IT 完整吸收：Chow 与特征类、Schubert 运算、Porteous、Segre、excess、blowup 的交叉公式、接触/残余交叉及 GRR 的本篇所需版本。
- 其他专题单列接口：曲线与 Brill–Noether、模空间与稳定映射、复几何/拓扑、对称函数与表示论。
- 具体枚举问题按其解释作用选择。保留 27 lines、Grassmannian incidence、线性系奇异元、接触问题等代表性计算，不追求原书每个习题逐一重排。

最重要的分工是：一般 AG 负责参数空间存在及基本性质，IT 负责类与交叉操作，具体计数笔记负责紧化、边界、阻碍理论和枚举解释的核查。同一章可同时包含这三层，不能仅按章标题整块迁移。
