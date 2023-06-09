import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import VoterCard from "../../components/VoterCard/VoterCard"
import {
    IDivision,
    ILatestMember,
    IPersonComparison,
    IPolicy,
    IPolicyDivision,
} from "./Policy.types"

const Policy = () => {
    const { id } = useParams<string>()
    const [policy, setPolicy] = useState<IPolicy | null>(null)
    const [filteredVoters, setFilteredVoters] = useState<IPersonComparison[]>(
        []
    )

    const fetchPolicy = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3001/api/policies/${id}`
            )
            setPolicy(response.data)
            setFilteredVoters(response.data.people_comparisons)
        } catch (error) {
            console.log(error)
        }
    }

    const getMostRecentVoteDate = (policyDivisions: IPolicyDivision[]) => {
        let latestDate = new Date(policyDivisions[0].division.date)
        policyDivisions.forEach(({ division }) => {
            const divisionDate = new Date(division.date)
            if (divisionDate > latestDate) {
                latestDate = divisionDate
            }
        })
        return latestDate
            .toLocaleDateString("en-AU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })
            .replace(/\//g, "-") // replace slashes with dashes
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = e.target.value
        const filtered = policy?.people_comparisons.filter((voter) =>
            filter === "all"
                ? true
                : filter === "yes"
                ? voter.voted
                : !voter.voted
        )
        setFilteredVoters(filtered ?? []) // if null or undefined, return an empty array
    }

    useEffect(() => {
        fetchPolicy()
    }, [])

    return (
        <div>
            {policy ? (
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-center justify-center gap-1 bg-gray-800 p-6 text-center font-extrabold uppercase tracking-widest text-white">
                        <h1>{policy.name}</h1>
                        <p className="text-xs font-medium">
                            LATEST VOTE:{" "}
                            {getMostRecentVoteDate(policy.policy_divisions)}
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <Link
                            to="/policies"
                            className="rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white hover:bg-gray-600"
                        >
                            BACK TO POLICIES
                        </Link>
                        <p className="max-w-5xl p-4 leading-loose">
                            {policy.description.charAt(0).toUpperCase() +
                                policy.description.slice(1)}
                            .
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <label
                                htmlFor="filter"
                                className="text-sm font-medium"
                            >
                                FILTER:
                            </label>
                            <select
                                id="filter"
                                onChange={handleFilterChange}
                                className="bg-white p-2 shadow-xl"
                            >
                                <option value="all">All</option>
                                <option value="yes">Voted Yes</option>
                                <option value="no">Voted No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 flex flex-wrap items-center justify-center gap-4 p-4 lg:px-8">
                        {filteredVoters.map((voter) => (
                            <VoterCard
                                key={voter.person.id}
                                name={`${voter.person.latest_member.name.first} ${voter.person.latest_member.name.last}`}
                                party={voter.person.latest_member.party}
                                vote={voter.voted}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="w-full bg-gray-800 p-6 text-center font-extrabold tracking-widest text-white">
                        <p>LOADING POLICY...</p>
                    </div>
                    <div className="flex items-center justify-center p-6">
                        <Loader />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Policy
