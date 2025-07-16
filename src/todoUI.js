export default function createTodoUI(todoData) {
  const todosContiners = document.getElementById(`todos-containers`);
  const todosItems = document.getElementById(`todos-itmes`);

  const todoItem = document.createElement(`div`);
  todoItem.className = `to-do-item`;
  todosItems.appendChild(todoItem);

  const todoTitle = document.createElement(`p`);
  todoTitle.innerHTML = `${todoData.title}`;
  todoItem.appendChild(todoTitle);

  const todoDueDate = document.createElement(`p`);
  todoDueDate.innerHTML = `${todoData.dueDate}`;
  todoItem.appendChild(todoDueDate);

  const todoPriority = document.createElement(`p`);
  todoPriority.innerHTML = `${todoData.priority}`;
  todoItem.appendChild(todoPriority);

  const todoItemActions = document.createElement(`div`);
  todoItemActions.className = `to-do-item-action`;
  todoItem.appendChild(todoItemActions);

  const viewTodo = document.createElement(`span`);
  viewTodo.innerHTML = `view`;
  todoItemActions.appendChild(viewTodo);

  const todoTrashDelete = document.createElement(`i`);
  todoTrashDelete.className = `fa-solid fa-trash`;
  todoItemActions.appendChild(todoTrashDelete);

  const todoTrashEdit = document.createElement(`i`);
  todoTrashEdit.className = `fa-solid fa-pen`;
  todoItemActions.appendChild(todoTrashEdit);
}
