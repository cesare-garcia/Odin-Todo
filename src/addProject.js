const addProject = ( projectArray, projectName ) => {

    let newProject = {
        name: projectName,
    };

    projectArray.push(newProject);

    return projectArray;
};

export default addProject;