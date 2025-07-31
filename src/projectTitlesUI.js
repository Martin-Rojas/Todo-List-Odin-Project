function getProjectsUI() {
  const projectList = (document.getElementById(`project-list`).innerHTML = ``);
  return projectList;
}

function addProjectTitle(project) {
  const projectList = document.getElementById(`project-list`);

  const projectTitle = document.createElement(`h3`);
  projectTitle.innerHTML = `${project.projectName}`;
  projectTitle.classList.add("project-title");

  // Attach the ID so you can read it later
  projectTitle.dataset.projectId = project.projectID;

  projectList.appendChild(projectTitle);
}

export { getProjectsUI, addProjectTitle };
