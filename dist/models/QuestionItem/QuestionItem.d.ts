import { SimpleUser } from "../User/User";
export interface QuestionItem {
    id: number;
    creator: SimpleUser;
    questionId: number;
    votesCount: number;
    itemContent: string;
}
export declare class QuestionItemEntity implements QuestionItem {
    id: number;
    creator: SimpleUser;
    questionId: number;
    votesCount: number;
    itemContent: string;
    constructor(id: number, creator: SimpleUser, questionId: number, votesCount: number, itemContent: string);
}
export interface CreateQuestionItem {
    questionId: number;
    itemContent: string;
}
export interface UpdateQuestionItem {
    itemContent: string;
}
