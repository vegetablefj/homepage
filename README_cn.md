# Jie Fu 的个人主页

[English](README.md) · [笔记指南](NOTES_cn.md)

本仓库保存 PreTeXt 源码及生成的静态网站。正式工作目录是 `D:\homepage`，同时也是 GitHub Pages 的发布根目录。网站正文与导航使用英文。

本网站的搭建使用了大语言模型辅助。

## 笔记入口设置

Notes 页保留四个原有入口，另外五份笔记会构建和上传，但暂不列入页面。Home 的精选列表保持为空。未列出的文件仍然公开，可以通过直接链接访问；隐藏入口不构成访问限制。

## 编辑主页

修改源码后重新构建。发布根目录中的 HTML、样式及阅读页面均为生成结果。

| 位置 | 用途 |
| --- | --- |
| `source/main.ptx` | 主站结构及页面引用 |
| `source/preprints-list.ptx` | Home 与 Preprints 共用的预印本列表 |
| `source/notes-list.ptx` | Notes 页上显示的入口；新增笔记可以暂不列出 |
| `source/selected-notes-list.ptx` | Home 的独立精选列表，目前为空 |
| `source/sections/` | Home、研究、论文列表及资源页面 |
| `source/profile.ptx` | Home 的照片、简介、访问信息及联系方式 |
| `source/layout.css` | 全站布局 |
| `publication/` | 主站和笔记的发布配置 |
| `xsl/` | 对 PreTeXt 展示方式的项目扩展 |
| `project.ptx`、`build.py`、`tools/` | 构建目标、检查及同步 |

数学笔记的源码、引用和阅读功能见 [NOTES_cn.md](NOTES_cn.md)。当前启用九篇笔记：Fujita freeness、Nagata 与 Seshadri constants、cubic fourfold rationality、1-范畴论、toric geometry、hyperkähler geometry、cubic fourfolds 与 K3 structures、homological algebra，以及 hyperkähler SYZ。它们使用主站当前的共用笔记模板与导航。新增构建目标不要求同时增加 Notes 页面入口。示例笔记源码保留供参考，不参与正式网站构建或页面列表。

## 在 VS Code 中编辑笔记

在 VS Code 中打开整个 `D:\homepage` **文件夹**，编辑 `source/notes/` 下的章节 PTX 文件。工作区推荐 PreTeXt-tools 扩展（`oscarlevin.pretext-tools`），使用项目现有的 Python 环境，并启用自动折行及两空格缩进。自动整篇格式化与粘贴自动转换已关闭。若移动工作目录，需要修改 `.vscode/settings.json` 中的 `pretext-tools.pythonPath`。

| 快捷键 | 功能 |
| --- | --- |
| `Ctrl+Alt+L` | 打开扩展自带的当前文件即时预览，保存后更新 |
| `Ctrl+Shift+B` | 保存打开的文件，只校验和重建当前笔记，再刷新其本地网页预览 |

使用构建快捷键时，让章节、笔记根文件或该笔记专用的 publication PTX 保持为当前编辑文件。首次成功构建后，浏览器打开对应章节；之后会刷新已连接的同一篇笔记预览，并保留阅读位置。预览服务会自动在 `http://localhost:8765/` 启动。校验或构建失败时，原来的网页和预览保持不变。这些任务不会提交、推送或部署。

快捷键会重建选中的整篇笔记，以保持编号、搜索索引和引用展开内容一致；其他笔记和主页不变。修改主页正文、共用样式或脚本、笔记列表中的信息、共用配置后，应通过 **终端 → 运行任务 → PreTeXt: Rebuild entire website (local)** 或 `Rebuild.ps1` 重建全站。

扩展即时预览适合修改文字和公式；最终的导航、旁注与布局仍以 localhost 页面为准，后者沿用全站构建的后处理。自动刷新脚本只由本地服务器临时加入页面响应，不写入待发布的 HTML。

不使用 VS Code 时，也可运行同样的当前笔记编辑流程：

```powershell
.\.venv\Scripts\python.exe tools/editor_preview.py --source source/notes/hyperkahler/chapter-02-twistor.ptx
```

## 重建与预览

在仓库目录下打开 PowerShell，建立本地 Python 环境：

```powershell
Set-Location D:\homepage
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe tools/setup_validation.py
```

如果使用 Windows 的 Python 启动器，可将建立环境命令中的 `python` 改为 `py`。依赖文件固定使用 PreTeXt `2.53.0`。

修改源码后运行：

```powershell
.\Rebuild.ps1
.\Start-preview.ps1
```

打开 [http://localhost:8765/](http://localhost:8765/)。预览服务器直接提供仓库根目录的文件；保持终端运行，按 Ctrl+C 停止。

`Rebuild.ps1` 优先使用仓库中的 `.venv`，其次查找 `python` 或 `py`。也可以明确指定解释器：

```powershell
.\Rebuild.ps1 -PythonPath 'C:\path\to\python.exe'
```

若使用已安装的依赖运行环境，可通过环境变量 `PRETEXT_PYTHONPATH` 指向其包目录。

首次运行的 `setup_validation.py` 下载固定版本及 SHA-256 校验的 Jing；Windows x64 缺少 Java 时，同时解压便携 Temurin JRE 到 `.build/cache/validation`，不修改系统安装或 PATH。其他平台需先安装 Java 8 或更新版本。常规重建不联网下载依赖。

不指定范围时，`Rebuild.ps1` 首先用 Jing 对全部启用目标的 XInclude 展开正文进行正式 RNG 校验，再生成页面。使用 `-SourcePath path\to\chapter.ptx` 或 `-Target note-hyperkahler` 时，只校验并重建该篇笔记。只去除拼装产生的 `xml:base` 属性；不删减或修改固定版本的语法。校验器不可用或正文不合规范时，构建在替换现有输出前失败。最近一次校验的记录为 `.build/reports/source-validation.json`；可单独运行 `.\.venv\Scripts\python.exe tools/validate_sources.py`，也可在命令后指定目标名。

构建先将网站生成至 `.build/site`，检查后再把生成文件同步到仓库根目录。`.site-files.json` 记录生成文件，过期文件的删除仅限于该清单管理的范围。缓存、临时文件和检查记录分别位于被忽略的 `.build/cache`、`.build/tmp`、`.build/reports`。PreTeXt 核心文件由固定版本的安装包自动解压到缓存中。

本地 MathJax、Lunr 资源及其许可证纳入版本管理。现有 PDF 和 CV 源文件继续保留。

## 使用 GitHub Pages 发布

重建或发布时，应保留上面记录的笔记入口设置。

沿用现有 GitHub Pages 发布分支及其 `/ (root)` 发布目录。

1. 重建并检查本地预览。
2. 检查源码、生成文件及 `.site-files.json` 的改动。
3. 将这些改动提交并推送到发布分支。

保留仓库中的 `.git` 目录、自定义域名文件 `CNAME` 和 `.nojekyll`。`.nojekyll` 使 PreTeXt 生成的资源直接作为静态文件提供。

备份存放在仓库之外，由所有者单独管理，不作为构建或发布输入。
