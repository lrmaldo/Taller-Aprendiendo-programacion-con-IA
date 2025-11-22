import React, { useState } from 'react';
import { BookOpen, Terminal, Code2, Layers, Trophy, Home, Info } from 'lucide-react';
import InfografiaPrompts from './components/InfografiaPrompts';
import Inicio from './components/Inicio';
import Dia1 from './components/dias/Dia1';
import Dia2 from './components/dias/Dia2';
import Dia3 from './components/dias/Dia3';
import Dia4 from './components/dias/Dia4';


function App() {
    const [currentView, setCurrentView] = useState('inicio');
    const [level, setLevel] = useState('basico'); // 'basico' | 'avanzado'

    const menuItems = [
        { id: 'inicio', label: 'Inicio', icon: Home },
        { id: 'dia1', label: 'Día 1: Intro & Setup', icon: Terminal },
        { id: 'dia2', label: 'Día 2: Lógica & Bucles', icon: Code2 },
        { id: 'dia3', label: 'Día 3: Funciones', icon: Layers },
        { id: 'dia4', label: 'Día 4: Proyecto Final', icon: Trophy },
        { id: 'prompts', label: 'Guía de Prompts', icon: Info },
    ];

    const renderContent = () => {
        switch (currentView) {
            case 'inicio': return <Inicio onChangeView={setCurrentView} level={level} />;
            case 'dia1': return <Dia1 level={level} />;
            case 'dia2': return <Dia2 level={level} />;
            case 'dia3': return <Dia3 level={level} />;
            case 'dia4': return <Dia4 level={level} />;
            case 'prompts': return <InfografiaPrompts />;
            default: return <Inicio onChangeView={setCurrentView} level={level} />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-indigo-900 text-white fixed h-full hidden md:flex flex-col">
                <div className="p-6">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <Terminal className="text-yellow-400" />
                        Taller IA Dev
                    </h1>
                    <p className="text-indigo-300 text-sm mt-1">Aprende a programar con Copilot</p>
                </div>

                {/* Level Selector */}
                <div className="px-6 mb-4">
                    <div className="bg-indigo-800 rounded-lg p-1 flex text-xs font-medium">
                        <button
                            onClick={() => setLevel('basico')}
                            className={`flex-1 py-2 rounded-md transition-all ${level === 'basico' ? 'bg-indigo-500 text-white shadow' : 'text-indigo-300 hover:text-white'}`}
                        >
                            Básico (1º Sem)
                        </button>
                        <button
                            onClick={() => setLevel('avanzado')}
                            className={`flex-1 py-2 rounded-md transition-all ${level === 'avanzado' ? 'bg-purple-500 text-white shadow' : 'text-indigo-300 hover:text-white'}`}
                        >
                            POO (3º Sem)
                        </button>
                    </div>
                </div>

                <nav className="flex-1">
                    {menuItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setCurrentView(item.id)}
                                className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${currentView === item.id
                                    ? 'bg-indigo-800 border-r-4 border-yellow-400'
                                    : 'hover:bg-indigo-800/50 text-indigo-100'
                                    }`}
                            >
                                <Icon size={20} />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed w-full bg-indigo-900 text-white z-50 p-4 flex justify-between items-center shadow-md">
                <h1 className="font-bold flex items-center gap-2">
                    <Terminal className="text-yellow-400" size={20} />
                    Taller IA Dev
                </h1>
                <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="bg-indigo-800 text-white text-xs p-2 rounded border-none outline-none"
                >
                    <option value="basico">Básico</option>
                    <option value="avanzado">Avanzado (POO)</option>
                </select>
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-6 md:p-8 pt-20 md:pt-8 transition-all">
                <div className="max-w-5xl mx-auto">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}

export default App;
