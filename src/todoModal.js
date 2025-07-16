import "./ProjectModalStyles.css";

/** Form, */
const content = document.getElementById(`content`);

function createTodoModal() {
  const modalOverlay = document.createElement(`div`);
  modalOverlay.className = `modal-overlay`;
  modalOverlay.setAttribute(`id`, `modal-overlay`);

  const divModal = document.createElement(`div`);
  divModal.className = `modal`;
  const todoTitle = document.createElement(`h2`);
  todoTitle.innerHTML = `Add new todo`;
  divModal.appendChild(todoTitle);
  modalOverlay.appendChild(divModal);

  // Form
  const form = document.createElement(`form`);
  form.setAttribute(`id`, `todo-form`);
  divModal.appendChild(form);

  // label for todo title
  const labelTodoTitle = document.createElement(`label`);
  labelTodoTitle.setAttribute("for", `todo-title`);
  labelTodoTitle.innerHTML = `New to-do:`;
  form.appendChild(labelTodoTitle);

  // Input for todo title
  const inputTodoTitle = document.createElement(`input`);
  inputTodoTitle.setAttribute(`type`, `text`);
  inputTodoTitle.setAttribute(`id`, `todoTitleInput`);
  inputTodoTitle.setAttribute(`name`, `todoTitleInput`);
  inputTodoTitle.setAttribute(`placeholder`, `New To-do`);
  inputTodoTitle.setAttribute(`required`, ``);
  form.appendChild(inputTodoTitle);

  // label for due date
  const labelDueDate = document.createElement(`label`);
  labelDueDate.setAttribute(`for`, `todo-due-date`);
  labelDueDate.innerHTML = `Due Date:`;
  form.appendChild(labelDueDate);

  // input for due date
  const inputTodoDueDate = document.createElement(`input`);
  inputTodoDueDate.setAttribute(`type`, `date`);
  inputTodoDueDate.setAttribute(`id`, `todo-due-date`);
  inputTodoDueDate.setAttribute(`name`, `todo-due-date`);
  inputTodoDueDate.setAttribute(`required`, ``);
  form.appendChild(inputTodoDueDate);

  //   Priority select label
  const labelPriority = document.createElement(`label`);
  labelPriority.setAttribute(`for`, `priority`);
  labelPriority.innerHTML = `Choose priority: `;
  form.appendChild(labelPriority);

  // Select element list
  const selectPriority = document.createElement(`select`);
  selectPriority.setAttribute("name", `priority`);
  selectPriority.setAttribute("id", `priority`);
  form.appendChild(selectPriority);

  // Add option high into the select list
  const selectOptionHigh = document.createElement(`option`);
  selectOptionHigh.setAttribute(`value`, `high`);
  selectOptionHigh.innerHTML = `High`;
  selectPriority.appendChild(selectOptionHigh);

  // Add option medium into select list
  const selectOptionMedium = document.createElement(`option`);
  selectOptionMedium.setAttribute(`value`, `Medium`);
  selectOptionMedium.innerHTML = `Medium`;
  selectPriority.appendChild(selectOptionMedium);

  // Add option low into select list
  const selectOptionLow = document.createElement(`option`);
  selectOptionLow.setAttribute(`value`, `low`);
  selectOptionLow.innerHTML = `Low`;
  selectPriority.appendChild(selectOptionLow);

  // style my cancel by btns delete and add
  const modalActions = document.createElement(`div`);
  modalActions.className = `modal-actions`;
  form.appendChild(modalActions);

  // Btn to create a btn to add todo
  const btnAddTodo = document.createElement(`button`);
  btnAddTodo.setAttribute(`type`, `submit`);
  btnAddTodo.innerHTML = `ADD`;
  modalActions.appendChild(btnAddTodo);

  // Btn to cancel the creation of new todo
  const btnCancelTodo = document.createElement(`button`);
  btnCancelTodo.setAttribute("id", `close-modal`);
  btnCancelTodo.setAttribute(`type`, `button`);
  btnCancelTodo.className = `close-modal`;
  btnCancelTodo.innerHTML = `Cancel`;
  modalActions.appendChild(btnCancelTodo);

  content.parentNode.insertBefore(modalOverlay, content.nextSibling);
}

export { createTodoModal };
