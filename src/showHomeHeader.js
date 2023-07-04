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

    const editTaskForm = document.createElement("form");
    editTaskForm.setAttribute("id", "editForm");
    editTaskForm.style.display = "none";

    const editProjectDiv = document.createElement("div");
    editProjectDiv.classList.add("editProjectDiv");
    const editProjectLabel = document.createElement("label");
    editProjectLabel.setAttribute("for", "editP_input");
    editProjectLabel.innerText = "Project (optional): ";
    const editProjectInput = document.createElement("input");
    editProjectInput.setAttribute("id", "editP_input");
    editProjectInput.setAttribute("name", "editP_input");
    editProjectDiv.appendChild(editProjectLabel);
    editProjectDiv.appendChild(editProjectInput);

    const editStatusDiv = document.createElement("div");
    editStatusDiv.classList.add("editStatusDiv");
    const editStatusLabel = document.createElement("label");
    editStatusLabel.setAttribute("for", "editS_input");
    editStatusLabel.innerText = "Status: ";
    const editStatusInput = document.createElement("input");
    editStatusInput.setAttribute("type", "checkbox");
    editStatusInput.setAttribute("id", "editS_input");
    editStatusInput.setAttribute("name", "editS_input");
    editStatusDiv.appendChild(editStatusLabel);
    editStatusDiv.appendChild(editStatusInput);

    const editNameDiv = document.createElement("div");
    editNameDiv.classList.add("editNameDiv");
    const editNameLabel = document.createElement("label");
    editNameLabel.setAttribute("for", "editN_input");
    editNameLabel.innerText = "Name: ";
    const editNameInput = document.createElement("input");
    editNameInput.setAttribute("id", "editN_input");
    editNameInput.setAttribute("name", "editN_input");
    editNameDiv.appendChild(editNameLabel);
    editNameDiv.appendChild(editNameInput);

    const editPriorityDiv = document.createElement("div");
    editPriorityDiv.classList.add("editPriorityDiv");
    const editPriorityLabel = document.createElement("label");
    editPriorityLabel.innerText = "Priority: ";
    const editPrioritySelect = document.createElement("select");
    editPrioritySelect.setAttribute("id", "editPri_select");
    const editPriorityOption1 = document.createElement("option");
    editPriorityOption1.innerText = "Low";
    const editPriorityOption2 = document.createElement("option");
    editPriorityOption2.innerText = "Medium";
    const editPriorityOption3 = document.createElement("option");
    editPriorityOption3.innerText = "High";
    editPriorityDiv.appendChild(editPriorityLabel);
    editPriorityDiv.appendChild(editPrioritySelect);
    editPrioritySelect.appendChild(editPriorityOption1);
    editPrioritySelect.appendChild(editPriorityOption2);
    editPrioritySelect.appendChild(editPriorityOption3);

    const editDueDateDiv = document.createElement("div");
    editDueDateDiv.classList.add("editDueDateDiv");
    const editDueDateLabel = document.createElement("label");
    editDueDateLabel.innerText = "Due Date: ";
    editDueDateLabel.setAttribute("for", "editDate_input");
    const editDueDateInput = document.createElement("input");
    editDueDateInput.setAttribute("type", "date");
    editDueDateInput.setAttribute("name", "editDate_input");
    editDueDateInput.setAttribute("id", "editDate_input");
    editDueDateDiv.appendChild(editDueDateLabel);
    editDueDateDiv.appendChild(editDueDateInput);

    const editDescriptionDiv = document.createElement("div");
    editDescriptionDiv.classList.add("editDescriptionDiv");
    const editDescriptionLabel = document.createElement("label");
    editDescriptionLabel.innerText = "Description: ";
    editDescriptionLabel.setAttribute("for", "editDesc_ta");
    const editDescriptionTA = document.createElement("textarea");
    editDescriptionTA.setAttribute("name", "editDesc_ta");
    editDescriptionTA.setAttribute("id", "editDesc_ta");
    editDescriptionTA.setAttribute("rows", "5");
    editDescriptionDiv.appendChild(editDescriptionLabel);
    editDescriptionDiv.appendChild(editDescriptionTA);

    const editNotesDiv = document.createElement("div");
    editNotesDiv.classList.add("editNotesDiv");
    const editNotesLabel = document.createElement("label");
    editNotesLabel.setAttribute("for", "editNotes_ta");
    editNotesLabel.innerText = "Notes: ";
    const editNotesTA = document.createElement("textarea");
    editNotesTA.setAttribute("name", "editNotes_ta");
    editNotesTA.setAttribute("id", "editNotes_ta");
    editNotesTA.setAttribute("rows", "5");
    editNotesDiv.appendChild(editNotesLabel);
    editNotesDiv.appendChild(editNotesTA);

    const editSubmitTaskButton = document.createElement("button");
    editSubmitTaskButton.classList.add("editSubmitTask");
    editSubmitTaskButton.innerText = "Submit";

    home.appendChild(editTaskForm);
    editTaskForm.appendChild(editProjectDiv);
    editTaskForm.appendChild(editStatusDiv);
    editTaskForm.appendChild(editNameDiv);
    editTaskForm.appendChild(editPriorityDiv);
    editTaskForm.appendChild(editDueDateDiv);
    editTaskForm.appendChild(editDescriptionDiv);
    editTaskForm.appendChild(editNotesDiv);
    editTaskForm.appendChild(editSubmitTaskButton);
    
};

export default showHomeHeader;