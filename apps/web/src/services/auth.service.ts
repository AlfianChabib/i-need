import { api, apiAuth } from "@/lib/axios";
import { LoginData, LoginSchema, RegisterCandidateSchema, RegisterCompanySchema, SessionData } from "@/types/auth";
import { ApiResponse, ApiResponseData } from "@/types/server";
import { ErrorHandler } from "@/utils/error-handler";

export class AuthService {
  static async registerCandidate(payload: RegisterCandidateSchema) {
    try {
      const res = await api.post<ApiResponse>("/auth/register/candidate", payload);
      return res.data;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }

  static async registerCompany(payload: RegisterCompanySchema) {
    try {
      const res = await api.post<ApiResponse>("/auth/register/company", payload);
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
      const res = await apiAuth.get<ApiResponseData<SessionData>>("/auth/session");
      const { data } = res.data;

      return data;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }
}
