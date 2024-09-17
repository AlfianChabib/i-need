import { Router } from "express";
import { AuthRouter } from "./auth.router";
import { CompanyRouter } from "./company.router";

export class ApiV1Router {
  private router: Router;
  private authRouter: AuthRouter;
  private companyRouter: CompanyRouter;

  constructor() {
    this.router = Router();
    this.authRouter = new AuthRouter();
    this.companyRouter = new CompanyRouter();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use("/auth", this.authRouter.getRouter());
    this.router.use("/company", this.companyRouter.getRouter());
  }

  getRouter(): Router {
    return this.router;
  }
}
