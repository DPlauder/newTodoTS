export enum TodoPriority {
    HIGH,
    MEDIUM,
    LOW
}

export class Todo {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public date: Date,
        public priority: TodoPriority

    ){}
}

