param([string]$PythonPath)
$ErrorActionPreference = 'Stop'
$pythonOptions = @()
if (-not $PythonPath) {
    $projectPython = Join-Path $PSScriptRoot '.venv\Scripts\python.exe'
    if (Test-Path -LiteralPath $projectPython) { $PythonPath = $projectPython }
    elseif (Get-Command python -ErrorAction SilentlyContinue) { $PythonPath = (Get-Command python).Source }
    elseif (Get-Command py -ErrorAction SilentlyContinue) { $PythonPath = (Get-Command py).Source; $pythonOptions = @('-3') }
    else { throw 'Create a Python environment or supply -PythonPath.' }
}
& $PythonPath @pythonOptions -X utf8 (Join-Path $PSScriptRoot 'build.py')
if ($LASTEXITCODE -ne 0) { throw 'The build failed.' }
