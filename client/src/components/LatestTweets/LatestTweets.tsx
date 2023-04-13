import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import HashtagTweet from "../HashTagTweet/HashtagTweet"
import Loader from "../Loader/Loader"

const LatestTweets = () => {
    const [tweets, setTweets] = useState([])
    const [refreshClicked, setRefreshClicked] = useState(false)

    const sectionRef = useRef(null)

    const fetchTweets = async () => {
        setTweets([])
        try {
            const response = await axios.get(`http://localhost:3001/api/latest`)
            setTweets(response.data)
        } catch (error) {
            console.error("Error fetching tweets:", error)
        }
    }

    const refreshTweets = async () => {
        setTweets([])
        try {
            const response = await axios.get(`http://localhost:3001/api/latest`)
            setTweets(response.data)
            setRefreshClicked(true)
        } catch (error) {
            console.error("Error fetching tweets:", error)
        }
    }

    useEffect(() => {
        fetchTweets()
    }, [])

    useEffect(() => {
        if (refreshClicked && tweets.length > 0) {
            sectionRef.current.scrollIntoView({
                behavior: "smooth",
            })
            setRefreshClicked(false)
        }
    }, [tweets, refreshClicked])

    return (
        <section className="flex flex-col items-center" ref={sectionRef}>
            <p className="w-full bg-gray-800 p-6 text-center tracking-widest text-white">
                LATEST <span className="font-extrabold">#AUSPOL</span> TWEETS:
            </p>
            {tweets.length > 0 ? (
                <div className="flex flex-col items-center justify-center gap-6 p-10 sm:flex-row sm:flex-wrap">
                    {tweets.map((tweet, index) => (
                        <HashtagTweet
                            key={`${tweet.id}-${index}`}
                            tweet={tweet}
                        />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
            {tweets.length > 0 && (
                <button
                    onClick={refreshTweets}
                    className="m-6 rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white hover:bg-gray-600"
                >
                    REFRESH LATEST TWEETS
                </button>
            )}
        </section>
    )
}

export default LatestTweets
