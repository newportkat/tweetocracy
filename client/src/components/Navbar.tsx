import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="py-10 px-20 text-gray-800">
            <ul className="flex gap-20 items-center">
                <li className="mr-auto text-4xl font-mono font-bold">
                    <Link to="/">Tweetocracy</Link>
                </li>
                <li>
                    <Link to="/parties">Parties</Link>
                </li>
                <li>
                    <Link to="/policies">Policies</Link>
                </li>
                <li>
                    <Link to="/faq">FAQs</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
