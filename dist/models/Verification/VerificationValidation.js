"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationRequestSchema = void 0;
const zod_1 = require("zod");
exports.VerificationRequestSchema = zod_1.z.object({
    code: zod_1.z.number().int("Debe ser un número entero").positive("Debe ser un número positivo").refine((num) => num >= 1000000 && num <= 9999999, {
        message: "El número debe tener 7 dígitos"
    })
});
