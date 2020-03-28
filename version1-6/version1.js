function v1() {
  console.log("hi!");
}

//Store todos
var todos = ["item 1", "item 2", "item 3"];

//Display todos
console.log("My Todos:", todos);

//Add new todos
todos.push("item 4");
todos.push("item 5");
console.log("My Todos:", todos);
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];

//Change item in existing todos
todos[0] = "item 1 changed";
console.log("My Todos:", todos);
var todos = ["item 1 changed", "item 2", "item 3", "item 4", "item 5"];

//Delete item in existing todos
todos.splice(0, 1);
console.log("My Todos:", todos);
var todos = ["item 2", "item 3", "item 4", "item 5"];
todos.splice(2, 1);
console.log("My Todos:", todos);
var todos = ["item 2", "item 3", "item 5"];
