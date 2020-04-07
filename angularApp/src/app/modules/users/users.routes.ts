import { Routes } from '@angular/router';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


export const usersRoutes: Routes = [
    { path: 'list', component: UsersListComponent },
    { path: 'details/:id', component: UserDetailsComponent },
    { path: 'edit/:id', component: UserEditComponent },
];
