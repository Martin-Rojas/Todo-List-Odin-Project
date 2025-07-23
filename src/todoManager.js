/** Create a new todo */
function addTodo(todos, newtodo) {
  // get project id
  ///console.log(`inside the addTodo ${projectID}`);
  todos.push(newtodo);
}

/** Read  todo */
function getTodo(todos, todoId) {
  const currentTodo = todos.find((todo) => todo.id === todoId);

  return currentTodo ? currentTodo : null;
}

/** Update  todo */

/** Delete todo */

export { addTodo, getTodo };
