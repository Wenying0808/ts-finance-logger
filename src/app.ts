//const link = document.querySelector('a')!; //add exclaimation mark to tell ts this is not a null

//console.log(link.href);

//const allforms = document.querySelector('form')!; //element

const form = document.querySelector('.new-item-form') as HTMLFormElement; //class
console.log(form.children);


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