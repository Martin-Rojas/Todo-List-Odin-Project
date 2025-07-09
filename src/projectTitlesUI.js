export default function addProjectTitle(project) {
  const projectList = document.getElementById(`project-list`);

  const projectTitle = document.createElement(`h3`);
  projectTitle.innerHTML = `${project.projectName}`;

  projectTitle.addEventListener(`click`, () => {
    console.log(project);
  });

  projectList.appendChild(projectTitle);
}
