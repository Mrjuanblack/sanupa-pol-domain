"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionItemSchema = exports.CreateQuestionItemSchema = void 0;
const zod_1 = require("zod");
const ValidationConstants_1 = require("../ValidationConstants");
exports.CreateQuestionItemSchema = zod_1.z.object({
    questionId: zod_1.z.number({ required_error: ValidationConstants_1.mustBeNumber }).int(ValidationConstants_1.mustBeInteger).min(1, ValidationConstants_1.requiredField),
    itemContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField }),
});
exports.UpdateQuestionItemSchema = zod_1.z.object({
    itemContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField })
});
