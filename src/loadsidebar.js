import loadProject from "./loadproject";
import loadProjectForm from "./loadprojectform";

export default function loadSidebar(projects) {
  const sidebar = document.querySelector('div.sidebar');
  sidebar.innerHTML = '';
  const projectList = document.createElement('ul');
  projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.title;
    li.addEventListener('click', () => {
      // load this project
      loadProject(project);
    })
    projectList.appendChild(li);
  });
  const formContainer = document.createElement('div');
  const buttonli = document.createElement('li');
  const newProjectButton = document.createElement('button');
  newProjectButton.type = 'button';
  newProjectButton.textContent = 'New Project';
  newProjectButton.addEventListener('click', () => {
    //bring up new project form
    loadProjectForm(formContainer, projects);
  });
  buttonli.appendChild(newProjectButton);
  projectList.appendChild(buttonli);
  sidebar.appendChild(projectList);
  sidebar.appendChild(formContainer);
}