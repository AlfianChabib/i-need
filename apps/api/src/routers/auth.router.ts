import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { validate } from "../middleware/validator.middleware";
import { AuthValidator } from "../validators/auth.validator";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/register", validate(AuthValidator.registerCandidate, "body"), this.authController.register);
    this.router.post("/verify", validate(AuthValidator.verifySchema, "body"), this.authController.verifyEmail);
    this.router.post("/login", validate(AuthValidator.loginSchema, "body"), this.authController.login);
  }

  getRouter(): Router {
    return this.router;
  }
}
