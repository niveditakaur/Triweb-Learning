const addUserToDB = (userName:string,password:string,age:number) =>{

    console.log(userName,password,age);
    return "User Registration Done";

}
//type lockedState = "locked" | "unlocked";
interface User{
    id:number,
    uname:string,
    password:string,
    age:number
    is_active : true|false,
    accountStatus: string | number // union type
}
const updateUserData = (objUser:User):string =>{

    console.log(objUser.uname);
    return "Update Done";

}

export {addUserToDB,updateUserData}