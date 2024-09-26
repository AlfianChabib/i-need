import { z } from "zod";
import { CompanyValidator } from "../validations/company.validation";

export type CompanyOnboardingSchema = z.infer<typeof CompanyValidator.companyOnboardingSchema>;
