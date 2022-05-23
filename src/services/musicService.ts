import { Music } from "@prisma/client";
import musicRepository from "../repositories/musicRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

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

export default { findByNameAndAuthor, createAndReturn };
