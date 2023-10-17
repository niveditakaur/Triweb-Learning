import express from "express";
import { startExam, submitExam } from "../controllers/exam";
import { isAuthenticated } from "../middlewares/isAuth";
const router = express.Router();

//get quiz for exam

router.get('/:quizId',isAuthenticated,startExam);

//post answers for exam

router.post('/',isAuthenticated,submitExam);

export default router;