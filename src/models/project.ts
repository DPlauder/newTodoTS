import { Todo, TodoPriority } from "./todo.js"

export default class Project {
    todos: Todo[] = []
    constructor(
        public name: string,
        public id: string
    ) {

    }
    addTodo(name: string, description: string,  priority: TodoPriority){
        const newTodo = new Todo(Math.random().toString(), name, description, new Date(), priority); 
        this.todos.push(newTodo);
    }
}