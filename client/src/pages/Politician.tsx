import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import WordCloud from "react-wordcloud"
import { stopWords } from "../data/stopWords"
import { twitterData } from "../data/twitterData"

const Politician = () => {
    const { id } = useParams()
    const [tweets, setTweets] = useState([])
    const [politician, setPolitician] = useState(null)
    const [wordCloudData, setWordCloudData] = useState([])

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

    const processTweetsForWordCloud = (tweets) => {
        const text = tweets.map((tweet) => tweet.text).join(" ")
        const words = text
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .split(/\s+/)
            .filter((word) => word.length > 3 && !stopWords.has(word))

        const wordCounts = words.reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1
            return acc
        }, {})

        const wordCloudData = Object.entries(wordCounts).map(
            ([text, value]) => ({
                text,
                value: value * 10,
            })
        )

        return wordCloudData
    }

    useEffect(() => {
        fetchPolitician()
    }, [id])

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
                setWordCloudData(processTweetsForWordCloud(response.data))
            } catch (error) {
                console.log(error)
            }
        }
        fetchTweets()
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
                    <div>
                        <h2>Word Cloud:</h2>
                        {wordCloudData.length > 0 ? (
                            <WordCloud words={wordCloudData} />
                        ) : (
                            <p>Loading word cloud...</p>
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
