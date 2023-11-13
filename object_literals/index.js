//object literals

// let user = {
//     name: "ramadan",
//     email: "ram25@gmail.com",
//     nationality: "Nigeria",
//     location: "abuja",
//     age: 25,
//     tweets: ["life is full of success stories", "with dedication and never giving up attitude, you a step to your dream"],
// }
// console.log(user);
// console.log(user.location);//dot notation
// console.log(user["age"]);//square bracket

//Adding methods to an object
let user = {
    name: "ramadan",
    email: "ram25@gmail.com",
    nationality: "Nigeria",
    location: "abuja",
    age: 25,
    tweets: ["life is full of success stories", "with dedication and never giving up attitude, you a step to your dream"],
    //the method
    login: function(){
        alert("the user just logged in");
    }, 
    //this
    logTweets: function(){
        console.log(this.tweets);
    }
};
user.login()//to call the method
user.logTweets()
console.log(this)

//math object
const value = 10 ** 2.4;
console.log(Math.round(value));// this rounds it to an integer
console.log(Math.ceil(value)); //this rounds it up to the nearest integer irrespective of the number after the integer
console.log(Math.floor(value)); //this rounds it down to the nearest integer
console.log(Math.PI);