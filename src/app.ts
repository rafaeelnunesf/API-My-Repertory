import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import router from "./routers/index.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
