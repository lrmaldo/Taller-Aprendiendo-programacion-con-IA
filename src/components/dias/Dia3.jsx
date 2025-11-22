
import React from 'react';
import { Download, Layers, Globe, Image, Box } from 'lucide-react';

const Dia3 = ({ level }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className={`bg-gradient-to-r ${level === 'basico' ? 'from-purple-600 to-pink-700' : 'from-indigo-800 to-purple-900'} text-white p-8 rounded-xl shadow-lg`}>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Día 3: {level === 'basico' ? 'Funciones & Organización' : 'POO Avanzada & APIs'}</h1>
                        <p className={level === 'basico' ? 'text-purple-100' : 'text-indigo-200'}>
                            {level === 'basico' ? 'Modularización, Palíndromos y Matemáticas.' : 'Clases, Herencia, Polimorfismo y Fetch.'}
                        </p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Nivel {level === 'basico' ? 'Básico' : 'Avanzado'}
                    </span>
                </div>
            </header>

            {/* Sección 1: Funciones y Modularización */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Layers className="text-purple-500" />
                    1. {level === 'basico' ? 'Modularización con Funciones' : 'Abstracción y Encapsulamiento'}
                </h2>
                <div className="prose text-gray-600 mb-4">
                    <p>
                        {level === 'basico'
                            ? 'Las funciones nos ayudan a no repetir código. Agrupamos lógica en bloques reutilizables.'
                            : 'En POO, no solo agrupamos código, agrupamos estado y comportamiento. Ocultamos la complejidad interna (Encapsulamiento).'}
                    </p>
                </div>
            </section>

            {/* Sección 2: Ejercicios Prácticos */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Box className="text-indigo-500" />
                    2. Ejercicios Prácticos: {level === 'basico' ? 'Funciones' : 'Clases'}
                </h2>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-indigo-50 p-4 rounded border border-indigo-100">
                            <h3 className="font-bold text-indigo-900 mb-2">Palíndromo</h3>
                            <p className="text-sm text-gray-600 mb-2">Verificar si se lee igual al revés.</p>
                            <code className="block bg-white p-2 rounded text-xs text-gray-600 border">
                                {level === 'basico'
                                    ? 'function esPalindromo(txt) { ... }'
                                    : 'class Palindromo { static check(txt) { ... } }'}
                            </code>
                        </div>
                        <div className="bg-pink-50 p-4 rounded border border-pink-100">
                            <h3 className="font-bold text-pink-900 mb-2">Áreas y Volúmenes</h3>
                            <p className="text-sm text-gray-600 mb-2">{level === 'basico' ? 'Cálculos matemáticos.' : 'Herencia y Polimorfismo.'}</p>
                            <code className="block bg-white p-2 rounded text-xs text-gray-600 border">
                                {level === 'basico'
                                    ? 'function areaRectangulo(b, h) { return b * h; }'
                                    : 'class Rectangulo extends Figura { area() { ... } }'}
                            </code>
                        </div>
                    </div>

                    <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-3-poo/clases.js" download className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mt-2">
                        <Download size={18} /> Descargar Ejercicios {level === 'basico' ? 'de Funciones' : 'de POO'}
                    </a>
                </div>
            </section>

            {/* Sección 3: Consumo de APIs */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Globe className="text-blue-500" />
                    3. Consumo de APIs (Fetch)
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Traemos datos de internet usando <code>fetch</code>. {level === 'avanzado' && 'Podemos encapsular esto en una clase `ApiService`.'}
                    </p>
                    <div className="flex gap-4">
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-3-apis/index.html" download className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            <Download size={18} /> Descargar HTML
                        </a>
                        <a href="/Taller-Aprendiendo-programacion-con-IA/ejercicios/dia-3-apis/api.js" download className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                            <Download size={18} /> Descargar JS
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección 4: Mini-Proyecto Visual */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Image className="text-pink-500" />
                    4. Mini-Proyecto: Buscador Visual
                </h2>
                <p className="text-gray-600">
                    Crea una tarjeta de perfil que se llena con datos de una API.
                </p>
            </section>
        </div>
    );
};

export default Dia3;

