//indexof
//The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"]; //index jehetu 0 theke count hoy but position amra display korabo so 1 thekei count korbe normal human
let position = fruits.indexOf("Mango") +1;
console.log(fruits);
console.log("Mango is found in position" + "",position);

//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
let position1 = fruits.lastIndexOf("Apple") +1 //+1 deoar karon position index er moto 0 theke suru hoy na
console.log("Apple is found in position" + "", position)

//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
const products = ["pen", "paper", "laptop", "mouse"];
console.log(products.includes("mouse")); //list er moddhe mouse chilo jonno true asche
console.log(products.includes("keyboard")); //list er moddhe keyboard nai jonno false asche.

//The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log("First number over 18 is", first);
function myFunction(value,index,array){
    return value > 18 ;
}

//The findIndex() method returns the index of the first array element that passes a test function.

const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers1.findIndex(myFunction1);
console.log("First number over 18 is found in position", first1 + 1);
function myFunction1(value,index,array){
    return value > 18 ;
}

//ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log("The last temperature over 40 is", high);
