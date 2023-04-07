import React from "react"
import Birds from "../assets/images/birds.png"
import LatestHashtagTweets from "../components/LatestTweets"

const Home = () => {
    return (
        <div>
            <img src={Birds} alt="birds" />
            <LatestHashtagTweets/>
        </div>
    )
}

export default Home
