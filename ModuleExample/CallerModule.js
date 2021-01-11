const customized_module = require("./CalleeModule.js");

const test_array_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(customized_module.calculateSum(test_array_1));


// another approach (directly invoking the function from module

const {calculateSum} = require("./CalleeModule.js");

const test_array_2 = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(calculateSum(test_array_2));

