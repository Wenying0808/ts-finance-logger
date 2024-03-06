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

//take the inputs to submit

const ul = document.querySelector('ul')!;
const list = new ListTemplate (ul);


form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value==='invoice'){
        doc = new Invoice(...values);
    } else{
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

});


//tuples

let arr = ['ryu', 35, true];
arr[1] = false;

//certain position be certain type

let tuple: [string, number, boolean] = ['ryu', 35, true];
//tuple[1] = false;
tuple[0] = 'wen';

let student: [string, number];
student = ['wenying', 456435];