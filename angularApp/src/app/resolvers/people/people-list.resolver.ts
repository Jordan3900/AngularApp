import { ActivatedRouteSnapshot, CanActivate, Router, Resolve } from "@angular/router"
import { Injectable } from "@angular/core"
import { PeopleService } from '../../services/people/people.service';
import { map } from 'rxjs/operators'


@Injectable()
export class PeopleListResolver implements Resolve<any> { 
  constructor(private peopleService:PeopleService) {

  }

  resolve() {
    return this.peopleService.getPeople();
  }
}