$gitCmd = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"
$env:PATH = "$env:LOCALAPPDATA\Programs\MinGit\cmd;$env:LOCALAPPDATA\Programs\MinGit\mingw64\bin;$env:PATH"

Clear-Host
Write-Host "====================================================================" -ForegroundColor Cyan
Write-Host "               Pal Patel Portfolio - GitHub Upload" -ForegroundColor Green
Write-Host "====================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Connecting to: https://github.com/palptl1503-ctrl/Portfolio.git" -ForegroundColor Yellow
Write-Host ""

& $gitCmd remote remove origin 2>$null
& $gitCmd remote add origin https://github.com/palptl1503-ctrl/Portfolio.git
& $gitCmd branch -M main

Write-Host "Uploading (pushing) code to GitHub..." -ForegroundColor Yellow
Write-Host "(Agar browser ma popup aave to 'Sign in with your browser' par click karjo)" -ForegroundColor DarkGray
Write-Host ""

& $gitCmd push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "====================================================================" -ForegroundColor Green
    Write-Host "[SUCCESS] Badho code GitHub par safalta purvak upload thai gayo!" -ForegroundColor Green
    Write-Host "URL: https://github.com/palptl1503-ctrl/Portfolio" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Have Vercel par 'Redeploy' par click karo, site live thai jashe!" -ForegroundColor Yellow
    Write-Host "====================================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "====================================================================" -ForegroundColor Red
    Write-Host "[ERROR] Push fail thayu. Krupaya upar no message dhyan thi vaacho." -ForegroundColor Red
    Write-Host "====================================================================" -ForegroundColor Red
}

Write-Host ""
Read-Host -Prompt "Press Enter to exit"

