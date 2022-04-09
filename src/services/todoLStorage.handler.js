export function checkToDoS() {
  const savedTodo = localStorage.getItem("todo");
  if (savedTodo) {
    return JSON.parse(savedTodo);
  } else {
    return [];
  }
}

export function setToDoS(todos) {
  localStorage.setItem("todo", JSON.stringify(todos));
}