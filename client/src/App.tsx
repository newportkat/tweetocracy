import React from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import VignetteOverlay from "./components/VignetteOverlay"
import About from "./pages/About"
import Error from "./pages/Error"
import Faqs from "./pages/Faqs"
import Home from "./pages/Home"
import Parties from "./pages/Parties"
import Party from "./pages/Party"
import Policies from "./pages/Policies"
import Policy from "./pages/Policy"
import Politician from "./pages/Politician"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/parties",
                element: <Parties />,
            },
            {
                path: "/parties/:id",
                element: <Party />,
            },
            {
                path: "/politicians/:id",
                element: <Politician />,
            },
            {
                path: "/policies",
                element: <Policies />,
            },
            {
                path: "/policies/:id",
                element: <Policy />,
            },
            {
                path: "/faqs",
                element: <Faqs />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
])

const App = () => {
    return (
        <div className="relative bg-blue-50">
            <RouterProvider router={router} />
            <VignetteOverlay />
        </div>
    )
}

export default App
