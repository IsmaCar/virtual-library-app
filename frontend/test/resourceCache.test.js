import { describe, it, expect, beforeEach } from "vitest";
import { createResource, clearCache } from "../src/utils/resourceCache";

const mockFetcher = (key) => Promise.resolve({ data: `resultado de ${key}` })

describe('createResource', () => {
    beforeEach(() => { clearCache() })

    it('devuelve Promise cuando se llama por primera vez', () => {
        const result = createResource(mockFetcher, 'test-key 1')
        expect(result).toBeInstanceOf(Promise)
    })
    it('devuelve la misma Promise cuando se llama por segunda vez', () => {
        const result = createResource(mockFetcher, 'test-key 2')
        const result2 = createResource(mockFetcher, 'test-key 2')
        expect(result).toBe(result2)
    })
    it('devuelve diferente Promise', () => {
        const result = createResource(mockFetcher, 'test-key 1')
        const result2 = createResource(mockFetcher, 'test-key 2')
        expect(result).not.toBe(result2)
    })
})

describe('clearCache', () => {
    it('Limpiar key especifica', () => {
        // Crear  promise y guardarla
        const promise1 = createResource(mockFetcher, 'book-1')
        //Eliminar cache
        clearCache('book-1')
        //Crear otra promise con misma key
        const promise2 = createResource(mockFetcher, 'book-1')
        // Verificar que son diferentes
        expect(promise1).not.toBe(promise2)
    })
    it('Limpiar todo el cache', () => {
        //Crear 2 promesas
        const promise1 = createResource(mockFetcher, 'book-1')
        const promise2 = createResource(mockFetcher, 'book-2')
        //Eliminar todo el cache
        clearCache()
        // Crear nuevas Promises con las mismas keys
        const promise3 = createResource(mockFetcher, 'book-1')
        const promise4 = createResource(mockFetcher, 'book-2')
        //Comprobar que el cache se eliminó
        expect(promise1).not.toBe(promise3)
        expect(promise2).not.toBe(promise4)
    })
})