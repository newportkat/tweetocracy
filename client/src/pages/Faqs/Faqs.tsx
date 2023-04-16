import React, { FC, useState } from "react"
import Down from "../../assets/svgFunctions/Down"
import Up from "../../assets/svgFunctions/Up"
import { faqList } from "../../data/faqList/faqList"
import { IFaq } from "../../data/faqList/faqList.d"
import { FaqListProps } from "./Faqs.types"

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const onQuestionClick = (index: number): void => {
        if (index === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    return (
        <div>
            <p className="w-full bg-gray-800 p-6 text-center font-extrabold tracking-widest text-white">
                FAQs
            </p>
            <div className="flex flex-col items-center justify-center gap-8 p-8">
                {faqList.map((faq: IFaq, index: number) => (
                    <div className="border-b" key={index}>
                        <div
                            className="flex cursor-pointer items-center justify-center gap-4"
                            role="button"
                            tabIndex={0}
                            onClick={() => onQuestionClick(index)}
                            onKeyDown={(e) => {
                                if (e.key === " ") {
                                    e.preventDefault()
                                    onQuestionClick(index)
                                }
                            }}
                            aria-expanded={activeIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <h3 className="text-lg font-medium">
                                {faq.question}
                            </h3>
                            {activeIndex === index ? (
                                <Up className="h-6 w-6" />
                            ) : (
                                <Down className="h-6 w-6" />
                            )}
                        </div>
                        <p
                            className={`mt-4 max-w-5xl leading-9 ${
                                activeIndex === index ? "flex" : "hidden"
                            }`}
                            id={`faq-answer-${index}`}
                            aria-labelledby={`faq-question-${index}`}
                        >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs
