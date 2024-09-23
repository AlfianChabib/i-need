import { Industry } from "@prisma/client";
import prisma from "../app/prisma";
import { ResponseError } from "../common/response-error";

export class DataService {
  static async getIndustries(): Promise<Industry[]> {
    const industries = await prisma.industry.findMany();
    if (!industries) throw new ResponseError(404, "Industries not found");

    return industries;
  }
}
