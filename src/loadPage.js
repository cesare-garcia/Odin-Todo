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
    main.appendChild(display);

    contentDiv.appendChild(footer);
};

export default loadPage;