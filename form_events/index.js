const form = document.querySelector(".login-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");

form.addEventListener("submit", e =>{
    e.preventDefault();
    console.log(username.value);
    console.log(email.value)
})