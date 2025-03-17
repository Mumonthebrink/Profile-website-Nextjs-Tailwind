# PowerShell Script: Extract and Display All Code Files (Excluding Standard Package Files)

# Define project root directory
$projectRoot = "C:\Users\Monika\OneDrive\Coursework-SoftwareEngineering\MRProfileSite\monika-roozen-profile"

# Define output file location in project root
$outputFile = "$projectRoot\project_code_dump.txt"

# Ensure the project root exists
if (!(Test-Path $projectRoot)) {
    Write-Host "Error: Project directory not found!"
    exit 1
}

# Remove previous output file if it exists
if (Test-Path $outputFile) { Remove-Item -Force $outputFile }

# Define file extensions to include
$allowedExtensions = @("*.tsx", "*.ts", "*.js", "*.jsx", "*.css", "*.json", "*.md", "*.env")

# Get all matching files, excluding node_modules and .next
$files = Get-ChildItem -Path $projectRoot -Recurse -File -Include $allowedExtensions |
         Where-Object { $_.FullName -notmatch "node_modules|\.next|package-lock.json|yarn.lock|package.json" }

# Write header to output file
"### Monika Roozen Profile Project Code Dump - $(Get-Date)" | Out-File -Append -FilePath $outputFile
"`n----------------------------`n" | Out-File -Append -FilePath $outputFile

# Loop through each file and append its content to the output file
foreach ($file in $files) {
    "`n`n### File: $($file.FullName) `n----------------------------`n" | Out-File -Append -FilePath $outputFile
    Get-Content -Path $file.FullName | Out-File -Append -FilePath $outputFile
}

# Confirm where the file is saved
Write-Host "`n✅ Extraction complete! All code files saved in: $outputFile 🚀"

# Open the file in Notepad (optional)
Start-Process notepad.exe $outputFile
