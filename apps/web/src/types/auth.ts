import { AuthValidator } from "@/validations/auth.validation";
import { z } from "zod";

export type LoginSchema = z.infer<typeof AuthValidator.loginSchema>;
export type RegisterCandidateSchema = z.infer<typeof AuthValidator.registerCandidate>;
export type RegisterCompanySchema = z.infer<typeof AuthValidator.registerCompany>;
export type VerifySchema = z.infer<typeof AuthValidator.verifySchema>;

export type LoginData = {
  accessToken: string;
  user: SessionData;
};

export type SessionData = {
  id: string;
  email: string;
  username: string;
  role: "CANDIDATE" | "COMPANY";
  isVerified: boolean;
};
