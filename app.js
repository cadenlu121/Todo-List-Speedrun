document.getElementById('form-todo').addEventListener('submit', saveTodos);

function saveTodos(e) {
    let todo = document.getElementById('todo').value;
    
    if (localStorage.getItem('todoList') === null) {
        let todoList = [];
        todoList.push(todo);
        localStorage.setItem('todoList', JSON.stringify(todoList));
    } else {
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.push(todo);
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    getTodos();

    document.getElementById('form-todo').reset();
    e.preventDefault();
}

function deleteTodos(todo) {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] == todo) {
            todoList.splice(i, 1);
        }
    }
    localStorage.setItem('todoList', JSON.stringify(todoList));
    getTodos();
}

function getTodos() {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    let todoListResult = document.getElementById('todoList');

    todoListResult.innerHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];

        todoListResult.innerHTML += `
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-2">
                    <p>${todo}</p>
                </div>
                <div class="col-md-2">
                    <a href="#" onclick="deleteTodos('${todo}')" class="btn btn-danger">Delete</a>
                </div>
                <div class="col-md-4"></div>
            </div>
        `;
    }
}

getTodos();