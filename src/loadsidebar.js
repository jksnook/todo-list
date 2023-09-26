export default function loadSidebar(sidebar, projects) {
  const projectList = document.createElement('ul');
  projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.title;
    li.addEventListener('click', () => {
      // load this project
    })
    projectList.appendChild(li);
  });
  const buttonli = document.createElement('li');
  const newProjectButton = document.createElement('button');
  newProjectButton.type = 'button';
  newProjectButton.textContent = 'New Project';
  newProjectButton.addEventListener('click', () => {
    //bring up new project form
  });
  buttonli.appendChild(newProjectButton);
  projectList.appendChild(buttonli);
  sidebar.appendChild(projectList);
}