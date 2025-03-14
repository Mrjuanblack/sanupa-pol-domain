export declare enum QuestionType {
    Boolean = 1,
    MultipleAnswers = 2,
    SingleAnswer = 3
}
interface QuestionBase {
    id: number;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export interface Question extends QuestionBase {
    questionType: QuestionType.SingleAnswer;
}
export interface QuestionMultiple extends QuestionBase {
    questionType: QuestionType.MultipleAnswers;
}
export declare class QuestionMultipleEntity implements QuestionMultiple {
    id: number;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
    questionType: QuestionType.MultipleAnswers;
    constructor(id: number, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date);
}
export interface QuestionBoolean extends QuestionBase {
    questionType: QuestionType.Boolean;
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
    questionType: QuestionType.SingleAnswer;
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
    questionType: QuestionType.Boolean;
    constructor(id: number, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date, positiveAnswerLimit: number, positiveContent: string, negativeContent: string);
}
export interface CreateQuestion {
    questionType: QuestionType.SingleAnswer | QuestionType.MultipleAnswers;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export interface CreateQuestionBoolean {
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
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
