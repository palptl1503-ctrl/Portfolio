@echo off
setlocal
set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"

echo ========================================================
echo          Pal Patel Portfolio - GitHub Upload
echo ========================================================
echo.
echo Connecting to: https://github.com/palptl1503-ctrl/Portfolio.git
echo.

git remote remove origin 2>nul
git remote add origin https://github.com/palptl1503-ctrl/Portfolio.git
git branch -M main

echo [1/2] Code GitHub par upload (push) thai rahyo chhe...
echo (Browser ma GitHub sign-in popup aave to login kari lejo)
echo.

git push -u origin main --force

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Badho code GitHub par upload thai gayo chhe!
    echo Check karo: https://github.com/palptl1503-ctrl/Portfolio
    echo.
    echo Have Vercel par "Redeploy" par click karo, site live thai jashe!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo Push ma kai bhul aavi. Krupaya upar no error message vaacho.
    echo ========================================================
)

echo.
pause
