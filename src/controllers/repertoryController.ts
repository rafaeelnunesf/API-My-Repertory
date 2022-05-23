import { Request, Response } from "express";
import repertoryService from "../services/repertoryService.js";

async function postRepertory(req: Request, res: Response) {
  const { userId } = res.locals;
  const repertory = { ...req.body, userId };
  await repertoryService.createRepertory(repertory);

  res.sendStatus(201);
}

async function getUserRepertories(req: Request, res: Response) {
  const { userId } = res.locals;
  const repertories = await repertoryService.getUserRepertories(userId);

  res.status(200).send(repertories);
}
async function getMusics(req: Request, res: Response) {
  const { repertoryId } = req.params;
  const musics = await repertoryService.getMusics(parseInt(repertoryId));
  res.status(200).send(musics);
}
export default { postRepertory, getUserRepertories, getMusics };
