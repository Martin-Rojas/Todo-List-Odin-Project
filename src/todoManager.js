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
function deleteTodoImmutable(project, todoIdToDelete) {
  // Reassign the array and update it in the original object
  project.todos = project.todos.filter((todo) => todo.id !== todoIdToDelete);
}

export { addTodo, getTodo, deleteTodoImmutable };
