import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../errors";
import { DatabaseConnectionError } from "../errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res,
  next
) => {
  if (err instanceof RequestValidationError) {
    return res.status(err.statusCode).send({ errors: err.setrializeErrors() });
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
