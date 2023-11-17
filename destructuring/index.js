//destructuring array

let names = ["ramadan", "ugochuckwu", "ojo"]
let[firstname,, surname] = names;
console.log(surname)

let fruits = ["apple", "mango", "strawberry", "grape"]
// let [firstFruit, secondFruit, thirdFruit, fourthFruit] = fruits  //destructuring
// console.log(firstFruit);
// console.log(fourthFruit);
// console.log(thirdFruit);
// console.log(secondFruit);

//to get the rest of the fruits, you can use the rest operator
let [firstFruit, ...restOfFruits] = fruits
console.log(restOfFruits) // this will get the remaining fruits after the first fruit
//destructuring an objects



let user = {
    username: "ramadan", 
    age: 30, 
    email: "ramadan@gmail.com"
}

let{username, age, email} = user
console.log(email)


