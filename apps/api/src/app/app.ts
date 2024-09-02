import express, { Express, Request, Response, NextFunction, json, urlencoded } from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import session from "express-session";
import errorMiddleware from "../middleware/error.middleware";
import { corsOptions } from "../utils/cors-option";
import { ApiV1Router } from "../routers/api-v1.router";
import { PORT, env } from "./config";
import { serializeMiddleware } from "../middleware/serialize.middleware";
import { sessionOptions } from "../utils/session-option";

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
    this.app.use(session(sessionOptions));
    this.app.use(urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(serializeMiddleware);
    this.app.use(express.static(path.join(__dirname, "../../public")));
  }

  private handleError(): void {
    // not found
    this.app.use(errorMiddleware);
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

    this.app.get("/", (req: Request, res: Response) => res.send(`Hello, Purwadhika Student !`));
    this.app.use("/api/v1", apiV1Router.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] ${env.NODE_ENV}:   http://localhost:${PORT}/`);
    });
  }
}
