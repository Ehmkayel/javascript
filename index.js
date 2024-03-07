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