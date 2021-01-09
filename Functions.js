// function declaration and function expression

// Function declaration: starts with "function"
function isNil(value) {
    return value == null;
};

console.log('Testing the declared function', isNil());  //returns true
console.log('Testing the declared function', isNil('')); //returns true


// Function expression: starts with "const"
const revert = function (value) {
    return !value;
};

console.log('Testing the expression', revert(true)); //returns Testing the declared function false
console.log('Testing the expression', revert(false)); //returns Testing the declared function true

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
var my_function_1 = () => {
    return "Hello World!"
}
console.log(my_function_1())


// Arrow function - Shorthand method definition with params
var my_function_2 = (name) => {
    return `Hello ${name}!`
}
console.log(my_function_2("William"))


//anonymous function with no params
var first = 10;
var second = 20;


var findBigger = function () {
    var result;
    first > second ? result = ["first", first] : result = ["second", second];
    console.log(result);
}
findBigger();


//anonymous function with params

var findBiggerWithParams = function (firstNum, secondNum) {
    var result;
    firstNum > secondNum ? result = ["first number is bigger", firstNum] : result = ["second number is bigger", secondNum];
    console.log(result);
}
findBiggerWithParams(19, 24);  // this looks very similar to the scenario that our function has a name

// interesting:  the following statement returns the function itself
console.log(findBiggerWithParams)

var interesting = (function (a, b) {
    var result;
    a > b ? result = `a is bigger` : result = `b is bigger`;
    return result;
})(10, 12);

console.log(interesting)
// above line calls the variable that holds a function that takes two variables,
// which are passed to it, outside the () in a secondary ()





//Immediately invoked functions  - Node automatically invoke them
// Now let's make it more dynamic - Note that node will automaticall call a function

firstNumber = 50;
secondNumber = 10;

var findAverage = (function (first,second){
    var result;
    result = (first + second) / 2;
    return result;
})(firstNumber,secondNumber);

console.log(`Average is ${findAverage}`);




