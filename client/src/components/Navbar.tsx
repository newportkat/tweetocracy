import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Close from "../assets/svgFunctions/Close"
import HamburgerMenu from "../assets/svgFunctions/HamburgerMenu"

const Navbar = ({ showMobileMenu, toggleMenu }) => {
    useEffect(() => {
        console.log(showMobileMenu)
    }, [showMobileMenu])

    return (
        <nav className="relative flex items-center justify-between p-6 text-gray-800 sm:block sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-24">
            <div
                className={`${
                    showMobileMenu ? "" : `-translate-y-full`
                } absolute left-0 top-0 z-50 flex w-full flex-col items-center justify-center gap-8 bg-gray-800 p-10 text-white transition-all`}
            >
                <div onClick={toggleMenu}>
                    <Close className="h-10 w-10 cursor-pointer hover:text-gray-500" />
                </div>
                <ul className="flex flex-col items-center justify-center gap-10">
                    <li className="group relative font-medium">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="group relative font-medium">
                        <Link to="/parties">Parties</Link>
                    </li>
                    <li className="group relative font-medium">
                        <Link to="/policies">Policies</Link>
                    </li>
                    <li className="group relative font-medium">
                        <Link to="/faqs">FAQs</Link>
                    </li>
                </ul>
            </div>

            <ul className="flex items-end gap-10">
                <li className="text-3xl font-semibold sm:mr-auto sm:text-4xl">
                    <Link to="/">Tweetocracy</Link>
                </li>
                <li className="group relative hidden font-medium sm:flex">
                    <Link to="/parties">Parties</Link>
                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gray-800 transition-all group-hover:w-full"></span>
                </li>
                <li className="group relative hidden font-medium sm:flex">
                    <Link to="/policies">Policies</Link>
                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gray-800 transition-all group-hover:w-full"></span>
                </li>
                <li className="group relative hidden font-medium sm:flex">
                    <Link to="/faqs">FAQs</Link>
                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gray-800 transition-all group-hover:w-full"></span>
                </li>
            </ul>
            <div onClick={toggleMenu}>
                <HamburgerMenu className="h-10 w-10 cursor-pointer sm:hidden hover:text-gray-500" />
            </div>
        </nav>
    )
}

export default Navbar
