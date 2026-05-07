import express, { Application, Request, Response, json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import { requestLogger } from "./common/middleware/logger.middleware";

const app: Application = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(requestLogger);

app.get("/", (_: Request, res: Response) => {
  res.json({
    name: "server from 4000",
  });
});

app.all("{*path}", (_: Request, res: Response) => {
  res.json({
    name: "undefined server route",
  });
});

export default app;
