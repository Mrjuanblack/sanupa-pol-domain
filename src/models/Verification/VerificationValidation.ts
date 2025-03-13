import { z } from "zod";
import { VerificationRequest } from "./Verification.js";

export const VerificationRequestSchema: z.ZodType<VerificationRequest> = z.object({
    code: z.number().int("Debe ser un número entero").positive("Debe ser un número positivo").refine((num) => num >= 1_000_000 && num <= 9_999_999, {
        message: "El número debe tener 7 dígitos"
    })
})