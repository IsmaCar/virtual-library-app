export function getCoverUrl(cover_i, size = 'M') {
  return cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-${size}.jpg`
    : 'https://via.placeholder.com/128x193?text=Sin+Portada';
}

export function formatAuthors(authorArr) {
  return Array.isArray(authorArr) && authorArr.length > 0
    ? authorArr.join(', ')
    : 'Desconocido';
}

export function formatYear(year) {
  return year || 'N/A';
}

export function cleanDescription(description) {
  if (!description) return 'Sin descripción disponible'
  
  // Si es objeto, extraer el valor
  const text = typeof description === 'string' 
    ? description 
    : description?.value || 'Sin descripción disponible'
  
  // Eliminar links Markdown [texto](url)
  let cleaned = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  
  // Eliminar separadores
  cleaned = cleaned.replace(/[-]{2,}/g, '')
  
  // Eliminar referencias [1]:
  cleaned = cleaned.replace(/\[\d+\]:\s*https?:\/\/[^\s]+/g, '')
  
  // Eliminar saltos de línea múltiples
  cleaned = cleaned.replace(/\n{2,}/g, '\n\n')
  
  return cleaned.trim()
}