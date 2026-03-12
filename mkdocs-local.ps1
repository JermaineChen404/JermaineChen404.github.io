param(
  [ValidateSet('serve','build')]
  [string]$Command = 'serve'
)

$python = Join-Path $PSScriptRoot '..\..\.venv\Scripts\python.exe'
$python = [System.IO.Path]::GetFullPath($python)

if (-not (Test-Path $python)) {
  Write-Error "Python not found at $python"
  exit 1
}

if ($Command -eq 'serve') {
  & $python -m mkdocs serve
} else {
  & $python -m mkdocs build
}
