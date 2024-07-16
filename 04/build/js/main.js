"use strict";
//Literal types
let userName;
userName = 'Chakin';
//function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(1, 2));
const subtract = (c, d) => {
    return c - d;
};
const multiply = function (c, d) {
    return c * d;
};
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//default value
//ps. type aliases cant set the defaul value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 5));
logMsg(sumAll(2, 3));
//Rest parameters (...)
//this mean user must sent at least 1 number to function
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
//Never return type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // if(i> 100) {
        //     break
        // } //if there is no this sentence there will be type :never, but if this sentence exist there will be type :void
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (isNumber(value)) {
        return 'number';
    }
    return createError('This cannot be happen');
};
