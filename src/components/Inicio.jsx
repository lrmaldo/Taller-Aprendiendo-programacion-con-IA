import React from 'react';
import { Rocket, Download, Code2, Terminal, Lightbulb, CheckCircle2, BookOpen } from 'lucide-react';

const Inicio = () => {
    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
                <h1 className="text-4xl font-bold mb-4">
                    🤖 Taller: Aprendizaje de Programación con IA
                </h1>
                <p className="text-xl mb-2">
                    Aprende a programar con el poder de la Inteligencia Artificial
                </p>
                <p className="text-indigo-100">
                    GitHub Copilot y herramientas gratuitas como tu tutor personal
                </p>
            </div>

            {/* Objetivos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <Rocket size={28} />
                    Objetivos del Taller
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                            <h3 className="font-bold text-gray-900">Fundamentos de Programación</h3>
                            <p className="text-sm text-gray-600">Comprender conceptos básicos de lógica y estructuras</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                            <h3 className="font-bold text-gray-900">IA como Asistente</h3>
                            <p className="text-sm text-gray-600">Usar IA para generar, mejorar y documentar código</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                            <h3 className="font-bold text-gray-900">Programas Funcionales</h3>
                            <p className="text-sm text-gray-600">Desarrollar aplicaciones reales desde cero</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                            <h3 className="font-bold text-gray-900">Buenas Prácticas</h3>
                            <p className="text-sm text-gray-600">Construir proyectos con código limpio y documentado</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cronograma */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                    <BookOpen size={28} />
                    Cronograma de 4 Días
                </h2>

                <div className="space-y-4">
                    {/* Día 1 */}
                    <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-sm">DÍA 1</span>
                            <h3 className="font-bold text-blue-900">Introducción a la IA en Programación</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• ¿Qué es la IA y cómo ayuda a programar?</li>
                            <li>• Instalación de VS Code, Git y asistentes de IA</li>
                            <li>• Primer programa: "Hola Mundo" con IA</li>
                            <li>• Ejercicios: Calculadora básica y manipulación de texto</li>
                        </ul>
                    </div>

                    {/* Día 2 */}
                    <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">DÍA 2</span>
                            <h3 className="font-bold text-green-900">Lógica de Programación Asistida por IA</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Estructuras de control: if, while, for</li>
                            <li>• Proyecto: Calculadora completa</li>
                            <li>• Proyecto: Conversor de unidades</li>
                            <li>• Desafío en parejas: Menú interactivo</li>
                        </ul>
                    </div>

                    {/* Día 3 */}
                    <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded-full text-sm">DÍA 3</span>
                            <h3 className="font-bold text-orange-900">Funciones y Organización del Código</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• ¿Qué son las funciones y por qué usarlas?</li>
                            <li>• Proyecto: Verificador de palíndromos</li>
                            <li>• Proyecto: Calculadora de áreas y volúmenes</li>
                            <li>• Buenas prácticas con IA</li>
                        </ul>
                    </div>

                    {/* Día 4 */}
                    <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded-full text-sm">DÍA 4</span>
                            <h3 className="font-bold text-purple-900">Proyecto Final</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Gestor de tareas en consola</li>
                            <li>• Funcionalidades: agregar, listar, eliminar, completar</li>
                            <li>• Documentación con IA</li>
                            <li>• Presentación de proyectos</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Requisitos */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6">
                    <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                        <Terminal size={24} />
                        Requisitos de Software
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                        <li className="flex items-center gap-2">
                            <Code2 size={16} className="text-yellow-600" />
                            Visual Studio Code
                        </li>
                        <li className="flex items-center gap-2">
                            <Code2 size={16} className="text-yellow-600" />
                            Git
                        </li>
                        <li className="flex items-center gap-2">
                            <Code2 size={16} className="text-yellow-600" />
                            Node.js (para ejecutar JavaScript)
                        </li>
                        <li className="flex items-center gap-2">
                            <Code2 size={16} className="text-yellow-600" />
                            GitHub Copilot o alternativa gratuita
                        </li>
                    </ul>
                    <a
                        href="/GUIA_INSTALACION.md"
                        target="_blank"
                        className="mt-4 inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                        <Download size={18} />
                        Ver Guía de Instalación
                    </a>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <Lightbulb size={24} />
                        Requisitos Previos
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                        <li>✅ Computadora (Windows, macOS o Linux)</li>
                        <li>✅ Conexión a Internet</li>
                        <li>✅ Ganas de aprender</li>
                        <li>✅ <strong>NO</strong> necesitas experiencia previa en programación</li>
                    </ul>
                    <div className="mt-4 bg-blue-100 border border-blue-300 rounded p-3 text-sm">
                        <strong className="text-blue-900">💡 Nota:</strong>
                        <p className="text-blue-800 mt-1">
                            Este taller está diseñado para principiantes absolutos. ¡La IA será tu guía!
                        </p>
                    </div>
                </div>
            </div>

            {/* Cómo usar esta plataforma */}
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-300 rounded-xl p-6">
                <h3 className="font-bold text-indigo-900 mb-4 text-xl">📚 Cómo Usar Esta Plataforma</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                        <div className="text-2xl mb-2">1️⃣</div>
                        <h4 className="font-bold text-gray-900 mb-1">Navega por Días</h4>
                        <p className="text-sm text-gray-600">Usa el menú superior para acceder al contenido de cada día</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <div className="text-2xl mb-2">2️⃣</div>
                        <h4 className="font-bold text-gray-900 mb-1">Descarga Ejercicios</h4>
                        <p className="text-sm text-gray-600">Cada día tiene ejercicios descargables en JavaScript</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <div className="text-2xl mb-2">3️⃣</div>
                        <h4 className="font-bold text-gray-900 mb-1">Practica con IA</h4>
                        <p className="text-sm text-gray-600">Usa los prompts sugeridos con tu asistente de IA</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-3">¿Listo para comenzar?</h3>
                <p className="mb-4">Empieza por instalar las herramientas necesarias</p>
                <a
                    href="/GUIA_INSTALACION.md"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
                >
                    <Download size={20} />
                    Descargar Guía de Instalación
                </a>
            </div>
        </div>
    );
};

export default Inicio;
