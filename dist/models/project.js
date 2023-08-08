import { Todo } from "./todo.js";
export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.todos = [];
    }
    addTodo(name, description, priority) {
        const newTodo = new Todo(Math.random().toString(), name, description, new Date(), priority);
        this.todos.push(newTodo);
    }
}
//# sourceMappingURL=project.js.map