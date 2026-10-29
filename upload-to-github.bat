@echo off
setlocal
set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%LOCALAPPDATA%\Programs\MinGit\mingw64\bin;%PATH%"

cls
echo ====================================================================
echo                   Pal Patel Portfolio - GitHub Upload
echo ====================================================================
echo.
echo Connecting to: https://github.com/palptl1503-ctrl/Portfolio.git
echo.

git remote remove origin 2>nul
git remote add origin https://github.com/palptl1503-ctrl/Portfolio.git
git branch -M main

echo Uploading (pushing) code to GitHub...
echo (Agar browser popup aave to "Sign in with your browser" par click karjo)
echo.

git push -u origin main --force

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================================================
    echo [SUCCESS] Badho code GitHub par safalta purvak upload thai gayo!
    echo URL: https://github.com/palptl1503-ctrl/Portfolio
    echo.
    echo Have Vercel par "Redeploy" par click karo, site live thai jashe!
    echo ====================================================================
) else (
    echo.
    echo ====================================================================
    echo [ERROR] Push fail thayu. Krupaya upar no message dhyan thi vaacho.
    echo ====================================================================
)

echo.
pause
