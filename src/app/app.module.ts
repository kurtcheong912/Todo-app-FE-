import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

import { MaterialModule } from './shared/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {  OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { TasksModule } from './tasks/tasks.module';
import { initializeOAuth } from './auth/oauth-config';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    TasksModule,
    RouterModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>localStorage.getItem('access_token')
      }
    })
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