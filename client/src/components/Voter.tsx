// Voter.js
import React from "react"

const Voter = ({ name, party, vote }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Party: {party}</p>
            <p>Voted: {vote ? "Yes" : "No"}</p>
        </div>
    )
}

export default Voter
