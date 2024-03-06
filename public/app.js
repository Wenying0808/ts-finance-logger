import { Invoice } from './classes/invoice.js'; //it's from js not from ts
import { Payment } from './classes/payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Wenying', 'Website Work', 200);
docTwo = new Payment('Ingrid', 'Website Upgrade', 100);
let docs = [];
docs.push(docOne, docTwo);
console.log(docs);
const invOne = new Invoice('Ingrid', 'website', 200);
const invTwo = new Invoice('Bing', 'website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form'); //class
//inputs:
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//take the inputs to submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
