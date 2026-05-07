import { createServer } from "node:http";
import app from "./app";
import { env } from "./common/config/env";
import logger from "./common/config/logger";
// import connectToDatabase from "./common/config/database";
const server = createServer(app);

const runServer = async (): Promise<void> => {
  // await connectToDatabase();
  
  server.listen(env.PORT, () => {
    logger.info(`Server running at http://localhost:${env.PORT}`);
  });
};

runServer()
  .then(() => {
    logger.info("Server started successfully");
  })
  .catch((error) => {
    logger.error({
      message: "Failed to start server",
      error,
    });

    process.exit(1);
  });
