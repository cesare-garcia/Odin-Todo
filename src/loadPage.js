const loadPage = (contentDiv) => {

    const header = document.createElement("header");
    header.classList.add("header");

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("headerTitle");
    headerTitle.innerText = "Cesar's To-do List";

    const main = document.createElement("main");
    
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const home = document.createElement("div");
    home.classList.add("s_Option");
    home.setAttribute("id", "home");
    home.innerText = "Home";

    const today = document.createElement("div");
    today.classList.add("s_Option");
    today.setAttribute("id", "today")
    today.innerText = "Today";

    const week = document.createElement("div");
    week.classList.add("s_Option");
    week.setAttribute("id", "week");
    week.innerText = "Week";

    const projects = document.createElement("div");
    projects.classList.add("s_Option");
    projects.setAttribute("id", "projects");
    projects.innerText = "Projects";

    const newProjectsButton = document.createElement("button");
    newProjectsButton.classList.add("addProject");
    newProjectsButton.innerText = "+";

    const newProjectsForm = document.createElement("form");
    newProjectsForm.setAttribute("id", "npForm");
    newProjectsForm.style.display = "none";

    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add(".npDiv");

    const newProjectLabel = document.createElement("label");
    newProjectLabel.setAttribute("for", "np_input")
    newProjectLabel.innerText = "New Project Name: ";

    const newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("id", "np_input");
    newProjectInput.setAttribute("name", "np_input");

    const newProjectSubmission = document.createElement("button");
    newProjectSubmission.classList.add("npButton");
    newProjectSubmission.innerText = "Add Project";

    const newProjectsSidebarDisplay = document.createElement("div");
    newProjectsSidebarDisplay.classList.add("npsd");

    const display = document.createElement("div");
    display.classList.add("display");

    const footer = document.createElement("footer");

    contentDiv.appendChild(header);
    header.appendChild(headerTitle);

    contentDiv.appendChild(main);
    main.appendChild(sidebar);
    sidebar.appendChild(home);
    sidebar.appendChild(today);
    sidebar.appendChild(week);
    sidebar.appendChild(projects);
    projects.appendChild(newProjectsButton);
    projects.appendChild(newProjectsForm);
    newProjectsForm.appendChild(newProjectDiv);
    newProjectDiv.appendChild(newProjectLabel);
    newProjectDiv.appendChild(newProjectInput);
    newProjectDiv.appendChild(newProjectSubmission);
    projects.appendChild(newProjectsSidebarDisplay);
    main.appendChild(display);

    contentDiv.appendChild(footer);
};

export default loadPage;