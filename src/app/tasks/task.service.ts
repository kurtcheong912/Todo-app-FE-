import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Task } from "./task.model";
import { DatePipe } from "@angular/common";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    tasks: Task[];
    tasksChanged = new Subject<Task[]>();
    isAddingTask;
    dateTime = new Date();
    datepipe: DatePipe = new DatePipe('en-US')
    formattedDate = this.datepipe.transform(this.dateTime, 'YYYY-MM-ddTHH:mm')

    constructor(private dataStorageService: DataStorageService) { }
    setTasks() {
        this.dataStorageService.fetchTasks().subscribe((tasks: Task[]) => {       
            this.tasks = tasks;
            this.tasksChanged.next(this.tasks.slice());
        })
    }

    getTasks() {
        return this.tasks.slice();
    }

    getTask(index: number) {
        return this.tasks[index];
    }

    addTask(task: Task) {
        this.dataStorageService.storeTask(task).subscribe((myTask: Task) => {
            this.tasks.push(myTask);
            this.tasksChanged.next(this.tasks.slice());
        })
    }

    updateTask(index: number, task: Task) {
        task.id = this.tasks[index].id;
        this.dataStorageService.editTask(task).subscribe((myTask: Task) => {
            this.tasks[index] = myTask;
            this.tasksChanged.next(this.tasks.slice());
        })
    }

    deleteTask(index: number) {
        this.dataStorageService.removeTask(this.tasks[index].id).subscribe(() => {
            this.tasks.splice(index, 1);
            this.tasksChanged.next(this.tasks.slice());
        })
    }

}