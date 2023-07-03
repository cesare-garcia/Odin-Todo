const displayTasks = (tasksArray) => {

    let taskList = document.createElement("div");
    taskList.classList.add("taskList");

    for (let i = 0; i < tasksArray.length; i++ ) {
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("taskContainer");
        taskContainer.setAttribute("data-taskNumber", `${i}`);
        let tcTop = document.createElement("div");
        tcTop.classList.add("tcTop");
        let tcProjectDiv = document.createElement("div");
        tcProjectDiv.classList.add("tcProjectDiv");
        tcProjectDiv.innerText = `${tasksArray[i].projectName}`;
        tcProjectDiv.setAttribute("data-taskNumber", `${i}`);
        let tcStatusDiv = document.createElement("div");
        tcStatusDiv.classList.add("tcStatusDiv");
        let tcCheckBox = document.createElement("input");
        tcCheckBox.classList.add("taskCheck");
        tcCheckBox.setAttribute("type", "checkbox");
        tcCheckBox.setAttribute("data-taskNumber", `${i}`);
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
        tcNameDiv.setAttribute("data-taskNumber", `${i}`);
        let tcPriorityDiv = document.createElement("div");
        tcPriorityDiv.classList.add("tcPriorityDiv");
        tcPriorityDiv.innerText = `${tasksArray[i].taskPriority}`;
        tcPriorityDiv.setAttribute("data-taskNumber", `${i}`);
        let tcDueDiv = document.createElement("div");
        tcDueDiv.classList.add("tcDueDiv");
        tcDueDiv.innerText = `${tasksArray[i].taskDueDate}`;
        tcDueDiv.setAttribute("data-taskNumber", `${i}`);
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
        tcDescDiv.setAttribute("data-taskNumber", `${i}`);
        let tcNotesDiv = document.createElement("div");
        tcNotesDiv.classList.add("tcNotesDiv");
        tcNotesDiv.innerText = `${tasksArray[i].taskNotes}`;
        tcNotesDiv.setAttribute("data-taskNumber", `${i}`);

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
    return taskList;
};

export default displayTasks;