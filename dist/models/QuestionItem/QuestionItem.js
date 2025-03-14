"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionItemEntity = void 0;
class QuestionItemEntity {
    constructor(id, creator, questionId, itemContent) {
        this.id = id;
        this.creator = creator;
        this.questionId = questionId;
        this.itemContent = itemContent;
    }
}
exports.QuestionItemEntity = QuestionItemEntity;
