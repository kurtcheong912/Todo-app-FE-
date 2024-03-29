import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private router: Router, private route: ActivatedRoute, private dialogRef: MatDialog) {
  }
 
  addTask() {
    const dialogRef = this.dialogRef.open(TaskEditComponent, {
      data: {
        index: null
      }
    });
  }
}
