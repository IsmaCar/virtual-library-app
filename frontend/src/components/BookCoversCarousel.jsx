import { useState } from "react"
import { getCoverUrl } from "../utils/bookUtils"

function BookCoversCarousel({ covers }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    if (!covers || covers.length === 0) {
        return <p>Sin portadas disponibles</p>
    }

    const currentCover = covers[currentIndex]
    const imageUrl = getCoverUrl(currentCover, 'L')

    function handlePrevious() {
        setCurrentIndex(Math.max(0, currentIndex - 1))
    }

    function handleNext() {
        setCurrentIndex(Math.min(covers.length - 1, currentIndex + 1))
    }

    return (
        <div className="bg-white p-6 rounded-lg">
            <section className="flex items-center justify-center gap-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &larr;
                </button>

                <img
                    src={imageUrl}
                    alt="Portada de libro"
                    className="max-h-96 shadow-lg"
                />

                <button
                    onClick={handleNext}
                    disabled={currentIndex === covers.length - 1}
                    className="bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &rarr;
                </button>
            </section>
            <p className="text-gray-600 font-semibold text-center mt-4">
                {currentIndex + 1} / {covers.length}
            </p>
        </div>
    )
}

export default BookCoversCarousel