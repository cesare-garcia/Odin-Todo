const loadProjects = (taskDisplayBox) => {

    const projectsContainer = document.createElement("div");

    const projectsTop = document.createElement("div");
    projectsTop.classList.add("projectsTop");

    const projectsHeading = document.createElement("h2");
    projectsHeading.innerText = "Projects";

    const addNewProject = document.createElement("button");
    addNewProject.innerText = "Add Project";

    taskDisplayBox.appendChild(projectsContainer);
    projectsContainer.appendChild(projectsTop);
    projectsTop.appendChild(projectsHeading);
    projectsTop.appendChild(addNewProject);

};

export default loadProjects;