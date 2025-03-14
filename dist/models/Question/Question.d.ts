interface QuestionBase {
    id: number;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export interface Question extends QuestionBase {
    isBooleanQuestion: false;
}
export interface QuestionBoolean extends QuestionBase {
    isBooleanQuestion: true;
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
    isBooleanQuestion: false;
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
    isBooleanQuestion: true;
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
export interface UpdateQuestionBoolean extends UpdateQuestion {
    positiveAnswerLimit: number;
    positiveContent: string;
    negativeContent: string;
}
export {};
