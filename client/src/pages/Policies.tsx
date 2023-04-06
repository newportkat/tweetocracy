import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Policies = () => {
    const [policies, setPolicies] = useState([])

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

    useEffect(() => {
        fetchPolicies()
    }, [])

    return (
        <div>
            <h2>List of Policies:</h2>
            {policies.length > 0 ? (
                <ul>
                    {policies.map((policy) => (
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
        </div>
    )
}

export default Policies
