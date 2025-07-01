import "./styles.css";
import { createProjectModal } from "./ProjectModal";
import addProjectTitle from "./projectTitlesUI";
const btnAddProject = document.getElementById(`add-project`);

addProjectTitle("project 01")

// hanlde the add new project
btnAddProject.addEventListener("click", () => {
  createProjectModal();
  const closeModal = document.getElementById(`close-modal`);
  const modalOverlay = document.getElementById(`modal-overlay`);

  closeModal.addEventListener(`click`, () => {
    modalOverlay.classList.remove(`modal-overlay`);
  });
});
