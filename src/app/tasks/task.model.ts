export class Task {

    public created;
    public update;

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public category: string,
        public dueDate: String,
     ) { }
}