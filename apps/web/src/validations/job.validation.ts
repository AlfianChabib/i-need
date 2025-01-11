import { z } from "zod";

enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  CONTRACT = "CONTRACT",
  INTERN = "INTERN",
}

enum WorkingType {
  REMOTE = "REMOTE",
  ONSITE = "ONSITE",
  HYBRID = "HYBRID",
}

export class JobValidator {
  static readonly createJobSchema = z.object({
    title: z.string().min(3, { message: "Title is required" }).max(100, { message: "Title is too long" }),
    description: z
      .string()
      .min(3, { message: "Description is required" })
      .max(5000, { message: "Description is too long" }),
    city: z.string().min(3, { message: "City is required" }).max(100, { message: "City is too long" }),
    redirectUrl: z.string().url({ message: "Invalid URL" }).optional(),
    type: z.nativeEnum(JobType),
    workingType: z.nativeEnum(WorkingType),
    classification: z.object({
      classificationId: z.coerce.number().min(1, { message: "Classification is required" }),
      subClassificationId: z.coerce.number().min(1, { message: "Sub Classification is required" }),
    }),
    // .superRefine(({ classificationId }, ctx) => {
    //   if (!classificationId) return;
    //   return z.object({
    //     subClassificationId: z.coerce.number().min(1, { message: "Sub Classification is required" }),
    //   });
    // }),
  });
}
