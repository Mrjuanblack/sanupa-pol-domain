"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerBooleanEntity = exports.AnswerEntity = void 0;
class AnswerEntity {
    constructor(userId, questionItemId) {
        this.userId = userId;
        this.questionItemId = questionItemId;
    }
}
exports.AnswerEntity = AnswerEntity;
class AnswerBooleanEntity {
    constructor(userId, questionId, value) {
        this.userId = userId;
        this.questionId = questionId;
        this.value = value;
    }
}
exports.AnswerBooleanEntity = AnswerBooleanEntity;
