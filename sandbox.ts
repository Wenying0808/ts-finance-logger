let character: string;
let age: number;
let isLoading: boolean;


//age = 'hi';
character = 'miffy'
age = 30;
isLoading = false;

let array: string[];
//array.push('he'); needs to be initiallized
array =['hi', 'hello'];
array.push('hoi');

let mixed:(string|number)[]= [];
mixed.push(30);
mixed.push('wen');
//mixed.push(false);

console.log(mixed);

let uid:(string|number);
uid = 'string';


let backpack: object;
backpack = {brand: 'rains', price: 100};

let backpack2: {
    brand: string,
    price: number,
    inStock: boolean,
}

backpack2 = {
    brand: 'rain',
    price: 200,
    inStock: true,
}


let Age: any = 25; //initial value 25
Age = true;
console.log(Age);

Age = 'Hi';
console.log(Age);

Age = {property: 'old'};
console.log(Age);

let Mixed: any[] =[]; //empty array
Mixed.push(5);
Mixed.push(true);
Mixed.push('hey');
console.log(Mixed);

let Brabra: {name: any, age: number};
Brabra = {name:'ha', age: 20};
console.log(Brabra);