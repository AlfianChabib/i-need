import { NextFunction, Request, Response } from "express";
import { DataService } from "../services/data.service";

export class DataController {
  async getIndustries(req: Request, res: Response, next: NextFunction) {
    try {
      const industries = await DataService.getIndustries();

      return res.status(200).json({
        success: true,
        message: "Industries retrieved successfully",
        data: industries,
      });
    } catch (error) {
      next(error);
    }
  }
}
