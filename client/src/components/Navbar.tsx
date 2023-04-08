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
                <li className="hidden sm:flex">
                    <Link to="/about">About</Link>
                </li>
                <li className="hidden sm:flex">
                    <Link to="/parties">Parties</Link>
                </li>
                <li className="hidden sm:flex">
                    <Link to="/policies">Policies</Link>
                </li>
                <li className="hidden sm:flex">
                    <Link to="/faqs">FAQs</Link>
                </li>
            </ul>
            <MobileMenu className="h-10 w-10 cursor-pointer sm:hidden" />
        </nav>
    )
}

export default Navbar
