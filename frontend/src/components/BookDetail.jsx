import { useParams } from 'react-router-dom'
import fetchBookData from '../services/bookServices'
import { useEffect } from 'react'
import { useState } from 'react'

function BookDetail() {
    // Extraer el id de la url
    const params = useParams()

    const [bookData, setBookData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function loadBook() {
            try {
                setLoading(true)
                const data = await fetchBookData(params.id)
                setBookData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        
        loadBook()
    }, [params.id])  // Se ejecuta cuando cambia el ID
    
    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error: {error}</div>
    if (!bookData) return null
  return (
  <div className="max-w-4xl mx-auto p-6">
    {/* Título principal */}
    <h1 className="text-4xl font-bold mb-6 text-gray-800">
      {bookData.title}
    </h1>

    {/* Sección de portadas - AQUÍ VA TU CARRUSEL */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Portadas</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Aquí renderizas las portadas con tu lógica de carrusel */}
        {/* bookData.covers es un array de IDs */}
        {/* URL de portada: https://covers.openlibrary.org/b/id/{coverId}-L.jpg */}
      </div>
    </div>

    {/* Descripción */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Descripción</h2>
      <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
        {/* bookData.description puede ser string o objeto {value: "texto"} */}
        {typeof bookData.description === 'string' 
          ? bookData.description 
          : bookData.description?.value || 'Sin descripción disponible'}
      </p>
    </div>

    {/* Grid de información */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Autor */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Autor</h3>
        <p className="text-gray-600">
          {/* bookData.authors es un array de objetos con {author: {key: "/authors/..."}} */}
          {/* Puedes necesitar hacer otro fetch para obtener nombres */}
        </p>
      </div>

      {/* Editorial */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Editorial</h3>
        <p className="text-gray-600">
          {/* bookData.publishers es un array de strings */}
          {bookData.publishers?.join(', ') || 'No disponible'}
        </p>
      </div>

      {/* Categoría */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Categorías</h3>
        <div className="flex flex-wrap gap-2">
          {/* bookData.subjects es un array de strings */}
          {bookData.subjects?.slice(0, 5).map((subject, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
            >
              {subject}
            </span>
          )) || 'No disponible'}
        </div>
      </div>
    </div>
  </div>
)
}

export default BookDetail