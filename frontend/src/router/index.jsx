import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import RootLayout from "../layouts/RootLayout"
import BookDetailPage from "../pages/BookDetailPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <div>Page not found</div>,
        children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "book/:id",
            element: <BookDetailPage/>
        }]
    }
])

