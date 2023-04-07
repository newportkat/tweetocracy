import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Policies = () => {
    const [policies, setPolicies] = useState([])
    const [displayedPolicies, setDisplayedPolicies] = useState(20)
    const [searchTerm, setSearchTerm] = useState("")

    const fetchPolicies = async () => {
        try {
            const response = await axios.get(
                `https://theyvoteforyou.org.au/api/v1/policies.json?key=${
                    import.meta.env.VITE_THEY_VOTE_FOR_YOU_API_KEY
                }`
            )
            setPolicies(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const loadMorePolicies = () => {
        setDisplayedPolicies(displayedPolicies + 20)
    }

    useEffect(() => {
        fetchPolicies()
    }, [])

    const filteredPolicies = policies
        .filter((policy) =>
            policy.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, displayedPolicies)

    return (
        <div>
            <h2>List of Policies:</h2>
            <input
                type="text"
                placeholder="Search for a policy"
                value={searchTerm}
                onChange={handleSearchInputChange}
            />
            {policies.length > 0 ? (
                <ul>
                    {filteredPolicies.map((policy) => (
                        <li key={policy.id} className="capitalize">
                            <Link to={`/policies/${policy.id}`}>
                                {policy.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
            {displayedPolicies < policies.length && searchTerm === "" && (
                <button onClick={loadMorePolicies}>Load more policies</button>
            )}
        </div>
    )
}

export default Policies
