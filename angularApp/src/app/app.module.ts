import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { HomePageComponent } from './home/homepage.component'
import { AuthService } from './user/shared/auth.service';
import { PeopleListComponent } from './people/people-list.component';
import { PeopleService } from './people/shared/people.service';
import { PeopleListResolver } from './people/shared/people-list.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    PeopleListComponent
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
