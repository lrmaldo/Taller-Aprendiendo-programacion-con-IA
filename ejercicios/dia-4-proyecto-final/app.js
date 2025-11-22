// 🚀 Proyecto Final: To-Do List

// 1. Referencias al DOM
const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

// 2. Cargar tareas guardadas (LocalStorage)
// Pídele a la IA: "¿Cómo leer un array de tareas desde LocalStorage en JS?"


// 3. Función para agregar tarea
function agregarTarea() {
    const texto = inputTarea.value;
    if (texto === '') return alert("Escribe algo!");

    // Crear objeto tarea
    const tarea = {
        id: Date.now(),
        texto: texto,
        completada: false
    };

    // Agregar al DOM (crear <li>)
    // Pídele a la IA: "Cómo creo un elemento li con texto y un botón de borrar dentro, y lo agrego a un ul?"

    
    // Guardar en LocalStorage
    
    inputTarea.value = ''; // Limpiar input
}

// 4. Event Listeners
btnAgregar.addEventListener('click', agregarTarea);

// Reto:
// Implementa la función para borrar tareas y para marcarlas como completadas (tacharlas).
