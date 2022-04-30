//Type conversion and type coercion
console.log('Type conversion and Type coercion');
let myVar;
myVar = 34;
console.log(myVar, typeof myVar);
myVar = String(34);
console.log(myVar, typeof myVar);
let booleanVar = true;
console.log(booleanVar, typeof booleanVar);
booleanVar = String(booleanVar);
console.log(booleanVar, typeof booleanVar);
booleanVar = Number(true);
console.log(booleanVar, typeof booleanVar);

let date = new Date();
console.log(date, typeof date);
date = String(new Date());
console.log(date, typeof date);

let arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);
arr = String([1, 2, 3, 4, 5]);
console.log(arr, typeof arr);


//Using toString
let i = 8;
console.log(i.toString());

//Number function 
let string = "12345";
console.log(string, typeof string);
string = Number(string);
console.log(string, typeof string);


//Parse int and parse float 
let number = parseInt("34.03");
console.log(number, typeof number);
number = parseFloat(34.334);
console.log(number, typeof number);
console.log(number.toFixed(30), typeof number);


//Type Coercion
let mystr = "698";
let mynum = 34;
console.log(mystr + mynum);
