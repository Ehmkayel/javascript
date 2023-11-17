const button = document.querySelector("button");
const popup = document.querySelector(".wrapper");
const close = document.querySelector(".container-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});
//when you click on the X, it's going to close

close.addEventListener("click", () => {
    popup.style.display = "none";
  });

//when you click on the wrapper it's going to close

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });