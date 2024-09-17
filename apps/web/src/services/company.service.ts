import { apiAuth } from "@/lib/axios";
import { CompanyStatus } from "@/types/company";
import { ApiResponseData } from "@/types/server";
import { ErrorHandler } from "@/utils/error-handler";

export class CompanyService {
  static async getCompanyStatus(companyId: string) {
    try {
      const res = await apiAuth.get<ApiResponseData<CompanyStatus>>(`/company/status/${companyId}`);
      const data = res.data.data;

      return data.companyStatus;
    } catch (error) {
      throw new ErrorHandler(error);
    }
  }
}
