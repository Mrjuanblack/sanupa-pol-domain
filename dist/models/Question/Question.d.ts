interface QuestionBase {
    id: number;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export interface Question extends QuestionBase {
    isBooleanQuestion: true;
}
export interface QuestionBoolean extends QuestionBase {
    isBooleanQuestion: false;
    positiveAnswerLimit: number;
    positiveContent: string;
    negativeContent: string;
}
export declare class QuestionEntity implements Question {
    id: number;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
    isBooleanQuestion: true;
    constructor(id: number, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date);
}
export declare class QuestionBooleanEntity implements QuestionBoolean {
    id: number;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
    positiveAnswerLimit: number;
    positiveContent: string;
    negativeContent: string;
    isBooleanQuestion: false;
    constructor(id: number, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date, positiveAnswerLimit: number, positiveContent: string, negativeContent: string);
}
interface CreateQuestionBase {
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export interface CreateQuestion extends CreateQuestionBase {
}
export interface CreateQuestionBoolean extends CreateQuestionBase {
    positiveAnswerLimit: number;
    positiveContent: string;
    negativeContent: string;
}
export interface UpdateQuestion {
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export {};
