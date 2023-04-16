import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Parties from "./Parties"

test("renders Parties component and navigation links", () => {
    render(
        <MemoryRouter>
            <Parties />
        </MemoryRouter>
    )

    const alpLink = screen.getByText("Australian Labor Party")
    expect(alpLink).toBeInTheDocument()
    expect(alpLink.closest("a")).toHaveAttribute("href", "/parties/alp")

    const coalitionLink = screen.getByText("Liberal–National Coalition")
    expect(coalitionLink).toBeInTheDocument()
    expect(coalitionLink.closest("a")).toHaveAttribute(
        "href",
        "/parties/coalition"
    )
})
