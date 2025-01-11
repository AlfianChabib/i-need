import { Router } from "express";
import { DataController } from "../controllers/data.controller";

export class DataRouter {
  private router: Router;
  private dataController: DataController;

  constructor() {
    this.router = Router();
    this.dataController = new DataController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/industries", this.dataController.getIndustries);
    this.router.get("/classifications", this.dataController.getClassifications);
    this.router.get("/classifications/:classificationId", this.dataController.getSubClassifications);
  }

  getRouter(): Router {
    return this.router;
  }
}
