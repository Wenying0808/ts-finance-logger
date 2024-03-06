//classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    //constructor
    constructor (c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    //method
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice ('Ingrid', 'website', 200);
const invTwo = new Invoice ('Bing', 'website', 300);

invOne.amount = 600;

console.log(invOne, invTwo);



let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);


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