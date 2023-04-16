export interface IFetchPolitician {
    id: number
    latest_member: {
        id: number
        name: {
            first: string
            last: string
        }
        electorate: string
        house: string
        party: string
    }
    rebellions: number
    votes_attended: number
    votes_possible: number
    offices: {
        position: string
    }[]
    policy_comparisons: {
        policy: {
            id: number
            name: string
            description: string
            provisional: boolean
            last_edited_at: string
        }
        agreement: string
        voted: boolean
    }[]
}

export interface IPoliticianInfo {
    profile_image_url: string,
    username: string,
    name: string,
    id: string
}

export interface IWordCloudData {
    text: string,
    value: number
}

export interface ITweets {
    created_at: string,
    text: string,
    id: string,
    public_metrics: {
        retweet_count: number,
        reply_count: number,
        like_count: number,
        quote_count: number,
        impression_count: number,
    },
    author_id: string,
    edit_history_tweet_ids: string[]
}
