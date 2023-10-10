import { Request,Response } from 'express';

import {addUserToDB,updateUserData} from '../models/user';

const registerUser = (req: Request, res: Response)=>{

    const userName: string = "Nivedita";
    const password: string = "password";
    const age = 20;

    const result = addUserToDB(userName,password,age);

    res.send(result);
}

const checkTypesAndInterface = (req:Request,res:Response)=>{

    interface Point{
        readonly x:number,
        readonly y:number 
    }
    let num:Point = { x:1, y:2};
    //num.x=4; //Cannot assign to 'x' because it is a read-only property.
    
    type lockedState = "locked" | "unlocked"; //union type self created type 
    let xState: lockedState = "locked";



    const myUser = {
        id:1,
        uname:"Nivedita",
        password:"psw123",
        age:20,
        is_active: false,
        accountStatus: "locked"
    }
    const result = updateUserData(myUser);
    res.send(result);
}

export {registerUser,checkTypesAndInterface}