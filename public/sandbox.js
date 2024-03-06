"use strict";
//Function Signatures//
//example 1
let greet;
greet = (name, greetings) => {
    console.log(`${name} says ${greetings}`);
};
greet("wen", "hello");
//example
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(3, 5, "add"));
//example3
let logDetails;
logDetails = (dutch) => {
    console.log(`${dutch.name} is ${dutch.age} years old`);
};
logDetails({ name: "Jorrit", age: 10 });
