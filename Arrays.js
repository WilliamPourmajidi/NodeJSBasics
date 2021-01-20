
// JavaScript Arrays

var my_array = ["red",12,true,"another"]
console.log(my_array)
console.log(my_array[0])
console.log(my_array[1])

var pens = ["red", "blue", "green", "orange"];

console.log("Before changes: ", pens);

// Get property of an object
console.log("Array length: ", pens.length);


// Reverse an array
pens.reverse();
console.log(pens)

// Remove the last value
pens.pop();

// Add comma-separated list of values to the end of the array
pens.push("silver", "dark blue");

console.log("After new insertions: ", pens);

// Create a copy of an array
var newPens = pens.slice();
console.log("New pens: ", newPens);

// Return the first element that matches the search parameter
var result = pens.indexOf(`silver`, 0);
console.log("The search result index is: ", result);  //returns : The search result index is:  3



