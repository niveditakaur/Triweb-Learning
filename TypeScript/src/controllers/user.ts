import { Request,Response } from 'express';

import {addUserToDB} from '../models/user';

const registerUser = (req: Request, res: Response)=>{

    const userName = "Nivedita";
    const password = "password";

    const result = addUserToDB(userName,password);

    res.send(result);
}

export {registerUser}