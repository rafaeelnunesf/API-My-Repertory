import { prisma } from "../database.js";
import { RepertoryData } from "../services/repertoryService.js";

async function insert(repertory: RepertoryData) {
  return prisma.repertory.create({
    data: repertory,
  });
}
async function findByUserId(userId: number) {
  return prisma.repertory.findMany({
    where: {
      userId,
    },
    select: {
      name: true,
      id: true,
      musics: {
        select: {
          lastTimePlayed: true,
          timesplayed: true,
          music: {
            select: {
              name: true,
              author: true,
              tab: true,
              lyrics: true,
            },
          },
        },
      },
    },
  });
}

async function findMusicsByRepertoryId(repertoryId: number) {
  return prisma.musicRepertory.findMany({
    where: {
      repertoryId,
    },
    select: {
      lastTimePlayed: true,
      timesplayed: true,
      music: {
        select: {
          name: true,
          author: true,
          tab: true,
          lyrics: true,
        },
      },
    },
  });
}
export default { insert, findByUserId, findMusicsByRepertoryId };
