import React from "react"
import { IVoterCardProps } from "./VoterCard.types"

const VoterCard: React.FC<IVoterCardProps> = ({ name, party, vote }) => {
    return (
        <div className="flex w-72 flex-col gap-2 rounded bg-white p-4 shadow-xl">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-xs">{party}</p>
            <p
                className={`${
                    vote ? "bg-green-600" : "bg-red-600"
                } p-2 text-center text-xl font-extrabold tracking-wide text-white`}
            >
                {vote ? "YES" : "NO"}
            </p>
        </div>
    )
}

export default VoterCard
