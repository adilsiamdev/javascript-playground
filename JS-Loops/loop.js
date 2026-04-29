//========================================
// JAVASCRIPT LOOPS - A to Z Learning Guide
//========================================

// ===== 1. BASIC FOR LOOP =====
console.log("===== 1. BASIC FOR LOOP =====");

// Syntax: for (initialization; condition; increment/decrement)
// এটি সবচেয়ে সাধারণ লুপ - নির্দিষ্ট সংখ্যক বার চলে

// Example 1: Simple counting loop (1 থেকে 5 পর্যন্ত)
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}
// Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// Example 2: Reverse counting (5 থেকে 1 পর্যন্ত)
for (let i = 5; i >= 1; i--) {
    console.log("Reverse: " + i);
}

// Example 3: Loop with array (অ্যারে এর প্রতিটি উপাদান অ্যাক্সেস করা)
let fruits = ["আপেল", "কমলা", "আম", "কলা"];
for (let i = 0; i < fruits.length; i++) {
    console.log("ফল: " + fruits[i]);
}


// ===== 2. WHILE LOOP =====
console.log("\n===== 2. WHILE LOOP =====");

// Syntax: while (condition)
// যতক্ষণ condition true, ততক্ষণ চলবে
// প্রথমে condition check করে, তারপর চলে

// Example 1: Simple while loop
let count = 1;
while (count <= 5) {
    console.log("While loop: " + count);
    count++;
}

// Example 2: User input simulation
let password = "";
let attempts = 0;
while (password !== "1234" && attempts < 3) {
    password = "1234"; // Simulate user input
    attempts++;
    console.log("Attempt: " + attempts);
}


// ===== 3. DO-WHILE LOOP =====
console.log("\n===== 3. DO-WHILE LOOP =====");

// Syntax: do { } while (condition)
// প্রথমে কমপক্ষে একবার চলে, তারপর condition check করে
// এবং পরবর্তী চক্রের জন্য চলে না চলে তা check করে

// Example 1: Basic do-while
let i = 1;
do {
    console.log("Do-While: " + i);
    i++;
} while (i <= 5);

// Example 2: Menu simulation
let choice = "1";
do {
    console.log("Menu: " + choice);
    choice = "5"; // Simulate exit choice
} while (choice !== "5");


// ===== 4. FOR-IN LOOP =====
console.log("\n===== 4. FOR-IN LOOP =====");

// Syntax: for (key in object)
// অবজেক্ট এর প্রতিটি key iterate করে
// Array এবং Object দুটোতেই কাজ করে

// Example 1: Object iteration
let person = {
    name: "আদিল",
    age: 25,
    city: "ঢাকা"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output: name: আদিল, age: 25, city: ঢাকা

// Example 2: Array with for-in (index পায়)
let numbers = [10, 20, 30, 40];
for (let index in numbers) {
    console.log("Index: " + index + ", Value: " + numbers[index]);
}

// ⚠️ Warning: for-in array এর জন্য ideal নয়
// Array এর জন্য for বা for-of ব্যবহার করা ভালো


// ===== 5. FOR-OF LOOP =====
console.log("\n===== 5. FOR-OF LOOP =====");

// Syntax: for (value of iterable)
// সরাসরি value পায়, index নয়
// Array, String, Set, Map ইত্যাদিতে কাজ করে

// Example 1: Array with for-of (value পায়)
let colors = ["লাল", "সবুজ", "নীল"];
for (let color of colors) {
    console.log("রঙ: " + color);
}

// Example 2: String iteration
let text = "হ্যালো";
for (let char of text) {
    console.log("অক্ষর: " + char);
}

// Example 3: Set iteration
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
for (let num of uniqueNumbers) {
    console.log("Unique Number: " + num);
}


// ===== 6. ARRAY METHODS (forEach, map, filter, reduce) =====
console.log("\n===== 6. ARRAY METHODS =====");

// 6.1 forEach - সব উপাদানের জন্য একটি function চালায়
let fruits2 = ["আপেল", "কমলা", "আম"];
fruits2.forEach(function(fruit, index) {
    console.log("forEach - Index: " + index + ", Fruit: " + fruit);
});

// Arrow function সহ (আধুনিক উপায়)
fruits2.forEach((fruit, index) => {
    console.log("Arrow forEach - " + fruit);
});

// 6.2 map - নতুন array তৈরি করে (transformation)
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(function(num) {
    return num * 2;
});
console.log("Original: " + nums);
console.log("Doubled: " + doubled);

// Arrow function সহ
let squared = nums.map(num => num * num);
console.log("Squared: " + squared);

// 6.3 filter - শর্ত অনুযায়ী filter করা array তৈরি করে
let evenNumbers = nums.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even Numbers: " + evenNumbers);

// Arrow function সহ
let oddNumbers = nums.filter(num => num % 2 !== 0);
console.log("Odd Numbers: " + oddNumbers);

// 6.4 reduce - সব উপাদান combine করে একটি value তৈরি করে
let sum = nums.reduce(function(total, num) {
    return total + num;
}, 0);
console.log("Sum using reduce: " + sum);

// Arrow function সহ
let product = nums.reduce((result, num) => result * num, 1);
console.log("Product: " + product);

// 6.5 find - প্রথম যে উপাদান শর্ত পূরণ করে তা ফেরত দেয়
let firstEven = nums.find(num => num % 2 === 0);
console.log("First Even: " + firstEven);

// 6.6 some - যদি অন্তত একটি উপাদান শর্ত পূরণ করে true ফেরত দেয়
let hasEven = nums.some(num => num % 2 === 0);
console.log("Has Even Numbers: " + hasEven);

// 6.7 every - যদি সব উপাদান শর্ত পূরণ করে true ফেরত দেয়
let allPositive = nums.every(num => num > 0);
console.log("All Positive: " + allPositive);


// ===== 7. NESTED LOOPS =====
console.log("\n===== 7. NESTED LOOPS =====");

// একটি লুপের মধ্যে আরেকটি লুপ
// Multiplication table
console.log("Multiplication Table:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}

// 2D Array iteration
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("2D Array:");
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log("Position [" + row + "][" + col + "]: " + matrix[row][col]);
    }
}


