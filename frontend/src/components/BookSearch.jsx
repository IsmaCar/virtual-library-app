import { useState } from 'react'
import { getCoverUrl, formatAuthors, formatYear } from '../utils/bookUtils'
const API_BOOKS_URL = import.meta.env.VITE_OPENLIBRARY_URL

function BookSearch() {
    const [formData, setFormData] = useState({ query: "" })
    const [books, setBooks] = useState([])

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_BOOKS_URL}?q=${formData.query}`)
            if (!response.ok)
                throw new Error('Error al encontrar el libro o autor')

            const data = await response.json()
            setBooks(data.docs)

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
                        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        placeholder="Buscar libro o autor..."
                    />
                    <button
                        type='submit'
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-sm"
                    >
                        Buscar
                    </button>
                </form>
            </section>
            {/*Resultado (tarjetas), del buscador de libros*/}
            <section>
                {books.length > 0 ? (
                    <article>
                        {books.map(book => (
                            <div key={book.key}
                                className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
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
                            </div>
                        ))}
                    </article>
                ) : null}
            </section>
        </>
    )
}

export default BookSearch