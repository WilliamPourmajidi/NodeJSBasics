//SetTimeout() Examples
// here a named, pre-defined function used as a callback function
const message = function () {
    console.log(`This is running after a 3 seconds`)

}
setTimeout(message, 3000);   //message is a callback function here -- a function passed to another function as an argument

// here an anonymous function is used as a callback function
setTimeout(function () {
    console.log(`another callback function using anonymous function`);
}, 5000);

// here an anonymous arrow function is used as a callback function
setTimeout(() => {
    console.log(`another callback function using arrow function`);
}, 6000);





