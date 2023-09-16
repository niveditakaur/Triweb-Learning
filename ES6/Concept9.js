// Object Matching , Deep Matching

function get(){
    let obj={
        ename: "Raj",
        salary: 1000,
        location: {
            city:"Bangalore"
        }
    }
    return obj;
}

let{ename,salary}= get();
console.log("Name:", ename, "Salary:", salary); // Object Matching

let{ename: employeename,salary: employeesalary, location: {city: employeecity}} = get(); //using object
console.log("Name:", employeename, "Salary:", employeesalary, "City", employeecity); // Deep Matching