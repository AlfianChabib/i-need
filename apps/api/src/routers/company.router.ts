import { Router } from "express";
import { CompanyController } from "../controllers/company.controller";
import { validate } from "../middleware/validator.middleware";
import { CompanyValidator } from "../validations/company.validation";
import { uploadCompanyLogo } from "../lib/multer/multer";
import { multerMiddleware } from "../middleware/multer.middleware";

export class CompanyRouter {
  private router: Router;
  private companyController: CompanyController;

  constructor() {
    this.router = Router();
    this.companyController = new CompanyController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/status", this.companyController.getCompanyStatus);
    this.router.post(
      "/onboarding",
      multerMiddleware(uploadCompanyLogo),
      validate(CompanyValidator.companyOnboardingSchema, "body"),
      this.companyController.onboarding,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
