import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./tasks.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', component: TasksComponent},
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class TasksRoutingModule {

}