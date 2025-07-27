import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@tickettingms/common";
import { Ticket } from "../models";

const router = express.Router();

router.get("/api/tickets", async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});

  res.send(tickets);
});

export { router as indexTicketRouter };
