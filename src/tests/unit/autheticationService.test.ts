import bcrypt from "bcrypt";
import { jest } from "@jest/globals";
import { authRepository } from "../../repositories/index.js";
import { createUser } from "../factories/authfactory.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../../utils/errorUtils.js";
import { authService } from "../../services/index.js";

describe("Unit Test Authentication Services", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  it("should throw conflictError when registering an email already registered", async () => {
    const user = await createUser();
    delete user.hashedPassword;

    jest
      .spyOn(authRepository, "findByEmail")
      .mockResolvedValue({ ...user, id: 1 });

    expect(async () => {
      await authService.signUp(user);
    }).rejects.toEqual(conflictError("Email must be unique"));
  });
  it("should throw unauthorizedError when logging in with invalid credentials", async () => {
    const user = await createUser();
    delete user.hashedPassword;

    jest.spyOn(authRepository, "findByEmail").mockResolvedValue(null);

    expect(async () => {
      await authService.signIn(user);
    }).rejects.toEqual(unauthorizedError("Invalid credentials"));
  });
  it("should throw unauthorizedError when logging in with invalid password", async () => {
    const user = await createUser();
    jest
      .spyOn(authRepository, "findByEmail")
      .mockResolvedValue({ ...user, id: 1 });
    jest.spyOn(bcrypt, "compareSync").mockImplementationOnce(() => false);

    expect(async () => {
      await authService.getUserOrFail(user);
    }).rejects.toEqual(unauthorizedError("Invalid credentials"));
  });
});
