# 📥 Guía de Instalación de Herramientas

Esta guía te ayudará a instalar y configurar todas las herramientas necesarias para el taller.

## 📋 Lista de Herramientas

- ✅ Visual Studio Code (Editor de código)
- ✅ Git (Control de versiones)
- ✅ Node.js (Entorno de ejecución JavaScript)
- ✅ GitHub Copilot o alternativas gratuitas

---

## 1️⃣ Visual Studio Code

### Windows

1. **Descargar VS Code**
   - Visita: https://code.visualstudio.com/
   - Haz clic en "Download for Windows"
   - Ejecuta el instalador descargado

2. **Instalación**
   - Acepta los términos de licencia
   - ✅ **IMPORTANTE**: Marca estas opciones:
     - ☑️ Agregar "Abrir con Code" al menú contextual
     - ☑️ Agregar a PATH (importante)
     - ☑️ Registrar Code como editor predeterminado

3. **Verificar instalación**
   - Abre la terminal (Win + R, escribe `cmd`)
   - Escribe: `code --version`
   - Deberías ver la versión instalada

### macOS

1. **Descargar VS Code**
   - Visita: https://code.visualstudio.com/
   - Descarga para macOS
   - Arrastra VS Code a la carpeta Aplicaciones

2. **Agregar a PATH**
   - Abre VS Code
   - Presiona `Cmd + Shift + P`
   - Escribe: "Shell Command: Install 'code' command in PATH"

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
```

---

## 2️⃣ Git

### Windows

1. **Descargar Git**
   - Visita: https://git-scm.com/download/win
   - Descarga el instalador (64-bit recomendado)

2. **Instalación**
   - Ejecuta el instalador
   - Configuración recomendada:
     - Editor: Visual Studio Code
     - PATH: Git from the command line and also from 3rd-party software
     - HTTPS: Use the OpenSSL library
     - Line endings: Checkout Windows-style, commit Unix-style

3. **Configuración inicial**
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email.com"
   ```

4. **Verificar instalación**
   ```bash
   git --version
   ```

### macOS

**Opción 1: Homebrew (recomendado)**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
```

**Opción 2: Instalador**
- Descarga desde: https://git-scm.com/download/mac

### Linux

```bash
sudo apt update
sudo apt install git
```

---

## 3️⃣ Node.js

### Windows y macOS

1. **Descargar Node.js**
   - Visita: https://nodejs.org/
   - Descarga la versión LTS (Long Term Support)
   - Ejecuta el instalador

2. **Verificar instalación**
   ```bash
   node --version
   npm --version
   ```

### Linux

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## 4️⃣ GitHub Copilot (Opción Premium)

### Requisitos
- Cuenta de GitHub
- Suscripción a GitHub Copilot ($10/mes) o acceso gratuito para estudiantes/profesores

### Instalación

1. **Obtener acceso**
   - **Estudiantes/Profesores**: https://education.github.com/
   - **Otros**: https://github.com/features/copilot

2. **Instalar extensión en VS Code**
   - Abre VS Code
   - Ve a Extensiones (Ctrl + Shift + X)
   - Busca "GitHub Copilot"
   - Haz clic en "Install"
   - Inicia sesión con tu cuenta de GitHub

3. **Verificar funcionamiento**
   - Crea un archivo `test.js`
   - Escribe: `// función que suma dos números`
   - Presiona Enter y espera sugerencias

---

## 5️⃣ Alternativas GRATUITAS a GitHub Copilot

### 🟢 Opción 1: Codeium (RECOMENDADO)

**Características:**
- ✅ Completamente GRATIS
- ✅ Soporte para 70+ lenguajes
- ✅ Sin límite de sugerencias
- ✅ Funciona offline después de la configuración inicial

**Instalación:**
1. Abre VS Code
2. Ve a Extensiones (Ctrl + Shift + X)
3. Busca "Codeium"
4. Instala la extensión
5. Crea una cuenta gratuita en https://codeium.com/
6. Inicia sesión en VS Code

**Verificar:**
- Crea un archivo `test.js`
- Escribe: `// función que calcula el factorial`
- Deberías ver sugerencias automáticas

---

### 🔵 Opción 2: Tabnine

**Características:**
- ✅ Plan gratuito disponible
- ✅ Sugerencias basadas en IA
- ✅ Funciona localmente (privacidad)

**Instalación:**
1. Extensiones → Buscar "Tabnine"
2. Instalar
3. Crear cuenta gratuita
4. Seleccionar plan "Starter" (gratis)

**Limitaciones del plan gratuito:**
- Sugerencias más cortas que Copilot
- Menos contexto

---

### 🟡 Opción 3: Amazon CodeWhisperer

**Características:**
- ✅ GRATIS para uso individual
- ✅ Soporte para múltiples lenguajes
- ✅ Escaneo de seguridad incluido

**Instalación:**
1. Instalar extensión "AWS Toolkit" en VS Code
2. Crear cuenta AWS (gratuita)
3. Activar CodeWhisperer

---

## 📊 Comparativa de Asistentes de IA

| Característica | GitHub Copilot | Codeium | Tabnine | CodeWhisperer |
|----------------|----------------|---------|---------|---------------|
| **Precio** | $10/mes | GRATIS | Gratis/Pago | GRATIS |
| **Calidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Velocidad** | Rápido | Rápido | Medio | Rápido |
| **Offline** | ❌ | Parcial | ✅ | ❌ |
| **Privacidad** | Media | Alta | Muy Alta | Media |

**Recomendación para el taller:**
- Si tienes acceso a Copilot → Úsalo
- Si no → **Codeium** es la mejor alternativa gratuita

---

## ✅ Verificación Final

Ejecuta estos comandos para verificar que todo está instalado:

```bash
# Verificar VS Code
code --version

# Verificar Git
git --version

# Verificar Node.js
node --version

# Verificar npm
npm --version
```

**Resultado esperado:**
```
1.85.0 (o superior)
git version 2.40.0 (o superior)
v20.10.0 (o superior)
10.2.0 (o superior)
```

---

## 🆘 Solución de Problemas

### VS Code no se abre desde la terminal
**Windows:**
- Reinstala VS Code marcando "Agregar a PATH"

**macOS:**
- Ejecuta: `Cmd + Shift + P` → "Shell Command: Install 'code'"

### Git no reconocido
- Cierra y vuelve a abrir la terminal
- Verifica que se agregó a PATH durante la instalación

### Node.js no funciona
- Reinicia la computadora
- Verifica la instalación en Panel de Control (Windows)

### Copilot/Codeium no sugiere código
- Verifica que iniciaste sesión
- Revisa que la extensión esté habilitada
- Intenta recargar VS Code (Ctrl + Shift + P → "Reload Window")

---

## 📚 Recursos Adicionales

- [Documentación VS Code](https://code.visualstudio.com/docs)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Node.js Docs](https://nodejs.org/docs/latest/api/)
- [Codeium Docs](https://codeium.com/docs)

---

## 🎯 Próximos Pasos

Una vez que tengas todo instalado:
1. ✅ Abre VS Code
2. ✅ Crea una carpeta para el taller
3. ✅ Abre la carpeta en VS Code (File → Open Folder)
4. ✅ Crea un archivo `prueba.js`
5. ✅ Escribe un comentario y espera sugerencias de tu asistente de IA

**¡Estás listo para comenzar el Día 1 del taller! 🚀**
