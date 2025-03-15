import { SimpleUser } from "../User/User"

export interface QuestionItem {
    id: number
    creator: SimpleUser
    questionId: number
    votesCount: number

    itemContent: string
}

export class QuestionItemEntity implements QuestionItem {
    constructor(
        public id: number,
        public creator: SimpleUser,
        public questionId: number,
        public votesCount: number,
        public itemContent: string,
    ) { }
}

export interface CreateQuestionItem {
    questionId: number
    itemContent: string
}

export interface UpdateQuestionItem {
    itemContent: string
}