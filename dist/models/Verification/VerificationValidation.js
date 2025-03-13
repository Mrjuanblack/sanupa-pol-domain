"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationRequestSchema = void 0;
const zod_1 = require("zod");
const ValidationConstants_1 = require("../ValidationConstants");
exports.VerificationRequestSchema = zod_1.z.object({
    code: zod_1.z.number({ required_error: ValidationConstants_1.requiredField }).int(ValidationConstants_1.mustBeInteger).positive("Debe ser un número positivo").refine((num) => num >= 1000000 && num <= 9999999, {
        message: "El número debe tener 7 dígitos"
    })
});
