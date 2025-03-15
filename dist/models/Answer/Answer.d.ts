interface AnswerBase {
    userId: number;
    questionItemId: number;
}
export interface Answer extends AnswerBase {
}
export interface AnswerBoolean extends AnswerBase {
    value: boolean;
}
export declare class AnswerEntity implements Answer {
    userId: number;
    questionItemId: number;
    constructor(userId: number, questionItemId: number);
}
export declare class AnswerBooleanEntity implements AnswerBoolean {
    userId: number;
    questionItemId: number;
    value: boolean;
    constructor(userId: number, questionItemId: number, value: boolean);
}
export {};
