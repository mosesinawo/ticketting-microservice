//@ts-nocheck
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares";
import { requireAuth } from "../middlewares";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  console.log("current user", req.currentUser)
  res.send({ currentUser: req.currentUser ? req.currentUser : null });
});

export { router as currentUserRouter };
