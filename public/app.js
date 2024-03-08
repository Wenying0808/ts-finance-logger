import { Invoice } from './classes/invoice.js'; //note: it's from js not from ts
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';


const form = document.querySelector('.new-item-form'); //class
//grab input components:
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');

//grab ul component
const ul = document.querySelector('ul');

//ListTemplate expects a parameter of type HTMLUListElement
const list = new ListTemplate(ul);

//take the input values to submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
