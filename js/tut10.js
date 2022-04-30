//Function
// const mygreet = function(name, thank="Thanks a lot"){
//     console.log(`Happy Birthday ${name} and ${thank}`);    
//     return true;
// }
// console.log("Functions");
// let val = mygreet('Shubharthak');
// console.log(val);
// mygreet("Sangharsha");


// const myobj = {
//     name: "Shubharthak",
//     age: 21,
//     game: function (){
//         return "GTA";
//     }
// }
// console.log(myobj.game());

// arr  = ['fruits', 'vegatables', 'furniture'];
// arr.forEach(function(element, index, arr){
    
// });

//Scope: let/const vs var
//var is function scope as well as global scope 
// let/const is block level scope as well as local scope 
{
    let i = 34;
}
var i = 32;
// console.log('Before function', i);
function ui(name){
    let i = 9;
    console.log('INSIDE FUNCTION', i);
    return `This is a ${name} ui`;
}
console.log(ui('Shubharthak'), i);