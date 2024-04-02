import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./tasks.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth/auth.guard";

const appRoutes: Routes = [
    {
        path: '', component: TasksComponent,
        canActivate: [AuthGuard], data: { requiredRole: ['User'] }
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class TasksRoutingModule {

}