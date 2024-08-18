import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../common/response-error";

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Invalid request",
      errors: err.errors,
    });
  } else if (err instanceof ResponseError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
    });
  } else {
    return res.status(500).json({ status: "error", error: "Internal server error" });
  }
}
