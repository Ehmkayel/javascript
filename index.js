// string when subtracted, multiplied, divided, and remainder with a number is converted to a number

alert( 22 - '9' ); // 13, "9" converts to a number
alert( '10' / '5' ); // 2, converts both operands(arguements) to numbers

//when two variables with the value of string are added together, the result is going to be string if the values are not converted 

let apple = "6";
let gauva = "23";

console.log(apple + gauva); //623, it will concatenates the two variables

// when two variables with value of string are added together but converted 
let rice = "45";
let beans = "72";

console.log(+rice + +beans); //117, it will be converted to a number and added together(using unary plus) //0r
console.log(Number(rice) + Number(beans));





// for loops
// The below code will keep executing until it gets to 19 because the condition specified was when z less than 20
for(let z = 10; z < 20; z++) {
    console.log('number is:', z)
}
console.log("done looping")

//the below code will keep looping until it gets to where the variable is equal to the number specified
for(let number = 25; number >= 10; number--){
    console.log('number is:', number)
}
console.log("completed the task")


let fruits = ["grape", "strawberry", "banana", "apple"];

for(let fruit = 1; fruit < fruits.length; fruit++){
    console.log(fruits[fruit]);
} 

//while loops
let z = 1;

while(z < 7){
    console.log("number is:", z);
    z++
}

// using prompt

let school = prompt("What coding school do you attend?", "devCareer");

alert(`The name of your school is ${school}`);

// using confirm

school = confirm("Is the name of the school devCareer?");
alert(school);

// 
let name = prompt("what's the name?", "");
alert(name);

// nullish coalescing operator "??"

let user;
alert(user ?? "Ramadan") //the result is going to display "Ramadan" cause user was not assigned a value. In a case where the variable user was assigned a value, the value assigned is going to be displayed rather than the default. example below

user = "Morufat";
alert(user ?? "Ramadan")

// The important difference between "||" AND "?? is that:

// || returns the first truthy value.
// ?? returns the first defined value.
// Example

let myAge = 0;
console.log(myAge || 90)
console.log(myAge ?? 50)