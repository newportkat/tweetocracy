import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PoliticianCard from "../../components/PoliticianCard/PoliticianCard"
import { alpData } from "../../data/alpData/alpData"
import { coalitionData } from "../../data/coalitionData/coalitionData"

const Party = () => {
    const { id } = useParams()
    const [party, setParty] = useState("")
    const [politicians, setPoliticians] = useState([])

    useEffect(() => {
        setParty(id === "alp" ? "ALP" : "Coalition")
        setPoliticians(id === "alp" ? alpData : coalitionData)
    }, [id])

    return (
        <main className="flex flex-col items-center">
            <h2 className="w-full bg-gray-800 p-6 text-center tracking-widest text-white">
                <span className="font-extrabold">{party}</span>{" "}
                {id === "alp" ? "Cabinet" : "Shadow"} Ministers
            </h2>
            <div className="flex flex-col items-center gap-4 p-8">
                <p className="text-center leading-relaxed">
                    Fetch the latest tweets of each party member with just one
                    click.
                </p>
                <p className="text-center leading-relaxed">
                    Analyze their tweets for{" "}
                    <Link to="/faqs" className="font-semibold">
                        engagement scores,
                    </Link>{" "}
                    <Link to="/faqs" className="font-semibold">
                        sentiment analysis,
                    </Link>{" "}
                    and{" "}
                    <Link to="/faqs" className="font-semibold">
                        frequently used words.
                    </Link>{" "}
                </p>
                <Link
                    to="/parties"
                    className="rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white hover:bg-gray-600 sm:mt-2"
                >
                    BACK TO PARTIES
                </Link>
            </div>
            <div className="mb-10 flex flex-wrap justify-center gap-6 px-8">
                {politicians.map((politician) => (
                    <div key={politician.id}>
                        <Link to={`/politicians/${politician.id}`}>
                            <PoliticianCard
                                name={`${politician.latest_member.name.first} ${politician.latest_member.name.last}`}
                                electorate={politician.latest_member.electorate}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Party
