import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPeople } from '../../models/people.model';
import { Observable } from 'rxjs';
import { PeopleFacade } from '../../people.facade';

@Component({
  selector: 'app-people',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  @Input() people: Observable<IPeople[]>;
  isUpdating: Observable<boolean>;

  constructor(private route: ActivatedRoute, private peopleFacade: PeopleFacade) {
    this.isUpdating = peopleFacade.isUpdating();
  }

  ngOnInit() {
    // this.people = this.route.snapshot.data['people'];
    this.people = this.peopleFacade.loadPeople();
    console.log(this.people)
  }


}
