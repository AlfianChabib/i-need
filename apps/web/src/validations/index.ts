import { ACCEPTED_IMAGE_MIME_TYPES } from "@/utils/constants";
import { z } from "zod";

export const singleImageSchema = z
  .any()
  .refine((file: File) => file, { message: "No file uploaded" })
  .refine((file: File) => file.size <= 2 * 1024 * 1024, { message: "Max image size is 2MB." })
  .refine((file) => ACCEPTED_IMAGE_MIME_TYPES.includes(file.type), {
    message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
  });

// logo: z
//   .any()
//   .refine(
//     (files) => {
//       return files?.[0]?.size <= MAX_LOGO_SIZE;
//     },
//     { message: "Max image size is 2MB." },
//   )
//   .refine((files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type), {
//     message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
//   }),
