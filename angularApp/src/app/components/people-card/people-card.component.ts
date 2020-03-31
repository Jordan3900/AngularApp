import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/pages/people/model/people.model';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {
  people: IPeople
  
  constructor() { }

  ngOnInit() {
  }

}
