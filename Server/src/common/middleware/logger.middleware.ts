import type { NextFunction, Request, Response } from "express";
import logger from "../config/logger";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.info(`${req.method} ${req.originalUrl}`);

  next();
};