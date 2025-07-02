export default function addProjectTitle(project) {
  const projectList = document.getElementById(`project-list`);

  const projectTitle = document.createElement(`h3`);
  projectTitle.innerHTML = `${project}`;

  projectList.appendChild(projectTitle);
}
