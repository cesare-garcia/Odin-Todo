const addTask = ( tasksArray, projectGroup, taskStatus, taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes ) => {

    let newTask = {
        projectGroup: projectGroup,
        status: taskStatus,
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate,
        priority: taskPriority,
        notes: taskNotes
    }

    tasksArray.push(newTask);

    return tasksArray;
};

export default addTask;

