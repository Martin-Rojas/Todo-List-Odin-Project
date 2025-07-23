import "./styles.css";
import { createProjectModal } from "./ProjectModal";
import { addProject, displayProjectNames, readProject } from "./projectManager";
import createTodoUI from "./todoUI";
import { createTodoModal } from "./todoModal";
import { addTodo, getTodo } from "./todoManager";
import { createTodoDetails } from "./todoDetails";

createTodoDetails();

const btnAddProject = document.getElementById(`add-project`);
let projectID = ``;

// Handle the click of the project titles
const projectList = document.getElementById(`project-list`);

// Display project names initally
displayProjectNames();

// hanlde the add new project
btnAddProject.addEventListener("click", () => {
  createProjectModal();
  const closeModal = document.getElementById(`close-modal`);
  const modalOverlay = document.getElementById(`modal-overlay`);

  closeModal.addEventListener(`click`, () => {
    modalOverlay.classList.remove(`modal-overlay`);
  });

  // Handle the project form
  const projectName = document.getElementById(`projectNameInput`);
  const form = document.getElementById(`projectForm`);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    addProject(projectName.value);
    if (projectName) {
      modalOverlay.classList.remove(`modal-overlay`);
    }
  });
});

// Handle todos display for  an specific project
projectList.addEventListener("click", (e) => {
  if (e.target.classList.contains("project-title")) {
    // set activeProjectID
    projectID = e.target.dataset.projectId;

    // display todos
    const todos = readProject(projectID).todos;
    const todosItems = document.getElementById(`todos-itmes`);
    todosItems.innerHTML = ``;

    todos.forEach((todo) => {
      console.log(todo);
      createTodoUI(todo);
    });
  }
});

// - add new todos to the right list
const btnAddTodo = document.getElementById(`add-todo`);

// create random ids
function idGenerator() {
  return Math.random().toString(36).substring(2, 10);
}

// Handle the btn new todo event
btnAddTodo.addEventListener(`click`, () => {
  // Show form to create new todo
  createTodoModal();

  // Handle submit new todo form
  const newTodoForm = document.getElementById(`todo-form`);

  newTodoForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    // Get values
    const todoTitle = document.getElementById(`todoTitleInput`).value;
    const todoDueDate = document.getElementById(`todo-due-date`).value;
    const todoPriority = document.getElementById(`priority`).value;

    const newTodo = {
      id: idGenerator(),
      title: todoTitle,
      dueDate: todoDueDate,
      priority: todoPriority,
    };

    // Remove modal todo after submit it
    const modalOverlayTodo = document.getElementById(`modal-overlay-todo`);
    if (todoTitle && todoDueDate && todoPriority) {
      modalOverlayTodo.classList.remove(`modal-overlay`);
    }

    // Add new todo to the todos array
    addTodo(readProject(projectID).todos, newTodo);

    // Re-display todos
    const todosItems = document.getElementById(`todos-itmes`);
    todosItems.innerHTML = "";
    readProject(projectID).todos.forEach((todo) => {
      createTodoUI(todo);
    });
  });

  // Close the new todo form with btn cancel
  const closeModalTodo = document.getElementById(`close-modal-todo`);
  const modalOverlay = document.getElementById(`modal-overlay-todo`);

  closeModalTodo.addEventListener(`click`, () => {
    modalOverlay.classList.remove(`modal-overlay`);
  });
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("view-todo")) {
    const todoItemElement = event.target.closest(".to-do-item");
    const todoId = todoItemElement.dataset.todoId;

    console.log("Clicked TODO ID:", todoId);

    // Now you can look it up from your projects array
    const todo = getTodo(readProject(projectID).todos, todoId);
    console.log("Todo details:", todo);
  }
});
