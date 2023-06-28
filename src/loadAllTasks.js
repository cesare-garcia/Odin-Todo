const loadAllTasks = (taskDisplayBox, tasksArray) => {

    const allTasksContainer = document.createElement("div");

    const allTasksTop = document.createElement("div");

    const allTasksHeading = document.createElement("h2");
    allTasksHeading.innerText = "All Tasks";

    const addNewTaskButton = document.createElement("button");
    addNewTaskButton.innerText = "Add Task";

    const allTasksBottom = document.createElement("div");

    taskDisplayBox.appendChild(allTasksContainer);
    allTasksContainer.appendChild(allTasksTop);
    allTasksTop.appendChild(allTasksHeading);
    allTasksTop.appendChild(addNewTaskButton);
    allTasksContainer.appendChild(allTasksBottom);

    tasksArray.forEach(element => {

        let taskContainer = document.createElement("div");
        taskContainer.classList.add("taskContainer");

        let taskTop = document.createElement("div");
        taskTop.classList.add("taskTop");

        let taskStatus = document.createElement("input");
        taskStatus.setAttribute("type", "checkbox");
        // if element.status == x, then status is checked

        let taskTitle = document.createElement("div");
        taskTitle.classList.add("t_title");
        taskTitle.innerText = `${element.title}`;

        let taskPriority = document.createElement("div");
        taskPriority.classList.add("t_priority");
        taskPriority.innerText = `${element.priority}`;

        let taskDueDate = document.createElement("div");
        taskDueDate.classList.add("t_date");
        taskDueDate.innerText = `${element.dueDate}`;

        let taskEdit = document.createElement("button");
        taskEdit.classList.add("t_edit");
        taskEdit.innerText = "Edit";

        let taskDelete = document.createElement("button");
        taskDelete.classList.add("t_delete");
        taskDelete.innerText = "Delete";

        let taskBottom = document.createElement("div");
        taskBottom.classList.add("taskBottom");

        let taskDescription = document.createElement("div");
        taskDescription.classList.add("t_desc");
        taskDescription.innerText = `${element.description}`;

        let taskNotes = document.createElement("div");
        taskNotes.classList.add("t_notes");
        taskNotes.innerText = `${element.notes}`;

        allTasksBottom.appendChild(taskContainer);

        taskContainer.appendChild(taskTop);
        taskTop.appendChild(taskStatus);
        taskTop.appendChild(taskTitle);
        taskTop.appendChild(taskPriority);
        taskTop.appendChild(taskDueDate);
        taskTop.appendChild(taskEdit);
        taskTop.appendChild(taskDelete);
        taskContainer.appendChild(taskBottom);
        taskBottom.appendChild(taskDescription);
        taskBottom.appendChild(taskNotes);
    });
};

export default loadAllTasks;