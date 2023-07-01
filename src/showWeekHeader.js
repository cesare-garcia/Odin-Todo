const showWeekHeader = () => {

    const display = document.querySelector(".display");

    const week = document.createElement("div");
    week.classList.add("weekDisplay");

    const weekHeader = document.createElement("div");
    weekHeader.classList.add("weekHeader");

    const weekTitle = document.createElement("h2");
    weekTitle.classList.add("weekTitle");
    weekTitle.innerText = "This Week";

    display.appendChild(week);
    week.appendChild(weekHeader);
    weekHeader.appendChild(weekTitle);
};

export default showWeekHeader;