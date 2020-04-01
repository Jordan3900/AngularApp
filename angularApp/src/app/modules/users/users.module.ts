import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UsersState } from './state/users.state';
import { UsersFacade } from './users.facade';
import { UsersService } from './services/users/users.service';
import { usersRoutes } from './users.routes';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(usersRoutes)
    ],
    declarations: [
        UsersListComponent,
        UserCardComponent
    ],
    providers: [
      UsersService, UsersState, UsersFacade
    ]
})

export class UsersModule {

}