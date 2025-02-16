document.addEventListener('DOMContentLoaded', function() {
    let addMessage = document.querySelector('.message'),
        addButton = document.querySelector('.add'),
        todo = document.querySelector('.todo');

    let todoList = [];

    addButton.addEventListener('click', function(event){
        if(addMessage.value.trim() == ""){
            alert("empty");
        }

        else {
            let newTodo = {
                todo: addMessage.value
            };

            todoList.push(newTodo);
            displayMessages();
            event.preventDefault();
            addMessage.value = ""
        }
    });


    todo.addEventListener('click', function(event){

        if(event.target.classList.contains('delete')){
            let index = event.target.getAttribute('data-index');
            todoList.splice(index, 1);
            displayMessages();
        }
    });

    function displayMessages(){
        let displayMessage = '';
        todoList.forEach(function(item, i){
            displayMessage += `
            <li>
                <input type='checkbox' id='item_${i}'>
                <label for='item_${i}'>${item.todo}</label>
                <img src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' class="delete" data-index="${i}">
            </li>
            `;
        });
        todo.innerHTML = displayMessage;
    }
});