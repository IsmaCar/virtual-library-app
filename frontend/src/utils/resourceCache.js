// Cache global
const cache = new Map()

/**
 * Crea o devuelve un recurso cacheado
 * @param {Function} fetcher - Función que hace el fetch 
 * @param {string} key - Identificador único 
 * @returns {Promise} La Promise del fetch
 */
export function createResource(fetcher, key) {
  // 1. Verificar si ya existe en el caché
  if (cache.has(key)) {
    return cache.get(key)  // Devolver la Promise existente
  }
  
  // 2. Si no existe, crear la Promise
  const promise = fetcher(key)
  
  // 3. Guardar en el caché
  cache.set(key, promise)
  
  // 4. Devolver la Promise
  return promise
}

/**
 * Elimina una entrada del caché o todo el caché
 * @param {string} key - ID específico a eliminar, o undefined para limpiar todo
 */
export function clearCache(key) {
  if (key) {
    cache.delete(key)  // Elimina solo ese recurso
  } else {
    cache.clear()  // Limpia todo el caché
  }
}