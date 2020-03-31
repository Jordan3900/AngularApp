import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { peopleRoutes } from './people.routes';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { PeopleListComponent } from './containers/people-list/people-list.component';
import { PeopleService } from './services/people/people.service';
import { PeopleState } from './state/people.state';
import { PeopleFacade } from './people.facade';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(peopleRoutes)
    ],
    declarations: [
        PeopleListComponent,
        PeopleCardComponent
    ],
    providers: [
      PeopleService, PeopleState, PeopleFacade
    ]
})

export class PeopleModule {

}