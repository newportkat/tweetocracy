import axios from "axios"
import Sentiment from "sentiment"
import { stopWords } from "../data/stopWords"

const sentiment = new Sentiment()

export const calculateSentimentScore = (text) => {
    const result = sentiment.analyze(text)
    return Math.floor(result.score)
}

export const calculateAverageSentiment = (tweets) => {
    const totalScore = tweets.reduce((acc, tweet) => {
        const score = calculateSentimentScore(tweet.text)
        return acc + score
    }, 0)

    const averageScore = totalScore / tweets.length

    return averageScore
}

export const processTweetsForWordCloud = (tweets) => {
    const text = tweets.map((tweet) => tweet.text).join(" ")
    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter((word) => word.length > 3 && !stopWords.has(word))

    const wordCounts = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
    }, {})

    const wordCloudData = Object.entries(wordCounts).map(([text, value]) => ({
        text,
        value: value * 50,
    }))

    return wordCloudData
}

export const calculateEngagementScore = (publicMetrics) => {
    const likeWeight = 1
    const retweetWeight = 2
    const replyWeight = 3

    const score =
        publicMetrics.like_count * likeWeight +
        publicMetrics.retweet_count * retweetWeight +
        publicMetrics.reply_count * replyWeight

    return score
}

export const calculateOverallEngagement = (tweets) => {
    const totalScore = tweets.reduce((acc, tweet) => {
        const score = calculateEngagementScore(tweet.public_metrics)
        return acc + score
    }, 0)
    const averageScore = totalScore / tweets.length

    return averageScore
}
