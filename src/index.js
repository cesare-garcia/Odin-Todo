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
import showProjectHeader from './showProjectHeader.js';
import displayProjectTasks from './displayProjectTasks.js';

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
const editForm = document.querySelector("#editForm");
const home = document.querySelector(".home");
let taskVisual = displayTasks(tasks);
home.appendChild(taskVisual);

// code that adds event listeners to delete and edit buttons if there are already things loaded.

const editButtons = document.querySelectorAll(".editButton");
editButtons.forEach(e => e.addEventListener("click", (e) => {
    if (e.target) {
        editForm.style.display = "grid";
        let editButtonIndex = e.target.getAttribute("data-taskNumber");
        let editSubmission = document.querySelector(".editSubmitTask");
        editSubmission.addEventListener("click", (e) => {
            e.preventDefault();
            let editProjectName = document.querySelector("#editP_input").value.toUpperCase();
            if ( editProjectName == "" ) {
                editProjectName = "Not assigned to project.";
            }
            let editTaskStatus = document.querySelector("#editS_input");
            if (editTaskStatus.checked == true ) {
                editTaskStatus = "COMPLETE";
            } else {
                editTaskStatus = "INCOMPLETE";
            }
            let editTaskName = document.querySelector("#editN_input").value.toUpperCase();
            let editTaskPriority = document.querySelector("#editPri_select").value.toUpperCase();
            let editTaskDueDate = document.querySelector("#editDate_input").value.toUpperCase();
            let editTaskDescription = document.querySelector("#editDesc_ta").value.toUpperCase();
            let editTaskNotes = document.querySelector("#editNotes_ta").value.toUpperCase();
        
            if ( taskName == "" || taskDueDate == "" ) {
                alert("Name and Due Date cannot remain blank.")
            } else {
                tasks[editButtonIndex].projectName = editProjectName;
                tasks[editButtonIndex].taskStatus = editTaskStatus;
                tasks[editButtonIndex].taskName = editTaskName;
                tasks[editButtonIndex].taskPriority = editTaskPriority;
                tasks[editButtonIndex].taskDueDate = editTaskDueDate;
                tasks[editButtonIndex].taskDescription = editTaskDescription;
                tasks[editButtonIndex].taskNotes = editTaskNotes;
                console.log(tasks[editButtonIndex]);
                
                let oldTaskList = document.querySelector(".taskList");
                let newTaskList = displayTasks(tasks);
                home.removeChild(oldTaskList);
                home.appendChild(newTaskList);

                editForm.reset();
                editForm.style.display = "none";
            }
        });     
    }
})); 

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
            let oldTaskList = document.querySelector(".taskList");
            home.removeChild(oldTaskList);
            let taskVisual = displayTasks(tasks);
            home.appendChild(taskVisual);
        }
    }

    const editButtons = document.querySelectorAll(".editButton");
    editButtons.forEach(e => e.addEventListener("click", (e) => {
        if (e.target) {
            editForm.style.display = "grid";
            let editButtonIndex = e.target.getAttribute("data-taskNumber");
            let editSubmission = document.querySelector(".editSubmitTask");
            editSubmission.addEventListener("click", (e) => {
                e.preventDefault();
                let editProjectName = document.querySelector("#editP_input").value.toUpperCase();
                if ( editProjectName == "" ) {
                    editProjectName = "Not assigned to project.";
                }
                let editTaskStatus = document.querySelector("#editS_input");
                if (editTaskStatus.checked == true ) {
                    editTaskStatus = "COMPLETE";
                } else {
                    editTaskStatus = "INCOMPLETE";
                }
                let editTaskName = document.querySelector("#editN_input").value.toUpperCase();
                let editTaskPriority = document.querySelector("#editPri_select").value.toUpperCase();
                let editTaskDueDate = document.querySelector("#editDate_input").value.toUpperCase();
                let editTaskDescription = document.querySelector("#editDesc_ta").value.toUpperCase();
                let editTaskNotes = document.querySelector("#editNotes_ta").value.toUpperCase();
            
                if ( taskName == "" || taskDueDate == "" ) {
                    alert("Name and Due Date cannot remain blank.")
                } else {
                    tasks[editButtonIndex].projectName = editProjectName;
                    tasks[editButtonIndex].taskStatus = editTaskStatus;
                    tasks[editButtonIndex].taskName = editTaskName;
                    tasks[editButtonIndex].taskPriority = editTaskPriority;
                    tasks[editButtonIndex].taskDueDate = editTaskDueDate;
                    tasks[editButtonIndex].taskDescription = editTaskDescription;
                    tasks[editButtonIndex].taskNotes = editTaskNotes;
                    console.log(tasks[editButtonIndex]);
                    
                    let oldTaskList = document.querySelector(".taskList");
                    let newTaskList = displayTasks(tasks);
                    home.removeChild(oldTaskList);
                    home.appendChild(newTaskList);

                    editForm.reset();
                    editForm.style.display = "none";
                }
            });     
        }
    })); 

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
        const editForm = document.querySelector("#editForm");

        let taskVisual = displayTasks(tasks);
        home.appendChild(taskVisual);
    
        // edit and delete functionality may also be needed outside of the submit event listener;

        const editButtons = document.querySelectorAll(".editButton");
        editButtons.forEach(e => e.addEventListener("click", (e) => {
            if (e.target) {
                editForm.style.display = "grid";
                let editButtonIndex = e.target.getAttribute("data-taskNumber");
                let editSubmission = document.querySelector(".editSubmitTask");
                editSubmission.addEventListener("click", (e) => {
                    e.preventDefault();
                    let editProjectName = document.querySelector("#editP_input").value.toUpperCase();
                    if ( editProjectName == "" ) {
                        editProjectName = "Not assigned to project.";
                    }
                    let editTaskStatus = document.querySelector("#editS_input");
                    if (editTaskStatus.checked == true ) {
                        editTaskStatus = "COMPLETE";
                    } else {
                        editTaskStatus = "INCOMPLETE";
                    }
                    let editTaskName = document.querySelector("#editN_input").value.toUpperCase();
                    let editTaskPriority = document.querySelector("#editPri_select").value.toUpperCase();
                    let editTaskDueDate = document.querySelector("#editDate_input").value.toUpperCase();
                    let editTaskDescription = document.querySelector("#editDesc_ta").value.toUpperCase();
                    let editTaskNotes = document.querySelector("#editNotes_ta").value.toUpperCase();
                
                    if ( taskName == "" || taskDueDate == "" ) {
                        alert("Name and Due Date cannot remain blank.")
                    } else {
                        tasks[editButtonIndex].projectName = editProjectName;
                        tasks[editButtonIndex].taskStatus = editTaskStatus;
                        tasks[editButtonIndex].taskName = editTaskName;
                        tasks[editButtonIndex].taskPriority = editTaskPriority;
                        tasks[editButtonIndex].taskDueDate = editTaskDueDate;
                        tasks[editButtonIndex].taskDescription = editTaskDescription;
                        tasks[editButtonIndex].taskNotes = editTaskNotes;
                        console.log(tasks[editButtonIndex]);
                        
                        let oldTaskList = document.querySelector(".taskList");
                        let newTaskList = displayTasks(tasks);
                        home.removeChild(oldTaskList);
                        home.appendChild(newTaskList);
    
                        editForm.reset();
                        editForm.style.display = "none";
                    }
                });     
            }
        })); 

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
                    let oldTaskList = document.querySelector(".taskList");
                    home.removeChild(oldTaskList);
                    let taskVisual = displayTasks(tasks);
                    home.appendChild(taskVisual);
                }
            }

            // edit functionality needed

            const editButtons = document.querySelectorAll(".editButton");
            editButtons.forEach(e => e.addEventListener("click", (e) => {
                if (e.target) {
                    editForm.style.display = "grid";
                    let editButtonIndex = e.target.getAttribute("data-taskNumber");
                    let editSubmission = document.querySelector(".editSubmitTask");
                    editSubmission.addEventListener("click", (e) => {
                        e.preventDefault();
                        let editProjectName = document.querySelector("#editP_input").value.toUpperCase();
                        if ( editProjectName == "" ) {
                            editProjectName = "Not assigned to project.";
                        }
                        let editTaskStatus = document.querySelector("#editS_input");
                        if (editTaskStatus.checked == true ) {
                            editTaskStatus = "COMPLETE";
                        } else {
                            editTaskStatus = "INCOMPLETE";
                        }
                        let editTaskName = document.querySelector("#editN_input").value.toUpperCase();
                        let editTaskPriority = document.querySelector("#editPri_select").value.toUpperCase();
                        let editTaskDueDate = document.querySelector("#editDate_input").value.toUpperCase();
                        let editTaskDescription = document.querySelector("#editDesc_ta").value.toUpperCase();
                        let editTaskNotes = document.querySelector("#editNotes_ta").value.toUpperCase();
                    
                        if ( taskName == "" || taskDueDate == "" ) {
                            alert("Name and Due Date cannot remain blank.")
                        } else {
                            tasks[editButtonIndex].projectName = editProjectName;
                            tasks[editButtonIndex].taskStatus = editTaskStatus;
                            tasks[editButtonIndex].taskName = editTaskName;
                            tasks[editButtonIndex].taskPriority = editTaskPriority;
                            tasks[editButtonIndex].taskDueDate = editTaskDueDate;
                            tasks[editButtonIndex].taskDescription = editTaskDescription;
                            tasks[editButtonIndex].taskNotes = editTaskNotes;
                            console.log(tasks[editButtonIndex]);
                            
                            let oldTaskList = document.querySelector(".taskList");
                            let newTaskList = displayTasks(tasks);
                            home.removeChild(oldTaskList);
                            home.appendChild(newTaskList);
        
                            editForm.reset();
                            editForm.style.display = "none";
                        }
                    });     
                }
            })); 

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

