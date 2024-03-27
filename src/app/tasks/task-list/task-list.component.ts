import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[];

  private isTasksChanged: Subscription;

  constructor(private taskService: TaskService) {
  }
  ngOnInit(): void {
    this.taskService.setTasks();
    this.isTasksChanged = this.taskService.tasksChanged.subscribe((myTasks: Task[]) => {
      this.tasks = myTasks;
    });
  }
}
