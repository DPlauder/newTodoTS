export class ProjectList {
    //project: Project;
    constructor(project) {
        this.assignedProjects = [];
    }
    renderProjects() {
        const testproject = document.getElementById('single-project');
        this.assignedProjects.forEach(prjItem => {
            //testproject.querySelector('h2')!.textContent = this.project.name;
        });
    }
}
//# sourceMappingURL=project-list.js.map