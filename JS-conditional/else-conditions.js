const hour = new Date().getHours(); 
let greeting;

if (hour > 12) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting); // Output: Good day (if before 6 PM) or Good evening (if 6 PM or later)