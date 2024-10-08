import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { LoginSchema, RegisterCandidate, RegisterCompany, VerifySchema } from "../types/auth";
import { setCookie } from "../common/cookie-response";
import { ResponseError } from "../common/response-error";

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

      await AuthService.registerCompany(data);

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

      req.session.user = result.user;
      req.session.save();

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: { accessToken: result.accessToken, user: result.user },
      });
    } catch (error) {
      next(error);
    }
  }

  async getSession(req: Request, res: Response, next: NextFunction) {
    try {
      const sessionData = req.session.user;

      if (!sessionData) throw new ResponseError(400, "Session not found");

      return res.status(200).json({ success: true, message: "Get session successful", data: sessionData });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      const result = await AuthService.refreshToken(refreshToken);
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

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      req.session.destroy((err) => {
        res.clearCookie("refreshToken");
        return res.status(200).json({ success: true, message: "Logged out successfully" });
      });
    } catch (error) {
      next(error);
    }
  }
}
