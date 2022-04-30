//loops
console.log("loops");
console.log("-----------------");
console.log("Using For Loop")
console.log("-----------------");
for (let i = 0; i < 5; i++) {
    i++;
    console.log(i+1);
}

console.log("-----------------");
console.log("Using While Loop")
console.log("-----------------");
let i = 0;
while (i < 5) {
    console.log(i + 1);
    i++;
}
console.log("-----------------");
console.log("Using Do-While Loop")
console.log("-----------------");
let k = 0;
do {
    console.log(k + 1)
    k++;
} while (k <= 5);

//For each 
console.log("-----------------");
console.log("Iterating array using for-each loop");
console.log("-----------------");
let arr = [1, 2, 3, 3, 4, 5, 6];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

let obj = {
    name: 'Shubharthak Sangharasha',
    age: 21,
    type: "Dangerous Programmer",
    OS: 'Arch Linux'
}

for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);;
}

console.log('Done');