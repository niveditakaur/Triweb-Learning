// Redirect request to particular method on Controller
import express from 'express';
import {getUser,updateUser} from '../controllers/user';
import {isAuthenticated} from '../middlewares/isAuth';
const router = express.Router();

//Get /user/:userID
router.get('/:userId',isAuthenticated , getUser);

//Put /user/
router.put('/',isAuthenticated,updateUser);

export default router;