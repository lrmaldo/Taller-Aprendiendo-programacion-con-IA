import React from 'react';
import { Download, GitBranch, Repeat, Calculator } from 'lucide-react';

const Dia2 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="bg-gradient-to-r from-green-600 to-teal-700 text-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Día 2: Lógica de Programación</h1>
                <p className="text-green-100">Dominando el flujo de control: Condicionales y Bucles.</p>
            </header>

            {/* Sección 1: Condicionales */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <GitBranch className="text-green-500" />
                    1. Tomando Decisiones (If / Else)
                </h2>
                <div className="prose text-gray-600 mb-6">
                    <p>
                        Los programas necesitan tomar decisiones. Usamos <code>if</code> (si) y <code>else</code> (si no) para ejecutar código solo cuando se cumple una condición.
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                    <h3 className="font-bold text-gray-800 mb-2">Prompt Sugerido:</h3>
                    <code className="block bg-white p-3 rounded border border-gray-300 text-sm font-mono text-indigo-600">
            // Crea una estructura if/else que verifique si una persona es mayor de edad (18 años)
                    </code>
                </div>
            </section>

            {/* Sección 2: Bucles */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Repeat className="text-orange-500" />
                    2. Repitiendo Tareas (Bucles)
                </h2>
                <p className="text-gray-600 mb-4">
                    Cuando necesitas hacer algo muchas veces, usas bucles. Los más comunes son <code>for</code> y <code>while</code>.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded">
                        <h4 className="font-bold text-orange-900">Bucle For</h4>
                        <p className="text-sm mt-1">Ideal cuando sabes cuántas veces quieres repetir algo.</p>
                        <code className="block mt-2 text-xs bg-white p-2 rounded text-gray-600">
              // Bucle for del 1 al 10
                        </code>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-bold text-blue-900">Bucle While</h4>
                        <p className="text-sm mt-1">Se repite mientras una condición sea verdadera.</p>
                        <code className="block mt-2 text-xs bg-white p-2 rounded text-gray-600">
              // Mientras contador menor a 5
                        </code>
                    </div>
                </div>
            </section>

            {/* Sección 3: Ejercicios del Día */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Calculator className="text-indigo-500" />
                    3. Ejercicios Prácticos
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded border">
                        <div>
                            <h3 className="font-bold text-gray-800">Calculadora Básica</h3>
                            <p className="text-sm text-gray-600">Crea funciones para sumar, restar, etc.</p>
                        </div>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia2/calculadora.js" download className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center gap-1">
                            <Download size={16} /> Descargar
                        </a>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded border">
                        <div>
                            <h3 className="font-bold text-gray-800">Conversor de Unidades</h3>
                            <p className="text-sm text-gray-600">Convierte grados Celsius a Fahrenheit.</p>
                        </div>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia2/conversor.js" download className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center gap-1">
                            <Download size={16} /> Descargar
                        </a>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded border border-yellow-200">
                        <div>
                            <h3 className="font-bold text-yellow-900">🏆 Desafío: Menú Interactivo</h3>
                            <p className="text-sm text-yellow-800">Crea un menú de opciones en consola.</p>
                        </div>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia2/menu.js" download className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 font-bold text-sm flex items-center gap-1">
                            <Download size={16} /> Descargar
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dia2;
