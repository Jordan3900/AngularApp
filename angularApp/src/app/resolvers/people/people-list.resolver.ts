import { ActivatedRouteSnapshot, CanActivate, Router, Resolve } from "@angular/router"
import { Injectable } from "@angular/core"
import { map } from 'rxjs/operators'
import { PeopleService } from "src/app/modules/people/services/people/people.service";



@Injectable()
export class PeopleListResolver implements Resolve<any> { 
  constructor(private peopleService:PeopleService) {

  }

  resolve() {
    return this.peopleService.getPeople();
  }
}