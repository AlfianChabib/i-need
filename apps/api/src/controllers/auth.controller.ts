import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { LoginSchema, RegisterCandidate, VerifySchema } from "../types/auth.type";

export class AuthController {
  async register(req: Request<{}, {}, RegisterCandidate>, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      await AuthService.registerCandidate(data.username, data.email, data.password);

      return res.status(200).json({ success: true, message: "Check your email to verify your account" });
    } catch (error) {
      next(error);
    }
  }

  async verifyEmail(req: Request<{}, {}, VerifySchema>, res: Response, next: NextFunction) {
    try {
      const { token } = req.body;

      await AuthService.verifyEmail(token);

      return res.status(200).json({ success: true, message: "Email verified successfully" });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request<{}, {}, LoginSchema>, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      await AuthService.login(data.email, data.password);

      return res.status(200).json({ success: true, message: "Login successful" });
    } catch (error) {
      next(error);
    }
  }
}
