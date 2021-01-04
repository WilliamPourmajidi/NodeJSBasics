let add = function (a,b){
    return a + b;
};
let multiply = function (a,b){
    return a * b;
};

let calc = function (num1,num2,callback){
    console.info("I am here in the calc function");
    if (typeof callback === "function"){
        return callback(num1,num2);
    };


};

console.log(calc(12,2,add));
console.log(calc(12,2,multiply));


