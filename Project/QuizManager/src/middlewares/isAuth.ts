import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import ProjectError from "../helper/error";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    let isUserAuth = false;

    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const err = new ProjectError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    const token = authHeader.split(" ")[1];

    let decodeToken: { userId: String; iat: Number; exp: Number };
    try {
      decodeToken = <any>jwt.verify(token, "secret");
    } catch (error) {
        const err = new ProjectError("Not authenticated");
        err.statusCode = 401;
        throw err;
    }

    if (!decodeToken) {
        const err = new ProjectError("Not authenticated");
        err.statusCode = 401;
        throw err;
    }

    req.userId = decodeToken.userId;

    next();
  } catch (error) {
    next(error);
  }
};

export { isAuthenticated };
