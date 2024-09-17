import { NextFunction, Request, Response } from "express";
import { CompanyService } from "../services/company.service";

export class CompanyController {
  async getCompanyStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyId } = req.params;

      const companyStatus = await CompanyService.getCompanyStatus(companyId);

      return res.status(200).json({ success: true, message: "Get company status successful", data: { companyStatus } });
    } catch (error) {
      next(error);
    }
  }
}
