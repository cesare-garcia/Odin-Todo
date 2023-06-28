import './style.css';
import loadPage from './loadPage.js';

const contentDiv = document.querySelector("#content");

loadPage(contentDiv);

const allTasksTab = document.querySelector("#allTasks");
const todayTab = document.querySelector("#today");
const weekTab = document.querySelector("#week");
const projectsTab = document.querySelector("#projects");
const taskDisplayBox = document.querySelector(".taskDisplay");

allTasksTab.addEventListener("click", (e) => {
    console.log("allTasks");
})

todayTab.addEventListener("click", (e) => {
    console.log("today");
})

weekTab.addEventListener("click", (e) => {
    console.log("week");
})

projectsTab.addEventListener("click", (e) => {
    console.log("projects");
})