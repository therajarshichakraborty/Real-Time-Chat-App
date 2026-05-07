import bcrypt from "bcrypt";
import logger from "../config/logger";
import ApiError from "./api.error";

export const hashPassword = async (value: string, salt: number = 10): Promise<string> => {
  try {
    return await bcrypt.hash(value, salt);
  } catch (error) {
    logger.error({
      message: "Failed to hash password",
      error: error instanceof Error ? error.message : error,
    });

    throw ApiError.internal("Password hashing failed");
  }
};

export const comparePassword = async (value: string, hashedValue: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(value, hashedValue);
  } catch (error) {
    logger.error({
      message: "Failed to compare password",
      error: error instanceof Error ? error.message : error,
    });

    throw ApiError.internal("Password comparison failed");
  }
};
