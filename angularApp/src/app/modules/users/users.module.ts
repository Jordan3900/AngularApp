import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { usersRoutes } from './users.routes';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserEditComponent } from './containers/user-edit/user-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UserFilterPipe } from 'src/app/pipes/user-filter.pipe';
import { UserAddComponent } from './containers/user-add/user-add.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(usersRoutes),
        MatSliderModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule
    ],
    declarations: [
        UsersListComponent,
        UserCardComponent,
        UserDetailsComponent,
        UserEditComponent,
        UserFilterPipe,
        UserAddComponent
    ],
    providers: [
    ]
})

export class UsersModule {

}
