import { Component } from "./base-components.js";
import  Project  from "../models/project.js";

class ProjectItem extends Component<HTMLElement, HTMLElement>{

    private project: Project;

    constructor(hostId: string, project: Project) {
        super("single-project", hostId, project.id);
        this.project = project;
        this.renderContent();
    }
    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.name;

    }
}