import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import WordCloud from "react-wordcloud"
import SentimentScore from "../components/SentimentScore"
import Tweet from "../components/Tweet"
import { stopWords } from "../data/stopWords"
import { twitterData } from "../data/twitterData"
import {
    calculateAverageSentiment,
    calculateOverallEngagement,
    fetchPolitician,
    processTweetsForWordCloud,
} from "../utils/utils"

const Politician = () => {
    const { id } = useParams()
    const [tweets, setTweets] = useState([])
    const [politician, setPolitician] = useState(null)
    const [wordCloudData, setWordCloudData] = useState([])
    const [overallEngagement, setOverallEngagement] = useState(0)
    const [averageSentiment, setAverageSentiment] = useState(0)

    useEffect(() => {
        const fetchAndSetPolitician = async () => {
            const politicianData = await fetchPolitician(id)
            setPolitician(politicianData)
        }

        fetchAndSetPolitician()
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

                const engagementScore = calculateOverallEngagement(
                    response.data
                )
                setOverallEngagement(engagementScore)

                const sentimentScore = calculateAverageSentiment(response.data)
                setAverageSentiment(sentimentScore)
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
                    <div>
                        <Link
                            to={`/parties/${
                                politician.latest_member.party ===
                                "Australian Labor Party"
                                    ? "alp"
                                    : "coalition"
                            }`}
                        >
                            {politician.latest_member.party ===
                            "Australian Labor Party"
                                ? "Back to ALP Members"
                                : "Back to Coalition Members"}
                        </Link>
                    </div>
                    <h1>{politician.latest_member.name.first}</h1>
                    <div>
                        <h2>Latest tweets:</h2>
                        {tweets.length > 0 ? (
                            <ul>
                                {tweets.map((tweet) => (
                                    <Tweet key={tweet.id} tweet={tweet} />
                                ))}
                            </ul>
                        ) : (
                            <p>Loading tweets...</p>
                        )}
                    </div>
                    <div>
                        <h2>Overall Engagement:</h2>
                        <p>{overallEngagement.toFixed(0)}</p>
                    </div>
                    <div>
                        <h2>Average Sentiment Score:</h2>
                        <SentimentScore score={Math.floor(averageSentiment)} />
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
