"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricQuestionEntity = exports.HistoricQuestionItemEntity = exports.QuestionBooleanEntity = exports.Question_AnswersEntity = exports.QuestionEntity = exports.QuestionMultiple_AnswersEntity = exports.QuestionMultipleEntity = exports.QuestionTypeList = exports.QuestionType = void 0;
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
class QuestionMultiple_AnswersEntity extends QuestionMultipleEntity {
    constructor(id, categoryId, questionContent, activeDate, deactivateDate, questionItems, answers) {
        super(id, categoryId, questionContent, activeDate, deactivateDate);
        this.questionItems = questionItems;
        this.answers = answers;
    }
}
exports.QuestionMultiple_AnswersEntity = QuestionMultiple_AnswersEntity;
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
class Question_AnswersEntity extends QuestionEntity {
    constructor(id, categoryId, questionContent, activeDate, deactivateDate, questionItems, answer) {
        super(id, categoryId, questionContent, activeDate, deactivateDate);
        this.questionItems = questionItems;
        this.answer = answer;
    }
}
exports.Question_AnswersEntity = Question_AnswersEntity;
class QuestionBooleanEntity {
    constructor(id, categoryId, questionContent, activeDate, deactivateDate, positiveAnswerLimit, positiveContent, negativeContent, answer) {
        this.id = id;
        this.categoryId = categoryId;
        this.questionContent = questionContent;
        this.activeDate = activeDate;
        this.deactivateDate = deactivateDate;
        this.positiveAnswerLimit = positiveAnswerLimit;
        this.positiveContent = positiveContent;
        this.negativeContent = negativeContent;
        this.questionType = QuestionType.Boolean;
        this.answer = answer;
    }
}
exports.QuestionBooleanEntity = QuestionBooleanEntity;
class HistoricQuestionItemEntity {
    constructor(questionId, content, votes) {
        this.questionId = questionId;
        this.content = content;
        this.votes = votes;
    }
}
exports.HistoricQuestionItemEntity = HistoricQuestionItemEntity;
class HistoricQuestionEntity {
    constructor(id, content, totalVotes, items) {
        this.id = id;
        this.content = content;
        this.totalVotes = totalVotes;
        this.items = items;
    }
}
exports.HistoricQuestionEntity = HistoricQuestionEntity;
