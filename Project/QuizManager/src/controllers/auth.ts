import { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {validationResult} from 'express-validator';

import User from "../models/user";
import ProjectError from "../helper/error";

interface returnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const registerUser:RequestHandler = async (req,res,next) => {
  let resp: returnResponse;

  try {

    const validationError = validationResult(req);
    if(!validationError.isEmpty()){
      const err = new ProjectError("Validation failed!");
      err.statusCode=422;
      err.data=validationError.array();
      throw err;
    }

    const email = req.body.email;
    const name = req.body.name;
    const password = await bcrypt.hash(req.body.password, 12);

    const user = new User({ email, name, password });
    const result = await user.save();

    if (!result) {
      resp = { status: "error", message: "No result found", data: {} };
      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registration done",
        data: { userId: result._id },
      };
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
};

const loginUser:RequestHandler = async (req, res, next) => {
  let resp: returnResponse; 
  try {
    const email = req.body.email;
    const password = req.body.password;
    // Find user with email
    const user = await User.findOne({ email });
    if (!user) {
      const err = new ProjectError("User Not Found");
      err.statusCode = 401;
      throw err;
    }

    if (user) {
      const status = await bcrypt.compare(password, user.password);
      if (status) {
        const token = jwt.sign({ userId: user._id }, "secret", {
          expiresIn: "1h",
        });

        resp = { status: "success", message: "Logged In", data: { token } };
        res.status(200).send(resp);
      } else {
        const err = new ProjectError("Credential mismatch");
        err.statusCode = 401;
        throw err;
      }
    }
  } catch (error) {
    next(error);
  }
};

const isUserExist = async (email:String)=>{

    const user = await User.findOne({ email });
    if (!user) {
      return false;
    }
    return true;
}

export { registerUser, loginUser, isUserExist }; 
