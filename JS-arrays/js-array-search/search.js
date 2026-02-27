//indexof
//The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"]; //index jehetu 0 theke count hoy but position amra display korabo so 1 thekei count korbe normal human
let position = fruits.indexOf("Mango") +1;
console.log(fruits);
console.log("Mango is found in position" + "",position);

//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
let position1 = fruits.lastIndexOf("Apple") +1 //+1 deoar karon position index er moto 0 theke suru hoy na
console.log("Apple is found in position" + "", position)

