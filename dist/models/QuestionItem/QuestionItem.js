"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionItemEntity = void 0;
class QuestionItemEntity {
    constructor(id, creator, questionId, votesCount, itemContent) {
        this.id = id;
        this.creator = creator;
        this.questionId = questionId;
        this.votesCount = votesCount;
        this.itemContent = itemContent;
    }
}
exports.QuestionItemEntity = QuestionItemEntity;
