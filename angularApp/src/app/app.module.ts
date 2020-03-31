import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { AuthService } from './services/auth/auth.service';
import { PeopleService } from './services/people/people.service';
import { PeopleListResolver } from './resolvers/people/people-list.resolver';
import { HomeComponent } from './pages/home/home.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { PeopleComponent } from './pages/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    PeopleCardComponent,
    PeopleComponent,
    NavigationBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService, PeopleService, PeopleListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
