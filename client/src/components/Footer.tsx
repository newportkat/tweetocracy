import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-8 bg-gray-800 p-6 text-center text-white">
            <p className="border-b-2 border-white font-medium">
                Stay informed, stay empowered.
            </p>
            <ul className="flex items-end gap-6 md:gap-10 flex-wrap justify-center">
                <li className="group relative">
                    <Link to="/">Home</Link>
                    <span className="absolute -bottom-1 left-0 h-[.125rem] w-0 bg-white transition-all group-hover:w-full"></span>
                </li>
                <li className="group relative">
                    <Link to="/parties">Parties</Link>
                    <span className="absolute -bottom-1 left-0 h-[.125rem] w-0 bg-white transition-all group-hover:w-full"></span>
                </li>
                <li className="group relative">
                    <Link to="/policies">Policies</Link>
                    <span className="absolute -bottom-1 left-0 h-[.125rem] w-0 bg-white transition-all group-hover:w-full"></span>
                </li>
                <li className="group relative">
                    <Link to="/faqs">FAQs</Link>
                    <span className="absolute -bottom-1 left-0 h-[.125rem] w-0 bg-white transition-all group-hover:w-full"></span>
                </li>
            </ul>
            <p className="text-xs">
                Coded with 🩵 by{" "}
                <a
                    href="https://github.com/newportkat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                >
                    TomKat
                </a>
            </p>
        </div>
    )
}

export default Footer
