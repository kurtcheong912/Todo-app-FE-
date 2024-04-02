import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
    { path: 'unauthorized', component:UnauthorizedComponent}
];

export default appRoutes;


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}