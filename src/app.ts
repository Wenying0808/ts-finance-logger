import { Invoice } from './classes/invoice.js'; //it's from js not from ts
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/hasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement; //class

//inputs:
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//submit: add button
const addButton = document.querySelector('.add-button') as HTMLButtonElement;
addButton.disabled = true;


//take the inputs to submit
const ul = document.querySelector('ul')!;
const list = new ListTemplate (ul);

//check if all inputs have values
function checkInputs () {
    const inputs = [tofrom, details, amount];
    const allInputsFilled = inputs.every(input => input.value.trim() !== '');
    addButton.disabled = !allInputsFilled;
}

//add event listener
tofrom.addEventListener('input', checkInputs);
details.addEventListener('input', checkInputs);
amount.addEventListener('input', checkInputs);



form.addEventListener('submit', (e: Event )=> {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values);
    } else{
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

});

