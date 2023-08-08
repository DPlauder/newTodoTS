export var TodoPriority;
(function (TodoPriority) {
    TodoPriority[TodoPriority["HIGH"] = 0] = "HIGH";
    TodoPriority[TodoPriority["MEDIUM"] = 1] = "MEDIUM";
    TodoPriority[TodoPriority["LOW"] = 2] = "LOW";
})(TodoPriority || (TodoPriority = {}));
export class Todo {
    constructor(id, name, description, date, priority) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}
//# sourceMappingURL=todo.js.map