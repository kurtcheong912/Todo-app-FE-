import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskEditComponent } from "./tasks/task-edit/task-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/task', pathMatch: 'full' },

    {
        path: 'task', component: TasksComponent, children: [
            { path: ':data/edit', component: TaskEditComponent },
            { path: 'new', component: TaskEditComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}