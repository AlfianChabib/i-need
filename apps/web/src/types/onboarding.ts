import { z } from "zod";
import { OnboardingValidator } from "@/validations/onboarding.validation";

export type CompanyOnboardingSchema = z.infer<typeof OnboardingValidator.companyOnboardingSchema>;
