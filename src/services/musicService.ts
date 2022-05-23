import { Music } from "@prisma/client";
import musicRepository from "../repositories/musicRepository.js";

export type CreateMusicData = Omit<Music, "id">;

async function findByNameAndAuthor(name: string, author: string) {
  return await musicRepository.getByNameAndAuthor(name, author);
}

async function create(name: string, author: string) {
  const arrayName = name.split(" ");
  const musicName = arrayName.join("-");
  const arrayAuthor = name.split(" ");
  const musicAuthor = arrayAuthor.join("-");

  const tab = await musicRepository.getTab(musicName, musicAuthor);
  const data = { name, author, tab, lyrics: tab };
  await musicRepository.insert(data);
}

export default { findByNameAndAuthor, create };
