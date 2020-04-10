import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';
import { authRoutes } from './auth.routes';

// This is already in the auth folder, I think it must be renamed to AuthModule
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(authRoutes)
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
    ]
})

export class AuthModule {

}
