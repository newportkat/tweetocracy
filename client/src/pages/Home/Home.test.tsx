import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"

test("renders the Home component", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )

    const title = screen.getByText(
        /In politics, the early bird might get the worm, but the loudest bird gets the retweets\./i
    )
    expect(title).toBeInTheDocument()

    const exploreButton = screen.getByText(/EXPLORE TWEETS/i)
    expect(exploreButton).toBeInTheDocument()

    userEvent.click(exploreButton)
    expect(window.location.pathname).toBe("/parties")
})
