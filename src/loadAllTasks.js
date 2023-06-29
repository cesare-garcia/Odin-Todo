const loadAllTasks = (taskDisplayBox, tasksArray) => {

    const allTasksContainer = document.createElement("div");
    allTasksContainer.classList.add("allTasksContainer");

    const allTasksTop = document.createElement("div");
    allTasksTop.classList.add("allTasksTop");

    const allTasksHeading = document.createElement("h2");
    allTasksHeading.innerText = "All Tasks";

    const addNewTaskButton = document.createElement("button");
    addNewTaskButton.innerText = "Add Task";

    const formContainer = document.createElement("div");
    formContainer.classList.add("formContainer");
    formContainer.hidden = true;
    const newTaskForm = document.createElement("form");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "projectInput");
    projectLabel.innerText = "Project (optional): ";
    const projectInput = document.createElement("input");
    projectInput.setAttribute("id", "projectInput");
    projectInput.setAttribute("name", "projectInput");
    projectDiv.appendChild(projectLabel);
    projectDiv.appendChild(projectInput);

    const statusDiv = document.createElement("div");
    statusDiv.classList.add("statusDiv");
    const statusLabel = document.createElement("label");
    statusLabel.setAttribute("for", "statusInput");
    statusLabel.innerText = "Task Status: ";
    const statusInput = document.createElement("input");
    statusInput.setAttribute("type", "checkbox");
    statusInput.setAttribute("id", "statusInput");
    statusInput.setAttribute("name", "statusInput");
    statusDiv.appendChild(statusLabel);
    statusDiv.appendChild(statusInput);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("titleDiv");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "titleInput");
    titleLabel.innerText = "Task Title: ";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("name", "titleInput");
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDateDiv");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDateInput");
    dueDateLabel.innerText = "Due Date: ";
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "dueDateInput");
    dueDateInput.setAttribute("id", "dueDateInput");
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateInput);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priorityDiv");
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "prioritySelect");
    priorityLabel.innerText = "Priority: ";
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "prioritySelect");
    prioritySelect.setAttribute("name", "prioritySelect");
    const priorityOption1 = document.createElement("option");
    priorityOption1.setAttribute("value", "low");
    priorityOption1.innerText = "Low";
    const priorityOption2 = document.createElement("option");
    priorityOption2.setAttribute("value", "medium");
    priorityOption2.innerText = "Medium";
    const priorityOption3 = document.createElement("option");
    priorityOption3.setAttribute("value", "high");
    priorityOption3.innerText = "High";
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);
    prioritySelect.appendChild(priorityOption1);
    prioritySelect.appendChild(priorityOption2);
    prioritySelect.appendChild(priorityOption3);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("descriptionDiv");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "descriptionInput");
    descriptionLabel.innerText = "Description: ";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("rows", "5");
    descriptionInput.setAttribute("id", "descriptionInput");
    descriptionInput.setAttribute("name", "descriptionInput");
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);

    const notesDiv = document.createElement("div");
    notesDiv.classList.add("notesDiv");
    const notesLabel = document.createElement("label");
    notesLabel.setAttribute("for", "notesInput");
    notesLabel.innerText = "Notes: ";
    const notesInput = document.createElement("textarea");
    notesInput.setAttribute("id", "notesInput");
    notesInput.setAttribute("name", "Input");
    notesInput.setAttribute("row", "5");
    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notesInput);

    const allTasksBottom = document.createElement("div");
    allTasksBottom.classList.add("allTasksBottom");

    taskDisplayBox.appendChild(allTasksContainer);
    allTasksContainer.appendChild(allTasksTop);
    allTasksTop.appendChild(allTasksHeading);
    allTasksTop.appendChild(addNewTaskButton);
    allTasksTop.appendChild(formContainer);
    formContainer.appendChild(newTaskForm);
    newTaskForm.appendChild(projectDiv);
    newTaskForm.appendChild(statusDiv);
    newTaskForm.appendChild(titleDiv);
    newTaskForm.appendChild(priorityDiv);
    newTaskForm.appendChild(dueDateDiv);
    newTaskForm.appendChild(descriptionDiv);
    newTaskForm.appendChild(notesDiv);
    //submit button

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