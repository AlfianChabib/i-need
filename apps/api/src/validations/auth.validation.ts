import { z } from "zod";

export class AuthValidator {
  static readonly registerCandidate = z
    .object({
      username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(100, { message: "Username must be at most 100 characters" }),
      email: z.string().email({ message: "Invalid email" }),
      password: z.string().min(8, { message: "Password must be at least 8 characters" }),
      confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters" }),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({ code: "custom", message: "Passwords do not match", path: ["confirmPassword"] });
      }
    });

  static readonly registerCompany = z
    .object({
      companyName: z
        .string()
        .min(3, { message: "Company Name must be at least 3 characters" })
        .max(100, { message: "Company Name must be at most 100 characters" }),
      email: z.string().email({ message: "Invalid email" }),
      password: z.string().min(8, { message: "Password must be at least 8 characters" }),
      confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters" }),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({ code: "custom", message: "Passwords do not match", path: ["confirmPassword"] });
      }
    });

  static readonly verifySchema = z.object({
    token: z.string({ message: "Invalid token" }),
  });

  static readonly loginSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  });
}
