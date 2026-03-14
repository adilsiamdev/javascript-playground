//The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

////The sort() method can be used to sort an array in descending order:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
fruits1.reverse();
console.log(fruits1);

//The sort() method can be used to sort an array in ascending order:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

// the toReversed() method as a safe way to reverse an array without altering the original array.
//The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed);