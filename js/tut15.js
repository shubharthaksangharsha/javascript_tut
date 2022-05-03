console.log("Tut 15");

let cont = document.querySelector('.container')
//console.log(cont.childNodes) //for including comments and other texts
//console.log(cont.children) //for not including comments and other texts
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);

/*Node types
1. Elements
2. Attribute
3. Text node 
8. Comment 
9. Document 
10. docType
*/


let container = document.querySelector('div.container');
console.log(container.children[1].children[0].children);