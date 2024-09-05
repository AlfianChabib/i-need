import { SessionData } from "@/types/auth";

export const initialSession: SessionData = {
  id: "",
  email: "",
  username: "",
  role: "CANDIDATE",
  isVerified: false,
};
