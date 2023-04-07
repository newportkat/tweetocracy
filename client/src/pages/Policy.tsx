import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Voter from "../components/Voter"

const Policy = () => {
    const { id } = useParams()
    const [policy, setPolicy] = useState(null)
    const [filteredVoters, setFilteredVoters] = useState([])

    const fetchPolicy = async () => {
        try {
            const response = await axios.get(
                `https://theyvoteforyou.org.au/api/v1/policies/${id}.json?key=${
                    import.meta.env.VITE_THEY_VOTE_FOR_YOU_API_KEY
                }`
            )
            setPolicy(response.data)
            setFilteredVoters(response.data.people_comparisons)
        } catch (error) {
            console.log(error)
        }
    }

    const getMostRecentVoteDate = (policyDivisions) => {
        let latestDate = new Date(policyDivisions[0].division.date)
        policyDivisions.forEach(({ division }) => {
            const divisionDate = new Date(division.date)
            if (divisionDate > latestDate) {
                latestDate = divisionDate
            }
        })
        return latestDate.toISOString().split("T")[0]
    }

    const handleFilterChange = (e) => {
        const filter = e.target.value
        const filtered = policy.people_comparisons.filter((voter) =>
            filter === "all"
                ? true
                : filter === "yes"
                ? voter.voted
                : !voter.voted
        )
        setFilteredVoters(filtered)
    }

    useEffect(() => {
        fetchPolicy()
    }, [])

    return (
        <div>
            {policy ? (
                <div>
                    <h2>{policy.name}</h2>
                    <p>
                        (Latest Vote:{" "}
                        {getMostRecentVoteDate(policy.policy_divisions)})
                    </p>

                    <p>{policy.description}</p>
                    <div>
                        <label htmlFor="filter">Filter voters:</label>
                        <select id="filter" onChange={handleFilterChange}>
                            <option value="all">All</option>
                            <option value="yes">Voted Yes</option>
                            <option value="no">Voted No</option>
                        </select>
                    </div>
                    {filteredVoters.map((voter) => (
                        <Voter
                            key={voter.person.id}
                            name={`${voter.person.latest_member.name.first} ${voter.person.latest_member.name.last}`}
                            party={voter.person.latest_member.party}
                            vote={voter.voted}
                        />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Policy
