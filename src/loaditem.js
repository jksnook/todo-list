export default function loadItem(item) {
  const todoContainer = document.querySelector('div.todo');
  todoContainer.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = item.title;
  todoContainer.appendChild(title);
  const dueHeader = document.createElement('h3');
  dueHeader.textContent = 'Due Date:';
  todoContainer.appendChild(dueHeader);
  const dueDate = document.createElement('p');
  dueDate.textContent = (item.dueDate.getUTCMonth() + 1) + '/' + item.dueDate.getUTCDate() + '/' + item.dueDate.getUTCFullYear();
  todoContainer.appendChild(dueDate);
  const priorityHeader = document.createElement('h3');
  priorityHeader.textContent = 'Priority:';
  todoContainer.appendChild(priorityHeader);
  const priority = document.createElement('p');
  priority.textContent = item.priority;
  todoContainer.appendChild(priority);
  const descriptionHeader = document.createElement('h3');
  descriptionHeader.textContent = 'Description:';
  todoContainer.appendChild(descriptionHeader);
  const description = document.createElement('p');
  description.textContent = item.description;
  todoContainer.appendChild(description);
}