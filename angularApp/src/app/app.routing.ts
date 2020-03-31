import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { PeopleListResolver } from './resolvers/people/people-list.resolver';
import { LoginComponent } from './pages/login/login.component';
import { PeopleComponent } from './pages/people/people.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'people', component: PeopleComponent, resolve: {people: PeopleListResolver} },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'user/login', component: LoginComponent }
]