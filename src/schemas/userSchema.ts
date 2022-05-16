import { CreateUserData } from "./../services/authService.js";
import Joi from "joi";

export const userSchema = Joi.object<CreateUserData>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
