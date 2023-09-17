let ar1 = ['h','e','l','l','o'];
let keys = ar1.keys();
console.log(keys);   //object iterator

for (let k of keys){
    console.log(k); 
}

//.find()

let arr = [10,20,40,1];
let firstodd = arr.find(getOdd);

function getOdd(value,index,ar){
    return value % 2 != 0;
}
console.log(firstodd);

// .findindex()

console.log
let indexarr= arr.findIndex((value,index,ar)=>{
    return value % 2 != 0;
});
console.log(indexarr);