const showHomeHeader = () => {

    const display = document.querySelector(".display");

    const home = document.createElement("div");
    home.classList.add("home");

    const homeHeader = document.createElement("div");
    homeHeader.classList.add("homeHeader");

    const homeTitle = document.createElement("h2");
    homeTitle.classList.add("h_title");
    homeTitle.innerText = "Home";

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("addTask");
    addTaskButton.innerText = "+";

    const newTaskForm = document.createElement("form");
    newTaskForm.setAttribute("id", "ntForm");
    newTaskForm.style.display = "none";
    
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "p_input");
    projectLabel.innerText = "Project (optional): ";
    const projectInput = document.createElement("input");
    projectInput.setAttribute("id", "p_input");
    projectInput.setAttribute("name", "p_input");
    projectDiv.appendChild(projectLabel);
    projectDiv.appendChild(projectInput);

    const statusDiv = document.createElement("div");
    statusDiv.classList.add("statusDiv");
    const statusLabel = document.createElement("label");
    statusLabel.setAttribute("for", "s_input");
    statusLabel.innerText = "Status: ";
    const statusInput = document.createElement("input");
    statusInput.setAttribute("type", "checkbox");
    statusInput.setAttribute("id", "s_input");
    statusInput.setAttribute("name", "s_input");
    statusDiv.appendChild(statusLabel);
    statusDiv.appendChild(statusInput);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("nameDiv");
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "n_input");
    nameLabel.innerText = "Name: ";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "n_input");
    nameInput.setAttribute("name", "n_input");
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priorityDiv");
    const priorityLabel = document.createElement("label");
    priorityLabel.innerText = "Priority: ";
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "pri_select");
    const priorityOption1 = document.createElement("option");
    priorityOption1.innerText = "Low";
    const priorityOption2 = document.createElement("option");
    priorityOption2.innerText = "Medium";
    const priorityOption3 = document.createElement("option");
    priorityOption3.innerText = "High";
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);
    prioritySelect.appendChild(priorityOption1);
    prioritySelect.appendChild(priorityOption2);
    prioritySelect.appendChild(priorityOption3);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDateDiv");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerText = "Due Date: ";
    dueDateLabel.setAttribute("for", "date_input");
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "date_input");
    dueDateInput.setAttribute("id", "date_input");
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateInput);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("descriptionDiv");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.innerText = "Description: ";
    descriptionLabel.setAttribute("for", "desc_ta");
    const descriptionTA = document.createElement("textarea");
    descriptionTA.setAttribute("name", "desc_ta");
    descriptionTA.setAttribute("id", "desc_ta");
    descriptionTA.setAttribute("rows", "5");
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionTA);

    const notesDiv = document.createElement("div");
    notesDiv.classList.add("notesDiv");
    const notesLabel = document.createElement("label");
    notesLabel.setAttribute("for", "notes_ta");
    notesLabel.innerText = "Notes: ";
    const notesTA = document.createElement("textarea");
    notesTA.setAttribute("name", "notes_ta");
    notesTA.setAttribute("id", "notes_ta");
    notesTA.setAttribute("rows", "5");
    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notesTA);

    const submitTaskButton = document.createElement("button");
    submitTaskButton.classList.add("submitTask");
    submitTaskButton.innerText = "Submit";

    display.appendChild(home);
    home.appendChild(homeHeader)
    homeHeader.appendChild(homeTitle);
    homeHeader.appendChild(addTaskButton);
    home.appendChild(newTaskForm);

    newTaskForm.appendChild(projectDiv);
    newTaskForm.appendChild(statusDiv);
    newTaskForm.appendChild(nameDiv);
    newTaskForm.appendChild(priorityDiv);
    newTaskForm.appendChild(dueDateDiv);
    newTaskForm.appendChild(descriptionDiv);
    newTaskForm.appendChild(notesDiv);
    newTaskForm.appendChild(submitTaskButton);
};

export default showHomeHeader;