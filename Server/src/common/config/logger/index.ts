import path from "node:path";
import winston from "winston";
const logDir = path.join(process.cwd(), "src/common/config/logs");

const consoleFormat = winston.format.combine(
  winston.format.colorize(),

  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),

  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  }),
);

const fileFormat = winston.format.combine(
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),

  winston.format.errors({
    stack: true,
  }),

  winston.format.json(),
);

const logger = winston.createLogger({
  level: "info",

  transports: [
    new winston.transports.Console({
      format: consoleFormat,
    }),

    new winston.transports.File({
      filename: `${logDir}/error.log`,
      level: "error",
      format: fileFormat,
    }),

    new winston.transports.File({
      filename: `${logDir}/combined.log`,
      format: fileFormat,
    }),
  ],
});

export default logger;