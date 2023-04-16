export interface IPoliticianTweet {
    public_metrics: {
        retweet_count: number
        reply_count: number
        like_count: number
        quote_count: number
        impression_count: number
    }
    created_at: string
    text: string
    id: string
    author_id: string
    edit_history_tweet_ids: string[]
}

export interface IPoliticianTweetProps {
    tweet: IPoliticianTweet,
    username: string,
    profilePic: string,
}