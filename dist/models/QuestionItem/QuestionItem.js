"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionItemEntity = void 0;
class QuestionItemEntity {
    constructor(id, questionId, itemContent, isOpen) {
        this.id = id;
        this.questionId = questionId;
        this.itemContent = itemContent;
        this.isOpen = isOpen;
    }
}
exports.QuestionItemEntity = QuestionItemEntity;
