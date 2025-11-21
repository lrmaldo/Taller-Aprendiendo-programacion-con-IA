import React from 'react';
import { Download, Layers, ShieldCheck, Box } from 'lucide-react';

const Dia3 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="bg-gradient-to-r from-purple-600 to-pink-700 text-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Día 3: Funciones y Organización</h1>
                <p className="text-purple-100">Escribiendo código limpio, reutilizable y modular con ayuda de la IA.</p>
            </header>

            {/* Sección 1: Funciones */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Layers className="text-purple-500" />
                    1. El Poder de las Funciones
                </h2>
                <div className="prose text-gray-600 mb-6">
                    <p>
                        Las funciones son bloques de código que realizan una tarea específica. Nos permiten no repetir código y hacer nuestros programas más ordenados.
                    </p>
                </div>

                <div className="bg-purple-50 p-4 rounded border border-purple-100 mb-4">
                    <h3 className="font-bold text-purple-900 mb-2">La IA como Generador de Funciones</h3>
                    <p className="text-sm text-purple-800 mb-2">
                        En lugar de escribir toda la lógica, describe qué quieres que entre (parámetros) y qué quieres que salga (retorno).
                    </p>
                    <code className="block bg-white p-3 rounded border border-purple-200 text-sm font-mono text-gray-600">
            // Crea una función 'calcularAreaCirculo' que reciba el radio y retorne el área
                    </code>
                </div>
            </section>

            {/* Sección 2: Buenas Prácticas */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-green-500" />
                    2. Buenas Prácticas y Documentación
                </h2>
                <p className="text-gray-600 mb-4">
                    El código se lee más veces de las que se escribe. La IA es excelente para documentar y explicar código.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border p-4 rounded hover:bg-gray-50 transition-colors">
                        <h4 className="font-bold text-gray-800">Documentación Automática</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Selecciona una función y pide a Copilot: <br />
                            <span className="font-mono text-xs bg-gray-200 px-1 rounded">"// Añade comentarios JSDoc a esta función"</span>
                        </p>
                    </div>
                    <div className="border p-4 rounded hover:bg-gray-50 transition-colors">
                        <h4 className="font-bold text-gray-800">Nombres Descriptivos</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Pide sugerencias de nombres: <br />
                            <span className="font-mono text-xs bg-gray-200 px-1 rounded">"// Renombra esta variable para que sea más clara"</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección 3: Ejercicios */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Box className="text-blue-500" />
                    3. Práctica: Modularización
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded border">
                        <div>
                            <h3 className="font-bold text-gray-800">Detector de Palíndromos</h3>
                            <p className="text-sm text-gray-600">Crea una función que detecte si una palabra se lee igual al revés.</p>
                        </div>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia3/palindromo.js" download className="text-purple-600 hover:text-purple-800 font-bold text-sm flex items-center gap-1">
                            <Download size={16} /> Descargar
                        </a>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded border">
                        <div>
                            <h3 className="font-bold text-gray-800">Cálculo de Áreas y Volúmenes</h3>
                            <p className="text-sm text-gray-600">Funciones matemáticas más complejas.</p>
                        </div>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia3/areas.js" download className="text-purple-600 hover:text-purple-800 font-bold text-sm flex items-center gap-1">
                            <Download size={16} /> Descargar
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dia3;
