"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionBooleanEntity = exports.QuestionEntity = void 0;
class QuestionEntity {
    constructor(id, categoryId, questionContent, activeDate, deactivateDate) {
        this.id = id;
        this.categoryId = categoryId;
        this.questionContent = questionContent;
        this.activeDate = activeDate;
        this.deactivateDate = deactivateDate;
        this.isBooleanQuestion = true;
    }
}
exports.QuestionEntity = QuestionEntity;
class QuestionBooleanEntity {
    constructor(id, categoryId, questionContent, activeDate, deactivateDate, positiveAnswerLimit, positiveContent, negativeContent) {
        this.id = id;
        this.categoryId = categoryId;
        this.questionContent = questionContent;
        this.activeDate = activeDate;
        this.deactivateDate = deactivateDate;
        this.positiveAnswerLimit = positiveAnswerLimit;
        this.positiveContent = positiveContent;
        this.negativeContent = negativeContent;
        this.isBooleanQuestion = false;
    }
}
exports.QuestionBooleanEntity = QuestionBooleanEntity;
