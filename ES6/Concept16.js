//Promise

function updateAge(age){
    return new Promise((resolve, reject) => {
        if(age>0){
            age = age+1;
        resolve(age);
        }else{
            reject("Invalid");
        }
    })
}
updateAge(0).then((updatedAge)=>{
    console.log("Updated age:", updatedAge);
},
(rejectedmsg)=> {
    console.log(rejectedmsg);
}
)