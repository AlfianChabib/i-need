import { Request, Response, NextFunction } from "express";
import { z, ZodType } from "zod";

export type ValidationType = "body" | "params" | "query";

export const validate =
  (schema: ZodType<Record<string, unknown>>, type: ValidationType) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = z.object({ [type]: schema });
      const data = await result.parseAsync({ [type]: req[type] });
      req[type] = data[type];
      next();
    } catch (error) {
      next(error);
    }
  };
