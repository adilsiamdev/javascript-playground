//array
let items = ['laptop', 'phone', 'tablet', 'monitor', 'keyboard', 'mouse', 'printer', 'speaker'];
console.log(items);
//length of array
console.log('Number of items:', items.length); 
//The toString() method returns the elements of an array as a comma separated string.
console.log('Array as string:', items.toString());
//The at() method returns an indexed element from an array:
console.log('Element at index 1:', items.at(1));
//The join() method also joins all array elements into a string.
console.log('Joined array:', items.join(' - '));
//The pop() method removes the last element from an array:
let lastItem = items.pop();
console.log('Popped item:', lastItem);
console.log('Array after pop:', items);
//The push() method adds a new element to an array (at the end):
items.push('webcam');
console.log('Array after push:', items);
//The shift() method removes the first element from an array:
let firstItem = items.shift();
console.log('Shifted item:', firstItem);
//The unshift() method adds a new element to an array (at the beginning):
items.unshift('headphones');
console.log('Array after unshift:', items);
//ECMAScript 5 (JavaScript 2009) added the new method Array.isArray() to JavaScript:
console.log('Is items an array?', Array.isArray(items));
//The splice() method adds and/or removes array elements.
//To add elements:
items.splice(2, 0, 'webcam', 'microphone');
console.log('Array after splice (add):', items);
//Using delete() leaves undefined holes in the array.
delete items[1];
//The concat() method creates a new array by merging (concatenating) existing arrays:
let addItems = ['charger', 'USB cable'];
let allItems = items.concat(addItems);
console.log('Concatenated array:',allItems);
//The copyWithin() method copies array lements to another position in an array:
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);
console.log('Array after copyWithin:', numbers);
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
let nestedArray = [1, 2, [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log('Flattened array:', flatArray);
//The splice() method can be used to add new items to an array:
items.splice(3, 0, 'Neckband', 'Ipad');
console.log('Array after splice (add):', items);
//The splice() method can also be used to remove items from an array:
items.splice(4, 2);
console.log('Array after splice (remove):', items);
//toSpliced() method creates a new array by splicing out a portion of an existing array and replacing it with new elements, without modifying the original array.:
let splicedArray = items.toSpliced(2, 3, 'Smartwatch', 'Tablet');The Array.some()
console.log('Original array:', items);
//pop() method removes the last element from an array and returns that element.:
let removedItem = items.pop();
console.log('Removed item:', removedItem);
//The Array.some() method checks if any of the elements in an array pass a test (provided as a function).
let hasPhone = items.some(item => item === 'phone');
console.log('Does the array contain "phone"?', hasPhone);