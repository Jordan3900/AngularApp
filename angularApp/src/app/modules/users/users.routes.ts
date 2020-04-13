import { Routes } from '@angular/router';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserAddComponent } from './containers/user-add/user-add.component';

export const usersRoutes: Routes = [
    { path: 'list', component: UsersListComponent },
    { path: 'details/:id', component: UserDetailsComponent },
    { path: 'add', component: UserAddComponent },
];
