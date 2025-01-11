import prisma from "../app/prisma";
import { Classification, Industry, SubClassification } from "@prisma/client";
import { ResponseError } from "../common/response-error";

export class DataService {
  static async getIndustries(): Promise<Industry[]> {
    const industries = await prisma.industry.findMany();
    if (!industries) throw new ResponseError(404, "Industries not found");

    return industries;
  }

  static async getClassifications(): Promise<({ subClassification: SubClassification[] } & Classification)[]> {
    const classifications = await prisma.classification.findMany({
      include: { subClassification: true },
    });
    if (!classifications) throw new ResponseError(404, "Classifications not found");

    return classifications;
  }

  static async getSubClassifications(classificationId: number): Promise<SubClassification[]> {
    const subClassifications = await prisma.subClassification.findMany({
      where: { classificationId },
    });
    if (!subClassifications) throw new ResponseError(404, "Sub classifications not found");

    return subClassifications;
  }
}
