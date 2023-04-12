import React from "react"
import { Link } from "react-router-dom"
import MobileMenu from "../assets/svgFunctions/MobileMenu"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-6 text-gray-800 sm:block sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-24">
            <ul className="flex items-end gap-10">
                <li className="text-3xl font-semibold sm:mr-auto sm:text-4xl">
                    <Link to="/">Tweetocracy</Link>
                </li>
                <li className="group relative hidden sm:flex font-medium">
                    <Link to="/parties">Parties</Link>
                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gray-800 transition-all group-hover:w-full"></span>
                </li>
                <li className="group relative hidden sm:flex font-medium">
                    <Link to="/policies">Policies</Link>
                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gray-800 transition-all group-hover:w-full"></span>
                </li>
                <li className="group relative hidden sm:flex font-medium">
                    <Link to="/faqs">FAQs</Link>
                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gray-800 transition-all group-hover:w-full"></span>
                </li>
            </ul>
            <MobileMenu className="h-10 w-10 cursor-pointer sm:hidden" />
        </nav>
    )
}

export default Navbar
