import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { AuthValidator } from "../validators/auth.validator";
import { AuthService } from "../services/auth.service";
import { RegisterCandidate } from "../models/auth.model";
import { tryCatchFn } from "../common/try-catch";

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

  async register2() {
    tryCatchFn(async (req: Request, res: Response, next: NextFunction) => {
      const data = req.body;
      await AuthService.registerCandidate(data.username, data.email, data.password);
      return res.status(200).json(data);
    });
  }

  async login() {
    tryCatchFn(async (req: Request, res: Response, next: NextFunction) => {
      const data = req.body;
      return res.status(200).json(data);
    });
  }
}
