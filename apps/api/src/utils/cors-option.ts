import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
