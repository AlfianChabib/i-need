import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "testing", "production"]).default("development"),
  },
  client: {
    NEXT_PUBLIC_API_HOST: z.string(),
    NEXT_PUBLIC_SECRET_ACCESS_TOKEN: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    NEXT_PUBLIC_SECRET_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SECRET_ACCESS_TOKEN,
  },
});
