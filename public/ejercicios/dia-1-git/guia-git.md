# 🌳 Ejercicio: Tu Primer Repositorio en GitHub

## Objetivo
Aprender a guardar tu código en la nube usando Git y GitHub.

## Pasos

1.  **Crear una cuenta en GitHub**: Si no la tienes, ve a [github.com](https://github.com) y regístrate.
2.  **Instalar Git**: Asegúrate de tener Git instalado en tu computadora.
    *   Windows: [git-scm.com/download/win](https://git-scm.com/download/win)
3.  **Configurar Git** (Solo la primera vez):
    Abre tu terminal en VS Code (Terminal -> New Terminal) y escribe:
    ```bash
    git config --global user.name "Tu Nombre"
    git config --global user.email "tu@email.com"
    ```

4.  **Inicializar el repositorio**:
    En la carpeta de tu proyecto (donde has estado trabajando), escribe:
    ```bash
    git init
    ```

5.  **Guardar cambios (Commit)**:
    ```bash
    git add .
    git commit -m "Mi primer commit: Hola Mundo"
    ```

6.  **Subir a GitHub**:
    *   Crea un "New Repository" en GitHub (botón verde).
    *   Ponle un nombre (ej: `taller-ia-dia1`).
    *   Copia los comandos que te da GitHub bajo "...or push an existing repository from the command line".
    *   Pégalos en tu terminal.

## 🤖 Pregúntale a la IA
*   "¿Qué es un commit y por qué es importante?"
*   "¿Cuál es la diferencia entre git add y git commit?"
*   "Explícame qué hace el comando git push."
