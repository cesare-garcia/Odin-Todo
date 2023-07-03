const showProjectHeader = (display, projectsArray, projectsIndex) => {
    let specificProjectHeader = document.createElement("div");
    specificProjectHeader.classList.add("spHeader");
    let specificProjectName = document.createElement("h2");
    specificProjectName.classList.add("spName");
    display.appendChild(specificProjectHeader);
    specificProjectHeader.appendChild(specificProjectName);

    if (projectsArray.length == 0) {
        specificProjectName.innerText = "Please add or select a project in the sidebar.";
    } else {
        specificProjectName.innerText = projectsArray[projectsIndex];
        const specificProjectAddTask = document.createElement("button");
        specificProjectAddTask.classList.add("spat");
        specificProjectAddTask.innerText = "+";
        specificProjectHeader.appendChild(specificProjectAddTask);
    }
};

export default showProjectHeader;