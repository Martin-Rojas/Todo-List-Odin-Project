import addProjectTitle from "./projectTitlesUI";

function idGenerator() {
  return Math.random().toString(36).substring(2, 10);
}

const projectList = document.getElementById(`project-list`);

let projects = [
  {
    projectID: idGenerator(),
    projectName: `Web-App`,
    todos: [
      {
        id: idGenerator(),
        title: `Design UI`,
        dueDate: `2025-06-20`,
        priority: `high`,
      },
    ],
  },
  {
    projectID: idGenerator(),
    projectName: `Portafolio-App`,
    todos: [
      {
        id: idGenerator(),
        title: `Design UI`,
        dueDate: `2025-06-18`,
        priority: `medium`,
      },
      {
        id: idGenerator(),
        title: `plan projects`,
        dueDate: `2025-06-18`,
        priority: `high`,
      },
    ],
  },
];

// Save the projects array to LocalStorage
function saveToLocalStorage() {
  localStorage.setItem("todoProjects", JSON.stringify(projects));
}

function displayProjectNames() {
  let projects = JSON.parse(localStorage.getItem(`todoProjects`));
  console.log(projects);
  projects.forEach((project) => {
    addProjectTitle(project);
  });
}

function addProject(projectTitle) {
  projectList.innerHTML = ``;
  const newProject = {
    projectID: idGenerator(),
    projectName: projectTitle,
    todos: [],
  };
  projects.push(newProject);
  saveToLocalStorage();
  displayProjectNames();
}

/** Read project */
function readProject(activeProjectID) {
  // get the projects from the localStorage
  let projects = JSON.parse(localStorage.getItem(`todoProjects`));
  const project = projects.find(
    (project) => project.projectID === activeProjectID
  );
  return project ? project : null; // returns the name or null if not found
}

/* Update project*/
function updateProject(activeProject, editTodo, idTodo) {
  // Find the active project
  // Find the todo to be update
  const updateTodo = activeProject.todos.find((todo) => todo.id === idTodo);
  updateTodo.title = editTodo.title;
  updateTodo.dueDate = editTodo.dueDate;
  updateTodo.priority = editTodo.priority;
  saveToLocalStorage();
}

/* When the last item in the todo list is delete 
   the project should be delete it*/
function deleteProject(activeProject) {
  projects = projects.filter(
    (project) => project.projectID !== activeProject.projectID
  );
}

export {
  addProject,
  displayProjectNames,
  readProject,
  updateProject,
  deleteProject,
};
