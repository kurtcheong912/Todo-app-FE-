import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

import { MaterialModule } from './shared/material.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthConfig, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './auth/auth-interceptor.service';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:8081/realms/TO-DO-APP',
  tokenEndpoint: 'http://localhost:8081/realms/TO-DO-APP/protocol/openid-connect/token',
  redirectUri: window.location.origin,
  clientId: 'Todo-App',
  responseType: 'code',
  scope: 'openid profile',
  showDebugInformation: true,
};

export function initializeOAuth(oauthService: OAuthService): () => Promise<void> {
  return () => {
    oauthService.configure(authCodeFlowConfig);
    oauthService.setupAutomaticSilentRefresh();
    return oauthService.loadDiscoveryDocumentAndLogin().then(() => {});
  };
}
@NgModule({
  declarations: [
    AppComponent,

    TasksComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync(), provideNativeDateAdapter(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    OAuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeOAuth,
      multi: true,
      deps: [OAuthService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
