import { z } from "zod";
import { CCType, CreateUserRequest, LoginRequest, UpdateIdentificationRequest, UpdateNameRequest, UpdatePasswordRequest, UpdatePhoneNumberRequest } from "./User";
import { requiredField } from "../ValidationConstants";

export const CreateUserRequestSchema: z.ZodType<CreateUserRequest> = z.object({
    name: z.string({ required_error: requiredField }).min(1, { message: requiredField }),
    phone: z.string({ required_error: requiredField }).min(1, { message: requiredField }),
    ccType: z.nativeEnum(CCType),
    cc: z.string({ required_error: requiredField }).min(1, { message: requiredField }),
    password: z.string({ required_error: requiredField }).min(1, { message: requiredField })
});

export const UpdateNameRequestSchema: z.ZodType<UpdateNameRequest> = z.object({
    name: z.string({ required_error: requiredField }).min(1, { message: requiredField })
});

export const UpdatePasswordRequestSchema: z.ZodType<UpdatePasswordRequest> = z.object({
    oldPassword: z.string({ required_error: requiredField }).min(1, { message: requiredField }),
    password: z.string({ required_error: requiredField }).min(1, { message: requiredField }),
});

export const UpdatePhoneNumberRequestSchema: z.ZodType<UpdatePhoneNumberRequest> = z.object({
    phoneNumber: z.string({ required_error: requiredField }).min(1, { message: requiredField })
});

export const UpdateIdentificationRequestSchema: z.ZodType<UpdateIdentificationRequest> = z.object({
    ccType: z.nativeEnum(CCType),
    cc: z.string({ required_error: requiredField }).min(1, { message: requiredField })
});

export const LoginRequestSchema: z.ZodType<LoginRequest> = z.object({
    phoneNumber: z.string({ required_error: requiredField }).min(1, { message: requiredField }),
    password: z.string({ required_error: requiredField }).min(1, { message: requiredField })
})