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

//To change the content of all the elements
 
// const lists = document.querySelectorAll("li");
// lists.forEach(list => {
//     list.innerText += "done with this topic";
// })

//get attributes
const links = document.querySelector("a");

console.log(links.getAttribute("href"));
//set attributes
links.setAttribute("href", "https://google.com");// this will change the first reference to the new one declared here
links.setAttribute("style", "color: red;");

//click events
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("thanks for your time");
});

//removing an elements from the dom

// const ul = document.querySelector("ul");
// ul.remove(); //this will remove the ul from the webpage

//Bom (Browser object model)

//change location of webpage
alert(location.href) //this will show the current url
//change 
if (confirm("open Google")){
    location.href = "https://google.com"; //this will redirect the browser to this location specified
}
alert("you are browsing from:" + navigator.userAgent)


