import { Router } from "express";
import repertoryController from "../controllers/repertoryController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const repertoryRouter = Router();

repertoryRouter.post(
  "/repertory",
  tokenValidationMiddleware,
  repertoryController.postRepertory
);
repertoryRouter.get(
  "/repertory/:repertoryId",
  tokenValidationMiddleware,
  repertoryController.getMusics
);
repertoryRouter.get(
  "/repertory",
  tokenValidationMiddleware,
  repertoryController.getUserRepertories
);

export default repertoryRouter;
