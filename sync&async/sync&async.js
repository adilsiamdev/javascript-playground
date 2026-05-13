//Sync.js
const processOrder = (customer) => {
  console.log("Processing Order for customer 1");

  var currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log("Order processed for customer 1");
};

console.log("take order for customer 1");
processOrder();
console.log("take order for customer 2");
processOrder();

//Async.js
const processOrderAsync = (customer) => {
  console.log("Processing Order for customer 1");
  setTimeout(() => {
    console.log("Cooking Compleated");
  }, 6000);
};

console.log("take order for customer 1");
processOrderAsync();
console.log("take order for customer 2");
processOrderAsync();
