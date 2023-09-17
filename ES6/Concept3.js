// this for a normal function
function XYZ(){
    console.log(this);
}
XYZ();
console.log('-------')

//this for an arrorw function
const xyz = () =>{
    console.log('xyz',this);
}
xyz();

// Arrow function

let ar = [1,2,3];
let two = ar.map(element => element*2);
console.log(two);

//Arrow function and return

let ob = (name,age) => {
    return {name:name,age:age};
}
console.log(ob('Rahul',18));

//Arrow function without return 

let obj = (name,age) => ({name:name,age:age})
console.log(obj('Rahul',18));


//for each loop
let arr=[1,2,3,4,5]
arr.forEach((e)=> {
    console.log(e);
})