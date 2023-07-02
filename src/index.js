import './style.css';
import loadPage from './loadPage.js';
import buildTask from './buildTask.js';
import showHomeHeader from './showHomeHeader.js';
import displayTasks from './displayTasks.js';
import showTodayHeader from './showTodayHeader.js';
import displayTodaysTasks from './displayTodaysTasks.js';
import showWeekHeader from './showWeekHeader.js';
import isWithinInterval from 'date-fns/isWithinInterval';
import addDays from 'date-fns/addDays';
import displayThisWeeksTasks from './displayThisWeeksTasks.js';

let tasks = [];
let projects = [];
const contentDiv = document.querySelector("#content");

loadPage(contentDiv);
const display = document.querySelector(".display");
const homeTab = document.querySelector("#home");
const todayTab = document.querySelector("#today");
const weekTab = document.querySelector("#week");
const projectsTab = document.querySelector("#projects");

showHomeHeader();
const addTaskButton = document.querySelector(".addTask");
const submit = document.querySelector(".submitTask");
const form = document.querySelector("#ntForm");
const home = document.querySelector(".home");
let taskVisual = displayTasks(tasks);
home.appendChild(taskVisual);

addTaskButton.addEventListener("click", (e) => {
    form.style.display = "grid";
});

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const home = document.querySelector(".home");
    let projectName = document.querySelector("#p_input").value.toUpperCase();
    if ( projectName == "" ) {
        projectName = "Not assigned to project.";
    }
    let taskStatus = document.querySelector("#s_input");
    if (taskStatus.checked == true ) {
        taskStatus = "COMPLETE";
    } else {
        taskStatus = "INCOMPLETE";
    }
    let taskName = document.querySelector("#n_input").value.toUpperCase();
    let taskPriority = document.querySelector("#pri_select").value.toUpperCase();
    let taskDueDate = document.querySelector("#date_input").value.toUpperCase();
    let taskDescription = document.querySelector("#desc_ta").value.toUpperCase();
    let taskNotes = document.querySelector("#notes_ta").value.toUpperCase();

    if ( taskName == "" || taskDueDate == "" ) {
        alert("You must enter a name and due date for this task.")
    } else {
        let newTask = buildTask(projectName, taskStatus, taskName, taskPriority, taskDueDate, taskDescription, taskNotes);
        tasks.push(newTask);
        form.reset();
        form.style.display = "none";
        console.log(tasks);
        
        if ( document.querySelector(".taskList") == null ) {
            let taskVisual = displayTasks(tasks);
            home.appendChild(taskVisual);
        } else {
            //delete children then add ^^
            let oldTaskList = document.querySelector(".taskList");
            home.removeChild(oldTaskList);
            let taskVisual = displayTasks(tasks);
            home.appendChild(taskVisual);
        }
    }
});

homeTab.addEventListener("click", (e) => {
    if ( display.children.length > 0 ) {
        let removedElement = display.firstChild;
        display.removeChild(removedElement);

        showHomeHeader();
        const home = document.querySelector(".home");
        const addTaskButton = document.querySelector(".addTask");
        const submit = document.querySelector(".submitTask");
        const form = document.querySelector("#ntForm");

        let taskVisual = displayTasks(tasks);
        home.appendChild(taskVisual);
    
        addTaskButton.addEventListener("click", (e) => {
            form.style.display = "grid";
        });

        submit.addEventListener("click", (e) => {
            e.preventDefault();
        
            const home = document.querySelector(".home");
            let projectName = document.querySelector("#p_input").value.toUpperCase();
            if ( projectName == "" ) {
                projectName = "Not assigned to project.";
            }
            let taskStatus = document.querySelector("#s_input");
            if (taskStatus.checked == true ) {
                taskStatus = "COMPLETE";
            } else {
                taskStatus = "INCOMPLETE";
            }
            let taskName = document.querySelector("#n_input").value.toUpperCase();
            let taskPriority = document.querySelector("#pri_select").value.toUpperCase();
            let taskDueDate = document.querySelector("#date_input").value.toUpperCase();
            let taskDescription = document.querySelector("#desc_ta").value.toUpperCase();
            let taskNotes = document.querySelector("#notes_ta").value.toUpperCase();
        
            if ( taskName == "" && taskDueDate == "" ) {
                alert("You must enter a name and due date for this task.")
            } else {
                let newTask = buildTask(projectName, taskStatus, taskName, taskPriority, taskDueDate, taskDescription, taskNotes);
                tasks.push(newTask);
                form.reset();
                form.style.display = "none";
                
                if ( document.querySelector(".taskList") == null ) {
                    let taskVisual = displayTasks(tasks);
                    home.appendChild(taskVisual);
                } else {
                    //delete children then add ^^
                    let oldTaskList = document.querySelector(".taskList");
                    home.removeChild(oldTaskList);
                    let taskVisual = displayTasks(tasks);
                    home.appendChild(taskVisual);
                }
            }
        });
    }
});

todayTab.addEventListener("click", (e) => {
    if ( display.children.length > 0 ) {
        let removedElement = display.firstChild;
        display.removeChild(removedElement);
        showTodayHeader();
        const today = document.querySelector(".todayDisplay");
        let todaysTasks = displayTodaysTasks(tasks);
        console.log(todaysTasks);
        today.appendChild(todaysTasks);
    }
});

weekTab.addEventListener("click", (e) => {
    if ( display.children.length > 0 ) {
        let removedElement = display.firstChild;
        display.removeChild(removedElement);
        showWeekHeader();
        const week = document.querySelector(".weekDisplay");
        let weeksTasks = displayThisWeeksTasks(tasks, isWithinInterval, addDays);
        week.appendChild(weeksTasks);
    }
});

projectsTab.addEventListener("click", (e) => {
    console.log("projects");
});