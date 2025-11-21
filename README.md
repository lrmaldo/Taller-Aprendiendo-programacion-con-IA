# 🤖 Taller: Aprendiendo Programación con IA

Infografía interactiva para aprender a escribir prompts efectivos al programar con asistentes de IA.

## 🌟 Características

- **Anatomía del Prompt**: Aprende la estructura de un prompt perfecto
- **Buenos vs Malos Ejemplos**: Comparaciones lado a lado
- **Ejercicios Prácticos**: Niveles principiante, intermedio y avanzado
- **Tips Avanzados**: Técnicas para mejorar tus resultados

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/Taller-Aprendiendo-programacion-con-IA.git

# Navegar al directorio
cd Taller-Aprendiendo-programacion-con-IA

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run deploy` - Despliega a GitHub Pages

## 🌐 Desplegar a GitHub Pages

### Configuración Inicial

1. **Crear repositorio en GitHub** con el nombre: `Taller-Aprendiendo-programacion-con-IA`

2. **Inicializar Git localmente**:
```bash
git init
git add .
git commit -m "Initial commit: Infografía de prompts para programación con IA"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Taller-Aprendiendo-programacion-con-IA.git
git push -u origin main
```

3. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages
   - En "Source", selecciona "Deploy from a branch"
   - En "Branch", selecciona `gh-pages` y carpeta `/ (root)`
   - Guarda los cambios

4. **Desplegar**:
```bash
npm run deploy
```

5. **Acceder a tu sitio**:
   - URL: `https://TU-USUARIO.github.io/Taller-Aprendiendo-programacion-con-IA/`

### Actualizaciones Futuras

Para actualizar el sitio después de hacer cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
npm run deploy
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos
- **gh-pages** - Deployment a GitHub Pages

## 📝 Estructura del Proyecto

```
Taller-Aprendiendo-programacion-con-IA/
├── src/
│   ├── components/
│   │   └── InfografiaPrompts.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Cambiar el nombre del repositorio

Si decides usar un nombre diferente para tu repositorio, actualiza el campo `base` en `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/TU-NOMBRE-DE-REPO/',
})
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👨‍💻 Autor

Taller de Aprendiendo Programación con IA

---

¡Disfruta aprendiendo a programar con IA! 🚀
