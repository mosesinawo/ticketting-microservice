import express from "express";
import 'express-async-errors';
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares";
import { NotFoundError } from "./errors";


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed:false,
    secure:true,

  })
)

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

const start = async () =>{
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY must defined')
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB!", error);
    process.exit(1);
  }
  
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!");
  });
}

start();

