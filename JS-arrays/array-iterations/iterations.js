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


//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x,x * 10]);
console.log(newArr);

//The filter() method creates a new array with array elements that pass a test.
//This example creates a new array from elements with a value larger than 18:
const numbers5 = [45, 4, 9, 16, 25];
const numbers6 = numbers5.filter(myFunction3);

function myFunction3(value) {
  return value > 18;
}
console.log(numbers6);

//The reduce() method runs a function on each array element to produce a single value.
//The reduce() method works from left-to-right in the array. See also reduceRight().
const numbers7 = [45, 4, 9, 16, 25];
const sum = numbers7.reduce(myFunction5);

function myFunction5(total, value) {
  return total + value;
}
console.log(sum);

//The reduceRight() method runs a function on each array element to produce a single value.
//The reduceRight() works from right-to-left in the array. See also reduce().
const numbers8 = [45, 4, 9, 16, 25];
let sum2 = numbers8.reduceRight(myFunction6);
function myFunction6(total,value){
  return total+value;
}
console.log(sum2)


//The every() method checks if all array values pass a test.
//This example checks if all array values are larger than 18.
const numbers9 = [45, 4, 9, 16, 25];
const allOver18 = numbers9.every(myFunction7);

function myFunction7(value) {
  return value > 18;
}
console.log("All over 18 is " + allOver18);