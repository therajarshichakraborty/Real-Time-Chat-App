import express, { Request, Response } from "express";
import { createServer } from "node:http";

const port = Number(process.env.PORT);
const app = express();
const server = createServer(app);
app.get("/", (_: Request, res: Response) => {
  res.send(
    "<h1>Hello , I will definately be the best backend developer in the worls who can ship code without ai !!!</h1>",
  );
});
app.get("/health", (_: Request, res: Response) => {
  res
    .status(404)
    .json(
      "Hello , I will definately be the best backend developer in the worls who can ship code without ai in status 404!!!",
    );
});

server.listen(port, () => {
  const address = server.address();
  console.log(
    `server is lasting to the port http://localhost:${address.port}/health`,
  );
});
