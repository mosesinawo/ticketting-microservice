//@ts-nocheck
import { currentUser } from "@tickettingms/common";
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";


const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  console.log("current user", req.currentUser)
  res.send({ currentUser: req.currentUser ? req.currentUser : null });
});

export { router as currentUserRouter };
