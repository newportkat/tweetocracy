import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { twitterData } from "../data/twitterData"

const Politician = () => {
    const { id } = useParams()
    const [tweets, setTweets] = useState([])
    const [politician, setPolitician] = useState(null)

    const fetchPolitician = async () => {
        try {
            const response = await axios.get(
                `https://theyvoteforyou.org.au/api/v1/people/${id}.json?key=w2GqY%2FTxcwhegS1F4Iin`
            )
            setPolitician(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const politician = twitterData.find((p) => p.id === Number(id))
                if (!politician || !politician.twitterId) {
                    throw new Error(
                        "Politician not found or does not have a Twitter ID"
                    )
                }
                const response = await axios.get(
                    `http://localhost:3001/api/tweets/${politician.twitterId}`
                )
                setTweets(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTweets()
    }, [id])

    useEffect(() => {
        fetchPolitician()
    }, [id])

    return (
        <div>
            {politician ? (
                <div>
                    <h1>{politician.latest_member.name.first}</h1>
                    <div>
                        <h2>Latest tweets:</h2>
                        {tweets.length > 0 ? (
                            <ul>
                                {tweets.map((tweet) => (
                                    <li key={tweet.id}>
                                        <a
                                            href={`https://twitter.com/i/web/status/${tweet.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {tweet.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Loading tweets...</p>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Politician
