import { Music } from "@prisma/client";
import joi from "joi";

type MusicDataInput = Omit<Music, "id" | "tab" | "lyrics">;
export const musicSchema = joi.object<MusicDataInput>({
  name: joi.string().required(),
  author: joi.string().required(),
});
