# 笔记撰写与维护

本文适用于生产项目 `D:\homepage`。以下路径均相对于该目录。网站界面和数学示例保持英文；[NOTES.md](NOTES.md) 为对应的英文文档。

## 可编辑的源文件

| 文件 | 用途 |
| --- | --- |
| `source/notes/fujita/fujita.ptx`、`source/notes/nagata/nagata.ptx`、`source/notes/cubic-fourfolds/cubic-fourfolds.ptx` | 三篇笔记的 book 根文件、宏和包含文件 |
| `source/notes/category-theory/category-theory.ptx`、`chapter-00.ptx`、`chapter-01.ptx`、`references.ptx` | 普通范畴论初稿、约定章与第一章、参考文献 |
| `source/notes/fujita/chapter-01.ptx` 至 `chapter-09.ptx` | Fujita 笔记的九章正文 |
| `source/notes/fujita/references.ptx` | Fujita 笔记的参考文献 |
| `publication/fujita.ptx`、`publication/nagata.ptx`、`publication/cubic-fourfolds.ptx` | 各篇笔记的搜索、目录、编号、证明折叠和引用预览 |
| `publication/category-theory.ptx` | 范畴论笔记的设置，包括从 0 开始的章编号 |
| `publication/note-settings.json` | 按构建目标设置脚注、审阅状态与更新日期 |
| `source/layout.css`、`source/layout.js` | 共用版式与响应式边注 |
| `project.ptx` | 启用的构建目标 |
| `source/notes-list.ptx` | Notes 与 Home 共用的列表链接 |

当前构建目标为主页的 `web`，以及笔记的 `note-fujita`、`note-nagata`、`note-cubic-fourfolds` 和 `note-category-theory`。四篇笔记均列入 Home 与 Notes 共用的公开列表。修改源文件后运行 `.\Rebuild.ps1`。生成的 HTML 和共用静态资源直接放在项目根目录。`.build/cache`、`.build/tmp`、`.build/reports` 保存运行文件和报告，均被版本控制忽略。环境配置与发布见 [README_cn.md](README_cn.md)。

`source/notes/affine-basics.ptx`、`divisors-p1.ptx`、`finite-maps.ptx`、`projective-line.ptx` 四份示例保留供复制，不列入生产构建目标及公开列表。原来的三份 PDF 笔记仍保留在 `pdfs/`，不显示列表条目。

## 添加一篇独立笔记

1. 复制一份示例；长笔记可新建 `source/notes/my-note/`。将 `publication/demo-affine.ptx`、`demo-divisors.ptx` 或 `demo-finite.ptx` 复制为 `publication/my-note.ptx`。这些配置模板启用搜索、引用预览，并默认折叠证明。
2. 修改标题、book ID、宏，以及实际的作者信息和来源说明。在复制的 publication 中，将 `<index-page ref="my-note"/>` 改为这篇笔记的实际 book ID。
3. 在 `project.ptx` 的 `<targets>` 内加入：

~~~xml
<target name="note-my-note" format="html"
        source="notes/my-note/my-note.ptx"
        publication="my-note.ptx"
        output-dir="notes/my-note" xsl="note-html.xsl"/>
~~~

source、publication 和样式表路径分别相对于 `project.ptx` 中声明的对应目录。目标名以 `note-` 开头，构建程序据此应用笔记版式。

4. 在 `source/notes-list.ptx` 中加入条目；Notes 与 Home 的精选笔记目前共用这份列表。若 Home 需要不同的精选范围，可将 `source/sections/home.ptx` 中的 include 改为独立列表：

~~~xml
<li>
  <p><url href="notes/my-note/my-note.html">My Note</url></p>
</li>
~~~

入口 HTML 的文件名由 book 的 `xml:id` 决定。例如 Fujita 笔记入口为 `notes/fujita/fujita-notes.html`。仅添加构建目标不会自动添加公开列表条目。

长笔记可以按章拆分：

