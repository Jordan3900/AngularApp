import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { AuthService } from './modules/auth/services/auth.service';
import { HomeComponent } from './modules/home/components/home.component';
import { NavigationBarComponent } from './modules/layout/components/navigation-bar/navigation-bar.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { HttpService } from './services/http/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuardService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
