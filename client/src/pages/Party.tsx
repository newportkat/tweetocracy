import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PoliticianCard from "../components/PoliticianCard"
import { alpData } from "../data/alpData"
import { coalitionData } from "../data/coalitionData"

const Party = () => {
    const { id } = useParams()
    const [party, setParty] = useState("")
    const [politicians, setPoliticians] = useState([])

    useEffect(() => {
        if (id === "alp") {
            setPoliticians(alpData)
            setParty("ALP")
        } else if (id === "coalition") {
            setPoliticians(coalitionData)
            setParty("Coalition")
        }
    }, [id])

    return (
        <main>
            <h2>
                {party} {id === "alp" ? "Cabinet" : "Shadow"} Ministers:
            </h2>
            <ul>
                {politicians.map((politician) => (
                    <li key={politician.id}>
                        <Link to={`/politicians/${politician.id}`}>
                            <PoliticianCard
                                name={`${politician.latest_member.name.first} ${politician.latest_member.name.last}`}
                                electorate={politician.latest_member.electorate}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Party
