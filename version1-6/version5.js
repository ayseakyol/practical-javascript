//for(initialization; condition; final expression)

// for loops for variables
for (var i = 0; i < 3; i++) {
  console.log("hey");
}
//for loops for arrays
var testArray = ["item1", "item2", "item3"];
for (var i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}

// displayTodos should show .todoText
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
    } else {
      console.log("My todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos.completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position] = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
