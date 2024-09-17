import { Router } from "express";
import { CompanyController } from "../controllers/company.controller";

export class CompanyRouter {
  private router: Router;
  private companyController: CompanyController;

  constructor() {
    this.router = Router();
    this.companyController = new CompanyController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/status/:companyId", this.companyController.getCompanyStatus);
  }

  getRouter(): Router {
    return this.router;
  }
}
