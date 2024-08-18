import { Router } from "express";
import { AuthRouter } from "./auth.router";

export class ApiV1Router {
  private router: Router;
  private authRouter: AuthRouter;

  constructor() {
    this.router = Router();
    this.authRouter = new AuthRouter();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use("/auth", this.authRouter.getRouter());
  }

  getRouter(): Router {
    return this.router;
  }
}
