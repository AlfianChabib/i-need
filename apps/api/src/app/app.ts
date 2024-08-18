import express, { json, urlencoded, Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import { corsOptions } from "../utils/cors-option";
import { ApiV1Router } from "../routers/api-v1.router";

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(json());
    this.app.use(cookieParser());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes("/api/")) {
        res.status(404).send("Not found !");
      } else {
        next();
      }
    });

    // error
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes("/api/")) {
        console.error("Error : ", err.stack);
        res.status(500).send("Error !");
      } else {
        next();
      }
    });
  }

  private routes(): void {
    const apiV1Router = new ApiV1Router();

    this.app.get("/", (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student !`);
    });

    this.app.use("/api/v1", apiV1Router.getRouter());
  }

  public start(): void {
    const PORT = process.env.PORT;
    const NODE_ENV = process.env.NODE_ENV;

    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] ${NODE_ENV}:   http://localhost:${PORT}/`);
    });
  }
}