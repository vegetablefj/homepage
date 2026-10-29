# 同调代数笔记：目录与参考分工

正文使用英文，标题采用 sentence case。遵循 homepage 的 [经典数学笔记框架](../classical-notes-framework.md)、[笔记撰写与维护](../../docs/note-authoring.md)，以及数学笔记和论文写作指南中的语言要求。积极用旁注澄清概念、记号、条件和文献差异；正文保留必要假设。仅本地保存与预览，不推送或部署。

这份目录把 Grothendieck 范畴独立成章，并将闭幺半结构提前到复形理论之前。末篇以抽象六操作为主，具体层论、流形、代数簇、概形及其他几何实现另行整理。模型范畴、高阶范畴、融合范畴和 Tannakian 理论不作临时插入的支撑理论。

主线是一般 Abel 范畴中的同调代数、导出范畴、函子及抽象六操作。环上的模用于必要的 Hom／tensor 模型、说明假设的例子和反例；不把这份笔记扩展成环论或模论教程。叙述更多参照李文威第二册：集中引入相关定义，明确自然映射、函子性和相容关系；常规验证可紧凑处理，但保留决定构造机制的证明。

| 章 | 英文标题 | 主要参考 |
| --- | --- | --- |
| 0 | Conventions and sources | Li II 3；KS 11–13；GM III |
| 1 | Additive and abelian categories | Li II 1–2；KS 8；GM II |
| 2 | Grothendieck categories and abelian localization | Li II 2.10、附录 A–B；KS 8–9、15；Stacks Injectives |
| 3 | Closed monoidal structures | Li II 7.1–7.4、9.1–9.3；KS 4；EGNO 2、4 |
| 4 | Complexes and homotopy | Li II 3；KS 11–12；Weibel 1 |
| 5 | Resolutions and classical derived functors | Li II 3.11–3.13；Weibel 2 |
| 6 | Ext, Tor, and homological dimension | Li II 3.14、4.5；Weibel 3–4 |
| 7 | Filtered complexes and spectral sequences | Li II 5；Weibel 5；GM III.7 |
| 8 | Triangulated categories and Verdier quotients | Li II 4.1–4.3；KS 10；GM IV；Neeman 1–2 |
| 9 | Derived categories | Li II 4.4–4.6；KS 13；GM III；Weibel 10 |
| 10 | Unbounded resolutions | KS 14；Li II 3.15、4.11–4.12；Yekutieli 10–11；Spaltenstein |
| 11 | Total derived functors and adjunctions | Li II 4.7–4.11；GM III.6–III.7；KS 13–14 |
| 12 | Derived tensor and Hom | Li II 4.9、4.12；Yekutieli 9–12；Lipman 2.4–2.6 |
| 13 | t-structures and hearts | BBD 1.3；GM IV；Achar 附录 A |
| 14 | Compact generation and representability | Neeman；Stacks 0A8E；Fausk–Hu–May 7–8 |
| 15 | Localization and recollement | BBD 1.4；Neeman；Krause；KS 10 |
| 16 | Monoidal triangulated categories and duality | Li II 9.1–9.3；Fausk–Hu–May |
| 17 | Monoidal adjunctions and formal duality | Fausk–Hu–May 3–5、7–8；Lipman 3.3–3.5 |
| 18 | Indexed categories and the six operations | Lipman 3.6–3.7；Cisinski–Déglise 第一部分选读；Gallauer |

附录整理记号、术语与假设对照，并补正合与 quasi-abelian 范畴的必要基础，主要参考 Bühler 与 Schneiders。群、Lie、Hochschild 等同调在当前正文中承担例子作用，完整理论可另设专题。

另设可独立阅读的正合／quasi-abelian 范畴基础附录，解释正合结构、严格态射、严格正合列及相应有限长度，不展开其完整导出理论。为后续研究补齐一般基础，不直接引入 tilting theory 或稳定性条件。单子理论引用范畴论笔记已有章节；富集语言在这里限于 Ab-富集与 Hom 复形给出的 dg 范畴，完整富集范畴理论适合放在范畴论笔记的可选章节。

第0章集中说明同调／上同调指标、移位、解消与余解消、Ext／Tor 的次数，以及指标换算与范畴对偶中 co- 的区别。第1章区分 Freyd–Mitchell 正合嵌入和 Gabriel–Popescu 商表示。第4章同时发展四种截断函子的自然映射、伴随与端点行为，并补 Bergman 蝾螈引理及连接态射。第7章实际展开谱序列的构造、收敛、边缘映射和非零高阶微分。

第12章先给一般导出 Hom 与抽象导出张量的存在条件，再给模范畴模型。Perf 的有限投射描述作为紧／可对偶对象的例子；不发展几何 Perf、dg Morita 或 K 理论。第16至18章共同构成抽象六操作末篇，展开对偶、伴随比较、基变换与投影的实际映射、拼接相容性、相对对偶、局部化及紧化构造的依赖，不停留于公理列表。

## 证明分工

完整保留展示构造机制的证明：解消比较、Ext 与扩张、谱序列的基本构造、导出伴随、典范比较映射及其形式推论。一般内射或 K-injective 存在性、Brown 的广泛版本以及繁重相容性定理可精确引用，不用简略证明暗示已完成全部技术细节。

一轮写作的完成条件是：对照主要参考书核对已选范围的实际覆盖，定义和假设足以独立阅读，构造包含必要的自然映射与代表性证明，容易混淆的差异得到澄清，并通过数学、语言、交叉引用和渲染检查。不能把“每章都有初稿”或达到字数作为完成条件。

## 必须澄清的差异

- Grothendieck 性与足够投射、足够平坦、紧生成、闭幺半结构分别列假设。
- 普通 Hom、Hom 复形、内部 Hom 和导出 Hom 分开。
- 有界与无界解消、和总化与积总化、截断与 brutal truncation 分开。
- 可对偶、紧、完美、相对于某对象的双对偶性分开。
- Verdier 商的构造与有伴随的局部化分开。
- recollement 的六个函子与 Grothendieck 六操作分开。
- 六操作中给定结构、公理与形式结论分开；存在典范比较映射并不表示它是同构。

参考书版本与链接见正文 references.ptx；每章在实际引用处给章节、节号或稳定 tag。
