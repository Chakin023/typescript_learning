"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
