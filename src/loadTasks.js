const loadTasks = (project, tabName, display, storage) => {

    display.innerHTML = "";

    const header = document.createElement("div");
    header.classList.add("tabHeader");
    const title = document.createElement("h2");
    title.innerText = tabName;
    display.appendChild(header);
    header.appendChild(title);

    const createTaskForm = () => {
        const addTaskButton = document.createElement("button");
        addTaskButton.classList.add("addTask");
        addTaskButton.innerText = "Add Task";
        const newTaskForm = document.createElement("form");
        newTaskForm.setAttribute("id", "newTaskForm");
        const formNameDiv = document.createElement("div");
        formNameDiv.classList.add("formDiv");
        formNameDiv.classList.add("name");
        const nameLabel = document.createElement("label");
        nameLabel.setAttribute("for", "nameInput");
        nameLabel.innerText = "Task Name: ";
        const nameInput = document.createElement("input");
        nameInput.setAttribute("id", "nameInput");
        nameInput.setAttribute("name", "nameInput");
        nameInput.required = true;
        const formPriorityDiv = document.createElement("div");
        formPriorityDiv.classList.add("formDiv");
        formPriorityDiv.classList.add("priority");
        const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "prioritySelect");
        priorityLabel.innerText = "Priority: ";
        const prioritySelect = document.createElement("select");
        prioritySelect.setAttribute("id", "prioritySelect");
        prioritySelect.setAttribute("name", "prioritySelect");
        const priorityOption1 = document.createElement("option");
        priorityOption1.innerText = "Low";
        const priorityOption2 = document.createElement("option");
        priorityOption2.innerText = "Medium";
        const priorityOption3 = document.createElement("option");
        priorityOption3.innerText = "High"
        const formDateDiv = document.createElement("div");
        formDateDiv.classList.add("formDiv");
        formDateDiv.classList.add("date");
        const dateLabel = document.createElement("label");
        dateLabel.setAttribute("for", "dateInput")
        dateLabel.innerText = "Due Date: ";
        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("id", "dateInput");
        dateInput.setAttribute("name", "dateInput");
        dateInput.required = true;
        const formNotesDiv = document.createElement("div");
        formNotesDiv.classList.add("formDiv");
        formNotesDiv.classList.add("notes");
        const notesLabel = document.createElement("label");
        notesLabel.innerText = "Notes: ";
        notesLabel.setAttribute("for", "notesTA");
        const notesTA = document.createElement("textarea");
        notesTA.setAttribute("id", "notesTA");
        notesTA.setAttribute("name", "notesTA");
        const submitTaskButton = document.createElement("button");
        submitTaskButton.classList.add("stButton");
        submitTaskButton.innerText = "Submit Task";
        const taskList = document.createElement("div");
        taskList.classList.add("taskList");
    
        header.appendChild(addTaskButton);
        display.appendChild(newTaskForm);
        newTaskForm.appendChild(formNameDiv);
        formNameDiv.appendChild(nameLabel);
        formNameDiv.appendChild(nameInput);
        newTaskForm.appendChild(formPriorityDiv);
        formPriorityDiv.appendChild(priorityLabel);
        formPriorityDiv.appendChild(prioritySelect);
        prioritySelect.appendChild(priorityOption1);
        prioritySelect.appendChild(priorityOption2);
        prioritySelect.appendChild(priorityOption3);
        newTaskForm.appendChild(formDateDiv);
        formDateDiv.appendChild(dateLabel);
        formDateDiv.appendChild(dateInput);
        newTaskForm.appendChild(formNotesDiv);
        formNotesDiv.appendChild(notesLabel);
        formNotesDiv.appendChild(notesTA);
        newTaskForm.appendChild(submitTaskButton);
        display.appendChild(taskList);
    
        addTaskButton.addEventListener("click", (e) => {
            newTaskForm.style.display = "grid";
        })

        submitTaskButton.addEventListener("click", (e) => {
            if (nameInput.validity.valid && dateInput.validity.valid) {
                e.preventDefault();
                let addedTask = nameInput.value;
                let addedPriority = prioritySelect.value;
                let addedDate = dateInput.value;
                let addedNotes = notesTA.value;
                if (tabName !== "Home" && tabName !== "Today" && tabName !== "Week") {
                    console.log("we're good");
                    let task = project.createTask(addedTask, addedPriority, addedDate, addedNotes, tabName);
                    project.addProjectTask(task);
                    project.displaySpecificTasks(tabName);
                    newTaskForm.reset();
                    newTaskForm.style.display = "none";
                } else {
                    let task = project.createTask(addedTask, addedPriority, addedDate, addedNotes);
                    project.addProjectTask(task);
                    project.displayTasks();
                    newTaskForm.reset();
                    newTaskForm.style.display = "none";
                }
            }
        });
    };

    if ( tabName === "Home" ) {
        createTaskForm();
    } else if ( tabName === "Today" || tabName === "Week") {
        const taskList = document.createElement("div");
        taskList.classList.add("taskList");
        display.appendChild(taskList);
    } else {
        createTaskForm();
    }
};

export default loadTasks;