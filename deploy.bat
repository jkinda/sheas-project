@echo off
REM ############################################################################
REM Script de Deploiement Automatique - Shea's (Windows)
REM Usage: Double-cliquez sur deploy.bat
REM ############################################################################

echo ==========================================
echo   Deploiement Shea's - Hostinger
echo ==========================================
echo.

REM Verifier que Node.js est installe
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Erreur: Node.js n'est pas installe.
    echo Installez-le depuis nodejs.org
    pause
    exit /b 1
)

REM Verifier que npm est installe
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Erreur: npm n'est pas installe.
    echo Installez Node.js depuis nodejs.org
    pause
    exit /b 1
)

echo Node.js et npm detectes
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo Version Node: %NODE_VERSION%
echo Version npm: %NPM_VERSION%
echo.

REM Verifier qu'on est dans le bon dossier
if not exist "package.json" (
    echo Erreur: package.json introuvable
    echo Assurez-vous d'etre dans le dossier sheas-project
    pause
    exit /b 1
)

echo Dossier du projet detecte
echo.

REM Installer les dependances
echo Installation des dependances...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo Erreur lors de l'installation des dependances
    pause
    exit /b 1
)

echo Dependances installees
echo.

REM Construire le site
echo Construction du site pour la production...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Erreur lors de la construction
    pause
    exit /b 1
)

echo Site construit avec succes
echo.

REM Verifier que le dossier dist existe
if not exist "dist" (
    echo Erreur: Le dossier dist n'a pas ete cree
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   BUILD TERMINE AVEC SUCCES !
echo ==========================================
echo.
echo Fichiers prets a uploader :
echo    Dossier: dist\
echo.
echo PROCHAINES ETAPES :
echo.
echo 1. HOSTINGER FILE MANAGER :
echo    - Connectez-vous a hpanel.hostinger.com
echo    - Gestionnaire de fichiers -^> public_html
echo    - Uploadez le contenu de dist\
echo.
echo 2. Creez .htaccess dans public_html\
echo.
echo 3. Activez SSL dans hPanel
echo.
echo 4. Uploadez contact.php
echo.
echo Consultez GUIDE-RAPIDE-HOSTINGER.md pour plus de details
echo.
echo Bon deploiement !
echo.

pause
