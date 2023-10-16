import express, { Express } from "express";
import {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz} from '../controllers/quiz';
import {isAuthenticated} from '../middlewares/isAuth';

const router = express.Router();

router.post("/",isAuthenticated,createQuiz);

router.get("/:quizId",isAuthenticated,getQuiz);

router.put("/",isAuthenticated,updateQuiz);

router.delete("/:quizId",isAuthenticated,deleteQuiz);

router.patch("/publish",isAuthenticated,publishQuiz);


export default router;