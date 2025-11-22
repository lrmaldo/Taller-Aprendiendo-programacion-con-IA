import React from 'react';
import { ArrowRight, CheckCircle, Terminal, Cpu, Users } from 'lucide-react';

const Inicio = ({ onChangeView, level }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm">
                    Nivel Seleccionado: {level === 'basico' ? '1º Semestre (Fundamentos)' : '3º Semestre (POO)'}
                </div>
                <h1 className="text-5xl font-bold text-indigo-900 mb-6">
                    Aprendizaje de Programación con <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Inteligencia Artificial</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Un taller intensivo de 4 días para dominar {level === 'basico' ? 'las bases de la programación' : 'la Programación Orientada a Objetos'} utilizando GitHub Copilot como tu tutor personal.
                </p>
                <button
                    onClick={() => onChangeView('dia1')}
                    className="mt-8 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                >
                    Comenzar Taller <ArrowRight />
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-indigo-500">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Cpu className="text-indigo-500" />
                        Objetivo del Taller
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Desarrollarás {level === 'basico' ? 'las bases de la lógica' : 'una arquitectura de software sólida'} utilizando herramientas de IA como soporte. No solo aprenderás a escribir código, sino a colaborar con una IA para ser más eficiente.
                    </p>
                    <ul className="space-y-2">
                        {[
                            level === 'basico' ? 'Comprender conceptos fundamentales' : 'Dominar Clases y Objetos',
                            'Utilizar IA para generar y mejorar código',
                            'Desarrollar programas funcionales',
                            'Construir un proyecto final guiado'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle size={16} className="text-green-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-500">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Users className="text-purple-500" />
                        Para quién es este taller
                    </h2>
                    <p className="text-gray-600">
                        {level === 'basico'
                            ? 'Diseñado para principiantes entusiastas que quieren entrar al mundo de la programación aprovechando las herramientas más modernas desde el día uno.'
                            : 'Diseñado para estudiantes con conocimientos previos que quieren dar el salto a la POO y arquitecturas modernas asistidas por IA.'}
                    </p>
                    <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-bold text-purple-900 mb-2">Requisitos Previos:</h3>
                        <ul className="text-sm text-purple-800 space-y-1">
                            <li>• Computadora personal</li>
                            <li>• VS Code instalado</li>
                            <li>• Acceso a GitHub Copilot (o alternativa)</li>
                            {level === 'avanzado' && <li>• Conocimientos básicos de JS</li>}
                            <li>• ¡Muchas ganas de aprender!</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Tu Ruta de Aprendizaje</h2>
            <div className="grid md:grid-cols-4 gap-4">
                {[
                    { dia: 'Día 1', titulo: 'Intro a IA & Setup', desc: 'Configuración y primeros pasos con Copilot.' },
                    { dia: 'Día 2', titulo: 'Lógica & Control', desc: level === 'basico' ? 'Condicionales, bucles y pensamiento lógico.' : 'Lógica encapsulada y estructuras de datos.' },
                    { dia: 'Día 3', titulo: level === 'basico' ? 'Funciones' : 'POO', desc: level === 'basico' ? 'Modularización y buenas prácticas.' : 'Clases, Herencia y Polimorfismo.' },
                    { dia: 'Día 4', titulo: 'Proyecto Final', desc: 'Creación de un Gestor de Tareas completo.' }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all border border-gray-100">
                        <div className="text-indigo-600 font-bold mb-2">{item.dia}</div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.titulo}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inicio;
