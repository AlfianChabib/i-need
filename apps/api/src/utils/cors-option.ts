import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  // origin: (origin, callback) => {
  //   if (process.env.FRONTEND_URL) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error("Not allowed by CORS"));
  //   }
  // },
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
