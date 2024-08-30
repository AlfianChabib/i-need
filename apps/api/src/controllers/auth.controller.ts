import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { LoginSchema, RegisterCandidate, RegisterCompany, VerifySchema } from "../types/auth";
import { setCookie } from "../common/cookie-response";

export class AuthController {
  async registerCandidate(req: Request<{}, {}, RegisterCandidate>, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      await AuthService.registerCandidate(data.username, data.email, data.password);

      return res.status(200).json({ success: true, message: "Check your email to verify your account" });
    } catch (error) {
      next(error);
    }
  }

  async registerCompany(req: Request<{}, {}, RegisterCompany>, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      // await AuthService.registerCompany(data.username, data.email, data.password);

      return res.status(200).json({ success: true, message: "Check your email to verify your account" });
    } catch (error) {
      next(error);
    }
  }

  async verifyEmail(req: Request<{}, {}, VerifySchema>, res: Response, next: NextFunction) {
    try {
      const { token } = req.body;

      const existToken = await AuthService.verifyEmail(token);

      return res.status(200).json({ success: true, message: "Email verified successfully", existToken });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request<{}, {}, LoginSchema>, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      const result = await AuthService.login(data.email, data.password);
      setCookie(res, "refreshToken", result.refreshToken);
      setCookie(res, "accessToken", result.accessToken);

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: { accessToken: result.accessToken },
      });
    } catch (error) {
      next(error);
    }
  }

  async getSession(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;

      const session = await AuthService.getSession(userId);

      return res.status(200).json({ success: true, message: "Get session successful", data: session });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      const result = await AuthService.refreshToken(refreshToken);

      setCookie(res, "accessToken", result.accessToken);
      setCookie(res, "refreshToken", refreshToken);

      return res.status(200).json({
        success: true,
        message: "Refresh token successful",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
