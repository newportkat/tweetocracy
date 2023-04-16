export interface IPolicy {
    id: number
    name: string
    description: string
    provisional: boolean
    last_edited_at: string
    policy_divisions: IPolicyDivision[]
    people_comparisons: IPersonComparison[]
}

export interface IPolicyDivision {
    division: IDivision
    vote: string
    strong: boolean
}

export interface IDivision {
    id: number
    house: string
    name: string
    date: string
    number: number
    clock_time: string | null
    aye_votes: number
    no_votes: number
    possible_turnout: number
    rebellions: number
    edited: boolean
}

export interface IPersonComparison {
    person: {
        id: number
        latest_member: ILatestMember
    }
    agreement: string
    voted: boolean
    category: string
}

export interface ILatestMember {
    id: number
    name: {
        first: string
        last: string
    }
    electorate: string
    house: string
    party: string
}
