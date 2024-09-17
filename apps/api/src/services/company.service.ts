import prisma from "../app/prisma";
import { ResponseError } from "../common/response-error";

export class CompanyService {
  static async getCompanyStatus(companyId: string) {
    const companyStatus = await prisma.user.findUnique({
      where: { id: companyId },
      select: { companyProfile: { select: { status: true } } },
    });

    if (!companyStatus || !companyStatus.companyProfile) {
      throw new ResponseError(404, "Company not found");
    }

    return companyStatus.companyProfile.status;
  }
}
