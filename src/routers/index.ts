import { Router } from "express";
import authRouter from "../routers/authRouter.js";
import repertoryRouter from "./repertoryRouter.js";

const router = Router();
router.use(authRouter);
router.use(repertoryRouter);

export default router;
