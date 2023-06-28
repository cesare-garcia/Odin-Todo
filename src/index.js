import './style.css';
import loadPage from './loadPage.js';
import loadAllTasks from './loadAllTasks.js';
import loadTodaysTasks from './loadTodaysTasks.js';
import loadWeeksTasks from './loadThisWeeksTasks.js';
import loadProjects from './loadProjects.js';

const contentDiv = document.querySelector("#content");

loadPage(contentDiv);

const allTasksTab = document.querySelector("#allTasks");
const todayTab = document.querySelector("#today");
const weekTab = document.querySelector("#week");
const projectsTab = document.querySelector("#projects");
const taskDisplayBox = document.querySelector(".taskDisplay");

loadAllTasks(taskDisplayBox);

allTasksTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        loadAllTasks(taskDisplayBox);
    }
})

todayTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        loadTodaysTasks(taskDisplayBox);
    }
})

weekTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        loadWeeksTasks(taskDisplayBox);
    }
})

projectsTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        loadProjects(taskDisplayBox);
    }
})