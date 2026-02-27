const numbers = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

const fruits = ['apple', 'banana', 'orange', 'grape'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
