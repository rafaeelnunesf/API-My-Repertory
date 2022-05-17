// import { User } from "@prisma/client";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { authRepository } from "../repositories/index.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";
dotenv.config();

export type CreateUserData = Omit<User, "id">;

async function signUp(createUserData: CreateUserData) {
  const existingUser = await authRepository.findByEmail(createUserData.email);
  if (existingUser) throw conflictError("Email must be unique");

  const hashedPassword = bcrypt.hashSync(createUserData.password, 12);

  await authRepository.insert({ ...createUserData, password: hashedPassword });
}

async function signIn(loginData: CreateUserData) {
  const user = await getUserOrFail(loginData);

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

/* async function findById(id: number) {
  const user = await authRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
} */

async function getUserOrFail(loginData: CreateUserData) {
  const user = await authRepository.findByEmail(loginData.email);
  if (!user) throw unauthorizedError("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(loginData.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

export default {
  signUp,
  signIn,
  /* findById, */
  getUserOrFail,
};
