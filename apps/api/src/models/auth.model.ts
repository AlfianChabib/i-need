import { z } from "zod";
import { AuthValidator } from "../validators/auth.validator";

export type RegisterCandidate = z.infer<typeof AuthValidator.registerCandidate>;
export type RegisterCompany = z.infer<typeof AuthValidator.registerCompany>;
