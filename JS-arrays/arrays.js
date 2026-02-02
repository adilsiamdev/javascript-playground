let items = ["apple", "banana", "mango", 20, 44, 44, true, false];

console.log(items[5]);
console.log(items);
items.pop();
console.log(items);
items.push("something");

console.log(items);

items.includes("Habib");
console.log(items.includes("something")); // True

items[0] = "Habib Apple";
console.log(items);

for (let index = 0; index < items.length; index++) {
    const element = items[index];
    console.log(`This is: ${element}`);
}

console.log(items);
console.log(items.sort());
console.log(items.reverse());
