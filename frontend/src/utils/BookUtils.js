export function getCoverUrl(cover_i) {
  return cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
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