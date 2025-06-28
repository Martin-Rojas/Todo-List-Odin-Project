import "./styles.css";
import { createProjectModal } from "./ProjectModal";

const btnAddProject = document.getElementById(`add-project`);
console.log(btnAddProject);

// hanlde the add new project
btnAddProject.addEventListener("click", () => {
  createProjectModal();
});

