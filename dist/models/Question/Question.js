"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionBooleanEntity = exports.QuestionEntity = exports.QuestionMultipleEntity = exports.QuestionTypeList = exports.QuestionType = void 0;
exports.getQuestionTypeString = getQuestionTypeString;
var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["Boolean"] = 1] = "Boolean";
    QuestionType[QuestionType["MultipleAnswers"] = 2] = "MultipleAnswers";
    QuestionType[QuestionType["SingleAnswer"] = 3] = "SingleAnswer";
})(QuestionType || (exports.QuestionType = QuestionType = {}));
exports.QuestionTypeList = Object.values(QuestionType).filter(value => typeof value === 'number');
function getQuestionTypeString(category) {
    switch (category) {
        case QuestionType.Boolean:
            return "Booleana";
        case QuestionType.MultipleAnswers:
            return "Múltiple";
        case QuestionType.SingleAnswer:
            return "Única";
    }
}
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
