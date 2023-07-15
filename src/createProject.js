import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import isToday from "date-fns/isToday";
import isWithinInterval from "date-fns/isWithinInterval";
import getDate from "date-fns/getDate";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import loadPage from "./loadPage";
import loadTasks from "./loadTasks";

const createProject = (projectName) => {
    let name = projectName;
    let projectTasks = [];
    let newProjects = [];

    const createTask = (name, priority, date, notes, projectID) => {

        let taskName = name;
        let priorityLevel = priority;
        let dueDate = date;
        let taskNotes = notes;
        let assignedProject = projectID;
    
        return { taskName, priorityLevel, dueDate, taskNotes, assignedProject }
    };

    const addProjectTask = (newTask) => {
        projectTasks.push(newTask);
    };

    const deleteTask = (tName, tPriority, tDate, tProject ) => {
        if ( tProject !== undefined) {
            let removeTaskFromArray = (array, nOT, pOT, dOT, prOT) => {
                return array.filter(function(value) {
                    return !(value.taskName === nOT && value.priorityLevel === pOT && value.dueDate === dOT && value.assignedProject === prOT) 
                });
            };
            let newArray = removeTaskFromArray(projectTasks, tName, tPriority, tDate, tProject);
            projectTasks = newArray;
                
        } else {
            let removeTaskFromArray = (array, nOT, pOT, dOT) => {
                return array.filter(function(value) {
                    return !(value.taskName === nOT && value.priorityLevel === pOT && value.dueDate === dOT) 
                });
            };
            let newArray = removeTaskFromArray(projectTasks, tName, tPriority, tDate);
            projectTasks = newArray;
        };
    };

    const editTask = (ornamevalue, orprivalue, ordatevalue, editNameValue, editPriorityValue, editDateValue, editNotesValue, assignedProject) => {
        if (assignedProject === undefined) {
            projectTasks.forEach((element) => {
                if (element.taskName === ornamevalue && element.priorityLevel === orprivalue && element.dueDate === ordatevalue) {
                    element.taskName = editNameValue;
                    element.priorityLevel = editPriorityValue;
                    element.dueDate = editDateValue;
                    element.taskNotes = editNotesValue;
                }
            });
        } else {
            projectTasks.forEach((element) => {
                if (element.taskName === ornamevalue && element.priorityLevel === orprivalue && element.dueDate === ordatevalue && element.assignedProject === assignedProject) {
                    element.taskName = editNameValue;
                    element.priorityLevel = editPriorityValue;
                    element.dueDate = editDateValue;
                    element.taskNotes = editNotesValue;
                }
            });
        };
    };

    const createTaskContainers = (element, taskCounter, taskList) => {
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("taskContainer");
        taskContainer.setAttribute("data-container", `${taskCounter}`);
        let upperContainer = document.createElement("div");
        upperContainer.classList.add("uc");
        upperContainer.setAttribute("data-container", `${taskCounter}`);
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("data-container", `${taskCounter}`);
        let showName = document.createElement("p");
        showName.innerText = `${element.taskName}`;
        showName.setAttribute("data-container", `${taskCounter}`);
        showName.classList.add("taskName");
        let showPriority = document.createElement("p");
        showPriority.innerText = `${element.priorityLevel}`;
        showPriority.setAttribute("data-container", `${taskCounter}`);
        showPriority.classList.add("taskPriority");
        if (showPriority.innerText === "Low") {
            showPriority.style.color = "green";
        } else if (showPriority.innerText === "Medium") {
            showPriority.style.color = "orange";
        } else if (showPriority.innerText === "High") {
            showPriority.style.color = "red";
        }
        let showDate = document.createElement("p");
        showDate.innerText = `${element.dueDate}`;
        showDate.setAttribute("data-container", `${taskCounter}`);
        showDate.classList.add("taskDate");
        let expansionButton = document.createElement("button");
        expansionButton.innerText = "ˇ";
        expansionButton.setAttribute("data-container", `${taskCounter}`);
        let taskDeleteButton = document.createElement("button");
        taskDeleteButton.innerText = "X";
        taskDeleteButton.setAttribute("data-container", `${taskCounter}`);
        let taskEditButton = document.createElement("button");
        taskEditButton.innerText = "Edit";
        taskEditButton.setAttribute("data-container", `${taskCounter}`);
        let lowerContainer = document.createElement("div");
        lowerContainer.classList.add("lc");
        lowerContainer.setAttribute("data-container", `${taskCounter}`);
        lowerContainer.classList.add("hide");
        let showNotes1 = document.createElement("p");
        showNotes1.innerText = `Notes: `;
        let showNotes2 = document.createElement("p");
        showNotes2.innerText = `${element.taskNotes}`;
        showNotes2.classList.add("taskNotes");
        showNotes2.setAttribute("data-container", `${taskCounter}`);

        let editFormDiv = document.createElement("div");
        editFormDiv.classList.add("editFormDiv");
        editFormDiv.setAttribute("data-edit", `${taskCounter}`);
        let editForm = document.createElement("form");
        editForm.setAttribute("id", "editForm");
        editForm.setAttribute("data-edit", `${taskCounter}`);
        let editNameDiv = document.createElement("div");
        editNameDiv.classList.add("editNameDiv");
        editNameDiv.setAttribute("data-edit", `${taskCounter}`);
        let editNameLabel = document.createElement("label");
        editNameLabel.setAttribute("for", "editNameInput");
        editNameLabel.innerText = "Name: ";
        let editNameInput = document.createElement("input");
        editNameInput.setAttribute("data-edit", `${taskCounter}`);
        editNameInput.setAttribute("id", "editNameInput");
        editNameInput.setAttribute("name", "editNameInput");
        editNameInput.required = true;
        let editPriorityDiv = document.createElement("div");
        editPriorityDiv.classList.add("editPriorityDiv");
        editPriorityDiv.setAttribute("data-edit", `${taskCounter}`);
        let editPriorityLabel = document.createElement("label");
        editPriorityLabel.setAttribute("for", "editPrioritySelect");
        editPriorityLabel.innerText = "Priority: ";
        let editPrioritySelect = document.createElement("select");
        editPrioritySelect.setAttribute("data-edit", `${taskCounter}`);
        editPrioritySelect.setAttribute("id", "editPrioritySelect");
        editPrioritySelect.setAttribute("name", "editPrioritySelect");
        let editPriorityOption1 = document.createElement("option");
        editPriorityOption1.innerText = "Low";
        let editPriorityOption2 = document.createElement("option");
        editPriorityOption2.innerText = "Medium";
        let editPriorityOption3 = document.createElement("option");
        editPriorityOption3.innerText = "High";
        let editDateDiv = document.createElement("div");
        editDateDiv.classList.add("editDateDiv");
        editDateDiv.setAttribute("data-edit", `${taskCounter}`);
        let editDateLabel = document.createElement("label");
        editDateLabel.setAttribute("for", "editDateInput");
        editDateLabel.innerText = "Due Date: ";
        let editDateInput = document.createElement("input");
        editDateInput.setAttribute("data-edit", `${taskCounter}`);
        editDateInput.setAttribute("type", "date");
        editDateInput.setAttribute("id", "editDateInput");
        editDateInput.setAttribute("name", "editDateInput");
        editDateInput.required = true;
        let editNotesDiv = document.createElement("div");
        editNotesDiv.classList.add("editNotesDiv");
        editNotesDiv.setAttribute("data-edit", `${taskCounter}`);
        let editNotesLabel = document.createElement("label");
        editNotesLabel.setAttribute("for", "editNotesTA");
        editNotesLabel.innerText = "Notes: ";
        let editNotesTA = document.createElement("textarea");
        editNotesTA.setAttribute("id", "editNotesTA");
        editNotesTA.setAttribute("name", "editNotesTA");
        editNotesTA.setAttribute("data-edit", `${taskCounter}`);
        let editSubmissionButton = document.createElement("button");
        editSubmissionButton.classList.add("esButton");
        editSubmissionButton.setAttribute("data-edit", `${taskCounter}`);
        editSubmissionButton.innerText = "Submit Edits";

        taskList.appendChild(taskContainer);
        taskContainer.appendChild(upperContainer);
        upperContainer.appendChild(checkbox);
        upperContainer.appendChild(showName);
        upperContainer.appendChild(showPriority);
        upperContainer.appendChild(showDate);
        upperContainer.appendChild(expansionButton);
        upperContainer.appendChild(taskDeleteButton);
        upperContainer.appendChild(taskEditButton);
        taskContainer.appendChild(lowerContainer);
        lowerContainer.appendChild(showNotes1);
        lowerContainer.appendChild(showNotes2);
        taskContainer.appendChild(editFormDiv);
        editFormDiv.appendChild(editForm);
        editForm.appendChild(editNameDiv);
        editNameDiv.appendChild(editNameLabel);
        editNameDiv.appendChild(editNameInput);
        editForm.appendChild(editPriorityDiv);
        editPriorityDiv.appendChild(editPriorityLabel);
        editPriorityDiv.appendChild(editPrioritySelect);
        editPrioritySelect.appendChild(editPriorityOption1);
        editPrioritySelect.appendChild(editPriorityOption2);
        editPrioritySelect.appendChild(editPriorityOption3);
        editForm.appendChild(editDateDiv);
        editDateDiv.appendChild(editDateLabel);
        editDateDiv.appendChild(editDateInput);
        editForm.appendChild(editNotesDiv);
        editNotesDiv.appendChild(editNotesLabel);
        editNotesDiv.appendChild(editNotesTA);
        editForm.appendChild(editSubmissionButton);

        checkbox.addEventListener("change", (e) => {
            if (checkbox.checked === true ) {
                taskContainer.classList.add("checked");
            } else {
                taskContainer.classList.remove("checked");
            }
        })

        expansionButton.addEventListener("click", (e) => {
            if (lowerContainer.classList.contains("hide")) {
                lowerContainer.classList.remove("hide");
            } else {
                lowerContainer.classList.add("hide");
            }
        });

        taskDeleteButton.addEventListener("click", (e) => {
            let dataContainerIndex = e.target.getAttribute("data-container");
            let selectedName = document.querySelector(`.taskName[data-container="${dataContainerIndex}"]`).innerText;
            let selectedPriority = document.querySelector(`.taskPriority[data-container="${dataContainerIndex}"]`).innerText;
            let selectedDate = document.querySelector(`.taskDate[data-container="${dataContainerIndex}"]`).innerText;
            let selectedTabName = document.querySelector(".tabHeader>h2").innerText;
            if ( document.querySelector(".tabHeader>h2").innerText === "Home") {
                deleteTask(selectedName, selectedPriority, selectedDate);
                displayTasks();
            } else if (document.querySelector(".tabHeader>h2").innerText === "Today") {
                deleteTask(selectedName, selectedPriority, selectedDate);
                displayTodaysTasks();
            } else if (document.querySelector(".tabHeader>h2").innerText === "Week") {
                deleteTask(selectedName, selectedPriority, selectedDate);
                displayThisWeeksTasks();
            } else {
                deleteTask(selectedName, selectedPriority, selectedDate, selectedTabName);
                displaySpecificTasks(selectedTabName);
            }
        });

        taskEditButton.addEventListener("click", (e) => {
            editFormDiv.style.display = "block";
            taskEditButton.disabled = true;
        });

        editSubmissionButton.addEventListener("click", (e) => {
            if (editNameInput.validity.valid && editDateInput.validity.valid) {
                let editTaskIndex = e.target.getAttribute("data-edit");
                let editnav = document.querySelector(`#editNameInput[data-edit="${editTaskIndex}"]`).value;
                let editpri = document.querySelector(`#editPrioritySelect[data-edit="${editTaskIndex}"]`).value;
                let editdv = document.querySelector(`#editDateInput[data-edit="${editTaskIndex}"]`).value;
                let editnov = document.querySelector(`#editNotesTA[data-edit="${editTaskIndex}"]`).value;
                let pageHeader = document.querySelector(`.tabHeader>h2`).innerText
    
                if (pageHeader === "Home") {
                    editTask(showName.innerText, showPriority.innerText, showDate.innerText, editnav, editpri, editdv, editnov);
                    editForm.reset();
                    editFormDiv.style.display = "none";
                    displayTasks();
        
                } else if (pageHeader === "Today") {
                    editTask(showName.innerText, showPriority.innerText, showDate.innerText, editnav, editpri, editdv, editnov);
                    editForm.reset();
                    editFormDiv.style.display = "none";
                    displayTodaysTasks();
        
                } else if (pageHeader === "Week") {
                    editTask(showName.innerText, showPriority.innerText, showDate.innerText, editnav, editpri, editdv, editnov);
                    editForm.reset();
                    editFormDiv.style.display = "none";
                    displayThisWeeksTasks();
        
                } else {
                    editTask(showName.innerText, showPriority.innerText, showDate.innerText, editnav, editpri, editdv, editnov, pageHeader);
                    editForm.reset();
                    editFormDiv.style.display = "none";
                    displaySpecificTasks(pageHeader);
                }
            }
        });
    }

    const displayTasks = () => {
        const taskList = document.querySelector(".taskList");
        taskList.innerHTML = "";
        let taskCounter = 0;
        projectTasks.forEach((element) => {
            createTaskContainers(element, taskCounter, taskList);
            taskCounter += 1;
        });
    }

    const displayTodaysTasks = () => {
        const taskList = document.querySelector(".taskList");
        taskList.innerHTML = "";
        let taskCounter = 0;
        projectTasks.forEach((element) => {

            let dateArray = element.dueDate.split("-");
            let elementYear = Number(dateArray[0]);
            let elementMonth = Number(dateArray[1])-1;
            let elementDay = Number(dateArray[2]);
            let result = isToday(new Date(elementYear, elementMonth, elementDay));

            if (result) {
                createTaskContainers(element, taskCounter, taskList);
                taskCounter += 1;
            };
        });
    };

    const displayThisWeeksTasks = () => {
        const taskList = document.querySelector(".taskList");
        taskList.innerHTML = "";
        let taskCounter = 0;
        let currentDate = new Date();
        let currentDay = getDate(currentDate);
        let currentMonth = getMonth(currentDate);
        let currentYear = getYear(currentDate);
        currentDate = new Date(currentYear, currentMonth, currentDay);
        let todayPlus7 = addDays(currentDate, 7);

        projectTasks.forEach((element) => {
            
            let dateArray = element.dueDate.split("-");
            let elementYear = Number(dateArray[0]);
            let elementMonth = Number(dateArray[1])-1;
            let elementDay = Number(dateArray[2]);
            let elementDate = new Date(elementYear, elementMonth, elementDay);
            let result = isWithinInterval(elementDate, {
                start: currentDate,
                end: todayPlus7
            });
            
            if (result) {
                createTaskContainers(element, taskCounter, taskList);
                taskCounter += 1;
            }
        });
    }

    const displaySpecificTasks = (tabName) => {
        const taskList = document.querySelector(".taskList");
        taskList.innerHTML = "";
        let taskCounter = 0;
        projectTasks.forEach((element) => {
            
            if ( element.assignedProject === tabName ) {
                createTaskContainers(element, taskCounter, taskList);
                taskCounter += 1;    
            }
        });

    }

    const addNewProject = (name) => {
        newProjects.push(name);
    }

    const deleteProject = (projectName) => {
        
        const removeProjectFromArray = (array, nameOfProject) => {
            return array.filter(function(value) {
                return value !== nameOfProject;
            });
        }

        const removeTaskFromArray = (array, nameOfProject) => {
            return array.filter(function(value) {
                return value.assignedProject !== nameOfProject;
            });
        };

        let newTaskArray = removeTaskFromArray(projectTasks, projectName);
        projectTasks = newTaskArray;

        let newProjectArray = removeProjectFromArray(newProjects, projectName);
        newProjects = newProjectArray;        
    }

    const showProjectTabs = (project) => {
        const display = document.querySelector("#display");
        const projectsList = document.querySelector("#projectsList");
        projectsList.innerHTML = "";
        // code that pulls the project names from storage
        let projectCounter = 0;

        newProjects.forEach((element) => {
            let newProjectTab = document.createElement("div");
            newProjectTab.classList.add("projectTab");
            newProjectTab.setAttribute("data-projectTab", `${projectCounter}`);
            let tabTitle = document.createElement("div");
            tabTitle.classList.add("tabTitle");
            tabTitle.innerText = element;
            let deleteProjectButton = document.createElement("button");
            deleteProjectButton.classList.add("dpTabButton");
            deleteProjectButton.setAttribute("data-projectTab", `${projectCounter}`);
            deleteProjectButton.innerText = "x";
            newProjectTab.appendChild(tabTitle);
            newProjectTab.appendChild(deleteProjectButton);
            projectsList.appendChild(newProjectTab);
            projectCounter += 1;

            tabTitle.addEventListener("click", (e) => {
                loadTasks(project, tabTitle.innerText, display);
                displaySpecificTasks(tabTitle.innerText);
            });

            deleteProjectButton.addEventListener("click", (e) => {                
                deleteProject(tabTitle.innerText);
                showProjectTabs();
                loadTasks(project, "Home", display);
                displayTasks();
            });
        });
    };

    return { name, projectTasks, createTask, addProjectTask, displayTasks, displayTodaysTasks, displayThisWeeksTasks, addNewProject, showProjectTabs, displaySpecificTasks };

};

export default createProject;