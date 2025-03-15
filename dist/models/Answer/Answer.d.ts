export interface Answer {
    userId: number;
    questionItemId: number;
}
export interface AnswerBoolean {
    userId: number;
    questionId: number;
    value: boolean;
}
export declare class AnswerEntity implements Answer {
    userId: number;
    questionItemId: number;
    constructor(userId: number, questionItemId: number);
}
export declare class AnswerBooleanEntity implements AnswerBoolean {
    userId: number;
    questionId: number;
    value: boolean;
    constructor(userId: number, questionId: number, value: boolean);
}
