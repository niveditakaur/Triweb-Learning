const obj= {name: "Nivedita", age:20};
console.log("Before change", obj);
//below doesn't work since obj is constant
//obj= {name: "Raj", age:21};
//console.log("After change", obj);

//how to apply change
obj.name = "Rahul";
obj.age = 22;
console.log("After change", obj);