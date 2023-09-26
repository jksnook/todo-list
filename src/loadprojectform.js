import loadSidebar from "./loadsidebar";
import Project from "./project";

export default function loadProjectForm(element, projectList) {
  element.innerHTML = '';
  const form = document.createElement('form');
  const titleLabel = document.createElement('label');
  titleLabel.for = 'project-title';
  titleLabel.textContent = 'Project Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'project-title';
  titleInput.id = 'project-title';
  const createProjectButton = document.createElement('button');
  createProjectButton.type = 'button';
  createProjectButton.textContent = 'Create Project';
  createProjectButton.addEventListener('click', () => {
    projectList.push(new Project(titleInput.value))
    loadSidebar(projectList);
  });
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(createProjectButton);
  element.appendChild(form);
}