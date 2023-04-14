import { IFaq } from "../../data/faqList/faqList.types"

export interface FaqListProps {
    faqList: IFaq[]
    activeIndex: number | null
    onQuestionClick: (index: number) => void
}
