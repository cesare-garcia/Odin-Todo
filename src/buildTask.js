const buildTask = ( projectName, taskStatus, taskName, taskPriority, taskDueDate, taskDescription, taskNotes ) => {
    return { projectName, taskStatus, taskName, taskPriority, taskDueDate, taskDescription, taskNotes }
};

export default buildTask;