import express from "express";
import { getResult } from "../controllers/result";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

router.get('/:resultId?',isAuthenticated,getResult);


export default router;