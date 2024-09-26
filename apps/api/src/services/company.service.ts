import prisma from "../app/prisma";
import { ResponseError } from "../common/response-error";
import { CompanyOnboardingSchema } from "../types/company";

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

  static async onboarding(companyId: string, payload: CompanyOnboardingSchema) {
    const existingCompany = await prisma.user.findUnique({ where: { id: companyId } });

    if (!existingCompany) throw new ResponseError(404, "Company not found");

    await prisma.user.update({
      where: { id: companyId },
      data: {
        companyProfile: {
          update: {
            status: "ACTIVE",
            address: payload.address,
            logo: payload.logo,
            website: payload.website,
            industryId: payload.industryId,
            description: payload.description,
            contact: {
              update: {
                email: payload.contact.email,
                phoneNumber: payload.contact.phoneNumber,
                linkedin: payload.contact.linkedin,
              },
            },
          },
        },
      },
    });
  }
}
