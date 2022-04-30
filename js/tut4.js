//Data-types in JS (Dynamically Identified in JS)
/*
1. Primitive: Stored in Stack
    a- String
    b- Numbers
    c- Boolean
    d- Null
    e- undefined
    f- Symbol
2. Referenced: Stored in Heap
    a- Arrays
    b- Object literals
    c- functions
    d- Dates
*/
console.log("Data types");
//Strings
let name = "Shubharthak";
console.log("My name is " + name);
console.log("DataType of name is " + (typeof name));
//Numbers
let marks = 100;
console.log("Data type of marks is " + (typeof marks));

//Boolean 
let flag = true;
console.log("Data type of flag is " + (typeof flag));

//Null
let nullVar = null;
console.log("Data type of nullVar is " + (typeof nullVar));

//Undefined 
let undef = undefined;
console.log("Data type of undef is " + (typeof undef));

//Reference Datatypes 

//Arrays
let myarr = [1, 2, 3, false, "shubharthak"];
console.log("Data type of myarr is " + (typeof myarr));

//Object Literals 
let student_marks = {
    shubharthak: 100,
    harry: 'shuhbharthak',
    "rohan das": 34
}
console.table(student_marks);
console.log("Data type of student_marks is " + (typeof student_marks));

//Functions
function findName() {
    
}
console.log("Data type of findName is " + (typeof findName));

//Dates
let date = new Date();
console.log("Data type of date is " + (typeof date));