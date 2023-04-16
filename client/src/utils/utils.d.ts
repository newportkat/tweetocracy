import { TwitterData } from "../data/twitterData/twitterData"
import { IFetchPolitician } from "../pages/Politician/Politician.types";

export function fetchPolitician(
    id: string | undefined
): Promise<IFetchPolitician | null>

export function calculateSentimentScore(text: string): number

export function calculateAverageSentiment(tweets: any[]): number

export function processTweetsForWordCloud(
    tweets: any[]
): { text: string; value: number }[]

export function calculateEngagementScore(publicMetrics: any): number

export function calculateOverallEngagement(tweets: any[]): number
