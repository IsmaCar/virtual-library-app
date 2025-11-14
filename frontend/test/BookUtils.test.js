import { describe, it, expect } from 'vitest'
import { getCoverUrl, formatAuthors, formatYear } from '../src/utils/bookUtils'

// Test devolver portada OpenLibrary
describe('getCoverUrl', () => {
  it('devuelve la url de la portada si cover_i existe', () => {
    expect(getCoverUrl(12345)).toBe('https://covers.openlibrary.org/b/id/12345-M.jpg')
  })
  it('devuelve el placeholder si cover_i no existe', () => {
    expect(getCoverUrl(undefined)).toBe('https://via.placeholder.com/128x193?text=Sin+Portada')
  })
})

// Test devolver nombre de autor OpenLibrary
describe('formatAuthors', () => {
  it('devuelve autores separados por coma', () => {
    expect(formatAuthors(['Autor1', 'Autor2'])).toBe('Autor1, Autor2')
  })
  it('devuelve "Desconocido" si no hay autores', () => {
    expect(formatAuthors(undefined)).toBe('Desconocido')
    expect(formatAuthors([])).toBe('Desconocido')
  })
})

// Devolver la fecha OpenLibrary
describe('formatYear', () => {
  it('devuelve el año si existe', () => {
    expect(formatYear(2001)).toBe(2001)
  })
  it('devuelve "N/A" si no hay año', () => {
    expect(formatYear(undefined)).toBe('N/A')
  })
})