import { z } from "zod";
import { AuthValidator } from "../validations/auth.validation";
import { JwtPayload } from "jsonwebtoken";
import { Role } from "@prisma/client";

export type RegisterCandidate = z.infer<typeof AuthValidator.registerCandidate>;
export type RegisterCompany = z.infer<typeof AuthValidator.registerCompany>;
export type VerifySchema = z.infer<typeof AuthValidator.verifySchema>;
export type LoginSchema = z.infer<typeof AuthValidator.loginSchema>;

export type SessionData = JwtPayload & {
  email: string;
  userId: string;
  role: Role;
};
