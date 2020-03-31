import { Injectable } from "@angular/core";
import { PeopleService } from "./services/people/people.service";
import { Observable } from "rxjs";
import { PeopleState } from "./state/people.state";
import { tap } from "rxjs/operators";

@Injectable()
export class PeopleFacade {
    constructor(private peopleService: PeopleService, private peopleState: PeopleState) {

    }

    isUpdating(): Observable<boolean> {
        return this.peopleState.isUpdating();
    }

    loadPeople() {
        return this.peopleService.getPeople()
            .pipe(tap(people => this.peopleState.setPeople(people)));
    }
}