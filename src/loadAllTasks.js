const loadAllTasks = (taskDisplayBox) => {

    const allTasksContainer = document.createElement("div");

    const allTasksTop = document.createElement("div");

    const allTasksHeading = document.createElement("h2");
    allTasksHeading.innerText = "All Tasks";

    const addNewTaskButton = document.createElement("button");
    addNewTaskButton.innerText = "Add Task";

    taskDisplayBox.appendChild(allTasksContainer);
    allTasksContainer.appendChild(allTasksHeading);
    allTasksContainer.appendChild(addNewTaskButton);

};

export default loadAllTasks;