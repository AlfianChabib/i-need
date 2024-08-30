import express = require("express");
import { SessionData } from "../auth";
import { User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user: SessionData;
    }
  }
}

declare module "express-session" {
  export interface SessionData {
    user: User;
  }
}
