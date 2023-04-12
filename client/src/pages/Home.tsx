import React from "react"
import Birds from "../assets/images/birds.png"
import LatestTweets from "../components/LatestTweets"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <main className="mb-10">
                <div className="relative lg:flex items-center lg:gap-10 xl:gap-28 justify-center">
                    <img src={Birds} alt="Two birds wearing suits looking menacingly at each other." />
                    <Link to="/parties" className="absolute bottom-1/3 left-1/2 -translate-x-1/2 transform rounded border-2 border-white bg-gray-800 px-4 py-2 md:text-lg text-xs font-bold tracking-wider text-white lg:hidden">
                        EXPLORE TWEETS
                    </Link>
                    <div className="flex flex-col gap-4 w-96 tracking-wider">
                        <p className="hidden text-3xl xl:text-4xl xl:leading-relaxed lg:block leading-normal">
                            In politics, the early bird might get the worm, but
                            the loudest bird gets the retweets.
                        </p>
                        <Link to="/parties" className="hidden w-48 items-center justify-center rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white lg:flex hover:bg-gray-600">
                            EXPLORE TWEETS
                        </Link>
                    </div>
                </div>
            </main>
            <section>
                <LatestTweets />
            </section>
        </div>
    )
}

export default Home
