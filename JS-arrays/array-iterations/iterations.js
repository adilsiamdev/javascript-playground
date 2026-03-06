//The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction1);

function myFunction1(value) {
  console.log(value);
}

//The map() method creates a new array by performing a function on each array element.

//The map() method does not execute the function for array elements without values.

//The map() method does not change the original array.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction2);

function myFunction2(value) {
  return value * 2;
}
console.log(numbers2);

const numbers3 = [45, 4, 9, 16, 25];
const numbers4 = numbers3.map(myFunction4);

function myFunction4(value) {
  return value * 7;
}
console.log(numbers4);


