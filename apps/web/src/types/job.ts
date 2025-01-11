import { JobValidator } from "@/validations/job.validation";
import { z } from "zod";

export type CreateJobSchema = z.infer<typeof JobValidator.createJobSchema>;
