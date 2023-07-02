const displayTodaysTasks = (tasksArray) => {

    let taskList = document.createElement("div");
    taskList.classList.add(".taskList");

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if ( month < 10 ) {
        month = `0${date.getMonth()+1}`;
    }
    let day = date.getDate();
    if ( day < 10 ) {
        day = `0${date.getDate()}`;
    }
    let dateString = `${year}-${month}-${day}`;

    for ( let i = 0; i < tasksArray.length; i++ ) {
        if ( tasksArray[i].taskDueDate == dateString) {
            let taskContainer = document.createElement("div");
            taskContainer.classList.add("taskContainer");
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
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
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

export default displayTodaysTasks;