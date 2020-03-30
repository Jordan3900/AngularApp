import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',

})

export class PeopleListComponent implements OnInit {
  people: any[];

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.people = this.route.snapshot.data['people'];
    console.log(this.people);
  }

}
