// 🚀 Proyecto Final: To-Do List con POO

// 1. Clase Tarea
// Representa una sola tarea.
class Tarea {
    constructor(id, texto, completada = false) {
        this.id = id;
        this.texto = texto;
        this.completada = completada;
    }

    toggle() {
        this.completada = !this.completada;
    }
}

// 2. Clase GestorTareas
// Maneja la lista de tareas y el LocalStorage.
class GestorTareas {
    constructor() {
        this.tareas = [];
        this.cargar();
    }

    agregar(texto) {
        // Pídele a la IA: "Cómo crear una instancia de la clase Tarea y agregarla al array"
    }

    eliminar(id) {
        // Filtra el array para quitar la tarea con ese id
    }

    guardar() {
        localStorage.setItem('misTareas', JSON.stringify(this.tareas));
    }

    cargar() {
        const guardado = localStorage.getItem('misTareas');
        if (guardado) {
            // Pídele a la IA: "Cómo convertir el JSON guardado de vuelta a objetos Tarea"
            // Nota: Al cargar del JSON, pierden sus métodos. Hay que reconstruirlos.
        }
    }
}

// 3. Interfaz Gráfica (UI)
// Conecta las clases con el HTML (DOM).
const gestor = new GestorTareas();
const btnAgregar = document.getElementById('btnAgregar');
// ...

function renderizar() {
    // Borra la lista actual y dibuja todas las tareas del gestor
}

// Event Listeners
btnAgregar.addEventListener('click', () => {
    // ...
});
