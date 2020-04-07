import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { LoginGuard } from './services/login-guard.service';

export const userRoutes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
];
