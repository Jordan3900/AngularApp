import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPeople } from '../models/people.model';

@Injectable()
export class PeopleState {

    private updating = new BehaviorSubject<boolean>(false);
    private people = new BehaviorSubject<IPeople[]>(null);
  
    isUpdating() {
      return this.updating.asObservable();
    }
  
    setUpdating(isUpdating: boolean) {
      this.updating.next(isUpdating);
    }
  
    getPeople() {
      return this.people.asObservable();
    }

    setPeople(people: IPeople[]) {
      this.people.next(people);
    }
}
