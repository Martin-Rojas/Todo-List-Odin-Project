export default function createTodoUI(todoData) {
  const todosContiners = document.getElementById(`todos-containers`);

  const todoItem = document.createElement(`div`);
  todoItem.className = `to-do-item`;
  todosContiners.appendChild(todoItem);

  const todoTitle = document.createElement(`p`);
  todoTitle.innerHTML = `${todoData.title}`;
  todoItem.appendChild(todoTitle);

  // delete this <p>6-26-2025</p>
  const todoDueDate = document.createElement(`p`);
  todoDueDate.innerHTML = `${todoData.dueDate}`;
  todoItem.appendChild(todoDueDate);

  // delete <p>Hard</p>
  const todoPriority = document.createElement(`p`);
  todoPriority.innerHTML = `${todoData.priority}`;
  todoItem.appendChild(todoPriority);

  // delete this
  /** <div class="to-do-item-action">
            </div> */
  const todoItemActions = document.createElement(`div`);
  todoItemActions.className = `to-do-item-action`;
  todoItem.appendChild(todoItemActions);

  // delete <span>view</span>
  const viewTodo = document.createElement(`span`);
  viewTodo.innerHTML = `view`;
  todoItemActions.appendChild(viewTodo);

  // <i class="fa-solid fa-trash"></i>
  const todoTrashDelete = document.createElement(`i`);
  todoTrashDelete.className = `fa-solid fa-trash`;
  todoItemActions.appendChild(todoTrashDelete);

  //<i class="fa-solid fa-pen"></i>
  const todoTrashEdit = document.createElement(`i`);
  todoTrashEdit.className = `fa-solid fa-pen`;
  todoItemActions.appendChild(todoTrashEdit);
}
