import "./styles.css";
import { createProjectModal } from "./ProjectModal";

const btnAddProject = document.getElementById(`add-project`);
console.log(btnAddProject);

// hanlde the add new project
btnAddProject.addEventListener("click", () => {
  createProjectModal();
  const closeModal = document.getElementById(`close-modal`);
  const modalOverlay = document.getElementById(`modal-overlay`);

  closeModal.addEventListener(`click`, () => {
    modalOverlay.classList.remove(`modal-overlay`);
  });
//   console.log(modalOverlay);
});
