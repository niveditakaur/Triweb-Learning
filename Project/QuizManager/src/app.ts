import express from "express";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import quizRoute from "./routes/quiz";
import examRoute from "./routes/exam";
import resultRoute from "./routes/result";

import ProjectError from "./helper/error";
import {returnResponse} from "./utils/interface";

const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global {
  namespace Express {
    interface Request {
      userId: String;
    }
  }
}

app.get("/", (req, res) => {
  res.send("Hi");
});

//Redirect /user to UserRoute
app.use("/user", userRoute);
//Redirect /auth
app.use("/auth", authRoute);

//Redirect /quiz
app.use("/quiz",quizRoute);

//Redirect /exam
app.use("/exam",examRoute);

//Redirect /result
app.use("/result",resultRoute);

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
  let message: String;
  let statusCode: number;

  if (!!err.statusCode && err.statusCode < 500) {
    message = err.message;
    statusCode = err.statusCode;
  } else {
    message = "Something went wrong try later";
    statusCode = 500;
  }
  let resp: returnResponse = { status:"error",message,data:{} };
  if(!!err.data){
    resp.data=err.data;    
  }
  
  console.log(err.statusCode,err.message);
  res.status(statusCode).send(resp);
});

async function connectDb() {
  try {
    await mongoose.connect(connectionString);
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
}

connectDb();
