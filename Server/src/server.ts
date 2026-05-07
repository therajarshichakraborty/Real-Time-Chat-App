import {createServer} from "node:http";
import app from "./app";
import logger from "./common/logger";

const PORT = process.env.PORT || 8000;
const server = createServer(app);

server.listen(PORT, () => {
  logger.warn(`Server running on port http://localhost:${PORT}`);
});