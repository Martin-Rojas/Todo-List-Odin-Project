import "./ProjectModalStyles.css";

const content = document.getElementById(`content`);

function createProjectModal() {
  const modalOverlay = document.createElement(`div`);
  modalOverlay.className = `modal-overlay`;
  modalOverlay.setAttribute(`id`, `modal-overlay`);

  const divModal = document.createElement(`div`);
  divModal.className = `modal`;
  const projectName = document.createElement(`h2`);
  projectName.innerHTML = `Add new project`;
  divModal.appendChild(projectName);

  const form = document.createElement(`form`);
  form.setAttribute(`id`, `projectForm`);
  divModal.appendChild(form);

  const labelProjectName = document.createElement(`label`);
  labelProjectName.setAttribute("for", `projectName`);
  labelProjectName.innerHTML = `Project Name:`;
  form.appendChild(labelProjectName);

  const inputProjectName = document.createElement(`input`);
  inputProjectName.setAttribute(`type`, `text`);
  inputProjectName.setAttribute(`id`, `projectName`);
  inputProjectName.setAttribute(`name`, `projectName`);
  inputProjectName.setAttribute(`required`, ``);
  form.appendChild(inputProjectName);

  const modalActions = document.createElement(`div`);
  modalActions.className = `modal-actions`;
  form.appendChild(modalActions);

  const btnAddProject = document.createElement(`button`);
  btnAddProject.setAttribute(`type`, `submit`);
  btnAddProject.innerHTML = `ADD`;
  modalActions.appendChild(btnAddProject);

  const btnCancelProject = document.createElement(`button`);
  btnCancelProject.setAttribute("id", `close-modal`);
  btnCancelProject.setAttribute(`type`, `button`);
  btnCancelProject.className = `close-modal`;
  btnCancelProject.innerHTML = `Cancel`;
  modalActions.appendChild(btnCancelProject);

  modalOverlay.appendChild(divModal);
  content.parentNode.insertBefore(modalOverlay, content.nextSibling);
}

export { createProjectModal };
