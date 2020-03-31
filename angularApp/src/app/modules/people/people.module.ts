import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { peopleRoutes } from './people.routes';
import { PeopleService } from './services/people/people.service';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { PeopleListResolver } from 'src/app/resolvers/people/people-list.resolver';
import { PeopleComponent } from './containers/people/people.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(peopleRoutes)
    ],
    declarations: [
        PeopleComponent,
        PeopleCardComponent
    ],
    providers: [
        PeopleService, PeopleListResolver
    ]
})

export class PeopleModule {

}