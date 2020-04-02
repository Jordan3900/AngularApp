import { Routes } from '@angular/router';
import { UsersListComponent } from './containers/users-list/users-list.component';


// It is good practice to have routing modules instead of just constants
export const usersRoutes: Routes = [
    { path: 'list', component: UsersListComponent },
];
