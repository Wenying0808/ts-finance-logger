"use strict";
//Define a type function
let greet;
greet = () => {
    console.log('hello');
};
const add = (a, b) => {
    console.log(a + b);
};
add(3, 5);
const deduct = (a, b, c) => {
    console.log(a, b, c);
};
deduct(3, 5, "hi");
//make c optional by adding question mark
const optional = (a, b, c) => {
    console.log(a, b, c);
};
optional(1, 2); // c becomes undefined
optional(3, 4, 5);
const test = (a = 4, b = 10) => {
    console.log(a * b);
};
const minus = (a, b) => {
    return a - b;
};
let results = minus(20, 12);
console.log(results);
