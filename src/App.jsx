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
            case 'inicio': return <Inicio onChangeView={setCurrentView} />;
            case 'dia1': return <Dia1 />;
            case 'dia2': return <Dia2 />;
            case 'dia3': return <Dia3 />;
            case 'dia4': return <Dia4 />;
            case 'prompts': return <InfografiaPrompts />;
            default: return <Inicio onChangeView={setCurrentView} />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-indigo-900 text-white fixed h-full hidden md:block">
                <div className="p-6">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <Terminal className="text-yellow-400" />
                        Taller IA Dev
                    </h1>
                    <p className="text-indigo-300 text-sm mt-1">Aprende a programar con Copilot</p>
                </div>
                <nav className="mt-6">
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
            <div className="md:hidden fixed w-full bg-indigo-900 text-white z-50 p-4 flex justify-between items-center">
                <h1 className="font-bold flex items-center gap-2">
                    <Terminal className="text-yellow-400" size={20} />
                    Taller IA Dev
                </h1>
                {/* Simple mobile menu trigger could go here, for now keeping it simple */}
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-6 md:p-8 pt-20 md:pt-8">
                {renderContent()}
            </main>
        </div>
    );
}

export default App;
