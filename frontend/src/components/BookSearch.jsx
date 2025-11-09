import { useState } from 'react'
import { getCoverUrl, formatAuthors, formatYear } from '../utils/bookUtils'
import { Link } from 'react-router-dom'
const API_BOOKS_URL = import.meta.env.VITE_OPENLIBRARY_URL

function BookSearch() {
    /* Estados:
    1.Guardar busqueda form
    2. Guardar lista de libros que coincidan con la busqueda
    3. Estado para cambiar de página*/
    const [formData, setFormData] = useState({ query: "" })
    const [books, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    
    // Lógica para pasar de página
    const booksPerPage = 9
    const startIndex = (currentPage - 1) * booksPerPage
    const endIndex = startIndex + booksPerPage

    const booksToShow = books.slice(startIndex, endIndex)

    const totalPages = Math.ceil(books.length / booksPerPage)

    // Guardado de palabras del form
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // Busqueda de los libros
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_BOOKS_URL}/search.json?q=${formData.query}`)
            if (!response.ok)
                throw new Error('Error al encontrar el libro o autor')

            const data = await response.json()
            setBooks(data.docs)
            setCurrentPage(1)
        } catch (err) {
            console.error('Error en try/catch:', err)
        }
    }
    return (
        <>
            {/*Formulario para buscar libros*/}
            <section>
                <form onSubmit={handleSubmit} className="flex gap-2 mb-8 justify-center">
                    <input
                        name="query"
                        onChange={handleChange}
                        value={formData.query}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 w-64 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 focus:border-blue-500 shadow-sm"
                        placeholder="Buscar libro o autor..."
                    />
                    <button
                        type='submit'
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg 
                                   hover:bg-blue-700 focus:outline-none 
                                   focus:ring-2 focus:ring-blue-500 
                                   focus:ring-offset-2 transition duration-200 shadow-sm"
                    >
                        Buscar
                    </button>
                </form>
            </section>
            {/*Resultado (tarjetas), del buscador de libros*/}
            <section>
                {booksToShow.length > 0 ? (
                    <>
                        <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                            {booksToShow.map(book => (
                                <div key={book.key}
                                    className="bg-white shadow p-4 flex flex-col items-center mb-5 ml-5 mr-5">
                                    <img
                                        src={getCoverUrl(book.cover_i)}
                                        alt={book.title}
                                        className="mb-2 w-32 h-48 object-cover rounded"
                                    />
                                    <h2 className='text-lg font-bold mb-2'>{book.title}</h2>
                                    <p className='text-gray-700 mb-1'>
                                        Autor: {formatAuthors(book.author_name)}
                                    </p>
                                    <p className='text-gray-500 mb-1'>
                                        Año: {formatYear(book.first_publish_year)}
                                    </p>
                                    <Link to={`/book/${book.key.split('/').pop()}`}>
                                        <p>
                                        Vista detallada
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </article>
                        {/*Botones de paginación*/}
                        <div className="flex justify-center mt-4 gap-2">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </>
                ) : null}
            </section>
        </>
    )
}

export default BookSearch