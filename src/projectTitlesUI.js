import createTodoUI from "./todoUI";

export default function addProjectTitle(project) {
  const projectList = document.getElementById(`project-list`);

  const projectTitle = document.createElement(`h3`);
  projectTitle.innerHTML = `${project.projectName}`;

  // delete this lines
  createTodoUI(project.todos[0]);

  // end of lines delete

  projectTitle.addEventListener(`click`, () => {
    console.log(project);
  });

  projectList.appendChild(projectTitle);
}
