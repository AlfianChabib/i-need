import { Request, Response, NextFunction } from "express";
import { JwtPayload, TokenExpiredError, verify } from "jsonwebtoken";
import { ResponseError } from "../common/response-error";
import { SessionData } from "../types/auth";

export async function serializeMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return next();
    }
    verify(token, process.env.SECRET_ACCESS_TOKEN, (error, decoded: string | JwtPayload | undefined | SessionData) => {
      if (error instanceof TokenExpiredError) {
        if (error.name === "TokenExpiredError") {
          throw new ResponseError(403, "Token expired");
        }
        throw new ResponseError(401, "Invalid token");
      } else {
        res.locals.user = decoded as SessionData;
        req.user = decoded as SessionData;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
}
