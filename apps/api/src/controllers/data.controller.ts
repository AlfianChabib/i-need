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

  async getClassifications(req: Request, res: Response, next: NextFunction) {
    try {
      const classifications = await DataService.getClassifications();

      return res.status(200).json({
        success: true,
        message: "Classifications retrieved successfully",
        data: classifications,
      });
    } catch (error) {
      next(error);
    }
  }

  async getSubClassifications(req: Request, res: Response, next: NextFunction) {
    try {
      const { classificationId } = req.params;
      const subClassifications = await DataService.getSubClassifications(Number(classificationId));

      return res.status(200).json({
        success: true,
        message: "Sub classifications retrieved successfully",
        data: subClassifications,
      });
    } catch (error) {
      next(error);
    }
  }
}
