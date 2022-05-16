import { Router } from "express";
import authRouter from "../routers/authRouter.js";
const router = Router();
router.use(authRouter);

export default router;
