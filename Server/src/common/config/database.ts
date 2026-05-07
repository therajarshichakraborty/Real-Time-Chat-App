import mongoose from "mongoose";
import { env } from "./env";
import logger from "./logger";

const connectToDatabase = async (): Promise<void> => {
  return mongoose
    .connect(env.MONGODB_URI)
    .then((connection) => {
      logger.info(`MongoDB connected: ${connection.connection.host}`);
    })
    .catch((error) => {
      logger.error({
        message: "MongoDB connection failed",
        error,
      });
      process.exit(1);
    });
};

export default connectToDatabase;
