import "./todoDetails.css";
import "./ProjectModalStyles.css";

const content = document.getElementById(`content`);

function createTodoDetails(projectName, todo) {
  const modalOverlay = document.createElement(`div`);
  modalOverlay.className = `modal-overlay`;
  modalOverlay.setAttribute(`id`, `modal-overlay-todo-details`);

  const divModal = document.createElement(`div`);
  divModal.className = `modal`;

  const projectNameEl = document.createElement(`h2`);
  projectNameEl.innerHTML = `Project name: ${projectName}`;
  divModal.appendChild(projectNameEl);

  const todoTitleEl = document.createElement(`h3`);
  todoTitleEl.innerHTML = `Todo: ${todo.title}`;
  divModal.appendChild(todoTitleEl);

  const dueDateEl = document.createElement(`h3`);
  dueDateEl.innerHTML = `Due Date: ${todo.dueDate}`;
  divModal.appendChild(dueDateEl);

  const priorityEl = document.createElement(`h3`);
  priorityEl.innerHTML = `Priority: ${todo.priority}`;
  divModal.appendChild(priorityEl);

  // Btn to cancel the modal
  const btnCancelTodoDetails = document.createElement(`button`);
  btnCancelTodoDetails.setAttribute("id", `close-modal-todo-details`);
  btnCancelTodoDetails.setAttribute(`type`, `button`);
  btnCancelTodoDetails.className = `close-modal`;
  btnCancelTodoDetails.innerHTML = `Cancel`;
  divModal.appendChild(btnCancelTodoDetails);

  modalOverlay.appendChild(divModal);
  content.parentNode.insertBefore(modalOverlay, content.nextSibling);
}

export { createTodoDetails };
