export default function loadProject(element, project) {
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = project.title;
  const itemTable = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<th>Title</th><th>Duedate</th><th>Priority</th>';
  itemTable.appendChild(thead);
  const tbody = document.createElement('tbody');
  project.items.forEach(item => {
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.textContent = item.title;
    tr.appendChild(title);
    const dueDate = document.createElement('td');
    dueDate.textContent = item.dueDate.toDateString();
    tr.appendChild(dueDate);
    const priority = document.createElement('td');
    priority.textContent = item.priority;
    tr.appendChild(priority);
    const description = document.createElement('td');
    description.textContent = item.description;
    tr.appendChild(description);
    tbody.appendChild(tr);
  })
  itemTable.appendChild(tbody);
  element.appendChild(itemTable);
}