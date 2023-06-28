const loadTodaysTasks = (taskDisplayBox) => {

    const todayTaskDiv = document.createElement("div");

    const todayTaskTop = document.createElement("div");

    const todayHeading = document.createElement("h2");
    todayHeading.innerText = "Today";

    const todayTaskBottom = document.createElement("div");
    todayTaskBottom.innerText = "placeholder";

    taskDisplayBox.appendChild(todayTaskDiv);
    todayTaskDiv.appendChild(todayTaskTop);
    todayTaskTop.appendChild(todayHeading);
    todayTaskDiv.appendChild(todayTaskBottom);

};

export default loadTodaysTasks;