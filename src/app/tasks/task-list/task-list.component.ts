import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[];

  private isTasksChanged: Subscription;
  filerTitle: string;

  constructor(private taskService: TaskService, private dialogRef: MatDialog) {
  }
  ngOnInit(): void {
    this.filerTitle='';
    this.taskService.setTasks();
    this.isTasksChanged = this.taskService.tasksChanged.subscribe((myTasks: Task[]) => {
      this.tasks = myTasks;
    });
  }
  addTask() {
    const dialogRef = this.dialogRef.open(TaskEditComponent, {
      data: {
        index: null
      }
    });
  }
}
