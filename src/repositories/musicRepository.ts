import { prisma } from "../database.js";
import { CreateMusicData } from "../services/musicService.js";
import axios from "axios";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cheerio = require("cheerio");

async function insert(data: CreateMusicData) {
  return prisma.music.create({
    data,
  });
}

async function getByNameAndAuthor(name: string, author: string) {
  return prisma.music.findFirst({
    where: {
      AND: [{ name }, { author }],
    },
  });
}

const getChordsApi = (author: string, name: string) =>
  `https://www.cifraclub.com.br/${author}/${name}/imprimir.html`;

async function getTab(name: string, author: string) {
  try {
    const response = await axios.get(getChordsApi(author, name));
    const $ = cheerio.load(response.data);
    const tab = $("pre").text();
    return tab;
  } catch (error) {
    // console.log(error);
  }
}

export default { insert, getByNameAndAuthor, getTab };
