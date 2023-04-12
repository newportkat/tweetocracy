import React, { useState } from "react"
import Down from "../assets/svgFunctions/Down"
import Up from "../assets/svgFunctions/Up"

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const onQuestionClick = (index) => {
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
            <div>
                <div className="border-b">
                    <div
                        className="flex cursor-pointer items-center justify-between"
                        onClick={() => onQuestionClick(0)}
                    >
                        <h3 className="text-lg font-medium">Question 1</h3>
                        {activeIndex === 0 ? (
                            <Up className="h-6 w-6" />
                        ) : (
                            <Down className="h-6 w-6" />
                        )}
                    </div>
                    <p
                        className={`mt-2 leading-relaxed ${
                            activeIndex === 0 ? "flex" : "hidden"
                        }`}
                    >
                        Answer 1
                    </p>
                </div>
                <div className="border-b">
                    <div
                        className="flex cursor-pointer items-center justify-between"
                        onClick={() => onQuestionClick(1)}
                    >
                        <h3 className="text-lg font-medium">Question 2</h3>
                        {activeIndex === 1 ? (
                            <Up className="h-6 w-6" />
                        ) : (
                            <Down className="h-6 w-6" />
                        )}
                    </div>
                    <p
                        className={`mt-2 leading-relaxed ${
                            activeIndex === 1 ? "flex" : "hidden"
                        }`}
                    >
                        Answer 2
                    </p>
                </div>

                <div className="border-b">
                    <div
                        className="flex cursor-pointer items-center justify-between"
                        onClick={() => onQuestionClick(2)}
                    >
                        <h3 className="text-lg font-medium">Question 3</h3>
                        {activeIndex === 2 ? (
                            <Up className="h-6 w-6" />
                        ) : (
                            <Down className="h-6 w-6" />
                        )}
                    </div>
                    <p
                        className={`mt-2 leading-relaxed ${
                            activeIndex === 2 ? "flex" : "hidden"
                        }`}
                    >
                        Answer 3
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faqs
