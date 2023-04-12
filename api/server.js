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
        max_results: 30,
        "tweet.fields": "created_at,public_metrics,text,author_id",
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
        max_results: 12,
        "tweet.fields": "created_at,public_metrics,text,author_id",
        query: "#auspol -is:retweet",
    }

    const response = await needle("get", url, params, options)

    if (response.statusCode !== 200) {
        throw new Error(
            `${response.statusCode} ${response.statusMessage}:\n${response.body}`
        )
    }

    const tweets = response.body.data || []

    // Collect unique author IDs from tweets
    const authorIds = Array.from(new Set(tweets.map((t) => t.author_id)))

    // Fetch user data for each author
    const usersResponse = await needle(
        "get",
        `https://api.twitter.com/2/users?ids=${authorIds.join(
            ","
        )}&user.fields=profile_image_url,username`,
        options
    )

    if (usersResponse.statusCode !== 200) {
        throw new Error(
            `${usersResponse.statusCode} ${usersResponse.statusMessage}:\n${usersResponse.body}`
        )
    }

    const users = usersResponse.body.data

    // Map user data to tweets
    const tweetsWithUserData = tweets.map((tweet) => {
        const user = users.find((u) => u.id === tweet.author_id)
        return {
            ...tweet,
            user: {
                username: user.username,
                profile_image_url: user.profile_image_url,
            },
        }
    })

    return tweetsWithUserData
}

app.get("/api/latest", async (req, res) => {
    const url = `https://api.twitter.com/2/tweets/search/recent`
    try {
        const tweets = await getLatestTweets(url)
        res.json(tweets)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get("/api/authordata/:twitterId", async (req, res) => {
    const twitterId = req.params.twitterId
    const url = `https://api.twitter.com/2/users?ids=${twitterId}&user.fields=username,profile_image_url`

    try {
        const response = await needle("get", url, options)

        if (response.statusCode !== 200) {
            throw new Error(
                `${response.statusCode} ${response.statusMessage}:\n${response.body}`
            )
        }

        const user = response.body.data[0]

        res.json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
