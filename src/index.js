import "./styles.css";
import { createProjectModal } from "./ProjectModal";
import { addProject, displayProjectNames, readProject } from "./projectManager";
import createTodoUI from "./todoUI";

const btnAddProject = document.getElementById(`add-project`);
let activeProjectID = `ax4wrtma`;

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

projectList.addEventListener("click", (e) => {
  if (e.target.classList.contains("project-title")) {
    const projectID = e.target.dataset.projectId;
    console.log("Clicked project ID:", projectID);

    console.log(readProject(projectID).todos);

    // Now you can use this ID to:
    // - set activeProjectID
    // - show todos for that project
    // display todos
    const todos = readProject(projectID).todos;
    const todosItems = document.getElementById(`todos-itmes`);
    todosItems.innerHTML = ``;

    todos.forEach((todo) => {
      console.log(todo);
      createTodoUI(todo);
    });
    // - add new todos to the right list
  }
});
