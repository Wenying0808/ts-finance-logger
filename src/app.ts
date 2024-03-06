//classes

class Invoice {
    //readonly client: string; 
    //private details: string; // I can add private before pro to make it not acccessible
    // public amount: number; // default is public, so it can be accessible

    //constructor
    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    //method
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

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