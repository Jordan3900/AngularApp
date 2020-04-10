import { Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginGuard } from './services/login-guard.service';

export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
];
