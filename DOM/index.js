//to select a single elements
const list = document.querySelector("li");
console.log(list);

//to select multiple elements
const navigation = document.querySelectorAll("li");

console.log(navigation);

//get element by id
const text = document.getElementById("text");

console.log(text);

//get elements by their classname
const link = document.getElementsByClassName("links");//the get elements by class name does not start with . 
console.log(link);

//get elements by their tag name
const lists = document.getElementsByTagName("li");
console.log(lists);

//to change the contents

const paragraph = document.getElementById("text");
// console.log(paragraph.innerText);
paragraph.innerText += "I'm falling in love with javascript";//to join the old text and the new one together
