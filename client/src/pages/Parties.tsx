import React from "react"
import { Link } from "react-router-dom"
import alpBird from "../assets/images/alp-bird.png"
import coalitionBird from "../assets/images/coalition-bird.png"
import twitterAbstractLogo from "../assets/images/twitter-abstract-logo.png"

const Parties = () => {
    return (
        <section className="flex flex-col items-center gap-3 p-4">
            <h2 className="font-semibold text-center">Words have power,<br/> especially in politics.</h2>

            <img
                src={twitterAbstractLogo}
                alt="A blue bird that resembles the Twitter Logo framed by a red circle."
                className="h-48"
            />
            <div className="hidden">
                <img src={alpBird} alt="A red bird wearing a suit"/>
                <Link
                    to="/parties/alp"
                    className="text-center items-center justify-center rounded border-2 border-white bg-red-800 px-4 py-2 text-xs font-bold tracking-wider text-white"
                >
                    Australian Labor Party
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <Link
                    to="/parties/alp"
                    className="text-center items-center justify-center rounded border-2 border-white bg-red-800 px-4 py-2 text-xs font-bold tracking-wider text-white"
                >
                    Australian Labor Party
                </Link>
                <Link
                    to="/parties/coalition"
                    className="text-center items-center justify-center rounded border-2 border-white bg-blue-800 px-4 py-2 text-xs font-bold tracking-wider text-white"
                >
                    Liberal–National Coalition
                </Link>
            </div>
            <div>
                <h2 className="hidden">Words have power, especially in politics.</h2>
                <p className="text-sm leading-relaxed">
                    Explore the personalities and policies of the ALP and
                    Coalition by examining their cabinet ministers' tweets. See
                    how they use social media to communicate their message, gain
                    insight into their strategies, and discover the impact
                    they're having on the national conversation.
                </p>
            </div>
            <div className="hidden">
                <img src={coalitionBird} alt="A blue bird wearing a suit" />
                <Link
                    to="/parties/coalition"
                    className="text-center items-center justify-center rounded border-2 border-white bg-blue-800 px-4 py-2 text-xs font-bold tracking-wider text-white"
                >
                    Liberal–National Coalition
                </Link>
            </div>
        </section>
    )
}

export default Parties