~~~xml
<pretext xmlns:xi="http://www.w3.org/2001/XInclude" xml:lang="en-US">
  <docinfo>
    <directories external="../../assets"/>
  </docinfo>
  <book xml:id="my-note">
    <title>My Note</title>
    <xi:include href="chapter-01.ptx"/>
    <xi:include href="chapter-02.ptx"/>
    <backmatter>
      <xi:include href="references.ptx"/>
    </backmatter>
  </book>
</pretext>
~~~

先建立所有被包含的文件，再进行构建。每章文件以 `chapter` 为根元素：

~~~xml
<chapter xml:id="my-note-basic-results">
  <title>Basic results</title>
  <p>All rings are commutative with identity.</p>
</chapter>
~~~

根据需要添加 `section`、`subsection` 和 `subsubsection`。同一篇笔记所有包含文件中的 ID 必须唯一；改标题或移动内容时保留原 ID，交叉引用和已保存的链接才能继续使用。

### Preface

前言使用原生的 `frontmatter` 和 `preface` 元素。将下方的 include 合入已有的 `frontmatter`，保留其中的 `bibinfo`（包括作者信息）和 `titlepage`。若尚无 `frontmatter`，在各章的 include 之前创建一个；不要创建第二个 `frontmatter`。

~~~xml
<frontmatter>
  <xi:include href="preface.ptx"/>
</frontmatter>
~~~

独立的 `preface.ptx` 使用如下结构提纲：

~~~xml
<preface xml:id="my-note-preface">
  <title>Preface</title>
  <!-- Add the supplied preface here. -->
</preface>
~~~

注释不属于前言正文：原生 schema 要求至少一个内容块（如 `<p>`），补入正文后才能构建。保留 book 的 `pretext` 根元素上的 `xi` 命名空间声明。前言与参考文献、统一笔记页眉相互独立。用户之后会提供前言模板；在此之前，不向公开笔记添加占位前言。

## 命题、证明与公式

使用原生元素，不用 HTML 模仿定理环境。`theorem` 内写 `statement`，本文给出证明时另写 `proof`：

~~~xml
<theorem xml:id="thm-unit-localization">
  <statement>
    <p>Let <m>A</m> be a commutative ring with identity, and let
      <m>f\in A</m> be a unit. The map <m>A\to A_f</m>
      is an isomorphism.</p>
  </statement>
  <proof>
    <p>The universal property gives a map <m>A_f\to A</m>,
      since <m>f</m> is a unit in <m>A</m>.
      The composition on <m>A</m> is the identity. The composition on
      <m>A_f</m> fixes the images of <m>A</m> and <m>f^{-1}</m>,
      which generate <m>A_f</m>. Thus the maps are inverse.</p>
  </proof>
</theorem>
<p>Apply <xref ref="thm-unit-localization" text="type-global"/>.</p>
~~~

publication 中的 `<knowl proof="yes"/>` 使证明默认折叠。保留语义上的 `proof` 容器。按结果的实际作用使用 `proposition`、`lemma` 或 `corollary`，不自造括号定理名。编号由 `xref` 自动处理；`knowled="maximum"` 为支持的引用提供原生预览。

行内公式使用 `m`。行间公式使用 `md`，放在其所属的 `p` 内：

~~~xml
<p>For <m>a\in A</m> and <m>r\geq0</m>, the inverse is given by
  <md xml:id="eq-unit-inverse" number="yes">a/f^r\longmapsto af^{-r}.</md>
  This formula uses the inverse of <m>f</m> in <m>A</m>.</p>
<p>See <xref ref="eq-unit-inverse" text="global"/>.</p>
~~~

不编号的行间公式使用 `number="no"`。新增数学宏写在 `docinfo/macros` 中。XML 特殊字符需要转义：必要时使用 `&lt;`、`&gt;`、`&amp;`；数学中也可以使用 `\lt`、`\gt`、`\amp`。

### 交换图

范畴论初稿采用原生 `latex-image` 与 `tikz-cd`，例子见 `source/notes/category-theory/diagram-naturality.ptx` 和 `diagram-transformation.ptx`。book 的 `docinfo/latex-image-preamble` 加载 `tikz-cd`；XML 中的单元格分隔符使用 `\amp`。`.\Rebuild.ps1` 会检测这些图，并在构建相应笔记之前生成有变化的图像资源。此步骤需要可用的 TeX 环境及 `tikz-cd`；生成的 SVG 能保留曲线箭头与双箭头。图题与替代文本保留在源文件中。

