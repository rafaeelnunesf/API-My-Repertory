import { Repertory, MusicRepertory } from "@prisma/client";
import { repertoryRepository } from "../repositories/index.js";
import { notFoundError } from "../utils/errorUtils.js";

export type RepertoryData = Omit<Repertory, "id">;
export type MusicRepertoryData = Omit<
  MusicRepertory,
  "lastTimePlayed" | "timesplayed"
>;

async function createRepertory(repertory: RepertoryData) {
  return await repertoryRepository.insert(repertory);
}

async function getUserRepertories(userId: number) {
  const repertories = await repertoryRepository.findByUserId(userId);
  if (!repertories)
    throw notFoundError("there are no registered repertories for this user");
  return repertories;
}

async function getMusics(repertoryId: number) {
  const musics = await repertoryRepository.findMusicsByRepertoryId(repertoryId);
  if (!musics)
    throw notFoundError("there are no registered musics for this repertory");
  return musics;
}

async function addMusic(data: MusicRepertoryData) {
  return await repertoryRepository.addMusicToRepertory(data);
}

async function deleteMusic(data: MusicRepertoryData) {
  await repertoryRepository.deleteMusic(data);
}

export default {
  createRepertory,
  getUserRepertories,
  getMusics,
  addMusic,
  deleteMusic,
};
