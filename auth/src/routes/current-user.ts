//@ts-nocheck
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares";
import { requireAuth } from "../middlewares";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  requireAuth,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currenUser || null });
  }
);

export { router as currentUserRouter };
 