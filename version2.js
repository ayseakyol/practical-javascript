var todos = ["item1", "item2", "item3"];

function displayTodos() {
  console.log("My Todos:", todos);
}
displayTodos();

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
addTodo("item4");

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
changeTodo(1, "changed");

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
deleteTodo(2);
