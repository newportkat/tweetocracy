import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { alpData } from "../data/alpData"
import { coalitionData } from "../data/coalitionData"

const Party = () => {
    const { id } = useParams()
    const [politicians, setPoliticians] = useState([])

    useEffect(() => {
        if (id === "alp") {
            setPoliticians(alpData)
        } else if (id === "coalition") {
            setPoliticians(coalitionData)
        }
    }, [id])

    return (
        <main>
            <h2>List of {id} Ministers:</h2>
            <ul>
                {politicians.map((politician) => (
                    <li key={politician.id}>
                        <Link to={`/politicians/${politician.id}`}>
                            {politician.latest_member.name.first}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Party
