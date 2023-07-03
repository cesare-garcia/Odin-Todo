const displayThisWeeksTasks = (tasksArray, intervalFunction, addDayFunction) => {

    let taskList = document.createElement("div");
    taskList.classList.add("weekTaskList");

    let currentDate = new Date();
    let datePlus7 = addDayFunction(currentDate, 7);

    for ( let i = 0; i < tasksArray.length; i++ ) {

        let recordedDate = tasksArray[i].taskDueDate;
        console.log(recordedDate);

        let dateArray = recordedDate.split("-");
        let yearDigits = parseInt(dateArray[0]);
        let monthDigits = parseInt(dateArray[1]);
        monthDigits = monthDigits - 1;
        let dayDigits = parseInt(dateArray[2]);

        let convertedDate = intervalFunction(new Date(yearDigits, monthDigits, dayDigits), {
            start: currentDate,
            end: datePlus7
        });

        if ( convertedDate ) {
            let taskContainer = document.createElement("div");
            taskContainer.classList.add("taskContainer");
            taskContainer.setAttribute("data-taskNumber", `${i}`);
            let tcTop = document.createElement("div");
            tcTop.classList.add("tcTop");
            let tcProjectDiv = document.createElement("div");
            tcProjectDiv.classList.add("tcProjectDiv");
            tcProjectDiv.innerText = `${tasksArray[i].projectName}`;
            let tcStatusDiv = document.createElement("div");
            tcStatusDiv.classList.add("tcStatusDiv");
            let tcCheckBox = document.createElement("input");
            tcCheckBox.classList.add("taskCheck");
            tcCheckBox.setAttribute("type", "checkbox");
            if ( `${tasksArray[i].taskStatus}` == "COMPLETE" ) {
                tcCheckBox.checked = true;
                taskContainer.classList.add("completedTask");
            } else {
                tcCheckBox.checked = false;
                if ( taskContainer.classList.contains("completedTask") ) {
                    taskContainer.classList.remove("completedTask");
                }
            }
            let tcNameDiv = document.createElement("div");
            tcNameDiv.classList.add("tcNameDiv");
            tcNameDiv.innerText = `${tasksArray[i].taskName}`;
            let tcPriorityDiv = document.createElement("div");
            tcPriorityDiv.classList.add("tcPriorityDiv");
            tcPriorityDiv.innerText = `${tasksArray[i].taskPriority}`;
            let tcDueDiv = document.createElement("div");
            tcDueDiv.classList.add("tcDueDiv");
            tcDueDiv.innerText = `${tasksArray[i].taskDueDate}`;
            let tcButtonsDiv = document.createElement("div");
            tcButtonsDiv.classList.add("tcButtonsDiv");
            let editButton = document.createElement("button");
            editButton.classList.add("editButton");
            editButton.setAttribute("data-taskNumber", `${i}`);
            editButton.innerText = "Edit";    
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
            deleteButton.setAttribute("data-taskNumber", `${i}`);
            deleteButton.innerText = "Delete";    
            let tcBottom = document.createElement("div");
            tcBottom.classList.add("tcBottom");
            let tcDescDiv = document.createElement("div");
            tcDescDiv.classList.add("tcDescDiv");
            tcDescDiv.innerText = `${tasksArray[i].taskDescription}`;
            let tcNotesDiv = document.createElement("div");
            tcNotesDiv.classList.add("tcNotesDiv");
            tcNotesDiv.innerText = `${tasksArray[i].taskNotes}`;

            taskList.appendChild(taskContainer);
            taskContainer.appendChild(tcTop);
            tcTop.appendChild(tcProjectDiv);
            tcTop.appendChild(tcStatusDiv);
            tcStatusDiv.appendChild(tcCheckBox);
            tcTop.appendChild(tcNameDiv);
            tcTop.appendChild(tcPriorityDiv);
            tcTop.appendChild(tcDueDiv);
            tcTop.appendChild(tcButtonsDiv);
            tcButtonsDiv.appendChild(editButton);
            tcButtonsDiv.appendChild(deleteButton);
            taskContainer.appendChild(tcBottom);
            tcBottom.appendChild(tcDescDiv);
            tcBottom.appendChild(tcNotesDiv);
                
        } 
    }

    return taskList;

};

export default displayThisWeeksTasks;