# Lesson 6 Exercises

1. Create a variable called 'hour' and save the current hour of the day(use 24-hour format and save it as a number 0 and 23).
   - if hour is between 6 and 12, display 'Good morning!' in the console
   - if hour is between 13 and 17, display 'Good afternoon!' in the console
   - otherwise, display "Good night!" in the console

2. Continuing from above, try changing the value in the "hour" variable to make it display different messages

3. Continuing from above, create a variable called "name" and save your name inside (as a string). Update the if-statement to display your name in each message. For example: "Good morning ${name}!"

4. Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
    - create a variable "age" and save a person's age inside
    - create an if-statement that checks if the person qualifies for a discount. if they do, display "Discount" in the console. Otherwise, display "No discount" in the console.
    Note: try to use the || operator in your solution
    - try changing the "age" variable to display different messages 

5. Continuing from above, let's say the discount is only available if it is not a holiday. create a variable: const isHoliday = true;
    - update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday
    - note: && has a higher priority than || so you may need to use brackets() to control which code gets done first.
    - try changing the value of isHoliday to display different messages

# We'll create a coin-flip game (create 1 HTML file for the next exercises)

6. Generate a random number with Math.random(). save it in a variable

7. Create an if-statement and check:
    - if the number is less than 0.5, then display "heads" in the console.
    - else display "tails" in the console

8. Instead of displaying "heads" or "tails" in the console, save the result in a variable called result