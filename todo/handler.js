function addTodo() {
  var addTodoTextInput = document.getElementById("addTodoTextInput");
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = "";
  view.displayTodos();
}
function changeTodo() {
  var changeTodoPositionInput = document.getElementById(
    "changeTodoPositionInput"
  );
  var changeTodoTextInput = document.getElementById("changeTodoTextInput");
  todoList.changeTodo(changeTodoPositionInput.value, changeTodoTextInput.value);
  changeTodoTextInput.value = "";
  changeTodoPositionInput.value = "";
  view.displayTodos();
}
function deleteTodos(position) {
  todoList.deleteTodos(position);
  view.displayTodos();
}
function toggleCompleted() {
  var toggleCompletedPositionInput = document.getElementById(
    "toggleCompletedPositionInput"
  );
  todoList.toggleCompleted(toggleCompletedPositionInput.value);
  toggleCompletedPositionInput.value = "";
  view.displayTodos();
}
function toggleAll() {
  todoList.toggleAll();
  view.displayTodos();
}
