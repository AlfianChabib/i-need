import { api, apiAuth } from "@/lib/axios";
import { LoginSchema, RegisterCandidateSchema } from "@/types/auth";
import { ApiResponse, ApiResponseData } from "@/types/server";
import { ErrorHandler } from "@/utils/error-handler";

type LoginData = {
  accessToken: string;
};

export class AuthService {
  static async registerCandidate(payload: RegisterCandidateSchema) {
    try {
      const res = await api.post("/auth/register/candidate", payload);
      return res.data;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }

  static async login(payload: LoginSchema) {
    try {
      const res = await api.post<ApiResponseData<LoginData>>("/auth/login", payload);
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
