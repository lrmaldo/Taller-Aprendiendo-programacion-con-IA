import React from 'react';
import { Download, Terminal, Play, Code, MessageSquare, GitBranch } from 'lucide-react';

const Dia1 = ({ level }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className={`bg-gradient-to-r ${level === 'basico' ? 'from-blue-600 to-indigo-700' : 'from-slate-800 to-purple-900'} text-white p-8 rounded-xl shadow-lg`}>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Día 1: Fundamentos Sólidos & IA</h1>
                        <p className={level === 'basico' ? 'text-blue-100' : 'text-purple-200'}>
                            {level === 'basico' ? 'Configuración, Prompts, Variables y Git.' : 'Configuración Avanzada, Prompts Eficientes y Git Flow.'}
                        </p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Nivel {level === 'basico' ? 'Básico' : 'Avanzado'}
                    </span>
                </div>
            </header>

            {/* Sección 1: Qué es la IA */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Terminal className="text-blue-500" />
                    1. Tu Nuevo Compañero de Código
                </h2>
                <div className="prose text-gray-600">
                    <p className="mb-4">
                        La Inteligencia Artificial no viene a reemplazarte, viene a potenciarte. Herramientas como GitHub Copilot funcionan como un "programador par" (pair programmer) que está siempre disponible.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-bold text-blue-900">¿Qué puede hacer por ti?</h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Autocompletar líneas de código repetitivas.</li>
                            <li>Sugerir algoritmos completos basados en comentarios.</li>
                            <li>Ayudarte a encontrar errores (debugging).</li>
                            <li>Explicar código que no entiendes.</li>
                            {level === 'avanzado' && (
                                <li className="font-semibold text-purple-700">Generar estructuras de clases y tests unitarios.</li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sección 2: Ingeniería de Prompts */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MessageSquare className="text-orange-500" />
                    2. Ingeniería de Prompts
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Para obtener los mejores resultados, usa la fórmula del <strong>Prompt Perfecto</strong>:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <span className="font-bold text-orange-700 block mb-1">1. Rol</span>
                            "Actúa como un experto en {level === 'basico' ? 'JavaScript' : 'Arquitectura de Software'}..."
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <span className="font-bold text-orange-700 block mb-1">2. Contexto</span>
                            "Estoy {level === 'basico' ? 'aprendiendo a programar' : 'diseñando un sistema de gestión'}..."
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <span className="font-bold text-orange-700 block mb-1">3. Tarea</span>
                            "{level === 'basico' ? 'Explícame los bucles for' : 'Genera una clase Usuario con validaciones'}..."
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <span className="font-bold text-orange-700 block mb-1">4. Restricciones</span>
                            "Usa {level === 'basico' ? 'ejemplos sencillos' : 'patrones de diseño y tipado fuerte'}."
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-gray-700 mb-2">Ejercicio Rápido:</h3>
                        <p className="text-sm text-gray-600 italic border-l-4 border-gray-300 pl-4 py-2 bg-gray-50">
                            {level === 'basico'
                                ? '"Actúa como un profesor. Explícame qué es una Variable usando una analogía con cajas de mudanza."'
                                : '"Actúa como un Senior Dev. Explícame la diferencia entre Programación Imperativa y Declarativa con un ejemplo en JS."'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección 3: Hola Mundo con IA */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Play className="text-green-500" />
                    3. {level === 'basico' ? 'Tu Primer "Hola Mundo" Asistido' : 'Setup de Entorno & Hello World'}
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Vamos a ver cómo la IA puede generar código por nosotros. En lugar de escribir el código directamente, escribiremos un comentario describiendo lo que queremos.
                    </p>

                    <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm">
                        <div className="text-green-400">// {level === 'basico' ? 'Escribe un programa que salude al usuario por consola' : 'Crea una función autoejecutable que imprima un saludo y la fecha actual'}</div>
                        <div className="text-white mt-2">
                            {level === 'basico'
                                ? 'console.log("¡Hola, Mundo! Bienvenido al curso de IA.");'
                                : '(function() { console.log("¡Hola, Dev! Fecha:", new Date().toISOString()); })();'}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección 4: Git & GitHub */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <GitBranch className="text-red-500" />
                    4. Git & GitHub: Guardando en la Nube
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Git es como un "punto de guardado" en un videojuego. GitHub es donde subes esos guardados a internet.
                    </p>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg font-mono text-sm space-y-2">
                        <div className="flex gap-2">
                            <span className="text-yellow-400">$</span>
                            <span>git init</span>
                            <span className="text-gray-500">// Inicia el repositorio</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-yellow-400">$</span>
                            <span>git add .</span>
                            <span className="text-gray-500">// Prepara los archivos</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-yellow-400">$</span>
                            <span>git commit -m "Mi primer código"</span>
                            <span className="text-gray-500">// Guarda la foto</span>
                        </div>
                    </div>
                    <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-1-git/guia-git.md" target="_blank" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium">
                        <Download size={18} /> Ver Guía Completa de Git
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Dia1;
