import { Invoice } from './classes/invoice.js'; //it's from js not from ts
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form'); //class
//inputs:
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//submit: add button
const addButton = document.querySelector('.add-button');
addButton.disabled = true;
//take the inputs to submit
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//check if all inputs have values
function checkInputs() {
    const inputs = [tofrom, details, amount];
    const allInputsFilled = inputs.every(input => input.value.trim() !== '');
    addButton.disabled = !allInputsFilled;
}
//add event listener
tofrom.addEventListener('input', checkInputs);
details.addEventListener('input', checkInputs);
amount.addEventListener('input', checkInputs);
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
