

// //single element

// const form = document.querySelector("#todo-form");
// console.log(form)

// //mutleple
// const tag = document.querySelectorAll('.item');
// tag.forEach( (item) => {
//     console.log(item);
// });

const todos = document.querySelector("#todo-list");
const button = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
//todos.remove();
//todos.lastElementChild.remove();

button.addEventListener('click', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if(todoInput.value === '') {
        return;
    }


    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add('item');
    todos.appendChild(li);
    todoInput.value = '';

    console.log(li);
    console.log(todoInput.value);
}


