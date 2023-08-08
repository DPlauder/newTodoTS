import { Component } from "./base-components.js";
class ProjectItem extends Component {
    constructor(hostId, project) {
        super("single-project", hostId, project.id);
        this.project = project;
        this.renderContent();
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.name;
    }
}
//# sourceMappingURL=project-item.js.map