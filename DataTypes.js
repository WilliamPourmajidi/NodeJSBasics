var my_number = 38;                               // Number
var my_string = "Pourmajidi";                  // String
var my_object = {
    firstName: "William", lastName: "Pourmajidi", fullname: function () {
        return this.firstName + " " + this.lastName;
    }
};    // Object (mind that the last one (fullname) is an object method (functions defined in an object)
var my_boolean = true;
console.log(my_number, my_string, my_object, my_boolean);
console.log(typeof (my_number), typeof (my_string), typeof (my_object), typeof (my_boolean));
console.log(my_object.firstName) //accessing object properties
console.log(my_object.fullname())  //accessing object method

// Interesting properties
//You can consider it a bug in JavaScript that typeof null is an object. It should be null.
var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
person = null;    // Now value is null, but type is still an object
console.log(typeof (person))

// Now let's use undefined
var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
person = undefined;   // Now both value and type is undefined
console.log(typeof (person));

// JavaScript Comparison Operators
var x = 5

console.log(x == 5)  // returns true (equal to)
console.log(x === 5)  // returns true (equal value and equal type)
console.log(x == "5")  // returns true
console.log(x === "5")  // returns false (As they are euqal but not the same type)
console.log(x != 5 ) //returns false
console.log(x != "5" ) //returns false
console.log(x !== "5" ) //returns true (	not equal value OR not equal type -- mind the OR! )

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





