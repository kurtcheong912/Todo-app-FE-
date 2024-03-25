import { RouterModule, Routes } from "@angular/router";
import { FeatureTestComponent } from "./feature-test/feature-test.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', redirectTo: '/test', pathMatch: 'full' },
    { path: 'test', component: FeatureTestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}