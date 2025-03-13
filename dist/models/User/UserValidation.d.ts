import { z } from "zod";
import { CreateUserRequest, LoginRequest, UpdateIdentificationRequest, UpdateNameRequest, UpdatePasswordRequest, UpdatePhoneNumberRequest } from "./User.js";
export declare const CreateUserRequestSchema: z.ZodType<CreateUserRequest>;
export declare const UpdateNameRequestSchema: z.ZodType<UpdateNameRequest>;
export declare const UpdatePasswordRequestSchema: z.ZodType<UpdatePasswordRequest>;
export declare const UpdatePhoneNumberRequestSchema: z.ZodType<UpdatePhoneNumberRequest>;
export declare const UpdateIdentificationRequestSchema: z.ZodType<UpdateIdentificationRequest>;
export declare const LoginRequestSchema: z.ZodType<LoginRequest>;
