import React from 'react';
import { Download, GitBranch, Repeat, Calculator, Database, Layout } from 'lucide-react';

const Dia2 = ({ level }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className={`bg-gradient-to-r ${level === 'basico' ? 'from-green-600 to-teal-700' : 'from-emerald-800 to-teal-900'} text-white p-8 rounded-xl shadow-lg`}>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Día 2: Lógica & Estructuras {level === 'avanzado' && '(Enfoque POO)'}</h1>
                        <p className={level === 'basico' ? 'text-green-100' : 'text-emerald-200'}>
                            {level === 'basico' ? 'Control de flujo, Arrays, Objetos y el DOM.' : 'Lógica encapsulada, Métodos y Estructuras de Datos.'}
                        </p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Nivel {level === 'basico' ? 'Básico' : 'Avanzado'}
                    </span>
                </div>
            </header>

            {/* Sección 1: Condicionales y Bucles */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <GitBranch className="text-green-500" />
                    1. Lógica de Control
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded border border-green-100">
                        <h3 className="font-bold text-green-900 mb-2">Decisiones (If/Else)</h3>
                        <p className="text-sm text-gray-600 mb-2">Ejecuta código solo si se cumple una condición.</p>
                        <code className="block bg-white p-2 rounded text-xs text-gray-600 border">
                            if (edad &gt;= 18) {'{'} ... {'}'}
                        </code>
                    </div>
                    <div className="bg-blue-50 p-4 rounded border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-2">Bucles (For/While)</h3>
                        <p className="text-sm text-gray-600 mb-2">Repite acciones automáticamente.</p>
                        <code className="block bg-white p-2 rounded text-xs text-gray-600 border">
                            for (let i=0; i&lt;10; i++) {'{'} ... {'}'}
                        </code>
                    </div>
                </div>
            </section>

            {/* Sección 2: Arrays y Objetos */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Database className="text-purple-500" />
                    2. Estructuras de Datos
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        {level === 'basico'
                            ? 'Las variables simples no son suficientes. Necesitamos organizar la información en listas y diccionarios.'
                            : 'En POO, los datos y la lógica viven juntos. Usaremos Arrays para listas y Clases para modelar entidades.'}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-purple-700 mb-2">Arrays (Listas)</h3>
                            <div className="bg-gray-900 text-gray-300 p-3 rounded font-mono text-sm">
                                <span className="text-purple-400">let</span> frutas = [<span className="text-green-400">"Manzana"</span>, <span className="text-green-400">"Pera"</span>];<br />
                                console.log(frutas[0]); <span className="text-gray-500">// Manzana</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-purple-700 mb-2">{level === 'basico' ? 'Objetos (Datos)' : 'Clases (Moldes)'}</h3>
                            <div className="bg-gray-900 text-gray-300 p-3 rounded font-mono text-sm">
                                {level === 'basico' ? (
                                    <>
                                        <span className="text-purple-400">let</span> persona = {'{'}<br />
                                        &nbsp;&nbsp;nombre: <span className="text-green-400">"Juan"</span>,<br />
                                        &nbsp;&nbsp;edad: <span className="text-orange-400">25</span><br />
                                        {'}'};
                                    </>
                                ) : (
                                    <>
                                        <span className="text-purple-400">class</span> Persona {'{'}<br />
                                        &nbsp;&nbsp;constructor(nombre) {'{'}<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.nombre = nombre;<br />
                                        &nbsp;&nbsp;{'}'}<br />
                                        {'}'}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-2-estructuras/arrays-objetos.js" download className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mt-2">
                        <Download size={18} /> Descargar Ejercicio de Estructuras
                    </a>
                </div>
            </section>

            {/* Sección 3: Intro al DOM */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Layout className="text-orange-500" />
                    3. Intro al DOM (Web)
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        El <strong>DOM</strong> es el puente entre JavaScript y el HTML. Nos permite modificar la página web en tiempo real.
                    </p>

                    <div className="bg-orange-50 p-4 rounded border border-orange-200">
                        <h3 className="font-bold text-orange-900 mb-2">Misión: Manipular la Caja</h3>
                        <p className="text-sm text-gray-700 mb-3">
                            En el ejercicio descargable, encontrarás una caja y botones. Tu misión es usar JS para cambiar su color y texto.
                        </p>
                        <div className="flex gap-2">
                            <div className="w-10 h-10 bg-blue-500 rounded animate-pulse"></div>
                            <div className="w-10 h-10 bg-red-500 rounded animate-pulse delay-75"></div>
                            <div className="w-10 h-10 bg-green-500 rounded animate-pulse delay-150"></div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-2-dom/index.html" download className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                            <Download size={18} /> Descargar HTML
                        </a>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-2-dom/dom.js" download className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                            <Download size={18} /> Descargar JS
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección 4: Ejercicios de Lógica */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Calculator className="text-indigo-500" />
                    4. Retos de Lógica: Calculadora & Conversor
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border p-4 rounded bg-gray-50">
                        <h3 className="font-bold mb-2">Calculadora Básica</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            {level === 'basico'
                                ? 'Crea funciones sumar(), restar(), etc. y úsalas en la consola.'
                                : 'Crea una clase "Calculadora" con métodos estáticos o de instancia para las operaciones.'}
                        </p>
                        <div className="bg-gray-800 text-gray-300 p-2 rounded text-xs font-mono">
                            {level === 'basico' ? 'function sumar(a, b) { return a + b; }' : 'class Calc { static sumar(a, b) { return a + b; } }'}
                        </div>
                    </div>
                    <div className="border p-4 rounded bg-gray-50">
                        <h3 className="font-bold mb-2">Conversor de Unidades</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            {level === 'basico'
                                ? 'Convierte grados Celsius a Fahrenheit usando una función simple.'
                                : 'Implementa una clase "Conversor" que maneje diferentes tipos de unidades (Longitud, Temperatura).'}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dia2;
