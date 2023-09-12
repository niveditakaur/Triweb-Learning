let n = 1;
console.log(typeof(n)); //number

n = "Nivedita"; // Dynamic type
console.log(typeof(n)); //string

//Note: typescript

let num1 = '3';
let num2 = 5;
console.log(num1+num2); // string and + -> perform concatination 

let num3 = '3';
let num4 = 5;
console.log(parseInt(num3)+num4); // parseInt 8


let num5 = '3.5';
let num6 = 5;
console.log(parseFloat(num5)+num6); // parseFloat 8.5


let num7 = '8';
let num8 = 5;
console.log(+num7+num8); // '+'+string -> number 13

console.log(num7 - num8); // 3
console.log(num8 - num7); // -3

console.log(num7 * num8); // 40
console.log(num8 * num7); // 40

console.log(num7 / num8); // 1.6
console.log(num8 / num7); // 0.625


num9 = '101';
console.log(parseInt(num9,16)); //257, it handle 101 as hexadecimal