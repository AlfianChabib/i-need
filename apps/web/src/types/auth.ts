import { AuthValidator } from "@/validations/auth.validation";
import { z } from "zod";

export type LoginSchema = z.infer<typeof AuthValidator.loginSchema>;
export type RegisterCandidateSchema = z.infer<typeof AuthValidator.registerCandidate>;
export type RegisterCompanySchema = z.infer<typeof AuthValidator.registerCompany>;
export type VerifySchema = z.infer<typeof AuthValidator.verifySchema>;