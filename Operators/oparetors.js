// =========================
// 01. Basics 
// =========================
let name = "Adil";
const age = 25;
let isStudent = true;

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 0; i < 5; i++) {
  console.log("Loop:", i);
}

// =========================
// 02. Functions & Scope
// =========================
function greet(user) {
  return `Hello, ${user}`;
}
console.log(greet("Adil"));

const add = (a, b) => a + b;
console.log(add(5, 10));

// Closure Example
function counter() {
  let count = 0;
  return () => ++count;
}
const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// =========================
// 03. Objects & Arrays
// =========================
const student = {
  name: "Adil",
  age: 25,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
};
student.greet();

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// =========================
// 04. DOM Manipulation
// =========================
// document.querySelector("#btn").addEventListener("click", () => {
//   document.querySelector("#msg").textContent = "Button Clicked!";
// });

// =========================
// 05. ES6+ Features
// =========================
const user = { name: "Adil", age: 25 };
const { name: userName, age: userAge } = user;
console.log(userName, userAge);

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged);

// =========================
// 06. Advanced Concepts
// =========================
class Person {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`My name is ${this.name}`);
  }
}
const p1 = new Person("Adil");
p1.speak();

// =========================
// 07. Async Programming
// =========================
async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchData();

// =========================
// 08. Real Project Essentials
// =========================
// LocalStorage Example
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

// Form Validation Example
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
console.log(validateEmail("test@example.com"));

// =========================
// 09. Tooling & Workflow
// =========================
// npm init -y
// npm install axios
// git init
// git commit -m "Initial commit"

// =========================
// 10. Project Ideas
// =========================
// To-Do List App
// E-commerce Cart
// Weather App (API)
// MemeVerseAI Fun Project
