import { Routes } from '@angular/router';
import { HomePageComponent } from './home/homepage.component';
import { PeopleListComponent } from './people/people-list.component';
import { PeopleListResolver } from './people/shared/people-list.resolver';


export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'people', component: PeopleListComponent, resolve: {people: PeopleListResolver} },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]