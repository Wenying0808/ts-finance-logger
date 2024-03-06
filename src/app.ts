import { Invoice } from './classes/invoice.js'; //it's from js not from ts


interface Person {
    name: string;
    age: number;
    greating(t: string): void;
}

const Dutch: Person = {
    name: 'Van Delft',
    age: 100,
    greating(text: string): void {
        console.log(text);
    }
}

console.log(Dutch);


const greetPerson = (person: Person) => {
    console.log('Hi', person.name)
}

greetPerson(Dutch);



const invOne = new Invoice ('Ingrid', 'website', 200);
const invTwo = new Invoice ('Bing', 'website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv=>{
    console.log(inv.client, inv.amount, inv.format());
});





const form = document.querySelector('.new-item-form') as HTMLFormElement; //class

//inputs:
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//take the inputs to submit
form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});