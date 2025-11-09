import React from 'react'
import { Suspense } from 'react'
import BookDetail from '../components/BookDetail'

function BookDetailPage() {
  return (
    <Suspense fallback={'Cargando....'}>
      <BookDetail/>
    </Suspense>
  )
}

export default BookDetailPage