//Exercise 1 
//You have to create a variable which is a string containing the text which is link you are interested in 
//You have to fetch all the links from a given page which contains this text 

let a = document.links
let text = "code";
Array.from(a).forEach(function(element){
    if (element.href.includes(text)){
        console.log(element.href)
    }
});
