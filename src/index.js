import './style.css';
import loadPage from './loadPage.js';
import loadAllTasks from './loadAllTasks.js';
import loadTodaysTasks from './loadTodaysTasks.js';
import loadWeeksTasks from './loadThisWeeksTasks.js';
import loadProjects from './loadProjects.js';

const contentDiv = document.querySelector("#content");

loadPage(contentDiv);

let tasksArray = [
    {
        projectGroup: "",
        status: "done",
        title: "Test Task",
        description: "Create a test task for the project",
        dueDate: "january 1st, 2024",
        priority: "high",
        notes: "make sure to complete three days before."
    },
    {
        projectGroup: "",
        status: "done",
        title: "Test Task 2",
        description: "Create a test task for the project",
        dueDate: "january 21st, 2024",
        priority: "high",
        notes: "make sure to complete three days before."
    }
];
let projectArray = [];
const allTasksTab = document.querySelector("#allTasks");
const todayTab = document.querySelector("#today");
const weekTab = document.querySelector("#week");
const projectsTab = document.querySelector("#projects");
const taskDisplayBox = document.querySelector(".taskDisplay");

loadAllTasks(taskDisplayBox, tasksArray);

allTasksTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        
        // code to add inputs for a new task into an object that is added to an array
        
        
        // code to display the tasks in the array
        loadAllTasks(taskDisplayBox, tasksArray);
    }
})

todayTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        
        // code to add inputs for a new task into an object that is added to an array
        
        
        // code to display the tasks in the array
        
        
        loadTodaysTasks(taskDisplayBox);
    }
})

weekTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        
        // code to add inputs for a new task into an object that is added to an array
        
        
        // code to display the tasks in the array
        
        
        loadWeeksTasks(taskDisplayBox);
    }
})

projectsTab.addEventListener("click", (e) => {
    if (taskDisplayBox.children.length > 0 ) {
        let removedElement = taskDisplayBox.firstChild;
        taskDisplayBox.removeChild(removedElement);
        
        // code to add inputs for a new task into an object that is added to an array
        
        
        // code to display the tasks in the array
        
        
        loadProjects(taskDisplayBox);
    }
})