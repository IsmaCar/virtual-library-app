import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="bg-neutral-800 flex justify-between items-center p-4 shadow-xl">
            {/* Logo de la aplicación */}
            <section className='ml-3'>
                <Link to="/">
                    <img src="/imgs/logo.png" alt="library app" className="h-12 ml-5" />
                    <p className='text-white font-bold text-size '>Library App</p>
                </Link>
            </section>
        </nav>
    )
}

export default Navbar