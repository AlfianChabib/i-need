import { Request, Response, NextFunction } from "express";
import { CompanyService } from "../services/company.service";
import { CompanyOnboardingSchema } from "../types/company";
import { ResponseError } from "../common/response-error";

export class CompanyController {
  async getCompanyStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const sessionData = req.session.user;

      if (!sessionData) throw new ResponseError(400, "Session not found");

      const companyStatus = await CompanyService.getCompanyStatus(sessionData.id);

      return res.status(200).json({ success: true, message: "Get company status successful", data: { companyStatus } });
    } catch (error) {
      next(error);
    }
  }

  async onboarding(req: Request<{}, {}, CompanyOnboardingSchema>, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const data = req.body;
      console.log(data);

      await CompanyService.onboarding(userId, data);

      return res.status(200).json({ success: true, message: "Create company profile successful" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
