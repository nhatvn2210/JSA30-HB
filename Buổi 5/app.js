// Shortcut function

function getByID(x){
    return document.getElementById(x);
}
// Function

function addTodo(selectedInput, event) {
    event.preventDefault();
    const todoText = selectedInput.value;
    return todoText;
}

function renderTodoList(selectedList) {
    let htmls = "" ;

    for (let i in selectedList) {
        htmls += `<li> ${selectedList[i]} </li>`;
    }

    return htmls;
}
// Variable

const todoInput = getByID('todo-input');
const addButton = getByID('add-button');
const renderList = getByID('result-list');

// Array

let todoList = JSON.parse(localStorage.getItem('todo-list')) || [];

// Object

// Main script

renderList.innerHTML = renderTodoList(todoList);

addButton.addEventListener('click', function(event){
    todoList.push(addTodo(todoInput , event));
    localStorage.setItem('todo-list' , JSON.stringify(todoList));
    renderList.innerHTML = renderTodoList(todoList);
})



