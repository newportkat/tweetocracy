import React, { useState } from "react"
import { faqList } from "../data/faqList"

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const onQuestionClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    const renderedFaqList = faqList.map((faq, index) => {
        const active = index === activeIndex ? "block" : "hidden"

        return (
            <div className="border-b py-4" key={index}>
                <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => onQuestionClick(index)}
                >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <span className="ml-2">
                        {active === "block" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </span>
                </div>
                <p className={`mt-2 leading-relaxed ${active}`}>{faq.answer}</p>
            </div>
        )
    })

    return <div className="faq-list">{renderedFaqList}</div>
}

export default Faqs
