let count = 0;

const counter = document.getElementById("counter")
const decrementButton = document.querySelector(".btn-reduce");
const resetButton = document.querySelector(".btn-reset");
const incrementButton = document.querySelector(".btn-add");

//to decrease the value
decrementButton.addEventListener("click", () => {
    count--;
    counter.innerHTML = count;
});

//to reset the value
resetButton.addEventListener("click", reset);
function reset(){
    count = 0;
    counter.innerHTML = count;
};

//to increase the value
incrementButton.addEventListener("click", () => {
count++;
counter.innerHTML = count;

});
