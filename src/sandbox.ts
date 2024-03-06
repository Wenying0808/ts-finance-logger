//Define a type function

let greet: Function;

greet = () => {
    console.log('hello');
};


const add = (a: number, b: number) => {
    console.log(a+b)
}

add(3,5);


const deduct = (a: number, b: number, c: number|string) => {
    console.log(a, b, c )
};

deduct(3,5,"hi");


//make c optional by adding question mark
const optional = (a: number, b: number, c?: number|string) => {
    console.log(a, b, c)
};

optional (1, 2); // c becomes undefined
optional (3, 4, 5);

const test = (a: number = 4, b: number = 10) => {
    console.log(a*b);
};

const minus = (a: number, b: number):number => {
    return a-b;
}
let results = minus (20,12);
console.log(results)