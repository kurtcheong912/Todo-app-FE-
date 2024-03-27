import { Injectable } from "@angular/core";
import { Task } from "../tasks/task.model";

const LOCALHOST: string = 'http://localhost:8080';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
    //  dateTime = new Date()
    // private tasks: Task[] = [
    //     new Task(1, "title1", "description1",this.dateTime),
    //     new Task(2, "title2", "description2",this.dateTime),
    //     new Task(3, "title3", "description3",this.dateTime),
    //     new Task(4, "title4", "description4",this.dateTime),
    //   ];

    //   fetchTasks(){
    //     return this.tasks;
    //   }

    //   storeTask(task: Task){
    //     this.tasks.push(task);
    //   }
}
