"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionBooleanEntity = exports.QuestionEntity = exports.QuestionMultipleEntity = exports.QuestionType = void 0;
var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["Boolean"] = 1] = "Boolean";
    QuestionType[QuestionType["MultipleAnswers"] = 2] = "MultipleAnswers";
    QuestionType[QuestionType["SingleAnswer"] = 3] = "SingleAnswer";
})(QuestionType || (exports.QuestionType = QuestionType = {}));
class QuestionMultipleEntity {
    constructor(id, categoryId, questionContent, activeDate, deactivateDate) {
        this.id = id;
        this.categoryId = categoryId;
        this.questionContent = questionContent;
        this.activeDate = activeDate;
        this.deactivateDate = deactivateDate;
        this.questionType = QuestionType.MultipleAnswers;
    }
}
exports.QuestionMultipleEntity = QuestionMultipleEntity;
class QuestionEntity {
    constructor(id, categoryId, questionContent, activeDate, deactivateDate) {
        this.id = id;
        this.categoryId = categoryId;
        this.questionContent = questionContent;
        this.activeDate = activeDate;
        this.deactivateDate = deactivateDate;
        this.questionType = QuestionType.SingleAnswer;
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
        this.questionType = QuestionType.Boolean;
    }
}
exports.QuestionBooleanEntity = QuestionBooleanEntity;
