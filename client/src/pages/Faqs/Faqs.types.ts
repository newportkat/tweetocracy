import { IFaq } from "../../data/faqList/faqList.d"

export interface FaqListProps {
    faqList: IFaq[]
    activeIndex: number | null
    onQuestionClick: (index: number) => void
}
