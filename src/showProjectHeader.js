const showProjectHeader = (display, projectsArray, projectsIndex) => {
    let specificProjectBox = document.createElement("div");
    specificProjectBox.classList.add("spBox");
    let specificProjectHeader = document.createElement("div");
    specificProjectHeader.classList.add("spHeader");
    let specificProjectName = document.createElement("h2");
    specificProjectName.classList.add("spName");
    display.appendChild(specificProjectBox);
    specificProjectBox.appendChild(specificProjectHeader);
    specificProjectHeader.appendChild(specificProjectName);

    if (projectsArray.length == 0) {
        specificProjectName.innerText = "Please add or select a project in the sidebar.";
    } else {
        specificProjectName.innerText = projectsArray[projectsIndex];
        const specificProjectAddTask = document.createElement("button");
        specificProjectAddTask.classList.add("spat");
        specificProjectAddTask.innerText = "+";
        specificProjectHeader.appendChild(specificProjectAddTask);

        const projectTaskForm = document.createElement("form");
        projectTaskForm.setAttribute("id", "projectTaskForm");
        projectTaskForm.style.display = "none";

        const ptStatusDiv = document.createElement("div");
        ptStatusDiv.classList.add("statusDiv");
        const ptStatusLabel = document.createElement("label");
        ptStatusLabel.setAttribute("for", "pts_input");
        ptStatusLabel.innerText = "Status: ";
        const ptStatusInput = document.createElement("input");
        ptStatusInput.setAttribute("type", "checkbox");
        ptStatusInput.setAttribute("id", "pts_input");
        ptStatusInput.setAttribute("name", "pts_input");
        ptStatusDiv.appendChild(ptStatusLabel);
        ptStatusDiv.appendChild(ptStatusInput);

        const ptNameDiv = document.createElement("div");
        ptNameDiv.classList.add("nameDiv");
        const ptNameLabel = document.createElement("label");
        ptNameLabel.setAttribute("for", "ptn_input");
        ptNameLabel.innerText = "Name: ";
        const ptNameInput = document.createElement("input");
        ptNameInput.setAttribute("id", "ptn_input");
        ptNameInput.setAttribute("name", "ptn_input");
        ptNameDiv.appendChild(ptNameLabel);
        ptNameDiv.appendChild(ptNameInput);

        const ptPriorityDiv = document.createElement("div");
        ptPriorityDiv.classList.add("priorityDiv");
        const ptPriorityLabel = document.createElement("label");
        ptPriorityLabel.innerText = "Priority: ";
        const ptPrioritySelect = document.createElement("select");
        ptPrioritySelect.setAttribute("id", "ptpri_select");
        const ptPriorityOption1 = document.createElement("option");
        ptPriorityOption1.innerText = "Low";
        const ptPriorityOption2 = document.createElement("option");
        ptPriorityOption2.innerText = "Medium";
        const ptPriorityOption3 = document.createElement("option");
        ptPriorityOption3.innerText = "High";
        ptPriorityDiv.appendChild(ptPriorityLabel);
        ptPriorityDiv.appendChild(ptPrioritySelect);
        ptPrioritySelect.appendChild(ptPriorityOption1);
        ptPrioritySelect.appendChild(ptPriorityOption2);
        ptPrioritySelect.appendChild(ptPriorityOption3);

        const ptDueDateDiv = document.createElement("div");
        ptDueDateDiv.classList.add("dueDateDiv");
        const ptDueDateLabel = document.createElement("label");
        ptDueDateLabel.innerText = "Due Date: ";
        ptDueDateLabel.setAttribute("for", "ptdate_input");
        const ptDueDateInput = document.createElement("input");
        ptDueDateInput.setAttribute("type", "date");
        ptDueDateInput.setAttribute("name", "ptdate_input");
        ptDueDateInput.setAttribute("id", "ptdate_input");
        ptDueDateDiv.appendChild(ptDueDateLabel);
        ptDueDateDiv.appendChild(ptDueDateInput);

        const ptDescriptionDiv = document.createElement("div");
        ptDescriptionDiv.classList.add("descriptionDiv");
        const ptDescriptionLabel = document.createElement("label");
        ptDescriptionLabel.innerText = "Description: ";
        ptDescriptionLabel.setAttribute("for", "ptdesc_ta");
        const ptDescriptionTA = document.createElement("textarea");
        ptDescriptionTA.setAttribute("name", "ptdesc_ta");
        ptDescriptionTA.setAttribute("id", "ptdesc_ta");
        ptDescriptionTA.setAttribute("rows", "5");
        ptDescriptionDiv.appendChild(ptDescriptionLabel);
        ptDescriptionDiv.appendChild(ptDescriptionTA);

        const ptNotesDiv = document.createElement("div");
        ptNotesDiv.classList.add("notesDiv");
        const ptNotesLabel = document.createElement("label");
        ptNotesLabel.setAttribute("for", "ptnotes_ta");
        ptNotesLabel.innerText = "Notes: ";
        const ptNotesTA = document.createElement("textarea");
        ptNotesTA.setAttribute("name", "ptnotes_ta");
        ptNotesTA.setAttribute("id", "ptnotes_ta");
        ptNotesTA.setAttribute("rows", "5");
        ptNotesDiv.appendChild(ptNotesLabel);
        ptNotesDiv.appendChild(ptNotesTA);

        const submitTaskButton = document.createElement("button");
        submitTaskButton.classList.add("ptsubmitTask");
        submitTaskButton.innerText = "Submit";

        specificProjectBox.appendChild(projectTaskForm);
        projectTaskForm.appendChild(ptStatusDiv);
        projectTaskForm.appendChild(ptNameDiv);
        projectTaskForm.appendChild(ptPriorityDiv);
        projectTaskForm.appendChild(ptDueDateDiv);
        projectTaskForm.appendChild(ptDescriptionDiv);
        projectTaskForm.appendChild(ptNotesDiv);
        projectTaskForm.appendChild(submitTaskButton);

    }
};

export default showProjectHeader;