// ===== 8. LOOP CONTROL - break এবং continue =====
console.log("\n===== 8. LOOP CONTROL =====");

// 8.1 break - লুপ থেমে যায়
console.log("Using break:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Loop stopped at: " + i);
        break; // লুপ এখানে থেমে যায়
    }
    console.log("Number: " + i);
}

// 8.2 continue - এই চক্র skip করে পরবর্তী চক্র শুরু করে
console.log("\nUsing continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping: " + i);
        continue; // i=3 এর বাকি code skip হয়, পরবর্তী iteration শুরু হয়
    }
    console.log("Processing: " + i);
}

// Practical example: Search in array
let targetNum = 5;
let found = false;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === targetNum) {
        console.log("Found " + targetNum + " at index " + i);
        found = true;
        break;
    }
}


// ===== 9. ADVANCED: COMBINING LOOPS AND METHODS =====
console.log("\n===== 9. ADVANCED: CHAINING METHODS =====");

// একাধিক array methods chain করা
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even, then double them, then sum
let result = data
    .filter(num => num % 2 === 0)      // [2, 4, 6, 8, 10]
    .map(num => num * 2)               // [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0); // 60

console.log("Result after chaining: " + result);

// আরও জটিল example
let students = [
    { name: "আহমেদ", age: 20, marks: 85 },
    { name: "ফাতিমা", age: 21, marks: 92 },
    { name: "করিম", age: 20, marks: 78 },
    { name: "সালমা", age: 22, marks: 88 }
];

// যারা 20 বছর বয়সী এবং 80+ মার্ক পেয়েছে
let qualified = students
    .filter(s => s.age === 20 && s.marks >= 80)
    .map(s => s.name);

console.log("Qualified students: " + qualified);


// ===== 10. PERFORMANCE TIPS =====
console.log("\n===== 10. PERFORMANCE TIPS =====");

// Tip 1: Array.length cache করা ভালো
let bigArray = new Array(1000000);
console.time("Without caching length");
for (let i = 0; i < bigArray.length; i++) {
    // bigArray.length প্রতিবার access হয়
}
console.timeEnd("Without caching length");

console.time("With caching length");
let len = bigArray.length;
for (let i = 0; i < len; i++) {
    // length একবারই access হয়েছে
}
console.timeEnd("With caching length");

// Tip 2: খুব বড় data এর জন্য সঠিক method বেছে নেওয়া গুরুত্বপূর্ণ
// for loop সবচেয়ে দ্রুত
// forEach, map, filter থেকে একটু ধীর কিন্তু readable

// Tip 3: Infinite loop এড়ানো!
// ❌ নিচের মত করবেন না:
// for (let i = 0; i < 10; ) {
//     console.log(i); // i কখনও বাড়ছে না - infinite loop!
// }

console.log("\n===== SUMMARY =====");
console.log("for loop: নির্দিষ্ট সংখ্যক বার");
console.log("while: যতক্ষণ condition true");
console.log("do-while: কমপক্ষে একবার, তারপর condition");
console.log("for-in: Object keys iterate করে");
console.log("for-of: Array values iterate করে");
console.log("Array Methods: forEach, map, filter, reduce, find, some, every");
console.log("break: লুপ থেমে যায়");
console.log("continue: এই চক্র skip করে");

