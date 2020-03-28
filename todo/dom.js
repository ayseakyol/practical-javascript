var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";

    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement("li");
      var todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "(X) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this); // this refers to view object ==> forEach(callbak, this)
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todoUl = document.querySelector("ul");
    todoUl.addEventListener("click", function(event) {
      // get the element that was clicked on
      var elementClicked = event.target;
      // check if the element is a click button
      if (elementClicked.className === "deleteButton") {
        deleteTodos(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};
view.setUpEventListeners();
