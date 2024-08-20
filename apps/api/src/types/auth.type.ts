import { z } from "zod";
import { AuthValidator } from "../validators/auth.validator";

export type RegisterCandidate = z.infer<typeof AuthValidator.registerCandidate>;
export type RegisterCompany = z.infer<typeof AuthValidator.registerCompany>;
export type VerifySchema = z.infer<typeof AuthValidator.verifySchema>;
export type LoginSchema = z.infer<typeof AuthValidator.loginSchema>;
