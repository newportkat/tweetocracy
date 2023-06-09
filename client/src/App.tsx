import React, { useState } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import VignetteOverlay from "./components/VignetteOverlay/VignetteOverlay"
import Error from "./pages/Error/Error"
import Faqs from "./pages/Faqs/Faqs"
import Home from "./pages/Home/Home"
import Parties from "./pages/Parties/Parties"
import Party from "./pages/Party/Party"
import Policies from "./pages/Policies/Policies"
import Policy from "./pages/Policy/Policy"
import Politician from "./pages/Politician/Politician"

const Layout = () => {
    const [showMobileMenu, setShowMobileMenu] = useState< boolean >(false)

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }
    const toggleMenu = () => {
        setShowMobileMenu((prev) => !prev)
        scrollUp()
    }

    //disable scrolling
    if (showMobileMenu) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "visible"
    }

    return (
        <div className="relative flex min-h-screen flex-col">
            <Navbar showMobileMenu={showMobileMenu} toggleMenu={toggleMenu} />
            <div className={`relative flex flex-grow flex-col justify-center`}>
                {showMobileMenu && (
                    <div className="absolute inset-0 z-10 bg-black opacity-80"></div>
                )}
                <Outlet />
                <Footer />
            </div>
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
