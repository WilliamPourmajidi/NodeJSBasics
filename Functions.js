// function declaration and function expression

// Function declaration: starts with "function"
function isNil(value) {
    return value == null;
};

console.log('Testing the declared function',isNil());
console.log('Testing the declared function',isNil(''));


// Function expression: starts with "const"
const isTruthy = function (value) {
    return !!value;
};

console.log('Testing the expression',isTruthy(true));
console.log('Testing the expression',isTruthy(false));

// Function expression: second example
const getType = function funName(variable) {
    console.log('inside the function', typeof funName); // => 'function'
    return typeof variable;
}
console.log(getType(3));     // => 'number'
console.log(getType.name);   // => 'funName'
console.log(typeof getType); // => 'function'
console.log('Outside the function', typeof funName); // => 'undefined'
// note that  the variable funName is accessible within function scope, but not outside.

// Function expression: an argument for .filter()
const numbers = ([1, false, 5]).filter(function (item) {
    return typeof item === 'number';
});

console.log(numbers);  //only returns numeric values of the array

// Shorthand method definition
