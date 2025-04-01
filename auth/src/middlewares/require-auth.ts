import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../errors";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currenUser) {
    console.log("I was called")
    return new NotAuthorizedError();
  }
  console.log('I was called after check')
  next();
};