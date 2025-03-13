"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestSchema = exports.UpdateIdentificationRequestSchema = exports.UpdatePhoneNumberRequestSchema = exports.UpdatePasswordRequestSchema = exports.UpdateNameRequestSchema = exports.CreateUserRequestSchema = void 0;
const zod_1 = require("zod");
const User_1 = require("./User");
const ValidationConstants_1 = require("../ValidationConstants");
exports.CreateUserRequestSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField }),
    phone: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField }),
    ccType: zod_1.z.nativeEnum(User_1.CCType),
    cc: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField }),
    password: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField })
});
exports.UpdateNameRequestSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField })
});
exports.UpdatePasswordRequestSchema = zod_1.z.object({
    oldPassword: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField }),
    password: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField }),
});
exports.UpdatePhoneNumberRequestSchema = zod_1.z.object({
    phoneNumber: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField })
});
exports.UpdateIdentificationRequestSchema = zod_1.z.object({
    ccType: zod_1.z.nativeEnum(User_1.CCType),
    cc: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField })
});
exports.LoginRequestSchema = zod_1.z.object({
    phoneNumber: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField }),
    password: zod_1.z.string({ required_error: ValidationConstants_1.requiredField }).min(1, { message: ValidationConstants_1.requiredField })
});
