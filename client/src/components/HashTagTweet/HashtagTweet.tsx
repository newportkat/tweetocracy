import React, { useEffect } from "react"
import TwitterLogo from "../../assets/svgFunctions/TwitterLogo"
import { IHashtagTweetProps } from "./HashtagTweet.types"

const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    }
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString("en-US", options)
    return formattedDate.replace(",", "")
}

const HashtagTweet: React.FC<IHashtagTweetProps> = ({ tweet }) => {
    return (
        <div className="flex w-72 flex-col gap-2 rounded bg-white p-4 shadow-xl">
            <div className="flex items-center gap-2">
                <a
                    href={`https://twitter.com/${tweet.user.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={tweet.user.profile_image_url}
                        alt={`Twitter profile picture for user: ${tweet.user.username}`}
                        className="rounded-full"
                    />
                </a>
                <a
                    href={`https://twitter.com/${tweet.user.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                >
                    @{tweet.user.username}
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

export default HashtagTweet
