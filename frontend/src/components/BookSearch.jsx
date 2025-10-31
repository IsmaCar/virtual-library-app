import React, { useState } from 'react'
const API_BOOKS_URL = import.meta.env.VITE_OPENLIBRARY_URL

function BookSearch() {
    const [formData, setFormData] = useState({ query: "" })
    const [books, setBooks] = useState([])

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_BOOKS_URL}?q=${formData.query}`)
            if(!response.ok)
                throw new Error ('Error al encontrar el libro o autor')

            const data = await response.json()
            setBooks(data.docs)

        } catch (err) {
            console.error('Error en try/catch:', err)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={formData.query}
                    required
                />
                <button
                    type='submit'
                >
                    Buscar
                </button>
            </form>
        </>
    )
}

export default BookSearch