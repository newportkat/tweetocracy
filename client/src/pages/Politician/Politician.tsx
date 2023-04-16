import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import WordCloud from "react-wordcloud"
import Loader from "../../components/Loader/Loader"
import PoliticianTweet from "../../components/PoliticianTweet/PoliticianTweet"
import SentimentScore from "../../components/SentimentScore/SentimentScore"
import { twitterData } from "../../data/twitterData/twitterData"
import {
    calculateAverageSentiment,
    calculateOverallEngagement,
    fetchPolitician,
    processTweetsForWordCloud,
} from "../../utils/utils"
import { IFetchPolitician, IPoliticianInfo, ITweets, IWordCloudData } from "./Politician.types"

const Politician = () => {
    const { id } = useParams< string >()
    const [tweets, setTweets] = useState<ITweets[]>([])
    const [politician, setPolitician] = useState<IFetchPolitician | null>(null)
    const [wordCloudData, setWordCloudData] = useState<IWordCloudData[]>([])
    const [overallEngagement, setOverallEngagement] = useState<number>(0)
    const [averageSentiment, setAverageSentiment] = useState<number>(0)
    const [politicianInfo, setPoliticianInfo] = useState<IPoliticianInfo | null>(null)

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
                console.error(error)
            }
        }
        fetchTweets()
    }, [id])

    useEffect(() => {
        if (tweets.length > 0) {
            const fetchPoliticianInfo = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:3001/api/authordata/${tweets[0].author_id}`
                    )
                    setPoliticianInfo(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchPoliticianInfo()
        }
    }, [tweets])

    return (
        <div>
            {politician && politicianInfo ? (
                <div className="flex flex-col items-center">
                    <h1 className="w-full bg-gray-800 p-6 text-center uppercase tracking-widest text-white">
                        LATEST TWEETS FROM{" "}
                        <span className="font-extrabold">
                            {politician.latest_member.name.first}{" "}
                            {politician.latest_member.name.last}
                        </span>
                        :
                    </h1>

                    <Link
                        to={`/parties/${
                            politician.latest_member.party ===
                            "Australian Labor Party"
                                ? "alp"
                                : "coalition"
                        }`}
                        className="m-8 rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white"
                    >
                        {politician.latest_member.party ===
                        "Australian Labor Party"
                            ? "Back to ALP Members"
                            : "Back to Coalition Members"}
                    </Link>
                    <div className="px-8 pb-8">
                        {tweets.length > 0 ? (
                            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
                                {tweets.map((tweet) => (
                                    <PoliticianTweet
                                        key={tweet.id}
                                        tweet={tweet}
                                        username={politicianInfo.username}
                                        profilePic={
                                            politicianInfo.profile_image_url
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <Loader />
                        )}
                    </div>

                    <div className="w-full">
                        <p className="bg-gray-800 p-6 text-center font-extrabold tracking-widest text-white">
                            WORDCLOUD:
                        </p>
                        {wordCloudData.length > 0 ? (
                            <div>
                                <WordCloud
                                    words={wordCloudData}
                                    options={{
                                        fontSizes: [14, 68],
                                        fontFamily: "Arial",
                                        fontWeight: "bold",
                                        rotations: 2,
                                        rotationAngles: [-45, 0],
                                        scale: "sqrt",
                                        spiral: "archimedean",
                                        padding: 4,
                                    }}
                                    // style={{
                                    //     backgroundColor: "#fff",
                                    //     borderRadius: "5px",
                                    //     boxShadow:
                                    //         "0 20px 25px -5px rgb(0 0 0 / 0.4)",
                                    //     margin: "2.5em",
                                    //     padding: ".5em",
                                    // }}
                                />
                            </div>
                        ) : (
                            <Loader />
                        )}
                    </div>

                    <div className="w-full">
                        <p className="w-full bg-gray-800 p-6 text-center tracking-widest text-white">
                            AVERAGE{" "}
                            <span className="font-extrabold">SENTIMENT</span>{" "}
                            SCORE:
                        </p>
                        <SentimentScore score={Math.floor(averageSentiment)} />
                    </div>

                    <div className="w-full">
                        <p className="bg-gray-800 p-6 text-center tracking-widest text-white">
                            TOTAL{" "}
                            <span className="font-extrabold">ENGAGEMENT</span>{" "}
                            SCORE:
                        </p>
                        <p className="p-6 text-center text-3xl tracking-widest text-gray-800">
                            {overallEngagement.toFixed(0)}
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="w-full bg-gray-800 p-6 text-center font-extrabold tracking-widest text-white">
                        <p>LOADING...</p>
                    </div>
                    <div className="flex items-center justify-center p-6">
                        <Loader />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Politician
