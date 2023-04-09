import React from "react"
import { Link } from "react-router-dom"

const Parties = () => {
    return (
        <div>
            <div>
                <Link to="/parties/alp">Labor Party</Link>
            </div>
            <h2>Words have power, especially in politics.</h2>
            <p>
                Explore the personalities and policies of the ALP and Coalition
                by examining their cabinet ministers' tweets. See how they use
                social media to communicate their message, gain insight into
                their strategies, and discover the impact they're having on the
                national conversation.
            </p>
            <div>
                <Link to="/parties/coalition">Coalition</Link>
            </div>
        </div>
    )
}

export default Parties
