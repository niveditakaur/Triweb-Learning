import { Request, Response, NextFunction } from "express";

import User from "../models/user";
import ProjectError from "../helper/error";

interface returnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: returnResponse;

  try {
    const userId = req.params.userId;

    if (req.userId != req.params.userId) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 401;
      err.data = { hi: "It's error" };
      throw err;
    }

    const user = await User.findById(userId, { name: 1, email: 1 });
    if (!user) {
      const err = new ProjectError("User Not Found");
      err.statusCode = 401;
      throw err;
    } else {
      resp = { status: "success", message: "User found", data: user };
      res.status(200).send(resp);
    }
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: returnResponse;

  try {
    if (req.userId != req.body._id) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 401;
      throw err;
    }

    const userId = req.body._id;
    const user = await User.findById(userId);
    if (!user) {
      const err = new ProjectError("User Not Found");
      err.statusCode = 401;
      throw err;
    }
    if (user) {
      user.name = req.body.name;
      await user.save();
      resp = { status: "success", message: "User updated", data: {} };
      res.send(resp);
    } else {
      resp = { status: "error", message: "User not found", data: {} };
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
};

export { getUser, updateUser };