## 脚注与边注

脚注在正文需要的位置使用 `fn`：

~~~xml
<p>A unit has an inverse.<fn>No assumption that the ring is a domain
  is needed.</fn></p>
~~~

`publication/note-settings.json` 的默认设置为 `"footnotes": "margin"`。源文仍是原生 `fn`，构建时将内容呈现在边栏。若某篇笔记要保留原生脚注标记及正文中可展开的脚注内容，按**构建目标名**添加覆盖设置，不使用 book ID：

~~~json
{
  "defaults": { "footnotes": "margin" },
  "notes": {
    "note-my-note": { "footnotes": "inline" }
  }
}
~~~

将覆盖项合入现有 `notes` 对象，修改后重新构建。

显式边注使用原生 `aside`，紧接在有 ID 的段落后面；aside 的 ID 必须以 `margin-` 开头：

~~~xml
<p xml:id="anchor-unit-inverse">
  The inverse sends <m>a/f^r</m> to <m>af^{-r}</m>.
</p>
<aside xml:id="margin-unit-inverse">
  <p>No assumption that <m>A</m> is a domain is needed.</p>
</aside>
~~~

这组段落与 aside 也可放在 `proof` 内。构建程序将 aside 锚定到它前面有 ID 的段落。脚注设置影响 `fn`；显式的 `margin-*` aside 保持边注行为。

窗口宽度至少为 1280 px 时，边注位于右栏并与锚定段落对齐，必要时增加间距以避免重叠。低于 1280 px 时，边注回到各自锚定段落下方。证明关闭时，其中段落所锚定的边注也隐藏；窄屏下回到正文的边注仍处于该证明容器内。

### 在写作中积极使用旁注

积极使用旁注帮助读者理解论证。适合放入旁注的内容包括简短的推导或计算、证明步骤的补充理由、某个假设的作用、例子与直观解释、记号和背景约定，以及精确的来源说明。通过对话发现值得补充的解释时，若篇幅较短，就将它写在相应段落旁边。

关键假设、不等式、界、存在性选择和极限论证，以及证明的主要逻辑步骤，仍留在正文。旁注可以展开局部步骤或解释标准事实，但不应将证明不可缺少的部分完全移出正文。

每条旁注都应锚定到它所解释的具体段落，可以包含行内公式、行间公式和带链接的引用。内容保持集中；较长的补充论证写成引理、注记、小节或附录，再从旁注链接过去。

## 带字母标签的文献引用

引用时使用实际的 bibliography ID：

~~~xml
<p>For the monomial criterion, see
  <xref ref="bib-howald2001" detail="Main Theorem"/>.</p>
~~~

在笔记的 `references` 中写对应条目：

~~~xml
<references xml:id="my-note-references">
  <title>References</title>
  <biblio xml:id="bib-howald2001" label="How01" type="raw">
    Jason A. Howald. <em>Multiplier ideals of monomial ideals</em>.
    Transactions of the American Mathematical Society,
    353 (7): 2665–2671, 2001.
    <url href="https://doi.org/10.1090/S0002-9947-01-02720-9">DOI</url>.
  </biblio>
</references>
~~~

样式表显示给定的 `label`（如 `How01`），而非数字文献标签。作者年份标签须无歧义，条目次序保持一致。使用 `xref`，不要手写带括号的标签，这样引用才有链接。笔记已有同一文献时，复用条目，不重复其 ID。

参考文献源文件仍保留在原生 `backmatter` 中。当 back matter 只有参考文献时，共用笔记模板会在目录和导航中直接显示 **References**，省略多余的 **Back Matter** 层级；若其中还包含其他分部，则保留正常的 back matter 结构。

核对来源版本、假设和实际使用的定理或定义位置。文献链接或构建成功不能验证数学断言。补充文献才使用 “see also”。

## 统一的笔记页眉

