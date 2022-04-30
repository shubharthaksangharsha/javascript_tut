//Arrays and objects
console.log('Array and objects');
const marks = [12, 20, 99, 42, 52, 35];
const fruits = ["Oranges", 'Apples', 'Mangoes'];
const mixed = ['shubharthak', 89, [12, 23]];

const arr = new Array(23, 21, 21, 23, "Orange");
// console.log(arr);
// console.log(fruits);
console.log(marks);

// console.log(arr.length)
// console.log(Array.isArray(arr));
arr[0] = "Spiderman";
// console.log(arr)
let arr_el = arr[0];
// console.log("element: " + arr_el);
let value = marks.indexOf(12);
// marks.push(2);
// marks.unshift(1231);
// marks.pop();
// marks.shift();
// marks.splice(1, 2); 
marks.reverse();
marks.concat(fruits);
// console.log(value);
let myobj = {
    'full name': 'Shubahrthak',
    age: 21,
    isActive: true,
    marks: marks
};

console.table(myobj.marks);
console.log(myobj.isActive, myobj["full name"]);