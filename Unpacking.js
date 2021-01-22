// Unpacking, also known as destructing is assignment of a composite data structure to atomic ones
//we take a collection, like a list or a tuple, and we break it up into individual values.
// This is quite useful, as it enables us to do things like destructuring assignments,
// where we assign values to several variables at once from a single collection

var myArray = [1, 2, 3, 4];

//unpacking the array to variables
var [first, second] = myArray;
console.log(first);
console.log(second);

console.log(`------------------- New Array -----------------------`);
var myArray = [7, 9, 11];
// one can declare them before
var frst;
var secnd;

[frst, secnd] = myArray;
console.log(frst);
console.log(secnd);

console.log(`------------------- New Array -----------------------`);
var myArray = [8,10,12,'William','enjoys','JavaScript'];
var first;
var second;
var third;

//skipping the item
//mind the double comma as one value between commas is skipped
[first,,third] = myArray;
console.log(first);
console.log(third);

//mind the comma at the beginning
[,second] = myArray;
console.log(second);

//assigning the rest of an array to a variable
// here we escape the first three values of the array and assign the rest to myString
var [,,,...myString] = myArray;
console.log(`myString is \n ${myString}`);
console.log(`myString is \n ${myString.join(` `)}`);



