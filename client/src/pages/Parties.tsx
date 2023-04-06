import React from "react"
import { Link } from "react-router-dom"

const Parties = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/parties/alp">Labor Party</Link>
                </li>
                <li>
                    <Link to="/parties/coalition">Coalition</Link>
                </li>
            </ul>
        </div>
    )
}

export default Parties
