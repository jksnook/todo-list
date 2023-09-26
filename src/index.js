import Project from "./project";
import loadSidebar from "./loadsidebar";
import Todo from "./todo";
import loadProject from "./loadproject";

//create Default project
let projects = [];
projects.push(new Project('General'));

projects[0].items.push(new Todo('Test Item', new Date(2023, 9, 26), 'high', 'A test Item'));

//load sidebar
const sidebar = document.querySelector('div.sidebar');

loadSidebar(sidebar, projects);

//load default project

const todo = document.querySelector('div.todo');
loadProject(todo, projects[0]);