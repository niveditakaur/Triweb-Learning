import express from "express";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import quizRoute from "./routes/quiz";
import ProjectError from "./helper/error";

const app = express();

interface returnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

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
app.use('/quiz',quizRoute);

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
