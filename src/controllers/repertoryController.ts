import { Request, Response } from "express";
import repertoryService from "../services/repertoryService.js";
import musicService from "../services/musicService.js";

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

async function postMusic(req: Request, res: Response) {
  const { repertoryId } = req.params;
  const { name, author } = req.body;

  const music = await musicService.findByNameAndAuthor(name, author);
  if (!music) await musicService.create(name, author);

  console.log(music);
  res.sendStatus(201);
}

export default {
  postRepertory,
  getUserRepertories,
  getMusics,
  postMusic,
};
