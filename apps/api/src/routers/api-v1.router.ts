import { Router } from "express";
import { AuthRouter } from "./auth.router";
import { CompanyRouter } from "./company.router";
import { DataRouter } from "./data.router";

export class ApiV1Router {
  private router: Router;
  private authRouter: AuthRouter;
  private companyRouter: CompanyRouter;
  private dataRouter: DataRouter;

  constructor() {
    this.router = Router();
    this.authRouter = new AuthRouter();
    this.companyRouter = new CompanyRouter();
    this.dataRouter = new DataRouter();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use("/auth", this.authRouter.getRouter());
    this.router.use("/company", this.companyRouter.getRouter());
    this.router.use("/data", this.dataRouter.getRouter());
  }

  getRouter(): Router {
    return this.router;
  }
}
