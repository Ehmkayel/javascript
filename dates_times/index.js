//creating a new dates with a constructor

const thisMoment = new Date();
console.log(typeof thisMoment)
console.log(thisMoment);

//dates methods

//TO get the full year, you use the getFullYear method
console.log('Year:', thisMoment.getFullYear());

//to get the position of the month
console.log("Month:", thisMoment.getMonth());//this will get the position of the month by counting from zero(javascript is zero based)

//to get the day 
console.log("dayOfTheWeek:", thisMoment.getDay());

//to get the date in the month
console.log("date:", thisMoment.getDate());

//to get hours
console.log("hours:", thisMoment.getHours())

//TO get minutes
console.log("minutes:", thisMoment.getMinutes());

//to get seconds
console.log("seconds:", thisMoment.getSeconds());


//Adding timestamps
console.log("timestamp:", thisMoment.getTime()); //this is going to create a milliseconds  

//date strings
alert(thisMoment.toDateString());
console.log(thisMoment.toTimeString());
console.log(thisMoment.toLocaleDateString()); //this going to create the date in your local area
console.log(thisMoment.toLocaleString());//this is going to create the locale date and time


//to convert timestamps into date
const timestamp = 1701051861622;
console.log(new Date(timestamp));

//creating a simple digital clock

const clock = document.querySelector(".clock");

const tick = () => {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const html = `${hours} : 
    ${minutes} :
    ${seconds}`;

    clock.innerHTML = html;
      
}
setInterval(tick, 1000);