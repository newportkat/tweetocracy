import React from "react"

const Tweet = ({ tweet }) => {
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

export default Tweet
