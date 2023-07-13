import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import isToday from "date-fns/isToday";
import isWithinInterval from "date-fns/isWithinInterval";
import getDate from "date-fns/getDate";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

const createProject = (projectName) => {
    let name = projectName;
    let projectTasks = [];

    const createTask = (name, priority, date, notes) => {

        let status = "INCOMPLETE";
        let taskName = name;
        let priorityLevel = priority;
        let dueDate = date;
        let taskNotes = notes;
    
        return { status, taskName, priorityLevel, dueDate, taskNotes }
    };

    const addProjectTask = (newTask) => {
        projectTasks.push(newTask);
    }

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
        let showPriority = document.createElement("p");
        showPriority.innerText = `${element.priorityLevel}`;
        showPriority.setAttribute("data-container", `${taskCounter}`);
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
            console.log("works");
            // delete Project Task Function
            // display Project Tasks Function

        });

        taskEditButton.addEventListener("click", (e) => {
            console.log("works");
            // edit project task function
            // display project Tasks function

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

    const showProjectTabs = () => {
        const projectsList = document.querySelector("#projectsList");
        projectsList.innerHTML = "";
        // code that pulls the project names from storage

        // .forEach((element) => {
        //     let newProjectTab = document.createElement("div");
        //     let deleteProjectButton = document.createElement("button");
        //     deleteProjectButton.innerText = "x";
        //     newProjectTab.appendChild(deleteProjectButton);
        //     projectsList.appendChild(newProjectTab);
        
                
        // });
    };


    // come back to make sure using const won't mess up the project functions
    // function that builds a new div to display in projects sidebar container

    return { name, projectTasks, createTask, addProjectTask, displayTasks, displayTodaysTasks, displayThisWeeksTasks };

};

export default createProject;