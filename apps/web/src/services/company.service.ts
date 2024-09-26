import { apiAuth } from "@/lib/axios";
import { CompanyStatus } from "@/types/company";
import { CompanyOnboardingSchema } from "@/types/onboarding";
import { ApiResponse, ApiResponseData } from "@/types/server";
import { ErrorHandler } from "@/utils/error-handler";
import { toFormData } from "axios";

export class CompanyService {
  static async getCompanyStatus() {
    try {
      const res = await apiAuth.get<ApiResponseData<CompanyStatus>>(`/company/status`);
      const data = res.data.data;

      return data.companyStatus;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }

  static async onboarding(payload: CompanyOnboardingSchema) {
    try {
      const formData = new FormData();
      toFormData(payload, formData);

      const res = await apiAuth.post<ApiResponse>("/company/onboarding", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = res.data;

      return data;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }
}
