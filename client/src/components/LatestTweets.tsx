import axios from "axios"
import React, { useEffect, useState } from "react"
import HashtagTweet from "./HashtagTweet"

const LatestTweets = () => {
    const [tweets, setTweets] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/api/latestTweets?page=${page}`
                )
                setTweets((prevTweets) => [...prevTweets, ...response.data])
            } catch (error) {
                console.error("Error fetching tweets:", error)
            }
        }
        fetchTweets()
    }, [page])

    const loadMoreTweets = () => {
        setPage(page + 1)
    }

    return (
        <section className="flex flex-col items-center">
            <p className="w-full bg-gray-800 p-6 text-center tracking-widest text-white">
                LATEST <span className="font-extrabold">#AUSPOL</span> TWEETS:
            </p>
            <div className="flex flex-col items-center justify-center gap-6 p-6 sm:flex-row sm:flex-wrap">
                {tweets.map((tweet, index) => (
                    <HashtagTweet key={`${tweet.id}-${index}`} tweet={tweet} />
                ))}
            </div>
            <button
                className="flex items-center m-8 justify-center rounded border-2 border-white bg-gray-800 px-6 py-2 text-md font-bold tracking-wider text-white"
                onClick={loadMoreTweets}
            >
                Load More
            </button>
        </section>
    )
}

export default LatestTweets
