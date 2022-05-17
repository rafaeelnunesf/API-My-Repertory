import { prisma } from "./../../database.js";
import supertest from "supertest";
import app from "../../app.js";
import { createUser, insertUser } from "../factories/authfactory.js";

async function truncateTable() {
  await prisma.$executeRaw`TRUNCATE TABLE users;`;
}
async function disconnect() {
  await prisma.$disconnect();
}

beforeEach(truncateTable);
afterAll(disconnect);

describe("authentication tests", () => {
  describe("POST /sign-up", () => {
    it("should return 201 and persist the user given a valid body", async () => {
      const user = await createUser();
      delete user.hashedPassword;
      const response = await supertest(app).post("/sign-up").send(user);
      expect(response.status).toEqual(201);
    });
  });
  describe("POST /sign-in", () => {
    it("should return 200 and send a token", async () => {
      const user = await createUser();
      delete user.hashedPassword;
      await insertUser(user);
      const response = await supertest(app).post("/sign-in").send(user);
      expect(response.status).toEqual(200);
      expect(response.body).not.toBe(null);
    });
  });
});
