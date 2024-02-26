// for loop: the for loop contains the initialization, condition and increment/decrement.
// for(initialization; condition; increment/decrement){
//     statement(s)
// }
for(let i = 0; i < 5; i++){
    console.log("Coding is fun!");
}

// while loop
let value = 2;
while (value <= 12){
    console.log(value);
    value += 2;
}

// //if statement
// const age = 55;
// if(age < 70){
//     alert("you are an adult");
// }
// // else if and else statements

let wahab = "short";

if(wahab == "short"){

    alert("wahab is a giant")

}else if(wahab == "medium"){

alert("wahab is my friend")

}else {

}
// //

// let kelvin = "short"
 
// if( kelvin == "tall"){

//     alert("kelvin is a dwarf")

// }else if(kelvin == "medium"){

//     alert("kelvin is not my taste")

// }else{
//     alert("I feel like a programmer")
// }

// // logical operators: AND && and OR || 
// //logical AND && (This is used to check multiple conditions at the same time)
// let Amaka = "short"
 
// if( Amaka == "short" && Amaka.includes("r")){

//     console.log("Amaka is fine babe")

// }else if(Amaka == "tall"){

//     console.log("Amaka is gentle")

// }else{
//     console.log("done with this task")
// }
// logical OR (This is used to check if one condition is true)

let password = "short34"
 
if(password.length <= 6 && password.includes("r")){

    console.log("password is dope")

}else if(password.length <= 5 || password.includes("4")){

    console.log("what a strong password")

}else{
    console.log("life of a student")
} 
//variables and block scopes
let age = 30;
if(true){
    console.log("Accessing inside the scope:", age);

}
console.log("Accessing outside the scope:", age);

// break statement: it is used to terminate the execution of the loop or statement when the condition is true
for(let i = 0; i < 6; i++){
    if (i == 4)
    break;
    console.log(i);
}