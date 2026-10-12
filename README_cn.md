# Jie Fu 的个人主页

[English](README.md) · [笔记指南](NOTES_cn.md)

本仓库保存 PreTeXt 源码及生成的静态网站。正式工作目录是 `D:\homepage`，同时也是 GitHub Pages 的发布根目录。网站正文与导航使用英文。

本网站的搭建使用了大语言模型辅助。

## 编辑主页

修改源码后重新构建。发布根目录中的 HTML、样式及阅读页面均为生成结果。

| 位置 | 用途 |
| --- | --- |
| `source/main.ptx` | 主站结构及页面引用 |
| `source/preprints-list.ptx` | Home 与 Preprints 共用的预印本列表 |
| `source/notes-list.ptx` | Notes 与精选笔记共用的列表 |
| `source/sections/` | Home、研究、论文列表及资源页面 |
| `source/profile.ptx` | Home 的照片、简介、访问信息及联系方式 |
| `source/layout.css` | 全站布局 |
| `publication/` | 主站和笔记的发布配置 |
| `xsl/` | 对 PreTeXt 展示方式的项目扩展 |
| `project.ptx`、`build.py`、`tools/` | 构建目标、检查及同步 |

数学笔记的源码、引用和阅读功能见 [NOTES_cn.md](NOTES_cn.md)。示例笔记源码保留供参考，不参与正式网站构建或页面列表。

## 重建与预览

在仓库目录下打开 PowerShell，建立本地 Python 环境：

```powershell
Set-Location D:\homepage
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
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

构建先将网站生成至 `.build/site`，检查后再把生成文件同步到仓库根目录。`.site-files.json` 记录生成文件，过期文件的删除仅限于该清单管理的范围。缓存、临时文件和检查记录分别位于被忽略的 `.build/cache`、`.build/tmp`、`.build/reports`。PreTeXt 核心文件由固定版本的安装包自动解压到缓存中。

本地 MathJax、Lunr 资源及其许可证纳入版本管理。现有 PDF 和 CV 源文件继续保留。

## 使用 GitHub Pages 发布

沿用现有 GitHub Pages 发布分支及其 `/ (root)` 发布目录。

1. 重建并检查本地预览。
2. 检查源码、生成文件及 `.site-files.json` 的改动。
3. 将这些改动提交并推送到发布分支。

保留仓库中的 `.git` 目录、自定义域名文件 `CNAME` 和 `.nojekyll`。`.nojekyll` 使 PreTeXt 生成的资源直接作为静态文件提供。

备份存放在仓库之外，由所有者单独管理，不作为构建或发布输入。
