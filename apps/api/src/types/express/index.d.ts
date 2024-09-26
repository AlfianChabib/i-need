import express from "express";
import { SessionData } from "../auth";

// import express = require("express");
// import session from "express-session";
// import { User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user: SessionData;
    }
  }
}

// declare module "express-session" {
//   interface SessionData {
//     user: User;
//   }
// }
