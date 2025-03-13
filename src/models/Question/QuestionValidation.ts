import { z } from "zod";
import { CreateQuestion, CreateQuestionBoolean, UpdateQuestion, UpdateQuestionBoolean } from "./Question";
import { mustBeInteger, mustBeNumber, mustBeString, requiredField } from "../ValidationConstants";

export const CreateQuestionSchema: z.ZodType<CreateQuestion> = z.object({
    categoryId: z.number({ required_error: mustBeNumber }).int(mustBeInteger).min(1, requiredField),
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.date({ required_error: requiredField }),
    deactivateDate: z.date({ required_error: requiredField })
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o ugal que el dia de finalización", path: ["deactivateDate"]
});

export const CreateQuestionBooleanSchema: z.ZodType<CreateQuestionBoolean> = z.object({
    categoryId: z.number({ required_error: mustBeNumber }).int(mustBeInteger).min(1, requiredField),
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.date({ required_error: requiredField }),
    deactivateDate: z.date({ required_error: requiredField }),

    positiveAnswerLimit: z.number({ required_error: mustBeNumber }).int(mustBeInteger).min(1, requiredField),

    positiveContent: z.string({ required_error: requiredField }).min(1, requiredField),
    negativeContent: z.string({ required_error: requiredField }).min(1, requiredField)
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o ugal que el dia de finalización", path: ["deactivateDate"]
});

export const UpdateQuestionSchema: z.ZodType<UpdateQuestion> = z.object({
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.date({ required_error: requiredField }),
    deactivateDate: z.date({ required_error: requiredField }),
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o ugal que el dia de finalización", path: ["deactivateDate"]
});

export const UpdateQuestionBooleanSchema: z.ZodType<UpdateQuestionBoolean> = z.object({
    questionContent: z.string({ required_error: requiredField }).min(1, requiredField),

    activeDate: z.date({ required_error: requiredField }),
    deactivateDate: z.date({ required_error: requiredField }),

    positiveAnswerLimit: z.number({ required_error: mustBeNumber }).int(mustBeInteger).min(1, requiredField),

    positiveContent: z.string({ required_error: requiredField }).min(1, requiredField),
    negativeContent: z.string({ required_error: requiredField }).min(1, requiredField)
}).refine(schema => {
    return schema.activeDate.getTime() < schema.deactivateDate.getTime();
}, {
    message: "El dia de inicio no puede ser mayor o ugal que el dia de finalización", path: ["deactivateDate"]
});