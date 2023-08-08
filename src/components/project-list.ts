import  Project from "../models/project.js"

export class ProjectList {
    assignedProjects: Project[] =  []
    //project: Project;
    constructor(project:Project){

    }

    renderProjects(){
        const testproject = document.getElementById('single-project');
        this.assignedProjects.forEach(prjItem => {
            //testproject.querySelector('h2')!.textContent = this.project.name;
        })
    }
}