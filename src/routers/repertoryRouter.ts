import { Router } from "express";
import repertoryController from "../controllers/repertoryController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";
import { musicSchema } from "./../schemas/musicSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
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
repertoryRouter.post(
  "/repertory/:repertoryId/addMusic",
  tokenValidationMiddleware,
  validateSchemaMiddleware(musicSchema),
  repertoryController.postMusic
);
repertoryRouter.delete(
  "/repertory/:repertoryId/musics/:musicId",
  tokenValidationMiddleware,
  repertoryController.deleteMusic
);
repertoryRouter.patch(
  "/repertory/:repertoryId/musics/:musicId",
  tokenValidationMiddleware,
  repertoryController.updateMusic
);

export default repertoryRouter;
