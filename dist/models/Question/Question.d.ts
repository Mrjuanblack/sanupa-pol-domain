import { AnswerBooleanEntity, AnswerEntity } from "../Answer/Answer";
import { QuestionItemEntity } from "../QuestionItem/QuestionItem";
export declare enum QuestionType {
    Boolean = 1,
    MultipleAnswers = 2,
    SingleAnswer = 3
}
export declare const QuestionTypeList: QuestionType[];
export declare function getQuestionTypeString(category: QuestionType): string;
interface QuestionBase {
    id: number;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export interface Question extends QuestionBase {
    allowUserProposals: boolean;
    questionType: QuestionType.SingleAnswer;
}
export interface QuestionMultiple extends QuestionBase {
    allowUserProposals: boolean;
    questionType: QuestionType.MultipleAnswers;
}
export declare class QuestionMultipleEntity implements QuestionMultiple {
    id: number;
    allowUserProposals: boolean;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
    questionType: QuestionType.MultipleAnswers;
    constructor(id: number, allowUserProposals: boolean, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date);
}
export declare class QuestionMultiple_AnswersEntity extends QuestionMultipleEntity {
    questionItems: QuestionItemEntity[];
    answers: AnswerEntity[];
    constructor(id: number, allowUserProposals: boolean, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date, questionItems: QuestionItemEntity[], answers: AnswerEntity[]);
}
export interface QuestionBoolean extends QuestionBase {
    questionType: QuestionType.Boolean;
    positiveAnswerLimit: number;
    positiveContent: string;
    negativeContent: string;
}
export declare class QuestionEntity implements Question {
    id: number;
    allowUserProposals: boolean;
    categoryId: number;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
    questionType: QuestionType.SingleAnswer;
    constructor(id: number, allowUserProposals: boolean, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date);
}
export declare class Question_AnswersEntity extends QuestionEntity {
    questionItems: QuestionItemEntity[];
    answer: AnswerEntity | null;
    constructor(id: number, allowUserProposals: boolean, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date, questionItems: QuestionItemEntity[], answer: AnswerEntity | null);
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
    answer: AnswerBooleanEntity | null;
    positiveVotes: number;
    negativeVotes: number;
    constructor(id: number, categoryId: number, questionContent: string, activeDate: Date, deactivateDate: Date, positiveAnswerLimit: number, positiveContent: string, negativeContent: string, positiveVotes: number, negativeVotes: number, answer: AnswerBooleanEntity | null);
}
export interface HistoricQuestionItem {
    questionId: number;
    content: string;
    votes: number;
}
export declare class HistoricQuestionItemEntity implements HistoricQuestionItem {
    questionId: number;
    content: string;
    votes: number;
    constructor(questionId: number, content: string, votes: number);
}
export interface HistoricQuestion {
    id: number;
    content: string;
    totalVotes: number;
    items: HistoricQuestionItem[];
}
export declare class HistoricQuestionEntity implements HistoricQuestion {
    id: number;
    content: string;
    totalVotes: number;
    items: HistoricQuestionItem[];
    constructor(id: number, content: string, totalVotes: number, items: HistoricQuestionItem[]);
}
export interface CreateQuestion {
    questionType: QuestionType.SingleAnswer | QuestionType.MultipleAnswers;
    allowUserProposals: boolean;
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
    allowUserProposals: boolean;
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
}
export interface UpdateQuestionBoolean {
    questionContent: string;
    activeDate: Date;
    deactivateDate: Date;
    positiveAnswerLimit: number;
    positiveContent: string;
    negativeContent: string;
}
export {};
