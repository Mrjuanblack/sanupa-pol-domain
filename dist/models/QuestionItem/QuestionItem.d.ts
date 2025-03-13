export interface QuestionItem {
    id: number;
    questionId: number;
    itemContent: string;
    isOpen: boolean;
}
export declare class QuestionItemEntity {
    id: number;
    questionId: number;
    itemContent: string;
    isOpen: boolean;
    constructor(id: number, questionId: number, itemContent: string, isOpen: boolean);
}
export interface CreateQuestionItem {
    questionId: number;
    itemContent: string;
    isOpen: boolean;
}
export interface UpdateQuestionItem {
    itemContent: string;
    isOpen: boolean;
}
