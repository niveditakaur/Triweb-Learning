function validateUser(name, password)
{
    if(name == ""){
        console.log("Invalid user name");
        return;
    } else if(password == "" || password.length < 8){
        console.log("Invalid password");
        return;
    }

    console.log("Validation Successful!");
}

let username = "Nivedita";
let userpassword = "nive1234";
validateUser(username, userpassword);