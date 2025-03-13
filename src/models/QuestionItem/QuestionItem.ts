export interface QuestionItem {
    id: number
    questionId: number

    itemContent: string
    isOpen: boolean
}

export class QuestionItemEntity {
    constructor(
        public id: number,
        public questionId: number,
        public itemContent: string,
        public isOpen: boolean
    ) { }
}

export interface CreateQuestionItem {
    questionId: number
    itemContent: string
    isOpen: boolean
}

export interface UpdateQuestionItem {
    itemContent: string
    isOpen: boolean
}