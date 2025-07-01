export default function addProjectTitle(project) {
  // <h3>Project 04</h3>
  const plusElement = document.getElementById(`add-project`);

  const projectTitle = document.createElement(`h3`);
  projectTitle.innerHTML = `${project}`;

  plusElement.parentNode.insertBefore(projectTitle, plusElement.nextSibling);
}
