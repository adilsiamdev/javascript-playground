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

//note: The getDay() method returns the weekday as a number between 0 and 6.
//(Sunday=0, Monday=1, Tuesday=2 ..)

//.........................
//When JavaScript reaches a break keyword, it breaks out of the switch block.

//This will stop the execution inside the switch block.
//No more statements in the switch block will be executed.
//It is not necessary to break the last case. The switch ends (breaks) there anyway.

//note: The break keyword is crucial for preventing a "fall-through." Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.

//Example without break
let day2;
let date2 = new Date().getDay();
    
switch (date2) {
    case 0:
        day2 = "Sunday";
        case 1:
        day2 = "Monday";
        case 2:
        day2 = "Tuesday";
        case 3:
        day2 = "Wednesday";
        case 4:
        day2 = "Thursday";
        case 5:
        day2 = "Friday";
        case 6:
        day2 = "Saturday";
}

console.log(day2); // Output: (current day of the week)

//.........................
