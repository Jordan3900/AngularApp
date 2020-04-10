import { Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginGuard } from './services/login-guard.service';
import { RegisterComponent } from './containers/register/register.component';

export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
];
