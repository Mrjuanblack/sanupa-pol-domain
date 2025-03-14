export enum QuestionType {
    Boolean = 1,
    MultipleAnswers = 2,
    SingleAnswer = 3
}

interface QuestionBase {
    id: number
    categoryId: number
    questionContent: string

    activeDate: Date
    deactivateDate: Date
}

export interface Question extends QuestionBase {
    questionType: QuestionType.SingleAnswer
}

export interface QuestionMultiple extends QuestionBase {
    questionType: QuestionType.MultipleAnswers
}

export class QuestionMultipleEntity implements QuestionMultiple {
    questionType: QuestionType.MultipleAnswers
    constructor(
        public id: number,
        public categoryId: number,
        public questionContent: string,
        public activeDate: Date,
        public deactivateDate: Date
    ) {
        this.questionType = QuestionType.MultipleAnswers;
    }
}

export interface QuestionBoolean extends QuestionBase {
    questionType: QuestionType.Boolean

    positiveAnswerLimit: number

    positiveContent: string
    negativeContent: string
}

export class QuestionEntity implements Question {
    questionType: QuestionType.SingleAnswer

    constructor(
        public id: number,
        public categoryId: number,
        public questionContent: string,
        public activeDate: Date,
        public deactivateDate: Date
    ) {
        this.questionType = QuestionType.SingleAnswer;
    }
}

export class QuestionBooleanEntity implements QuestionBoolean {
    questionType: QuestionType.Boolean

    constructor(
        public id: number,
        public categoryId: number,
        public questionContent: string,
        public activeDate: Date,
        public deactivateDate: Date,
        public positiveAnswerLimit: number,
        public positiveContent: string,
        public negativeContent: string,
    ) {
        this.questionType = QuestionType.Boolean;
    }
}

export interface CreateQuestion {
    questionType: QuestionType.SingleAnswer | QuestionType.MultipleAnswers
    categoryId: number
    questionContent: string

    activeDate: Date
    deactivateDate: Date
}

export interface CreateQuestionBoolean {
    categoryId: number
    questionContent: string

    activeDate: Date
    deactivateDate: Date

    positiveAnswerLimit: number

    positiveContent: string
    negativeContent: string
}

export interface UpdateQuestion {
    questionContent: string

    activeDate: Date
    deactivateDate: Date
}

export interface UpdateQuestionBoolean extends UpdateQuestion {
    positiveAnswerLimit: number

    positiveContent: string
    negativeContent: string
}