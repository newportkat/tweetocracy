require("dotenv").config()
const express = require("express")
const cors = require("cors")
const needle = require("needle")
const app = express()

app.use(cors())

const twitterApiKeys = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    bearer_token: process.env.BEARER_TOKEN,
}

const options = {
    headers: {
        "User-Agent": "v2UserTweetsJS",
        authorization: `Bearer ${twitterApiKeys.bearer_token}`,
    },
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

const getUserTweets = async (url) => {
    const params = {
        max_results: 5,
        "tweet.fields": "created_at",
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
