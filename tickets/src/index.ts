import mongoose from "mongoose";
import { app } from "./app";

const start = async () =>{
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY must defined')
  }
  if(!process.env.MONGO_URI){
    throw new Error('MONGO_URI must defined')
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
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

