import React from "react"
import Birds from "../assets/images/birds.png"
import LatestTweets from "../components/LatestTweets"

const Home = () => {
    return (
        <div>
            <img src={Birds} alt="birds" />
            <LatestTweets/>
        </div>
    )
}

export default Home
