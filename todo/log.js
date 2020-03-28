var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodos: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });
    this.todos.forEach(function(todo) {
      // Case1 : If everything is true, make everything false
      if (completedTodos === totalTodos) {
        todo.completed = false;
        // Case2 : Otherwise, make everything true
      } else {
        todo.completed = true;
      }
    });
  }
};

function deleteTodos(position) {
  todoList.deleteTodos(position);
  view.displayTodos();
}
