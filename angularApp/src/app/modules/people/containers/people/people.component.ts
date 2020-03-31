import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any[];

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.people = this.route.snapshot.data['people'];
  }


}
