const storageObject = () => {
    let storage = window.localStorage;

    // we'll need code to determine if something is already in local storage
    // if nothing is in storage, use code below
    
    let projects = [];
    storage.setItem("projects", projects);

    // function to add projects to array, then add new array to localStorage
    // this function needs to strip functions off the pushed element and jsonify it

    // function to remove projects from array, then add new array to localStorage

    // function to retrieve projects from local storage. for each object, re-add the project functions to it.

    // function to edit projects in array

};

export default storageObject;