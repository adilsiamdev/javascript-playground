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


