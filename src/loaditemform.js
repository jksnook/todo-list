import loadProject from "./loadproject";
import Todo from "./todo";

export default function loadItemForm(element, project) {
  element.innerHTML = '';
  const form = document.createElement('form');
  const titleField = document.createElement('input');
  titleField.type = 'text';
  titleField.name = 'title';
  titleField.id = 'title';
  form.appendChild(titleField);
  const dateField = document.createElement('input');
  dateField.type = 'date';
  dateField.name = 'date';
  dateField.id = 'date';
  form.appendChild(dateField);
  const selectPriority = document.createElement('select');
  selectPriority.name = 'priority';
  selectPriority.id = 'priority';
  const high = document.createElement('option')
  high.value = 'high';
  high.textContent = 'high';
  selectPriority.appendChild(high);
  const low = document.createElement('option')
  low.value = 'low';
  low.textContent = 'low';
  selectPriority.appendChild(low);
  form.appendChild(selectPriority);
  const description = document.createElement('textarea');
  description.name = 'description';
  description.id = 'description';
  form.appendChild(description);
  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.textContent = 'Create Item';
  submitButton.addEventListener('click', () => {
    if (dateField.value) {
      project.items.push(new Todo(titleField.value, dateField.valueAsDate, selectPriority.value, description.textContent));
      loadProject(project);
    }
  });
  form.appendChild(submitButton);
  element.appendChild(form);
}