//Spread Operator (... used different than rest parameter)

let ar=[1,2,3,4,5];
let arr=[6,7,8,9,10];
let combine=[...ar,...arr];
console.log(combine); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
console.log(ar); // [ 1, 2, 3, 4, 5 ]
console.log(arr); // [ 6, 7, 8, 9, 10 ]