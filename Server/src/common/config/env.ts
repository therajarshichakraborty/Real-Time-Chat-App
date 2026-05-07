import "dotenv/config";
import { z } from "zod";
import logger from "./logger";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.coerce.number().default(8000),
  MONGODB_URI: z.coerce.string().min(1),
  JWT_ACCESS_SECRET: z.coerce.string().min(16),
  JWT_ACCESS_EXPIRES_IN: z.coerce.string(),
  JWT_REFRESH_SECRET: z.coerce.string().min(16),
  JWT_REFRESH_EXPIRES_IN: z.coerce.string(),
  SMTP_HOST: z.coerce.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_USER: z.coerce.string(),
  SMTP_PASS: z.coerce.string(),
  SMTP_FROM_NAME: z.coerce.string(),
  SMTP_FROM_EMAIL: z.email(),
  CLIENT_URL: z.url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  logger.error(" Invalid environment variables:");
  logger.error(parsedEnv.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsedEnv.data;
