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

echo Pushing all code to GitHub...
echo (Agar browser ma GitHub sign in popup aave to login kari lejo)
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Portfolio GitHub par upload thai gayo chhe!
    echo Check karo: https://github.com/palptl1503-ctrl/Portfolio
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo Push incomplete.
    echo ========================================================
)

echo.
pause
