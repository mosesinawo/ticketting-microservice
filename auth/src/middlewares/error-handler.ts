import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors";


export const errorHandler = (
  err: Error,
  req: Request,
  res,
  next
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

//   if (err instanceof DatabaseConnectionError) {
//     return res.status(err.statusCode).send({ errors: err.serializeErrors() });
//   }

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
