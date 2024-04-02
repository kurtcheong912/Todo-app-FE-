import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../task.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../../shared/pop-up/pop-up.component';
import { TaskEditComponent } from '../../task-edit/task-edit.component';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  isDue: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService, private dialogRef: MatDialog) {
  }
  ngOnInit(): void {
    const dueDateAsString: string = this.task.dueDate.toString();
    const dateTimeToCompare: DateTime = DateTime.fromISO(dueDateAsString);
    const currentDateTime: DateTime = DateTime.now();
    if (currentDateTime > dateTimeToCompare) {
      this.isDue = true;
    } else {
      this.isDue = false;
    }
  }
  onDelete() {
    this.taskService.deleteTask(this.index);
  }
  openDeleteDialog() {
    const dialogRef = this.dialogRef.open(PopUpComponent, {
      data: {
        title: 'Do you want to delete ' + this.task.title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDelete();
      }
    });
  }
  onEditTask(index: number) {
    console.log(index);

    const dialogRef = this.dialogRef.open(TaskEditComponent, {
      data: {
        index: index
      }
    });

  }
}
