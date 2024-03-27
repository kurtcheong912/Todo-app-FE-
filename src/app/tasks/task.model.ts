export class Task {
    public isDeleted;
    public created;
    public update;

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public category: string,
        public dueDate: String) { }
}