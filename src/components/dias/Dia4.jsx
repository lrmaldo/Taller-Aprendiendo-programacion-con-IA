import React from 'react';
import { Download, Trophy, ListTodo, Sparkles, Globe, Rocket, Box } from 'lucide-react';

const Dia4 = ({ level }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className={`bg-gradient-to-r ${level === 'basico' ? 'from-yellow-500 to-orange-600' : 'from-amber-700 to-orange-800'} text-white p-8 rounded-xl shadow-lg`}>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Día 4: Proyecto Final & Despliegue</h1>
                        <p className={level === 'basico' ? 'text-yellow-100' : 'text-amber-200'}>
                            {level === 'basico' ? 'De la idea a la realidad: Tu primera Web App publicada.' : 'Arquitectura de Software: Gestor de Tareas POO.'}
                        </p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Nivel {level === 'basico' ? 'Básico' : 'Avanzado'}
                    </span>
                </div>
            </header>

            {/* Sección 1: El Proyecto */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Trophy className="text-yellow-500" />
                    1. Tu Misión: Gestor de Tareas Web
                </h2>
                <div className="prose text-gray-600 mb-6">
                    <p>
                        Vamos a construir una aplicación real.
                        {level === 'basico'
                            ? ' Usaremos funciones para manejar una lista de tareas (Arrays).'
                            : ' Para el nivel avanzado, implementaremos una arquitectura basada en Clases (POO) para manejar el estado.'}
                    </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h3 className="font-bold text-yellow-900 mb-4">Requerimientos:</h3>
                    <ul className="space-y-2 text-yellow-900">
                        {level === 'basico' ? (
                            <>
                                <li className="flex items-center gap-2">
                                    <ListTodo size={18} />
                                    <strong>Lista de Tareas:</strong> Un Array simple <code>[]</code>.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ListTodo size={18} />
                                    <strong>Funciones:</strong> <code>agregarTarea()</code>, <code>eliminarTarea()</code>.
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-center gap-2">
                                    <Box size={18} />
                                    <strong>Clase Tarea:</strong> Propiedades (id, texto, completada) y métodos (toggle).
                                </li>
                                <li className="flex items-center gap-2">
                                    <Box size={18} />
                                    <strong>Clase GestorTareas:</strong> Maneja el array de tareas y el LocalStorage.
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </section>

            {/* Sección 2: Estrategia con IA */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Sparkles className="text-purple-500" />
                    2. Estrategia de Desarrollo
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        {level === 'basico'
                            ? 'Pide a la IA que genere las funciones una por una.'
                            : 'Usa la IA para generar la estructura de las clases primero, y luego la lógica de la interfaz.'}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-4-proyecto-final-poo/index.html" download className="flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors">
                            <Download size={18} /> Descargar HTML
                        </a>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-4-proyecto-final-poo/app-poo.js" download className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                            <Download size={18} /> Descargar JS {level === 'avanzado' && '(POO)'}
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección 3: Despliegue */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Rocket className="text-red-500" />
                    3. Publicar en Internet (GitHub Pages)
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Sube tu proyecto a GitHub y activa GitHub Pages en los Settings.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Dia4;
