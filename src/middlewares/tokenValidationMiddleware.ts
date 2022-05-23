import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { unauthorizedError } from "../utils/errorUtils.js";

export default async function tokenValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.userId = userId;
    next();
  } catch (error) {
    if (error) throw unauthorizedError("Invalid token!");
  }
}
