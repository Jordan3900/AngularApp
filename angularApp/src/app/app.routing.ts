import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'user', loadChildren:'./modules/user/user.module#UserModule'},
    { path: 'people', loadChildren:'./modules/people/people.module#PeopleModule'},
]