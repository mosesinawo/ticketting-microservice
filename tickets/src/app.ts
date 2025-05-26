import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { createTicketRouter } from "./routes/new";
// import { signinRouter } from "./routes/signin";
// import { signoutRouter } from "./routes/signout";
// import { signupRouter } from "./routes/signup";
import { errorHandler, NotFoundError, currentUser } from "@tickettingms/common";


const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);
app.use(createTicketRouter);
// app.use(signinRouter);
// app.use(signoutRouter);
// app.use(signupRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

//@ts-ignore
app.use(errorHandler);

export { app };
