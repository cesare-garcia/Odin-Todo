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
        projectTasks.forEach((element) => {
            if ( tProject !== undefined) {
                if (element.taskName === tName && element.priorityLevel === tPriority && element.dueDate === tDate) {
                    projectTasks.splice(element, 1);
                }
            } else {
                if (element.taskName === tName && element.priorityLevel === tPriority && element.dueDate === tDate && element.assignedProject === tProject) {
                    projectTasks.splice(element, 1);
                }
            }
        })
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
        let showNotes = document.createElement("p");
        showNotes.innerText = `Notes: ${element.taskNotes}`;
        showNotes.setAttribute("data-container", `${taskCounter}`);
        showNotes.classList.add("taskNotes");

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
        lowerContainer.appendChild(showNotes);

        expansionButton.addEventListener("click", (e) => {
            if (lowerContainer.style.display == "none") {
                lowerContainer.style.display = "flex";
            } else {
                lowerContainer.style.display = "none";
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
            console.log("edit");
            // edit project task function
            // display project Tasks function, this must depend on whether the header is home, today, week, or not
            // will likely need to create a new form element that is attached to each task.

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


    // come back to make sure using const won't mess up the project functions
    // function that builds a new div to display in projects sidebar container

    return { name, projectTasks, createTask, addProjectTask, displayTasks, displayTodaysTasks, displayThisWeeksTasks, addNewProject, showProjectTabs, displaySpecificTasks };

};

export default createProject;