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
import showProjectSidebar from './showProjectSidebar.js';

let tasks = [];
let projects = [];
const contentDiv = document.querySelector("#content");

loadPage(contentDiv);
const display = document.querySelector(".display");
const homeTab = document.querySelector("#home");
const todayTab = document.querySelector("#today");
const weekTab = document.querySelector("#week");

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

    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(e => e.addEventListener("click", (e) => {
        if (e.target) {
            let targetButtonIndex = e.target.getAttribute("data-taskNumber");
            console.log(targetButtonIndex);
            let removedTaskContainer = document.querySelector(`.taskContainer[data-taskNumber="${targetButtonIndex}"]`);
            console.log(removedTaskContainer);
            let selectedTaskList = document.querySelector(".taskList");
            selectedTaskList.removeChild(removedTaskContainer);
            tasks.splice(targetButtonIndex, 1);
            console.log(tasks);

            let remainingTasks = document.querySelectorAll(".taskContainer");
            let remainingDeleteButtons = document.querySelectorAll(".deleteButton");
            let remainingEditButtons = document.querySelectorAll(".editButton");

            for ( let i = 0; i < remainingTasks.length; i ++ ) {
                remainingTasks[i].setAttribute("data-taskNumber", `${i}`);
                remainingDeleteButtons[i].setAttribute("data-taskNumber", `${i}`);
                remainingEditButtons[i].setAttribute("data-taskNumber", `${i}`);
            }
        }
    }));
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

            const deleteButtons = document.querySelectorAll(".deleteButton");
            deleteButtons.forEach(e => e.addEventListener("click", (e) => {
                if (e.target) {
                    let targetButtonIndex = e.target.getAttribute("data-taskNumber");
                    let removedTaskContainer = document.querySelector(`.taskContainer[data-taskNumber="${targetButtonIndex}"]`);
                    let selectedTaskList = document.querySelector(".taskList");
                    selectedTaskList.removeChild(removedTaskContainer);
                    tasks.splice(targetButtonIndex, 1);
                    console.log(tasks);
        
                    let remainingTasks = document.querySelectorAll(".taskContainer");
                    let remainingDeleteButtons = document.querySelectorAll(".deleteButton");
                    let remainingEditButtons = document.querySelectorAll(".editButton");
        
                    for ( let i = 0; i < remainingTasks.length; i ++ ) {
                        remainingTasks[i].setAttribute("data-taskNumber", `${i}`);
                        remainingDeleteButtons[i].setAttribute("data-taskNumber", `${i}`);
                        remainingEditButtons[i].setAttribute("data-taskNumber", `${i}`);
                    }
                }
            }));        
        });
    };
});

todayTab.addEventListener("click", (e) => {
    if ( display.children.length > 0 ) {
        let removedElement = display.firstChild;
        display.removeChild(removedElement);
        showTodayHeader();
        const today = document.querySelector(".todayDisplay");
        let todaysTasks = displayTodaysTasks(tasks);
        today.appendChild(todaysTasks);
        let todaySelectedList = document.querySelector(".todayTaskList");

        const deleteButtons = document.querySelectorAll(".deleteButton");
        console.log(deleteButtons);
        deleteButtons.forEach(e => e.addEventListener("click", (e) => {
            if (e.target) {
                let targetButtonIndex = e.target.getAttribute("data-taskNumber");
                let removedTaskContainer = document.querySelector(`.taskContainer[data-taskNumber="${targetButtonIndex}"]`);
                todaySelectedList.removeChild(removedTaskContainer)
                tasks.splice(targetButtonIndex, 1);
                console.log(tasks);
    
                let remainingTasks = document.querySelectorAll(".taskContainer");
                let remainingDeleteButtons = document.querySelectorAll(".deleteButton");
                let remainingEditButtons = document.querySelectorAll(".editButton");
    
                for ( let i = 0; i < remainingTasks.length; i ++ ) {
                    remainingTasks[i].setAttribute("data-taskNumber", `${i}`);
                    remainingDeleteButtons[i].setAttribute("data-taskNumber", `${i}`);
                    remainingEditButtons[i].setAttribute("data-taskNumber", `${i}`);
                }
            }
        }));
    
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
        let weekSelectedList = document.querySelector(".weekTaskList");

        const deleteButtons = document.querySelectorAll(".deleteButton");
        console.log(deleteButtons);
        deleteButtons.forEach(e => e.addEventListener("click", (e) => {
            if (e.target) {
                let targetButtonIndex = e.target.getAttribute("data-taskNumber");
                let removedTaskContainer = document.querySelector(`.taskContainer[data-taskNumber="${targetButtonIndex}"]`);
                weekSelectedList.removeChild(removedTaskContainer)
                tasks.splice(targetButtonIndex, 1);
                console.log(tasks);
    
                let remainingTasks = document.querySelectorAll(".taskContainer");
                let remainingDeleteButtons = document.querySelectorAll(".deleteButton");
                let remainingEditButtons = document.querySelectorAll(".editButton");
    
                for ( let i = 0; i < remainingTasks.length; i ++ ) {
                    remainingTasks[i].setAttribute("data-taskNumber", `${i}`);
                    remainingDeleteButtons[i].setAttribute("data-taskNumber", `${i}`);
                    remainingEditButtons[i].setAttribute("data-taskNumber", `${i}`);
                }
            }
        }));

    }
});

// there needs to be code that displays already created projects if they're in the projects array.

const newProjectButton = document.querySelector(".addProject");
const newProjectsForm = document.querySelector("#npForm");
const npsd = document.querySelector(".npsd");

newProjectButton.addEventListener("click", (e) => {
    newProjectsForm.style.display = "block";
});

const projectSubmissionButton = document.querySelector(".npButton");
projectSubmissionButton.addEventListener("click", (e) => {
    e.preventDefault();
    let projectName = document.querySelector("#np_input").value;
    if (projectName != "" ) {
        projects.push(projectName);
        newProjectsForm.reset();
        console.log(projects);
        newProjectsForm.style.display = "none";
        if ( npsd.children.length > 0 ) {
            let removedBox = npsd.firstChild;
            npsd.removeChild(removedBox);
            showProjectSidebar(projects);

        } else {
            showProjectSidebar(projects);        
        }
    } else {
        alert("Project must have a name.");
    }

    const deleteProjects = document.querySelectorAll(".deleteProject");
    // console.log(deleteProjects);
    deleteProjects.forEach( e => e.addEventListener("click", (e) => {
        if (e.target) {
            let projectIndex = e.target.getAttribute("data-projectNumber");
            let removedProject = document.querySelector(`.projectContainer[data-projectNumber="${projectIndex}"]`);
            
            let apBox = document.querySelector(".apBox");
            apBox.removeChild(removedProject);
            projects.splice(projectIndex, 1);

            let remainingProjects = document.querySelectorAll(".projectContainer");
            let remainingProjectDeletes = document.querySelectorAll(".deleteProject");

            for (let i = 0; i < projects.length; i++ ) {
                remainingProjects[i].setAttribute("data-projectNumber", i);
                remainingProjectDeletes[i].setAttribute("data-projectNumber", i);
            }

        }
    }));


});