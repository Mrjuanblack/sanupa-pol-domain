"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionBooleanSchema = exports.UpdateQuestionSchema = exports.CreateQuestionBooleanSchema = exports.CreateQuestionSchema = void 0;
const zod_1 = require("zod");
const Question_1 = require("./Question");
const ValidationConstants_1 = require("../ValidationConstants");
const Category_1 = require("../Category/Category");
exports.CreateQuestionSchema = zod_1.z.object({
    questionType: zod_1.z.union([
        zod_1.z.literal(Question_1.QuestionType.MultipleAnswers),
        zod_1.z.literal(Question_1.QuestionType.SingleAnswer)
    ], { required_error: 'Solo se permite Respuesta múltiple o Respuesta singular' }),
    allowUserProposals: zod_1.z.boolean(),
    categoryId: zod_1.z.nativeEnum(Category_1.Category),
    questionContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField),
    activeDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField }),
    deactivateDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField })
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});
exports.CreateQuestionBooleanSchema = zod_1.z.object({
    categoryId: zod_1.z.nativeEnum(Category_1.Category),
    questionContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField),
    activeDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField }),
    deactivateDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField }),
    positiveAnswerLimit: zod_1.z.number({ required_error: ValidationConstants_1.mustBeNumber }).int(ValidationConstants_1.mustBeInteger).min(1, ValidationConstants_1.requiredField),
    positiveContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField),
    negativeContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField)
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});
exports.UpdateQuestionSchema = zod_1.z.object({
    allowUserProposals: zod_1.z.boolean(),
    questionContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField),
    activeDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField }),
    deactivateDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField }),
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});
exports.UpdateQuestionBooleanSchema = zod_1.z.object({
    questionContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField),
    activeDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField }),
    deactivateDate: zod_1.z.coerce.date({ required_error: ValidationConstants_1.requiredField }),
    positiveAnswerLimit: zod_1.z.number({ required_error: ValidationConstants_1.mustBeNumber }).int(ValidationConstants_1.mustBeInteger).min(1, ValidationConstants_1.requiredField),
    positiveContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField),
    negativeContent: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, ValidationConstants_1.requiredField)
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});
