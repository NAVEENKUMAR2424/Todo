let input = document.getElementById("input");
let click = document.getElementById("click");
let save = document.getElementById("save");
let del = document.getElementById("del");
let todos = [];


// console.log(result);
window.onload = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  console.log(todos);
  todos.forEach((todos) => addtodo(todos));
};

click.addEventListener("click", () => {
  let inputdata = input.value.trim(); // Trim removes leading and trailing whitespaces
  if (inputdata !== "") {
    todos.push(inputdata);
    addtodo(inputdata);
    input.value = ""; // Clear the input field after adding a todo
  }
});

function addtodo(todo) {
  let par=document.createElement('li');
  par.innerHTML=todo
  save.appendChild(par);
  par.style.marginLeft = "10px";
  localStorage.setItem("todos", JSON.stringify(todos));

  par.addEventListener("click", () => {
    par.style.textDecoration = "line-through";
  });

  par.addEventListener("dblclick", () => {
    save.removeChild(par);
    remove(todo);
    location.reload(true);
  });

  function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
      todos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  del.addEventListener("click", () => {
    localStorage.removeItem("todos");
    location.reload(true);
  });
}
