import express,{Request,Response} from "express";
import { requestLogger } from "./common/middleware/logger.middleware";

const app = express();
app.use(requestLogger);
app.get("/",(_:Request,res:Response)=>{
    res.json({
        "name":"server from 3000"
    })
})
export default app;