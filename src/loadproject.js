import loadItemForm from "./loaditemform";
import loadItem from "./loaditem";

export default function loadProject(project) {
  const todoContainer = document.querySelector('div.todo');
  todoContainer.innerHTML = '';
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = project.title;
  const formContainer = document.createElement('div')
  formContainer.classList.add('form-container');
  const newItemButton = document.createElement('button');
  newItemButton.textContent = 'New Item';
  newItemButton.addEventListener('click', () => loadItemForm(formContainer, project));
  const itemTable = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<th>Title</th><th>Duedate</th><th>Priority</th>';
  itemTable.appendChild(thead);
  const tbody = document.createElement('tbody');
  for (let i = 0; i < project.items.length; i++) {
    const item = project.items[i];
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.textContent = item.title;
    tr.appendChild(title);
    const dueDate = document.createElement('td');
    dueDate.textContent = (item.dueDate.getUTCMonth() + 1) + '/' + item.dueDate.getUTCDate();
    tr.appendChild(dueDate);
    const priority = document.createElement('td');
    priority.textContent = item.priority;
    tr.appendChild(priority);

    // add button to view item
    const viewItemButton = document.createElement('button');
    viewItemButton.type = 'button';
    viewItemButton.textContent = 'View';
    viewItemButton.addEventListener('click', () => {
      loadItem(item);
    })
    const viewButtontd = document.createElement('td');
    viewButtontd.appendChild(viewItemButton);
    tr.appendChild(viewButtontd);

    // add button to delete item
    const deleteItemButton = document.createElement('button');
    deleteItemButton.type = 'button';
    deleteItemButton.textContent = 'Delete';
    deleteItemButton.addEventListener('click', () => {
      project.items.splice(i, 1);
      loadProject(project);
    })
    const deleteButtontd = document.createElement('td');
    deleteButtontd.appendChild(deleteItemButton);
    tr.appendChild(deleteButtontd);
    tbody.appendChild(tr);
  }
  itemTable.appendChild(tbody);
  todoContainer.appendChild(projectTitle);
  todoContainer.appendChild(newItemButton);
  todoContainer.appendChild(formContainer);
  todoContainer.appendChild(itemTable);
}