import React from "react"

const HamburgerMenu = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            fill="none"
            viewBox="0 0 24 24"
            className={props.className}
        >
            <path
                fill="#1f2937"
                fillRule="evenodd"
                d="M4 5a1 1 0 000 2h16a1 1 0 100-2H4zm-1 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

export default HamburgerMenu
