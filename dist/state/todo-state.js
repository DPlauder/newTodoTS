import { Todo } from "../models/todo.js";
export class TodoState {
    constructor() {
    }
    addTodo(name, description, priority) {
        const newTodo = new Todo(Math.random().toString(), name, description, new Date(), priority);
    }
}
//# sourceMappingURL=todo-state.js.map