//Switch Control Flow
//Based on a condition, switch selects one or more code blocks to be executed.

//switch executes the code blocks that matches an expression.

//switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

//This is how it works:

//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, no code is executed.

//Example
let day;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log(day); // Output: (current day of the week)