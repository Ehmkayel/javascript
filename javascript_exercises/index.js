// use alert(...); to display "Good morning!" in a popup
alert("Good morning!");
// display your name in a popup
alert("My name is Lamidi Morufat Kajogbola")
// using math, calculate 10+5 in the console; I will console the result rather than calculating it in the console

const bigNumber = 10;
const smallNumber = 5;
const both = bigNumber + smallNumber;
console.log(both)

// calculate 20 - 5 in the console: I will console the result rather than calculating it in the console
const first = 20;
const second = 5;
const result = first - second;
console.log(result)

// calculate 2 + 2 - 5 in the console; I will console the result rather than calculating it in the console
const even = 2;
const odd = 5;
const total = even + even - odd;
console.log(total)

// use innerHtml to write good morning on the web
document.body.innerHTML = "Good Morning!";
// use innerHTML to write your name on the web
document.body.innerHTML = "Lamidi Morufat Kajogbola";
// you order a t-shirt for $10, socks for $8, and dinner plates for $20. use javascript tp calculate the total cost of your order 
const tShirt = 10;
const socks = 8;
const dinnerPlates = 20;
const totalCost = tShirt + socks + dinnerPlates;
console.log(totalCost)

// your bank account was $100, you spend $20 on lunch, $50 on dinner, and earn $200 from your job. calculate how much money you have
const account = 100;
const spend = 20;
const dinner = 50;
const earn = 200;
const totalAmountLeft = earn + account - (spend + dinner);
console.log(totalAmountLeft)

// use innerHTML to make the webpage blank
document.body.innerHTML = "";


// lesson2 Exercises Solution
// At a restaurant, you order 1 soup for $10, 3 burgers for $8 each,and 1 ice cream for $5. Use javascript to calculate the cost of the order
const soup = 1 * 10;
const burgers = 3 * 8;
const iceCream = 1 * 5;
const costOfOrder = soup + burgers + iceCream;
console.log(costOfOrder) 

// you're at a restaurant with 2friends(3 people in total) and make the same order as above. calculate how much each person pays
const numberOfPeople = 3;
const individual = 1;
const order = costOfOrder;
const each = order * individual;
console.log("each person pays:", each);

// calculate the total cost of a toaster($18.50) and 2 shirts($7.50 each)
const toaster = 18.50;
const shirts = 2 * 7.50;
const totalCosts = toaster + shirts;
console.log(totalCosts);

// calculate a 10% for the total in above
const tax = 10/100;
const totalWithTax = tax * totalCosts;
console.log(totalWithTax);

// calculate a 20% tax for the totalCosts(remember that 1% = 1/100, so 20% = 20/100 = 0.2)
const taxx = 0.2;
const sum = taxx * totalCosts;
console.log(sum)

// we'll use javascript to convert temperatures from celsius to Fahrenheit. The formula is 
// fahrenheit = (celsius * 9/5) + 32
// celsius = (fahrenheit - 32) * 5/9

let temperature = 25;
const temFahrenheit =  (25 * (9 / 5)) + 32;
console.log(temFahrenheit)

temperature = 86;
const temCelsius = (86 - 32) * (5 / 9);
console.log(temCelsius)

temperature = -5;
const tempeFahrenheit = (-5 * (9 / 5)) + 32;
console.log(tempeFahrenheit)


// lesson 3 Exercises 



