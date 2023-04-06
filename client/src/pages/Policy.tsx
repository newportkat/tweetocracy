import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Policy = () => {
    const { id } = useParams()
    const [policy, setPolicy] = useState(null)

    const fetchPolicy = async () => {
        try {
            const response = await axios.get(
                `https://theyvoteforyou.org.au/api/v1/policies/${id}.json?key=${
                    import.meta.env.VITE_THEY_VOTE_FOR_YOU_API_KEY
                }`
            )
            setPolicy(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPolicy()
    }, [])

    return (
        <div>
            {policy ? (
                <div>
                    <h2>{policy.name}</h2>
                    <p>{policy.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Policy
