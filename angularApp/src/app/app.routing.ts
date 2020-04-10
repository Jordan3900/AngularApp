import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
    { path: 'users', loadChildren: './modules/users/users.module#UsersModule', canLoad: [AuthGuardService]},
];
