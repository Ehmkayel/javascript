// The try statement allows you to check whether a specific block of code contains an error or not 
// while the catch statements allows you to display the error found in the try block

try{
    alert("The name is Ramadan");
}
catch (err){
    console.log(err)
}
// the below is going to throw an error of papalert not defined
try{
    papalert("The name is Ramadan");
}
catch (err){
    console.log(err)
}

// throw lets you create your custom error

try{
    throw Error("I love coding");
}
catch (err){
    console.log(err);
}

// finally runs unconditionally after the execution of the try and catch
// finally can override the message of the try

try {
   console.log("Ramadan is my name")
}
catch(err) {
     console.log("I love reading")
} 
finally {
    console.log("joy is coming")
}
        