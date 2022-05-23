import { Request, Response } from "express";
import authService from "../services/authService.js";

async function signUp(req: Request, res: Response) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  const user = req.body;
  await authService.signUp(user);
  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  const user = req.body;
  const token = await authService.signIn(user);
  res.send({ token });
}
export default {
  signUp,
  signIn,
};
