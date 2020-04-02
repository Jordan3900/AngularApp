import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { AuthGuardService } from './modules/users/services/auth-guard/auth-guard.service';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'user', loadChildren: './modules/auth/user.module#AuthModule'},
    { path: 'users', loadChildren: './modules/users/users.module#UsersModule', canLoad: [AuthGuardService]},
];
