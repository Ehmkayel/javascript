//function declaration
function move(){
    console.log("kindly move from there")
}
move();//invoking the function

//function expression
 
const eat = function(){
    console.log("what did you eat today");
};
eat();
//arguments and Parameters
const jump = function(run){
    console.log(`running in the morning is my favorite thing to do`);
};
jump();

const run = function(name){
    console.log(`How is running like ${name}`);
};
run("Ramadan"); //when you pass in a value into a function it's known as argument

// let slide = function(name, time){
//     console.log(`How is sliding in the ${time} looks like ${name}`); 
// }
// slide("Ramadan", "afternoon");  //The order is important, the other of the arguments must be same with the parameters

//You can also give the function a default value by assigning the value to the parameters rather than the arguments

let slide = function(name ="Ramadan", time = "afternoon"){
    console.log(`How is sliding in the ${time} looks like ${name}`); 
}
slide();

//return 

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;  //it's best to use the return keyword if you want to reuse a variable later in the file
}
const area = calcArea(7);
console.log(area);

//you can also use the return keyword directly

// const calcHeight = function(sqrt){
//     return Math.sqrt (5**2 - (2**2 + 4**2))
// };
// const height = calcHeight();
// console.log(height);

//arrow function: you don't use the function keyword when using an arrow function

const calcHeight = sqrt => {
    return Math.sqrt (5**2 - (2**2 + 4**2))
};
const Height = calcHeight();
console.log(Height)

//Methods
const name ="ramadan";
let result = name.toUpperCase();
console.log(result)

//callback function: This is when you parse in a function as an argument

const myFunction = (calbackFunction) => {
    let value = 100;
    calbackFunction(value);
};
myFunction(function(value){
    console.log(value)
})

//forEach

// let fruits = ["mango", "pineapple", "orange", "lemon", "grape", "strawberry", "apple"]
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

//using the arrow function

let fruits = ["mango", "pineapple", "orange", "lemon", "grape", "strawberry", "apple"]
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
    




