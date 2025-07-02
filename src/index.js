import "./styles.css";
import { createProjectModal } from "./ProjectModal";
import addProjectTitle from "./projectTitlesUI";
import { addProject, displayProjectNames } from "./projectManager";

const btnAddProject = document.getElementById(`add-project`);

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
