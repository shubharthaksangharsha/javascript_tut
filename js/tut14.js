console.log("Tut 14")
/*
Element selector:
1. Single element selector
2. Multi element selector
*/

//1. Single element selector 
let element = document.getElementById("first");
// element = element.className
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
element.innerText = "Shubharthak";
element.innerHTML = "<b>SHUBHARTAHK IS BEST</b>";
// console.log(element);

//Using Query Selector
let sel = document.querySelector('#heading');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
// console.log(sel)

//2. Multi element selector
let elems  = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
// console.log(elems);
// console.log(elems[0].getElementsByClassName('child'));
Array.from(elems).forEach(function(element){
    console.log(element);
    // element.innerHTML = "<b>" + element.innerText + "</b>";
});