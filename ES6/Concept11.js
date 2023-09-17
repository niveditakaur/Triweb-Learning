// Fail Soft Destructuring

let arr=[1,2,3]

let[a=5,b=6,c=7,d] = arr;

console.log(a,b,c,d); // 1 2 3 undefined