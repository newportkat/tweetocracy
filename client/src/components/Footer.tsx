import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-6 bg-gray-800 p-6 text-center text-white">
            <p className="font-medium border-b-2 border-white">Stay informed, stay empowered.</p>
            <ul className="flex items-end gap-10">
                <li className="">
                    <Link to="/">Home</Link>
                </li>
                <li className="">
                    <Link to="/parties">Parties</Link>
                </li>
                <li className="">
                    <Link to="/policies">Policies</Link>
                </li>
                <li className="">
                    <Link to="/faqs">FAQs</Link>
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
