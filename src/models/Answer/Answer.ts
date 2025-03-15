export interface Answer {
    userId: number
    questionItemId: number
}

export interface AnswerBoolean {
    userId: number
    questionId: number
    value: boolean
}

export class AnswerEntity implements Answer {
    constructor(
        public userId: number,
        public questionItemId: number,
    ) { }
}

export class AnswerBooleanEntity implements AnswerBoolean {
    constructor(
        public userId: number,
        public questionId: number,
        public value: boolean
    ) { }
}