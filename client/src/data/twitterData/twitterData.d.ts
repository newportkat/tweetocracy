export interface ITwitterData {
    id: number
    name: {
        first: string
        last: string
    }
    twitterId: string
}

export const twitterData: ITwitterData[]
