import dayjs from "dayjs";
import { prisma } from "../database.js";
import {
  RepertoryData,
  MusicRepertoryData,
} from "../services/repertoryService.js";

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
          id: true,
          name: true,
          author: true,
          tab: true,
          lyrics: true,
        },
      },
    },
  });
}
async function addMusicToRepertory(data: MusicRepertoryData) {
  return prisma.musicRepertory.create({
    data,
  });
}
async function deleteMusic({ musicId, repertoryId }: MusicRepertoryData) {
  return prisma.musicRepertory.delete({
    where: {
      repertoryId_musicId: { repertoryId, musicId },
    },
  });
}
async function updateMusic({ musicId, repertoryId }: MusicRepertoryData) {
  return prisma.musicRepertory.update({
    where: {
      repertoryId_musicId: { repertoryId, musicId },
    },
    data: {
      lastTimePlayed: { set: new Date() },
      timesplayed: { increment: 1 },
    },
  });
}
export default {
  insert,
  findByUserId,
  findMusicsByRepertoryId,
  addMusicToRepertory,
  deleteMusic,
  updateMusic,
};
