const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");

const TODOS_KEY = "toDos";
let toDos = [];

function  paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    const img = new Image();
    img.src = 'img/minus.png';
    button.appendChild(img);
    button.classList.add('delete-btn');
    button.addEventListener('click',deleteTodo);
}

function deleteTodo(e){
    const selectLi = e.target.parentElement.parentElement;
    console.log(selectLi);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(selectLi.id));
    selectLi.remove();
    saveTodo();
}

function saveTodo(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function  handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();

}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);

}
