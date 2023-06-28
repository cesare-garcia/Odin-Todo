const loadWeeksTasks = (taskDisplayBox) => {

    const weekTaskDiv = document.createElement("div");

    const weekTaskTop = document.createElement("div");

    const weekHeading = document.createElement("h2");
    weekHeading.innerText = "This Week";

    const weekTaskBottom = document.createElement("div");
    weekTaskBottom.innerText = "placeholder";

    taskDisplayBox.appendChild(weekTaskDiv);
    weekTaskDiv.appendChild(weekTaskTop);
    weekTaskTop.appendChild(weekHeading);
    weekTaskDiv.appendChild(weekTaskBottom);

};

export default loadWeeksTasks;