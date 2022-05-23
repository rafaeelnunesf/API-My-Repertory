import { Music } from "@prisma/client";
import musicRepository from "../repositories/musicRepository.js";
import repertoryRepository from "../repositories/repertoryRepository.js";
import { notFoundError } from "../utils/errorUtils.js";
import { MusicRepertoryData } from "./repertoryService.js";

export type CreateMusicData = Omit<Music, "id">;

async function findByNameAndAuthor(name: string, author: string) {
  return await musicRepository.getByNameAndAuthor(name, author);
}

async function createAndReturn(name: string, author: string) {
  const tab = await musicRepository.getTab(name, author);
  if (!tab) throw notFoundError("tab not found");
  const data = { name, author, tab, lyrics: tab };
  await musicRepository.insert(data);

  return await findByNameAndAuthor(name, author);
}
async function updateMusic({ musicId, repertoryId }: MusicRepertoryData) {
  return await repertoryRepository.updateMusic({ musicId, repertoryId });
}
export default { findByNameAndAuthor, createAndReturn, updateMusic };
