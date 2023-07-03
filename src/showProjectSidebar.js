const showProjectSidebar = (projectsArray) => {

    const npsd = document.querySelector(".npsd");
    const allProjectsBox = document.createElement("div");
    allProjectsBox.classList.add('apBox');
    npsd.appendChild(allProjectsBox);
    console.log(npsd);

    for ( let i = 0; i < projectsArray.length; i++ ) {
        const project = document.createElement("div");
        project.classList.add("projectContainer");
        project.setAttribute(`data-projectNumber`, `${i}`);
    
        const projectHeader = document.createElement("div");
        projectHeader.classList.add("projectHeader");
        projectHeader.setAttribute(`data-projectNumber`, `${i}`);

        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("projectTitle");
        projectTitle.innerText = projectsArray[i];
        projectTitle.setAttribute(`data-projectNumber`, `${i}`);

        const deleteProjectButton = document.createElement("button");
        deleteProjectButton.classList.add("deleteProject");
        deleteProjectButton.innerText = "X";
        deleteProjectButton.setAttribute(`data-projectNumber`, `${i}`);

        allProjectsBox.appendChild(project);
        project.appendChild(projectHeader);
        projectHeader.appendChild(projectTitle);
        projectHeader.appendChild(deleteProjectButton);
    
    }
};

export default showProjectSidebar;