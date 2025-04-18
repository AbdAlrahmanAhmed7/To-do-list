let input = document.getElementById('inp');
let btn = document.getElementById('submit');
let list = document.querySelector('.list');

btn.addEventListener('click', () => {
    let label = document.createElement('label');
    label.innerText = input.value;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let del = document.createElement('i');
    del.classList.add('material-icons');
    del.innerText = 'delete';

    let edit = document.createElement('i');
    edit.classList.add('material-icons');
    edit.innerText = 'edit';
    
    let div = document.createElement('div');
    div.classList.add('object');
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(del);
    div.appendChild(edit);
    list.appendChild(div);
    input.value = '';

    del.addEventListener('click' , () =>{
        list.removeChild(div);
    })

    edit.addEventListener('click', () => {
        input.value = label.innerText;
        list.removeChild(div);
        input.focus();
    })
})
