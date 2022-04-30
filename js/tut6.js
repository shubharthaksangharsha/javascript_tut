//String Methods 
console.log('String methods');
const name = "Shubharthak";
const greeting = "Good Morning";
// console.log(greeting + ' ' + name);

let html;
html =`<h1> This is Shubharthak JS Tuts </h1>
        <p> This is my para`;
// html = html.concat('<p', '>');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);
// console.log(html[0]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt('3'));
// console.log(html.endsWith('para'));
// console.log(html.includes('para'));
// console.log(html.substring(0, 3));
// console.log(html.slice(0,-4));
// console.table(html.split(''));
// console.log(html.replace('para', 'POWER'));

let fruit1 = 'Orange';
let fruit2 = "Apple";
let myHtml = `Hello ${name}
            <h1> This is heading </h1>
            <p> You like ${fruit1} and ${fruit2}
            
            `;
document.body.innerHTML = myHtml;