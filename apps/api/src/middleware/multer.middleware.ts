import { NextFunction, Request, RequestHandler, Response } from "express";
import { ResponseError } from "../common/response-error";
import multer from "multer";

export const multerMiddleware = (fn: RequestHandler) =>
  function (req: Request, res: Response, next: NextFunction) {
    try {
      fn(req, res, (err) => {
        if (!req.file) throw new ResponseError(400, "No file uploaded!");
        if (err) {
          if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
            throw new ResponseError(400, "File size should not exceed 2MB!");
          }
          if (err.message === "File type not allowed") throw new ResponseError(400, "File type not allowed");

          return res.status(400).json({ sucess: false, message: err.message });
        }
        // req.body[req.file.fieldname] = `${process.env.BACKEND_URL}/${req.file.path}`;
        req.body.logo = `${process.env.BACKEND_URL}/${req.file.path}`;
        next();
      });
    } catch (error) {
      next(error);
    }
  };
