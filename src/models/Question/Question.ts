interface QuestionBase {
    id: number
    categoryId: number
    questionContent: string

    activeDate: Date
    deactivateDate: Date
}

export interface Question extends QuestionBase {
    isBooleanQuestion: false
}

export interface QuestionBoolean extends QuestionBase {
    isBooleanQuestion: true

    positiveAnswerLimit: number

    positiveContent: string
    negativeContent: string
}

export class QuestionEntity implements Question {
    isBooleanQuestion: false

    constructor(
        public id: number,
        public categoryId: number,
        public questionContent: string,
        public activeDate: Date,
        public deactivateDate: Date
    ) {
        this.isBooleanQuestion = false
    }

}

export class QuestionBooleanEntity implements QuestionBoolean {
    isBooleanQuestion: true

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
        this.isBooleanQuestion = true
    }
}

interface CreateQuestionBase {
    categoryId: number
    questionContent: string

    activeDate: Date
    deactivateDate: Date
}

export interface CreateQuestion extends CreateQuestionBase {

}

export interface CreateQuestionBoolean extends CreateQuestionBase {
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