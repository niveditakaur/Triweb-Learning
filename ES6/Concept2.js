 //let and const are Block scoped variable

{
    var a= 1;
    let b= 2; //Block scoped variable
    const c= 3; //Block scoped variable
}
console.log(a);
console.log(b); //not defined error
console.log(c); //not defined error