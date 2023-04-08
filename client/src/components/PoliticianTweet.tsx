import React from "react"

const PoliticianTweet = ({ tweet }) => {
    return (
        <li>
            <a
                href={`https://twitter.com/i/web/status/${tweet.id}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {tweet.text}
            </a>
        </li>
    )
}

export default PoliticianTweet
