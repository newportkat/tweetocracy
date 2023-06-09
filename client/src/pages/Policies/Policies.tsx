import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import { IPolicy } from "./Policies.types"

const Policies = () => {
    const [policies, setPolicies] = useState<IPolicy[]>([])
    const [displayedPolicies, setDisplayedPolicies] = useState<number>(20)
    const [searchTerm, setSearchTerm] = useState< string >("")

    const fetchPolicies = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3001/api/policies"
            )
            setPolicies(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="flex flex-col items-center justify-center">
            <h1 className="w-full bg-gray-800 p-6 text-center font-extrabold tracking-widest text-white">
                POLICIES
            </h1>
            <div className="flex flex-col justify-center gap-4 p-6 lg:max-w-3xl lg:text-center">
                <p className="text-center text-xl font-bold tracking-wide lg:text-2xl">
                    Informed citizens,
                    <br /> powerful democracy.
                </p>
                <p>
                    Browse our comprehensive list of policies voted on in the
                    Australian Parliament, and easily find the ones that matter
                    most to you.
                </p>
                <p>
                    See which MPs voted for or against a policy and get a clear
                    picture of where our elected officials stand on the issues
                    that shape our nation.
                </p>
                <input
                    type="text"
                    placeholder="Search for a policy"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    className="bg-white p-2 shadow-xl lg:text-center"
                />
            </div>
            {policies.length > 0 ? (
                <ul className="mb-6 grid grid-cols-1 gap-4 px-6 lg:grid-cols-2 xl:my-6 xl:grid-cols-3 xl:px-20">
                    {filteredPolicies.map((policy) => (
                        <li key={policy.id} className="font-medium capitalize">
                            <Link to={`/policies/${policy.id}`}>
                                {policy.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="flex items-center justify-center">
                    <Loader />
                </div>
            )}
            {displayedPolicies < policies.length && searchTerm === "" && (
                <button
                    onClick={loadMorePolicies}
                    className="m-6 self-center rounded border-2 border-white bg-gray-800 px-4 py-2 text-xs font-bold tracking-wider text-white"
                >
                    LOAD MORE
                </button>
            )}
        </div>
    )
}

export default Policies
