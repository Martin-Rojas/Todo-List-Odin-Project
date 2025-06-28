import "./ProjectModalStyles.css";

const content = document.getElementById(`content`);
//  <!-- Project Modal -->

//   <div class="modal">
//     <h2>Add New Project</h2>
//     <form id="projectForm">
//       <label for="projectName">Project Name:</label>
//       <input type="text" id="projectName" name="projectName" required />
//       <div class="modal-actions">
//         <button type="submit">Add</button>
//         <button type="button" class="close-modal">Cancel</button>
//       </div>
//     </form>
//   </div>
function createProjectModal() {
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
  //<input type="text" id="projectName" name="projectName" required />
  inputProjectName.setAttribute(`type`, `text`);
  inputProjectName.setAttribute(`id`, `projectName`);
  inputProjectName.setAttribute(`name`, `projectName`);
  inputProjectName.setAttribute(`required`, ``);
  form.appendChild(inputProjectName);

  //       <div class="modal-actions">
  const modalActions = document.createElement(`div`);
  form.appendChild(modalActions);

  //         <button type="submit">Add</button>
  const btnAddProject = document.createElement(`button`);
  btnAddProject.setAttribute(`type`, `submit`);
  btnAddProject.innerHTML = `ADD`;
  modalActions.appendChild(btnAddProject);

  //<button type="button" class="close-modal">Cancel</button>
  const btnCancelProject = document.createElement(`button`);
  btnCancelProject.setAttribute(`type`, `submit`);
  btnCancelProject.innerHTML = `Cancel`;
  modalActions.appendChild(btnCancelProject);

  content.parentNode.insertBefore(divModal, content.nextSibling);
}

export { createProjectModal };
