const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");

const fetchTodos = async function () {
  const res = await fetch("http://localhost:3000/todos");
  const todos = await res.json();
  todos.forEach((todo) => {
    const $li = document.createElement("li");
    $ul.appendChild($li);
    $li.innerText = todo.todo;
  });
};
fetchTodos();

//todo추가하는 함수
const addTodos = function () {
  const todoInput = $input.value;
  const newTodoData = {
    todo: todoInput,
    done: false,
  };
  fetch("http://localhost:3000/todos", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodoData),
  });
};

$button.addEventListener("click", addTodos);
