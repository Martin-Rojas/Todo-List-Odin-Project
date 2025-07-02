import addProjectTitle from "./projectTitlesUI";

const projectList = document.getElementById(`project-list`);
const projects = [`Project 01`, `Project02`, `Project03`];

function displayProjectNames() {
  projects.forEach((project) => {
    addProjectTitle(project);
  });
}

function addProject(projectTitle) {
  projectList.innerHTML = ``;
  projects.push(projectTitle);
  displayProjectNames();
}

export { addProject, displayProjectNames };
