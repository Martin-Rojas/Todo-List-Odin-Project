import addProjectTitle from "./projectTitlesUI";

function idGenerator() {
  return Math.random().toString(36).substring(2, 10);
}

const projectList = document.getElementById(`project-list`);
const projects = [
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

function displayProjectNames() {
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
  displayProjectNames();
}

/** Read project */
function readProject() {}

/* When the last item in the todo list is delete 
   the project should be delete it*/
function deleteProject() {}

export { addProject, displayProjectNames };
