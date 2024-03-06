"use strict";
//const link = document.querySelector('a')!; //add exclaimation mark to tell ts this is not a null
//console.log(link.href);
//const allforms = document.querySelector('form')!; //element
const form = document.querySelector('.new-item-form'); //class
console.log(form.children);
//inputs:
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//take the inputs to submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
