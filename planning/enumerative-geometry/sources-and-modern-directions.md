# 计数几何规划：参考分工与现代研究接口

[返回笔记分配与目录](README.md)。

核查日期：2026-10-25。本文是目录规划的支撑文件，记录文献怎样服务于构造与研究出口；不是需要顺次读完的书单，也不承担一般代数几何、代数栈、导出代数几何或非阿基米德几何的基础建设。见[主规划](README.md)及[*3264 and All That* 内容地图](3264-content-map.md)。

## 采用原则

1. 保留能实际构造对象、核查条件并完成算例的主参考；现代研究接口以具体定理或问题命名，避免按新术语排列目录。
2. 普遍的 Hilbert/Quot 构造、上同调与基变换、代数栈的表示性、余切复形、一般形变理论、导出范畴与稳定性、rigid/adic 空间分别有独立归宿。计数正文解释这些结果怎样作用于特定模问题，以及对象到底属于 scheme、DM stack 或 Artin stack。
3. 虚类的相容性是计数理论本身的核心。一般 perfect obstruction theory 可以外引；稳定映射和层模空间的具体复形、阻碍映射、虚维数以及与黏合/退化的相容性仍应在正文清楚构造。
4. 下列“可达终点”是选读层次。涉及新预印本时记录版本，并将论文中实际定理、条件性结论和猜想逐项区分。
5. 范围遵循用户要求：以代数几何为主，适当比较辛几何；不直接发展镜像对称。文献中出现该主题时，只选取本规划实际需要的构造与结论。

## 1. 稳定映射：从具体构造进入 GW

