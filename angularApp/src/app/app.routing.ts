import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'user', loadChildren:'./modules/auth/user.module#UserModule'},
    { path: 'users', loadChildren:'./modules/users/users.module#UsersModule', canLoad: [AuthGuardService]},
    // What is the difference between canLoad and canActivate?
    // Is canLoad the right thing to use here?
]