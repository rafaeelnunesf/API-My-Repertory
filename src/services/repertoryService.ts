import { Repertory } from "@prisma/client";
import { repertoryRepository } from "../repositories/index.js";

export type RepertoryData = Omit<Repertory, "id">;

async function createRepertory(repertory: RepertoryData) {
  return await repertoryRepository.insert(repertory);
}

export default { createRepertory };
