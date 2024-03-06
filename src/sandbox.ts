//Function Signatures//

//example 1
let greet: (a:string, b:string) => void;
greet = (name: string, greetings: string) => {
    console.log(`${name} says ${greetings}`);
};

greet("wen", "hello");

//example

let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action:string) => {
    if (action === 'add'){
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }

};
console.log(calc(3, 5, "add"));

//example3

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (dutch: person) => {
    console.log(`${dutch.name} is ${dutch.age} years old`);
}

logDetails({name: "Jorrit", age: 10});
