import { RequestHandler } from "express";
import Result from "../models/result";
import ProjectError from "../helper/error";
import {returnResponse} from "../utils/interface";

const getResult:RequestHandler = async (req, res, next) => {
    try {
        let result;
        if (!!req.params.resultId) {
            const resultId = req.params.resultId;
            result = await Result.findById(resultId);
            if (!result) {
                const err = new ProjectError("Result not found!");
                err.statusCode = 404;
                throw err;
            }
            if (result.userId.toString() !== req.userId) {
                const err = new ProjectError("Permission denied!");
                err.statusCode = 405;
                throw err;
            }
        } else {
            result = await Result.find({ userId: req.userId });
        }
        if (!result) {
            const err = new ProjectError("Result not found!");
            err.statusCode = 404;
            throw err;
        }

        let resp: returnResponse = { status: "success", message: "Result", data: result };
        res.status(201).send(resp);
    } catch (error) {
        next(error);
    }


}

export { getResult };