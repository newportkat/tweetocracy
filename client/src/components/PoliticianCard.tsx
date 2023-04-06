import React from "react"

const PoliticianCard = ({ name, electorate }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Electorate: {electorate}</p>
        </div>
    )
}

export default PoliticianCard
