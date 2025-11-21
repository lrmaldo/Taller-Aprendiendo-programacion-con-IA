import React from 'react';
import { Sparkles, Download, Code, Lightbulb, Terminal, CheckCircle, BookOpen, Zap } from 'lucide-react';

const Dia1 = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
                <h1 className="text-3xl font-bold mb-2">📘 Día 1: Introducción a la IA en Programación</h1>
                <p className="text-blue-100">Descubre cómo la Inteligencia Artificial puede ser tu mejor aliado al aprender a programar</p>
            </div>

            {/* Objetivos del Día */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <Sparkles size={24} />
                    Objetivos del Día
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex gap-2 items-start">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">Comprender qué es la IA y cómo ayuda en programación</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">Instalar y configurar herramientas necesarias</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">Crear tu primer programa con asistencia de IA</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">Realizar cálculos y manipular texto con JavaScript</span>
                    </div>
                </div>
            </div>

            {/* Teoría */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <BookOpen size={24} />
                    ¿Qué es la IA en Programación?
                </h2>

                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-4 rounded">
                        <h3 className="font-bold text-purple-900 mb-2">🤖 Inteligencia Artificial como Asistente</h3>
                        <p className="text-gray-700 text-sm">
                            La IA en programación es como tener un mentor experto disponible 24/7. Herramientas como
                            GitHub Copilot, Codeium y Tabnine usan modelos de lenguaje entrenados con millones de
                            líneas de código para ayudarte a:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700 ml-4">
                            <li>• Generar código a partir de descripciones en lenguaje natural</li>
                            <li>• Completar automáticamente lo que estás escribiendo</li>
                            <li>• Explicar código existente</li>
                            <li>• Detectar y corregir errores</li>
                            <li>• Sugerir mejores prácticas</li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border-2 border-green-200 bg-green-50 p-4 rounded-lg">
                            <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle size={18} />
                                Ventajas de Aprender con IA
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>✅ Feedback instantáneo</li>
                                <li>✅ Aprende a tu propio ritmo</li>
                                <li>✅ Ejemplos personalizados</li>
                                <li>✅ Reduce la frustración inicial</li>
                                <li>✅ Fomenta la experimentación</li>
                            </ul>
                        </div>

                        <div className="border-2 border-yellow-200 bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                <Lightbulb size={18} />
                                Importante Recordar
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>⚠️ La IA es un asistente, no un reemplazo</li>
                                <li>⚠️ Debes entender el código que generas</li>
                                <li>⚠️ Siempre prueba y verifica el código</li>
                                <li>⚠️ Aprende de las sugerencias</li>
                                <li>⚠️ Desarrolla tu propio criterio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instalación */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <Download size={24} />
                    Instalación de Herramientas
                </h2>
                <p className="text-gray-700 mb-4">
                    Antes de comenzar a programar, necesitas instalar las siguientes herramientas:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                        <h3 className="font-bold text-indigo-900 mb-2">1. Visual Studio Code</h3>
                        <p className="text-sm text-gray-600 mb-2">Editor de código profesional y gratuito</p>
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm">
                            → Descargar VS Code
                        </a>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                        <h3 className="font-bold text-indigo-900 mb-2">2. Git</h3>
                        <p className="text-sm text-gray-600 mb-2">Sistema de control de versiones</p>
                        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm">
                            → Descargar Git
                        </a>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                        <h3 className="font-bold text-indigo-900 mb-2">3. Node.js</h3>
                        <p className="text-sm text-gray-600 mb-2">Entorno para ejecutar JavaScript</p>
                        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm">
                            → Descargar Node.js (LTS)
                        </a>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                        <h3 className="font-bold text-indigo-900 mb-2">4. Asistente de IA</h3>
                        <p className="text-sm text-gray-600 mb-2">GitHub Copilot o Codeium (gratis)</p>
                        <a href="https://codeium.com/" target="_blank" rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm">
                            → Obtener Codeium (Gratis)
                        </a>
                    </div>
                </div>

                <a
                    href="/GUIA_INSTALACION.md"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                >
                    <Download size={20} />
                    Descargar Guía de Instalación Completa
                </a>
            </div>

            {/* Primer Programa */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <Code size={24} />
                    Tu Primer Programa: "Hola Mundo"
                </h2>

                <div className="space-y-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">📝 Paso 1: Crear un archivo</h3>
                        <ol className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>1. Abre Visual Studio Code</li>
                            <li>2. Crea una carpeta llamada "taller-ia"</li>
                            <li>3. Dentro de la carpeta, crea un archivo llamado <code className="bg-gray-200 px-2 py-1 rounded">hola.js</code></li>
                        </ol>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">🤖 Paso 2: Usar la IA</h3>
                        <p className="text-sm text-gray-700 mb-2">Escribe este comentario en tu archivo:</p>
                        <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              // Crea una función que salude al usuario por su nombre
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            Presiona <kbd className="bg-gray-200 px-2 py-1 rounded">Enter</kbd> y espera las sugerencias de la IA
                        </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">▶️ Paso 3: Ejecutar el código</h3>
                        <p className="text-sm text-gray-700 mb-2">Abre la terminal integrada (Ctrl + `) y ejecuta:</p>
                        <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                            node hola.js
                        </div>
                    </div>
                </div>
            </div>

            {/* Ejercicios Prácticos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <Terminal size={24} />
                    Ejercicios Prácticos
                </h2>

                <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-900 mb-2">Ejercicio 1: Función de Saludo</h3>
                        <p className="text-sm text-gray-700 mb-2">
                            Crea una función que reciba un nombre y retorne un saludo personalizado
                        </p>
                        <div className="bg-white border border-blue-200 rounded p-2 text-xs font-mono">
                            Prompt: "Crea una función saludar() que reciba un nombre y retorne un mensaje de bienvenida"
                        </div>
                    </div>

                    <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-green-900 mb-2">Ejercicio 2: Calculadora Básica</h3>
                        <p className="text-sm text-gray-700 mb-2">
                            Crea funciones para sumar, restar, multiplicar y dividir dos números
                        </p>
                        <div className="bg-white border border-green-200 rounded p-2 text-xs font-mono">
                            Prompt: "Crea 4 funciones: sumar, restar, multiplicar y dividir. Incluye validación para división por cero"
                        </div>
                    </div>

                    <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-orange-900 mb-2">Ejercicio 3: Manipulación de Texto</h3>
                        <p className="text-sm text-gray-700 mb-2">
                            Crea una función que analice un texto y retorne estadísticas
                        </p>
                        <div className="bg-white border border-orange-200 rounded p-2 text-xs font-mono">
                            Prompt: "Función que cuente caracteres, palabras, y convierta a mayúsculas/minúsculas"
                        </div>
                    </div>

                    <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-purple-900 mb-2">Ejercicio 4: Números Pares</h3>
                        <p className="text-sm text-gray-700 mb-2">
                            Crea una función que determine si un número es par o impar
                        </p>
                        <div className="bg-white border border-purple-200 rounded p-2 text-xs font-mono">
                            Prompt: "Función esPar() que retorne true si es par, false si es impar, con validación"
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <a
                        href="/ejercicios/dia1/dia1-ejercicios.js"
                        download
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Download size={18} />
                        Descargar Ejercicios
                    </a>
                    <a
                        href="/soluciones/dia1/dia1-soluciones.js"
                        download
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        <CheckCircle size={18} />
                        Ver Soluciones
                    </a>
                </div>
            </div>

            {/* Tips para usar la IA */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
                    <Zap size={24} />
                    Tips para Usar la IA Efectivamente
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">✍️ Escribe Comentarios Claros</h3>
                        <p className="text-sm text-gray-600">
                            Describe lo que quieres hacer antes de escribir código. La IA entiende mejor con contexto.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">🔍 Pide Explicaciones</h3>
                        <p className="text-sm text-gray-600">
                            Si no entiendes algo, pregunta: "Explica este código línea por línea"
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">🧪 Experimenta</h3>
                        <p className="text-sm text-gray-600">
                            Prueba diferentes prompts. Si el resultado no es el esperado, reformula tu pregunta.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">📚 Aprende del Código</h3>
                        <p className="text-sm text-gray-600">
                            No solo copies. Lee y entiende cada línea. Modifica y observa qué cambia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Resumen */}
            <div className="bg-indigo-900 text-white rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-3">📌 Resumen del Día 1</h2>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h3 className="font-bold mb-2 text-indigo-200">Aprendiste:</h3>
                        <ul className="space-y-1">
                            <li>✓ Qué es la IA en programación</li>
                            <li>✓ Cómo instalar herramientas necesarias</li>
                            <li>✓ Tu primer programa con IA</li>
                            <li>✓ Funciones básicas en JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-indigo-200">Próximo paso:</h3>
                        <p>En el Día 2 aprenderás sobre estructuras de control (if, while, for) y crearás programas más complejos como una calculadora completa y un conversor de unidades.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dia1;