笔记标题采用句首大写，保留专名与数学缩写的大小写。book 根文件中的标题与 Home/Notes 列表标题保持一致。

审阅状态与更新日期集中维护在 `publication/note-settings.json`。默认 `status` 为 `Under review and improvement`；各篇笔记的构建目标条目提供显式的 `last_updated` 日期，格式为 `YYYY-MM-DD`。构建时将同一份信息显示在 Home/Notes 列表及笔记署名下方。修改正文或发布信息时更新日期；单纯重建不会自动推进日期。该日期是更新记录，不表示数学审阅已经完成。

每篇独立笔记的顶部都必须显示笔记标题，并在标题下方显示黑色的 **Jie Fu's Notes**。标题链接到这篇笔记的入口页；**Jie Fu** 链接到网站的 Home 页，**Notes** 链接到 Notes 总列表。这一页眉适用于笔记的所有页面，包括入口、各章和参考文献页，桌面与窄屏均须显示。

`build.py` 中的 `finish_pages` 函数会为名称以 `note-` 开头的构建目标自动应用这一约定。添加笔记后重新构建，不直接修改生成的 HTML。这段导航文字不表示原文章的作者；来源作者信息和致谢另行保留，并准确署名。

## 搜索、目录与版式

每篇笔记的 publication 文件控制自己的搜索和导航；搜索范围是该篇已构建笔记的页面。在复制的 publication 中保留：

~~~xml
<common>
  <chunking level="1"/>
  <tableofcontents level="4"/>
</common>
<numbering>
  <divisions level="4"/>
  <blocks level="1"/>
  <equations level="1"/>
</numbering>
~~~

`html` 内的主要配置项为：

~~~xml
<index-page ref="my-note"/>
<search variant="textbook"/>
<cross-references knowled="maximum"/>
<knowl theorem="no" proof="yes"/>
<navigation logic="linear" upbutton="yes"/>
<tableofcontents focused="yes" preexpanded-levels="1"/>
~~~

目录可以显示 chapter、section、subsection、subsubsection 四级。`chunking level="1"` 按章生成页面。`preexpanded-levels` 控制目录树的初始展开层数；`focused` 跟随当前阅读位置。Prev/Up/Next 在这篇笔记的 book 内导航。搜索设为 `variant="none"` 可关闭；证明设为 `proof="no"` 可默认展开。

目录在至少 1280 px 的窗口中默认打开，较窄窗口中默认关闭，可用 Contents 按钮切换。`source/layout.css` 中的边注默认参数为：

| 变量 | 默认值 |
| --- | --- |
| `--margin-note-font-size` | `14px` |
| `--margin-note-line-height` | `1.5` |
| `--margin-note-gap` | `12px` |
| `--site-sidebar-width` | `210px` |

宽度变量由左目录和右边注栏共用。修改字号、行高和间距变量即可调整边注，不改变正文字号；重新构建后，样式会复制到静态输出中。

## 署名、来源与导入后的编辑

Fujita 笔记是为个人学习改写的 OpenAI 文章，保留第一章中带链接的来源说明。区分笔记撰写者与原论证的作者，并在引用或复述结果的实际位置标注来源。

Notes 页面保留了关于 LLM 辅助笔记可能含有错误的说明；修改列表时也保留该说明。数学推理和引用需要独立核对，不能以版式或导入检查代替。

导入后的 PTX 可以直接编辑。正常重建**不会**从 TeX 自动同步或覆盖正文。确需重新生成 Fujita 源文件时，使用项目的 Python 环境并显式指定输入：

~~~powershell
.\.venv\Scripts\python.exe .\tools\import_fujita.py --tex "C:\Users\85806\Desktop\notes\fujita-rewritten\Fujita-rewritten.tex"
~~~

可选的 `--compare PATH` 请求生成比较报告。这个导入程序针对当前 Fujita 稿件，只支持其中有限的一组 TeX 结构，不是通用 TeX 转换器。重新导入会再生成 Fujita PTX 文件，因此先保存或合并后续的 PTX 编辑；有意重新导入后，检查报告和重建页面。
