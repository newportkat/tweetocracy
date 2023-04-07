import React from "react"

const SentimentScore = ({ score }) => {
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
        <div style={{ display: "flex", justifyContent: "center" }}>
            {sentimentEmojis.map((emoji, index) => (
                <span
                    key={index}
                    style={{
                        fontSize: score === index - 4 ? "2em" : "1em",
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
