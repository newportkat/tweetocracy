import React from "react"
import { ISentimentScoreProps } from "./SentimentScore.types"

const SentimentScore: React.FC<ISentimentScoreProps> = ({ score }) => {
    const sentimentEmojis = [
        "🤬",
        "😠",
        "😔",
        "🙁",
        "😐",
        "🙂",
        "😊",
        "😄",
        "😁",
        "😍",
    ]

    return (
        <div className="flex items-center justify-center p-2 flex-wrap mb-4 sm:mb-0">
            {sentimentEmojis.map((emoji, index) => (
                <span
                    key={index}
                    style={{
                        fontSize: score === index - 4 ? "2.5em" : "1em",
                        margin: "0.5em",
                    }}
                >
                    {emoji}
                </span>
            ))}
        </div>
    )
}

export default SentimentScore
