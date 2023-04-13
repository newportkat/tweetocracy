import React from "react"
import TwitterLogo from "../../assets/svgFunctions/TwitterLogo"

const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" }
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString("en-US", options)
    return formattedDate.replace(",", "")
}

const PoliticianTweet = ({ tweet, username, profilePic }) => {
    return (
        <div className="flex w-72 flex-col gap-2 rounded bg-white p-4 shadow-xl">
            <div className="flex items-center gap-2">
                <a
                    href={`https://twitter.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={profilePic}
                        alt={`Twitter profile picture for user: ${username}`}
                        className="rounded-full"
                    />
                </a>
                <a
                    href={`https://twitter.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                >
                    @{username}
                </a>
                <TwitterLogo className="ml-auto h-6 w-6" />
            </div>
            <a
                href={`https://twitter.com/i/web/status/${tweet.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
            >
                {tweet.text}
            </a>
            <div className="flex justify-end text-sm">
                <p>{formatDate(tweet.created_at)}</p>
            </div>
        </div>
    )
}

export default PoliticianTweet
