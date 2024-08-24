import { config } from "dotenv";
import { resolve } from "path";
import { z } from "zod";

export const NODE_ENV = process.env.NODE_ENV || "development";
const envFile = NODE_ENV === "development" ? ".env.development" : ".env";

config({ path: resolve(__dirname, `../../${envFile}`) });
config({ path: resolve(__dirname, `../../${envFile}.local`), override: true });

export const PORT = process.env.PORT;

export const envSchema = z.object({
  PORT: z.coerce.number().min(1000),
  NODE_ENV: z.union([z.literal("development"), z.literal("testing"), z.literal("production")]).default("development"),
  DATABASE_URL: z.string().url(),
  BACKEND_URL: z.string().url(),
  FRONTEND_URL: z.string().url(),
  RESEND_API_KEY: z.string(),
  SECRET_VERIFICATION_TOKEN: z.string(),
  LIFETIME_VERIFICATION_TOKEN: z.string(),
  SECRET_REFRESH_TOKEN: z.string(),
  LIFETIME_REFRESH_TOKEN: z.string(),
  SECRET_ACCESS_TOKEN: z.string(),
  LIFETIME_ACCESS_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);

export type Environment = {
  Bindings: z.infer<typeof envSchema>;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
