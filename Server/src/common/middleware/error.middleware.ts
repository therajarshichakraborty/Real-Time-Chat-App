import type { NextFunction, Request, Response } from "express";
import ApiError from "../utils/api.error";
import logger from "../config/logger";

export const errorMiddleware = (
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction,
) => {
  let statusCode = 500;
  let message = "Internal server error";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  logger.error({
    statusCode,
    message: err.message,
    stack: err.stack,
  });

  res.status(statusCode).json({
    success: false,
    message,
  });
};