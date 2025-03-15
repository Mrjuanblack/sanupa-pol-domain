import { AnswerBooleanEntity, AnswerEntity } from "../Answer/Answer";
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
    allowUserProposals: boolean
    questionType: QuestionType.SingleAnswer
}

export interface QuestionMultiple extends QuestionBase {
    allowUserProposals: boolean
    questionType: QuestionType.MultipleAnswers
}

export class QuestionMultipleEntity implements QuestionMultiple {
    questionType: QuestionType.MultipleAnswers
    constructor(
        public id: number,
        public allowUserProposals: boolean,
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
        allowUserProposals: boolean,
        categoryId: number,
        questionContent: string,
        activeDate: Date,
        deactivateDate: Date,
        questionItems: QuestionItemEntity[],
        answers: AnswerEntity[]
    ) {
        super(id, allowUserProposals, categoryId, questionContent, activeDate, deactivateDate)
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
        public allowUserProposals: boolean,
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
    answer: AnswerEntity | null
    constructor(
        id: number,
        allowUserProposals: boolean,
        categoryId: number,
        questionContent: string,
        activeDate: Date,
        deactivateDate: Date,
        questionItems: QuestionItemEntity[],
        answer: AnswerEntity | null
    ) {
        super(id, allowUserProposals, categoryId, questionContent, activeDate, deactivateDate)
        this.questionItems = questionItems;
        this.answer = answer;
    }
}

export class QuestionBooleanEntity implements QuestionBoolean {
    questionType: QuestionType.Boolean
    answer: AnswerBooleanEntity | null
    positiveVotes: number
    negativeVotes: number
    constructor(
        public id: number,
        public categoryId: number,
        public questionContent: string,
        public activeDate: Date,
        public deactivateDate: Date,
        public positiveAnswerLimit: number,
        public positiveContent: string,
        public negativeContent: string,
        positiveVotes: number,
        negativeVotes: number,
        answer: AnswerBooleanEntity | null
    ) {
        this.questionType = QuestionType.Boolean;
        this.positiveVotes = positiveVotes;
        this.negativeVotes = negativeVotes;
        this.answer = answer;
    }
}

export interface HistoricQuestionItem {
    questionId: number
    content: string
    votes: number
}

export class HistoricQuestionItemEntity implements HistoricQuestionItem {
    constructor(
        public questionId: number,
        public content: string,
        public votes: number
    ) { }

}

export interface HistoricQuestion {
    id: number
    content: string
    totalVotes: number
    items: HistoricQuestionItem[]
}

export class HistoricQuestionEntity implements HistoricQuestion {
    constructor(
        public id: number,
        public content: string,
        public totalVotes: number,
        public items: HistoricQuestionItem[]
    ) { }
}

export interface CreateQuestion {
    questionType: QuestionType.SingleAnswer | QuestionType.MultipleAnswers
    allowUserProposals: boolean
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
    allowUserProposals: boolean
    questionContent: string

    activeDate: Date
    deactivateDate: Date
}

export interface UpdateQuestionBoolean {
    questionContent: string

    activeDate: Date
    deactivateDate: Date
    positiveAnswerLimit: number

    positiveContent: string
    negativeContent: string
}