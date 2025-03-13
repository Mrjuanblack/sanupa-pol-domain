import { z } from "zod";
import { CCType, CreateUserRequest, LoginRequest, UpdateIdentificationRequest, UpdateNameRequest, UpdatePasswordRequest, UpdatePhoneNumberRequest } from "./User.js";
import { requiredField } from "../ValidationConstants.js";

export const CreateUserRequestSchema: z.ZodType<CreateUserRequest> = z.object({
    name: z.string().nonempty(requiredField),
    phone: z.string().nonempty(requiredField),
    ccType: z.nativeEnum(CCType),
    cc: z.string().nonempty(requiredField),
    password: z.string().nonempty(requiredField)
});

export const UpdateNameRequestSchema: z.ZodType<UpdateNameRequest> = z.object({
    name: z.string().nonempty(requiredField)
});

export const UpdatePasswordRequestSchema: z.ZodType<UpdatePasswordRequest> = z.object({
    oldPassword: z.string().nonempty(requiredField),
    password: z.string().nonempty(requiredField),
});

export const UpdatePhoneNumberRequestSchema: z.ZodType<UpdatePhoneNumberRequest> = z.object({
    phoneNumber: z.string().nonempty(requiredField)
});

export const UpdateIdentificationRequestSchema: z.ZodType<UpdateIdentificationRequest> = z.object({
    ccType: z.nativeEnum(CCType),
    cc: z.string().nonempty(requiredField)
});

export const LoginRequestSchema: z.ZodType<LoginRequest> = z.object({
    phoneNumber: z.string().nonempty(requiredField),
    password: z.string().nonempty(requiredField)
})