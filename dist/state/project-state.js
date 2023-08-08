import Project from "../models/project.js";
import { TodoPriority } from "../models/todo.js";
class ProjectState {
    constructor() {
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState;
        return this.instance;
    }
    addProject(name) {
        const newProject = new Project(name, Math.random().toString());
        newProject.addTodo('test-todo', "test-description", TodoPriority.HIGH);
        this.projects.push(newProject);
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=project-state.js.map