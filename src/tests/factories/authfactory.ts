import { CreateUserData } from "./../../services/authService.js";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import { prisma } from "../../database.js";

export async function createUser() {
  const user = {
    email: faker.internet.email(),
    password: "123456",
    hashedPassword: bcrypt.hashSync("123456", 10),
  };
  return user;
}
export async function insertUser({ email, password }: CreateUserData) {
  const insertedUser = await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password, 10),
    },
  });

  return insertedUser;
}
