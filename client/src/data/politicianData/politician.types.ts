export interface IName {
    first: string
    last: string
}

export interface ILatestMember {
    id: number
    name: IName
    electorate: string
    house: string
    party: string
}

export interface IPolitician {
    id: number
    latest_member: ILatestMember
    twitterId: string
}
