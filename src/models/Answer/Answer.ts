interface AnswerBase {
    userId: number
    questionItemId: number
}

export interface Answer extends AnswerBase {

}

export interface AnswerBoolean extends AnswerBase {
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
        public questionItemId: number,
        public value: boolean
    ) { }
}