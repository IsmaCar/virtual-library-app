import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            {/*Barra de navegación*/}
            <Navbar />

            {/*Cuerpo de la página*/}
            <main className="flex-1 flex flex-col items-center justify-center p-6">
                <Outlet />
            </main>

            {/*Pie de página*/}
            <footer className="bg-gray-700 text-white text-center py-4 mt-auto shadow-inner">
                <p>Creado por Ismael Carballo</p>
            </footer>
        </div>
    )
}

export default RootLayout