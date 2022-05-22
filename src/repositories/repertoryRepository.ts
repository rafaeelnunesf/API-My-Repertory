import { prisma } from "../database.js";
import { RepertoryData } from "../services/repertoryService.js";

async function insert(repertory: RepertoryData) {
  return prisma.repertory.create({
    data: repertory,
  });
}

export default { insert };
