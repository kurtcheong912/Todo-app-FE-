import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/task', pathMatch: 'full' },

    {
        path: 'task', component: TasksComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}