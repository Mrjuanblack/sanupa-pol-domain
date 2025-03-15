export interface Answer {
    userId: number
    questionItemId: number
    votes: number
}

export interface AnswerBoolean {
    userId: number
    questionId: number
    value: boolean
    votes: number
}

export class AnswerEntity implements Answer {
    constructor(
        public userId: number,
        public questionItemId: number,
        public votes: number,
    ) { }
}

export class AnswerBooleanEntity implements AnswerBoolean {
    constructor(
        public userId: number,
        public questionId: number,
        public value: boolean,
        public votes: number
    ) { }
}