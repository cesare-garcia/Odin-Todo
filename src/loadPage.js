import createProject from "./createProject";
import loadTasks from "./loadTasks";

const loadPage = (contentDiv) => {
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("headerTitle");
    headerTitle.innerText = "To-Do List";
    const main = document.createElement("main");
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");
    const home = document.createElement("div");
    home.setAttribute("id", "home");
    home.innerText = "Home";
    const today = document.createElement("div");
    today.setAttribute("id", "today");
    today.innerText = "Today";
    const week = document.createElement("div");
    week.setAttribute("id", "week");
    week.innerText = "Week";
    const projectsContainer = document.createElement("div");
    projectsContainer.setAttribute("id", "projectsContainer");
    const projectsHeader = document.createElement("div");
    projectsHeader.classList.add("projectHeader");
    projectsHeader.innerText = "Projects"
    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("addProject");
    addProjectButton.innerText = "+";
    const newProjectForm = document.createElement("form");
    newProjectForm.setAttribute("id", "newProjectForm")
    const newProjectLabel = document.createElement("label");
    newProjectLabel.setAttribute("for", "newProjectInput");
    newProjectLabel.innerText = "Project Name*: ";
    const newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("id", "newProjectInput");
    newProjectInput.setAttribute("name", "newProjectInput");
    newProjectInput.required = true;
    const newProjectSubmissionButton = document.createElement("button");
    newProjectSubmissionButton.classList.add("npSubmission");
    newProjectSubmissionButton.innerText = "submit";
    const projectsList = document.createElement("div");
    projectsList.setAttribute("id", "projectsList");
    const display = document.createElement("div");
    display.setAttribute("id", "display");
    const footer = document.createElement("footer");

    let homeProject = createProject("Home");

    contentDiv.appendChild(header);
    header.appendChild(headerTitle);
    contentDiv.appendChild(main);
    main.appendChild(sidebar);
    sidebar.appendChild(home);
    sidebar.appendChild(today);
    sidebar.appendChild(week);
    sidebar.appendChild(projectsContainer);
    projectsContainer.appendChild(projectsHeader);
    projectsHeader.appendChild(addProjectButton);
    projectsContainer.appendChild(newProjectForm);
    newProjectForm.appendChild(newProjectLabel);
    newProjectForm.appendChild(newProjectInput);
    newProjectForm.appendChild(newProjectSubmissionButton);
    projectsContainer.appendChild(projectsList);
    main.appendChild(display);
    contentDiv.appendChild(footer);

    home.addEventListener("click", (e) => {
        let tabName = e.target.innerText;
        loadTasks(homeProject, tabName, display);
        homeProject.displayTasks();
    })

    today.addEventListener("click", (e) => {
        let tabName = e.target.innerText;
        loadTasks(homeProject, tabName, display);
        homeProject.displayTodaysTasks();
    })

    week.addEventListener("click", (e) => {
        let tabName = e.target.innerText;
        loadTasks(homeProject, tabName, display);
        homeProject.displayThisWeeksTasks();
    })

    addProjectButton.addEventListener("click", (e) => {
        newProjectForm.style.display = "flex";
    });

    newProjectSubmissionButton.addEventListener("click", (e) => {
        if (newProjectInput.validity.valid) {
            let npName = newProjectInput.value;
            let newProject = createProject(npName);
            console.log(newProject);
            newProjectForm.reset();
            newProjectForm.style.display = "none";
            // newProject.showProjectTabs();
        }
    })
}

export default loadPage;