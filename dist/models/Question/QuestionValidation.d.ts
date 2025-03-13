import { z } from "zod";
import { CreateQuestion, CreateQuestionBoolean, UpdateQuestion, UpdateQuestionBoolean } from "./Question";
export declare const CreateQuestionSchema: z.ZodType<CreateQuestion>;
export declare const CreateQuestionBooleanSchema: z.ZodType<CreateQuestionBoolean>;
export declare const UpdateQuestionSchema: z.ZodType<UpdateQuestion>;
export declare const UpdateQuestionBooleanSchema: z.ZodType<UpdateQuestionBoolean>;
