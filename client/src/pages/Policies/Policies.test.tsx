import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Policies from "./Policies"
import axios from "axios"

jest.mock("axios")

const mockedAxios = axios as jest.Mocked<typeof axios>

test("renders Policies component with policy list", async () => {
    const fakePolicies = [
        { id: "1", name: "Test Policy 1" },
        { id: "2", name: "Test Policy 2" },
    ]
    mockedAxios.get.mockResolvedValueOnce({ data: fakePolicies })

    render(
        <MemoryRouter>
            <Policies />
        </MemoryRouter>
    )

    expect(await screen.findByText(/test policy 1/i)).toBeInTheDocument()
    expect(screen.getByText(/test policy 2/i)).toBeInTheDocument()
})

test("search for a policy", async () => {
    const fakePolicies = [
        { id: "1", name: "Test Policy 1" },
        { id: "2", name: "Test Policy 2" },
    ]
    mockedAxios.get.mockResolvedValueOnce({ data: fakePolicies })

    render(
        <MemoryRouter>
            <Policies />
        </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText(/search for a policy/i), {
        target: { value: "Test Policy 1" },
    })

    await waitFor(() => {
        expect(screen.getByText(/test policy 1/i)).toBeInTheDocument()
    })

    expect(screen.queryByText(/test policy 2/i)).not.toBeInTheDocument()
})
