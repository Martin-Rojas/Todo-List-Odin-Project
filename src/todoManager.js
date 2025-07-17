/** Create a new todo */
function addTodo(todos, newtodo) {
  // get project id
  ///console.log(`inside the addTodo ${projectID}`);
  todos.push(newtodo);
  todos.forEach((todo) => {
    console.log(todo);
  });
}

/** Read  todo */

/** Update  todo */

/** Delete todo */

export { addTodo };
