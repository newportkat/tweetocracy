import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Tweetocracy</Link>
                </li>
                <li>
                    <Link to="/parties">Parties</Link>
                </li>
                <li>
                    <Link to="/policies">Policies</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
