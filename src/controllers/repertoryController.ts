import { Request, Response } from "express";
import repertoryService from "../services/repertoryService.js";

async function postRepertory(req: Request, res: Response) {
  const { userId } = res.locals;
  const repertory = { ...req.body, userId };
  await repertoryService.createRepertory(repertory);

  res.sendStatus(201);
}

export default { postRepertory };
