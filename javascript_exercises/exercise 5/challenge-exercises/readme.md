# challenge exercise for supersimpledev
This file contains the steps I used to build this calculator as directed by [SuperSimpleDev](https://youtu.be/SBmSRK3feww?feature=shared)

- We'll build a calculator(don't worry we'll do it step by step)

1. Go to "supersimple.dev/projects/calculator" in your browser
2. Open the console and click the calculator buttons to see how it works
3. Create a new file calculator.html for this project 
4. Add the HTML structure (<!DOCTYPE html>, <html>, <head>, <body>) Add a <title> with the text "calculator".
5. Create the button 1, 2, 3, +, =
6. Create a <script>, create a variable called "calculation", and save an empty string inside: let calculation = "";(This variable will store the calculation like "1 + 2" or "11 + 2 + 2") 
7. When we click the "1" button:
   - Add the string "1" to the calculation variable: calculation += "1";
   - Display the calculation in the console: console.log(calculation)
8. Do the same for the "2", "3", and "+" buttons (add "+" instead of "+")
9. When we click the "=" button, use the code: eval(calculation); (eval(...)converts the calculation string into actual math)
   - Save the result back in "calculation": calculation = eval(calculation);
   - Display the result back in console: console.log(calculation);
10. Create the rest of the buttons in the calculator. To create multiple rows of buttons, put the buttons inside <p> elements </p>