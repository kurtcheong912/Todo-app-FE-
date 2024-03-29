import { formatDate } from '@angular/common';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDatepicker, MatDatepickerInput, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {

  index: number;
  task: Task;
  taskForm: FormGroup;
  editMode = false;
  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService
    , public dialogRef: MatDialogRef<TaskEditComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.index = data.index;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initForm()
    if (this.index != null) {
      this.editMode = this.index != null
      this.task = this.taskService.getTask(this.index);
      if (this.task) {
        this.setValue();
      }
    }
  }

  initForm() {
    this.taskForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'dueTime': new FormControl(null, Validators.required),
      'dueDate': new FormControl(null, Validators.required),
    });
  }

  setValue() {
    var dateTime = this.task.dueDate.split("T");
    var time = dateTime[1].split(":");
    this.taskForm.setValue({
      title: this.task.title,
      description: this.task.description,
      category: this.task.category,
      dueTime: time[0] + ":" + time[1],
      dueDate: dateTime[0]
    });
  }

  onSubmit() {
    let dueDate = this.taskForm.value.dueDate;
    dueDate = formatDate(dueDate, 'yyyy-MM-dd', 'en');
    let dueTime = this.taskForm.value.dueTime;
    let newTask = new Task(null, this.taskForm.value.title, this.taskForm.value.description, this.taskForm.value.category, dueDate + "T" + dueTime);
    if (this.editMode) {
      this.taskService.updateTask(this.index, newTask);
    } else {
      this.taskService.addTask(newTask);
    }
    this.taskForm.reset();
  }
}
