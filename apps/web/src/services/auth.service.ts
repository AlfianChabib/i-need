import { api, apiAuth } from "@/lib/axios";
import { LoginSchema, RegisterCandidateSchema } from "@/types/auth";
import { ErrorHandler } from "@/utils/error-handler";

export class AuthService {
  static async registerCandidate(payload: RegisterCandidateSchema) {
    try {
      const res = await api.post("/auth/register", payload);
      return res.data;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }

  static async login(payload: LoginSchema) {
    try {
      const res = await api.post("/auth/login", payload);
      return res.data;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }

  static async getSession() {
    try {
      const res = await apiAuth.get("/auth/session");
      const { session } = res.data;

      return session;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }
}
