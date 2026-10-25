param([string]$PythonPath, [string]$SourcePath, [string]$Target)
$ErrorActionPreference = 'Stop'
$pythonOptions = @()
if (-not $PythonPath) {
    $projectPython = Join-Path $PSScriptRoot '.venv\Scripts\python.exe'
    if (Test-Path -LiteralPath $projectPython) { $PythonPath = $projectPython }
    elseif (Get-Command python -ErrorAction SilentlyContinue) { $PythonPath = (Get-Command python).Source }
    elseif (Get-Command py -ErrorAction SilentlyContinue) { $PythonPath = (Get-Command py).Source; $pythonOptions = @('-3') }
    else { throw 'Create a Python environment or supply -PythonPath.' }
}
$buildOptions = @()
if ($SourcePath) { $buildOptions += @('--source', $SourcePath) }
if ($Target) { $buildOptions += @('--target', $Target) }
& $PythonPath @pythonOptions -X utf8 (Join-Path $PSScriptRoot 'build.py') @buildOptions
if ($LASTEXITCODE -ne 0) { throw 'The build failed.' }
