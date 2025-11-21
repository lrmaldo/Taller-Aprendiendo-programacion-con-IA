import React, { useState } from 'react';
import { Code, Lightbulb, CheckCircle, XCircle, BookOpen, Zap, MessageSquare, FileCode } from 'lucide-react';

const InfografiaPrompts = () => {
    const [activeTab, setActiveTab] = useState('anatomia');

    const tabs = [
        { id: 'anatomia', label: 'Anatomía del Prompt', icon: BookOpen },
        { id: 'ejemplos', label: 'Buenos vs Malos', icon: MessageSquare },
        { id: 'ejercicios', label: 'Ejercicios Prácticos', icon: FileCode },
        { id: 'tips', label: 'Tips Avanzados', icon: Zap }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-indigo-900 mb-2">
                        🤖 Guía de Prompts para Programación con IA
                    </h1>
                    <p className="text-gray-600">Aprende a comunicarte efectivamente con tu asistente de código</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-lg p-2 shadow-md">
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${activeTab === tab.id
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <Icon size={18} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-xl p-8">
                    {activeTab === 'anatomia' && <AnatomiaPrompt />}
                    {activeTab === 'ejemplos' && <EjemplosComparacion />}
                    {activeTab === 'ejercicios' && <EjerciciosPracticos />}
                    {activeTab === 'tips' && <TipsAvanzados />}
                </div>
            </div>
        </div>
    );
};

const AnatomiaPrompt = () => (
    <div>
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
            <Code size={32} />
            Anatomía de un Buen Prompt
        </h2>

        <div className="space-y-6">
            {/* Formula */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">📐 Fórmula del Prompt Perfecto</h3>
                <div className="text-xl font-mono bg-white/20 rounded p-4">
                    <strong>Contexto</strong> + <strong>Acción</strong> + <strong>Detalles</strong> + <strong>Formato</strong>
                </div>
            </div>

            {/* Componentes */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                    <h4 className="font-bold text-blue-900 mb-2">1️⃣ CONTEXTO</h4>
                    <p className="text-sm text-gray-700 mb-2">¿Qué estás intentando hacer?</p>
                    <div className="bg-white p-2 rounded text-xs font-mono">
                        "Estoy creando una calculadora..."<br />
                        "Necesito un programa que..."
                    </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                    <h4 className="font-bold text-green-900 mb-2">2️⃣ ACCIÓN</h4>
                    <p className="text-sm text-gray-700 mb-2">¿Qué quieres que haga la IA?</p>
                    <div className="bg-white p-2 rounded text-xs font-mono">
                        "Crea una función que..."<br />
                        "Genera código para..."
                    </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                    <h4 className="font-bold text-orange-900 mb-2">3️⃣ DETALLES</h4>
                    <p className="text-sm text-gray-700 mb-2">Especificaciones importantes</p>
                    <div className="bg-white p-2 rounded text-xs font-mono">
                        "que sume dos números"<br />
                        "con validación de errores"<br />
                        "usando un bucle while"
                    </div>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
                    <h4 className="font-bold text-purple-900 mb-2">4️⃣ FORMATO</h4>
                    <p className="text-sm text-gray-700 mb-2">¿Cómo lo quieres?</p>
                    <div className="bg-white p-2 rounded text-xs font-mono">
                        "en JavaScript"<br />
                        "con comentarios"<br />
                        "usando arrow functions"
                    </div>
                </div>
            </div>

            {/* Ejemplo Completo */}
            <div className="bg-gray-800 text-green-400 rounded-lg p-6">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Lightbulb className="text-yellow-400" />
                    Ejemplo Completo:
                </h4>
                <div className="space-y-2 text-sm font-mono">
                    <div><span className="text-blue-400">[CONTEXTO]</span> Estoy creando un conversor de temperaturas.</div>
                    <div><span className="text-green-400">[ACCIÓN]</span> Crea una función</div>
                    <div><span className="text-orange-400">[DETALLES]</span> que convierta de Celsius a Fahrenheit y Kelvin,</div>
                    <div><span className="text-purple-400">[FORMATO]</span> en JavaScript con comentarios explicativos.</div>
                </div>
            </div>
        </div>
    </div>
);

const EjemplosComparacion = () => {
    const ejemplos = [
        {
            categoria: "Funciones Básicas",
            malo: "haz una función",
            bueno: "Crea una función en JavaScript llamada 'esPar' que reciba un número y retorne true si es par o false si es impar. Incluye validación para verificar que el parámetro sea un número.",
            razon: "El prompt bueno especifica: nombre, lenguaje, parámetros, retorno esperado y validaciones"
        },
        {
            categoria: "Bucles",
            malo: "un for que cuente",
            bueno: "Escribe un bucle for en JavaScript que cuente del 1 al 10 e imprima cada número en la consola. Añade comentarios explicando cada parte del bucle.",
            razon: "Define el rango exacto, la acción a realizar y solicita documentación"
        },
        {
            categoria: "Estructuras de Datos",
            malo: "array de usuarios",
            bueno: "Crea un array de objetos en JavaScript que contenga 3 usuarios. Cada usuario debe tener propiedades: nombre (string), edad (number) y email (string). Luego escribe un código que imprima solo los nombres.",
            razon: "Especifica la estructura exacta, tipos de datos y la operación posterior"
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                ✅ Buenos vs ❌ Malos Prompts
            </h2>

            <div className="space-y-6">
                {ejemplos.map((ej, idx) => (
                    <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 px-4 py-2 font-bold text-gray-800">
                            {ej.categoria}
                        </div>

                        <div className="grid md:grid-cols-2 divide-x">
                            <div className="p-4 bg-red-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <XCircle className="text-red-600" size={20} />
                                    <span className="font-bold text-red-900">Prompt Malo</span>
                                </div>
                                <div className="bg-white border-2 border-red-300 rounded p-3 text-sm mb-3">
                                    "{ej.malo}"
                                </div>
                                <p className="text-xs text-red-800">❌ Muy vago, sin detalles</p>
                            </div>

                            <div className="p-4 bg-green-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="text-green-600" size={20} />
                                    <span className="font-bold text-green-900">Prompt Bueno</span>
                                </div>
                                <div className="bg-white border-2 border-green-300 rounded p-3 text-sm mb-3">
                                    "{ej.bueno}"
                                </div>
                                <p className="text-xs text-green-800">✅ {ej.razon}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tips Rápidos */}
            <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-4 rounded">
                <h4 className="font-bold text-yellow-900 mb-2">💡 Recuerda:</h4>
                <ul className="text-sm space-y-1 text-gray-800">
                    <li>• Más específico = Mejor resultado</li>
                    <li>• Pide comentarios en el código para aprender</li>
                    <li>• Menciona el lenguaje de programación</li>
                    <li>• Describe el comportamiento esperado</li>
                </ul>
            </div>
        </div>
    );
};

const EjerciciosPracticos = () => {
    const ejercicios = [
        {
            nivel: "Principiante",
            color: "green",
            tareas: [
                "Escribe un prompt para crear una función que salude por nombre",
                "Pide código que calcule el área de un círculo dado su radio",
                "Solicita un programa que verifique si un número es positivo, negativo o cero"
            ]
        },
        {
            nivel: "Intermedio",
            color: "blue",
            tareas: [
                "Crea un prompt para una calculadora con menú de opciones",
                "Solicita una función que encuentre el número mayor en un array",
                "Pide código que invierta una cadena de texto sin usar .reverse()"
            ]
        },
        {
            nivel: "Avanzado",
            color: "purple",
            tareas: [
                "Diseña un prompt para un gestor de tareas con agregar, listar y eliminar",
                "Solicita una función recursiva para calcular factorial",
                "Pide código que ordene un array de objetos por una propiedad específica"
            ]
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                🎯 Ejercicios para Practicar
            </h2>

            <div className="space-y-6">
                {ejercicios.map((nivel, idx) => (
                    <div key={idx} className={`border-2 border-${nivel.color}-300 rounded-lg overflow-hidden`}>
                        <div className={`bg-${nivel.color}-500 text-white px-4 py-3 font-bold`}>
                            Nivel {nivel.nivel}
                        </div>
                        <div className="p-4 space-y-3">
                            {nivel.tareas.map((tarea, tidx) => (
                                <div key={tidx} className="flex gap-3 items-start">
                                    <span className={`bg-${nivel.color}-100 text-${nivel.color}-800 font-bold px-3 py-1 rounded-full text-sm`}>
                                        {tidx + 1}
                                    </span>
                                    <p className="text-gray-700 flex-1">{tarea}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Template para practicar */}
            <div className="mt-8 bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">📝 Template para tus Prompts:</h4>
                <div className="bg-white border-2 border-gray-300 rounded p-4 font-mono text-sm space-y-2">
                    <div><span className="text-blue-600">[CONTEXTO]:</span> _________________</div>
                    <div><span className="text-green-600">[ACCIÓN]:</span> _________________</div>
                    <div><span className="text-orange-600">[DETALLES]:</span> _________________</div>
                    <div><span className="text-purple-600">[FORMATO]:</span> _________________</div>
                </div>
            </div>
        </div>
    );
};

const TipsAvanzados = () => {
    const tips = [
        {
            titulo: "Refinamiento Iterativo",
            icono: "🔄",
            descripcion: "No esperes el resultado perfecto al primer intento",
            ejemplo: "1. Prompt inicial → 2. Revisa resultado → 3. Añade especificaciones → 4. Mejora"
        },
        {
            titulo: "Pide Explicaciones",
            icono: "📚",
            descripcion: "Aprende mientras codificas",
            ejemplo: "Añade: 'Explica línea por línea qué hace cada parte del código'"
        },
        {
            titulo: "Usa Ejemplos",
            icono: "💡",
            descripcion: "Muestra a la IA lo que quieres",
            ejemplo: "Input: [1,2,3] → Output: [3,2,1]. Crea una función que haga esto"
        },
        {
            titulo: "Solicita Variaciones",
            icono: "🎨",
            descripcion: "Aprende diferentes enfoques",
            ejemplo: "'Muéstrame 3 formas diferentes de resolver este problema'"
        },
        {
            titulo: "Debugging Asistido",
            icono: "🐛",
            descripcion: "Pide ayuda con errores",
            ejemplo: "'Este código da error [pega error]. ¿Qué está mal y cómo lo arreglo?'"
        },
        {
            titulo: "Mejora de Código",
            icono: "⚡",
            descripcion: "Optimiza código existente",
            ejemplo: "'¿Cómo puedo hacer este código más eficiente? [pega código]'"
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                ⚡ Tips Avanzados
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
                {tips.map((tip, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">{tip.icono}</span>
                            <h4 className="font-bold text-indigo-900">{tip.titulo}</h4>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">{tip.descripcion}</p>
                        <div className="bg-white border border-indigo-200 rounded p-2 text-xs font-mono text-gray-600">
                            {tip.ejemplo}
                        </div>
                    </div>
                ))}
            </div>

            {/* Palabras Clave Útiles */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6">
                <h4 className="font-bold text-xl mb-4">🔑 Palabras Clave Poderosas:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Crea', 'Genera', 'Escribe', 'Implementa', 'Desarrolla', 'Explica', 'Optimiza', 'Refactoriza',
                        'Valida', 'Documenta', 'Corrige', 'Mejora'].map(palabra => (
                            <div key={palabra} className="bg-white/20 rounded px-3 py-2 text-center font-semibold">
                                {palabra}
                            </div>
                        ))}
                </div>
            </div>

            {/* Checklist Final */}
            <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
                <h4 className="font-bold text-yellow-900 mb-3">✅ Checklist antes de enviar tu Prompt:</h4>
                <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>¿Mencioné el lenguaje de programación?</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>¿Especifiqué qué debe hacer exactamente?</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>¿Incluí ejemplos o casos de uso?</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>¿Pedí comentarios/explicaciones?</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>¿Es específico y claro?</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InfografiaPrompts;
