import { Role } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../common/response-error";
import { SessionData } from "../types/auth";

export default function authorization(role: Role) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      // const user = req.user as SessionData;
      const session = req.session.user;
      console.log(session);

      // if (!user && !session) throw new ResponseError(403, "Unauthorized access 1");
      // if (user.role !== role || session?.role !== role) throw new ResponseError(403, "Unauthorized access 2");
      next();
    } catch (error) {
      next(error);
    }
  };
}
