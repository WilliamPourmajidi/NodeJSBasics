// function declaration and function expression

// Function declaration: starts with "function"
function isNil(value) {
    return value == null;
};

console.log('Testing the declared function',isNil());  //returns true
console.log('Testing the declared function',isNil('')); //returns true


// Function expression: starts with "const"
const revert = function (value) {
    return !value;
};

console.log('Testing the expression',revert(true)); //returns Testing the declared function false
console.log('Testing the expression',revert(false)); //returns Testing the declared function true

// Function expression: second example
var getType = function funName(variable) {
    console.log('inside the function', typeof funName); // => 'function'
    return typeof variable;
}
console.log(getType(3));     // => 'number'
console.log(getType.name);   // => 'funName'
console.log(typeof (getType)); // => 'function'
console.log('Outside the function', typeof funName); // => 'undefined'
// note that  the variable funName is accessible within function scope, but not outside.

// Function expression: an argument for .filter()
const numbers = ([1, false, 5]).filter(function (item) {
    return typeof item === 'number';
});

console.log(numbers);  //only returns numeric values of the array

// Arrow function - Shorthand method definition with no params
var my_function_1 = () => {return "Hello World!"}
console.log(my_function_1())


// Arrow function - Shorthand method definition with params
var my_function_2 = (name) => {return `Hello ${name}!`}
console.log(my_function_2("William"))

