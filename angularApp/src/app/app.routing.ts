import { Routes } from '@angular/router';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';

export const appRoutes: Routes = [
    { path: 'home', loadChildren: './modules/core/core.module#CoreModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
    { path: 'users', loadChildren: './modules/users/users.module#UsersModule', canLoad: [AuthGuardService] },
];
