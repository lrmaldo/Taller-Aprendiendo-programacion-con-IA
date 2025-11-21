import React from 'react';
import { Download, Terminal, Play, Code } from 'lucide-react';

const Dia1 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Día 1: Introducción a la IA en Programación</h1>
                <p className="text-blue-100">Configuración del entorno y primeros pasos con tu copiloto.</p>
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
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sección 2: Hola Mundo con IA */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Play className="text-green-500" />
                    2. Tu Primer "Hola Mundo" Asistido
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Vamos a ver cómo la IA puede generar código por nosotros. En lugar de escribir el código directamente, escribiremos un comentario describiendo lo que queremos.
                    </p>

                    <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm">
                        <div className="text-green-400">// Escribe un programa que salude al usuario por consola</div>
                        <div className="text-white mt-2">console.log("¡Hola, Mundo! Bienvenido al curso de IA.");</div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia1/hola_mundo.js" download className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                            <Download size={18} /> Descargar Ejercicio 1
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección 3: Ejercicios Prácticos */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Code className="text-purple-500" />
                    3. Práctica: Cálculos y Textos
                </h2>
                <p className="text-gray-600 mb-4">
                    Descarga el archivo de ejercicios y usa Copilot para resolver los siguientes retos:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border p-4 rounded bg-gray-50">
                        <h3 className="font-bold mb-2">Reto A: Calculadora Simple</h3>
                        <p className="text-sm text-gray-600">Pide a la IA que genere variables para dos números y realice suma, resta, multiplicación y división.</p>
                    </div>
                    <div className="border p-4 rounded bg-gray-50">
                        <h3 className="font-bold mb-2">Reto B: Manipulación de Texto</h3>
                        <p className="text-sm text-gray-600">Crea una variable con tu nombre y pide a la IA que lo convierta a mayúsculas y cuente sus letras.</p>
                    </div>
                </div>

                <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia1/calculos.js" download className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors w-fit">
                    <Download size={18} /> Descargar Ejercicios Prácticos
                </a>
            </section>
        </div>
    );
};

export default Dia1;
