import { Role } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../common/response-error";
import { SessionData } from "../types/auth";

export default function authorization(role: Role) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.user as SessionData;
      const session = req.session.user;
      if (session) {
        if (session.role !== role) throw new ResponseError(403, "Unauthorized access, invalid session");
        return next();
      }
      if (user) {
        if (user.role !== role) throw new ResponseError(403, "Unauthorized access, invalid user");
        return next();
      }

      throw new ResponseError(403, "Unauthorized access");
    } catch (error) {
      next(error);
    }
  };
}
