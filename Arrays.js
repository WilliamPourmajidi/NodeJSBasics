// JavaScript Arrays

console.log(`------------------- New Array -----------------------`);
var myArray = ["red", 12, true, "another"];
console.log(`Here is my array ${myArray}`);

// accessing items in an array with index number
console.log(`Here is the 1st element of the array ${myArray[0]}`);
console.log(`Here is the 2nd element of the array ${myArray[1]}`);

console.log(`------------------- New Array -----------------------`);
var arrayOfPens = ["red", "blue", "green", "orange"];
console.log(`Before changes our array looks like: ${arrayOfPens}`);

// Get property of an object
console.log(` Our Array length is ${arrayOfPens.length}`);

// Reverse an array
arrayOfPens.reverse();
console.log(`Here is the reverse of our array ${arrayOfPens}`);

// Remove the last value
var last = arrayOfPens.pop();
console.log(
  `Here is our array after removing the last value ${arrayOfPens} and you can see that ${last} is gone`
);

// Add comma-separated list of values to the end of the array

arrayOfPens.push("silver", "dark blue");
console.log(`After new insertions our array looks like ${arrayOfPens}`);

// Create a copy of an array
var copyOfArrayOfPens = arrayOfPens.slice();
console.log(`Here is the copied array ${copyOfArrayOfPens}`);

// Return the first element that matches the search parameter from index 0 (The whole array will be searched)
var result = arrayOfPens.indexOf(`silver`, 0);
console.log(`The search result index is: ${result}`); //returns : The search result index is:  3

console.log(`------------------- New Array -----------------------`);
// Array  methods

var myTestArray1 = [1, 2, 3, 4, 5];
var myTestArray2 = [6, 7, 8, 9];

// concatenation for two arrays
var myTestArray = myTestArray1.concat(myTestArray2);
console.log(
  `Here we concatinated ${myTestArray1} to ${myTestArray2} and the result is ${myTestArray}`
);

var joinCharacter = `-`;
var myStringArray = myTestArray.join(joinCharacter);
console.log(
  `Here is our string joined by ${joinCharacter} and the outcome is ${myStringArray}`
);

//slicing arrays
var mySlicedArray = myTestArray.slice(0, 2);
var mySlicedArrayWithNegativeIndex = myTestArray.slice(-2);

console.log(`Here is the sliced array ${mySlicedArray}`);
console.log(
  `Here is the slices array with negative index ${mySlicedArrayWithNegativeIndex}`
);

console.log(`------------------- New Array -----------------------`);
// map method for arrays (takes a callback function and runs it against all the values in the array)
var myArrayToTest = [1, 2, 3, 4, 5, 6];
var myArrayToTestSquared = myArrayToTest.map((item) => {
  return item ** 2;
});

var myArrayToTestEven = [];
myArrayToTest.map((item) => {
  if (item % 2 == 0) {
    myArrayToTestEven.push(item);
  }
});

console.log(`Here is the new array${myArrayToTestSquared}`);
console.log(`Here is the new array${myArrayToTestEven}`);

console.log(`------------------- New Array -----------------------`);
// prototype: to add a function to ALL arrays in the current program
Array.prototype.arrayPrint = function () {
  console.log(`Wow, this is from the newly added function: ${this.length}`);
};

console.log(
  `The prototype constructor allows you to add new properties and methods to the Array() object which can be found here : \n  ${Array.prototype.arrayPrint}\n Now, we are calling it \n`
);
myArrayToTest.arrayPrint();

console.log(`------------------- New Array -----------------------`);
// reduce method

const numbers = [1,-1,2,3];
let sum = 0;
for (let n of numbers){
  console.log(n);
  sum +=n;
}

console.log(`The sum of the array ${numbers} is ${sum}`);


aBetterSum = numbers.reduce((accumulator,currentValue)=> {
  accumulator += currentValue;
  return accumulator;
  })

console.log(aBetterSum);