import React from "react"
import { Link } from "react-router-dom"
import alpBird from "../../assets/images/alp-bird.png"
import coalitionBird from "../../assets/images/coalition-bird.png"
import twitterAbstractLogo from "../../assets/images/twitter-abstract-logo.png"

const Parties = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-3 p-4 md:items-end md:flex-row md:gap-8 lg:gap-16 mb-10">
            <h2 className="text-center font-semibold md:hidden">
                Words have power,
                <br /> especially in politics.
            </h2>
            <img
                src={twitterAbstractLogo}
                alt="A blue bird that resembles the Twitter Logo framed by a red circle."
                className="h-48 md:hidden"
            />
            <div className="hidden flex-col md:flex">
                <img src={alpBird} alt="A red bird wearing a suit" />
            </div>
            <div className="flex flex-col gap-4 self-start md:max-w-xs md:gap-4 lg:gap-10 lg:max-w-xl md:mt-10">
                <div className="flex gap-4 flex-col">

                <h2 className="hidden text-center font-semibold md:block xl:text-4xl xl:leading-normal">
                    Words have power,
                    <br /> especially in politics.
                </h2>
                <p className="text-sm leading-relaxed xl:text-xl xl:leading-loose">
                    Explore the personalities and policies of the ALP and
                    Coalition by examining their cabinet ministers' tweets. See
                    how they use social media to communicate their message, gain
                    insight into their strategies, and discover the impact
                    they're having on the national conversation.
                </p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link
                        to="/parties/alp"
                        className="hover:bg-red-800 xl:text-xl items-center justify-center rounded border-2 border-white bg-red-600 px-4 py-2 text-center text-xs font-bold tracking-wider text-white"
                    >
                        Australian Labor Party
                    </Link>
                    <Link
                        to="/parties/coalition"
                        className="hover:bg-blue-800 xl:text-xl items-center justify-center rounded border-2 border-white bg-blue-600 px-4 py-2 text-center text-xs font-bold tracking-wider text-white"
                    >
                        Liberal–National Coalition
                    </Link>
                </div>
            </div>
            <div className="hidden flex-col md:flex">
                <img src={coalitionBird} alt="A blue bird wearing a suit" />
            </div>
        </section>
    )
}

export default Parties
