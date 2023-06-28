const loadPage = (contentDiv) => {

    const header = document.createElement("header");
    header.classList.add("header");

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("headerTitle");
    headerTitle.innerText = "Cesar's To-do List";

    const main = document.createElement("main");
    
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const allTasksOption = document.createElement("div");
    allTasksOption.classList.add("sidebarOption");
    allTasksOption.setAttribute("id", "allTasks");
    allTasksOption.innerText = "All Tasks";

    const todayOption = document.createElement("div");
    todayOption.classList.add("sidebarOption");
    todayOption.setAttribute("id", "today")
    todayOption.innerText = "Today";

    const weekOption = document.createElement("div");
    weekOption.classList.add("sidebarOption");
    weekOption.setAttribute("id", "week");
    weekOption.innerText = "Week";

    const projectsOption = document.createElement("div");
    projectsOption.classList.add("sidebarOption");
    projectsOption.setAttribute("id", "projects");
    projectsOption.innerText = "Projects";

    const taskDisplay = document.createElement("div");
    taskDisplay.classList.add("taskDisplay");

    const footer = document.createElement("footer");

    contentDiv.appendChild(header);
    header.appendChild(headerTitle);

    contentDiv.appendChild(main);
    main.appendChild(sidebar);
    sidebar.appendChild(allTasksOption);
    sidebar.appendChild(todayOption);
    sidebar.appendChild(weekOption);
    sidebar.appendChild(projectsOption);
    main.appendChild(taskDisplay);

    contentDiv.appendChild(footer);

};

export default loadPage;