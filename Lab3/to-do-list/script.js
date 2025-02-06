window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodoForm = document.getElementById('to-do-form');


    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            done: false,
            createdAt: new Date().getTime()
        }

        if (todo.content.length > 0) {
            todos.push(todo);

            localStorage.setItem('todos', JSON.stringify(todos));
        }



        e.target.reset();

        DisplayTodos();
    })

    DisplayTodos();
})



function DisplayTodos() {

    const todoList = document.querySelector('.to-do-list-container');

    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('to-do-item');

        const label = document.createElement('label');
        const input = document.createElement('input');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        input.type = 'checkbox';
        input.checked = todo.done;

        content.classList.add('to-do-content');
        actions.classList.add('actions');
        editButton.classList.add('edit');
        deleteButton.classList.add('delete');

        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
        editButton.innerHTML = 'Edit';
        deleteButton.innerHTML = 'Delete';

        label.appendChild(input);
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);
        
        if (todo.done) {
            todoItem.classList.add('done');
        }

        input.addEventListener('click', e => {
            todo.done = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));

            if (todo.done) {
                todoItem.classList.add('done');
            } else{
                todoItem.classList.remove('done');
            }
            
            DisplayTodos();
        });

        editButton.addEventListener('click', e => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e => {
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                DisplayTodos();
            });
        });

        deleteButton.addEventListener('click', e => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos();
        });

    })
}

 
const completeAllButton = document.querySelector('.to-do-button.complete-all');
const deleteAllButton = document.querySelector('.to-do-button.delete-all');

completeAllButton.addEventListener('click', e => {
    todos.forEach(todo => {
        todo.done = true;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
})

deleteAllButton.addEventListener('click', e => {
    todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
})