@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   SPHEREX Landing Page - Automated Project Merger Tool
echo ========================================================
echo.

set "TARGET_DIR=%~1"

if "%TARGET_DIR%"=="" (
    echo Please enter the absolute or relative path of the project
    echo you want to merge this landing page into.
    echo.
    echo Examples:
    echo   ..\CRM FILE
    echo   E:\FINAL YEAR PROJECT\CRM FILE\src
    echo   C:\MyOtherApp
    echo.
    set /p "TARGET_DIR=Enter Target Project Path: "
)

if "%TARGET_DIR%"=="" (
    echo [ERROR] No destination path provided. Exiting.
    pause
    exit /b 1
)

if not exist "%TARGET_DIR%" (
    echo [INFO] Destination directory does not exist. Creating: %TARGET_DIR%
    mkdir "%TARGET_DIR%"
)

echo.
echo Select Merge Mode:
echo [1] React Component Bundle (Copies src/LandingPage.jsx, components/, index.css)
echo [2] Static Production Build (Builds and copies dist/ for Express/Django/HTML)
echo [3] Full Source Project (Copies complete landing page source code)
echo.
set /p "CHOICE=Enter choice (1, 2, or 3) [Default: 1]: "
if "%CHOICE%"=="" set "CHOICE=1"

if "%CHOICE%"=="1" (
    echo.
    echo Copying React landing page module into: %TARGET_DIR%\landing...
    mkdir "%TARGET_DIR%\landing" 2>nul
    mkdir "%TARGET_DIR%\landing\components" 2>nul
    
    copy /Y "src\LandingPage.jsx" "%TARGET_DIR%\landing\LandingPage.jsx"
    copy /Y "src\index.css" "%TARGET_DIR%\landing\index.css"
    xcopy /E /I /Y "src\components" "%TARGET_DIR%\landing\components"
    
    echo.
    echo [SUCCESS] Landing page component merged successfully!
    echo To use it in your other React/Next.js app:
    echo.
    echo   import LandingPage from './landing/LandingPage';
    echo.
    echo   export default function App() {
    echo     return ^<LandingPage /^>;
    echo   }
    echo.
)

if "%CHOICE%"=="2" (
    echo.
    echo Building production bundle...
    call npm run build
    echo.
    echo Copying compiled static files to: %TARGET_DIR%...
    xcopy /E /I /Y "dist" "%TARGET_DIR%"
    echo.
    echo [SUCCESS] Static build copied successfully!
)

if "%CHOICE%"=="3" (
    echo.
    echo Copying complete source files to: %TARGET_DIR%...
    xcopy /E /I /Y "src" "%TARGET_DIR%\src"
    copy /Y "index.html" "%TARGET_DIR%\index.html"
    copy /Y "package.json" "%TARGET_DIR%\package.json"
    copy /Y "vite.config.js" "%TARGET_DIR%\vite.config.js"
    echo.
    echo [SUCCESS] Full project source merged successfully!
)

echo.
echo ========================================================
echo   Merge Completed!
echo ========================================================
pause
