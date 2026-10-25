param([int]$Port = 8765, [string]$PythonPath)
$ErrorActionPreference = 'Stop'
$pythonOptions = @()
if (-not $PythonPath) {
    $projectPython = Join-Path $PSScriptRoot '.venv\Scripts\python.exe'
    if (Test-Path -LiteralPath $projectPython) { $PythonPath = $projectPython }
    elseif (Get-Command python -ErrorAction SilentlyContinue) { $PythonPath = (Get-Command python).Source }
    elseif (Get-Command py -ErrorAction SilentlyContinue) { $PythonPath = (Get-Command py).Source; $pythonOptions = @('-3') }
    else { throw 'Supply a Python interpreter using -PythonPath.' }
}
Write-Host "Open http://localhost:$Port/"
Write-Host 'Press Ctrl+C to stop this local preview.'
& $PythonPath @pythonOptions -X utf8 (Join-Path $PSScriptRoot 'tools\preview_server.py') --port $Port --root $PSScriptRoot
if ($LASTEXITCODE -ne 0) { throw 'The local preview server stopped with an error.' }