**主参考：** Fulton–Pandharipande, [*Notes on stable maps and quantum cohomology*](https://arxiv.org/abs/alg-geom/9608011)；Kock–Vainsencher, [*An Invitation to Quantum Cohomology* 作者页](https://mat.uab.es/~kock/invitation.html)。前者承担稳定映射空间、边界与量子积的代数几何组织；后者提供平面有理曲线递推这一完整算例。

**使用边界：** 不把凸靶的属零情形当成一般 GW 理论的全部基础。前置的 Hilbert scheme、GIT、稳定曲线和 DM stack 理论外引；正文保留稳定条件、有限自同构、普遍族、评价/遗忘/黏合态射及真性的具体机制。可达终点是能够解释为什么稳定映射自然形成 stack，以及粗模空间能做什么、不能代替什么。

## 2. 虚基本类：构造与可比较性

**主参考：** Behrend–Fantechi, [*The intrinsic normal cone*](https://arxiv.org/abs/alg-geom/9601010)；Manolache, [*Virtual pull-backs*](https://arxiv.org/abs/0805.2065)。

**分工与终点：** 先用零点空间、超额相交说明 normal cone 和二项复形；再给精确的 obstruction theory 条件及虚类构造。Manolache 提供相对虚 pull-back 与复合相容性，适合把“两个虚类为何相同”从口头解释变成可检查的图表。一般余切复形与栈的交叉理论外引；正文证明代表性的正则截面模型，并完整核查 GW/DT 实例的假设。

**局部化与 reduced 接口：** Kiem–Li, [*Localizing Virtual Cycles by Cosections*](https://arxiv.org/abs/1007.3085) 将虚类局部化到 cosection 的非满射 locus；[ *Localizing virtual structure sheaves by cosections*](https://arxiv.org/abs/1705.09458) 给出 K 理论版本。reduced obstruction theory 与 cosection localization 不按名称等同，具体应用分别核查。Kiem–Park, [*Cosection localization via shifted symplectic geometry*](https://arxiv.org/abs/2504.19542) 可作后续导出解释选读；其 quasi-smooth、移位闭形式等附加输入不能省略。

## 3. 虚局部化：使等变理论真正成为计算方法

**主参考：** Graber–Pandharipande, [*Localization of virtual classes*](https://arxiv.org/abs/alg-geom/9708001)。

**分工与终点：** 学会把固定部分继承的 obstruction theory、移动部分的虚正规丛和 Euler 类分开。先完整算一个低次数属零例，再解释图求和与高亏格固定曲线积分。非紧靶只在固定模空间真且局部化框架适用时定义相应等变数；是否可取非等变极限是单独命题。

## 4. 等变交叉理论：共用支撑，不重复建设

**主参考：** Edidin–Graham, [*Equivariant intersection theory*，缩订版](https://arxiv.org/abs/alg-geom/9609018)；[ *Localization in equivariant intersection theory and the Bott residue formula*](https://arxiv.org/abs/alg-geom/9508001)。

**分工与终点：** 等变 Chow 群、商栈及参数环放在交叉理论的统一章节；各计数篇只核查相应群作用、固定部分和局部化的合法性。不要混用早期长版与缩订版的章节编号；后者省去的局部化应引用独立论文。

## 5. 相对 GW 与退化：先掌握一个可工作的完整框架

**主参考：** Jun Li, [*A degeneration of stable morphisms and relative stable morphisms*](https://arxiv.org/abs/math/0009097)；[ *A degeneration formula of GW-invariants*](https://arxiv.org/abs/math/0110113)。

**分工与终点：** 对光滑靶与光滑除子的 pair，理解展开靶、接触阶、相对稳定映射、虚类及 cycle-level degeneration formula。重点解释为什么直接取普通稳定映射的闭包不足以保留正确相对数据。正文完整计算一个简单双分量退化；一般展开栈技术的证明可精确外引。

## 6. Log GW：扩展退化几何，而非添加一套悬空语言

**主参考：** Qile Chen, [*Stable logarithmic maps to Deligne-Faltings pairs I*](https://arxiv.org/abs/1008.3090)；Gross–Siebert, [*Logarithmic Gromov-Witten invariants*](https://arxiv.org/abs/1102.4322)；Abramovich–Chen–Gross–Siebert, [*Decomposition of degenerate Gromov-Witten invariants*](https://arxiv.org/abs/1709.09864)。

**分工与终点：** 独立的 log geometry 来源承担 fs log structures、log smoothness 与 monoids；GW 正文解释 basic/minimal 条件怎样控制模问题，何时得到代数性、真性及虚类。现代终点为按 rigid tropical types 分解退化虚类，严格区分“decomposition”与进一步的“gluing”。不能把不同展开与 log 理论的比较当成无条件等同。

**另一种紧化的独立接口：** Ciocan-Fontanine–Kim–Maulik, [*Stable quasimaps to GIT quotients*](https://arxiv.org/abs/1106.3724) 负责 quasimap 构造；Yang Zhou, [*Quasimap wall-crossing for GIT quotients*](https://arxiv.org/abs/1911.02745) 提供相邻稳定 chamber 的墙穿越。它与 log 紧化是不同问题。只选一个满足原文 GIT 与稳定范围假设的例子，解释改变稳定性怎样改变模对象及虚类；无需发展镜像解释。

## 7. CohFT：从边界几何组织高亏格理论

**主参考：** Kontsevich–Manin, [*Gromov-Witten classes, quantum cohomology, and enumerative geometry*](https://arxiv.org/abs/hep-th/9402147)；Teleman, [*The structure of 2D semi-simple field theories*](https://arxiv.org/abs/0712.0160)；Pandharipande, [*Cohomological field theory calculations*](https://arxiv.org/abs/1712.02528)。

**分工与终点：** 从 GW 类在稳定曲线模空间上的黏合性质定义 CohFT；再将半单性、单位、齐次性以及 $R$-matrix 的角色逐项讲清。Teleman 重构应以精确适用版本调用，不能说任意 GW 的所有亏格都由小量子环决定。Pandharipande 讲义提供可计算的后续案例与实际限制。

## 8. Frobenius 结构：先说明范畴与系数，再写 Euler 场

**主参考：** Dubrovin, [*Geometry of 2d topological field theories*](https://arxiv.org/abs/hep-th/9407018)，配合第 1、7、18 组中的 GW 与形式版本来源。

**分工与终点：** 区分 Frobenius algebra、formal Frobenius (super)manifold、复解析 Frobenius manifold、只有乘法与可积条件的 $F$-manifold。GW 正文给出乘法、单位、平坦配对、势及 Euler derivation 的精确构造；一般形式几何外引。奇上同调存在时必须明确 super 版本或主动限定偶部分。齐次性需要说明 Novikov 方向是否参与 Euler 导子，不能只写一个坐标公式后默认适用于所有系数约定。

## 9. 数值 DT：从具体层模问题理解它计数什么

**主参考：** Thomas, [*A holomorphic Casson invariant for Calabi-Yau 3-folds, and bundles on K3 fibrations*](https://arxiv.org/abs/math/9806111)；Behrend, [*Donaldson-Thomas invariants via microlocal geometry*](https://arxiv.org/abs/math/0507523)。

**分工与终点：** 构造理想层及稳定层的 trace-free Ext 形变阻碍复形，核对行列式约束、自同构、Serre 对偶与虚维数。普通三维 DT 与 CY3 的对称 obstruction theory 分开。Behrend 函数的加权 Euler 特征公式要求对应的对称理论与真性；数值不变量不依赖所选对称 obstruction theory，并不表示所有虚类都由截断概形决定。

## 10. PT、GW/PT：以能核查的对应结束一条主线

**主参考：** Pandharipande–Thomas, [*Curve counting via stable pairs in the derived category*](https://arxiv.org/abs/0707.2348)；MNOP [I](https://arxiv.org/abs/math/0312059)、[II](https://arxiv.org/abs/math/0406092)；Pandharipande–Pixton, [*Gromov-Witten/Pairs descendent correspondence for toric 3-folds*](https://arxiv.org/abs/1203.0468)、[quintic 与相关完全交情形](https://arxiv.org/abs/1206.5490)。

**分工与终点：** 先构造 stable pair 及二项复形的模空间，再解释生成函数、有理性和变量替换。可以选 toric 三维情形或文献中确立的紧完全交族作终点；逐项记录后裔变换、relative 条件和已证范围。MNOP 的一般猜想表述与特定靶上的定理不能混写，也不把 PT invariants 直接叫成 GW invariants。

## 11. 广义 DT 与墙穿越：由“稳定性变了，计数如何变”驱动

**主参考：** Joyce–Song, [*A theory of generalized Donaldson-Thomas invariants*](https://arxiv.org/abs/0810.5645)；Bridgeland, [*Hall algebras and curve-counting invariants*，v3](https://arxiv.org/abs/1002.4374v3)。

**分工与终点：** JS 处理严格半稳定对象与广义有理数值；Bridgeland 提供 Hall algebra 方法证明约化 DT/PT 关系及生成函数有理性这一清楚目标。一般稳定性条件及 t-structures 属于层模空间/导出范畴支撑篇；DT 正文展开具体心、Hall 恒等式和积分映射的适用条件。不要以尚未构造的一般 CY3 Bridgeland stability space 作为基础起点。

## 12. Derived 与 d-critical：解释现代 DT 的结构来源

**主参考：** Pantev–Toën–Vaquié–Vezzosi, [*Shifted Symplectic Structures*](https://arxiv.org/abs/1111.3209)；Joyce, [*A classical model for derived critical loci*](https://arxiv.org/abs/1304.4508)；Brav–Bussi–Dupont–Joyce–Szendrői, [*Symmetries and stabilization for sheaves of vanishing cycles*](https://arxiv.org/abs/1211.3259)。

**分工与终点：** 外引导出模空间的存在及移位辛结构，正文解释 CY3 的 $(-1)$-shifted 结构怎样引出局部临界模型与经典 d-critical 结构。vanishing cycles 的全局黏合需要 orientation；orientation 不是普通数值 DT 定义中无处不在的附加选择。目标是理解数值理论与更细不变量间多了哪些数据，不要求先重写整个导出代数几何。

## 13. Cohomological DT：先选 quiver with potential 的可完成案例

**主参考：** Davison–Meinhardt, [*Cohomological Donaldson-Thomas theory of a quiver with potential and quantum enveloping algebras*](https://arxiv.org/abs/1601.02479)；Davison–Pădurariu, [*Deformed dimensional reduction*](https://arxiv.org/abs/2001.03275)。

**分工与终点：** 以 quiver with potential 的表示模空间、vanishing cycles 和 CoHA 为一条选读线；现代终点为整性、墙穿越的 Hodge 理论提升或一个 dimensional-reduction 算例。混合 Hodge modules、perverse sheaves、Hall algebra 的一般基础各有归宿。quiver 结果向任意几何 CY3 的转用需要额外模型和比较，不能自动推广。

## 14. Schubert calculus：古典、量子、等变之间的主要连接

**主参考：** Buch–Kresch–Tamvakis, [*Gromov-Witten invariants on Grassmannians*](https://arxiv.org/abs/math/0306388)；Mihalcea, [*Equivariant Quantum Schubert Calculus*](https://arxiv.org/abs/math/0406066)。

**分工与终点：** 经典 Grassmannian 的 Schubert 类、Pieri/Giambelli/LR 是核心正文；BKT 的 kernel-span 几何将三点属零 GW 转为两步旗流形经典相交，提供真正的桥梁。等变量子 Pieri 与重构提供随后终点。不要把所有 $G/P$ 的乘法都说成由同一套 Grassmannian 公式给出；其他类型按具体 theorem 加入。

## 15. Quantum K：从虚结构层构造，而非形式替换符号

**主参考：** Y.-P. Lee, [*Quantum K-Theory I: Foundations*，v4](https://arxiv.org/abs/math/0105014v4)；Buch–Mihalcea, [*Quantum K-theory of Grassmannians*](https://arxiv.org/abs/0810.0981)。true/fake 比较使用 Givental–Tonita, [*The Hirzebruch–Riemann–Roch theorem in true genus-0 quantum K-theory*](https://arxiv.org/abs/1106.3136)，以及 Tonita, [*A virtual Kawasaki formula*](https://arxiv.org/abs/1110.3916)。

**分工与终点：** 严格定义虚结构层、proper Euler characteristic、descendants、量子修正配对与乘法；再做 Grassmannian 的几何与 Schubert 算例。K-theoretic 三点 GW 不变量与量子 K 的结构常数不能在忽略配对修正后混为一谈。环面等变版本与 permutation-equivariant 版本分别标记。

**系数与结构辨析：** algebraic K/G 群适合构造类与推前；量子环的主版本可采用有限维的 $K^0_{\mathrm{top}}(X)\otimes\mathbb Q$ 或复系数版本。一般 algebraic $K_0$ 上的 Euler pairing 不应未经处理便宣布非退化并取逆。Lee §4.1–4.2 处理 topological realization；§5.2 Proposition 12 证明修正 metric 平坦，而单位对其 Levi-Civita 联络一般不平坦。true 理论使用 stack Euler 特征，fake 只保留 Kawasaki–RR 的 identity-inertia 贡献，两者不可由普通 RR 直接等同。

## 16. Quantum K 的现代可达终点：差分、有限性与环表示

**主参考：** Iritani–Milanov–Tonita, [*Reconstruction and Convergence in Quantum K-Theory via Difference Equations*](https://arxiv.org/abs/1309.3750)；Anderson–Chen–Tseng，附 Iritani 附录，[ *On the finiteness of quantum K-theory of a homogeneous space*](https://arxiv.org/abs/1804.04579)；Gu–Mihalcea–Sharpe–Xu–Zhang–Zou, [*A Nakayama result for the quantum K theory of homogeneous spaces*](https://arxiv.org/abs/2507.15183)。

**分工与终点：** 选择一个 $G/P$ 的小量子 K 环，说明为何只有有限 Novikov 次数，并验证一组量子化关系生成整个关系理想。QK 没有通常的 cohomological divisor equation，不能照 QC 将插入参数与 Novikov 参数合并。重构与收敛需要原文的生成性或增长条件，不是任意靶上已确立的普遍收敛定理。进一步的 [Toda-type partial-flag presentations](https://arxiv.org/abs/2504.07412) 可作研究出口，正文不必转入物理实现。

## 17. Gamma：量子联络内部的研究线，记录猜想版本

**主参考：** Galkin–Golyshev–Iritani, [*Gamma classes and quantum cohomology of Fano manifolds: Gamma conjectures*](https://arxiv.org/abs/1404.6407)；Iritani, [*Gamma classes and quantum cohomology*](https://arxiv.org/abs/2307.15938)；Galkin–Hu–Iritani–Ke–Li–Su, [*Revisiting Gamma conjecture I: counterexamples and modifications*](https://arxiv.org/abs/2405.16979)。

**分工与终点：** 小量子联络、$z=0$ 的不规则奇点、渐近基本解、Gamma 类与整格是主线；射影空间或 Grassmannian 的已证情形适合完成计算。原始 Gamma I 已有满足 Property $\mathcal O$ 的反例；修订表述必须单列。Gamma II 涉及 exceptional collections 时只调用导出范畴所需精确结果，且保留半单性等条件。形式/Novikov 构造并不会自动给出这一分支所需的复解析收敛与 Stokes 数据。

## 18. 非阿基米德实现：明确解析域和收敛机制

**主参考：** Hinault–Yu–Zhang–Zhang, [*Decomposition and framing of F-bundles and applications to quantum cohomology*，v2](https://arxiv.org/abs/2411.02266v2)，特别是 [§2.2.1–2.2.4](https://arxiv.org/html/2411.02266v2#S2.SS2)、§3、§4。

**分工与终点：** 从 Novikov/有效曲线幺半群系数、形式势、Euler 作用与量子联络出发；非阿基米德版本使用对 $\mathbb Q$ 平凡的赋值与指定解析域。正文解释系数有限性、求导与解析化；rigid/adic 通用理论外引。可达终点是 $F$-manifold/$F$-bundle 的谱分解与 framing，而不是把任意形式幂级数直接称为 Tate algebra 元素。完整奇上同调要求 supergeometry。具体解析域与假设应采用原文版本核对。

原文 §2.2.3 Lemma 2.19 取特征零完备非阿基米德域，赋值非平凡但在 $\mathbb Q$ 上平凡；曲线参数底为赋值映射下 ample cone 的原像。正偶次数插入参数在开单位多圆盘，单位参数 $t_0$ 在整条解析仿射线上，奇参数另作 purely odd 因子。势对单位参数是多项式，其余收敛由该解析域和有理系数的赋值控制。§2.2.4 的 maximal 化另需检查所选单参数次数的有限性条件；不能把任意 nef specialization 都默认为合法。

## 19. 量子联络与双有理几何：将分解用于可见的几何变化

**主参考：** Iritani–Koto, [*Quantum cohomology of projective bundles*](https://arxiv.org/abs/2307.03696)；Iritani, [*Quantum cohomology of blowups*](https://arxiv.org/abs/2307.13555)；第 18 组论文。研究出口：Katzarkov–Kontsevich–Pantev–Yu, [*Birational Invariants from Hodge Structures and Quantum Multiplication*，v2，2026-03-06](https://arxiv.org/abs/2508.05105v2)。

**分工与终点：** 先研究射影丛与沿光滑中心 blowup 的量子 $D$-module 分解，并核查扩张系数、基变换、形式/解析范畴及 framing 的选择。atoms 只列为连接 Hodge 理论与双有理几何的后续选读；该预印本中很强的应用声称应按版本与具体证明单独审读，不据摘要提升为本笔记的既成基础。第 18 组的唯一性结果不能替代存在性证明。

## 20. 辛背景：解释共同几何，比较结果精确外引

**主参考：** McDuff–Salamon, [*J-holomorphic Curves and Symplectic Topology* 作者书目与勘误页](https://people.math.ethz.ch/~salamon/publications.html)；Li–Tian, [*Comparison of the algebraic and the symplectic Gromov-Witten invariants*](https://arxiv.org/abs/alg-geom/9712035)。

**分工与终点：** 正文解释 Fredholm 指标、正则性、bubbling、紧性与稳定化怎样对应代数几何中的虚维数、紧化与阻碍。一般解析虚技术有自己的归宿。比较定理在光滑复射影靶及相应辛结构上调用；不能由此将一般闭辛流形的构造归为代数几何。引用教材构造 GW 时保留其正性等假设，并检查所用版次与勘误。

## 供逐章写作使用的核查清单

每个现代接口在正式 PreTeXt 正文中应留下四项可查资料：

- **输入：** 实际调用的模空间存在性、稳定性、真性、光滑性、perfectness、orientation 或收敛假设。
- **构造：** 本文真正建立的映射、复形、虚类、配对、乘法、联络或生成函数。
- **输出：** 精确的 theorem 范围及例子，和已证、引用、条件性、猜想四种状态。
- **归宿：** 支撑理论的稳定链接；外部来源的版本与定理编号在写具体章时补齐，不凭本文件概述直接生成证明。

这些方向并不要求按文献年代排序。适合先闭合“经典 Schubert 相交 → 稳定映射 → WDVV/量子 Schubert”的算例链，同时用有阻碍的零点空间解释虚类；随后分成“DT/PT 与墙穿越”“量子联络的形式、非阿基米德、复解析结构”“quantum K 与差分方程”三条可独立推进的研究路线。
