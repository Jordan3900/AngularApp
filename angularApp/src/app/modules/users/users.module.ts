import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UsersService } from './services/users/users.service';
import { usersRoutes } from './users.routes';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(usersRoutes),
        MatSliderModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,

    ],
    declarations: [
        UsersListComponent,
        UserCardComponent,
        UserDetailsComponent,
        UserEditComponent
    ],
    providers: [
        UsersService
    ]
})

export class UsersModule {

}
