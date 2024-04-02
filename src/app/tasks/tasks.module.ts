import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskItemComponent } from "./task-list/task-item/task-item.component";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";
import { MatDialogModule } from "@angular/material/dialog";
import { FilterPipe } from "../filter.pipe";
import { Router, RouterModule } from "@angular/router"; // Add these imports
import { TasksRoutingModule } from "./tasks-routing.module";

@NgModule({
    declarations:[
        TasksComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskEditComponent,
        FilterPipe,
    ],imports:[
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        MatDialogModule,
        RouterModule, // Add RouterModule here
        TasksRoutingModule
    ],exports:[
        TasksComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskEditComponent,
    ]
})
export class TasksModule {}
