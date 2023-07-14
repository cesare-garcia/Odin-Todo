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
    home.classList.add("sidebarOption");
    home.innerText = "Home";
    const today = document.createElement("div");
    today.setAttribute("id", "today");
    today.classList.add("sidebarOption");
    today.innerText = "Today";
    const week = document.createElement("div");
    week.setAttribute("id", "week");
    week.classList.add("sidebarOption");
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
    newProjectLabel.innerText = "Name*: ";
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

    let tabName = "Home";
    let project = createProject("Home");
    loadTasks(project, tabName, display);
    project.displayTasks();

    // code that loads all already existing projects in the sidebar w/ event listeners

    home.addEventListener("click", (e) => {
        tabName = e.target.innerText;
        loadTasks(project, tabName, display);
        project.displayTasks();
    })

    today.addEventListener("click", (e) => {
        tabName = e.target.innerText;
        loadTasks(project, tabName, display);
        project.displayTodaysTasks();
    })

    week.addEventListener("click", (e) => {
        tabName = e.target.innerText;
        loadTasks(project, tabName, display);
        project.displayThisWeeksTasks();
    })

    addProjectButton.addEventListener("click", (e) => {
        newProjectForm.style.display = "flex";
    });

    newProjectSubmissionButton.addEventListener("click", (e) => {
        if (newProjectInput.validity.valid) {
            let npName = newProjectInput.value;
            project.addNewProject(npName);
            project.showProjectTabs(project);
            newProjectForm.reset();
            newProjectForm.style.display = "none";
        }
    })
}

export default loadPage;