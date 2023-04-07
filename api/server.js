require("dotenv").config()
const express = require("express")
const cors = require("cors")
const needle = require("needle")
const app = express()

app.use(cors())

const twitterApiKeys = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN,
}

const options = {
    headers: {
        "User-Agent": "v2UserTweetsJS",
        authorization: `Bearer ${twitterApiKeys.bearer_token}`,
    },
}

const getUserTweets = async (url) => {
    const params = {
        max_results: 40,
        "tweet.fields": "created_at,public_metrics,referenced_tweets,text",
        expansions: "author_id",
    }

    const response = await needle("get", url, params, options)
    if (response.statusCode !== 200) {
        throw new Error(
            `${response.statusCode} ${response.statusMessage}:\n${response.body}`
        )
    }

    return response.body.data
}

app.get("/api/tweets/:twitterId", async (req, res) => {
    const twitterId = req.params.twitterId
    const url = `https://api.twitter.com/2/users/${twitterId}/tweets`
    try {
        const tweets = await getUserTweets(url)
        res.json(tweets)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

const getLatestTweets = async (url) => {
    const params = {
        max_results: 20,
        "tweet.fields": "created_at,public_metrics,referenced_tweets,text",
        expansions: "author_id",
        query: "#auspol -is:retweet",
    }

    const response = await needle("get", url, params, options)
    console.log("Twitter API response:", response)
    if (response.statusCode !== 200) {
        throw new Error(
            `${response.statusCode} ${response.statusMessage}:\n${response.body}`
        )
    }

    return response.body.data || [] // Use response.body.data instead of response.body.statuses
}

app.get("/api/latestTweets", async (req, res) => {
    const url = `https://api.twitter.com/2/tweets/search/recent?`
    try {
        const tweets = await getLatestTweets(url)
        console.log("Tweets fetched:", tweets)
        res.json(tweets)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})




const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
