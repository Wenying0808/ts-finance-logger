import { Invoice } from './classes/invoice.js'; //it's from js not from ts
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/hasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice ('Wenying', 'Website Work', 200);
docTwo = new Payment ('Ingrid', 'Website Upgrade', 100);

let docs: HasFormatter[] = [];
docs.push(docOne, docTwo);
console.log(docs);



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

    let doc: HasFormatter;
    if (type.value==='invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    
});