const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function painttodo(newtodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText=newtodo;
    todoList.appendChild(li);
}
function ontodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    painttodo(newTodo);
}

todoForm.addEventListener("submit",ontodoSubmit); 