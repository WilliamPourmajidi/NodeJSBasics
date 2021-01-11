// const customized_module = require("./CalleeModule.js");
//
// const test_array_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log(customized_module.calculateSum(test_array_1));
//

// another approach (directly invoking the function from module

const {calculateSum,calculateLength} = require("./CalleeModule.js");

const test_array_2 = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(`The sum of the array is ${calculateSum(test_array_2)}`);
console.log(`The length of the array is ${calculateLength(test_array_2)}`);


