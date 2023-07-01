const showTodayHeader = () => {

    const display = document.querySelector(".display");

    const today = document.createElement("div");
    today.classList.add("todayDisplay");

    const todayHeader = document.createElement("div");
    todayHeader.classList.add("todayHeader");

    const todayTitle = document.createElement("h2");
    todayTitle.classList.add("todayTitle");
    todayTitle.innerText = "Today";

    display.appendChild(today);
    today.appendChild(todayHeader);
    todayHeader.appendChild(todayTitle);

};

export default showTodayHeader;