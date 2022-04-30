//Variables in js 
console.log("tut3");
//Creating variable using var, let, const
// we can also use back tick for strings
var name = `shubhi`;
var channel;
channel = "shubharthak"
// channel = "shubharthak"
console.log(name, channel);
//Rules for creating javascript variables 
/*
1. Cannot start with number 
2. Can start with letter, number, _ or $ 
3. Are Case-sensitive.
*/
//var is used for old-style JS and declared as global scope.
var city = "Delhi";
console.log(city);

//const
const owner = 'Hari Ram';
console.log(owner);
/*
1.Const variables are used for making the value constant.
2.Const variable cannot be assigned again 
3.Const variable should be initialized with some value, they can't be declared 
4.In const array, we can insert element, remove element  but we can't reinintialized the array.
*/

//let is used for new-style JS and delcared as block scope.
{
    let city = "shubhi";
    city = "Kolkata";
    console.log(city);
}
console.log(city);

const arr1 = [12, 12,32, 232];
arr1.push(23);
console.table(arr1);

/*
Most common programming case types:
1. camelCase - shubharthakSangharsha
2. kebab-case - shubharthak-sangharsha
3. snake_case - shubharthak_sangharsha 
4. PascalCase - ShubahrthakSangharsha
*/