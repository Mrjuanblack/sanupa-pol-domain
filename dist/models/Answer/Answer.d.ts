export interface Answer {
    userId: number;
    questionItemId: number;
    votes: number;
}
export interface AnswerBoolean {
    userId: number;
    questionId: number;
    value: boolean;
    votes: number;
}
export declare class AnswerEntity implements Answer {
    userId: number;
    questionItemId: number;
    votes: number;
    constructor(userId: number, questionItemId: number, votes: number);
}
export declare class AnswerBooleanEntity implements AnswerBoolean {
    userId: number;
    questionId: number;
    value: boolean;
    votes: number;
    constructor(userId: number, questionId: number, value: boolean, votes: number);
}