// we need edit functionality for this tab
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

// we need edit functionality for this tab
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
// we need edit functionality for these tabs


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

    //this is the add project button
    let apBox = document.querySelector(".apBox");
    if ( apBox.children.length > 0 ) {
        const projectList = document.querySelectorAll(".projectTitle");
        projectList.forEach(e => e.addEventListener("click", (e) => {
            if (display.children.length > 0 ) {
                let removedStuff = display.firstChild;
                display.removeChild(removedStuff);
                let projectIndex = e.target.getAttribute("data-projectNumber");
                showProjectHeader(display, projects, projectIndex);
                let projectTaskVisual = displayProjectTasks(projects, projectIndex, tasks)
                let test = document.querySelector(".spBox");
                test.appendChild(projectTaskVisual);
                let addProjectTask = document.querySelector(".spat");
                addProjectTask.addEventListener("click", (e) => {
                    const ptForm = document.querySelector("#projectTaskForm");
                    ptForm.style.display = "grid";
                });
                
                const ptSubmit = document.querySelector(".ptsubmitTask");
                ptSubmit.addEventListener("click", (e) => {
                    e.preventDefault();

                    const spBox = document.querySelector(".spBox");
                    const ptForm = document.querySelector("#projectTaskForm");

                    let ptProjectName = document.querySelector(".spName").innerText.toUpperCase();
                    console.log(ptProjectName);
                    let ptTaskStatus = document.querySelector("#pts_input");
                    if (ptTaskStatus.checked == true ) {
                        ptTaskStatus = "COMPLETE";
                    } else {
                        ptTaskStatus = "INCOMPLETE";
                    }
                    let ptTaskName = document.querySelector("#ptn_input").value.toUpperCase();
                    let ptTaskPriority = document.querySelector("#ptpri_select").value.toUpperCase();
                    let ptTaskDueDate = document.querySelector("#ptdate_input").value.toUpperCase();
                    let ptTaskDescription = document.querySelector("#ptdesc_ta").value.toUpperCase();
                    let ptTaskNotes = document.querySelector("#ptnotes_ta").value.toUpperCase();

                    if ( ptTaskName == "" && ptTaskDueDate == "" ) {
                        alert("You must enter a name and due date for this task.")
                    } else {
                        let newTask = buildTask(ptProjectName, ptTaskStatus, ptTaskName, ptTaskPriority, ptTaskDueDate, ptTaskDescription, ptTaskNotes);
                        tasks.push(newTask);
                        ptForm.reset();
                        ptForm.style.display = "none";
                        
                        if ( document.querySelector(".taskList") == null ) {
                            let ptTaskVisual = displayProjectTasks(projects, projectIndex, tasks);
                            spBox.appendChild(ptTaskVisual);
                        } else {
                            let oldTaskList = document.querySelector(".taskList");
                            spBox.removeChild(oldTaskList);
                            let ptTaskVisual = displayProjectTasks(projects, projectIndex, tasks);
                            spBox.appendChild(ptTaskVisual);
                        }
                    }
                });
                
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
    
                // add eventlistener to edit buttons
            }
        }));
    };
    
    const deleteProjects = document.querySelectorAll(".deleteProject");
    deleteProjects.forEach( e => e.addEventListener("click", (e) => {
        if (e.target) {
            let projectIndex = e.target.getAttribute("data-projectNumber");

            for (let i = tasks.length - 1; i >= 0; i--) {
                let testedValue = projects[projectIndex];
                testedValue = projects[projectIndex].toUpperCase();
                if (tasks[i].projectName.toUpperCase() === testedValue) {
                    tasks.splice(i, 1);
                }
            }

            let removedProject = document.querySelector(`.projectContainer[data-projectNumber="${projectIndex}"]`);
            let apBox = document.querySelector(".apBox");
            apBox.removeChild(removedProject);
            projects.splice(projectIndex, 1);

            if ( projects.length == 0 ) {
                let removedProjectHeader = display.firstChild;
                display.removeChild(removedProjectHeader);
                showProjectHeader(display, projects, projectIndex);
                let projectTaskVisual = displayProjectTasks(projects, projectIndex, tasks)
                let test = document.querySelector(".spHeader");
                test.appendChild(projectTaskVisual);

            } else if ( projects.length > 0 && projectIndex == 0 ) {
                let removedProjectHeader = display.firstChild;
                display.removeChild(removedProjectHeader);
                showProjectHeader(display, projects, projectIndex);
                let projectTaskVisual = displayProjectTasks(projects, projectIndex, tasks)
                let test = document.querySelector(".spHeader");
                test.appendChild(projectTaskVisual);

                let spName = document.querySelector(".spName");
                spName.innerText = "Please add or select a project in the sidebar.";
                let remainingProjects = document.querySelectorAll(".projectContainer");
                let remainingProjectDeletes = document.querySelectorAll(".deleteProject");
                let remainingProjectHeaders = document.querySelectorAll(".projectHeader");
                let remainingProjectTitles = document.querySelectorAll(".projectTitle");

    
                for (let i = 0; i < projects.length; i++ ) {
                    remainingProjects[i].setAttribute("data-projectNumber", i);
                    remainingProjectDeletes[i].setAttribute("data-projectNumber", i);
                    remainingProjectHeaders[i].setAttribute("data-projectNumber", i);
                    remainingProjectTitles[i].setAttribute("data-projectNumber", i);

                }
            } else {
                let removedProjectHeader = display.firstChild;
                display.removeChild(removedProjectHeader);
                showProjectHeader(display, projects, `${projectIndex-1}`);
                let projectTaskVisual = displayProjectTasks(projects, projectIndex, tasks)
                let test = document.querySelector(".spHeader");
                test.appendChild(projectTaskVisual);

                let remainingProjects = document.querySelectorAll(".projectContainer");
                let remainingProjectDeletes = document.querySelectorAll(".deleteProject");
                let remainingProjectHeaders = document.querySelectorAll(".projectHeader");
                let remainingProjectTitles = document.querySelectorAll(".projectTitle");
    
                for (let i = 0; i < projects.length; i++ ) {
                    remainingProjects[i].setAttribute("data-projectNumber", i);
                    remainingProjectDeletes[i].setAttribute("data-projectNumber", i);
                    remainingProjectHeaders[i].setAttribute("data-projectNumber", i);
                    remainingProjectTitles[i].setAttribute("data-projectNumber", i);
                }
            }
        }
    }));


});