import React from "react"

const PoliticianCard = ({ name, electorate }) => {
    return (
        <div className="flex w-72 flex-col gap-2 rounded bg-white p-4 shadow-xl">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-xs">Electorate: {electorate}</p>
        </div>
    )
}

export default PoliticianCard
