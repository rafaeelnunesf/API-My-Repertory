import { Router } from "express";
import repertoryController from "../controllers/repertoryController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const repertoryRouter = Router();

repertoryRouter.post(
  "/repertory",
  tokenValidationMiddleware,
  repertoryController.postRepertory
);

export default repertoryRouter;
