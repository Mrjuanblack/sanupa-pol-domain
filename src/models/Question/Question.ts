import { AnswerEntity } from "../Answer/Answer";
import { QuestionItemEntity } from "../QuestionItem/QuestionItem";

export enum QuestionType {
    Boolean = 1,
    MultipleAnswers = 2,
    SingleAnswer = 3
}
export const QuestionTypeList = Object.values(QuestionType).filter(value => typeof value === 'number');
export function getQuestionTypeString(category: QuestionType): string {
    switch (category) {
        case QuestionType.Boolean:
            return "Booleana";
        case QuestionType.MultipleAnswers:
            return "Múltiple";
        case QuestionType.SingleAnswer:
            return "Única";
    }
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

export class QuestionMultiple_AnswersEntity extends QuestionMultipleEntity {
    questionItems: QuestionItemEntity[];
    answers: AnswerEntity[]
    constructor(
        id: number,
        categoryId: number,
        questionContent: string,
        activeDate: Date,
        deactivateDate: Date,
        questionItems: QuestionItemEntity[],
        answers: AnswerEntity[]
    ) {
        super(id, categoryId, questionContent, activeDate, deactivateDate)
        this.questionItems = questionItems;
        this.answers = answers;
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

export class Question_AnswersEntity extends QuestionEntity {
    questionItems: QuestionItemEntity[];
    answer: AnswerEntity
    constructor(
        id: number,
        categoryId: number,
        questionContent: string,
        activeDate: Date,
        deactivateDate: Date,
        questionItems: QuestionItemEntity[],
        answer: AnswerEntity
    ) {
        super(id, categoryId, questionContent, activeDate, deactivateDate)
        this.questionItems = questionItems;
        this.answer = answer;
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