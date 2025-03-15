import { z } from "zod";
import { CreateQuestion, CreateQuestionBoolean, QuestionType, UpdateQuestion, UpdateQuestionBoolean } from "./Question";
import { mustBeInteger, mustBeNumber, mustBeString, requiredField } from "../ValidationConstants";
import { Category } from "../Category/Category";

export const CreateQuestionSchema: z.ZodType<CreateQuestion> = z.object({
    questionType: z.union([
        z.literal(QuestionType.MultipleAnswers),
        z.literal(QuestionType.SingleAnswer)
    ], { required_error: 'Solo se permite Respuesta múltiple o Respuesta singular' }),
    allowUserProposals: z.boolean(),
    categoryId: z.nativeEnum(Category),
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.coerce.date({ required_error: requiredField }),
    deactivateDate: z.coerce.date({ required_error: requiredField })
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});

export const CreateQuestionBooleanSchema: z.ZodType<CreateQuestionBoolean> = z.object({
    categoryId: z.nativeEnum(Category),
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.coerce.date({ required_error: requiredField }),
    deactivateDate: z.coerce.date({ required_error: requiredField }),

    positiveAnswerLimit: z.number({ required_error: mustBeNumber }).int(mustBeInteger).min(1, requiredField),

    positiveContent: z.string({ required_error: requiredField }).min(1, requiredField),
    negativeContent: z.string({ required_error: requiredField }).min(1, requiredField)
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});

export const UpdateQuestionSchema: z.ZodType<UpdateQuestion> = z.object({
    allowUserProposals: z.boolean(),
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.coerce.date({ required_error: requiredField }),
    deactivateDate: z.coerce.date({ required_error: requiredField }),
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});

export const UpdateQuestionBooleanSchema: z.ZodType<UpdateQuestionBoolean> = z.object({
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.coerce.date({ required_error: requiredField }),
    deactivateDate: z.coerce.date({ required_error: requiredField }),

    positiveAnswerLimit: z.number({ required_error: mustBeNumber }).int(mustBeInteger).min(1, requiredField),

    positiveContent: z.string({ required_error: requiredField }).min(1, requiredField),
    negativeContent: z.string({ required_error: requiredField }).min(1, requiredField)
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o igual que el dia de finalización", path: ["deactivateDate"]
});