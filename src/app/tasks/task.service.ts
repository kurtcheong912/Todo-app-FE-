import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Task } from "./task.model";
import { DatePipe } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    tasksChanged = new Subject<Task[]>();
    isAddingTask;
    dateTime = new Date();
    datepipe: DatePipe = new DatePipe('en-US')
    formattedDate = this.datepipe.transform(this.dateTime, 'YYYY-MM-ddTHH:mm')

    private tasks: Task[] = [
        new Task(1, "title1", "description1","category1", this.formattedDate),
        new Task(2, "title2", "description2", "category1",this.formattedDate),
        new Task(3, "title3", "description3","category1", this.formattedDate),
        new Task(4, "title4", "description4","category1", this.formattedDate),
    ];
    setTasks(){
        // this.tasks.push(task);
        this.tasksChanged.next(this.tasks.slice());
    }

    getTasks() {
        return this.tasks.slice();
    }
    getTask(index: number) {
        return this.tasks[index];
    }

    addTask(task: Task) {
        this.tasks.push(task);
        this.tasksChanged.next(this.tasks.slice());
    }
    updateTask(index: number, task: Task) {
        this.tasks[index] = task;
        this.tasksChanged.next(this.tasks.slice());
    }
    deleteTask(index: number) {
        this.tasks.splice(index, 1);
        this.tasksChanged.next(this.tasks.slice());
    }

}