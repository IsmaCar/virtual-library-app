import { createResource } from "../utils/resourceCache"

const API_BOOKS_URL = import.meta.env.VITE_OPENLIBRARY_URL

// Función para devolver los detalles de los libros
async function fetchBookData(bookId) {
    const response = await fetch(`${API_BOOKS_URL}/works/${bookId}.json`)
    return response.json()
}

export function getBookResource(bookId) {
    return createResource(fetchBookData, bookId)
}

export default fetchBookData