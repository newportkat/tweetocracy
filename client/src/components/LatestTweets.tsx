import React, { useState, useEffect } from "react"
import axios from "axios"

const LatestTweets = () => {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/api/latestTweets"
                )
                console.log("Tweets received:", response.data)
                setTweets(response.data)
            } catch (error) {
                console.error("Error fetching tweets:", error)
            }
        }
        fetchTweets()
    }, [])
return (
    <div>
        <h1>Latest Tweets with #auspol</h1>
        <ul>
            {tweets.map((tweet: any) => (
                <li key={tweet.id}>{tweet.text}</li>
            ))}
        </ul>
    </div>
)

}

export default LatestTweets
