import { HasFormatter } from "../interfaces/hasFormatter";


// register a list container (ul) in the constructor
export class ListTemplate {
    constructor (private container:HTMLUListElement){

    }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-button');
        
        const divContainer = document.createElement('div');
        divContainer.classList.add('heading-delete-container')
        divContainer.appendChild(h4);
        divContainer.appendChild(deleteButton);
        
       
        li.append(divContainer);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        //remove the list when clicking delete button

        deleteButton.addEventListener('click', () => {
            li.remove();
        })


        if (pos === 'start'){
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }

    };
}

//render a new lis to container
