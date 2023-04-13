import React from "react"
import { Link } from "react-router-dom"
import Birds from "../assets/images/birds.png"
import LatestTweets from "../components/LatestTweets"

const Home = () => {
    return (
        <div>
            <main className="mb-10">
                <div className="relative items-center justify-center lg:flex lg:gap-10 xl:gap-28">
                    <img
                        src={Birds}
                        alt="Two birds wearing suits looking menacingly at each other."
                    />
                    <Link
                        to="/parties"
                        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 transform rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white hover:bg-gray-600 md:text-lg lg:hidden"
                    >
                        EXPLORE TWEETS
                    </Link>
                    <div className="flex w-96 flex-col gap-4 tracking-wider">
                        <p className="hidden text-3xl leading-normal lg:block xl:text-4xl xl:leading-relaxed">
                            In politics, the early bird might get the worm, but
                            the loudest bird gets the retweets.
                        </p>
                        <Link
                            to="/parties"
                            className="hidden w-48 items-center justify-center rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white hover:bg-gray-600 lg:flex"
                        >
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
