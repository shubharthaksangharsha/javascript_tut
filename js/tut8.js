//if else, terranary, switch
//if else 
console.log("if else");
const age = 65;
const vari = 34;
const drive = false;
// if (age == 19){
//     console.log("age is 19");
// } else if (age == 65){
//     console.log("age is 65");
// } else{
//     console.log("age is not 19");
// }

// if (typeof vari !== 'undefined'){
//     console.log("vari is defined");
// } else{
//     console.log("vari is not defined");
//     }

// if (drive && age >= 18){
//     console.log("you can drive");
// } else{
//     console.log(`you can't drive`);
// }

//Terrranary Operator 
// console.log(age == 45 ? 'Age is 45' : 'Age is not 45');

//Switch case 
switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 65:
        console.log("You are 65");
        break;
    default:
        console.log("undefined age");
        break;
}
