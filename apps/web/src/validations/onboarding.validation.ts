import { ACCEPTED_IMAGE_MIME_TYPES, MAX_LOGO_SIZE } from "@/utils/constants";
import { z } from "zod";

export class OnboardingValidator {
  static readonly companyOnboardingSchema = z.object({
    companyName: z.string().min(3, { message: "Company Name must be at least 3 characters" }),
    logo: z
      .any()
      .refine(
        (files) => {
          return files?.[0]?.size <= MAX_LOGO_SIZE;
        },
        { message: "Max image size is 2MB." },
      )
      .refine((files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type), {
        message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
      }),
    address: z.string().min(1, { message: "Address is required" }),
    website: z.string().url({ message: "Invalid URL" }).optional(),
    industryId: z.coerce.number().min(1, { message: "Industry is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    contact: z.object({
      email: z.string().email({ message: "Invalid email" }),
      phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
      linkedin: z.string().url().optional(),
    }),
  });
}
