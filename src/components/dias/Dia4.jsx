import React from 'react';
import { Download, Trophy, ListTodo, Sparkles } from 'lucide-react';

const Dia4 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Día 4: Proyecto Final</h1>
                <p className="text-yellow-100">Aplicando todo lo aprendido: Construcción de un Gestor de Tareas.</p>
            </header>

            {/* Sección 1: El Proyecto */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Trophy className="text-yellow-500" />
                    1. Tu Misión: Gestor de Tareas (To-Do List)
                </h2>
                <div className="prose text-gray-600 mb-6">
                    <p>
                        Vamos a construir una aplicación de consola completa. Este proyecto integrará variables, condicionales, bucles, funciones y arrays.
                    </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h3 className="font-bold text-yellow-900 mb-4">Requerimientos del Sistema:</h3>
                    <ul className="space-y-2 text-yellow-900">
                        <li className="flex items-center gap-2">
                            <ListTodo size={18} />
                            <strong>Añadir Tarea:</strong> Permitir ingresar una descripción.
                        </li>
                        <li className="flex items-center gap-2">
                            <ListTodo size={18} />
                            <strong>Listar Tareas:</strong> Mostrar todas las tareas con su índice.
                        </li>
                        <li className="flex items-center gap-2">
                            <ListTodo size={18} />
                            <strong>Eliminar Tarea:</strong> Borrar una tarea por su índice.
                        </li>
                        <li className="flex items-center gap-2">
                            <ListTodo size={18} />
                            <strong>Salir:</strong> Terminar el programa.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Sección 2: Estrategia con IA */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Sparkles className="text-purple-500" />
                    2. Estrategia de Desarrollo con IA
                </h2>
                <p className="text-gray-600 mb-4">
                    No intentes generar todo el programa de una sola vez. Divide y vencerás.
                </p>

                <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                        <div>
                            <h4 className="font-bold">Estructura de Datos</h4>
                            <p className="text-sm text-gray-600">"Crea un array vacío llamado tareas"</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                        <div>
                            <h4 className="font-bold">Funciones Individuales</h4>
                            <p className="text-sm text-gray-600">"Crea una función agregarTarea que reciba un texto y lo añada al array"</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                        <div>
                            <h4 className="font-bold">Interfaz (Menú)</h4>
                            <p className="text-sm text-gray-600">"Crea un bucle while que muestre un menú y pida una opción"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección 3: Descarga */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    🚀 ¡Manos a la obra!
                </h2>
                <p className="text-gray-600 mb-6">
                    Descarga la plantilla base. Contiene los comentarios guía para que tú y Copilot completen el código.
                </p>

                <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia4/gestor_tareas_base.js" download className="w-full block text-center bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all">
                    <Download className="inline-block mr-2" /> Descargar Plantilla del Proyecto Final
                </a>
            </section>
        </div>
    );
};

export default Dia4;
