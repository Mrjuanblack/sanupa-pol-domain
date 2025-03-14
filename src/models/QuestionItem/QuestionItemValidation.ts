import { z } from "zod";
import { CreateQuestionItem, UpdateQuestionItem } from "./QuestionItem";
import { mustBeNumber, mustBeInteger, requiredField } from "../ValidationConstants";

export const CreateQuestionItemSchema: z.ZodType<CreateQuestionItem> = z.object({
    questionId: z.number({ required_error: mustBeNumber }).int(mustBeInteger).min(1, requiredField),
    itemContent: z.string({ required_error: requiredField }).min(1, { message: requiredField }),
})

export const UpdateQuestionItemSchema: z.ZodType<UpdateQuestionItem> = z.object({
    itemContent: z.string({ required_error: requiredField }).min(1, { message: requiredField })
})