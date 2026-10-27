@echo off
setlocal
set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"

echo ========================================================
echo          Pal Patel Portfolio - GitHub Upload Tool
echo ========================================================
echo.
echo Step 1: જો હજુ સુધી GitHub પર Repository નથી બનાવી, તો આ લિંક પર જઈને બનાવો:
echo         https://github.com/new
echo.
echo Step 2: તમારા Repository નું નામ શું રાખ્યું છે?
set /p REPONAME="Repository Name લખો (Default: portfolio): "
if "%REPONAME%"=="" set "REPONAME=portfolio"

echo.
echo [1/3] Git Configuration check kariye chhiye...
git config user.name "Pal Patel"
git config user.email "palpatel.dev@gmail.com"

echo [2/3] Remote URL connect kariye chhiye: https://github.com/palptl1503-ctrl/%REPONAME%.git
git remote remove origin 2>nul
git remote add origin https://github.com/palptl1503-ctrl/%REPONAME%.git
git branch -M main

echo [3/3] Code GitHub par upload (push) thai rahyo chhe...
echo (Browser ma Login/Authorize nu popup aave to Sign In kari lejo)
echo.
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Tamaro portfolio GitHub par upload thai gayo chhe!
    echo Link: https://github.com/palptl1503-ctrl/%REPONAME%
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo ERROR: Push fail thayu. Krupaya check karo ke:
    echo 1. https://github.com/new par Repository banavi chhe?
    echo 2. Repository nu name barabar lakhayu chhe?
    echo ========================================================
)

echo.
pause
